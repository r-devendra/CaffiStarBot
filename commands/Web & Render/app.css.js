/*CMD
  command: app.css
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

:root {
    /* Primary Colors */
    --primary-color: #4b8dc3;         /* Main action color (medium blue) */
    --primary-hover: #1a3d5b;         /* Hover state for primary (dark blue) */
    --primary-light: #a3d4e0;         /* Lighter variant (light blue) */
    --primary-transparent: #cfe7f2;   /* Transparent variant (very light blue) */

    /* Background Colors */
    --bg-color: #ffffff;              /* Main background (white) */
    --secondary-bg-color: #f7f7f7;    /* Secondary background (light gray) */
    --cover-color: #78b6e2;           /* Cover section background (bright blue) */
    --content-bg-color: #cfe7f2;      /* Main content background (very light blue) */

    /* Text Colors */
    --text-primary: #1a3d5b;          /* Main text color (dark blue) */
    --text-secondary: #4b8dc3;        /* Secondary text (medium blue) */
    --text-hint: #78b6e2;             /* Hint/supporting text (bright blue) */
    --text-white: #ffffff;            /* White text */
    --text-error: #ff0000;            /* Error states (red) */

    /* Border Colors */
    --border-primary: #4b8dc3;        /* Main border color (medium blue) */
    --border-secondary: #cccccc;      /* Light border color (gray) */
    --border-accent: #78b6e2;         /* Accent border color (bright blue) */
    --border-shadow: rgba(0, 0, 0, 0.1); /* Shadow border */

    /* Accent Colors */
    --accent-color: #78b6e2;          /* Highlight color (bright blue) */
    --accent-hover: #4b8dc3;          /* Accent hover state (medium blue) */

    /* Status Colors */
    --success-color: #4CAF50;         /* Success states (green) */
    --warning-color: #FFB300;         /* Warning states (yellow/orange) */
    --info-color: #2196F3;            /* Info states (blue) */

    /* Shadow Colors */
    --shadow-color: rgba(0, 0, 0, 0.1);  /* Default shadow */
    --shadow-hover: rgba(0, 0, 0, 0.2);  /* Hover shadow */

    /* Miscellaneous */
    --link-color: #78b6e2;            /* Link color (bright blue) */
    --link-hover: #4b8dc3;            /* Link hover color (medium blue) */
    --disabled-color: #cccccc;        /* Disabled states (gray) */
}
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html, body {
            height: 100%;
            width: 100%;
        }
        body {
            font-size: 16px;
            display: flex;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            font-size: 16px;
            line-height: 1.5;
            background: var(--content-bg-color);
        }
        
        header {
            width: 100%;
            height: 50px;
            position: fixed;
            background: var(--bg-color);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 20px;
            gap: 10px;
            background: transparent;
            z-index: 1;
            box-shadow:none;
        }
        header .logo img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
        }
        header .name {
            color: var(--text-primary);
            font-weight: 600;
            font-size: 20px;
            height: 30px;
            align-items: center;
            display: flex;
            justify-content: center;
            
        }
        header > span {
            display: flex;
            flex-direction: row;
            height: auto;
            width: auto;
            padding: 5px 10px;
            border-radius: 5px;
            position: absolute;
            top: 10px;
            left: 10px;
            background: white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

        }
        .donation-page {
            background: var(--cover-color);
            height: 100%;
            width: 100%;
            width: 100vw;
            align-items: center;
            justify-content: center;
            scroll-behavior: auto;
        }
        
        .donation-page .cover {
            width: 100%;
            height: 150px;
            background: var(--cover-color);
            border-radius: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .donation-page .page-body {
            height: 100%;
            background: var(--content-bg-color);
            border-radius: 15px 15px 0 0;
            display: grid;
            place-items: center;
            transform: translateY(-12px);
        }
        
        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;

            z-index:5;
        }
        
        .profile img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 12px;
        }
        
        @media (max-width: 500px) {
            .profile img {
                max-height: 80px;
                max-width: 80px;
                border-radius: 8px;
            }
            .profile h1 {
                font-size: 20px;
            }
        }
        
        .page-body .card {
            width: 90%;
            max-width: 400px;
            border: 1px solid var(--border-accent);
            border-radius: 15px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: var(--bg-color);
        }
        
        .page-body .card form {
            margin-top: 5px;
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 10px;
        }
        .page-body .card form > div:not(.payment-options) {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            gap: 5px;
            align-items: center;
            margin-bottom: 5px;
        }
        
        div input[type="number"], div textarea {
            padding: 5px;
            border-radius: 5px;
            border: 1px solid var(--border-secondary);
            width: 100%;
        }
        div input[type="number"] {
            width: 50px;
            text-align: center;
            max-width: 100px;
            border: none;
            border-bottom: 1px solid var(--border-primary);
            background-color: transparent;
            outline: none;
            cursor: pointer;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        div textarea {
            line-height: normal;
            height: 40px;
            overflow: auto;
            resize: none;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        div textarea:focus {
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
        
        .page-body .card label {
            color: var(--text-primary);
        }
        .page-body .card h2 {
            font-size: 20px;
            color: var(--text-primary);
        }
        
        /* Add this to your existing CSS */
        .amount {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            border: 1px solid var(--border-primary);
            background-color: var(--primary-transparent);
            border-radius: 5px;
            padding: 2px;
            gap: 15px;
            width: 100%;
            height: 40px;
        }
        
        .amount {
            display: flex;
            align-items: center;
        }
        
        .preset-amounts {
            display: flex;
            width: 60%;
            gap: 5px;
            justify-content: space-around;
        }
        
        .preset-amounts button {
            padding: 5px 10px;
            width:40px;
            border: none;
            border-radius: 5px;
            box-shadow: 0 0 5px var(--shadow-color);
            background-color: var(--secondary-bg-color);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .preset-amounts button.active {
            background-color: var(--primary-color);
            color: var(--text-white);
        }
        
        .input-box {
            width: 60px;
            padding: 5px;
            border: 1px solid var(--border-secondary);
            border-radius: 5px;
            text-align: center;
        }
        
        .support-as {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 10px;
        }
        .support-as .supporter-profile {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            padding: 5px 15px 5px 5px;
            transition: all .1s ease-in-out;
        }
        
        .support-as img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
        .support-as button {
            padding: 5px 10px;
            border: none;
            border-radius: 50px;
            transition: all .1s ease-in-out;
        }
        .support-as button:hover {
            cursor: pointer;
            background-color: var(--text-secondary);
            color: var(--text-white);
        }
        
        .card hr {
            width: 100%;
        }
        .user-logo {
            height: 25px;
            width: 25px;
            background-color: var(--primary-light);
            border-radius: 50%;
        }
        .list {
            display: flex;
            gap: 5px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .icon, .icon-after:after, .icon-before:before {
            display: inline-block;
            vertical-align: top;
            background-position: 0 center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        
        .icon-connect-ton {
            width: 16px;
            height: 16px;
            margin-right: 0;
            margin-left: -1px;
            margin-top: -2px;
        }
        .icon-connect-ton g {
            stroke: var(--text-white);
            transition: all 0.2s ease-in-out;
        }
        .preset-amounts .icon-connect-ton g {
            stroke: var(--text-primary);
            
            height: 16px;
            margin-top: -2px;
            margin-bottom: 0;
        }


        .icon-telegram-stars {
            height: 16px;
            margin-top: -2px;
            margin-bottom: 0;
        }
        .icon-telegram-stars.mono path {
            fill: var(--text-white);
            transition: all 0.2s ease-in-out;
        }
        .method-slider button:not(.active) .icon-telegram-stars path {
            fill: var(--text-primary);
        }
        .method-slider button:not(.active) .icon-connect-ton g {
            stroke: var(--text-primary);
        }
        
        .switch-icon {
            width: 20px;
            height: 14px;
            fill: var(--text-primary);
            transition: fill 0.1s ease-in-out;
        }
        .support-as button:is(:hover, :focus) .switch-icon {
            fill: var(--text-white);
        }
        
        .payment-options {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 5px;
            align-items: center;
            justify-content: center;
        }
        .method-slider {
            display: flex;
            position: relative;
            width: 30%;
            border-radius: 50px;
            border: 1px solid var(--border-primary);
            overflow: hidden;
            background-color: var(--primary-transparent);
            opacity: 0.7;
            font-size: 14px;
            align-self: center;
        }
        .method-slider:is(:hover, :focus) {
            opacity: 1;
        }
        .method-slider button {
            width: 50%;
            padding: 5px;
            border: none;
            background: transparent;
            cursor: pointer;
            position: relative;
            z-index: 1;
            transition: color 0.3s ease;
        }
        
        .method-slider button.active {
            color: var(--text-white);
        }
        
        .method-slider button:not(.active) {
            color: var(--text-primary);
        }
        
        .sliding-element {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            border: 1px solid var(--primary-transparent);
            border-radius: 50px 0 0 50px;
            background-color: var(--primary-color);
            transition: all 0.3s ease;
        }
        .method-slider button:nth-child(1):is(.active) ~ .sliding-element {
            left: 0;
        }
        .method-slider button:nth-child(2):is(.active) ~ .sliding-element {
            left: 50%;
            border-radius: 0 50px 50px 0;
        }
        
        .process-payment {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 10px;
            height: 60px;
            align-items: top;
            justify-content: flex-start;
        }
        .process-payment button {
            padding: 0 60px;
            width: 100%;
            border-radius: 5px;
            border: none;
            background-color: var(--primary-color);
            color: var(--text-white);
            cursor: pointer;
            transition: all 0.3s ease;
            height: 35px;
            border-radius: 5px;

        }
        
        .payment-options .wallet-info {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            font-size: 12px;
            margin: 0 5px;
            transition: all 0.3s ease;
        }
        .payment-options .wallet-info #disconnect {
            color: var(--text-error);
            cursor: pointer;
        }
        .payment-options .wallet-info #disconnect:hover {
            text-decoration: underline;
        }
        .payment-options .wallet-info #connectedWallet a {
            text-decoration: none;
            color: var(--link-color);
            cursor: pointer;
        }
        .payment-options .wallet-info #connectedWallet a:hover {
            text-decoration: underline;
        }
        

        .about,.supporters {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            
        }
        
        .about a {
            text-decoration: none;
            color: var(--link-color);
            cursor: pointer;
        }
        .about a:hover {
            text-decoration: underline;
        }
        .about h2, .supporters h2 {
            margin-bottom: 5px;
        }
        .about p {
            margin-bottom: 5px;
            font-size: 16px;
            color: var(--primary-hover);
            line-height: 1.5;
            word-wrap: break-word;
            word-break: break-word;
            white-space: pre-wrap;
            text-align: justify;
            text-justify: inter-word;
            text-indent: 1em;
            text-align: justify;
            width: 100%;
        }
        .about p a {
            text-decoration: none;
            color: var(--link-color);
            cursor: pointer;
        }
        
        .supporters .list {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            justify-content: center;
        }
        .supporters .supporter-profile {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            padding: 5px 15px 5px 5px;
            transition: all .1s ease-in-out;
        }
        
        .supporters img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
        .supporters button {
            padding: 5px 10px;
            border: none;
            border-radius: 50px;
            transition: all .1s ease-in-out;
        }
        .supporters button:hover {
            background-color: var(--primary-hover);
        }
        
       hr {
            width: 100%;
            background-color: var(--primary-light);
        }


        .credits {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
            background:var(--content-bg-color)
        }
        .credits div {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: auto;
            font-size: 22px;
            color: var(--text-primary)
        }
        .credits a {
            text-decoration: none;
            color: var(--border-primary);
            cursor: pointer;
        }
        .credits a:hover {
            text-decoration: underline;
        }
        
        /* Media Queries for Responsiveness */
    /* Media Queries for Responsiveness */
    /* Large screens (desktops, >1200px) */
    @media (min-width: 1200px) {
        .donation-page .page-body {
            padding: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            flex-wrap: wrap;
        }
        .page-body .card {
            width: 45%; /* Each card takes roughly half the width */
            max-width: none; /* Remove max-width restriction */
        }
        .page-body .info {
            order: 1; /* Info card on the left */
        }
        .page-body .donate {
            order: 2; /* Donate card on the right */
        }
        .donation-page .cover {
            height: 200px; /* Increased height to accommodate profile */
        }
        .cover .profile h1 {
            font-size: 30px;
        }
        .cover .profile img {
            width: 150px;
            height: 150px;
        }
        .method-slider {
            width: 20%;
        }
        .process-payment button {
            font-size: 16px;
        }
    }

    /* Tablets (992px - 1200px) */
    @media (max-width: 1200px) and (min-width: 992px) {
        .donation-page .page-body {
            padding: 30px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 15px;
            flex-wrap: wrap;
        }
        .page-body .card {
            width: 48%; /* Slightly wider to account for padding */
            max-width: none;
        }
        .page-body .info {
            order: 1;
        }
        .page-body .donate {
            order: 2;
        }
        .donation-page .cover {
            height: 180px;
        }
        .cover .profile h1 {
            font-size: 28px;
        }
        .cover .profile img {
            width: 130px;
            height: 130px;
        }
        .method-slider {
            width: 25%;
        }
    }

    /* Smaller tablets (768px - 991px) */
    @media (max-width: 991px) and (min-width: 768px) {
        .donation-page .page-body {
            padding: 25px;
        }
        .page-body .card {
            width: 90%;
            max-width: 400px;
            gap: 10px;
        }
        .donation-page .cover {
            height: 160px;
        }
        
        .cover .profile img {
            width: 110px;
            height: 110px;
        }
        .method-slider {
            width: 30%;
        }
        .preset-amounts {
            width: 70%;
        }
        .amount {
            gap: 10px;
        }
    }

    /* Mobile devices (500px - 767px) */
    @media (max-width: 767px) and (min-width: 501px) {
        .donation-page .cover {
            height: 140px;
        }
        .cover .profile img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
        }
        .page-body .card {
            width: 95%;
            max-width: 400px;
            padding: 12px;
        }
        .method-slider {
            width: 40%;
        }
        .preset-amounts {
            width: 65%;
        }
        .amount {
            gap: 8px;
        }
        .process-payment button {
            padding: 0 40px;
            font-size: 14px;
        }
        header .menu button {
            padding: 4px 8px;
            font-size: 14px;
        }
    }

    /* Small mobile devices (<=500px) */
    @media (max-width: 500px) {
        .donation-page .cover {
            height: 120px;
        }
        .cover .profile img {
            width: 80px;
            height: 80px;
            border-radius: 8px;
        }
        
        .donation-page .page-body {
            padding: 15px;
        }
        .page-body .card {
            width: 92%;
            max-width: 360px; 
            padding: 010px;
        }
        .page-body .card h2 {
            font-size: 18px;
        }
        .method-slider {
            width: 50%;
        }
        .preset-amounts {
            width: 180px; 
            overflow-x: auto; 
            white-space: nowrap;
            gap: 4px;
            padding: 2px 0;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        .preset-amounts::-webkit-scrollbar {
            display: none;
        }
        .preset-amounts button {
            padding: 4px 8px;
            width: 40px; 
            font-size: 12px;
            flex-shrink: 0; 
        }
        .amount {
            gap: 5px;
            height: 35px;
            padding: 2px 5px; 
        }
        div input[type="number"] {
            width: 50px;
            font-size: 12px;
        }
        .process-payment {
            height: 50px;
        }
        .process-payment button {
            padding: 0 20px;
            height: 32px;
            font-size: 13px;
        }
        header {
            padding: 0 10px;
        }
        header .menu button {
            padding: 3px 6px;
            font-size: 12px;
        }
        .support-as {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }
        .support-as .supporter-profile {
            padding: 5px;
        }
        .about p, .supporters p {
            font-size: 14px;
        }
    }
