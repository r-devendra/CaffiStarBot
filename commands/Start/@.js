/*CMD
  command: @
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

class SupporterBase {
    constructor(config) {
        Object.assign(this, config);
    }

    setProp(key, value, type = "string") {
        // Assuming a persistent storage mechanism like Bot.setProperty
        Bot.setProperty(key, value, type);
        return true;
    }

    getProp(key, defaultValue = null) {
        const value = Bot.getProperty(key);
        return value !== undefined ? value : defaultValue;
    }
}

class PageManager extends SupporterBase {
    constructor() {
        super();
        this.pageId = "SINGLE_PAGE";
    }

    initializePage(config) {
        const existingPage = this.getPage();
        if (!existingPage) {
            const page = {
                _id: this.pageId,
                name: config.name || "Support Me",
                bio: config.bio || "Support my work!",
                cover: config.cover || null,
                avatar: config.avatar || null,
                description: config.description || "Thank you for your support!",
                color: config.color || "#ffffff",
                backdrop: config.backdrop || null,
                status: "active",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                supporters: []
            };
            this.setProp(`Page:${this.pageId}`, page, "json");
            return { success: true, page };
        }
        return { success: false, message: "Page already initialized" };
    }

    updatePage(updates) {
        let page = this.getPage();
        if (!page) return { error: "Page not found" };

        Object.assign(page, updates, { updated_at: new Date().toISOString() });
        this.setProp(`Page:${this.pageId}`, page, "json");
        return { success: true, page };
    }

    getPage() {
        return this.getProp(`Page:${this.pageId}`);
    }

    getPublicPageData() {
        const page = this.getPage();
        if (!page || page.status !== "active") return { error: "Page not found" };

        const publicSupporters = page.supporters.map(supporter => ({
            amount: supporter.amount,
            currency: supporter.currency,
            message: supporter.message,
            joined_at: supporter.joined_at,
            telegramId: supporter.isAnonymous ? "anonymous" : supporter.telegramId
        }));

        return {
            name: page.name,
            bio: page.bio,
            cover: page.cover,
            avatar: page.avatar,
            description: page.description,
            color: page.color,
            backdrop: page.backdrop,
            supporters: publicSupporters,
        };
    }

    addSupporter(supporterTelegramId, supporterData = {}) {
        let page = this.getPage();
        if (!page) return { error: "Page not found" };

        const supporterEntry = {
            telegramId: supporterTelegramId,
            amount: supporterData.amount || 0,
            currency: supporterData.currency || "unknown",
            message: supporterData.message || "",
            isAnonymous: supporterData.isAnonymous || false,
            joined_at: new Date().toISOString()
        };

        const existingSupporterIndex = page.supporters.findIndex(s => s.telegramId === supporterTelegramId);
        if (existingSupporterIndex === -1) {
            page.supporters.push(supporterEntry);
            page.supporterCount = page.supporters.length;
        } else {
            page.supporters[existingSupporterIndex] = {
                ...page.supporters[existingSupporterIndex],
                amount: page.supporters[existingSupporterIndex].amount + supporterEntry.amount,
                currency: supporterEntry.currency,
                message: supporterEntry.message || page.supporters[existingSupporterIndex].message,
                isAnonymous: supporterEntry.isAnonymous
            };
        }

        const convertedAmount = this.convertToBaseCurrency(supporterEntry.amount, supporterEntry.currency);
        page.totalRaised += convertedAmount;
        if (page.goal) page.goal.current += convertedAmount;

        this.setProp(`Page:${this.pageId}`, page, "json");
        return { success: true, supporter: supporterEntry };
    }

    convertToBaseCurrency(amount, currency) {
        const rates = {
            stars: 0.006, // 1 Star = 0.006 $
            ton: 3    // 1 TON = 3 $ (hypothetical)
        };
        return amount * (rates[currency] || 1);
    }
}

class DonationManager extends SupporterBase {
    generateDonationId() {
        return `DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }

    processDonation({
        supporterTelegramId,
        amount,
        paymentMethod,
        transactionId,
        message = "",
        isAnonymous = false
    }) {
        const pageId = "SINGLE_PAGE";
        const page = new PageManager().getPage();
        if (!page || page.status !== "active") {
            throw new Error("Invalid or inactive page");
        }
        if (!["stars", "ton"].includes(paymentMethod)) {
            throw new Error("Payment method must be 'stars' or 'ton'");
        }

        const donationId = this.generateDonationId();
        const donation = {
            _id: donationId,
            pageId,
            supporterTelegramId: supporterTelegramId || "anonymous",
            amount,
            currency: paymentMethod,
            transactionId,
            message,
            isAnonymous,
            status: "completed",
            created_at: new Date().toISOString()
        };

        this.setProp(`Donation:${donationId}`, donation, "json");

        let pageDonations = this.getProp(`PageDonations:${pageId}`, []);
        pageDonations.push(donationId);
        this.setProp(`PageDonations:${pageId}`, pageDonations, "json");

        new PageManager().addSupporter(supporterTelegramId, {
            amount,
            currency: paymentMethod,
            message,
            isAnonymous
        });

        return { id: donationId, transactionId };
    }

    getDonations() {
        const pageId = "SINGLE_PAGE";
        const donationIds = this.getProp(`PageDonations:${pageId}`, []);
        return donationIds.map(donationId => this.getProp(`Donation:${donationId}`));
    }

    getSupporterHistory(supporterTelegramId) {
        const pageId = "SINGLE_PAGE";
        const pageDonations = this.getProp(`PageDonations:${pageId}`, []);
        return pageDonations
            .map(donationId => this.getProp(`Donation:${donationId}`))
            .filter(d => d.supporterTelegramId === supporterTelegramId);
    }

    getDailyReport() {
        const donations = this.getDonations();
        const today = new Date().toISOString().slice(0, 10);
        let totalStars = 0;
        let totalTon = 0;
        let count = 0;

        for (const donation of donations) {
            if (donation.created_at.slice(0, 10) === today && donation.status === "completed") {
                if (donation.currency === "stars") totalStars += donation.amount;
                if (donation.currency === "ton") totalTon += donation.amount;
                count += 1;
            }
        }

        const pageManager = new PageManager();
        const totalUsd = pageManager.convertToBaseCurrency(totalStars, "stars") + 
                         pageManager.convertToBaseCurrency(totalTon, "ton");

        return `📊 Today's Donations: ${count} supporters, ${totalStars} Stars, ${totalTon} TON ($${totalUsd.toFixed(2)})`;
    }
}
