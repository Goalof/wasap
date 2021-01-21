import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfBody"} rawKey={"6009da73af03b56eef1f96d0"}>
				{"<script>\nfunction ready() {\n        require(['jquery'], function ($) {\n                popupWhatsApp = () => {\n                        let btnClosePopup = document.querySelector('.closePopup');\n                        let btnOpenPopup = document.querySelector('.whatsapp-button');\n                        let popup = document.querySelector('.popup-whatsapp');\n                        let sendBtn = document.getElementById('send-btn');\n                        btnClosePopup.addEventListener(\"click\", () => {\n                                popup.classList.toggle('is-active-whatsapp-popup')\n                        })\n                        btnOpenPopup.addEventListener(\"click\", () => {\n                                popup.classList.toggle('is-active-whatsapp-popup')\n                                popup.style.animation = \"fadeIn .6s 0.0s both\";\n                        })\n                        sendBtn.addEventListener(\"click\", () => {\n                                let msg = document.getElementById('whats-in')\n                                        .value;\n                                let relmsg = msg.replace(/ /g, \"%20\");\n                                // Замените демо номер на свой — 79999999999\n                                window.open('https://wa.me/79999999999?text=' + relmsg, '_blank');\n                        });\n                        setTimeout(() => {\n                                popup.classList.toggle('is-active-whatsapp-popup');\n                        }, 2000); // <-Время появлявления формы WhatsApp 5000 = 5 секундам\n                }\n                popupWhatsApp();\n        });\n}\ndocument.addEventListener(\"DOMContentLoaded\", ready);\n\n</script>\n<div class=\"nav-bottom\">\n       \n<div class=\"popup-whatsapp fadeIn\">\n               \n<div class=\"content-whatsapp -top\">\n                       \n<button type=\"button\" class=\"closePopup\">\n                               \n<i class=\"material-icons icon-font-color\">\nclose\n</i>\n                       \n</button>\n                       \n<p>\nЗдравствуйте! Напишите нам сообщение в WhatsApp\n</p>\n               \n</div>\n               \n<div class=\"content-whatsapp -bottom\">\n                       \n<input class=\"whats-input\" id=\"whats-in\" type=\"text\" Placeholder=\"Написать сообщение...\" />\n                       \n<button class=\"send-msPopup\" id=\"send-btn\" type=\"button\">\n                               \n<i class=\"material-icons icon-font-color--black\">\nsend\n</i>\n                       \n</button>\n               \n</div>\n       \n</div>\n       \n<button type=\"button\" id=\"whats-openPopup\" class=\"whatsapp-button\">\n               \n<img class=\"icon-whatsapp\" src=\"https://image.flaticon.com/icons/svg/134/134937.svg\">\n       \n</button>\n</div>\n\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<style>\n@import url('https://fonts.googleapis.com/css?family=Roboto');\n\n.nav-bottom {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-end;\n        align-content: flex-end;\n        width: auto;\n        height: auto;\n        position: fixed;\n        z-index: 999999999999999;\n        bottom: 80px;\n        right: 20px;\n        padding: 5px;\n        margin: 0px;\n}\n\n.whatsapp-button {\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        width: 60px;\n        height: 60px;\n        z-index: 999999999;\n        transition: .3s;\n        margin: 10px;\n        padding: 7px;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        border-radius: 50%;\n        background-color: rgb(255, 255, 255);\n        box-shadow: 1px 7px 25px -2px rgba(68, 68, 68, 0.28);\n}\n\n.popup-whatsapp {\n        display: none;\n        position: absolute;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        min-width: 300px;\n        width: auto;\n        height: auto;\n        padding: 16px;\n        bottom: 100px;\n        right: 10px;\n        transition: .5s;\n        border-radius: 10px;\n        background-color: rgb(255, 255, 255);\n        animation: slideInRight .6s 0.0s both;\n        box-shadow: 0 16px 34px -10px rgba(0, 0, 0, 0.46);\n}\n\n.content-whatsapp {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n}\n\n.content-whatsapp p {\n        color: rgb(88, 88, 88);\n        font-family: 'Roboto';\n        font-weight: 400;\n        font-size: 1.0em;\n}\n\n.closePopup {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 28px;\n        height: 28px;\n        margin: 0px 0px 15px 0px;\n        border-radius: 50%;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        background-color: rgb(247, 96, 96);\n}\n\n.is-active-whatsapp-popup {\n        display: flex;\n        animation: slideInRight .6s 0.0s both;\n}\n\ninput#whats-in {\n        background-color: #f3f3f3;\n        outline: none;\n        border: none;\n        border-radius: 6px;\n        overflow: auto;\n        margin: 0px;\n        width: auto;\n        resize: none;\n        padding: 11px;\n}\n\n.icon-whatsapp-small {\n        width: 24px;\n        height: 24px;\n}\n\n.icon-whatsapp {\n        width: 45px;\n        height: 45px;\n}\n\n.icon-font-color {\n        color: #ffffff\n}\n\n.icon-font-color--black {\n        color: #333333\n}\n\ni.material-icons.icon-font-color--black {\n        color: #2cb742 !important;\n        font-style: normal;\n        font-size: 24px;\n        margin-left: 5px;\n}\n\nbutton#send-btn {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 40px;\n        height: 40px;\n        background-color: #f3f3f3;\n        margin: 11px 0px 0px 5px;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        border-radius: 50px;\n        color: white !important;\n}\n\n@media screen and (max-width: 768px) {\n        .popup-whatsapp {\n                min-width: auto !important;\n                width: auto !important;\n                height: auto !important;\n        }\n\n        .nav-bottom {\n                width: auto !important;\n                height: auto !important;\n                bottom: 0px !important;\n                right: 10px !important;\n        }\n}\n\n.popup-whatsapp:before {\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        position: absolute;\n        right: 26px;\n        z-index: 0;\n        border: 10px solid rgba(255, 255, 255, 0);\n        border-top: 10px solid #feffff;\n        bottom: -20px;\n}\n\n</style>\n\n"}
			</script>
		</RawHtml>
	</Theme>;
});