function _0x18d8($,x){let e=_0x2117();return(_0x18d8=function($,x){return e[$-=150]})($,x)}function _0x2117(){let $=["login-form","Error al subir la imagen:","none","error","tecnolandia-7c8da.firebasestorage.app","upload_preset","trim","email","1:135539004176:web:082d9979fbac5433afcb95","then","Error al agregar el producto. Int\xe9ntalo nuevamente.","div","login-section","description","')\">Eliminar</button>\n        ","add-dish-form","</p>\n            <button onclick=\"deleteDish('","Error al cerrar sesi\xf3n:","dish-price","dish-category","https://api.cloudinary.com/v1_1/dxl13hrks/image/upload","password","addEventListener","7tJvCvi","admin-content","deleteDish","style","category","block","replace","dish-name","append","json","reset","value","appendChild","classList","dish-img-upload","catch","menu-list","5594416iRZVhp","tecnolandia-7c8da.firebaseapp.com","722968VBmaAT","getElementById",'" alt="',"4077znUPHD","error-message",'" width="100">\n            <h5>',"preventDefault","</p>\n            <p><strong>Categor\xeda:</strong> ","14XwNRsO","innerHTML","display","5yAmHRC","img","menu","771656GAcfNf","dish-card","176SrfrbW","file","7861872LnXrWF","7093341MmwRmK","data","AIzaSyBl_hQ0ThEXecRb8nNcA9tubxX3Dj6PAe0","</h5>\n            <p><strong>Precio:</strong> ","name","Producto agregado correctamente.","click","527910bkVGsw"];return(_0x2117=function(){return $})()}let _0x6c8813=_0x18d8;!function($,x){let e=_0x18d8,a=$();for(;;)try{let t=-parseInt(e(200))/1+parseInt(e(194))/2*(-parseInt(e(189))/3)+-parseInt(e(184))/4*(parseInt(e(197))/5)+parseInt(e(204))/6+parseInt(e(167))/7*(parseInt(e(186))/8)+parseInt(e(205))/9+parseInt(e(212))/10*(parseInt(e(202))/11);if(853715===t)break;a.push(a.shift())}catch(c){a.push(a.shift())}}(_0x2117,853715);import{initializeApp as $}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";import{getAuth as x,signInWithEmailAndPassword as e,onAuthStateChanged as a,signOut as t}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";import{getFirestore as c,collection as i,getDocs as n,addDoc as r,deleteDoc as o,doc as d}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";let firebaseConfig={apiKey:_0x6c8813(207),authDomain:_0x6c8813(185),projectId:"tecnolandia-7c8da",storageBucket:_0x6c8813(217),messagingSenderId:"135539004176",appId:_0x6c8813(152)},app=$(firebaseConfig),auth=x(app),db=c(app),loginSection=document.getElementById(_0x6c8813(156)),adminSection=document[_0x6c8813(187)](_0x6c8813(168)),errorMessage=document[_0x6c8813(187)](_0x6c8813(190)),logoutBtn=document[_0x6c8813(187)]("logout-btn"),addDishForm=document[_0x6c8813(187)](_0x6c8813(159)),menuList=document.getElementById(_0x6c8813(183)),dishPriceInput=document[_0x6c8813(187)](_0x6c8813(162));async function loadMenu(){let $=_0x6c8813,x=await n(i(db,$(199)));menuList[$(195)]="",x.forEach(x=>{let e=$,a=x[e(206)](),t=document.createElement(e(155));t[e(180)].add(e(201)),t.innerHTML='\n            <img src="'+a[e(198)]+e(188)+a[e(209)]+e(191)+a[e(209)]+e(208)+a.price+e(193)+a[e(171)]+"</p>\n            <p><strong>Descripci\xf3n:</strong> "+a[e(157)]+e(160)+x.id+e(158),menuList[e(179)](t)})}async function addDish($,x,e,a,t){await r(i(db,_0x6c8813(199)),{name:$,category:x,price:"$"+e,img:a,description:t}),loadMenu()}async function uploadToCloudinary($){let x=_0x6c8813,e=x(164),a=new FormData;a[x(175)](x(203),$),a.append(x(218),"my_images");try{let t=await fetch(e,{method:"POST",body:a}),c=await t[x(176)]();return c.secure_url}catch(i){throw console[x(216)](x(214),i),i}}document[_0x6c8813(187)](_0x6c8813(213))[_0x6c8813(166)]("submit",$=>{let x=_0x6c8813;$[x(192)]();let a=document[x(187)](x(151)).value,t=document.getElementById(x(165)).value;e(auth,a,t).then($=>{let e=x;loginSection[e(170)][e(196)]=e(215),adminSection.style[e(196)]=e(172),loadMenu()})[x(182)]($=>{let e=x;errorMessage.style[e(196)]=e(172)})}),a(auth,$=>{let x=_0x6c8813;$?(loginSection.style[x(196)]=x(215),adminSection[x(170)][x(196)]=x(172),loadMenu()):(loginSection[x(170)][x(196)]=x(172),adminSection[x(170)][x(196)]=x(215))}),window[_0x6c8813(169)]=async function($){await o(d(db,_0x6c8813(199),$)),loadMenu()},addDishForm[_0x6c8813(166)]("submit",async $=>{let x=_0x6c8813;$.preventDefault();let e=document[x(187)](x(174)).value,a=document[x(187)](x(163)).value,t=dishPriceInput[x(178)][x(173)]("$","")[x(150)](),c=document[x(187)](x(181)),i=document[x(187)]("dish-description")[x(178)],n=c.files[0];if(!n){alert("Por favor, selecciona una imagen para el producto.");return}try{let r=await uploadToCloudinary(n);await addDish(e,a,t,r,i),addDishForm[x(177)](),alert(x(210))}catch(o){alert(x(154))}}),logoutBtn[_0x6c8813(166)](_0x6c8813(211),()=>{let $=_0x6c8813;t(auth)[$(153)](()=>{let x=$;document[x(187)](x(151)).value="",document[x(187)]("password")[x(178)]="",loginSection.style.display=x(172),adminSection[x(170)][x(196)]=x(215)})[$(182)](x=>{let e=$;console.error(e(161),x)})});