(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],f=0,m=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},2036:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"auto"}},[a("b-row",{staticClass:"mt-2",attrs:{"align-h":"center"}},[a("b-col",{attrs:{md:"4","align-self":"center"}},[a("RecommendForm")],1),a("b-col",{attrs:{md:"6"}},[a("StockChart")],1)],1),a("hr"),a("StrategyResult")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"lg"}},[t.show?a("b-form",{attrs:{id:"MA-param-form"},on:{submit:t.onSubmit,reset:t.onReset}},[a("b-row",{staticClass:"mb-2"},[a("b-col",{attrs:{cols:"4"}},[t._v("指定股票代碼：")]),a("b-col",{attrs:{cols:"8"}},[a("v-select",{staticClass:"mb-2",attrs:{id:"select-symbol",options:t.my_options,label:"title","aria-required":""===t.form.symbol},scopedSlots:t._u([{key:"option",fn:function(e){return[a("img",{attrs:{src:e.cardImage}}),t._v(" "+t._s(e.title)+" ")]}}],null,!1,2750943443),model:{value:t.form.symbol,callback:function(e){t.$set(t.form,"symbol",e)},expression:"form.symbol"}})],1),a("b-col",{attrs:{cols:"4"}},[t._v(" 訓練起始日期： ")]),a("b-col",{attrs:{cols:"8"}},[a("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_start",state:t.date1State,required:""},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),a("b-col",{attrs:{cols:"4"}},[t._v(" 訓練截止日期： ")]),a("b-col",{attrs:{cols:"8"}},[a("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_end",state:t.date2State,required:""},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1),a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1):t._e()],1)},s=[],i=(a("4160"),a("159b"),a("5530")),c=a("2f62"),l=a("bc3a"),u=a.n(l),f={name:"RecommendForm",data:function(){return{form:{symbol:null,start:"",end:""},show:!0,my_options:[]}},mounted:function(){var t=this;u.a.get("http://127.0.0.1:8000/api/stock/list/").then((function(e){e.data["stock list"].forEach((function(e){var a="/img/company_logo/";t.my_options.push({title:e,cardImage:a+e+".png"})}))})).catch((function(t){console.log(t)}))},computed:{date1State:function(){if(""===this.form.start)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==t.getDay()&&6!==t.getDay()&&t.getTime()!==e.getTime()},date2State:function(){if(""===this.form.end)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==e.getDay()&&6!==e.getDay()&&t.getTime()!==e.getTime()}},updated:function(){var t=this;this.$nextTick((function(){if(""!==t.form.start&&""!==t.form.end){var e=new Date(t.form.start),a=new Date(t.form.end);e>a&&(t.form.start=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),t.form.end=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate())}}))},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["actionRecommendMA","actionChartLoading"])),{},{onSubmit:function(t){t.preventDefault(),this.actionRecommendMA(this.form),this.actionChartLoading(!0)},onReset:function(t){var e=this;t.preventDefault(),this.form.start="",this.form.end="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},m=f,d=a("2877"),b=Object(d["a"])(m,o,s,!1,null,null,null),p=b.exports,h=a("69e1"),v=a("8ac4"),g={name:"Recommendation",components:{StrategyResult:v["a"],RecommendForm:p,StockChart:h["a"]}},y=g,_=Object(d["a"])(y,r,n,!1,null,"51a94b8b",null);e["a"]=_.exports},"3dfd":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-headful",{attrs:{title:"Lab 114 Fintech"}}),a("NavBar"),a("router-view"),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("img",{attrs:{alt:"Fat cat logo",src:a("9b19")}}),t._v(" FinTech ")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"/intro"}},[t._v("技術指標介紹")]),r("b-nav-item",{attrs:{href:"/recommendation"}},[t._v("智慧推薦")]),r("b-nav-item",{attrs:{href:"/custom"}},[t._v("自訂技術指標")]),r("b-nav-item",{attrs:{href:"https://fintech-114.herokuapp.com/api/test"}},[t._v("API Test")]),r("b-nav-item",{attrs:{href:"https://fintech-114.herokuapp.com/admin"}},[t._v("DB Admin")]),r("b-nav-item-dropdown",{attrs:{text:"Dropdown..."}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},s=[],i={name:"navbar"},c=i,l=a("2877"),u=Object(l["a"])(c,o,s,!1,null,null,null),f=u.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"fluid-container footer"},[a("p",{staticClass:"float-right",attrs:{id:"back-to-top"}},[a("a",{attrs:{href:"#"}},[t._v("Back to top")])]),a("p",[t._v("2009-2020 Journal of Fat Cat")])])}],b={name:"myfooter"},p=b,h=(a("760c"),Object(l["a"])(p,m,d,!1,null,null,null)),v=h.exports,g={name:"App",components:{NavBar:f,Footer:v}},y=g,_=(a("034f"),Object(l["a"])(y,r,n,!1,null,null,null));e["a"]=_.exports},4360:function(t,e,a){"use strict";var r={};a.r(r),a.d(r,"getProfit",(function(){return d})),a.d(r,"getStrategy",(function(){return b})),a.d(r,"getHoldingPeriod",(function(){return p})),a.d(r,"getStockPrice",(function(){return h})),a.d(r,"getChartLoading",(function(){return v}));var n={};a.r(n),a.d(n,"actionCustomMA",(function(){return _})),a.d(n,"actionRecommendMA",(function(){return k})),a.d(n,"actionChartLoading",(function(){return w}));var o,s=a("2b0e"),i=a("2f62"),c=a("ade3"),l="UPDATE",u="CHART_LOADING",f={trading_strategy:{},profit:0,stock_price:[0],holding_period:[0],chartLoading:!1},m=(o={},Object(c["a"])(o,l,(function(t,e){t.trading_strategy=e["strategy"],t.profit=e["profit"],t.stock_price=e["stock price"],t.holding_period=e["holding period"]})),Object(c["a"])(o,u,(function(t,e){t.chartLoading=e})),o),d=function(t){return t.profit},b=function(t){return t.trading_strategy},p=function(t){return t.holding_period},h=function(t){return t.stock_price},v=function(t){return t.chartLoading},g=a("bc3a"),y=a.n(g),_=function(t,e){var a=t.commit,r="http://127.0.0.1:8000/api/ma/custom/";y()({url:r,method:"post",responseType:"json",data:JSON.stringify(e)}).then((function(t){console.log("response status = "+t),console.log("response data = "+t.data),a(l,t.data)}))},k=function(t,e){var a=t.commit,r="http://127.0.0.1:8000/api/ma/recommend/";y()({url:r,method:"post",responseType:"json",data:JSON.stringify(e)}).then((function(t){console.log("response status = "+t),console.log("response data = "+t.data),a(l,t.data)}))},w=function(t,e){var a=t.commit;a(u,e)};s["default"].use(i["a"]);e["a"]=new i["a"].Store({state:f,mutations:m,getters:r,actions:n,strict:!0})},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),r=a("3dfd"),n=a("5f5b"),o=a("b1e0"),s=a("498a"),i=a("f9bc"),c=(a("f9e3"),a("2dd8"),a("ec02")),l=a.n(c),u=a("2f62"),f=a("8c4f"),m=a("90f1"),d=a("576c"),b=a("8b24"),p=a("2036"),h=a("4360"),v=a("4a7a"),g=a.n(v);a("6dfc");e["default"].config.productionTip=!1,e["default"].use(n["a"]),e["default"].use(o["a"]),e["default"].use(s["a"]),e["default"].use(i["a"]),e["default"].use(u["a"]),e["default"].use(f["a"]),e["default"].component("vue-headful",l.a),e["default"].component("v-select",g.a);var y=new f["a"]({mode:"history",base:t,routes:[{path:"/",name:"Index",component:b["a"]},{path:"/intro",name:"Intro",component:d["a"]},{path:"/recommendation",name:"Recommendation",component:p["a"]},{path:"/custom",name:"Custom",component:m["a"]},{path:"/*",redirect:"/"}]});new e["default"]({router:y,store:h["a"],render:function(t){return t(r["a"])}}).$mount("#app")}.call(this,"/")},"576c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(" Moving Average")]),t._m(0),r("b-table",{attrs:{striped:"",hover:"",items:t.items}}),t._m(1),r("p",[t._v(" 而在實際運用上，我們通常會利用短線與中線或者是中線與長線的搭配來觀察股價的走勢。如下圖的例子，10MA由下往上穿越20MA。 因為近10日股價上揚，讓10MA的斜率逐漸變大，能夠由下而上的穿越20MA，我們將此現象認為是起漲的開始，因此將兩條線的交叉視為是買入訊號，而這樣的訊號又被稱為黃金交叉。 ")]),r("img",{staticClass:"card-img-top",attrs:{src:a("fa9a"),alt:"MA 黃金交叉"}}),r("p",[t._v(" 而當10MA由上往下穿越20MA時，因為近10日的股價下跌，讓10MA的斜率越來越小，最後由上而下的穿越20MA， 我們將此現象認為是下跌的開始，因此將這兩條線的交叉點視為是賣出訊號，而這樣的訊號被稱為死亡交叉。 ")]),r("img",{staticClass:"card-img-top",attrs:{src:a("9fa6"),alt:"MA 死亡交叉"}}),r("p",[t._v(" 而除了移動平均線之外，也有因為使用目的上的不同，在計算移動平均時對於時序的遠近而改變權重所演變出其他類型的移動平均線， 例如：指數移動平均(EMA)、加權移動平均(WMA)等。投資人可以因應自身的習慣或者是觀察的重點來搭配自己所需要的移動平均線。 ")]),r("hr"),r("h1",[t._v("RSI")]),r("p",[t._v("Description")])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 移動平均線(MA)是將一段時間內的股價相加平均後得到的平均值連接之後所得到的一條線。有了MA的幫助，投資者就能夠輕易地了解目前股價的趨勢。"),a("br"),t._v(" 一般來說，MA通常分為短、中、長期移動平均線三種。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 短線中的5MA、10MA分別對應到一周與雙週的開盤日數，又稱作週線及雙週線。而中線的20MA、60MA分別對應到一個月和三個月的開盤日數，又稱作月線以及季線。"),a("br"),t._v(" 在長線部分，120MA、240MA分別對應到半年和一年的開盤日數，又稱半年線和年線。 ")])}],o={name:"Intro",data:function(){return{items:[{"參數":"短線：5、10中線：20、60長線：120、240","交易訊號":"短線搭配中線中線搭配長線","買賣參數":"使用同一組參數","交易":"（5,20）,(5,60)(10,20) ,(10,60)(20,120),(20,240)(60,120),(60,240)"}]}}},s=o,i=a("2877"),c=Object(i["a"])(s,r,n,!1,null,"27c179e4",null);e["a"]=c.exports},"69e1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chart",{ref:"myChart",attrs:{options:t.chartOption,autoresize:!0}})},n=[],o=a("5530"),s=a("9ca8"),i=a("2f62"),c=(a("ef97"),{name:"StockChart",components:{"v-chart":s["a"]},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])({stockPrice:"getStockPrice",holdingPeriod:"getHoldingPeriod",profit:"getProfit",isChartLoading:"getChartLoading"})),{},{hp_update:function(){return this.holdingPeriod},chart_loading_state:function(){return this.isChartLoading}}),methods:Object(o["a"])({},Object(i["b"])(["actionChartLoading"])),watch:{chart_loading_state:function(){this.isChartLoading?this.$refs.myChart.showLoading():this.$refs.myChart.hideLoading()},hp_update:function(){for(var t=[],e=0;e<this.stockPrice.length;e++)t.push(e+1);this.chartOption.dataset.source=[t,this.stockPrice,this.holdingPeriod],this.actionChartLoading(!1)}},data:function(){return{chartOption:{}}},mounted:function(){this.$refs.myChart.showLoading(),this.chartOption={dataset:{source:[]},xAxis:{type:"category",boundaryGap:!1},yAxis:{type:"value",boundaryGap:["1%","1%"],scale:!0},series:[{type:"line",smooth:0,symbol:"triangle",symbolSize:8,lineStyle:{width:1.5},seriesLayoutBy:"row"},{type:"line",smooth:0,symbol:"none",symbolSize:10,lineStyle:{width:4},seriesLayoutBy:"row",areaStyle:{color:"rgba(0,180,0,0.5)"}}],visualMap:{type:"piecewise",show:!1,seriesIndex:1}},this.$refs.myChart.hideLoading()}}),l=c,u=(a("a807"),a("2877")),f=Object(u["a"])(l,r,n,!1,null,"c7f29fbc",null);e["a"]=f.exports},"760c":function(t,e,a){"use strict";var r=a("c3f5"),n=a.n(r);n.a},"85ec":function(t,e,a){},"8ac4":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("交易策略")]),a("p",[t._v(" 買入： MA("+t._s(t.strategy["buy1"])+") 穿 MA("+t._s(t.strategy["buy2"])+") ")]),a("p",[t._v(" 賣出： MA("+t._s(t.strategy["sell1"])+") 穿 MA("+t._s(t.strategy["sell2"])+") ")]),a("p",[t._v(" 報酬: "+t._s(t.profit)+" ")])])},n=[],o=a("5530"),s=a("2f62"),i={name:"StrategyResult",computed:Object(o["a"])({},Object(s["c"])({profit:"getProfit",strategy:"getStrategy"}))},c=i,l=a("2877"),u=Object(l["a"])(c,r,n,!1,null,"7b90b00b",null);e["a"]=u.exports},"8b24":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Homepage")]),a("p",[t._v("This is our homepage")])])}],o={name:"Index"},s=o,i=a("2877"),c=Object(i["a"])(s,r,n,!1,null,"3e6899b2",null);e["a"]=c.exports},"90f1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"auto"}},[a("b-row",{staticClass:"mt-2",attrs:{"align-h":"center"}},[a("b-col",{attrs:{md:"4","align-self":"center"}},[a("MAParamForm")],1),a("b-col",{attrs:{md:"6"}},[a("StockChart")],1)],1),a("hr"),a("StrategyResult")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("b-form",{attrs:{id:"MA-param-form"},on:{submit:t.onSubmit,reset:t.onReset}},[a("b-row",{staticClass:"mb-2"},[a("b-col",{attrs:{cols:"4"}},[t._v("指定股票代碼：")]),a("b-col",{attrs:{cols:"8"}},[a("v-select",{staticClass:"mb-2",attrs:{id:"select-symbol",options:t.my_options,label:"title","aria-required":""===t.form.symbol},scopedSlots:t._u([{key:"option",fn:function(e){return[a("img",{attrs:{src:e.cardImage}}),t._v(" "+t._s(e.title)+" ")]}}],null,!1,2750943443),model:{value:t.form.symbol,callback:function(e){t.$set(t.form,"symbol",e)},expression:"form.symbol"}})],1),a("b-col",{attrs:{cols:"4"}},[t._v(" 自訂買入訊號：")]),a("b-col",{attrs:{cols:"4"}},[a("b-input",{staticClass:"mb-2",attrs:{id:"input-buy1",placeholder:"買1",type:"number",min:"1",max:"256",state:t.buy1State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.buy1,callback:function(e){t.$set(t.form,"buy1",e)},expression:"form.buy1"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),a("b-col",{attrs:{cols:"4"}},[a("b-input",{staticClass:"mb-2",attrs:{id:"input-buy2",placeholder:"買2",type:"number",min:"1",max:"256",state:t.buy2State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.buy2,callback:function(e){t.$set(t.form,"buy2",e)},expression:"form.buy2"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),a("b-col",{attrs:{cols:"4"}},[t._v("自訂賣出訊號：")]),a("b-col",{attrs:{cols:"4"}},[a("b-input",{staticClass:"mb-2",attrs:{id:"input-sell1",placeholder:"賣1",type:"number",min:"1",max:"256",state:t.sell1State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.sell1,callback:function(e){t.$set(t.form,"sell1",e)},expression:"form.sell1"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),a("b-col",{attrs:{cols:"4"}},[a("b-input",{staticClass:"mb-2",attrs:{id:"input-sell2",placeholder:"賣2",type:"number",min:"1",max:"256",state:t.sell2State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.sell2,callback:function(e){t.$set(t.form,"sell2",e)},expression:"form.sell2"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),a("b-col",{attrs:{cols:"4"}},[t._v(" 訓練起始日期： ")]),a("b-col",{attrs:{cols:"8"}},[a("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_start",state:t.date1State,required:""},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),a("b-col",{attrs:{cols:"4"}},[t._v(" 訓練截止日期： ")]),a("b-col",{attrs:{cols:"8"}},[a("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_end",state:t.date2State,required:""},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1),a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1):t._e()},s=[],i=(a("4160"),a("159b"),a("5530")),c=a("2f62"),l=a("bc3a"),u=a.n(l),f={name:"ParamForm",data:function(){return{form:{symbol:null,buy1:"",buy2:"",sell1:"",sell2:"",start:"",end:""},show:!0,my_options:[]}},computed:{buy1State:function(){return""===this.form.buy1?null:this.form.buy1>=1&&this.form.buy1<=256},buy2State:function(){return""===this.form.buy2?null:this.form.buy2>=1&&this.form.buy2<=256},sell1State:function(){return""===this.form.sell1?null:this.form.sell1>=1&&this.form.sell1<=256},sell2State:function(){return""===this.form.sell2?null:this.form.sell2>=1&&this.form.sell2<=256},date1State:function(){if(""===this.form.start)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==t.getDay()&&6!==t.getDay()&&t.getTime()!==e.getTime()},date2State:function(){if(""===this.form.end)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==e.getDay()&&6!==e.getDay()&&t.getTime()!==e.getTime()}},mounted:function(){var t=this;u.a.get("http://127.0.0.1:8000/api/stock/list/").then((function(e){e.data["stock list"].forEach((function(e){var a="/img/company_logo/";t.my_options.push({title:e,cardImage:a+e+".png"})}))})).catch((function(t){console.log(t)}))},updated:function(){var t=this;this.$nextTick((function(){if(""!==t.form.start&&""!==t.form.end){var e=new Date(t.form.start),a=new Date(t.form.end);e>a&&(t.form.start=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),t.form.end=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate())}}))},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["actionCustomMA","actionChartLoading"])),{},{onSubmit:function(t){t.preventDefault(),this.actionCustomMA(this.form),this.actionChartLoading(!0)},onReset:function(t){var e=this;t.preventDefault(),this.form.buy1="",this.form.buy2="",this.form.sell1="",this.form.sell2="",this.form.start="",this.form.end="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},m=f,d=a("2877"),b=Object(d["a"])(m,o,s,!1,null,null,null),p=b.exports,h=a("69e1"),v=a("8ac4"),g={name:"Custom",components:{MAParamForm:p,StockChart:h["a"],StrategyResult:v["a"]}},y=g,_=Object(d["a"])(y,r,n,!1,null,null,null);e["a"]=_.exports},"9b19":function(t,e,a){t.exports=a.p+"img/logo.234f6256.svg"},"9fa6":function(t,e,a){t.exports=a.p+"img/death_cross.5226fbf0.png"},a807:function(t,e,a){"use strict";var r=a("ba98"),n=a.n(r);n.a},ba98:function(t,e,a){},c3f5:function(t,e,a){},fa9a:function(t,e,a){t.exports=a.p+"img/golden_cross.dab8e5ac.png"}});
//# sourceMappingURL=app.0061cfe5.js.map