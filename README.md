# CaffiStarBot: A Telegram Donation Platform
*Empower creators with seamless donations via Telegram Stars and TON cryptocurrency.*

**Contest Submission by:** [@devendra](https://t.me/devendra)  
**Demo Bot:** [@CaffiStarBot](https://t.me/CaffiStarBot)  
**Created On:** March 11, 2025

---

## 🚀 Project Overview

**CaffiStarBot** is an innovative Telegram bot that enables creators to receive donations from their supporters using Telegram Stars (XTR) or TON cryptocurrency. Built on Bots.Business platform, this project combines a sleek Vue.js-powered web app with a robust backend to provide a seamless donation experience. Whether you're a fan saying "thanks" with a coffee or a supporter backing a creator's next big idea, CaffiStarBot makes it simple, secure, and fun!

---

## ✨ Key Features

- **Dual Payment Options**: Donate using Telegram Stars or TON cryptocurrency, catering to both casual supporters and crypto enthusiasts.
- **Anonymous Donations**: Supporters can choose to stay anonymous, ensuring privacy when desired.
- **Real-Time Updates**: Donation history and supporter lists update instantly, reflecting contributions as they happen.
- **TON Wallet Integration**: Seamless connection to TON wallets via TON Connect UI for secure crypto transactions.
- **Responsive Web App**: A Vue.js-based interface that works flawlessly within Telegram’s WebApp framework.
- **Persistent Data**: Donation and page data are stored reliably using the bot platform’s property system.

---

## 🛠️ How It Works

1. **Setup**: Creators initialize their donation page using the `/setup` command (planned feature).
2. **Start Interaction**: Users interact with the bot via `/start`, launching a web app with a "Buy me a coffee" button.
3. **Donate**: Supporters choose their payment method (Stars or TON), enter an amount, and add an optional message.
4. **Process Payment**:
   - **Stars**: Processed via Telegram’s `createInvoiceLink` API.
   - **TON**: Handled through TON Connect UI with transactions sent to the creator’s wallet.
5. **Confirmation**: Donations are recorded, and the creator’s supporter list updates in real-time.

---

## 🎨 Tech Stack

- **Frontend**: Vue.js for a dynamic, responsive web app interface.
- **Payment Systems**:
  - Telegram Stars API for in-app purchases.
  - TON Connect UI for TON cryptocurrency transactions.

---

## 🌟 Why It’s Special

- **User-Friendly**: Designed for Telegram users, with no external apps required.
- **Creator-Focused**: Empowers Telegram creators to monetize their communities effortlessly.
- **Innovative**: Combines traditional in-app purchases (Stars) with cutting-edge blockchain payments (TON).
- **Scalable**: Built with modularity in mind, ready for future features like donation goals or analytics.

---

## 🔧 Installation & Setup (For Developers)

1. **Clone the Project**:
  Create a new bot on Bots.business app,
  go to tools tab, enter the following repository url:
   ```bash
   git@github.com:r-devendra/CaffiStarBot.git
   ```
   Hit Import from github
2. **Configure the Bot**: Deploy on a compatible Telegram bot maker platform.
3. **Set Up Commands**:
   - `/start`: Launches the web app.
   - `manifestData`: Holds the Image, Name and Url of Bot for Ton Wallets
   - `/setup`: Setups everything in place.
4. **Dependencies**: Vue.js, TON Connect UI and Telegram WebApp scripts are included in the web app via cdn.
5. **Test**: Use `@CaffiStarBot` to see it in action!

---

## 🎯 Future Enhancements

- **Multiple Creators Page**: Creators will be ableto create their own custom pages in future.
- **Donation Goals**: Let creators set fundraising targets.
- **Analytics Dashboard**: Provide creators with insights into their supporters and earnings.
- **Multi-Language Support**: Expand accessibility for global users.
- **Custom Themes**: Allow creators to personalize their donation pages further.

---

## 🤝 Try It Out!

Interact with the live demo at [@CaffiStarBot](https://t.me/CaffiStarBot). Send a small donation to see the magic happen—and maybe buy me a coffee while you’re at it! ☕

---

## 🙏 Acknowledgments

- Built with ❤️ by [@devendra](https://t.me/devendra).
- Inspired by the Telegram ecosystem and the TON blockchain community.
- Thanks to the contest organizers for the opportunity to showcase this project!

---

**CaffiStarBot** is more than a bot—it’s a bridge between creators and their supporters, brewed with innovation and a dash of caffeine. Let’s raise a cup to creativity! Cheers! ☕
