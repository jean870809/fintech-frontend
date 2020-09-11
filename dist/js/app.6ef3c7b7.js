(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],f=0,m=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},2036:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:"auto"}},[r("b-row",{staticClass:"mt-2",attrs:{"align-h":"center"}},[r("b-col",{attrs:{md:"4","align-self":"center"}},[r("RecommendForm")],1),r("b-col",{attrs:{md:"6"}},[r("StockChart")],1)],1),r("hr"),r("StrategyResult")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:"lg"}},[t.show?r("b-form",{attrs:{id:"MA-param-form"},on:{submit:t.onSubmit,reset:t.onReset}},[r("b-row",{staticClass:"mb-2"},[r("b-col",{attrs:{cols:"4"}},[t._v("指定股票代碼：")]),r("b-col",{attrs:{cols:"8"}},[r("v-select",{staticClass:"mb-2",attrs:{id:"select-symbol",options:t.my_options,label:"title","aria-required":""===t.form.symbol},scopedSlots:t._u([{key:"option",fn:function(e){return[r("img",{attrs:{src:e.cardImage}}),t._v(" "+t._s(e.title)+" ")]}}],null,!1,2750943443),model:{value:t.form.symbol,callback:function(e){t.$set(t.form,"symbol",e)},expression:"form.symbol"}})],1),r("b-col",{attrs:{cols:"4"}},[t._v(" 訓練起始日期： ")]),r("b-col",{attrs:{cols:"8"}},[r("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_start",state:t.date1State,required:""},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),r("b-col",{attrs:{cols:"4"}},[t._v(" 訓練截止日期： ")]),r("b-col",{attrs:{cols:"8"}},[r("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_end",state:t.date2State,required:""},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1),r("b-col",{attrs:{cols:"6"}},[r("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1),r("b-col",{attrs:{cols:"6"}},[r("b-button",{staticClass:"mb-2",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1):t._e()],1)},i=[],s=(r("4160"),r("159b"),r("5530")),c=r("2f62"),l=r("bc3a"),u=r.n(l),f={name:"RecommendForm",data:function(){return{form:{symbol:null,start:"",end:""},show:!0,my_options:[]}},mounted:function(){var t=this;u.a.get("http://127.0.0.1:8000/api/stock/list/").then((function(e){e.data["stock list"].forEach((function(e){var r="/img/company_logo/";t.my_options.push({title:e,cardImage:r+e+".png"})}))})).catch((function(t){console.log(t)}))},computed:{date1State:function(){if(""===this.form.start)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==t.getDay()&&6!==t.getDay()&&t.getTime()!==e.getTime()},date2State:function(){if(""===this.form.end)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==e.getDay()&&6!==e.getDay()&&t.getTime()!==e.getTime()}},updated:function(){var t=this;this.$nextTick((function(){if(""!==t.form.start&&""!==t.form.end){var e=new Date(t.form.start),r=new Date(t.form.end);e>r&&(t.form.start=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),t.form.end=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate())}}))},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["actionRecommendMA","actionChartLoading"])),{},{onSubmit:function(t){t.preventDefault(),this.actionRecommendMA(this.form),this.actionChartLoading(!0)},onReset:function(t){var e=this;t.preventDefault(),this.form.start="",this.form.end="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},m=f,d=r("2877"),b=Object(d["a"])(m,o,i,!1,null,null,null),p=b.exports,h=r("69e1"),v=r("8ac4"),g={name:"Recommendation",components:{StrategyResult:v["a"],RecommendForm:p,StockChart:h["a"]}},y=g,_=Object(d["a"])(y,n,a,!1,null,"51a94b8b",null);e["a"]=_.exports},"32ce":function(t,e,r){},"3dfd":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("vue-headful",{attrs:{title:"Lab 114 Fintech"}}),r("NavBar"),r("router-view"),r("Footer")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{href:"/"}},[n("img",{attrs:{alt:"Fat cat logo",src:r("9b19")}}),t._v(" FinTech ")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/intro"}},[t._v("技術指標介紹")]),n("b-nav-item",{attrs:{href:"/recommendation"}},[t._v("智慧推薦")]),n("b-nav-item",{attrs:{href:"/custom"}},[t._v("自訂技術指標")]),n("b-nav-item",{attrs:{href:"https://fintech-114.herokuapp.com/api/test"}},[t._v("API Test")]),n("b-nav-item",{attrs:{href:"https://fintech-114.herokuapp.com/admin"}},[t._v("DB Admin")]),n("b-nav-item-dropdown",{attrs:{text:"Dropdown..."}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[t._v("User")])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},i=[],s={name:"navbar"},c=s,l=r("2877"),u=Object(l["a"])(c,o,i,!1,null,null,null),f=u.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"fluid-container footer"},[r("p",{staticClass:"float-right",attrs:{id:"back-to-top"}},[r("a",{attrs:{href:"#"}},[t._v("Back to top")])]),r("p",[t._v("2009-2020 Journal of Fat Cat")])])}],b={name:"myfooter"},p=b,h=(r("760c"),Object(l["a"])(p,m,d,!1,null,null,null)),v=h.exports,g={name:"App",components:{NavBar:f,Footer:v}},y=g,_=(r("034f"),Object(l["a"])(y,n,a,!1,null,null,null));e["a"]=_.exports},4360:function(t,e,r){"use strict";var n={};r.r(n),r.d(n,"getProfit",(function(){return d})),r.d(n,"getStrategy",(function(){return b})),r.d(n,"getHoldingPeriod",(function(){return p})),r.d(n,"getStockPrice",(function(){return h})),r.d(n,"getChartLoading",(function(){return v})),r.d(n,"getTI1",(function(){return g})),r.d(n,"getTI2",(function(){return y})),r.d(n,"getTI3",(function(){return _})),r.d(n,"getTI4",(function(){return w}));var a={};r.r(a),r.d(a,"actionCustomMA",(function(){return C})),r.d(a,"actionRecommendMA",(function(){return x})),r.d(a,"actionChartLoading",(function(){return M}));var o,i=r("2b0e"),s=r("2f62"),c=r("ade3"),l="UPDATE",u="CHART_LOADING",f={trading_strategy:{},profit:0,stock_price:[0],holding_period:[0],chartLoading:!1,ti1:[0],ti2:[0],ti3:[0],ti4:[0]},m=(o={},Object(c["a"])(o,l,(function(t,e){t.trading_strategy=e["strategy"],t.profit=e["profit"],t.stock_price=e["stock price"],t.holding_period=e["holding period"],t.ti1=e["ti1"],t.ti2=e["ti2"],t.ti3=e["ti3"],t.ti4=e["ti4"],console.log("ti1: "+e["ti1"]),console.log("ti2: "+e["ti2"]),console.log("ti3: "+e["ti3"]),console.log("ti4: "+e["ti4"])})),Object(c["a"])(o,u,(function(t,e){t.chartLoading=e})),o),d=function(t){return t.profit},b=function(t){return t.trading_strategy},p=function(t){return t.holding_period},h=function(t){return t.stock_price},v=function(t){return t.chartLoading},g=function(t){return t.ti1},y=function(t){return t.ti2},_=function(t){return t.ti3},w=function(t){return t.ti4},S=r("bc3a"),k=r.n(S),C=function(t,e){var r=t.commit,n="http://127.0.0.1:8000/api/ma/custom/";k()({url:n,method:"post",responseType:"json",data:JSON.stringify(e)}).then((function(t){console.log("response status = "+t),console.log("response data = "+t.data),r(l,t.data)}))},x=function(t,e){var r=t.commit,n="http://127.0.0.1:8000/api/ma/recommend/";k()({url:n,method:"post",responseType:"json",data:JSON.stringify(e)}).then((function(t){console.log("response status = "+t),console.log("response data = "+t.data),r(l,t.data)}))},M=function(t,e){var r=t.commit;r(u,e)};i["default"].use(s["a"]);e["a"]=new s["a"].Store({state:f,mutations:m,getters:n,actions:a,strict:!0})},"56d7":function(t,e,r){"use strict";r.r(e),function(t){r("e260"),r("e6cf"),r("cca6"),r("a79d");var e=r("2b0e"),n=r("3dfd"),a=r("5f5b"),o=r("b1e0"),i=r("498a"),s=r("f9bc"),c=(r("f9e3"),r("2dd8"),r("ec02")),l=r.n(c),u=r("2f62"),f=r("8c4f"),m=r("90f1"),d=r("576c"),b=r("8b24"),p=r("2036"),h=r("4360"),v=r("4a7a"),g=r.n(v);r("6dfc");e["default"].config.productionTip=!1,e["default"].use(a["a"]),e["default"].use(o["a"]),e["default"].use(i["a"]),e["default"].use(s["a"]),e["default"].use(u["a"]),e["default"].use(f["a"]),e["default"].component("vue-headful",l.a),e["default"].component("v-select",g.a);var y=new f["a"]({mode:"history",base:t,routes:[{path:"/",name:"Index",component:b["a"]},{path:"/intro",name:"Intro",component:d["a"]},{path:"/recommendation",name:"Recommendation",component:p["a"]},{path:"/custom",name:"Custom",component:m["a"]},{path:"/*",redirect:"/"}]});new e["default"]({router:y,store:h["a"],render:function(t){return t(n["a"])}}).$mount("#app")}.call(this,"/")},"576c":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" Moving Average")]),t._m(0),n("b-table",{attrs:{striped:"",hover:"",items:t.items}}),t._m(1),n("p",[t._v(" 而在實際運用上，我們通常會利用短線與中線或者是中線與長線的搭配來觀察股價的走勢。如下圖的例子，10MA由下往上穿越20MA。 因為近10日股價上揚，讓10MA的斜率逐漸變大，能夠由下而上的穿越20MA，我們將此現象認為是起漲的開始，因此將兩條線的交叉視為是買入訊號，而這樣的訊號又被稱為黃金交叉。 ")]),n("img",{staticClass:"card-img-top",attrs:{src:r("fa9a"),alt:"MA 黃金交叉"}}),n("p",[t._v(" 而當10MA由上往下穿越20MA時，因為近10日的股價下跌，讓10MA的斜率越來越小，最後由上而下的穿越20MA， 我們將此現象認為是下跌的開始，因此將這兩條線的交叉點視為是賣出訊號，而這樣的訊號被稱為死亡交叉。 ")]),n("img",{staticClass:"card-img-top",attrs:{src:r("9fa6"),alt:"MA 死亡交叉"}}),n("p",[t._v(" 而除了移動平均線之外，也有因為使用目的上的不同，在計算移動平均時對於時序的遠近而改變權重所演變出其他類型的移動平均線， 例如：指數移動平均(EMA)、加權移動平均(WMA)等。投資人可以因應自身的習慣或者是觀察的重點來搭配自己所需要的移動平均線。 ")]),n("hr"),n("h1",[t._v("RSI")]),n("p",[t._v("Description")])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" 移動平均線(MA)是將一段時間內的股價相加平均後得到的平均值連接之後所得到的一條線。有了MA的幫助，投資者就能夠輕易地了解目前股價的趨勢。"),r("br"),t._v(" 一般來說，MA通常分為短、中、長期移動平均線三種。 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" 短線中的5MA、10MA分別對應到一周與雙週的開盤日數，又稱作週線及雙週線。而中線的20MA、60MA分別對應到一個月和三個月的開盤日數，又稱作月線以及季線。"),r("br"),t._v(" 在長線部分，120MA、240MA分別對應到半年和一年的開盤日數，又稱半年線和年線。 ")])}],o={name:"Intro",data:function(){return{items:[{"參數":"短線：5、10中線：20、60長線：120、240","交易訊號":"短線搭配中線中線搭配長線","買賣參數":"使用同一組參數","交易":"（5,20）,(5,60)(10,20) ,(10,60)(20,120),(20,240)(60,120),(60,240)"}]}}},i=o,s=r("2877"),c=Object(s["a"])(i,n,a,!1,null,"27c179e4",null);e["a"]=c.exports},"69e1":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-chart",{ref:"myChart",attrs:{options:t.chartOption,autoresize:!0}})},a=[],o=r("5530"),i=r("9ca8"),s=r("2f62"),c=(r("ef97"),{name:"StockChart",components:{"v-chart":i["a"]},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])({stockPrice:"getStockPrice",holdingPeriod:"getHoldingPeriod",profit:"getProfit",isChartLoading:"getChartLoading",ti1:"getTI1",ti2:"getTI2",ti3:"getTI3",ti4:"getTI4"})),{},{hp_update:function(){return this.holdingPeriod},chart_loading_state:function(){return this.isChartLoading}}),methods:Object(o["a"])({},Object(s["b"])(["actionChartLoading"])),watch:{chart_loading_state:function(){this.isChartLoading?this.$refs.myChart.showLoading():this.$refs.myChart.hideLoading()},hp_update:function(){for(var t=[],e=0;e<this.stockPrice.length;e++)t.push(e+1);this.chartOption.dataset.source=[t,this.stockPrice,this.holdingPeriod,this.ti1,this.ti2,this.ti3,this.ti4],this.actionChartLoading(!1)}},data:function(){return{chartOption:{}}},mounted:function(){this.$refs.myChart.showLoading(),this.chartOption={dataset:{source:[]},xAxis:{type:"category",boundaryGap:!1},yAxis:{type:"value",boundaryGap:["1%","1%"],scale:!0},series:[{type:"line",smooth:0,symbol:"triangle",symbolSize:8,lineStyle:{width:1.5},seriesLayoutBy:"row"},{type:"line",smooth:0,symbol:"none",symbolSize:10,lineStyle:{width:4},seriesLayoutBy:"row",areaStyle:{color:"rgba(0,180,0,0.5)"}},{type:"line",smooth:0,symbol:"none",symbolSize:8,lineStyle:{width:1},seriesLayoutBy:"row"},{type:"line",smooth:0,symbol:"none",symbolSize:8,lineStyle:{width:1},seriesLayoutBy:"row"},{type:"line",smooth:0,symbol:"none",symbolSize:8,lineStyle:{width:1},seriesLayoutBy:"row"},{type:"line",smooth:0,symbol:"none",symbolSize:8,lineStyle:{width:1},seriesLayoutBy:"row"}],visualMap:{type:"piecewise",show:!1,seriesIndex:1}},this.$refs.myChart.hideLoading()}}),l=c,u=(r("c7f1"),r("2877")),f=Object(u["a"])(l,n,a,!1,null,"6ee7f300",null);e["a"]=f.exports},"760c":function(t,e,r){"use strict";var n=r("c3f5"),a=r.n(n);a.a},"85ec":function(t,e,r){},"8ac4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("交易策略")]),r("p",[t._v(" 買入： MA("+t._s(t.strategy["buy1"])+") 穿 MA("+t._s(t.strategy["buy2"])+") ")]),r("p",[t._v(" 賣出： MA("+t._s(t.strategy["sell1"])+") 穿 MA("+t._s(t.strategy["sell2"])+") ")]),r("p",[t._v(" 報酬率: "+t._s(Math.round(1e4*(t.profit+Number.EPSILON))/100)+"% ")])])},a=[],o=r("5530"),i=r("2f62"),s={name:"StrategyResult",computed:Object(o["a"])({},Object(i["c"])({profit:"getProfit",strategy:"getStrategy"}))},c=s,l=r("2877"),u=Object(l["a"])(c,n,a,!1,null,"990b9468",null);e["a"]=u.exports},"8b24":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Homepage")]),r("p",[t._v("This is our homepage")])])}],o={name:"Index"},i=o,s=r("2877"),c=Object(s["a"])(i,n,a,!1,null,"3e6899b2",null);e["a"]=c.exports},"90f1":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:"auto"}},[r("b-row",{staticClass:"mt-2",attrs:{"align-h":"center"}},[r("b-col",{attrs:{md:"4","align-self":"center"}},[r("MAParamForm")],1),r("b-col",{attrs:{md:"6"}},[r("StockChart")],1)],1),r("hr"),r("StrategyResult")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("b-form",{attrs:{id:"MA-param-form"},on:{submit:t.onSubmit,reset:t.onReset}},[r("b-row",{staticClass:"mb-2"},[r("b-col",{attrs:{cols:"4"}},[t._v("指定股票代碼：")]),r("b-col",{attrs:{cols:"8"}},[r("v-select",{staticClass:"mb-2",attrs:{id:"select-symbol",options:t.my_options,label:"title","aria-required":""===t.form.symbol},scopedSlots:t._u([{key:"option",fn:function(e){return[r("img",{attrs:{src:e.cardImage}}),t._v(" "+t._s(e.title)+" ")]}}],null,!1,2750943443),model:{value:t.form.symbol,callback:function(e){t.$set(t.form,"symbol",e)},expression:"form.symbol"}})],1),r("b-col",{attrs:{cols:"4"}},[t._v(" 自訂買入訊號：")]),r("b-col",{attrs:{cols:"4"}},[r("b-input",{staticClass:"mb-2",attrs:{id:"input-buy1",placeholder:"買1",type:"number",min:"1",max:"256",state:t.buy1State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.buy1,callback:function(e){t.$set(t.form,"buy1",e)},expression:"form.buy1"}}),r("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),r("b-col",{attrs:{cols:"4"}},[r("b-input",{staticClass:"mb-2",attrs:{id:"input-buy2",placeholder:"買2",type:"number",min:"1",max:"256",state:t.buy2State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.buy2,callback:function(e){t.$set(t.form,"buy2",e)},expression:"form.buy2"}}),r("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),r("b-col",{attrs:{cols:"4"}},[t._v("自訂賣出訊號：")]),r("b-col",{attrs:{cols:"4"}},[r("b-input",{staticClass:"mb-2",attrs:{id:"input-sell1",placeholder:"賣1",type:"number",min:"1",max:"256",state:t.sell1State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.sell1,callback:function(e){t.$set(t.form,"sell1",e)},expression:"form.sell1"}}),r("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),r("b-col",{attrs:{cols:"4"}},[r("b-input",{staticClass:"mb-2",attrs:{id:"input-sell2",placeholder:"賣2",type:"number",min:"1",max:"256",state:t.sell2State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.sell2,callback:function(e){t.$set(t.form,"sell2",e)},expression:"form.sell2"}}),r("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" 輸入範圍須介於 0 ~ 256")])],1),r("b-col",{attrs:{cols:"4"}},[t._v(" 訓練起始日期： ")]),r("b-col",{attrs:{cols:"8"}},[r("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_start",state:t.date1State,required:""},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),r("b-col",{attrs:{cols:"4"}},[t._v(" 訓練截止日期： ")]),r("b-col",{attrs:{cols:"8"}},[r("b-datepicker",{staticClass:"mb-2",attrs:{id:"training_end",state:t.date2State,required:""},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1),r("b-col",{attrs:{cols:"6"}},[r("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1),r("b-col",{attrs:{cols:"6"}},[r("b-button",{staticClass:"mb-2",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1):t._e()},i=[],s=(r("4160"),r("159b"),r("5530")),c=r("2f62"),l=r("bc3a"),u=r.n(l),f={name:"ParamForm",data:function(){return{form:{symbol:null,buy1:"",buy2:"",sell1:"",sell2:"",start:"",end:""},show:!0,my_options:[]}},computed:{buy1State:function(){return""===this.form.buy1?null:this.form.buy1>=1&&this.form.buy1<=256},buy2State:function(){return""===this.form.buy2?null:this.form.buy2>=1&&this.form.buy2<=256},sell1State:function(){return""===this.form.sell1?null:this.form.sell1>=1&&this.form.sell1<=256},sell2State:function(){return""===this.form.sell2?null:this.form.sell2>=1&&this.form.sell2<=256},date1State:function(){if(""===this.form.start)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==t.getDay()&&6!==t.getDay()&&t.getTime()!==e.getTime()},date2State:function(){if(""===this.form.end)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==e.getDay()&&6!==e.getDay()&&t.getTime()!==e.getTime()}},mounted:function(){var t=this;u.a.get("http://127.0.0.1:8000/api/stock/list/").then((function(e){e.data["stock list"].forEach((function(e){var r="/img/company_logo/";t.my_options.push({title:e,cardImage:r+e+".png"})}))})).catch((function(t){console.log(t)}))},updated:function(){var t=this;this.$nextTick((function(){if(""!==t.form.start&&""!==t.form.end){var e=new Date(t.form.start),r=new Date(t.form.end);e>r&&(t.form.start=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),t.form.end=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate())}}))},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["actionCustomMA","actionChartLoading"])),{},{onSubmit:function(t){t.preventDefault(),this.actionCustomMA(this.form),this.actionChartLoading(!0)},onReset:function(t){var e=this;t.preventDefault(),this.form.buy1="",this.form.buy2="",this.form.sell1="",this.form.sell2="",this.form.start="",this.form.end="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},m=f,d=r("2877"),b=Object(d["a"])(m,o,i,!1,null,null,null),p=b.exports,h=r("69e1"),v=r("8ac4"),g={name:"Custom",components:{MAParamForm:p,StockChart:h["a"],StrategyResult:v["a"]}},y=g,_=Object(d["a"])(y,n,a,!1,null,null,null);e["a"]=_.exports},"9b19":function(t,e,r){t.exports=r.p+"img/logo.234f6256.svg"},"9fa6":function(t,e,r){t.exports=r.p+"img/death_cross.5226fbf0.png"},c3f5:function(t,e,r){},c7f1:function(t,e,r){"use strict";var n=r("32ce"),a=r.n(n);a.a},fa9a:function(t,e,r){t.exports=r.p+"img/golden_cross.dab8e5ac.png"}});
//# sourceMappingURL=app.6ef3c7b7.js.map