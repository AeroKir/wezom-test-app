(this["webpackJsonpwezom-test"]=this["webpackJsonpwezom-test"]||[]).push([[0],{155:function(e,t,a){e.exports=a.p+"static/media/react-logo.c33873b0.svg"},331:function(e,t,a){e.exports=a(620)},399:function(e,t,a){},400:function(e,t,a){},401:function(e,t,a){},450:function(e,t,a){},582:function(e,t,a){},583:function(e,t,a){},592:function(e,t,a){},603:function(e,t,a){},606:function(e,t,a){},616:function(e,t,a){},617:function(e,t,a){},618:function(e,t,a){},619:function(e,t,a){},620:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(38),i=a(95),s=a(46),m=a(296),u=a(297),d=a.n(u),g=a(299),f=a(248),p={preloadedState:{isSignInFormShowed:!1,isUserSignedIn:!!localStorage.getItem("user"),isLoading:!1,isLoadingFail:!1,user:JSON.parse(localStorage.getItem("user"))||{},userEmail:"",userPassword:""},contacts:{isTableView:!0,isTiledView:!1,isLoading:!1,contactsCollection:JSON.parse(localStorage.getItem("contactsCollection"))||[],collectionLength:JSON.parse(localStorage.getItem("collectionLength"))||0,males:JSON.parse(localStorage.getItem("malesAmount"))||0,females:JSON.parse(localStorage.getItem("femalesAmount"))||0,indeterminate:JSON.parse(localStorage.getItem("indeterminateAmount"))||0,contactsPerPage:10,defaultCurrentPage:1,currentPage:1,isContactProfileLoading:!1,isContactFilterClearDisabled:!0}},E=a(637),h=a(31),b=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_SIGN_IN_FORM":return Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!0});case"HIDE_SIGN_IN_FORM":return Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!1});case"SWITCH_TO_USER_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!1,isUserSignedIn:!0});case"USER_DATA_LOADING":return localStorage.setItem("numberOfContacts",JSON.stringify(b(1,200))),Object(h.a)(Object(h.a)({},e),{},{isLoading:!0,isLoadingFail:!1});case"USER_DATA_LOADING_FAIL":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,isLoadingFail:!0});case"GET_USER_AUTH_DATA":return Object(h.a)(Object(h.a)({},e),{},{userEmail:t.payload.email,userPassword:t.payload.password});case"GET_USER":return localStorage.setItem("user",JSON.stringify(t.payload.userData)),Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!1,isUserSignedIn:!0,user:t.payload.userData,isLoading:!1,isLoadingFail:!1});case"LOGOUT":return localStorage.clear(),{isSignInFormShowed:!1,isUserSignedIn:!!localStorage.getItem("user"),user:JSON.parse(localStorage.getItem("user"))||{},userEmail:"",userPassword:""};default:return e}},v={AU:{name:"Australian",color:"magenta"},BR:{name:"Brazilian",color:"red"},CA:{name:"Canadian",color:"volcano"},CH:{name:"Swiss",color:"orange"},DE:{name:"German",color:"gold"},DK:{name:"Danish",color:"lime"},ES:{name:"Spanish",color:"green"},FI:{name:"Finnish",color:"cyan"},FR:{name:"French",color:"blue"},GB:{name:"British",color:"geekblue"},IE:{name:"Irish",color:"purple"},IR:{name:"Iranian",color:"#f50"},NO:{name:"Norwegian",color:"#2db7f5"},NL:{name:"Dutch",color:"#87d068"},NZ:{name:"New Zealander",color:"#9e1068"},TR:{name:"Turkish",color:"#ffd666"},US:{name:"American"}};var C=function(e,t){return e.some((function(e){return t===e}))};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.contacts,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TILED_VIEW":return Object(h.a)(Object(h.a)({},e),{},{isTiledView:!0,isTableView:!1});case"SET_TABLE_VIEW":return Object(h.a)(Object(h.a)({},e),{},{isTiledView:!1,isTableView:!0});case"CONTACTS_LOADING":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case"GET_CONTACTS_SUCCESS":localStorage.setItem("contactsCollection",JSON.stringify(t.payload.contactsData));var a=JSON.parse(localStorage.getItem("contactsCollection"))||[];localStorage.setItem("collectionLength",JSON.stringify(a.length));var n=JSON.parse(localStorage.getItem("contactsCollection"))||[],r=n.filter((function(e){return"male"===e.gender})).length;localStorage.setItem("malesAmount",JSON.stringify(r));var c=JSON.parse(localStorage.getItem("contactsCollection"))||[],l=c.filter((function(e){return"female"===e.gender})).length;localStorage.setItem("femalesAmount",JSON.stringify(l));var o=JSON.parse(localStorage.getItem("contactsCollection"))||[],i=o.filter((function(e){return"indeterminate"===e.gender}));return localStorage.setItem("indeterminateAmount",JSON.stringify(i)),Object(h.a)(Object(h.a)({},e),{},{contactsCollection:a,collectionLength:JSON.parse(localStorage.getItem("collectionLength")),males:JSON.parse(localStorage.getItem("malesAmount")),females:JSON.parse(localStorage.getItem("femalesAmount")),indeterminate:JSON.parse(localStorage.getItem("indeterminateAmount")),isLoading:!1});case"PAGINATE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.payload.currentPageNumber,contactsPerPage:t.payload.pageSize});case"FILTER_BY_NAME":var s=t.payload.name,m=JSON.parse(localStorage.getItem("contactsCollection"))||[],u=[];return m.map((function(e){var t=e.name;return Object.values(t).map((function(t){return t.toLowerCase().includes(s.toLowerCase())?(u.push(e),u):[]})),u})),s?Object(h.a)(Object(h.a)({},e),{},{contactsCollection:u,isContactFilterClearDisabled:!1}):Object(h.a)(Object(h.a)({},e),{},{contactsCollection:m});case"FILTER_BY_GENDER":var d=JSON.parse(localStorage.getItem("contactsCollection"))||[];return t.payload.gender?Object(h.a)(Object(h.a)({},e),{},{contactsCollection:d.filter((function(e){return e.gender===t.payload.gender})),isContactFilterClearDisabled:!1}):Object(h.a)(Object(h.a)({},e),{},{contactsCollection:d});case"FILTER_BY_NATIONALITY":var g=t.payload.nationalities,f=JSON.parse(localStorage.getItem("contactsCollection"))||[],E=[];return Object.keys(v).map((function(e,t){var a=Object.values(v)[t].name;return C(g,a)?(f.filter((function(t){return t.nat===e})).forEach((function(e){return E.push(e)})),E):E})),Object(h.a)(Object(h.a)({},e),{},{contactsCollection:E,isContactFilterClearDisabled:!1});case"CLEAR_FILTERS_FORM":var b=JSON.parse(localStorage.getItem("contactsCollection"))||[];return Object(h.a)(Object(h.a)({},e),{},{contactsCollection:b,isContactFilterClearDisabled:!0});case"LOGOUT":return{isTableView:!0,isTiledView:!1,isLoading:!1,contactsCollection:[],collectionLength:0,males:0,females:0,indeterminate:0,contactsPerPage:10,defaultCurrentPage:1,currentPage:1,isContactProfileLoading:!1};default:return e}},N=function(e){return Object(s.c)({router:Object(i.b)(e),preloadedState:y,contacts:S,form:E.a})},O=Object(g.a)(),I=s.d.apply(void 0,[Object(s.a)(Object(f.a)(O),d.a,m.a)].concat([])),T=Object(s.e)(N(O),p,I),w=a(623),L=a(42),P=a(2),x=a.n(P),j=a(57);var A=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var c={type:e,payload:{}};return a.forEach((function(e,t){c.payload[a[t]]=n[t]})),c};return r.type=e,r},F=A("SHOW_SIGN_IN_FORM"),_=A("HIDE_SIGN_IN_FORM"),k=A("SWITCH_TO_USER_PROFILE"),U=A("USER_DATA_LOADING"),D=A("USER_DATA_LOADING_FAIL");function R(){return function(e,t){var a=t().form.signInForm.values,n=a.userEmail,r=a.userPassword;e(U()),e({type:"GET_USER_AUTH_DATA",payload:{email:n,password:r}});var c="https://randomuser.me/api/?seed=".concat(n);fetch(c).then((function(t){return t.ok||e(D()),t})).then((function(e){return e.json()})).then((function(t){return e({type:"GET_USER",payload:{userData:t.results}}),t})).then((function(){e(Object(j.d)("/profile"))})).catch((function(){}))}}var z=a(64),G=a(643),B=a(63),J=(a(108),a(399),a(155)),V=a.n(J);var H=function(e){var t=e.isUserLoggedOut,a=x()("Logo");return t?r.a.createElement("img",{src:V.a,alt:"Wezom logo",className:a}):r.a.createElement(B.a,{to:"/"},r.a.createElement("img",{src:V.a,alt:"Wezom logo",className:a}))},M=Object(o.c)((function(e){return{isUserLoggedOut:!e.preloadedState.isUserSignedIn}}),null)(H);a(400);var W=function(e){var t=e.isUserLoggedOut,a=x()("Navbar"),n=x()("Navbar-list");return t?r.a.createElement("nav",{className:a},r.a.createElement("ul",{className:n},r.a.createElement("li",{key:"Home",className:"Navbar-item"},r.a.createElement("span",null,"Home")))):r.a.createElement("nav",{className:a},r.a.createElement("ul",{className:n},r.a.createElement("li",{key:"home",className:"Navbar-item"},r.a.createElement(B.a,{exact:!0,to:"/",activeStyle:{cursor:"auto",color:"#5a5a5a"}},"Home")),r.a.createElement("li",{key:"contacts",className:"Navbar-item"},r.a.createElement(B.a,{exact:!0,to:"/contacts",activeStyle:{cursor:"auto",color:"#5a5a5a"}},"Contacts"))))},Z=Object(o.c)((function(e){return{isUserLoggedOut:!e.preloadedState.isUserSignedIn}}),null)(W),Y=A("LOGOUT");function q(){return function(e){e(Object(j.d)("/"))}}var Q=a(327),$=a(629),K=a(119),X=a(622),ee=a(306),te=a(193),ae=a(633),ne=a(640),re=a(641),ce=a(642);a(401);function le(e){var t=e.isUserDataLoading,a=e.logout,c=e.goHomePage,l=e.userData,o=x()("UserProfileHeaderBlock"),i=x()("UserProfileHeaderBlock-button"),s=x()("UserProfileHeaderBlock-avatar"),m=x()("UserProfileHeaderBlock-menu"),u=x()("UserProfileHeaderBlock-menuText"),d=$.a.Text,g=r.a.createElement(K.a,{className:m},r.a.createElement(K.a.Item,{key:"1",icon:r.a.createElement(ne.a,null)},r.a.createElement(B.a,{to:"/profile"},"Profile")),r.a.createElement(X.a,{style:{margin:"0"}}),r.a.createElement(K.a.Item,{key:"2",icon:r.a.createElement(re.a,null),onClick:function(){a(),c(),Q.b.success("Successfully logged out")}},"Logout"));return t?r.a.createElement(ee.a,null):r.a.createElement("div",{className:o},l.map((function(e){return r.a.createElement(n.Fragment,{key:e.login.uuid},r.a.createElement(te.a,{overlay:g},r.a.createElement(z.a,{type:"link",className:i},r.a.createElement(d,{className:u,style:{verticalAlign:"middle"},ellipsis:!0},"Hello! ".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last)),r.a.createElement(ce.a,{className:u}),r.a.createElement(ae.a,{className:s,src:e.picture.thumbnail,style:{width:"46px",height:"46px"}}))))})))}le.defaultProps={userData:[]};var oe=le;var ie=Object(o.c)((function(e){var t=e.preloadedState;return{userData:t.user,isUserDataLoading:t.isLoading}}),(function(e){return{logout:function(){return e(Y())},goHomePage:function(){return e(q())}}}))(oe);a(450);function se(e){var t=e.handleSignIn,a=e.isSignedIn,n=x()("Header"),c=x()("Header-logo"),l=x()("Header-navMenu"),o=x()("Header-profile");return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Header,{className:n},r.a.createElement("div",{className:c},r.a.createElement(M,null)),r.a.createElement("div",{className:l},r.a.createElement(Z,null)),r.a.createElement("div",{className:o},a?r.a.createElement(ie,null):r.a.createElement(z.a,{type:"link",htmlType:"button",icon:r.a.createElement(G.a,null),onClick:t},"Sign In"))))}se.defaultProps={isSignedIn:!1};var me=se;var ue=Object(o.c)((function(e){return{isSignedIn:e.preloadedState.isUserSignedIn}}),(function(e){return{handleSignIn:function(){return e(F())}}}))(me),de=A("SET_TILED_VIEW"),ge=A("SET_TABLE_VIEW"),fe=A("CONTACTS_LOADING"),pe=A("GET_CONTACTS_SUCCESS","contactsData"),Ee=(A("CONTACTS_LOADING_FAIL"),A("PAGINATE","currentPageNumber","pageSize")),he=A("FILTER_BY_GENDER","gender"),be=A("FILTER_BY_NATIONALITY","nationalities"),ye=A("FILTER_BY_NAME","name"),ve=A("CLEAR_FILTERS_FORM");function Ce(e){if(!e.ok)throw Error(e.statusText);return e}function Se(){return function(e){var t=JSON.parse(localStorage.getItem("numberOfContacts"));e(fe());var a="https://randomuser.me/api/?results=".concat(t);fetch(a).then(Ce).then((function(e){return e.json()})).then((function(t){return e(pe(t.results)),t})).catch((function(){}))}}var Ne,Oe=a(136),Ie=a(630),Te=a(639),we=a(627),Le=a(232),Pe=a(631),xe=a(644),je=a(645),Ae=a(646),Fe=a(647),_e=function(e){return e||"number"===typeof e?void 0:"The email field is required."},ke=function(e){return e||"number"===typeof e?void 0:"The password field is required."},Ue=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"The email format is invalid.":void 0},De=(Ne=8,function(e){return e&&e.length<Ne?"The password must be at least ".concat(Ne," characters."):void 0}),Re=function(e){var t=e.handleFormSubmit,a=e.handleFormClose,c=e.submitting,l=e.invalid,o=e.switchToProfile,i=e.handleFetchContacts,s=e.isVisible,m=Object(n.useState)(!1),u=Object(Oe.a)(m,2),d=u[0],g=u[1],f=function(){g(!d)},p=r.a.createElement(xe.a,{onClick:f}),E=r.a.createElement(je.a,{onClick:f});return r.a.createElement(Pe.a,{title:"Sign In",centered:!0,visible:s,closable:!1,footer:null},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(e),o(),i()}},r.a.createElement("div",{style:{marginBottom:"15px"}},r.a.createElement(Ie.a,{name:"userEmail",type:"email",component:Le.TextField,size:"large",placeholder:"Email",prefix:r.a.createElement(ne.a,null),validate:[_e,Ue]})),r.a.createElement("div",{style:{marginBottom:"15px"}},r.a.createElement(Ie.a,{name:"userPassword",type:d?"text":"password",placeholder:"Password",component:Le.TextField,visibilityToggle:!0,size:"large",prefix:r.a.createElement(Ae.a,null),suffix:d?p:E,validate:[ke,De]})),r.a.createElement(z.a,{key:"signin",type:"primary",htmlType:"submit",disabled:l||c},"Sign In"),r.a.createElement(z.a,{key:"cancel",type:"text",danger:!0,icon:r.a.createElement(Fe.a,null),onClick:a},"Cancel")))};Re.defaultProps={isVisible:!1};var ze=Object(Te.a)("signInForm");Re=Object(o.c)((function(e){return{userEmail:ze(e,"userEmail"),userPassword:ze(e,"userPassword")}}))(Re);var Ge=Object(we.a)({form:"signInForm"})(Re);var Be=Object(o.c)((function(e){return{isVisible:e.preloadedState.isSignInFormShowed}}),(function(e){return{handleFormSubmit:function(){return e(R())},switchToProfile:function(){return e(k())},handleFormClose:function(){return e(_())},handleFetchContacts:function(){return e(Se())}}}))(Ge);a(582);var Je=function(){var e=x()("Footer");return r.a.createElement(w.a.Footer,{className:e},r.a.createElement("span",null,"2020 \xa9 Random User React-Redux Test"))};a(583);var Ve=function(){var e=w.a.Content;return r.a.createElement(e,null,r.a.createElement("div",{className:"HomePage"},r.a.createElement("img",{className:"App-logo",src:V.a,alt:"React logo"})))},He=a(636),Me=a(632);function We(e){var t=e.src,a=e.className,n=x()(a);return r.a.createElement(Me.a,{src:t,className:n})}We.defaultProps={className:""};var Ze=We,Ye=a(638);var qe=function(){return"_".concat(Math.random().toString(16).substr(2,9))};var Qe=function(e){var t=e.userNationality;return r.a.createElement(r.a.Fragment,null,Object.keys(v).map((function(e,a){if(e===t){var n=Object.values(v)[a].name,c=Object.values(v)[a].color;return r.a.createElement(Ye.a,{key:qe(),color:c},n)}return null})))};a(592);function $e(e){var t=e.userData,a=e.isUserDataLoading,c=e.isUserDataLoadingFail,l=e.attemptUserUpdate,o=$.a.Title,i=$.a.Text,s=x()("UserProfile"),m=x()("UserProfile-body"),u=x()("UserProfile-userImage"),d=x()("UserProfile-userInfo"),g=x()("UserProfile-userContactsList"),f=x()("UserProfile-userContactsItem"),p=x()("UserProfile--secondaryColor");return a?r.a.createElement(ee.a,{size:"large"}):c?r.a.createElement(He.a,{type:"error",message:"Something went wrong. Please try again later",showIcon:!0,closable:!0,onClose:function(){l()}}):r.a.createElement("div",{className:s},r.a.createElement(o,{level:1,style:{fontSize:"32px"}},"Profile"),r.a.createElement("div",{className:m},t.map((function(e){return r.a.createElement(n.Fragment,{key:e.login.uuid},r.a.createElement(Ze,{className:u,src:e.picture.medium}),r.a.createElement("div",{className:d},r.a.createElement(o,{level:3},"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),r.a.createElement(i,{type:"secondary",style:{fontSize:"19px",paddingLeft:"5px"}},"(".concat(e.dob.age," years)"))),r.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),r.a.createElement("ul",{className:g},r.a.createElement("li",{className:f},r.a.createElement(i,{copyable:{text:e.email},style:{paddingRight:"8px"}}),r.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)),r.a.createElement("li",{className:f},r.a.createElement(i,{copyable:{text:e.phone},style:{paddingRight:"8px"}}),r.a.createElement("a",{href:"tel:".concat(e.phone)},e.phone)),r.a.createElement("li",{className:f},r.a.createElement(i,{copyable:{text:"[".concat(e.location.country,"]\n                             ").concat(e.location.street.number,"\n                             ").concat(e.location.street.name,",\n                             ").concat(e.location.city,",\n                             ").concat(e.location.state,"\n                             ").concat(e.location.postcode)},style:{paddingRight:"8px"}}),r.a.createElement(i,{strong:!0,className:p},"/".concat(e.location.country,"/")),r.a.createElement("br",null),r.a.createElement(i,{className:p},"".concat(e.location.street.number,"\n                      ").concat(e.location.street.name,",\n                      ").concat(e.location.city,",\n                      ").concat(e.location.state,"\n                      ").concat(e.location.postcode)))),r.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),r.a.createElement(Qe,{userNationality:e.nat})))}))))}$e.defaultProps={isUserDataLoading:!1,isUserDataLoadingFail:!1,attemptUserUpdate:function(){},userData:[{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:{number:5421,name:"Avenue Paul Eluard"},city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"}]};var Ke=$e;var Xe=Object(o.c)((function(e){var t=e.preloadedState;return{userData:t.user,isUserDataLoading:t.isLoading,isUserDataLoadingFail:t.isLoadingFail}}),(function(e){return{attemptUserUpdate:function(){return e(R())}}}))(Ke);var et=function(){var e=w.a.Content;return r.a.createElement(e,null,r.a.createElement(Xe,null))},tt=a(89),at=a(624),nt=a(140),rt=a(81),ct=a(634),lt=a(325),ot=a(648),it=a(649),st=a(650),mt=a(166),ut=a(628),dt=a(635),gt=a(165);var ft=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};var pt=function(){var e=Object(n.useState)(ft()),t=Object(Oe.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(ft())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a};function Et(e){var t=e.nameFilter,a=e.genderFilter,c=e.nationalityFilter,l=e.isContactFilterClearDisabled,o=e.handleClearForm,i=mt.a.Option,s=Object(n.useState)(""),m=Object(Oe.a)(s,2),u=m[0],d=m[1],g=u;Object(n.useEffect)((function(){var e=setTimeout((function(){return t(g)}),500);return function(){return clearTimeout(e)}}),[g]);var f=pt().width;return r.a.createElement(ut.a,{layout:f>=620?"inline":"vertical",style:{width:"100%"}},r.a.createElement(ut.a.Item,null,r.a.createElement(dt.a.Search,{placeholder:"Search by full name",size:"large",allowClear:!0,style:{width:f>=620?530:"100%"},value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement(ut.a.Item,null,r.a.createElement(mt.a,{placeholder:"Gender",size:"large",allowClear:!0,style:{width:f>=620?195:"100%"},onChange:function(e){a(e)}},r.a.createElement(i,{value:"male"},"Male"),r.a.createElement(i,{value:"female"},"Female"),r.a.createElement(i,{value:"indeterminate"},"Indeterminate"))),r.a.createElement(ut.a.Item,null,r.a.createElement(mt.a,{placeholder:"Nationality",mode:"tags",size:"large",style:{width:f>=620?245:"100%"},onChange:function(e){c(e)}},Object.keys(v).map((function(e,t){var a=Object.values(v)[t].name;return r.a.createElement(i,{key:a,value:a},a)})))),r.a.createElement(ut.a.Item,null,r.a.createElement(gt.a,null,"I am creator")),r.a.createElement(ut.a.Item,null,r.a.createElement(z.a,{key:"cancel",type:"link",icon:r.a.createElement(Fe.a,null),style:{marginLeft:"10px"},disabled:l,onClick:o},"Clear")))}Et.defaultProps={isContactFilterClearDisabled:!0};var ht=Et;var bt=Object(o.c)((function(e){return{isContactFilterClearDisabled:e.contacts.isContactFilterClearDisabled}}),(function(e){return{genderFilter:function(t){return e(he(t))},nationalityFilter:function(t){return e(be(t))},nameFilter:function(t){return e(ye(t))},handleClearForm:function(){return e(ve())}}}))(ht),yt=a(625);function vt(e){var t=e.contactsCollection,a=e.isLoading,n=$.a.Text,c=Object(L.f)().url,l=[{title:"Avatar",dataIndex:"avatar",key:"avatar",render:function(e,t){return r.a.createElement(B.a,{url:c,to:"".concat(c,"/").concat(t.key)},r.a.createElement(ae.a,{src:e,size:"large"}))},width:80},{title:"Full Name",dataIndex:"fullName",key:"fullName",render:function(e,t){return r.a.createElement(B.a,{url:c,to:"".concat(c,"/").concat(t.key)},e)},sorter:function(e,t){return e.fullName.localeCompare(t.fullName)},width:170},{title:"Birthday",dataIndex:"birthday",key:"birthday",width:250},{title:"Email",dataIndex:"email",key:"email",render:function(e){return r.a.createElement("span",null,r.a.createElement(n,{copyable:{text:e},style:{paddingRight:"8px"}}),r.a.createElement("a",{href:"mailto:".concat(e)},e))},ellipsis:!0,width:150},{title:"Phone",dataIndex:"phone",key:"phone",render:function(e){return r.a.createElement("span",null,r.a.createElement(n,{copyable:{text:e},style:{paddingRight:"8px"}}),r.a.createElement("a",{href:"tel:".concat(e)},e))},ellipsis:!0,width:150},{title:"Location",dataIndex:"location",key:"location",render:function(e){return r.a.createElement("span",null,r.a.createElement(n,{copyable:{text:e},style:{paddingRight:"8px"}}),r.a.createElement("span",null,e))},width:250},{title:"Nationality",dataIndex:"nationality",key:"nationality",render:function(e){return r.a.createElement(Qe,{userNationality:e})},align:"right",width:170}],o=t.map((function(e,t){return{key:t+1,avatar:e.picture.thumbnail,fullName:"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),birthday:"".concat(e.dob.date," ").concat(e.dob.age," years"),email:e.email,phone:e.phone,location:"/".concat(e.location.country,"/\n                ").concat(e.location.street.number,"\n                ").concat(e.location.street.name,",\n                ").concat(e.location.city,",\n                ").concat(e.location.state,"\n                ").concat(e.location.postcode),nationality:e.nat}}));return a?r.a.createElement(ee.a,null):r.a.createElement(yt.a,{columns:l,dataSource:o,pagination:!1,style:{marginBottom:15,boxShadow:"0 5px 5px hsla(0,0%,40%,.1"},scroll:{x:320}})}vt.defaultProps={contactsCollection:[{}]};var Ct=vt,St=a(626);a(603);function Nt(e){var t=e.url,a=e.id,n=e.contactCardImage,c=e.contactCardTitle,l=e.contactCardTitleSecondary,o=e.contactCardEmail,i=e.contactCardPhone,s=e.contactCardLocationCountry,m=e.contactCardLocation,u=e.contactCardNationality,d=$.a.Text,g=$.a.Link,f=x()("ContactCard"),p=x()("ContactCard-picture"),E=x()("ContactCard-contactsList"),h=x()("ContactCard-contactsItem"),b=x()("ContactCard--secondaryColor");return r.a.createElement(St.a,{className:f,hoverable:!0},r.a.createElement(B.a,{url:t,to:"".concat(t,"/").concat(a)},r.a.createElement(Ze,{className:p,src:n}),r.a.createElement(g,{href:"".concat(t,"/").concat(a),style:{fontSize:18,textAlign:"left"}},c,r.a.createElement(d,{type:"secondary",style:{fontSize:"12px",paddingLeft:"5px"}},l))),r.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),r.a.createElement("ul",{className:E},r.a.createElement("li",{className:h},r.a.createElement(d,{copyable:{text:o},style:{paddingRight:"8px"},ellipsis:{rows:1}}),r.a.createElement("a",{href:"mailto:".concat(o)},o)),r.a.createElement("li",{className:h},r.a.createElement(d,{copyable:{text:i},style:{paddingRight:"8px"}}),r.a.createElement("a",{href:"tel:".concat(i)},i)),r.a.createElement("li",{className:h},r.a.createElement(d,{copyable:{text:"[".concat(s,"] ").concat(m)},style:{paddingRight:"8px"}}),r.a.createElement(d,{strong:!0,className:b},"/".concat(s,"/")),r.a.createElement("br",null),r.a.createElement("span",{className:b},m))),r.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),r.a.createElement(Qe,{userNationality:u}))}Nt.defaultProps={contactCardImage:"",contactCardTitle:"Card title",contactCardTitleSecondary:"title secondary",contactCardEmail:"mail@example.com",contactCardPhone:"1234567",contactCardLocation:"Earth",contactCardLocationCountry:"USA",contactCardNationality:"Geek"};var Ot=Nt;function It(e){var t=e.contactsCollection,a=e.isLoading,n=Object(L.f)().url;return a?r.a.createElement(ee.a,null):r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(Ot,{key:qe(),url:n,id:t+1,contactCardImage:e.picture.medium,contactCardTitle:"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),contactCardTitleSecondary:"(".concat(e.dob.age," years)"),contactCardEmail:e.email,contactCardPhone:e.phone,contactCardLocationCountry:e.location.country,contactCardLocation:"".concat(e.location.street.number,"\n                ").concat(e.location.street.name,",\n                ").concat(e.location.city,",\n                ").concat(e.location.state,"\n                ").concat(e.location.postcode),contactCardNationality:e.nat})})))}It.defaultProps={contactsCollection:[{}]};var Tt=It;function wt(e){var t=e.contactsData,a=$.a.Text,n=pt().width;return r.a.createElement(nt.a,{gutter:[16,14],justify:"start",style:{width:"90%"}},Object.keys(v).map((function(e,c){var l=Object.values(v)[c].name,o=t.filter((function(t){return t.nat===e}));return r.a.createElement(rt.a,{key:qe(),className:"gutter-row",span:n>=620?4:12,style:{textAlign:"left"}},r.a.createElement(a,{strong:!0},l,":"," "),r.a.createElement(a,{type:"secondary",ellipsis:!0},o.length," ",1===o.length?"contact":"contacts"))})))}wt.defaultProps={contactsData:[{}]};var Lt=wt;a(606);function Pt(e){var t=e.contactsCollection,a=e.isLoading,n=e.isTiledView,c=e.isTableView,l=e.handleTiledView,o=e.handleTabularView,i=e.collectionSize,s=e.malesAmount,m=e.femalesAmount,u=e.indeterminateAmount,d=e.contactsPerPage,g=e.currentPage,f=e.defaultCurrentPage,p=e.handlePaginate,E=e.handleFetchContacts,h=w.a.Content,b=$.a.Title,y=$.a.Text,v=x()("ContactsPage-serviceContainer"),C=x()("ViewSwitcherButton"),S=g*d,N=S-d,O=t.slice(N,S);return r.a.createElement(h,null,r.a.createElement("div",{className:"ContactsPage"},r.a.createElement("div",{className:"ContactsPage-header"},r.a.createElement(b,{level:1,style:{fontSize:"32px"}},"Contacts"),r.a.createElement("div",null,r.a.createElement(tt.a,{title:"Update data"},r.a.createElement(z.a,{shape:"circle-outline",type:"dashed",icon:r.a.createElement(ot.a,null),style:{marginRight:"8px"},onClick:function(){E()},loading:a})),r.a.createElement(tt.a,{title:"Tiled view"},r.a.createElement(z.a,{type:n?"primary":"default",icon:r.a.createElement(it.a,null),className:C,onClick:l})),r.a.createElement(tt.a,{title:"Tabular view"},r.a.createElement(z.a,{type:c?"primary":"default",icon:r.a.createElement(st.a,null),className:C,onClick:o})))),r.a.createElement(at.a,{style:{backgroundColor:"#fafafa",width:"100%",padding:"10px",marginBottom:"15px"}},r.a.createElement("div",{className:v},r.a.createElement(bt,{active:!0}))),c?r.a.createElement(Ct,{contactsCollection:O,isLoading:a}):r.a.createElement(nt.a,{justify:"space-between"},r.a.createElement(Tt,{contactsCollection:O,isLoading:a})),r.a.createElement(at.a,{style:{backgroundColor:"#fafafa",width:"100%",padding:"10px",marginBottom:"15px"}},r.a.createElement("div",{className:v},r.a.createElement(b,{level:2},"Statistic"),r.a.createElement(nt.a,{gutter:16},r.a.createElement(rt.a,null,r.a.createElement(ct.a,{title:"Collection size",value:i})),r.a.createElement(rt.a,null,r.a.createElement(ct.a,{title:"Males",value:s})),r.a.createElement(rt.a,null,r.a.createElement(ct.a,{title:"Females",value:m})),r.a.createElement(rt.a,null,r.a.createElement(ct.a,{title:"Indeterminate",value:u}))),r.a.createElement(nt.a,null,r.a.createElement(rt.a,null,s>m?r.a.createElement(y,{mark:!0},"Men predominate"):r.a.createElement(y,{mark:!0},"Women predominate"))),r.a.createElement(y,{type:"secondary"},"Nationalities"),r.a.createElement(Lt,{contactsData:t}))),r.a.createElement(lt.a,{size:"small",defaultCurrent:f,total:i,defaultPageSize:d,showSizeChanger:!0,onChange:function(e,t){p(e,t)}})))}Pt.defaultProps={contactsCollection:[{}],isTableView:!0,isTiledView:!1,collectionSize:0,malesAmount:0,femalesAmount:0,indeterminateAmount:0,contactsPerPage:10,currentPage:1,defaultCurrentPage:1};var xt=Pt;var jt=Object(o.c)((function(e){var t=e.contacts,a=t.contactsCollection,n=t.collectionLength,r=t.males,c=t.females,l=t.indeterminate;return{contactsCollection:a,isLoading:t.isLoading,isTableView:t.isTableView,isTiledView:t.isTiledView,contactsPerPage:t.contactsPerPage,currentPage:t.currentPage,collectionSize:n,malesAmount:r,femalesAmount:c,indeterminateAmount:l}}),(function(e){return{handleFetchContacts:function(){return e(Se())},handleTiledView:function(){return e(de())},handleTabularView:function(){return e(ge())},handlePaginate:function(t,a){return e(Ee(t,a))}}}))(xt),At=a(651);a(616);function Ft(e){var t=e.handleClick,a=e.isLoading,n=e.contactsCollection,c=w.a.Content,l=$.a.Title,o=$.a.Text,i=x()("ContactProfile"),s=x()("ContactProfile-body"),m=x()("ContactProfile-contactImage"),u=x()("ContactProfile-contactInfo"),d=x()("ContactProfile-contactContactsList"),g=x()("ContactProfile-contactContactsItem"),f=n[Object(L.f)().params.contactId-1];return a?r.a.createElement(ee.a,null):r.a.createElement(c,null,r.a.createElement("div",{className:i},r.a.createElement(l,{level:1,style:{fontSize:"32px"}},"Contact View"),r.a.createElement("div",{className:s},r.a.createElement(Ze,{className:m,src:f.picture.medium}),r.a.createElement("div",{className:u},r.a.createElement(l,{level:3},"".concat(f.name.title,". ").concat(f.name.first," ").concat(f.name.last),r.a.createElement(o,{type:"secondary",style:{fontSize:"19px",paddingLeft:"5px"}},"(".concat(f.dob.age," years)"))),r.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),r.a.createElement("ul",{className:d},r.a.createElement("li",{className:g},r.a.createElement(o,{copyable:{text:f.email},style:{paddingRight:"8px"}}),r.a.createElement("a",{href:"mailto:".concat(f.email)},f.email)),r.a.createElement("li",{className:g},r.a.createElement(o,{copyable:{text:f.phone},style:{paddingRight:"8px"}}),r.a.createElement("a",{href:"tel:".concat(f.phone)},f.phone)),r.a.createElement("li",{className:g},r.a.createElement(o,{copyable:{text:"[".concat(f.location.country,"]\n                             ").concat(f.location.street.number,"\n                             ").concat(f.location.street.name,",\n                             ").concat(f.location.city,",\n                             ").concat(f.location.state,"\n                             ").concat(f.location.postcode)},style:{paddingRight:"8px"}}),r.a.createElement(o,{strong:!0,style:{color:"#5b5b6b"}},"/".concat(f.location.country,"/")),r.a.createElement("br",null)," ",r.a.createElement(o,{type:"secondary",style:{color:"#5b5b6b"},ellipsis:!0},"".concat(f.location.street.number,"\n                      ").concat(f.location.street.name,",\n                      ").concat(f.location.city,",\n                      ").concat(f.location.state,"\n                      ").concat(f.location.postcode)))),r.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),r.a.createElement(Qe,{userNationality:f.nat})))),r.a.createElement(z.a,{type:"primary",onClick:t,icon:r.a.createElement(At.a,null),style:{marginTop:15}},"Back"))}Ft.defaultProps={isLoading:!1,contactsCollection:[{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:{number:5421,name:"Avenue Paul Eluard"},city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"}]};var _t=Ft;var kt=Object(o.c)((function(e){var t=e.contacts;return{contactsCollection:t.contactsCollection,isLoading:t.isContactProfileLoading}}),(function(e){return{handleClick:function(){return e((function(e){e(Object(j.d)("/contacts"))}))}}}))(_t);a(617);var Ut=function(e){var t=e.handleClick,a=w.a.Content,n=$.a.Text,c=x()("Page404");return r.a.createElement(a,null,r.a.createElement("div",{className:c},r.a.createElement(n,{type:"danger",style:{fontSize:"78px",fontWeight:700}},"404"),r.a.createElement("h1",null,"Requested page not found!"),r.a.createElement("div",null,r.a.createElement(z.a,{type:"primary",onClick:t},"Back to home"))))};var Dt=Object(o.c)(null,(function(e){return{handleClick:function(){return e(q())}}}))(Ut);a(618);var Rt=function(e){var t=e.history,a=x()("BaseAppLayout");return r.a.createElement(L.b,{history:t},r.a.createElement(w.a,{className:a},r.a.createElement(ue,null),r.a.createElement(Be,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/",component:Ve}),r.a.createElement(L.a,{exact:!0,path:"/profile",component:et}),r.a.createElement(L.a,{exact:!0,path:"/contacts",component:jt}),r.a.createElement(L.a,{exact:!0,path:"/contacts/:contactId",render:function(){return r.a.createElement(kt,null)}}),r.a.createElement(L.a,{exact:!0,path:"*",component:Dt})),r.a.createElement(Je,null)))};a(619),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{store:T},r.a.createElement(i.a,{history:O},r.a.createElement(Rt,{history:O}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[331,1,2]]]);
//# sourceMappingURL=main.7a20a048.chunk.js.map