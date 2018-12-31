webpackJsonp([1],{"/WSe":function(e,t,a){e.exports=a.p+"static/img/codeforces_logo.104cba0.png"},"1/l5":function(e,t){},"4cIy":function(e,t){},Jn7e:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=a("mtWM"),s=a.n(r),i={name:"showUserInformation",props:["name","country","rate","maxRate"],data:function(){return{title:"",titleColor:"",offset:0,titleCandidate:["Newbie","Pupil","Specialist","Expert","Candidate Master","Master","International Master","Grandmaster","International GradMaster","Legendary Grandmaster"],colorStyle:["gray","green","#03A89E","blue","#a0a","#0a","#FF8C00","red","red","red"],nameFirstLetter:"",nameRest:""}},watch:{rate:function(){var e=Number(this.rate),t=void 0,a=this.name.length;t=e<1200?0:e>=1200&&e<1400?1:e>=1400&&e<1600?2:e>=1600&&e<1900?3:e>=1900&&e<2200?4:e>=2200&&e<2300?5:e>=2300&&e<2399?6:e>=2400&&e<2600?7:e>=2600&&e<2900?8:9,this.offset=t,this.titleColor=this.colorStyle[t],this.title=this.titleCandidate[t],this.nameFirstLetter=this.name.substr(0,1),this.nameRest=this.name.substr(1,a-1)}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"user-color-information"},[e.offset<9?[a("div",{staticClass:"rate-color",style:{color:e.titleColor}},[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"user-name"},[a("div",{style:{color:e.titleColor}},[e._v(e._s(e.name))])])]:[a("div",{staticClass:"rate-color",style:{color:e.titleColor}},[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"user-name",staticStyle:{color:"black"}},[e._v(e._s(e.nameFirstLetter)),a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.nameRest))])])]],2),e._v(" "),a("ul",{staticClass:"user-information"},[a("li",[e._v("country: "+e._s(e.country))]),e._v(" "),a("li",[e._v("rate: "+e._s(e.rate)+" (maxRate: "+e._s(e.maxRate)+")")])])])},staticRenderFns:[]};var l={name:"Checker",data:function(){return{fixedUrl:"https://codeforces.com/api/",loaded:{user:!1,graph:!1},name:"",ratingChangeLog:[],userInformation:{country:"nil",rating:"nil",maxRating:"nil"}}},methods:{getUserData:function(){var e=this,t=this.fixedUrl+"user.info?handles="+this.name;s.a.get(t).then(function(t){"OK"!==t.data.status?e.errorHandler():(e.userInformation.country=t.data.result[0].country,e.userInformation.rating=t.data.result[0].rating,e.userInformation.maxRating=t.data.result[0].maxRating,e.loaded.user=!0)}).catch(function(e){this.errorHandler(),console.log(e)});var a=this.fixedUrl+"user.rating?handle="+this.name;s.a.get(a).then(function(t){e.ratingChangeLog=t.data.result,e.loaded.graph=!0,e.generateGraph()}).catch(function(e){console.log(e)})},generateGraph:function(){var e=[],t=[],a=[];this.ratingChangeLog.forEach(function(n){var r=new Date(n.ratingUpdateTimeSeconds);e.push(n.contestName),t.push(r.getFullYear()+" "+r.getMonth()+" "+r.getDay()),a.push(n.newRating)});var n=document.getElementById("ChartLine").getContext("2d");new Chart(n,{type:"line",data:{labels:e,datasets:[{label:this.name,borderColor:"rgb(255,0,0)",data:a,lineTension:0,fill:!1}]},options:{responsive:!0,scales:{xAxes:[{time:{unit:"week"}}]}}})},errorHandler:function(){alert("Codeforces api error")}},components:{UserInformation:a("VU/8")(i,o,!1,function(e){a("Jn7e")},"data-v-f86f69c6",null).exports}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"name-field_wrapper"},[a("span",{staticClass:"name-field_codeforces-id"},[e._v("CodeforcesId:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("button",{on:{click:e.getUserData}},[e._v("submit!")])]),e._v(" "),a("div",{staticClass:"user-information-field_wrapper"},[a("UserInformation",{attrs:{name:e.name,country:e.userInformation.country,rate:e.userInformation.rating,maxRate:e.userInformation.maxRating}})],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("canvas",{attrs:{id:"ChartLine"}})])}]};var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("img",{attrs:{src:a("/WSe")}}),this._v(" "),t("div",{staticClass:"header-title"},[this._v("Codeforces Status Viewer")])])}]};var u={name:"App",components:{Checker:a("VU/8")(l,c,!1,function(e){a("4cIy")},"data-v-72490687",null).exports,Header:a("VU/8")({name:"Header"},d,!1,function(e){a("kEi1")},"data-v-685457bc",null).exports}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header"),this._v(" "),t("div",{attrs:{id:"body-wrapper"}},[t("Checker")],1)],1)},staticRenderFns:[]};var f=a("VU/8")(u,m,!1,function(e){a("1/l5")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:f},template:"<App/>"})},kEi1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2748026cbe87bee1ea9c.js.map