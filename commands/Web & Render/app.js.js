/*CMD
  command: app.js
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

const { createApp } = Vue;

createApp({
    data() {
        return {
            selectedMethod: 'stars',
            connectedWallet: null,
            patreon: {
                name: 'Your Name', // Replace with your actual name
                bio: 'Your bio here...', // Replace with your actual bio
                avatar: 'https://i.ibb.co/wF1p77Bn/cbb39453-fd3c-40d6-a3a4-ddba7e7b4bae.png',
                cover: 'https://cdn.jsdelivr.net/gh/tonlabs/ton-labs-design-kit@main/covers/ton-cover-1.svg',
                backdrop: '', // Optional backdrop svg
                supporters: [],
            }, // Array of supporter objects
            user:{
                name: 'Donor', // Replace with your actual name
                avatar: 'https://i.ibb.co/wF1p77Bn/cbb39453-fd3c-40d6-a3a4-ddba7e7b4bae.png',
            },
            donationAmount: 50, // Default donation amount
            donationAmountTon: 1,
            donationMessage: '',
            isAnonymous: false,
            walletConnectionStatus: 'disconnected', // Wallet connection status: 'connected', 'disconnected', 'connecting', 'error'
            isProcessing: false, // Disable buttons during payment
            wallet: null, //user wallet data
            coverColors:[
                "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
                "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)",
                "linear-gradient(135deg, hsla(10, 82%, 65%, 1) 0%, rgb(127, 39, 143) 100%)",
            ],
            backdrops: [
                '<svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z"/></svg>',
                
            ],
            loadUrl: new URL(window.location.href).searchParams.get("handleData"),
            botToken: new URL(window.location.href).searchParams.get("botToken") ,
            tonWallet: new URL(window.location.href).searchParams.get("tonWallet") ,
            apiUrls: {},
        };
    },
    mounted() {
        console.log(tonConnectUI)
        this.initTONConnect();
        let coverColor = this.coverColors[Math.floor(Math.random() * this.coverColors.length)];
        document.documentElement.style.setProperty('--cover-color', coverColor);


        let tg = window.Telegram.WebApp;
        tg?.expand();
        // tg?.requestFullscreen();

    },
    methods: {
        initTelegram() {
            const tg = window.Telegram.WebApp;
            const initData = tg.initDataUnsafe || {};
            
            // Update user object with Telegram data
            this.user = {
                id: initData.user?.id || null,
                name: initData.user?.username || initData.user?.first_name || 'Donor',
                first_name: initData.user?.first_name || '',
                last_name: initData.user?.last_name || '',
                avatar: initData.user?.photo_url || 'https://i.ibb.co/wF1p77Bn/cbb39453-fd3c-40d6-a3a4-ddba7e7b4bae.png'
            };

        },
        
        selectMethod(method) {
          this.selectedMethod = method
        },
        switchProfile(anon) {
            this.isAnonymous = !anon;
            document.querySelector('.support-as button').blur();
        },
        async initTONConnect() {
            try {
                console.log('[TON Connect] Initializing...');
                if (!tonConnectUI) {
                    throw new Error('TON Connect UI not found!');
                }

                const wasConnected = await tonConnectUI.connectionRestored;
                console.log('[TON Connect] Connection restored:', wasConnected);

                if (wasConnected) {
                    this.wallet = tonConnectUI.walletInfo;
                    this.connectedWallet = tonConnectUI.account?.address || null;
                    this.walletConnectionStatus = 'connected';
                    console.log('[TON Connect] Connected to:', this.connectedWallet);
                } else {
                    console.log('[TON Connect] No previous connection found.');
                }
            } catch (error) {
                console.error('[TON Connect] Initialization failed:', error);
                this.walletConnectionStatus = 'error';
            }
        },
        async connectWallet() {
            try {
                if (this.walletConnectionStatus === 'connected') return true;

                console.log('[TON Connect] Connecting wallet...');
                this.walletConnectionStatus = 'connecting';

                const connectedWallet = await tonConnectUI.connectWallet();
                if (!connectedWallet) throw new Error('Wallet connection failed!');

                console.log('[TON Connect] Wallet connected:', connectedWallet);
                this.connectedWallet = connectedWallet.account?.address || null;
                this.walletConnectionStatus = 'connected';

                return true;
            } catch (error) {
                console.error('[TON Connect] Wallet connection failed:', error);
                this.walletConnectionStatus = 'disconnected';
                alert('Failed to connect wallet: ' + error.message);
                return false;
            }
        },
        async disconnectWallet() {
            try {
                if (!tonConnectUI) {
                    console.warn('[TON Connect] No wallet connected.');
                    return;
                }

                console.log('[TON Connect] Disconnecting wallet...');
                await tonConnectUI.disconnect();

                this.wallet = null;
                this.connectedWallet = null;
                this.walletConnectionStatus = 'disconnected';
                console.log('[TON Connect] Wallet disconnected.');
            } catch (error) {
                console.error('[TON Connect] Wallet disconnection failed:', error);
                alert('Failed to disconnect wallet');
            }
        },
        async payWithTON() {
            this.isProcessing = true;
            try {
                if (!this.wallet) {
                    const connected = await this.connectWallet();
                    if (!connected) throw new Error('Please connect your wallet first');
                }
                const amountInNanotons = Math.floor(this.donationAmountTon * 1e9).toString();
                const payload = this.donationMessage ? btoa(this.donationMessage) : undefined;
                const transaction = {
                    validUntil: Math.floor(Date.now() / 1000) + 300,
                    messages: [{
                        address: this.tonWallet,
                        amount: amountInNanotons,
                        payload: payload
                    }]
                };
                console.log('[TON Connect] Sending transaction:', transaction);
                const result = await tonConnectUI.sendTransaction(transaction);
                if (result) {
                    const transactionId = result.boc || Date.now().toString(); // Use boc if available, else timestamp
                    await this._makePostRequest('processDonation', {
                        creatorTelegramId: this.patreon.telegramId || '123456789',
                        supporterTelegramId: this.user.id || 'anonymous',
                        name: this.user.name || 'Anonymous',
                        avatar: this.user.avatar || null,
                        amount: this.donationAmountTon,
                        paymentMethod: 'ton',
                        transactionId: transactionId,
                        message: this.donationMessage,
                        isAnonymous: this.isAnonymous
                    }, (data) => {
                        if (data.success) {
                            const newSupporter = {
                                id: Date.now(),
                                name: this.isAnonymous ? 'Anonymous' : this.user.first_name,
                                amount: this.donationAmountTon,
                                currency: 'TON',
                                isAnonymous: this.isAnonymous,
                                message: this.donationMessage
                            };
                            this.patreon.supporters.push(newSupporter);
                            this.donationMessage = '';
                            this.isAnonymous = false;
                            alert('Donation successful!');
                        } else {
                            alert('Failed to record donation: ' + (data.error || 'Unknown error'));
                        }
                    });
                }
            } catch (error) {
                console.error('[TON Connect] TON Payment Error:', error);
                if (error.code === 4001) {
                    alert('Transaction rejected by user');
                } else {
                    alert('Payment failed: ' + (error.message || 'Unknown error'));
                }
            } finally {
                this.isProcessing = false;
            }
        },
        async payWithStars() {
            this.isProcessing = true;
            try {
                const botToken = this.botToken; // Replace with your actual bot token
                const amount = this.donationAmount;
                const description = this.donationMessage || `Donation to ${this.patreon.name}`;
                const response = await fetch(`https://api.telegram.org/bot${botToken}/createInvoiceLink`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: 'Donation',
                        description: description,
                        payload: 'donation_' + Date.now(),
                        currency: 'XTR',
                        prices: [{ label: 'Donation', amount: amount }]
                    }),
                });
                const data = await response.json();
                if (!data.ok) throw new Error('Failed to create invoice: ' + (data.description || 'Unknown error'));
                const invoiceLink = data.result;
                const tg = window.Telegram.WebApp;
                if (!tg) throw new Error('Telegram Web App not available');
                tg.openInvoice(invoiceLink, async (status) => {
                    if (status === 'paid') {
                        await this._makePostRequest('processDonation', {
                            creatorTelegramId: this.patreon.telegramId || '123456789',
                            supporterTelegramId: this.user.id || 'anonymous',
                            name: this.user.name || 'Anonymous',
                            avatar: this.user.avatar || null,
                            amount: this.donationAmount,
                            paymentMethod: 'stars',
                            transactionId: 'stars_' + Date.now(), // Placeholder, replace with actual transaction ID if available
                            message: this.donationMessage,
                            isAnonymous: this.isAnonymous
                        }, (data) => {
                            if (data.success) {
                                const newSupporter = {
                                    id: Date.now(),
                                    name: this.isAnonymous ? 'Anonymous' : this.user.name,
                                    amount: this.donationAmount,
                                    currency: 'Stars',
                                    isAnonymous: this.isAnonymous,
                                    message: this.donationMessage
                                };
                                this.patreon.supporters.push(newSupporter);
                                this.donationMessage = '';
                                this.isAnonymous = false;
                                alert('Donation successful!');
                            } else {
                                alert('Failed to record donation: ' + (data.error || 'Unknown error'));
                            }
                        });
                    } else if (status === 'failed') {
                        alert('Payment failed');
                    }
                });
            } catch (error) {
                console.error('[Telegram Stars] Payment Error:', error);
                alert('Payment failed: ' + (error.message || 'Unknown error'));
            } finally {
                this.isProcessing = false;
            }
        },
        submitDonation() {
            if (this.selectedMethod === 'ton') {
                this.payWithTON();
            } else {
                this.payWithStars();
            }
        },


        loadUserData() {
            fetch(this.loadUrl)
                .then(response => response.json())
                .then(data => {
                    console.log('data:'+data); // for debug
                    
                    if (data.page) {
                        this.patreon = { ...this.patreon, ...data.page };
                    }
                    
                    if (data.urls) {
                        this.apiUrls = data.urls;
                    }
                })
                .catch(error => {
                    console.error('Error loading data:', error);
                });
        },
        async _makePostRequest(command, params, callback){
            fetch(this.apiUrls[command], {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(params)
            })
            .then(response => {
              console.log('Response received:', response);
              return response.json();
            })
            .then((data) => {
              console.log('Command posted:', command + '. Response:', data);
              if(data.error){
                alert(data.error);
                return;
              }
              if(!data.success && data.status!=200){
                alert('Please try again later!')
                console.warn('Error:', data);
                return;
              }
              if(callback){ callback(data) }
            }).catch((error) => {
              console.error('Error:', error);
              alert('Error: ' + error.message);
            });
          }

    },
}).mount('#app');


