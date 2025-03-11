/*CMD
  command: /setup
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

if(content){
    Bot.sendMessage("✅ Configuration successfully! Page Created!"); 
   return; 
}

Bot.setProp("myTonWallet", "UQDmyGOVI5ecxh8oZYrKQZ9hhTqzeaLFmnnLLtkuE9Q9flg6") //update ton wallet address for receiving the funds

let url = Libs.Webhooks.getUrlFor({command: "manifestFile"});
Bot.setProp("manifestFile", url);

const pageManager = new PageManager();
// Define your page configuration
const pageConfig = {
    name: "devendra",
    bio: "I'm fullstack developer!",
    avatar: "https://i.ibb.co/wF1p77Bn/cbb39453-fd3c-40d6-a3a4-ddba7e7b4bae.png", //your avatar here
    cover: "https://example.com/cover.jpg", // cover image url here
};

// Initialize the page
const result = pageManager.initializePage(pageConfig);

Bot.sendMessage("Page initialized!");

url = `https://api.telegram.org/bot${bot.token}/setChatMenuButton`;

let dataHandler = Libs.Webhooks.getUrlFor({
  command: "handleData",
})
let menuButtonUrl = WebApp.getUrl({
  command: "index",
  options: {
    handleData: dataHandler,
    botToken: bot.token
  }
});
let button = {
  menu_button: {
    type: "web_app",  
    text: "Get me Caffi", 
    web_app: { url: menuButtonUrl }
  }
};

// Send the request
HTTP.post({
  url: url,
  body: button,
  success: "/setup"
});

