/*CMD
  command: handleData
  help: 
  need_reply: false
  auto_retry_time: 
  folder: API

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Define API methods with their corresponding commands
const apiMethods = [
  "getDonations",    // Retrieve donation history
  "processDonation", // Process a new donation
  "getPageData",     // Retrieve page data
];

// Build URLs for API methods
const apiUrls = apiMethods.reduce((acc, method) => {
  acc[method] = Libs.Webhooks.getUrlFor({ command: method, user_id: user.id });
  return acc;
}, {});

// Instantiate managers
let donationManager = new DonationManager();
let pageManager = new PageManager();

// Get data for the current user
let donations = donationManager.getDonations();
let page = pageManager.getPage();

// Prepare result object
let result = {
  donations: donations.map((d) => ({
    id: d._id,
    supporterTelegramId: d.supporterTelegramId,
    amount: d.amount,
    currency: d.currency,
    transactionId: d.transactionId,
    message: d.message,
    isAnonymous: d.isAnonymous,
    created_at: d.created_at,
  })),
  page: page
    ? {
        name: page.name,
        bio: page.bio,
        cover: page.cover,
        avatar: page.avatar,
        description: page.description,
        color: page.color,
        backdrop: page.backdrop,
        totalRaised: page.totalRaised,
        supporterCount: page.supporterCount,
        supporters: page.supporters,
        customUrl: page.customUrl,
      }
    : null,
  urls: apiUrls,
};

// Render result
WebApp.render({
  content: result,
  mime_type: "application/json",
});
