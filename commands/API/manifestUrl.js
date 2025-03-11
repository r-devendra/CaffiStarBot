/*CMD
  command: manifestUrl
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

let result = {
  "url": "https://caffistarbot.t.me",
  "name": "CaffiStar",
  "iconUrl": "https://projectoid.in/assets/img/p-letter-green.png",
}
WebApp.render({
  content: result,
  mime_type: "application/json",
});
