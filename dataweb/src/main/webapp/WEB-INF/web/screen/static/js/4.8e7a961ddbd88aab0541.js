webpackJsonp([4],{166:function(t,e,i){t.exports={default:i(167),__esModule:!0}},167:function(t,e,i){i(169),t.exports=i(3).Object.keys},168:function(t,e,i){var a=i(8),n=i(3),r=i(19);t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],s={};s[t]=e(i),a(a.S+a.F*r(function(){i(1)}),"Object",s)}},169:function(t,e,i){var a=i(31),n=i(30);i(168)("keys",function(){return function(t){return n(a(t))}})},170:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(87),n=i.n(a),r=i(86),s=i.n(r),o=i(166),l=i.n(o);e.default={name:"chart-tendency",props:{chartTitle:{default:function(){return"趋势图"}},navigation:{default:function(){return[]}},enums:{default:function(){return{timelimit:{today:{name:"今天",code:"0"},lastsevensays:{name:"最近七天",code:"1"},lastmonth:{name:"最近一个月",code:"2"},thismonth:{name:"本月数据",code:"8"},all:{name:"累计",code:"3"},weekly:{name:"周度数据",code:"4"},monthly:{name:"月度数据",code:"5"},Splitbyfinancial:{name:"按财务拆分",code:"6"},Splitbysalesorder:{name:"按销售订单拆分",code:"7"},numberPeople:{name:"按竞价人数排序",code:"10"},price:{name:"按竞价价格排序",code:"11"}}}}},service:{default:function(){return{url:""}}},chartOptions:{default:function(){return{title:{text:null},chart:{type:"spline"},colors:["#19c6Ed","#FF7C4D","#2BCC6B","#C275DF"],credits:{enabled:!1},tooltip:{formatter:null,shared:!0}}}},timermillisec:{default:function(){return 66e4}},chartEntityConstructor:{default:function(){return Highcharts.chart}},resetYAxisBeforeRedraw:{default:function(){return!0}},resetSeriesBeforeRedraw:{default:function(){return!0}}},data:function(){var t=this;t.navigation.forEach(function(e,i){e.filterEntities={};var a=(e.filters||{}).timelimit,n=t.enums.timelimit;n&&a&&(e.filterEntities.timelimit=(a||[]).map(function(t,e){if(n[t])return n[t]}))});var e=t.navigation;return l()(t.$privileges.mapping).length&&(e=e.filter(function(e){return t.$privileges.user[(t.$privileges.mapping[e.name]||{}).id]})||[]),{Navigation:e,CurrentNavigation:e[0]||{filterEntities:{}},CurrentTimelimitFilter:(((e[0]||{}).filterEntities||{}).timelimit||[])[0]||{},chartEntity:null,renderTimer:null,swiperOption:{slidesPerView:"auto",freeMode:!0}}},mounted:function(){var t=this;setTimeout(function(){t.render()}),t.timermillisec&&(t.renderTimer=window.setInterval(function(){t.render()},t.timermillisec))},beforeDestroy:function(){var t=this;window.clearInterval(t.renderTimer)},methods:{render:function(){var t=this,e=t.getData(),i=s()({},t.chartOptions);t.$emit("beforeRender",i),t.chartEntity?t.chartEntity.update(i,!1):t.chartEntity=new t.chartEntityConstructor(t.$refs.chartContainer,i),e.then(function(e){for(;t.resetYAxisBeforeRedraw&&t.chartEntity.yAxis.length>0;)t.chartEntity.yAxis[0].remove(!1);for(;t.resetSeriesBeforeRedraw&&t.chartEntity.series.length>0;)t.chartEntity.series[0].remove(!1);t.$emit("dataReady",e),(e.dataList||[]).forEach(function(a,n){t.chartEntity.addAxis({title:{text:null},labels:{format:"{value}"+a.unit,style:{color:i.colors[n]}},opposite:n%2==1},!1,!1),t.chartEntity.addSeries({name:a.name,marker:{enabled:!1},visible:a.isShow,data:a.data,tooltip:{valueSuffix:a.unit},yAxis:n},!1),t.chartEntity.xAxis[0].update({categories:e.time},!1)}),t.$emit("beforeRedraw",t.chartEntity),t.chartEntity.redraw()}),t.$emit("afterRender",t.chartEntity)},getData:function(){var t=this,e={url:t.service.url,params:s()({},t.service.params,{type:t.CurrentNavigation.code,time:t.CurrentTimelimitFilter.code})};return t.$emit("beforeGetData",e),e.promise?e.promise:new n.a(function(i,a){t.$http.get(e.url,{params:e.params}).then(function(e){if(e=e.body||{},0!==parseInt(e.errno))return console.warn("返回数据状态码错误！"),void a(e);t.$emit("afterGetData",e),i(e.data||{})},function(t){console.warn("获取数据请求失败！"),a(t)})})},switchNav:function(t){var e=this;e.CurrentNavigation=t,e.CurrentTimelimitFilter=(e.CurrentNavigation.filterEntities.timelimit||[])[0]||{},e.$emit("navigationSwitched",this),e.render()},switchTimelimitFilter:function(t){var e=this;e.CurrentTimelimitFilter=t,e.$emit("timelimitFilterSwitched",this),e.render()},isActiveNav:function(t){return this.CurrentNavigation.code===t.code},isActiveTimelimitFilter:function(t){return this.CurrentTimelimitFilter.code===t.code}}}},171:function(t,e,i){var a=i(12)(i(170),i(172),null,null);t.exports=a.exports},172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel panel-default hour-trend"},[i("nav",{staticClass:"navbar navbar-default",staticStyle:{background:"#f5f5f5","margin-top":"30px","margin-bottom":"10px"},attrs:{role:"navigation"}},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"navbar-header"},[i("span",{staticClass:"navbar-brand",staticStyle:{"font-size":"16px"}},[t._v("\n                    "+t._s(t.chartTitle)+"\n                ")])]),t._v(" "),i("div",{attrs:{id:"titleHead"}},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.Navigation,function(e){return i("swiper-slide",[i("span",{class:{active:t.isActiveNav(e)},on:{click:function(i){t.switchNav(e)}}},[t._v(t._s(e.name))])])}))],1)])]),t._v(" "),i("div",{staticClass:"panel-body tab-content"},[i("div",{staticClass:"navbarRadio"},t._l(t.CurrentNavigation.filterEntities.timelimit,function(e){return i("label",[i("input",{attrs:{type:"radio",name:"timelimit_"+t._uid},domProps:{checked:t.isActiveTimelimitFilter(e)},on:{click:function(i){t.switchTimelimitFilter(e)}}}),t._v(t._s(e.name)+"\n            ")])})),t._v(" "),i("div",{ref:"chartContainer",staticClass:"tab-pane active"},[t._v("图表区域")])])])},staticRenderFns:[]}},174:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(87),n=i.n(a),r=i(86),s=i.n(r),o=i(171),l=i.n(o);e.default={name:"datapanel-effectives",data:function(){return{navigation:[{name:"职能满编率",code:"13",filters:{timelimit:["lastmonth"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null},{name:"电销转正人数",code:"7",filters:{timelimit:["all"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null},{name:"渠道转正人数",code:"10",filters:{timelimit:["all"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null},{name:"百家文章数",code:"71",filters:{timelimit:["all"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null},{name:"市场部发稿量",code:"78",filters:{timelimit:["all"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null},{name:"渠道拜访量",code:"54",filters:{timelimit:["today","lastmonth"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null},{name:"人均在线时长",code:"49",filters:{timelimit:["today","lastmonth","monthly"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null,numCallback:function(t,e){this.todayNum=Highcharts.dateFormat("%H:%M:%S",t.num||0)}},{name:"人均有效通话次数",code:"74",filters:{timelimit:["today","lastmonth","monthly"]},todayNum:0,yesterdayNum:0,ratioNum:0,ratioTrend:null}],navigation_monthly:[{name:"电销",code:"180",filters:{timelimit:["weekly","monthly"]}},{name:"渠道",code:"184",filters:{timelimit:["weekly","monthly"]}}],navigation_yearly:[{name:"电销",code:"178"},{name:"渠道",code:"182"}],timerMillisec:66e4,service:{url:"/dataweb/fightchart"}}},created:function(){var t=this;setTimeout(function(){t.render()}),t.renderTimer=window.setInterval(function(){t.render()},t.timerMillisec),window.VueEntity=this},beforeDestroy:function(){var t=this;window.clearInterval(t.renderTimer)},mounted:function(){var t=this;t.$refs.chartTendencyElement.$on("dataReady",function(t){74==this.CurrentNavigation.code&&(t.dataList=(t.dataList||[]).filter(function(t){return"电销销售"==t.name}))}),t.$refs.chartTendencyElement.$on("beforeRedraw",function(t){49==this.CurrentNavigation.code?(t.yAxis[0].update({title:{text:null},labels:{formatter:function(){var t=this,e=Highcharts.dateFormat("%M:%S",t.value);return("00"+parseInt(t.value/36e5)).slice(-2)+":"+e}}},!1),t.series[0].update({labels:{formatter:function(){var t=this,e=Highcharts.dateFormat("%M:%S",t.value);return("00"+parseInt(t.value/36e5)).slice(-2)+":"+e}}},!1),t.update({tooltip:{formatter:function(){var t=this,e=Highcharts.dateFormat("%M:%S",t.y),i=("00"+parseInt(t.y/36e5)).slice(-2);return['<span style="font-size: 10px">'+t.x+"</span><br>",'<span style="color:'+t.points[0].color+'">●</span>',"<tspan> "+t.points[0].series.name+": </tspan>",'<tspan style="font-weight:bold">'+i+":"+e+"</tspan>"].join("")}}},!1)):t.update({tooltip:{formatter:null}},!1),74==this.CurrentNavigation.code&&t.series.forEach(function(t,e){t.update({yAxis:0},!1)})}),t.$refs.chartTendencyElement_monthly.$on("beforeRender",function(t){s()(t,{plotOptions:{column:{stacking:"normal"}},chart:{type:"column"},colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],tooltip:{shared:!0,formatter:function(){for(var t=this,e=0,i=0,a=['<span style="font-size: 10px;">'+t.x+"</span><br>"],n=0;n<t.points.length;n++)a=a.concat(['<span style="color:'+t.points[n].color+'">●</span>',"<tspan> "+t.points[n].series.name+": </tspan>",'<tspan style="font-weight:bold">'+t.points[n].y+" 元</tspan><br/>"]),e||"实际值"!==t.points[n].series.name||(e=t.points[n].total),i||"预估值"!==t.points[n].series.name||(i=t.points[n].total);return 0!==i&&(a=a.concat(["<span>●</span>","<tspan> 完成: </tspan>",'<tspan style="font-weight:bold">'+(e/i*100).toFixed(2)+"%</tspan>"])),a.join("")}}})}),t.$refs.chartTendencyElement_monthly.$on("beforeRedraw",function(t){for(var e=[97,122],i=[],a=[],n=e[0];n<=e[1];n++)i.push(n);a=String.fromCharCode.apply(null,i).split(""),t.series.forEach(function(t,e){t.update({yAxis:0,stack:a[e]},!1)})})},methods:{render:function(){var t=this;t.getData().then(function(e){var i=function(t){var e={};return t.forEach(function(t,i){e[t.name]=t}),e},a=function(t){return(t.toString().split(".")[1]||"").length},n=function(t,e){var i=this,n=!1,r=new RegExp("%$","i");n=r.test(t.num)&&r.test(e.num),n?(i.todayNum=(parseFloat(t.num)||0)+"%",i.yesterdayNum=(parseFloat(e.num)||0)+"%",i.ratioNum=((parseFloat(t.num)||0)-(parseFloat(e.num)||0)).toFixed(2)):(i.todayNum=parseFloat(t.num)||0,i.yesterdayNum=parseFloat(e.num)||0,i.ratioNum=((i.todayNum-i.yesterdayNum)/i.yesterdayNum*100||0).toFixed(2),isFinite(((i.todayNum-i.yesterdayNum)/i.yesterdayNum*100||0).toFixed(2))||(i.ratioNum=100),i.todayNum=Highcharts.numberFormat(i.todayNum,a(i.todayNum),".",","),i.yesterdayNum=Highcharts.numberFormat(i.yesterdayNum,a(i.yesterdayNum),".",",")),i.ratioTrend=i.ratioNum>=0,i.ratioNum=Math.abs(i.ratioNum)+"%",i.numCallback&&i.numCallback.call(i,t,e)},r=i(e.yesterdaydata||{}||[]),s=i(e.todaydata||{}||[]);t.navigation.forEach(function(t,e){n.call(t,s[t.name]||{},r[t.name]||{})})})},getData:function(){var t=this;return new n.a(function(e,i){t.$http.get("/dataweb/fightdata",{}).then(function(t){if(t=t.body||{},0!==parseInt(t.errno))return console.warn("返回数据状态码错误！"),void i(t);e(t.data||{})},function(t){console.warn("获取数据请求失败！"),i(t)})})}},components:{"chart-tendency":l.a}}},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-view",attrs:{id:"key-indicators-container"}},[i("div",{staticClass:"padding-md clearfix paddTop50"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"panel panel-default hour-trend"},[t._m(0),t._v(" "),i("div",{staticClass:"panel-body tab-content mTop20"},[i("div",{staticClass:"data3Box"},[t._m(1),t._v(" "),i("div",{staticClass:"data3BoxBot"},[i("div",{staticClass:"data3BoxBotCon"},[i("ul",t._l(t.navigation,function(e){return t.$privileges.user[(t.$privileges.mapping[e.name]||{}).id]?i("li",[i("div",{staticClass:"data3BoxBotList"},[i("dl",[i("dt",[t._v(t._s(e.name))]),t._v(" "),i("dd",[i("span",{staticClass:"l-02"},[t._v(t._s(e.todayNum))]),t._v(" "),i("span",{staticClass:"l-03",class:{"icon-tt-up":e.ratioTrend,"icon-tt-lower":!1===e.ratioTrend}},[t._v(t._s(e.ratioNum))])])])])]):t._e()}))])])]),t._v(" "),i("chart-tendency",{ref:"chartTendencyElement",attrs:{navigation:t.navigation,timermillisec:t.timerMillisec,service:t.service}}),t._v(" "),i("chart-tendency",{ref:"chartTendencyElement_monthly",attrs:{navigation:t.navigation_monthly,timermillisec:t.timerMillisec,service:t.service,chartTitle:"销售预测"}}),t._v(" "),i("chart-tendency",{ref:"navigation_yearly",attrs:{navigation:t.navigation_yearly,timermillisec:t.timerMillisec,service:t.service,chartTitle:"销售业绩趋势"}})],1)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar navbar-default",attrs:{role:"navigation"}},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"navbar-header"},[i("span",{staticClass:"navbar-brand"},[t._v("战斗力")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data3BoxTop"},[i("div",{staticClass:"data3BoxTopCon"},[i("dl",[i("dd",[i("span",{staticClass:"l-01"},[t._v(" ")]),t._v(" "),i("span",{staticClass:"l-02"},[t._v("战斗力")]),t._v(" "),i("span",{staticClass:"l-03"},[t._v(" ")])])])]),t._v(" "),i("div",{staticClass:"data3BoxTopArrow"},[i("img",{attrs:{src:"static/img/arrow.png"}})])])}]}},89:function(t,e,i){var a=i(12)(i(174),i(187),null,null);t.exports=a.exports}});