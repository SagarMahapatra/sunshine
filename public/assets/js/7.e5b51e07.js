(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(t,e,s){"use strict";var i=s(88);s.n(i).a},212:function(t,e,s){"use strict";s.r(e);var i={name:"link-preview",props:{url:{type:String,default:""},cardWidth:{type:String,default:"400px"},onButtonClick:{type:Function,default:void 0},showButton:{type:Boolean,default:!0},apiUrl:{type:String,default:"https://linkpreview-api.herokuapp.com/"}},watch:{url:function(t){this.response=null,this.getLinkPreview()}},created:function(){this.getLinkPreview()},data:function(){return{response:null,validUrl:!1}},methods:{viewMore:function(){void 0!==this.onButtonClick?this.onButtonClick(this.response):window.open(this.url,"_blank").focus()},isValidUrl:function(t){return this.validUrl=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(t),this.validUrl},getLinkPreview:function(){var t=this;this.isValidUrl(this.url)&&this.httpRequest((function(e){t.response=JSON.parse(e)}),(function(){t.response=null,t.validUrl=!1}))},httpRequest:function(t,e){var s=new XMLHttpRequest,i="url="+this.url;s.open("POST",this.apiUrl,!0),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){4===s.readyState&&200===s.status&&t(s.responseText),4===s.readyState&&500===s.status&&e()},s.send(i)}}},n=(s(206),s(0)),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{style:{width:t.cardWidth}},[!t.response&&t.validUrl?s("div",{attrs:{id:"loader-container"}},[t._t("loading",[s("div",{staticClass:"spinner"})])],2):t._e(),t._v(" "),t.response?s("div",[t._t("default",[s("div",{staticClass:"wrapper"},[s("span",{staticClass:"card-img"},[s("img",{attrs:{src:t.response.images[0]}})]),t._v(" "),s("div",{staticClass:"card-info"},[s("div",{staticClass:"card-text"},[s("h1",[t._v(t._s(t.response.title))]),t._v(" "),s("p",[t._v(t._s(t.response.description))])]),t._v(" "),s("div",{staticClass:"card-btn"},[t.showButton?s("a",{attrs:{href:"javascript:;"},on:{click:t.viewMore}},[t._v("View More")]):t._e()])])])],{img:t.response.images[0],title:t.response.title,description:t.response.description,url:t.url})],2):t._e()])}),[],!1,null,"d90f05cc",null);e.default=r.exports},88:function(t,e,s){}}]);