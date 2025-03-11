/*CMD
  command: getPageData
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

let pageManager = new PageManager();
let result = pageManager.getPage();

// Render result
WebApp.render({
  content: result,
  mime_type: "application/json",
});
