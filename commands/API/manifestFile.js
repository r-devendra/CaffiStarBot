/*CMD
  command: manifestFile
  help: 
  need_reply: 
  auto_retry_time: 
  folder: API
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let json = {
  "url": "https://caffistarbot.t.me",                        // required
  "name": "CaffiStar",                      // required
  "iconUrl": "https://projectoid.in/assets/img/p-letter-green.png",               // required
}
WebApp.render({
  content: json,
  mime_type: "application/json"
});
