/*CMD
  command: processDonation
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

// POST request only
if (options.method !== "POST") {
  WebApp.render({
    content: { error: "Method not allowed. Use POST." },
    mime_type: "application/json",
  });
  return;
}

let donationManager = new DonationManager();
let result;

try {
  result = donationManager.processDonation(options.params);
} catch (error) {
  result = { error: error.message };
}

// Render result
WebApp.render({
  content: result,
  mime_type: "application/json",
});
