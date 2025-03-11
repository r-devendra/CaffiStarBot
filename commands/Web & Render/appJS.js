/*CMD
  command: appJS
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Web & Render

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*/let template = "app";
if(params){

  template = params == ""
}*/

WebApp.render({
  template: "app.js",
  mime_type: "text/javascript"
})
