(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[863],{2339:function(t,i,o){"use strict";o.d(i,{Z:function(){return u}});var e="ReactionNav_wrapper__umNIa",n="ReactionNav_linkLikes__s++Sd",a="ReactionNav_reactionIconLikes__y5Rbm",s="ReactionNav_activLike__HTuNn",r="ReactionNav_linkFavourites__+Unle",l="ReactionNav_reactionIconFafourites__VQ78b",c="ReactionNav_activFavourites__rLkaq",f="ReactionNav_linkDislike__27sjd",m="ReactionNav_reactionIconDislikes__PdixQ",p="ReactionNav_activDislikes__YsBGC",d=o(9348),x=o(1523),y=o(184),u=function(){return(0,y.jsxs)("nav",{className:e,children:[(0,y.jsx)(x.OL,{to:"/likes",className:n,activeClassName:s,children:(0,y.jsx)("svg",{className:a,children:(0,y.jsx)("use",{href:d.Z+"#icon-like"})})}),(0,y.jsx)(x.OL,{to:"/favourites",className:r,activeClassName:c,children:(0,y.jsx)("svg",{className:l,children:(0,y.jsx)("use",{href:d.Z+"#icon-heart"})})}),(0,y.jsx)(x.OL,{to:"/dislikes",className:f,activeClassName:p,children:(0,y.jsx)("svg",{className:m,children:(0,y.jsx)("use",{href:d.Z+"#icon-dislike"})})})]})}},7626:function(t,i,o){"use strict";o.r(i),o.d(i,{default:function(){return W}});var e="VotingPage_hero__OriGS",n="VotingPage_leftSide__M0p-z",a="VotingPage_wrapper__VzmwN",s="VotingPage_rightSide__7tqem",r=o(6239),l=o(885),c="Voting_navBar__gU7xN",f="Voting_navBarWrapper__NQRvl",m="Voting_imageWrapper__GreRT",p="Voting_randomCat__1UNFb",d="Voting_votingPanel__U45Gx",x="Voting_votingPanelIconImg__6+bS+",y="Voting_likeBtn__Rue9o",u="Voting_dislikeBtn__xbF47",g="Voting_favouritesBtn__2PYVy",b="Voting_loaderWrapper__DTGpt",h=o(3653),v=o(2339),w=o(2105),N=o(9271),k=o(2791);var _=o.p+"static/media/sprit-white.a61db77496684275fd9885fc719df412.svg",C=o(3924),I=o(5264),z=o(184),j=function(){var t=(0,N.TH)(),i=(0,k.useState)({}),o=(0,l.Z)(i,2),e=o[0],n=o[1],a=(0,k.useState)(!1),s=(0,l.Z)(a,2),r=s[0],j=s[1],W=e.id,A="Cat Lover",L=t.pathname.replace("/","");return I.Notify.init({width:"550px",position:"right-bottom",distance:"100px",useIcon:!1,fontFamily:"Jost",fontSize:"13px",cssAnimationStyle:"zoom",success:{background:"#97eab9"},failure:{background:"#ff868e"},warning:{background:"#ffd280"}}),(0,k.useEffect)((function(){j(!1),(0,w.N7)().then((function(t){var i=t.data;n(i[0]),j(!0)}))}),[]),(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("div",{className:c,children:[(0,z.jsxs)("div",{className:f,children:[(0,z.jsx)(h.Z,{currentLocation:L}),(0,z.jsx)(v.Z,{})]}),r?(0,z.jsx)("div",{className:m,children:(0,z.jsx)("img",{loading:"lazy",className:p,src:e.url,alt:""})}):(0,z.jsx)("div",{className:b,children:(0,z.jsx)(C._P,{height:"100",width:"100",color:"#ff868e",ariaLabel:"loading",visible:!0})}),(0,z.jsxs)("div",{className:d,children:[(0,z.jsx)("button",{className:y,type:"button",onClick:function(){j(!1),console.log("click Like"),(0,w.$8)(W,A).then((function(t){var i=t.data;return I.Notify.success(i.message)})),(0,w.N7)().then((function(t){var i=t.data;n(i[0]),j(!0)}))},children:(0,z.jsx)("svg",{className:x,children:(0,z.jsx)("use",{href:_+"#icon-like-white-30"})})}),(0,z.jsx)("button",{className:g,type:"button",onClick:function(){j(!1),console.log("click Fav"),(0,w.tC)(W,A).then((function(t){var i=t.data;return I.Notify.failure(i.message)})),(0,w.N7)().then((function(t){var i=t.data;n(i[0]),j(!0)}))},children:(0,z.jsx)("svg",{className:x,children:(0,z.jsx)("use",{href:_+"#icon-fav-white-30"})})}),(0,z.jsx)("button",{className:u,type:"button",onClick:function(){j(!1),console.log("click Dis"),(0,w.r7)(W,A).then((function(t){var i=t.data;return I.Notify.warning(i.message)})),(0,w.N7)().then((function(t){var i=t.data;n(i[0]),j(!0)}))},children:(0,z.jsx)("svg",{className:x,children:(0,z.jsx)("use",{href:_+"#icon-dislike-white-30"})})})]})]})})},W=function(){return(0,z.jsxs)("div",{className:e,children:[(0,z.jsx)("div",{className:n,children:(0,z.jsx)("div",{className:a,children:(0,z.jsx)(r.Z,{})})}),(0,z.jsx)("div",{className:s,children:(0,z.jsx)(j,{})})]})}},5264:function(t,i,o){var e,n;n="undefined"!==typeof o.g?o.g:"undefined"!==typeof window?window:this,e=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var i,o="Notiflix",e="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c "+o+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+e)},l=function(i){return i||(i="head"),null!==t.document[i]||(r('\nNotiflix needs to be appended to the "<'+i+'>" element, but you called it before the "<'+i+'>" element has been created.'),!1)},c=function(i,o){if(!l("head"))return!1;if(null!==i()&&!t.document.getElementById(o)){var e=t.document.createElement("style");e.id=o,e.innerHTML=i(),t.document.head.appendChild(e)}},f=function t(){var i={},o=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],e++);for(var n=function(e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o&&"[object Object]"===Object.prototype.toString.call(e[n])?i[n]=t(i[n],e[n]):i[n]=e[n])};e<arguments.length;e++)n(arguments[e]);return i},m=function(i){var o=t.document.createElement("div");return o.innerHTML=i,o.textContent||o.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,x=function(o,e,r,c){if(!l("body"))return!1;i||y.Notify.init({});var p=f(!0,i,{});if("object"===typeof r&&!Array.isArray(r)||"object"===typeof c&&!Array.isArray(c)){var x={};"object"===typeof r?x=r:"object"===typeof c&&(x=c),i=f(!0,i,x)}var u=i[o.toLocaleLowerCase("en")];d++,"string"!==typeof e&&(e="Notiflix "+o),i.plainText&&(e=m(e)),!i.plainText&&e.length>i.messageMaxLength&&(i=f(!0,i,{closeButton:!0,messageMaxLength:150}),e='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),e.length>i.messageMaxLength&&(e=e.substring(0,i.messageMaxLength)+"..."),"shadow"===i.fontAwesomeIconStyle&&(u.fontAwesomeIconColor=u.background),i.cssAnimation||(i.cssAnimationDuration=0);var g=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(g.id=s.wrapID,g.style.width=i.width,g.style.zIndex=i.zindex,g.style.opacity=i.opacity,"center-center"===i.position?(g.style.left=i.distance,g.style.top=i.distance,g.style.right=i.distance,g.style.bottom=i.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+i.distance+") - "+i.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===i.position?(g.style.left=i.distance,g.style.right=i.distance,g.style.top=i.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===i.position?(g.style.left=i.distance,g.style.right=i.distance,g.style.bottom=i.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===i.position?(g.style.right=i.distance,g.style.bottom=i.distance,g.style.top="auto",g.style.left="auto"):"left-top"===i.position?(g.style.left=i.distance,g.style.top=i.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===i.position?(g.style.left=i.distance,g.style.bottom=i.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=i.distance,g.style.top=i.distance,g.style.left="auto",g.style.bottom="auto"),i.backOverlay){var b=t.document.getElementById(s.overlayID)||t.document.createElement("div");b.id=s.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=i.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=u.backOverlayColor||i.backOverlayColor,b.className=i.cssAnimation?"nx-with-animation":"",b.style.animationDuration=i.cssAnimation?i.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(b)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(g);var h=t.document.createElement("div");h.id=i.ID+"-"+d,h.className=i.className+" "+u.childClassName+" "+(i.cssAnimation?"nx-with-animation":"")+" "+(i.useIcon?"nx-with-icon":"")+" nx-"+i.cssAnimationStyle+" "+(i.closeButton&&"function"!==typeof r?"nx-with-close-button":"")+" "+("function"===typeof r?"nx-with-callback":"")+" "+(i.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=i.fontSize,h.style.color=u.textColor,h.style.background=u.background,h.style.borderRadius=i.borderRadius,h.style.pointerEvents="all",i.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+i.fontFamily+'", '+n,i.cssAnimation&&(h.style.animationDuration=i.cssAnimationDuration+"ms");var v="";if(i.closeButton&&"function"!==typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+u.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),i.useIcon)if(i.useFontAwesome)h.innerHTML='<i style="color:'+u.fontAwesomeIconColor+"; font-size:"+i.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+u.fontAwesomeClassName+" "+("shadow"===i.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+e+"</span>"+(i.closeButton?v:"");else{var w="";o===a.Success?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===a.Failure?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===a.Warning?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===a.Info&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=w+'<span class="nx-message nx-with-icon">'+e+"</span>"+(i.closeButton?v:"")}else h.innerHTML='<span class="nx-message">'+e+"</span>"+(i.closeButton?v:"");if("left-bottom"===i.position||"right-bottom"===i.position){var N=t.document.getElementById(s.wrapID);N.insertBefore(h,N.firstChild)}else t.document.getElementById(s.wrapID).appendChild(h);var k=t.document.getElementById(h.id);if(k){var _,C,I=function(){k.classList.add("nx-remove");var i=t.document.getElementById(s.overlayID);i&&g.childElementCount<=0&&i.classList.add("nx-remove"),clearTimeout(_)},z=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var i=t.document.getElementById(s.overlayID);i&&null!==i.parentNode&&i.parentNode.removeChild(i)}clearTimeout(C)};if(i.closeButton&&"function"!==typeof r&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){z(),clearTimeout(t)}),i.cssAnimationDuration)})),("function"===typeof r||i.clickToClose)&&k.addEventListener("click",(function(){"function"===typeof r&&r(),I();var t=setTimeout((function(){z(),clearTimeout(t)}),i.cssAnimationDuration)})),!i.closeButton&&"function"!==typeof r){var j=function(){_=setTimeout((function(){I()}),i.timeout),C=setTimeout((function(){z()}),i.timeout+i.cssAnimationDuration)};j(),i.pauseOnHover&&(k.addEventListener("mouseenter",(function(){k.classList.add("nx-paused"),clearTimeout(_),clearTimeout(C)})),k.addEventListener("mouseleave",(function(){k.classList.remove("nx-paused"),j()})))}}if(i.showOnlyTheLastOne&&d>0)for(var W=t.document.querySelectorAll("[id^="+i.ID+"-]:not([id="+i.ID+"-"+d+"])"),A=0;A<W.length;A++){var L=W[A];null!==L.parentNode&&L.parentNode.removeChild(L)}i=f(!0,i,p)},y={Notify:{init:function(t){i=f(!0,s,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!i)return r("You have to initialize the Notify module before call Merge function."),!1;i=f(!0,i,t)},success:function(t,i,o){x(a.Success,t,i,o)},failure:function(t,i,o){x(a.Failure,t,i,o)},warning:function(t,i,o){x(a.Warning,t,i,o)},info:function(t,i,o){x(a.Info,t,i,o)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}}(n)}.apply(i,[]),void 0===e||(t.exports=e)}}]);
//# sourceMappingURL=863.3b7160dd.chunk.js.map