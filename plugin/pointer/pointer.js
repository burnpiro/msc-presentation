var RevealPointer=function(){"use strict";var e={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222};return function(){var o={},t=!1,n=null,i={x:0,y:0,isVisible:!1};function a(t){var n;null==(o=t.pointer||{}).key?o.key="q":o.key=o.key.toLowerCase(),null!=o.pointerSize&&"number"==typeof o.pointerSize||(o.pointerSize=12),null!=o.tailLength&&"number"==typeof o.tailLength||(o.tailLength=10),null!=o.color&&"string"==typeof o.color||(o.color="red"),null!=o.alwaysVisible&&"boolean"==typeof o.alwaysVisible||(o.alwaysVisible=!1),o.keyCode=(n=o.key,e[n])}function l(){n.style.top="".concat(i.y,"px"),n.style.left="".concat(i.x,"px"),i.isVisible?n.style.opacity="0.8":n.style.opacity="0"}function s(e){i.x=e.pageX,i.y=e.pageY,requestAnimationFrame(l)}function r(){console.log("🍻"),(t=!t)?(document.addEventListener("mousemove",s),document.body.classList.add("no-cursor"),i.isVisible=!0):(document.removeEventListener("mousemove",s),document.body.classList.remove("no-cursor"),i.isVisible=!1,requestAnimationFrame(l))}return{id:"pointer",init:function(e){var t;a(e.getConfig()),o.alwaysVisible?r():e.addKeyBinding({keyCode:o.keyCode,key:o.key},(function(){r()})),(t=document.createElement("div")).className="cursor-dot",t.style.width="".concat(o.pointerSize,"px"),t.style.height="".concat(o.pointerSize,"px"),t.style.backgroundColor=o.color,o.alwaysVisible&&(t.style.opacity="0.8"),document.body.appendChild(t),n=t}}}}();
