(this["webpackJsonpwezom-test"]=this["webpackJsonpwezom-test"]||[]).push([[0],{155:function(e,t,a){e.exports=a.p+"static/media/react-logo.c33873b0.svg"},331:function(e,t,a){e.exports=a(620)},399:function(e,t,a){},400:function(e,t,a){},401:function(e,t,a){},450:function(e,t,a){},582:function(e,t,a){},583:function(e,t,a){},592:function(e,t,a){},603:function(e,t,a){},606:function(e,t,a){},616:function(e,t,a){},617:function(e,t,a){},618:function(e,t,a){},619:function(e,t,a){},620:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),l=a.n(r),o=a(38),i=a(95),s=a(46),m=a(296),u=a(297),d=a.n(u),g=a(299),f=a(248),E={preloadedState:{isSignInFormShowed:!1,isUserSignedIn:!!localStorage.getItem("user"),isLoading:!1,isLoadingFail:!1,user:JSON.parse(localStorage.getItem("user"))||{},userEmail:"",userPassword:""},contacts:{isTableView:!0,isTiledView:!1,isLoading:!1,contactsCollection:JSON.parse(localStorage.getItem("contactsCollection"))||[],collectionLength:JSON.parse(localStorage.getItem("collectionLength"))||0,males:JSON.parse(localStorage.getItem("malesAmount"))||0,females:JSON.parse(localStorage.getItem("femalesAmount"))||0,indeterminate:JSON.parse(localStorage.getItem("indeterminateAmount"))||0,contactsPerPage:10,defaultCurrentPage:1,currentPage:1,isContactProfileLoading:!1,isContactFilterClearDisabled:!0}},p=a(637),h=a(31),b=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_SIGN_IN_FORM":return Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!0});case"HIDE_SIGN_IN_FORM":return Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!1});case"SWITCH_TO_USER_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!1,isUserSignedIn:!0});case"USER_DATA_LOADING":return localStorage.setItem("numberOfContacts",JSON.stringify(b(1,200))),Object(h.a)(Object(h.a)({},e),{},{isLoading:!0,isLoadingFail:!1});case"USER_DATA_LOADING_FAIL":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,isLoadingFail:!0});case"GET_USER_AUTH_DATA":return Object(h.a)(Object(h.a)({},e),{},{userEmail:t.payload.email,userPassword:t.payload.password});case"GET_USER":return localStorage.setItem("user",JSON.stringify(t.payload.userData)),Object(h.a)(Object(h.a)({},e),{},{isSignInFormShowed:!1,isUserSignedIn:!0,user:t.payload.userData,isLoading:!1,isLoadingFail:!1});case"LOGOUT":return localStorage.clear(),{isSignInFormShowed:!1,isUserSignedIn:!!localStorage.getItem("user"),user:JSON.parse(localStorage.getItem("user"))||{},userEmail:"",userPassword:""};default:return e}},v={AU:{name:"Australian",color:"magenta"},BR:{name:"Brazilian",color:"red"},CA:{name:"Canadian",color:"volcano"},CH:{name:"Swiss",color:"orange"},DE:{name:"German",color:"gold"},DK:{name:"Danish",color:"lime"},ES:{name:"Spanish",color:"green"},FI:{name:"Finnish",color:"cyan"},FR:{name:"French",color:"blue"},GB:{name:"British",color:"geekblue"},IE:{name:"Irish",color:"purple"},IR:{name:"Iranian",color:"#f50"},NO:{name:"Norwegian",color:"#2db7f5"},NL:{name:"Dutch",color:"#87d068"},NZ:{name:"New Zealander",color:"#9e1068"},TR:{name:"Turkish",color:"#ffd666"},US:{name:"American"}};var C=function(e,t){return e.some((function(e){return t===e}))};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.contacts,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TILED_VIEW":return Object(h.a)(Object(h.a)({},e),{},{isTiledView:!0,isTableView:!1});case"SET_TABLE_VIEW":return Object(h.a)(Object(h.a)({},e),{},{isTiledView:!1,isTableView:!0});case"CONTACTS_LOADING":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case"GET_CONTACTS_SUCCESS":localStorage.setItem("contactsCollection",JSON.stringify(t.payload.contactsData));var a=JSON.parse(localStorage.getItem("contactsCollection"))||[];localStorage.setItem("collectionLength",JSON.stringify(a.length));var n=JSON.parse(localStorage.getItem("contactsCollection"))||[],c=n.filter((function(e){return"male"===e.gender})).length;localStorage.setItem("malesAmount",JSON.stringify(c));var r=JSON.parse(localStorage.getItem("contactsCollection"))||[],l=r.filter((function(e){return"female"===e.gender})).length;localStorage.setItem("femalesAmount",JSON.stringify(l));var o=JSON.parse(localStorage.getItem("contactsCollection"))||[],i=o.filter((function(e){return"indeterminate"===e.gender}));return localStorage.setItem("indeterminateAmount",JSON.stringify(i)),Object(h.a)(Object(h.a)({},e),{},{contactsCollection:a,collectionLength:JSON.parse(localStorage.getItem("collectionLength")),males:JSON.parse(localStorage.getItem("malesAmount")),females:JSON.parse(localStorage.getItem("femalesAmount")),indeterminate:JSON.parse(localStorage.getItem("indeterminateAmount")),isLoading:!1});case"PAGINATE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.payload.currentPageNumber,contactsPerPage:t.payload.pageSize});case"FILTER_BY_NAME":var s=t.payload.name,m=JSON.parse(localStorage.getItem("contactsCollection"))||[],u=[];return m.map((function(e){var t=e.name;return Object.values(t).map((function(t){return t.toLowerCase().includes(s.toLowerCase())?(u.push(e),u):[]})),u})),s?Object(h.a)(Object(h.a)({},e),{},{contactsCollection:u,isContactFilterClearDisabled:!1}):Object(h.a)(Object(h.a)({},e),{},{contactsCollection:m});case"FILTER_BY_GENDER":var d=JSON.parse(localStorage.getItem("contactsCollection"))||[];return t.payload.gender?Object(h.a)(Object(h.a)({},e),{},{contactsCollection:d.filter((function(e){return e.gender===t.payload.gender})),isContactFilterClearDisabled:!1}):Object(h.a)(Object(h.a)({},e),{},{contactsCollection:d});case"FILTER_BY_NATIONALITY":var g=t.payload.nationalities,f=JSON.parse(localStorage.getItem("contactsCollection"))||[],p=[];return Object.keys(v).map((function(e,t){var a=Object.values(v)[t].name;return C(g,a)?(f.filter((function(t){return t.nat===e})).forEach((function(e){return p.push(e)})),p):p})),Object(h.a)(Object(h.a)({},e),{},{contactsCollection:p,isContactFilterClearDisabled:!1});case"CLEAR_FILTERS_FORM":var b=JSON.parse(localStorage.getItem("contactsCollection"))||[];return Object(h.a)(Object(h.a)({},e),{},{contactsCollection:b,isContactFilterClearDisabled:!0});case"LOGOUT":return{isTableView:!0,isTiledView:!1,isLoading:!1,contactsCollection:[],collectionLength:0,males:0,females:0,indeterminate:0,contactsPerPage:10,defaultCurrentPage:1,currentPage:1,isContactProfileLoading:!1};default:return e}},O=function(e){return Object(s.c)({router:Object(i.b)(e),preloadedState:y,contacts:S,form:p.a})},N=Object(g.a)(),I=s.d.apply(void 0,[Object(s.a)(Object(f.a)(N),d.a,m.a)].concat([])),T=Object(s.e)(O(N),E,I),w=a(623),L=a(42),P=a(2),x=a.n(P),j=a(57);var A=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var c=function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];var r={type:e,payload:{}};return a.forEach((function(e,t){r.payload[a[t]]=n[t]})),r};return c.type=e,c},F=A("SHOW_SIGN_IN_FORM"),_=A("HIDE_SIGN_IN_FORM"),k=A("SWITCH_TO_USER_PROFILE"),U=A("USER_DATA_LOADING"),D=A("USER_DATA_LOADING_FAIL");function R(){return function(e,t){var a=t().form.signInForm.values,n=a.userEmail,c=a.userPassword;e(U()),e({type:"GET_USER_AUTH_DATA",payload:{email:n,password:c}});var r="".concat("/randomuser-test","/"),l="https://randomuser.me/api/?seed=".concat(n);fetch(l).then((function(t){return t.ok||e(D()),t})).then((function(e){return e.json()})).then((function(t){return e({type:"GET_USER",payload:{userData:t.results}}),t})).then((function(){e(Object(j.d)("".concat(r,"profile")))})).catch((function(){}))}}var z=a(64),B=a(643),G=a(63),V=(a(108),a(399),a(155)),H=a.n(V);var J=function(e){var t=e.isUserLoggedOut,a=x()("Logo");return t?c.a.createElement("img",{src:H.a,alt:"Wezom logo",className:a}):c.a.createElement(G.a,{to:"/"},c.a.createElement("img",{src:H.a,alt:"Wezom logo",className:a}))},W=Object(o.c)((function(e){return{isUserLoggedOut:!e.preloadedState.isUserSignedIn}}),null)(J);a(400);var M=function(e){var t=e.isUserLoggedOut,a=x()("Navbar"),n=x()("Navbar-list");return t?c.a.createElement("nav",{className:a},c.a.createElement("ul",{className:n},c.a.createElement("li",{key:"Home",className:"Navbar-item"},c.a.createElement("span",null,"Home")))):c.a.createElement("nav",{className:a},c.a.createElement("ul",{className:n},c.a.createElement("li",{key:"home",className:"Navbar-item"},c.a.createElement(G.a,{exact:!0,to:"/",activeStyle:{cursor:"auto",color:"#5a5a5a"}},"Home")),c.a.createElement("li",{key:"contacts",className:"Navbar-item"},c.a.createElement(G.a,{exact:!0,to:"/contacts",activeStyle:{cursor:"auto",color:"#5a5a5a"}},"Contacts"))))},Z=Object(o.c)((function(e){return{isUserLoggedOut:!e.preloadedState.isUserSignedIn}}),null)(M),Y=A("LOGOUT");function K(){var e="".concat("/randomuser-test","/");return function(t){t(Object(j.d)(e))}}var q=a(327),Q=a(629),$=a(119),X=a(622),ee=a(306),te=a(193),ae=a(633),ne=a(640),ce=a(641),re=a(642);a(401);function le(e){var t=e.isUserDataLoading,a=e.logout,r=e.goHomePage,l=e.userData,o=x()("UserProfileHeaderBlock"),i=x()("UserProfileHeaderBlock-button"),s=x()("UserProfileHeaderBlock-avatar"),m=x()("UserProfileHeaderBlock-menu"),u=x()("UserProfileHeaderBlock-menuText"),d=Q.a.Text,g=c.a.createElement($.a,{className:m},c.a.createElement($.a.Item,{key:"1",icon:c.a.createElement(ne.a,null)},c.a.createElement(G.a,{to:"/profile"},"Profile")),c.a.createElement(X.a,{style:{margin:"0"}}),c.a.createElement($.a.Item,{key:"2",icon:c.a.createElement(ce.a,null),onClick:function(){a(),r(),q.b.success("Successfully logged out")}},"Logout"));return t?c.a.createElement(ee.a,null):c.a.createElement("div",{className:o},l.map((function(e){return c.a.createElement(n.Fragment,{key:e.login.uuid},c.a.createElement(te.a,{overlay:g},c.a.createElement(z.a,{type:"link",className:i},c.a.createElement(d,{className:u,style:{verticalAlign:"middle"},ellipsis:!0},"Hello! ".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last)),c.a.createElement(re.a,{className:u}),c.a.createElement(ae.a,{className:s,src:e.picture.thumbnail,style:{width:"46px",height:"46px"}}))))})))}le.defaultProps={userData:[]};var oe=le;var ie=Object(o.c)((function(e){var t=e.preloadedState;return{userData:t.user,isUserDataLoading:t.isLoading}}),(function(e){return{logout:function(){return e(Y())},goHomePage:function(){return e(K())}}}))(oe);a(450);function se(e){var t=e.handleSignIn,a=e.isSignedIn,n=x()("Header"),r=x()("Header-logo"),l=x()("Header-navMenu"),o=x()("Header-profile");return c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a.Header,{className:n},c.a.createElement("div",{className:r},c.a.createElement(W,null)),c.a.createElement("div",{className:l},c.a.createElement(Z,null)),c.a.createElement("div",{className:o},a?c.a.createElement(ie,null):c.a.createElement(z.a,{type:"link",htmlType:"button",icon:c.a.createElement(B.a,null),onClick:t},"Sign In"))))}se.defaultProps={isSignedIn:!1};var me=se;var ue=Object(o.c)((function(e){return{isSignedIn:e.preloadedState.isUserSignedIn}}),(function(e){return{handleSignIn:function(){return e(F())}}}))(me),de=A("SET_TILED_VIEW"),ge=A("SET_TABLE_VIEW"),fe=A("CONTACTS_LOADING"),Ee=A("GET_CONTACTS_SUCCESS","contactsData"),pe=(A("CONTACTS_LOADING_FAIL"),A("PAGINATE","currentPageNumber","pageSize")),he=A("FILTER_BY_GENDER","gender"),be=A("FILTER_BY_NATIONALITY","nationalities"),ye=A("FILTER_BY_NAME","name"),ve=A("CLEAR_FILTERS_FORM");function Ce(e){if(!e.ok)throw Error(e.statusText);return e}function Se(){return function(e){var t=JSON.parse(localStorage.getItem("numberOfContacts"));e(fe());var a="https://randomuser.me/api/?results=".concat(t);fetch(a).then(Ce).then((function(e){return e.json()})).then((function(t){return e(Ee(t.results)),t})).catch((function(){}))}}var Oe,Ne=a(136),Ie=a(630),Te=a(639),we=a(627),Le=a(232),Pe=a(631),xe=a(644),je=a(645),Ae=a(646),Fe=a(647),_e=function(e){return e||"number"===typeof e?void 0:"The email field is required."},ke=function(e){return e||"number"===typeof e?void 0:"The password field is required."},Ue=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"The email format is invalid.":void 0},De=(Oe=8,function(e){return e&&e.length<Oe?"The password must be at least ".concat(Oe," characters."):void 0}),Re=function(e){var t=e.handleFormSubmit,a=e.handleFormClose,r=e.submitting,l=e.invalid,o=e.switchToProfile,i=e.handleFetchContacts,s=e.isVisible,m=Object(n.useState)(!1),u=Object(Ne.a)(m,2),d=u[0],g=u[1],f=function(){g(!d)},E=c.a.createElement(xe.a,{onClick:f}),p=c.a.createElement(je.a,{onClick:f});return c.a.createElement(Pe.a,{title:"Sign In",centered:!0,visible:s,closable:!1,footer:null},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(e),o(),i()}},c.a.createElement("div",{style:{marginBottom:"15px"}},c.a.createElement(Ie.a,{name:"userEmail",type:"email",component:Le.TextField,size:"large",placeholder:"Email",prefix:c.a.createElement(ne.a,null),validate:[_e,Ue]})),c.a.createElement("div",{style:{marginBottom:"15px"}},c.a.createElement(Ie.a,{name:"userPassword",type:d?"text":"password",placeholder:"Password",component:Le.TextField,visibilityToggle:!0,size:"large",prefix:c.a.createElement(Ae.a,null),suffix:d?E:p,validate:[ke,De]})),c.a.createElement(z.a,{key:"signin",type:"primary",htmlType:"submit",disabled:l||r},"Sign In"),c.a.createElement(z.a,{key:"cancel",type:"text",danger:!0,icon:c.a.createElement(Fe.a,null),onClick:a},"Cancel")))};Re.defaultProps={isVisible:!1};var ze=Object(Te.a)("signInForm");Re=Object(o.c)((function(e){return{userEmail:ze(e,"userEmail"),userPassword:ze(e,"userPassword")}}))(Re);var Be=Object(we.a)({form:"signInForm"})(Re);var Ge=Object(o.c)((function(e){return{isVisible:e.preloadedState.isSignInFormShowed}}),(function(e){return{handleFormSubmit:function(){return e(R())},switchToProfile:function(){return e(k())},handleFormClose:function(){return e(_())},handleFetchContacts:function(){return e(Se())}}}))(Be);a(582);var Ve=function(){var e=x()("Footer");return c.a.createElement(w.a.Footer,{className:e},c.a.createElement("span",null,"2020 \xa9 Random User React-Redux Test"))};a(583);var He=function(){var e=w.a.Content;return c.a.createElement(e,null,c.a.createElement("div",{className:"HomePage"},c.a.createElement("img",{className:"App-logo",src:H.a,alt:"React logo"})))},Je=a(636),We=a(632);function Me(e){var t=e.src,a=e.className,n=x()(a);return c.a.createElement(We.a,{src:t,className:n})}Me.defaultProps={className:""};var Ze=Me,Ye=a(638);var Ke=function(){return"_".concat(Math.random().toString(16).substr(2,9))};var qe=function(e){var t=e.userNationality;return c.a.createElement(c.a.Fragment,null,Object.keys(v).map((function(e,a){if(e===t){var n=Object.values(v)[a].name,r=Object.values(v)[a].color;return c.a.createElement(Ye.a,{key:Ke(),color:r},n)}return null})))};a(592);function Qe(e){var t=e.userData,a=e.isUserDataLoading,r=e.isUserDataLoadingFail,l=e.attemptUserUpdate,o=Q.a.Title,i=Q.a.Text,s=x()("UserProfile"),m=x()("UserProfile-body"),u=x()("UserProfile-userImage"),d=x()("UserProfile-userInfo"),g=x()("UserProfile-userContactsList"),f=x()("UserProfile-userContactsItem"),E=x()("UserProfile--secondaryColor");return a?c.a.createElement(ee.a,{size:"large"}):r?c.a.createElement(Je.a,{type:"error",message:"Something went wrong. Please try again later",showIcon:!0,closable:!0,onClose:function(){l()}}):c.a.createElement("div",{className:s},c.a.createElement(o,{level:1,style:{fontSize:"32px"}},"Profile"),c.a.createElement("div",{className:m},t.map((function(e){return c.a.createElement(n.Fragment,{key:e.login.uuid},c.a.createElement(Ze,{className:u,src:e.picture.medium}),c.a.createElement("div",{className:d},c.a.createElement(o,{level:3},"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),c.a.createElement(i,{type:"secondary",style:{fontSize:"19px",paddingLeft:"5px"}},"(".concat(e.dob.age," years)"))),c.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),c.a.createElement("ul",{className:g},c.a.createElement("li",{className:f},c.a.createElement(i,{copyable:{text:e.email},style:{paddingRight:"8px"}}),c.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)),c.a.createElement("li",{className:f},c.a.createElement(i,{copyable:{text:e.phone},style:{paddingRight:"8px"}}),c.a.createElement("a",{href:"tel:".concat(e.phone)},e.phone)),c.a.createElement("li",{className:f},c.a.createElement(i,{copyable:{text:"[".concat(e.location.country,"]\n                             ").concat(e.location.street.number,"\n                             ").concat(e.location.street.name,",\n                             ").concat(e.location.city,",\n                             ").concat(e.location.state,"\n                             ").concat(e.location.postcode)},style:{paddingRight:"8px"}}),c.a.createElement(i,{strong:!0,className:E},"/".concat(e.location.country,"/")),c.a.createElement("br",null),c.a.createElement(i,{className:E},"".concat(e.location.street.number,"\n                      ").concat(e.location.street.name,",\n                      ").concat(e.location.city,",\n                      ").concat(e.location.state,"\n                      ").concat(e.location.postcode)))),c.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),c.a.createElement(qe,{userNationality:e.nat})))}))))}Qe.defaultProps={isUserDataLoading:!1,isUserDataLoadingFail:!1,attemptUserUpdate:function(){},userData:[{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:{number:5421,name:"Avenue Paul Eluard"},city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"}]};var $e=Qe;var Xe=Object(o.c)((function(e){var t=e.preloadedState;return{userData:t.user,isUserDataLoading:t.isLoading,isUserDataLoadingFail:t.isLoadingFail}}),(function(e){return{attemptUserUpdate:function(){return e(R())}}}))($e);var et=function(){var e=w.a.Content;return c.a.createElement(e,null,c.a.createElement(Xe,null))},tt=a(89),at=a(624),nt=a(140),ct=a(81),rt=a(634),lt=a(325),ot=a(648),it=a(649),st=a(650),mt=a(166),ut=a(628),dt=a(635),gt=a(165);var ft=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};var Et=function(){var e=Object(n.useState)(ft()),t=Object(Ne.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c(ft())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a};function pt(e){var t=e.nameFilter,a=e.genderFilter,r=e.nationalityFilter,l=e.isContactFilterClearDisabled,o=e.handleClearForm,i=mt.a.Option,s=Object(n.useState)(""),m=Object(Ne.a)(s,2),u=m[0],d=m[1],g=u;Object(n.useEffect)((function(){var e=setTimeout((function(){return t(g)}),500);return function(){return clearTimeout(e)}}),[g]);var f=Et().width;return c.a.createElement(ut.a,{layout:f>=620?"inline":"vertical",style:{width:"100%"}},c.a.createElement(ut.a.Item,null,c.a.createElement(dt.a.Search,{placeholder:"Search by full name",size:"large",allowClear:!0,style:{width:f>=620?530:"100%"},value:u,onChange:function(e){return d(e.target.value)}})),c.a.createElement(ut.a.Item,null,c.a.createElement(mt.a,{placeholder:"Gender",size:"large",allowClear:!0,style:{width:f>=620?195:"100%"},onChange:function(e){a(e)}},c.a.createElement(i,{value:"male"},"Male"),c.a.createElement(i,{value:"female"},"Female"),c.a.createElement(i,{value:"indeterminate"},"Indeterminate"))),c.a.createElement(ut.a.Item,null,c.a.createElement(mt.a,{placeholder:"Nationality",mode:"tags",size:"large",style:{width:f>=620?245:"100%"},onChange:function(e){r(e)}},Object.keys(v).map((function(e,t){var a=Object.values(v)[t].name;return c.a.createElement(i,{key:a,value:a},a)})))),c.a.createElement(ut.a.Item,null,c.a.createElement(gt.a,null,"I am creator")),c.a.createElement(ut.a.Item,null,c.a.createElement(z.a,{key:"cancel",type:"link",icon:c.a.createElement(Fe.a,null),style:{marginLeft:"10px"},disabled:l,onClick:o},"Clear")))}pt.defaultProps={isContactFilterClearDisabled:!0};var ht=pt;var bt=Object(o.c)((function(e){return{isContactFilterClearDisabled:e.contacts.isContactFilterClearDisabled}}),(function(e){return{genderFilter:function(t){return e(he(t))},nationalityFilter:function(t){return e(be(t))},nameFilter:function(t){return e(ye(t))},handleClearForm:function(){return e(ve())}}}))(ht),yt=a(625);function vt(e){var t=e.contactsCollection,a=e.isLoading,n=Q.a.Text,r=Object(L.f)().url,l=[{title:"Avatar",dataIndex:"avatar",key:"avatar",render:function(e,t){return c.a.createElement(G.a,{url:r,to:"".concat(r,"/").concat(t.key)},c.a.createElement(ae.a,{src:e,size:"large"}))},width:80},{title:"Full Name",dataIndex:"fullName",key:"fullName",render:function(e,t){return c.a.createElement(G.a,{url:r,to:"".concat(r,"/").concat(t.key)},e)},sorter:function(e,t){return e.fullName.localeCompare(t.fullName)},width:170},{title:"Birthday",dataIndex:"birthday",key:"birthday",width:250},{title:"Email",dataIndex:"email",key:"email",render:function(e){return c.a.createElement("span",null,c.a.createElement(n,{copyable:{text:e},style:{paddingRight:"8px"}}),c.a.createElement("a",{href:"mailto:".concat(e)},e))},ellipsis:!0,width:150},{title:"Phone",dataIndex:"phone",key:"phone",render:function(e){return c.a.createElement("span",null,c.a.createElement(n,{copyable:{text:e},style:{paddingRight:"8px"}}),c.a.createElement("a",{href:"tel:".concat(e)},e))},ellipsis:!0,width:150},{title:"Location",dataIndex:"location",key:"location",render:function(e){return c.a.createElement("span",null,c.a.createElement(n,{copyable:{text:e},style:{paddingRight:"8px"}}),c.a.createElement("span",null,e))},width:250},{title:"Nationality",dataIndex:"nationality",key:"nationality",render:function(e){return c.a.createElement(qe,{userNationality:e})},align:"right",width:170}],o=t.map((function(e,t){return{key:t+1,avatar:e.picture.thumbnail,fullName:"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),birthday:"".concat(e.dob.date," ").concat(e.dob.age," years"),email:e.email,phone:e.phone,location:"/".concat(e.location.country,"/\n                ").concat(e.location.street.number,"\n                ").concat(e.location.street.name,",\n                ").concat(e.location.city,",\n                ").concat(e.location.state,"\n                ").concat(e.location.postcode),nationality:e.nat}}));return a?c.a.createElement(ee.a,null):c.a.createElement(yt.a,{columns:l,dataSource:o,pagination:!1,style:{marginBottom:15,boxShadow:"0 5px 5px hsla(0,0%,40%,.1"},scroll:{x:320}})}vt.defaultProps={contactsCollection:[{}]};var Ct=vt,St=a(626);a(603);function Ot(e){var t=e.url,a=e.id,n=e.contactCardImage,r=e.contactCardTitle,l=e.contactCardTitleSecondary,o=e.contactCardEmail,i=e.contactCardPhone,s=e.contactCardLocationCountry,m=e.contactCardLocation,u=e.contactCardNationality,d=Q.a.Text,g=Q.a.Link,f=x()("ContactCard"),E=x()("ContactCard-picture"),p=x()("ContactCard-contactsList"),h=x()("ContactCard-contactsItem"),b=x()("ContactCard--secondaryColor");return c.a.createElement(St.a,{className:f,hoverable:!0},c.a.createElement(G.a,{url:t,to:"".concat(t,"/").concat(a)},c.a.createElement(Ze,{className:E,src:n}),c.a.createElement(g,{href:"".concat(t,"/").concat(a),style:{fontSize:18,textAlign:"left"}},r,c.a.createElement(d,{type:"secondary",style:{fontSize:"12px",paddingLeft:"5px"}},l))),c.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),c.a.createElement("ul",{className:p},c.a.createElement("li",{className:h},c.a.createElement(d,{copyable:{text:o},style:{paddingRight:"8px"},ellipsis:{rows:1}}),c.a.createElement("a",{href:"mailto:".concat(o)},o)),c.a.createElement("li",{className:h},c.a.createElement(d,{copyable:{text:i},style:{paddingRight:"8px"}}),c.a.createElement("a",{href:"tel:".concat(i)},i)),c.a.createElement("li",{className:h},c.a.createElement(d,{copyable:{text:"[".concat(s,"] ").concat(m)},style:{paddingRight:"8px"}}),c.a.createElement(d,{strong:!0,className:b},"/".concat(s,"/")),c.a.createElement("br",null),c.a.createElement("span",{className:b},m))),c.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),c.a.createElement(qe,{userNationality:u}))}Ot.defaultProps={contactCardImage:"",contactCardTitle:"Card title",contactCardTitleSecondary:"title secondary",contactCardEmail:"mail@example.com",contactCardPhone:"1234567",contactCardLocation:"Earth",contactCardLocationCountry:"USA",contactCardNationality:"Geek"};var Nt=Ot;function It(e){var t=e.contactsCollection,a=e.isLoading,n=Object(L.f)().url;return a?c.a.createElement(ee.a,null):c.a.createElement(c.a.Fragment,null,t.map((function(e,t){return c.a.createElement(Nt,{key:Ke(),url:n,id:t+1,contactCardImage:e.picture.medium,contactCardTitle:"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),contactCardTitleSecondary:"(".concat(e.dob.age," years)"),contactCardEmail:e.email,contactCardPhone:e.phone,contactCardLocationCountry:e.location.country,contactCardLocation:"".concat(e.location.street.number,"\n                ").concat(e.location.street.name,",\n                ").concat(e.location.city,",\n                ").concat(e.location.state,"\n                ").concat(e.location.postcode),contactCardNationality:e.nat})})))}It.defaultProps={contactsCollection:[{}]};var Tt=It;function wt(e){var t=e.contactsData,a=Q.a.Text,n=Et().width;return c.a.createElement(nt.a,{gutter:[16,14],justify:"start",style:{width:"90%"}},Object.keys(v).map((function(e,r){var l=Object.values(v)[r].name,o=t.filter((function(t){return t.nat===e}));return c.a.createElement(ct.a,{key:Ke(),className:"gutter-row",span:n>=620?4:12,style:{textAlign:"left"}},c.a.createElement(a,{strong:!0},l,":"," "),c.a.createElement(a,{type:"secondary",ellipsis:!0},o.length," ",1===o.length?"contact":"contacts"))})))}wt.defaultProps={contactsData:[{}]};var Lt=wt;a(606);function Pt(e){var t=e.contactsCollection,a=e.isLoading,n=e.isTiledView,r=e.isTableView,l=e.handleTiledView,o=e.handleTabularView,i=e.collectionSize,s=e.malesAmount,m=e.femalesAmount,u=e.indeterminateAmount,d=e.contactsPerPage,g=e.currentPage,f=e.defaultCurrentPage,E=e.handlePaginate,p=e.handleFetchContacts,h=w.a.Content,b=Q.a.Title,y=Q.a.Text,v=x()("ContactsPage-serviceContainer"),C=x()("ViewSwitcherButton"),S=g*d,O=S-d,N=t.slice(O,S);return c.a.createElement(h,null,c.a.createElement("div",{className:"ContactsPage"},c.a.createElement("div",{className:"ContactsPage-header"},c.a.createElement(b,{level:1,style:{fontSize:"32px"}},"Contacts"),c.a.createElement("div",null,c.a.createElement(tt.a,{title:"Update data"},c.a.createElement(z.a,{shape:"circle-outline",type:"dashed",icon:c.a.createElement(ot.a,null),style:{marginRight:"8px"},onClick:function(){p()},loading:a})),c.a.createElement(tt.a,{title:"Tiled view"},c.a.createElement(z.a,{type:n?"primary":"default",icon:c.a.createElement(it.a,null),className:C,onClick:l})),c.a.createElement(tt.a,{title:"Tabular view"},c.a.createElement(z.a,{type:r?"primary":"default",icon:c.a.createElement(st.a,null),className:C,onClick:o})))),c.a.createElement(at.a,{style:{backgroundColor:"#fafafa",width:"100%",padding:"10px",marginBottom:"15px"}},c.a.createElement("div",{className:v},c.a.createElement(bt,{active:!0}))),r?c.a.createElement(Ct,{contactsCollection:N,isLoading:a}):c.a.createElement(nt.a,{justify:"space-between"},c.a.createElement(Tt,{contactsCollection:N,isLoading:a})),c.a.createElement(at.a,{style:{backgroundColor:"#fafafa",width:"100%",padding:"10px",marginBottom:"15px"}},c.a.createElement("div",{className:v},c.a.createElement(b,{level:2},"Statistic"),c.a.createElement(nt.a,{gutter:16},c.a.createElement(ct.a,null,c.a.createElement(rt.a,{title:"Collection size",value:i})),c.a.createElement(ct.a,null,c.a.createElement(rt.a,{title:"Males",value:s})),c.a.createElement(ct.a,null,c.a.createElement(rt.a,{title:"Females",value:m})),c.a.createElement(ct.a,null,c.a.createElement(rt.a,{title:"Indeterminate",value:u}))),c.a.createElement(nt.a,null,c.a.createElement(ct.a,null,s>m?c.a.createElement(y,{mark:!0},"Men predominate"):c.a.createElement(y,{mark:!0},"Women predominate"))),c.a.createElement(y,{type:"secondary"},"Nationalities"),c.a.createElement(Lt,{contactsData:t}))),c.a.createElement(lt.a,{size:"small",defaultCurrent:f,total:i,defaultPageSize:d,showSizeChanger:!0,onChange:function(e,t){E(e,t)}})))}Pt.defaultProps={contactsCollection:[{}],isTableView:!0,isTiledView:!1,collectionSize:0,malesAmount:0,femalesAmount:0,indeterminateAmount:0,contactsPerPage:10,currentPage:1,defaultCurrentPage:1};var xt=Pt;var jt=Object(o.c)((function(e){var t=e.contacts,a=t.contactsCollection,n=t.collectionLength,c=t.males,r=t.females,l=t.indeterminate;return{contactsCollection:a,isLoading:t.isLoading,isTableView:t.isTableView,isTiledView:t.isTiledView,contactsPerPage:t.contactsPerPage,currentPage:t.currentPage,collectionSize:n,malesAmount:c,femalesAmount:r,indeterminateAmount:l}}),(function(e){return{handleFetchContacts:function(){return e(Se())},handleTiledView:function(){return e(de())},handleTabularView:function(){return e(ge())},handlePaginate:function(t,a){return e(pe(t,a))}}}))(xt),At=a(651);a(616);function Ft(e){var t=e.handleClick,a=e.isLoading,n=e.contactsCollection,r=w.a.Content,l=Q.a.Title,o=Q.a.Text,i=x()("ContactProfile"),s=x()("ContactProfile-body"),m=x()("ContactProfile-contactImage"),u=x()("ContactProfile-contactInfo"),d=x()("ContactProfile-contactContactsList"),g=x()("ContactProfile-contactContactsItem"),f=n[Object(L.f)().params.contactId-1];return a?c.a.createElement(ee.a,null):c.a.createElement(r,null,c.a.createElement("div",{className:i},c.a.createElement(l,{level:1,style:{fontSize:"32px"}},"Contact View"),c.a.createElement("div",{className:s},c.a.createElement(Ze,{className:m,src:f.picture.medium}),c.a.createElement("div",{className:u},c.a.createElement(l,{level:3},"".concat(f.name.title,". ").concat(f.name.first," ").concat(f.name.last),c.a.createElement(o,{type:"secondary",style:{fontSize:"19px",paddingLeft:"5px"}},"(".concat(f.dob.age," years)"))),c.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),c.a.createElement("ul",{className:d},c.a.createElement("li",{className:g},c.a.createElement(o,{copyable:{text:f.email},style:{paddingRight:"8px"}}),c.a.createElement("a",{href:"mailto:".concat(f.email)},f.email)),c.a.createElement("li",{className:g},c.a.createElement(o,{copyable:{text:f.phone},style:{paddingRight:"8px"}}),c.a.createElement("a",{href:"tel:".concat(f.phone)},f.phone)),c.a.createElement("li",{className:g},c.a.createElement(o,{copyable:{text:"[".concat(f.location.country,"]\n                             ").concat(f.location.street.number,"\n                             ").concat(f.location.street.name,",\n                             ").concat(f.location.city,",\n                             ").concat(f.location.state,"\n                             ").concat(f.location.postcode)},style:{paddingRight:"8px"}}),c.a.createElement(o,{strong:!0,style:{color:"#5b5b6b"}},"/".concat(f.location.country,"/")),c.a.createElement("br",null)," ",c.a.createElement(o,{type:"secondary",style:{color:"#5b5b6b"},ellipsis:!0},"".concat(f.location.street.number,"\n                      ").concat(f.location.street.name,",\n                      ").concat(f.location.city,",\n                      ").concat(f.location.state,"\n                      ").concat(f.location.postcode)))),c.a.createElement(X.a,{dashed:!0,style:{margin:"12px 0"}}),c.a.createElement(qe,{userNationality:f.nat})))),c.a.createElement(z.a,{type:"primary",onClick:t,icon:c.a.createElement(At.a,null),style:{marginTop:15}},"Back"))}Ft.defaultProps={isLoading:!1,contactsCollection:[{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:{number:5421,name:"Avenue Paul Eluard"},city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"}]};var _t=Ft;var kt=Object(o.c)((function(e){var t=e.contacts;return{contactsCollection:t.contactsCollection,isLoading:t.isContactProfileLoading}}),(function(e){return{handleClick:function(){return e(function(){var e="".concat("/randomuser-test","/");return function(t){t(Object(j.d)("".concat(e,"contacts")))}}())}}}))(_t);a(617);var Ut=function(e){var t=e.handleClick,a=w.a.Content,n=Q.a.Text,r=x()("Page404");return c.a.createElement(a,null,c.a.createElement("div",{className:r},c.a.createElement(n,{type:"danger",style:{fontSize:"78px",fontWeight:700}},"404"),c.a.createElement("h1",null,"Requested page not found!"),c.a.createElement("div",null,c.a.createElement(z.a,{type:"primary",onClick:t},"Back to home"))))};var Dt=Object(o.c)(null,(function(e){return{handleClick:function(){return e(K())}}}))(Ut);a(618);var Rt=function(e){var t=e.history,a=x()("BaseAppLayout");console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/randomuser-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}));var n="".concat("/randomuser-test","/");return console.log(n),c.a.createElement(L.b,{history:t,basename:"/"},c.a.createElement(w.a,{className:a},c.a.createElement(ue,null),c.a.createElement(Ge,null),c.a.createElement(L.c,null,c.a.createElement(L.a,{exact:!0,path:n,component:He}),c.a.createElement(L.a,{exact:!0,path:"".concat(n,"profile"),component:et}),c.a.createElement(L.a,{exact:!0,path:"".concat(n,"contacts"),component:jt}),c.a.createElement(L.a,{exact:!0,path:"".concat(n,"contacts/:contactId"),render:function(){return c.a.createElement(kt,null)}}),c.a.createElement(L.a,{exact:!0,path:"*",component:Dt})),c.a.createElement(Ve,null)))};a(619),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(o.a,{store:T},c.a.createElement(i.a,{history:N},c.a.createElement(Rt,{history:N}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[331,1,2]]]);
//# sourceMappingURL=main.63654efc.chunk.js.map