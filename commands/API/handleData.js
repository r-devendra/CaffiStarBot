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

// Define API methods relevant to the new system
const apiMethods = [
  "getDonations",       // Retrieve donation history
  "processDonation",    // Process a new donation
  "getPageData"         // Retrieve page data for the creator or public view
];

// Build URLs for API methods
const apiUrls = apiMethods.reduce((acc, method) => {
  acc[method] = Libs.Webhooks.getUrlFor({ 
    command: "webFunctionsHandler", 
    user_id: user.id, 
    options: { "method": method } 
  });
  return acc;
}, {});

// Instantiate managers
const donationManager = new DonationManager();
const pageManager = new PageManager();

// Get data for the current user (assuming user.telegramid is the Telegram ID)
let donations = donationManager.getDonations(); // Creator's donation history
let page = pageManager.getPage();   // Creator's page data

// Prepare result object
let result = {
  donations: donations.map(d => ({
    id: d._id,
    supporterTelegramId: d.supporterTelegramId,
    amount: d.amount,
    currency: d.currency, // "stars" or "ton"
    transactionId: d.transactionId,
    message: d.message,
    isAnonymous: d.isAnonymous,
    created_at: d.created_at
  })),
  page: page ? {
    name: page.name,
    bio: page.bio,
    cover: page.cover,
    avatar: page.avatar,
    description: page.description,
    color: page.color,
    backdrop: page.backdrop,
    totalRaised: page.totalRaised,
    supporterCount: page.supporterCount,
    supporters: page.supporters, // Full data for creator
    customUrl: page.customUrl,
  } : null,
  urls: apiUrls
};

// Send JSON response
WebApp.render({
  content: result,
  mime_type: "application/json"
});
