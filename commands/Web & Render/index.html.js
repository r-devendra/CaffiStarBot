/*CMD
  command: index.html
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caffi star</title>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
    <script src="https://www.unpkg.com/web-animations-js@latest/web-animations.min.js"></script>

    <script src="https://unpkg.com/@ton/ton"></script>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
<link rel="stylesheet" href="<%options.appCSS%>">
</head>
<body>
    <div id="app" class="container">

        <div class="donation-page">
            <header>    
                <span>
                    <span class="logo">
                        <img src="https://i.ibb.co/8L3b2cvn/Top-Stories-72x72-1.png" alt="logo">
                    </span>
                    <span class="name">
                        CaffiStar
                    </span>
                </span>
            </header>
            <div class="cover">
                <!-- <img src="img/cover.jpg" alt=""> -->

                
            <div class="profile">
                <img :src="patreon.avatar" id="avatar" alt="User Avatar">
            </div>
            </div>
            <div class="page-body">
                
                <div class="donate card">
                    <h2>Donate to {{ patreon.name }}</h2>
                    <form @submit.prevent="submitDonation">
                        <div class="payment-options">
                            <div class="method-slider">
                                                        
                                <button type="button" @click="selectMethod('stars')" :class="{ active: selectedMethod === 'stars' }">
                                  <svg class="icon icon-telegram-stars mono" xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 20 21' fill='none'><path d='M5.80458 18.0037L9.55559 15.7055C9.82141 15.5427 10.1551 15.5427 10.4209 15.7055L14.2022 18.022C14.3898 18.137 14.6149 18.1721 14.8289 18.121C15.2735 18.0141 15.5473 17.567 15.4403 17.1224L14.4034 12.8166C14.3308 12.5133 14.4345 12.1948 14.6716 11.9928L18.0426 9.11909C18.2103 8.97621 18.3141 8.77265 18.3308 8.55313C18.3667 8.09733 18.0259 7.699 17.5701 7.66307L13.1493 7.31663C12.8388 7.29268 12.5682 7.09631 12.4493 6.80814L10.753 2.71389C10.6692 2.51113 10.5079 2.34988 10.3051 2.26607C9.88287 2.09125 9.39753 2.29161 9.22271 2.71389L7.52722 6.80814C7.40828 7.09631 7.13687 7.29268 6.82635 7.31663L2.43035 7.66068C2.20844 7.67824 2.00329 7.78361 1.8604 7.95444C1.56664 8.30487 1.61214 8.82773 1.96258 9.12149L3.40183 10.3269C4.12186 10.9303 5.07178 11.1866 5.99776 11.0261L10.5526 10.2375C10.7218 10.2079 10.8887 10.2941 10.9629 10.449C11.0547 10.6398 10.9741 10.8689 10.7833 10.9607L6.69144 12.9252C5.92432 13.294 5.35995 13.9837 5.15001 14.8083L4.56968 17.0937C4.5146 17.31 4.54972 17.5391 4.66627 17.7299C4.90495 18.1202 5.41424 18.2424 5.80458 18.0037Z'></path></svg>
                                  
                                  
                                </button>
                                <button type="button" @click="selectMethod('ton')" :class="{ active: selectedMethod === 'ton' }">
                                  <svg class="icon icon-connect-ton" height='18' viewBox='0 0 17 17' width='17' xmlns='http://www.w3.org/2000/svg'><g fill='none' stroke='#fff' stroke-width='1.7'><path d='m1.84 3h13.3c.28 0 .5.22.5.5 0 .09-.02.17-.06.25l-6.33 11.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/><path d='m8.5 15v-12'/></g></svg>                                    
                                  
                                </button>
                                <span class="sliding-element"></span>
                              </div>
                        </div>
                        <div>
                    
                            
                            <div class="amount" v-show="selectedMethod === 'stars'">
                                <i class="icon icon-telegram-stars" style="width: 22px; height: 20px;">
                                    <svg height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><defs><path id='a' d='m6.02 4.99 2.21-4.42c.25-.51.86-.72 1.37-.46.2.1.36.27.46.47l2.08 4.26c.17.34.5.58.88.63l4.36.52c.59.08 1.02.62.95 1.22-.03.24-.14.47-.32.65l-3.45 3.42c-.14.13-.2.33-.18.53l.57 4.61c.09.66-.38 1.27-1.03 1.35-.25.03-.5-.02-.72-.14l-3.64-2c-.26-.14-.58-.15-.85-.01l-3.77 1.95c-.53.27-1.18.06-1.45-.48-.11-.2-.14-.43-.11-.65l.3-2.12c.15-1.04.79-1.93 1.71-2.41l4.19-2.15c.11-.06.15-.2.1-.31-.05-.09-.14-.14-.24-.12l-5.12.74c-.78.11-1.58-.11-2.19-.62l-1.71-1.4c-.49-.4-.56-1.12-.17-1.62.19-.22.45-.37.74-.41l4.38-.57c.28-.03.52-.21.65-.46z'/><linearGradient id='b' x='25%' x2='74.92%' y1='.825%' y2='107.86%'><stop offset='0' stop-color='#ffd951'/><stop offset='1' stop-color='#ffb222'/></linearGradient><linearGradient id='c' x1='50%' x2='50%' y1='0%' y2='99.8%'><stop offset='0' stop-color='#e58f0d'/><stop offset='.9996' stop-color='#eb7915'/></linearGradient><filter id='d' height='110.6%' width='110.3%' x='-5.2%' y='-5.3%'><feOffset dx='1' dy='1' in='SourceAlpha' result='shadowOffsetInner1'/><feComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/><feColorMatrix in='shadowInnerInner1' type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.657 0'/></filter></defs><g fill='none' fill-rule='evenodd' transform='translate(1.389 1.389)'><use fill='url(#b)' fill-rule='evenodd' xlink:href='#a'/><use fill='#000' filter='url(#d)' xlink:href='#a'/><use stroke='url(#c)' stroke-width='.89' xlink:href='#a'/></g></svg>
                                </i>
                                <div class="preset-amounts">
                                  <button 
                                    v-for="amount in [50, 100, 200,  500]" 
                                    :key="amount" 
                                    @click="donationAmount = amount" 
                                    :class="{ active: donationAmount === amount }"
                                  >
                                    {{ amount }}
                                  </button>
                                </div>
                                <div class="custom-amount">
                                  <input 
                                    type="number" 
                                    v-model="donationAmount" 
                                    placeholder="Other amount" 
                                    min="50" 
                                    max="500"
                                  />
                                </div>
                              </div>
                              <div class="amount" v-show="selectedMethod === 'ton'">
                                <i class="icon icon-connect-ton" style="width: 22px; height: 20px;">
                                    <svg height='18' viewBox='0 0 17 17' width='17' xmlns='http://www.w3.org/2000/svg'><g fill='none' stroke='#fff' stroke-width='1.7'><path d='m1.84 3h13.3c.28 0 .5.22.5.5 0 .09-.02.17-.06.25l-6.33 11.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/><path d='m8.5 15v-12'/></g></svg>                                    
                                </i>
                                      
                                <div class="preset-amounts">
                                  <button 
                                    v-for="amount in [1, 3, 5, 10]" 
                                    :key="amount" 
                                    @click="donationAmountTon = amount" 
                                    :class="{ active: donationAmountTon === amount }"
                                  >
                                    {{ amount }}
                                  </button>
                                </div>
                                <div class="custom-amount">
                                  <input 
                                    type="number" 
                                    v-model="donationAmountTon" 
                                    placeholder="Other amount" 
                                    min="1" 
                                    max="100"
                                  />
                                </div>
                              </div>
                        </div>
                        <div>
                            <textarea 
                              v-model="donationMessage" 
                              id="msg" 
                              placeholder="Say something nice... (optional)" 
                              rows="4" 
                              maxlength="200" 
                              spellcheck="false"
                              optional
                            ></textarea>
                        </div>
                        <div>
                            <div class="support-as">
                                <span class="supporter-profile">
                                    <img :src="isAnonymous ? 'https://i.ibb.co/PzwCTYJP/isolated-young-handsome-man-set-different-poses-white-background-illustration-632498-649.jpg' : user.avatar">
                                    <span>{{ isAnonymous ? 'Anonymous' : user.name }}</span>
                                </span>
                                <button class="switch-profile" type="button" @click="switchProfile(isAnonymous)"> 
                                    
                                    <svg class="icon switch-icon" width="18px" height="18px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>switch-line</title><path d="M5.71,14H20.92V12H5.71L9.42,8.27A1,1,0,1,0,8,6.86L1.89,13,8,19.14a1,1,0,1,0,1.42-1.4Z" class="clr-i-outline clr-i-outline-path-1"></path><rect x="23" y="12" width="3" height="2" class="clr-i-outline clr-i-outline-path-2"></rect><rect x="28" y="12" width="2" height="2" class="clr-i-outline clr-i-outline-path-3"></rect><path d="M27.92,17.86a1,1,0,0,0-1.42,1.41L30.21,23H15v2H30.21L26.5,28.74a1,1,0,1,0,1.42,1.4L34,24Z" class="clr-i-outline clr-i-outline-path-4"></path><rect x="10" y="23" width="3" height="2" class="clr-i-outline clr-i-outline-path-5"></rect><rect x="6" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-6"></rect><rect x="0" y="0" width="36" height="36" fill-opacity="0"/></svg>
                                    Switch
                                </button>
                            </div>
                        </div>
                            
                        <div class="payment-options">
                            <!-- <div class="trial">
                                
                                <span style="font-size:14px;color:var(--text-secondary); padding:0 5px;">You are about to donate:</span>
                                <div class="method-slider">
                                    <button type="button" @click="selectMethod('stars')" :class="{ active: selectedMethod === 'stars' }">
                                      <svg class="icon icon-telegram-stars mono" xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 20 21' fill='none'><path d='M5.80458 18.0037L9.55559 15.7055C9.82141 15.5427 10.1551 15.5427 10.4209 15.7055L14.2022 18.022C14.3898 18.137 14.6149 18.1721 14.8289 18.121C15.2735 18.0141 15.5473 17.567 15.4403 17.1224L14.4034 12.8166C14.3308 12.5133 14.4345 12.1948 14.6716 11.9928L18.0426 9.11909C18.2103 8.97621 18.3141 8.77265 18.3308 8.55313C18.3667 8.09733 18.0259 7.699 17.5701 7.66307L13.1493 7.31663C12.8388 7.29268 12.5682 7.09631 12.4493 6.80814L10.753 2.71389C10.6692 2.51113 10.5079 2.34988 10.3051 2.26607C9.88287 2.09125 9.39753 2.29161 9.22271 2.71389L7.52722 6.80814C7.40828 7.09631 7.13687 7.29268 6.82635 7.31663L2.43035 7.66068C2.20844 7.67824 2.00329 7.78361 1.8604 7.95444C1.56664 8.30487 1.61214 8.82773 1.96258 9.12149L3.40183 10.3269C4.12186 10.9303 5.07178 11.1866 5.99776 11.0261L10.5526 10.2375C10.7218 10.2079 10.8887 10.2941 10.9629 10.449C11.0547 10.6398 10.9741 10.8689 10.7833 10.9607L6.69144 12.9252C5.92432 13.294 5.35995 13.9837 5.15001 14.8083L4.56968 17.0937C4.5146 17.31 4.54972 17.5391 4.66627 17.7299C4.90495 18.1202 5.41424 18.2424 5.80458 18.0037Z'></path></svg>
                                      
                                      
                                    </button>
                                    <button type="button" @click="selectMethod('ton')" :class="{ active: selectedMethod === 'ton' }">
                                      <svg class="icon icon-connect-ton" height='18' viewBox='0 0 17 17' width='17' xmlns='http://www.w3.org/2000/svg'><g fill='none' stroke='#fff' stroke-width='1.7'><path d='m1.84 3h13.3c.28 0 .5.22.5.5 0 .09-.02.17-.06.25l-6.33 11.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/><path d='m8.5 15v-12'/></g></svg>                                    
                                      
                                    </button>
                                    <span class="sliding-element"></span>
                                  </div>
                            </div> -->
                                

                                
                                <div class="process-payment">
                                    <div v-show="selectedMethod === 'ton'">
                                        <button type="button" 
                                                @click="walletConnectionStatus === 'connected' ? payWithTON() : connectWallet()" 
                                                :disabled="isProcessing || walletConnectionStatus === 'connecting'">
                                            <span v-if="walletConnectionStatus === 'disconnected'">Connect TON Wallet</span>
                                            <span v-else-if="walletConnectionStatus === 'connecting'">Connecting...</span>
                                            <span v-else>Pay {{ donationAmountTon }} TON</span>
                                            <svg class="icon icon-connect-ton" style="margin-left:5px;" height='18' viewBox='0 0 17 17' width='17' xmlns='http://www.w3.org/2000/svg'>
                                                <g fill='none' stroke='#fff' stroke-width='1.7' >
                                                    <path d='m1.84 3h13.3c.28 0 .5.22.5.5 0 .09-.02.17-.06.25l-6.33 11.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/>
                                                    <path d='m8.5 15v-12'/>
                                                </g>
                                            </svg>
                                    
                                        </button>
                                        
                                        <div id="ton-connect"></div>
                                        <div v-show="connectedWallet" class="wallet-info">
                                            <span id="connectedWallet" v-show="connectedWallet">Wallet: 
                                                <a :href="'https://tonviewer.com/' + connectedWallet" target="_blank">
                                                    {{ connectedWallet?.slice(0, 6) + '...' + connectedWallet?.slice(-4) }}
                                                </a>
                                            </span>
                                            <span id="disconnect" 
                                                  @click="disconnectWallet()" 
                                                  style="color: red; cursor: pointer; margin-left: 10px;">
                                                Disconnect
                                            </span>
                                        </div>
                                    </div>
                                    <div v-show="selectedMethod === 'stars'">
                                        <button type="button" @click="payWithStars()" :disabled="isProcessing">
                                            Pay {{ donationAmount }} 
                                            <svg class="icon icon-telegram-stars mono" xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 20 21' fill='none'><path d='M5.80458 18.0037L9.55559 15.7055C9.82141 15.5427 10.1551 15.5427 10.4209 15.7055L14.2022 18.022C14.3898 18.137 14.6149 18.1721 14.8289 18.121C15.2735 18.0141 15.5473 17.567 15.4403 17.1224L14.4034 12.8166C14.3308 12.5133 14.4345 12.1948 14.6716 11.9928L18.0426 9.11909C18.2103 8.97621 18.3141 8.77265 18.3308 8.55313C18.3667 8.09733 18.0259 7.699 17.5701 7.66307L13.1493 7.31663C12.8388 7.29268 12.5682 7.09631 12.4493 6.80814L10.753 2.71389C10.6692 2.51113 10.5079 2.34988 10.3051 2.26607C9.88287 2.09125 9.39753 2.29161 9.22271 2.71389L7.52722 6.80814C7.40828 7.09631 7.13687 7.29268 6.82635 7.31663L2.43035 7.66068C2.20844 7.67824 2.00329 7.78361 1.8604 7.95444C1.56664 8.30487 1.61214 8.82773 1.96258 9.12149L3.40183 10.3269C4.12186 10.9303 5.07178 11.1866 5.99776 11.0261L10.5526 10.2375C10.7218 10.2079 10.8887 10.2941 10.9629 10.449C11.0547 10.6398 10.9741 10.8689 10.7833 10.9607L6.69144 12.9252C5.92432 13.294 5.35995 13.9837 5.15001 14.8083L4.56968 17.0937C4.5146 17.31 4.54972 17.5391 4.66627 17.7299C4.90495 18.1202 5.41424 18.2424 5.80458 18.0037Z'></path></svg>                                    
                                            
                                        </button>
                                    </div>
                                </div>
                              </div>
                    </form>
                </div>
                <div class="info card">
                    <div class="about">
                        <h2>About {{ patreon.name }}</h2>
                        <p v-if="patreon.bio" v-html="patreon.bio"></p>
                        <p v-else style="text-indent: 0;">No Info Available</p>
                        
                    </div>
                    <hr>
                    <div class="supporters">
                        <h2>Supporters yet:</h2>
                        <div v-if="supporters?.length">
                            <div v-for="supporter in supporters" :key="supporter.id" class="list" >
                                <div class="user-logo">
    
                                </div>
                                {{ supporter.name }}
                            </div>
                        </div>
                        <div v-else>
                            <p>No supporters yet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="credits">
                <div>
                    <h1>CaffiStar</h1>
                    <h2>In ❤️ with Coffee!</h2>
                </div>
                
                <p>Powered by <a href="https://caffistar.t.me" target="_blank">CaffiStar</a></p>
            </div>
        </div>
    </div>
<script>
        const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: "<%options.manifestUrl%>",
           // buttonRootId: 'ton-connect',

        }); 
        tonConnectUI.uiOptions = {
            twaReturnUrl: 'https://caffistar.t.me'
        };
</script>
    <script src="<%options.appJS%>"></script>
</body>
</html>
