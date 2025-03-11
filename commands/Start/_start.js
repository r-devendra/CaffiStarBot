/*CMD
  command: /start
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

let dataHandler = Libs.Webhooks.getUrlFor({
  command: "handleData",
  // it is personal for user
  user_id: user.id
})

const manifesta =  Bot.getProp("manifestFile");
const tonWall = Bot.getProp("myTonWallet");

if(!manifesta || !tonWall){
  Bot.sendMessage("First setup bot with `/setup` command");
  return; 
}

let url = WebApp.getUrl({
  command: "index",
  options: {
    handleData: dataHandler,
    botToken: bot.token,
    tonWallet: tonWall,
  }
});
Api.sendMessage({
  text: "Welcome, buy me a Coffee with Stars or TON",
  reply_markup: {inline_keyboard: [[{text:"buy me a caffi", web_app:{url: url}}]]}
})
