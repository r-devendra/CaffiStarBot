/*CMD
  command: webFunctionsHandler
  help: 
  need_reply: 
  auto_retry_time: 
  folder: API
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Only allow POST requests
if (options.method !== "POST") {
  WebApp.render({
    content: { error: "Method not allowed. Use POST." },
    mime_type: "application/json"
  });
  return;
}

// Instantiate managers
const pageManager = new PageManager();
const donationManager = new DonationManager();

// Map of available methods to their respective managers
const methodMap = {
  getDonations: donationManager,
  processDonation: donationManager,
  getPageData: pageManager
};

// Check if the requested method exists
const manager = methodMap[options.method];
if (!manager || typeof manager[options.method] !== "function") {
  WebApp.render({
    content: { error: "Invalid or unsupported method" },
    mime_type: "application/json"
  });
  return;
}

// Execute the method with provided params
let result;
try {
  result = manager[options.method](options.params);
} catch (error) {
  WebApp.render({
    content: { error: error.message },
    mime_type: "application/json"
  });
  return;
}

// Render result as JSON
WebApp.render({
  content: result,
  mime_type: "application/json"
});
