/*CMD
  command: /xyz
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let url = Libs.Webhooks.getUrlFor({command: "manifestFile"});
Bot.setProp("manifestFile", url);
