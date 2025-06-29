import{a2 as ee,r as B,a6 as Ce,A as ne,x as no,w as G,c as i,d as ie,e as O,a7 as io,i as oe,a8 as ro,W as lo,U as me,a0 as Ve,V as Le,X as Y,T as Be,a5 as Me,p as J}from"./CtvzWlFT.js";import{u as xe,b as H,t as so,w as ao}from"./Cca8yeN8.js";import{r as re,d as ye,b as S,c as M,q as Xe,s as co,z as Ye,a as L,i as x,j as E,A as j,u as A,k as Ue,e as we,l as V,m as Q,n as Ze,B as qe,N as uo,t as $e}from"./CszauIMC.js";import{N as Ge}from"./DvIeZxc3.js";import{o as F,a as te,k as ke,e as fo,B as Oe,s as go,S as vo,h as ho,j as mo,g as po}from"./T8a1OmL8.js";import{i as Je,h as Qe,r as I,g as bo,F as Co,c as xo,k as pe,m as eo,a as yo,d as wo,p as ko,f as So,L as zo,z as Ro,e as Po,b as Lo}from"./DxdqOxg8.js";import{i as Bo}from"./4nfXJs0B.js";const X=B(null);function Te(e){if(e.clientX>0||e.clientY>0)X.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:n,top:o,width:u,height:f}=t.getBoundingClientRect();n>0||o>0?X.value={x:n+u/2,y:o+f/2}:X.value={x:0,y:0}}else X.value=null}}let Z=0,Ee=!0;function Mo(){if(!Je)return ee(B(null));Z===0&&F("click",document,Te,!0);const e=()=>{Z+=1};return Ee&&(Ee=Qe())?(Ce(e),ne(()=>{Z-=1,Z===0&&te("click",document,Te,!0)})):e(),ee(X)}const $o=B(void 0);let q=0;function Fe(){$o.value=Date.now()}let je=!0;function Oo(e){if(!Je)return ee(B(!1));const t=B(!1);let n=null;function o(){n!==null&&window.clearTimeout(n)}function u(){o(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}q===0&&F("click",window,Fe,!0);const f=()=>{q+=1,F("click",window,u,!0)};return je&&(je=Qe())?(Ce(f),ne(()=>{q-=1,q===0&&te("click",window,Fe,!0),te("click",window,u,!0),o()})):f(),ee(t)}const Se=B(!1);function Ie(){Se.value=!0}function _e(){Se.value=!1}let K=0;function To(){return Bo&&(Ce(()=>{K||(window.addEventListener("compositionstart",Ie),window.addEventListener("compositionend",_e)),K++}),ne(()=>{K<=1?(window.removeEventListener("compositionstart",Ie),window.removeEventListener("compositionend",_e),K=0):K--})),Se}let _=0,Ae="",He="",De="",Ne="";const We=B("0px");function Eo(e){if(typeof document>"u")return;const t=document.documentElement;let n,o=!1;const u=()=>{t.style.marginRight=Ae,t.style.overflow=He,t.style.overflowX=De,t.style.overflowY=Ne,We.value="0px"};no(()=>{n=G(e,f=>{if(f){if(!_){const h=window.innerWidth-t.offsetWidth;h>0&&(Ae=t.style.marginRight,t.style.marginRight=`${h}px`,We.value=`${h}px`),He=t.style.overflow,De=t.style.overflowX,Ne=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}o=!0,_++}else _--,_||u(),o=!1},{immediate:!0})}),ne(()=>{n==null||n(),o&&(_--,_||u(),o=!1)})}const Fo=re("error",()=>i("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),Ke=re("info",()=>i("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),jo=re("success",()=>i("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),Io=re("warning",()=>i("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},i("g",{"fill-rule":"nonzero"},i("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),_o={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function Ao(e){const{primaryColor:t,borderRadius:n,lineHeight:o,fontSize:u,cardColor:f,textColor2:h,textColor1:b,dividerColor:r,fontWeightStrong:d,closeIconColor:a,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:m,closeColorPressed:C,modalColor:k,boxShadow1:z,popoverColor:R,actionColor:v}=e;return Object.assign(Object.assign({},_o),{lineHeight:o,color:f,colorModal:k,colorPopover:R,colorTarget:t,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:h,titleTextColor:b,borderColor:r,actionColor:v,titleFontWeight:d,closeColorHover:m,closeColorPressed:C,closeBorderRadius:n,closeIconColor:a,closeIconColorHover:p,closeIconColorPressed:g,fontSizeSmall:u,fontSizeMedium:u,fontSizeLarge:u,fontSizeHuge:u,boxShadow:z,borderRadius:n})}const oo={name:"Card",common:ye,self:Ao},Ho=S([M("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Ye({background:"var(--n-color-modal)"}),L("hoverable",[S("&:hover","box-shadow: var(--n-box-shadow);")]),L("content-segmented",[S(">",[x("content",{paddingTop:"var(--n-padding-bottom)"})])]),L("content-soft-segmented",[S(">",[x("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),L("footer-segmented",[S(">",[x("footer",{paddingTop:"var(--n-padding-bottom)"})])]),L("footer-soft-segmented",[S(">",[x("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),S(">",[M("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[x("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),x("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),x("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),x("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),x("content","flex: 1; min-width: 0;"),x("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[S("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),x("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),M("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[S("img",`
 display: block;
 width: 100%;
 `)]),L("bordered",`
 border: 1px solid var(--n-border-color);
 `,[S("&:target","border-color: var(--n-color-target);")]),L("action-segmented",[S(">",[x("action",[S("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),L("content-segmented, content-soft-segmented",[S(">",[x("content",{transition:"border-color 0.3s var(--n-bezier)"},[S("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),L("footer-segmented, footer-soft-segmented",[S(">",[x("footer",{transition:"border-color 0.3s var(--n-bezier)"},[S("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),L("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Xe(M("card",`
 background: var(--n-color-modal);
 `,[L("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),co(M("card",`
 background: var(--n-color-popover);
 `,[L("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ze={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Do=ke(ze),No=Object.assign(Object.assign({},A.props),ze),Wo=ie({name:"Card",props:No,slots:Object,setup(e){const t=()=>{const{onClose:d}=e;d&&V(d)},{inlineThemeDisabled:n,mergedClsPrefixRef:o,mergedRtlRef:u}=xe(e),f=A("Card","-card",Ho,oo,e,o),h=Ue("Card",u,o),b=O(()=>{const{size:d}=e,{self:{color:a,colorModal:p,colorTarget:g,textColor:m,titleTextColor:C,titleFontWeight:k,borderColor:z,actionColor:R,borderRadius:v,lineHeight:$,closeIconColor:P,closeIconColorHover:y,closeIconColorPressed:s,closeColorHover:c,closeColorPressed:l,closeBorderRadius:w,closeIconSize:T,closeSize:D,boxShadow:N,colorPopover:W,colorEmbedded:le,colorEmbeddedModal:se,colorEmbeddedPopover:ae,[Q("padding",d)]:ce,[Q("fontSize",d)]:de,[Q("titleFontSize",d)]:ue},common:{cubicBezierEaseInOut:fe}}=f.value,{top:ge,left:ve,bottom:he}=Ze(ce);return{"--n-bezier":fe,"--n-border-radius":v,"--n-color":a,"--n-color-modal":p,"--n-color-popover":W,"--n-color-embedded":le,"--n-color-embedded-modal":se,"--n-color-embedded-popover":ae,"--n-color-target":g,"--n-text-color":m,"--n-line-height":$,"--n-action-color":R,"--n-title-text-color":C,"--n-title-font-weight":k,"--n-close-icon-color":P,"--n-close-icon-color-hover":y,"--n-close-icon-color-pressed":s,"--n-close-color-hover":c,"--n-close-color-pressed":l,"--n-border-color":z,"--n-box-shadow":N,"--n-padding-top":ge,"--n-padding-bottom":he,"--n-padding-left":ve,"--n-font-size":de,"--n-title-font-size":ue,"--n-close-size":D,"--n-close-icon-size":T,"--n-close-border-radius":w}}),r=n?we("card",O(()=>e.size[0]),b,e):void 0;return{rtlEnabled:h,mergedClsPrefix:o,mergedTheme:f,handleCloseClick:t,cssVars:n?void 0:b,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:o,rtlEnabled:u,onRender:f,embedded:h,tag:b,$slots:r}=this;return f==null||f(),i(b,{class:[`${o}-card`,this.themeClass,h&&`${o}-card--embedded`,{[`${o}-card--rtl`]:u,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:n}],style:this.cssVars,role:this.role},E(r.cover,d=>{const a=this.cover?j([this.cover()]):d;return a&&i("div",{class:`${o}-card-cover`,role:"none"},a)}),E(r.header,d=>{const{title:a}=this,p=a?j(typeof a=="function"?[a()]:[a]):d;return p||this.closable?i("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},i("div",{class:`${o}-card-header__main`,role:"heading"},p),E(r["header-extra"],g=>{const m=this.headerExtra?j([this.headerExtra()]):g;return m&&i("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&i(Ge,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),E(r.default,d=>{const{content:a}=this,p=a?j(typeof a=="function"?[a()]:[a]):d;return p&&i("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},p)}),E(r.footer,d=>{const a=this.footer?j([this.footer()]):d;return a&&i("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},a)}),E(r.action,d=>{const a=this.action?j([this.action()]):d;return a&&i("div",{class:`${o}-card__action`,role:"none"},a)}))}}),Ko=H("n-dialog-provider"),ft=H("n-dialog-api"),gt=H("n-dialog-reactive-list"),Vo={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"};function Xo(e){const{textColor1:t,textColor2:n,modalColor:o,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:h,closeColorHover:b,closeColorPressed:r,infoColor:d,successColor:a,warningColor:p,errorColor:g,primaryColor:m,dividerColor:C,borderRadius:k,fontWeightStrong:z,lineHeight:R,fontSize:v}=e;return Object.assign(Object.assign({},Vo),{fontSize:v,lineHeight:R,border:`1px solid ${C}`,titleTextColor:t,textColor:n,color:o,closeColorHover:b,closeColorPressed:r,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:h,closeBorderRadius:k,iconColor:m,iconColorInfo:d,iconColorSuccess:a,iconColorWarning:p,iconColorError:g,borderRadius:k,titleFontWeight:z})}const to=qe({name:"Dialog",common:ye,peers:{Button:fo},self:Xo}),Re={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Yo=ke(Re),Uo=S([M("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[x("icon",{color:"var(--n-icon-color)"}),L("bordered",{border:"var(--n-border)"}),L("icon-top",[x("close",{margin:"var(--n-close-margin)"}),x("icon",{margin:"var(--n-icon-margin)"}),x("content",{textAlign:"center"}),x("title",{justifyContent:"center"}),x("action",{justifyContent:"center"})]),L("icon-left",[x("icon",{margin:"var(--n-icon-margin)"}),L("closable",[x("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),x("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),x("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[L("last","margin-bottom: 0;")]),x("action",`
 display: flex;
 justify-content: flex-end;
 `,[S("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),x("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),x("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),M("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),Xe(M("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),M("dialog",[Ye(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Zo={default:()=>i(Ke,null),info:()=>i(Ke,null),success:()=>i(jo,null),warning:()=>i(Io,null),error:()=>i(Fo,null)},qo=ie({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},A.props),Re),slots:Object,setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedRtlRef:u}=xe(e),f=Ue("Dialog",u,n),h=O(()=>{var m,C;const{iconPlacement:k}=e;return k||((C=(m=t==null?void 0:t.value)===null||m===void 0?void 0:m.Dialog)===null||C===void 0?void 0:C.iconPlacement)||"left"});function b(m){const{onPositiveClick:C}=e;C&&C(m)}function r(m){const{onNegativeClick:C}=e;C&&C(m)}function d(){const{onClose:m}=e;m&&m()}const a=A("Dialog","-dialog",Uo,to,e,n),p=O(()=>{const{type:m}=e,C=h.value,{common:{cubicBezierEaseInOut:k},self:{fontSize:z,lineHeight:R,border:v,titleTextColor:$,textColor:P,color:y,closeBorderRadius:s,closeColorHover:c,closeColorPressed:l,closeIconColor:w,closeIconColorHover:T,closeIconColorPressed:D,closeIconSize:N,borderRadius:W,titleFontWeight:le,titleFontSize:se,padding:ae,iconSize:ce,actionSpace:de,contentMargin:ue,closeSize:fe,[C==="top"?"iconMarginIconTop":"iconMargin"]:ge,[C==="top"?"closeMarginIconTop":"closeMargin"]:ve,[Q("iconColor",m)]:he}}=a.value,U=Ze(ge);return{"--n-font-size":z,"--n-icon-color":he,"--n-bezier":k,"--n-close-margin":ve,"--n-icon-margin-top":U.top,"--n-icon-margin-right":U.right,"--n-icon-margin-bottom":U.bottom,"--n-icon-margin-left":U.left,"--n-icon-size":ce,"--n-close-size":fe,"--n-close-icon-size":N,"--n-close-border-radius":s,"--n-close-color-hover":c,"--n-close-color-pressed":l,"--n-close-icon-color":w,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":D,"--n-color":y,"--n-text-color":P,"--n-border-radius":W,"--n-padding":ae,"--n-line-height":R,"--n-border":v,"--n-content-margin":ue,"--n-title-font-size":se,"--n-title-font-weight":le,"--n-title-text-color":$,"--n-action-space":de}}),g=o?we("dialog",O(()=>`${e.type[0]}${h.value[0]}`),p,e):void 0;return{mergedClsPrefix:n,rtlEnabled:f,mergedIconPlacement:h,mergedTheme:a,handlePositiveClick:b,handleNegativeClick:r,handleCloseClick:d,cssVars:o?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:n,cssVars:o,closable:u,showIcon:f,title:h,content:b,action:r,negativeText:d,positiveText:a,positiveButtonProps:p,negativeButtonProps:g,handlePositiveClick:m,handleNegativeClick:C,mergedTheme:k,loading:z,type:R,mergedClsPrefix:v}=this;(e=this.onRender)===null||e===void 0||e.call(this);const $=f?i(uo,{clsPrefix:v,class:`${v}-dialog__icon`},{default:()=>E(this.$slots.icon,y=>y||(this.icon?I(this.icon):Zo[this.type]()))}):null,P=E(this.$slots.action,y=>y||a||d||r?i("div",{class:[`${v}-dialog__action`,this.actionClass],style:this.actionStyle},y||(r?[I(r)]:[this.negativeText&&i(Oe,Object.assign({theme:k.peers.Button,themeOverrides:k.peerOverrides.Button,ghost:!0,size:"small",onClick:C},g),{default:()=>I(this.negativeText)}),this.positiveText&&i(Oe,Object.assign({theme:k.peers.Button,themeOverrides:k.peerOverrides.Button,size:"small",type:R==="default"?"primary":R,disabled:z,loading:z,onClick:m},p),{default:()=>I(this.positiveText)})])):null);return i("div",{class:[`${v}-dialog`,this.themeClass,this.closable&&`${v}-dialog--closable`,`${v}-dialog--icon-${n}`,t&&`${v}-dialog--bordered`,this.rtlEnabled&&`${v}-dialog--rtl`],style:o,role:"dialog"},u?E(this.$slots.close,y=>{const s=[`${v}-dialog__close`,this.rtlEnabled&&`${v}-dialog--rtl`];return y?i("div",{class:s},y):i(Ge,{clsPrefix:v,class:s,onClick:this.handleCloseClick})}):null,f&&n==="top"?i("div",{class:`${v}-dialog-icon-container`},$):null,i("div",{class:[`${v}-dialog__title`,this.titleClass],style:this.titleStyle},f&&n==="left"?$:null,$e(this.$slots.header,()=>[I(h)])),i("div",{class:[`${v}-dialog__content`,P?"":`${v}-dialog__content--last`,this.contentClass],style:this.contentStyle},$e(this.$slots.default,()=>[I(b)])),P)}});function Go(e){const{modalColor:t,textColor2:n,boxShadow3:o}=e;return{color:t,textColor:n,boxShadow:o}}const Jo=qe({name:"Modal",common:ye,peers:{Scrollbar:go,Dialog:to,Card:oo},self:Go}),vt=H("n-modal-provider"),Qo=H("n-modal-api"),ht=H("n-modal-reactive-list");function mt(){const e=oe(Qo,null);return e===null&&so("use-modal","No outer <n-modal-provider /> founded."),e}const be="n-draggable";function et(e,t){let n;const o=O(()=>e.value!==!1),u=O(()=>o.value?be:""),f=O(()=>{const r=e.value;return r===!0||r===!1?!0:r?r.bounds!=="none":!0});function h(r){const d=r.querySelector(`.${be}`);if(!d||!u.value)return;let a=0,p=0,g=0,m=0,C=0,k=0,z;function R(P){P.preventDefault(),z=P;const{x:y,y:s,right:c,bottom:l}=r.getBoundingClientRect();p=y,m=s,a=window.innerWidth-c,g=window.innerHeight-l;const{left:w,top:T}=r.style;C=+T.slice(0,-2),k=+w.slice(0,-2)}function v(P){if(!z)return;const{clientX:y,clientY:s}=z;let c=P.clientX-y,l=P.clientY-s;f.value&&(c>a?c=a:-c>p&&(c=-p),l>g?l=g:-l>m&&(l=-m));const w=c+k,T=l+C;r.style.top=`${T}px`,r.style.left=`${w}px`}function $(){z=void 0,t.onEnd(r)}F("mousedown",d,R),F("mousemove",window,v),F("mouseup",window,$),n=()=>{te("mousedown",d,R),F("mousemove",window,v),F("mouseup",window,$)}}function b(){n&&(n(),n=void 0)}return io(b),{stopDrag:b,startDrag:h,draggableRef:o,draggableClassRef:u}}const Pe=Object.assign(Object.assign({},ze),Re),ot=ke(Pe),tt=ie({name:"ModalBody",inheritAttrs:!1,slots:Object,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean,draggable:{type:[Boolean,Object],default:!1}},Pe),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=B(null),n=B(null),o=B(e.show),u=B(null),f=B(null),h=oe(eo);let b=null;G(Y(e,"show"),l=>{l&&(b=h.getMousePosition())},{immediate:!0});const{stopDrag:r,startDrag:d,draggableRef:a,draggableClassRef:p}=et(Y(e,"draggable"),{onEnd:l=>{k(l)}}),g=O(()=>Be([e.titleClass,p.value])),m=O(()=>Be([e.headerClass,p.value]));G(Y(e,"show"),l=>{l&&(o.value=!0)}),Eo(O(()=>e.blockScroll&&o.value));function C(){if(h.transformOriginRef.value==="center")return"";const{value:l}=u,{value:w}=f;if(l===null||w===null)return"";if(n.value){const T=n.value.containerScrollTop;return`${l}px ${w+T}px`}return""}function k(l){if(h.transformOriginRef.value==="center"||!b||!n.value)return;const w=n.value.containerScrollTop,{offsetLeft:T,offsetTop:D}=l,N=b.y,W=b.x;u.value=-(T-W),f.value=-(D-N-w),l.style.transformOrigin=C()}function z(l){Me(()=>{k(l)})}function R(l){l.style.transformOrigin=C(),e.onBeforeLeave()}function v(l){const w=l;a.value&&d(w),e.onAfterEnter&&e.onAfterEnter(w)}function $(){o.value=!1,u.value=null,f.value=null,r(),e.onAfterLeave()}function P(){const{onClose:l}=e;l&&l()}function y(){e.onNegativeClick()}function s(){e.onPositiveClick()}const c=B(null);return G(c,l=>{l&&Me(()=>{const w=l.el;w&&t.value!==w&&(t.value=w)})}),J(yo,t),J(wo,null),J(ko,null),{mergedTheme:h.mergedThemeRef,appear:h.appearRef,isMounted:h.isMountedRef,mergedClsPrefix:h.mergedClsPrefixRef,bodyRef:t,scrollbarRef:n,draggableClass:p,displayed:o,childNodeRef:c,cardHeaderClass:m,dialogTitleClass:g,handlePositiveClick:s,handleNegativeClick:y,handleCloseClick:P,handleAfterEnter:v,handleAfterLeave:$,handleBeforeLeave:R,handleEnter:z}},render(){const{$slots:e,$attrs:t,handleEnter:n,handleAfterEnter:o,handleAfterLeave:u,handleBeforeLeave:f,preset:h,mergedClsPrefix:b}=this;let r=null;if(!h){if(r=bo("default",e.default,{draggableClass:this.draggableClass}),!r){ao("modal","default slot is empty");return}r=ro(r),r.props=lo({class:`${b}-modal`},t,r.props||{})}return this.displayDirective==="show"||this.displayed||this.show?me(i("div",{role:"none",class:`${b}-modal-body-wrapper`},i(vo,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${b}-modal-scroll-content`},{default:()=>{var d;return[(d=this.renderMask)===null||d===void 0?void 0:d.call(this),i(Co,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var a;return i(Ve,{name:"fade-in-scale-up-transition",appear:(a=this.appear)!==null&&a!==void 0?a:this.isMounted,onEnter:n,onAfterEnter:o,onAfterLeave:u,onBeforeLeave:f},{default:()=>{const p=[[Le,this.show]],{onClickoutside:g}=this;return g&&p.push([xo,this.onClickoutside,void 0,{capture:!0}]),me(this.preset==="confirm"||this.preset==="dialog"?i(qo,Object.assign({},this.$attrs,{class:[`${b}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},pe(this.$props,Yo),{titleClass:this.dialogTitleClass,"aria-modal":"true"}),e):this.preset==="card"?i(Wo,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${b}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},pe(this.$props,Do),{headerClass:this.cardHeaderClass,"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=r,p)}})}})]}})),[[Le,this.displayDirective==="if"||this.displayed||this.show]]):null}}),nt=S([M("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),M("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[ho({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),M("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[M("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),M("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[So({duration:".25s",enterScale:".5"}),S(`.${be}`,`
 cursor: move;
 user-select: none;
 `)])]),it=Object.assign(Object.assign(Object.assign(Object.assign({},A.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Pe),{draggable:[Boolean,Object],onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),pt=ie({name:"Modal",inheritAttrs:!1,props:it,slots:Object,setup(e){const t=B(null),{mergedClsPrefixRef:n,namespaceRef:o,inlineThemeDisabled:u}=xe(e),f=A("Modal","-modal",nt,Jo,e,n),h=Oo(64),b=Mo(),r=mo(),d=e.internalDialog?oe(Ko,null):null,a=e.internalModal?oe(Lo,null):null,p=To();function g(s){const{onUpdateShow:c,"onUpdate:show":l,onHide:w}=e;c&&V(c,s),l&&V(l,s),w&&!s&&w(s)}function m(){const{onClose:s}=e;s?Promise.resolve(s()).then(c=>{c!==!1&&g(!1)}):g(!1)}function C(){const{onPositiveClick:s}=e;s?Promise.resolve(s()).then(c=>{c!==!1&&g(!1)}):g(!1)}function k(){const{onNegativeClick:s}=e;s?Promise.resolve(s()).then(c=>{c!==!1&&g(!1)}):g(!1)}function z(){const{onBeforeLeave:s,onBeforeHide:c}=e;s&&V(s),c&&c()}function R(){const{onAfterLeave:s,onAfterHide:c}=e;s&&V(s),c&&c()}function v(s){var c;const{onMaskClick:l}=e;l&&l(s),e.maskClosable&&!((c=t.value)===null||c===void 0)&&c.contains(po(s))&&g(!1)}function $(s){var c;(c=e.onEsc)===null||c===void 0||c.call(e),e.show&&e.closeOnEsc&&Po(s)&&(p.value||g(!1))}J(eo,{getMousePosition:()=>{const s=d||a;if(s){const{clickedRef:c,clickedPositionRef:l}=s;if(c.value&&l.value)return l.value}return h.value?b.value:null},mergedClsPrefixRef:n,mergedThemeRef:f,isMountedRef:r,appearRef:Y(e,"internalAppear"),transformOriginRef:Y(e,"transformOrigin")});const P=O(()=>{const{common:{cubicBezierEaseOut:s},self:{boxShadow:c,color:l,textColor:w}}=f.value;return{"--n-bezier-ease-out":s,"--n-box-shadow":c,"--n-color":l,"--n-text-color":w}}),y=u?we("theme-class",void 0,P,e):void 0;return{mergedClsPrefix:n,namespace:o,isMounted:r,containerRef:t,presetProps:O(()=>pe(e,ot)),handleEsc:$,handleAfterLeave:R,handleClickoutside:v,handleBeforeLeave:z,doUpdateShow:g,handleNegativeClick:k,handlePositiveClick:C,handleCloseClick:m,cssVars:u?void 0:P,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e}=this;return i(zo,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{unstableShowMask:n}=this;return me(i("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},i(tt,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,draggable:this.draggable,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>{var o;return i(Ve,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?i("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[Ro,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{Fo as E,Ke as I,qo as N,jo as S,Io as W,pt as _,Wo as a,Yo as b,Re as c,ft as d,Oo as e,Ko as f,gt as g,vt as h,Qo as i,ht as j,mt as k,it as m,Mo as u};
