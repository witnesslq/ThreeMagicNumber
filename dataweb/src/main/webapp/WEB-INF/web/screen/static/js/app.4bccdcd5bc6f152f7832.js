webpackJsonp([11],{102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n(52),n(155)),t.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var e=this,t=function(){if(!e.swiper&&i){delete e.options.notNextTick;var t=!1;for(var n in e.defaultSwiperClasses)e.defaultSwiperClasses.hasOwnProperty(n)&&e.options[n]&&(t=!0,e.defaultSwiperClasses[n]=e.options[n]);var a=function(){e.swiper=new Swiper(e.$el,e.options)};t?e.$nextTick(a):a()}};this.options.notNextTick?t():this.$nextTick(t)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(90),a=n.n(i),s=n(91),d=n.n(s),o=n(32),c=n(108),r=n(0),u=n.n(r),l={startX:0,startY:0,endX:0,endY:0};t.default={name:"app",data:function(){return{routes:[],asideVisible:!1,fullscreenLoading:!1}},created:function(){var e=this;e.$router.beforeEach(function(t,n,i){e.asideVisible=!1,i()}),e.$router.beforeResolve(function(t,n,i){e.interceptRouterRedirect(t,n,i)}),e.$router.afterEach(function(t){e.setRouterPrivileges(t)})},methods:{handleLogout:function(){var e=new Date;e.setMilliseconds(e.getMilliseconds()-864e5),document.cookie=["dataUser","=","",";expires="+e.toUTCString()].join("")},showRouter:function(e){return!e.hidden},toggleAside:function(){var e=this;e.asideVisible=!e.asideVisible},touchStart:function(e){l.startX=e.changedTouches[0].pageX,l.startY=e.changedTouches[0].pageY},touchEnd:function(e){var t=this;l.endX=e.changedTouches[0].pageX,l.endY=e.changedTouches[0].pageY;var n=l.endX-l.startX,i=l.endY-l.startY;Math.abs(n)>Math.abs(i)&&n>200?t.asideVisible=!0:Math.abs(n)>Math.abs(i)&&n<-200&&(t.asideVisible=!1)},interceptRouterRedirect:function(e,t,n){var i=this;if(i.fullscreenLoading=!0,i.$privileges)return i.fullscreenLoading=!1,void n();d.a.all([i.getDataPromise("/dataweb/getAuthDatas")]).then(function(e){var t=e[0],a={user:{}};t.forEach(function(e){a.user[e]=1}),u.a.prototype.$privileges=a,o.a.forEach(function(e){(e.children||[]).forEach(function(e){var t=c.a[e.path];t&&t.ID&&!i.$privileges.user[(t.ID||{}).id]&&(e.hidden=!0)})}),i.routes=o.a,i.fullscreenLoading=!1,n()})},setRouterPrivileges:function(e){u.a.prototype.$privileges.mapping=c.a[e.path]||{}},getDataPromise:function(e,t){var n=this;return new d.a(function(i,s){n.$http.get(e,a()({},t)).then(function(e){var t=e.body||{};if(0!==parseInt(t.errno))return console.warn("返回数据状态码错误！"),void s(t);i(t.data||{})},function(e){console.warn("获取数据失败！"),s(e)})})}}}},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(77),a=(n.n(i),n(63)),s=n.n(a),d=n(76),o=(n.n(d),n(62)),c=n.n(o),r=n(79),u=(n.n(r),n(29)),l=n.n(u),p=n(82),f=(n.n(p),n(67)),h=n.n(f),m=n(74),v=(n.n(m),n(61)),w=n.n(v),g=n(69),b=(n.n(g),n(56)),_=n.n(b),P=n(70),C=(n.n(P),n(57)),x=n.n(C),y=n(78),$=(n.n(y),n(64)),S=n.n($),L=n(80),D=(n.n(L),n(65)),M=n.n(D),k=n(81),T=(n.n(k),n(66)),Y=n.n(T),V=n(71),I=(n.n(V),n(58)),E=n.n(I),R=n(72),H=(n.n(R),n(59)),A=n.n(H),F=n(75),O=(n.n(F),n(28)),X=n.n(O),j=n(73),U=(n.n(j),n(68)),G=(n.n(U),n(60)),N=n.n(G),z=n(0),J=n.n(z),Z=n(87),B=n.n(Z),q=n(55),K=n(89),Q=n(85),W=n.n(Q),ee=n(54),te=n(86),ne=n.n(te);J.a.use(K.a),J.a.use(ne.a),J.a.use(N.a),J.a.use(X.a),J.a.use(A.a),J.a.use(E.a),J.a.use(Y.a),J.a.use(M.a),J.a.use(S.a),J.a.use(x.a),J.a.use(_.a),J.a.use(w.a),J.a.use(h.a),J.a.use(l.a),J.a.use(c.a.directive),J.a.prototype.$loading=c.a.service,J.a.prototype.$message=s.a,n(83);var ie=new J.a({el:"#app",router:q.a,template:"<App/>",components:{App:B.a}});window.vueEntity=ie,window.Highcharts=W.a,W.a.setOptions(ee.a)},108:function(e,t,n){"use strict";t.a={"/datapanel/overview":{IP:{id:53,desc:"实时数据"},PV:{id:54,desc:"实时数据"},UV:{id:55,desc:"实时数据"},"付费会员":{id:47,desc:"实时数据"},"电销":{id:56,desc:"付费会员"},"渠道":{id:57,desc:"付费会员"},"行业":{id:6,desc:"付费会员"},"加盟商":{id:34,desc:"付费会员"},"职能-满编率":{id:11,desc:"战斗力--职能"},"职能-离职率":{id:11,desc:"战斗力--职能"},"职能-在岗人数":{id:11,desc:"战斗力--职能"},"职能-编制人数":{id:11,desc:"战斗力--职能"},"渠道-转正人数":{id:9,desc:"战斗力--渠道"},"渠道-离职率":{id:10,desc:"战斗力--渠道"},"营销中心-新兵连人数":{id:40,desc:"战斗力--营销中心"},"营销中心-部门中未转正":{id:41,desc:"战斗力--营销中心"},"营销中心-部门中已转正":{id:7,desc:"战斗力--营销中心"},"营销中心-销售专员总计":{id:42,desc:"战斗力--营销中心"},"营销中心-离职率":{id:8,desc:"战斗力--营销中心"},"营销中心-管理层人数":{id:43,desc:"战斗力--营销中心"},"营销中心-职能人数":{id:69,desc:"战斗力--营销中心"},"营销中心-营销中心总人数":{id:70,desc:"战斗力--营销中心"}},"/datapanel/operation":{ID:{id:1,desc:"产品运营数据路由权限编号"},IP:{id:53,desc:"产品运营数据"},UV:{id:55,desc:"产品运营数据"},PV:{id:54,desc:"产品运营数据"},"询盘数量":{id:13,desc:"产品运营数据"},"会员注册":{id:18,desc:"产品运营数据"},"P4P消耗":{id:19,desc:"产品运营数据"},"百度联盟收入":{id:46,desc:"趋势图1"}},"/datapanel/p4pConsumption":{ID:{id:73,desc:"P4P消耗数据路由权限编号"},"P4P消耗":{id:19,desc:"P4P消耗"},"纯P4P消耗":{id:45,desc:"P4P消耗"},"全网定投消耗":{id:45,desc:"P4P消耗"},P4PCPC:{id:71,desc:"趋势图1"},"全网定投":{id:72,desc:"趋势图1"},"P4P关键词":{id:45,desc:"趋势图1"},"P4P竞价词":{id:58,desc:"趋势图1"}},"/datapanel/effectives":{ID:{id:3,desc:"战斗力路由权限编号"},"职能满编率":{id:11,desc:"战斗力"},"电销转正人数":{id:7,desc:"战斗力"},"渠道转正人数":{id:9,desc:"战斗力"},"百家文章数":{id:27,desc:"战斗力"},"市场部发稿量":{id:28,desc:"战斗力"},"渠道拜访量":{id:22,desc:"战斗力"},"人均在线时长":{id:20,desc:"战斗力"},"人均有效通话次数":{id:21,desc:"战斗力"},"电销":{id:35,desc:"销售预测"},"渠道":{id:38,desc:"销售预测"}},"/datapanel/member":{ID:{id:2,desc:"付费会员路由权限编号"},"付费会员":{id:47,desc:"付费会员"},"新增Leads数":{id:31,desc:"付费会员"},"Leads转化率":{id:30,desc:"付费会员"},"3类客户数":{id:24,desc:"付费会员"},"交易付费会员数":{id:33,desc:"付费会员"},"卖家DAU":{id:14,desc:"付费会员"},"增值产品-电销":{id:61,desc:"续签率-增值产品"},"增值产品-渠道":{id:62,desc:"续签率-增值产品"},"增值产品-行业":{id:63,desc:"续签率-增值产品"},"增值产品-电商":{id:64,desc:"续签率-增值产品"},"基本产品-电销":{id:65,desc:"续签率-基本产品"},"基本产品-渠道":{id:66,desc:"续签率-基本产品"},"基本产品-行业":{id:67,desc:"续签率-基本产品"},"基本产品-电商":{id:68,desc:"续签率-基本产品"},"客户满意度":{id:29,desc:"对比图"},"产品用户贡献":{id:32,desc:"对比图"},"Leads来源转化率":{id:44,desc:"趋势图1"},"库存Leads总数":{id:60,desc:"趋势图2"},"库存Leads来源":{id:39,desc:"趋势图2"},"新增Leads来源":{id:36,desc:"趋势图2"},"已分配Leads数":{id:59,desc:"趋势图2"},"已分配Leads来源":{id:37,desc:"趋势图2"}},"/datapanel/readme":{ID:{id:4,desc:"数字字典路由权限编号"}},"/datapanel/authority":{ID:{id:5,desc:"权限管理路由权限编号"}},"/datapanel/uploadexcel":{ID:{id:74,desc:"上传文件权限管理编号"}}}},155:function(e,t){},162:function(e,t,n){var i=n(12)(n(102),n(166),null,null);e.exports=i.exports},163:function(e,t,n){var i=n(12)(n(103),n(167),null,null);e.exports=i.exports},164:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}]},[n("aside",{class:{asideShow:e.asideVisible}},[n("a",{staticClass:"leftArrow",class:{rigArrow:e.asideVisible},on:{click:e.toggleAside}}),e._v(" "),e._m(0,!1,!1),e._v(" "),n("div",{staticClass:"sidebar-inner"},[n("div",{staticClass:"main-menu"},[n("ul",e._l(e.routes,function(t){return t.hidden?e._e():n("li",[n("router-link",{attrs:{to:t.path,"active-class":"active"}},[n("span",{staticClass:"text"},[e._v(e._s(t.name))])]),e._v(" "),(t.children||[]).length>0?n("ul",{staticClass:"sub-nav"},[e._l(t.children,function(t){return e.showRouter(t)?n("li",[n("router-link",{attrs:{to:t.path,"active-class":"sub-nav-checked"}},[n("span",{staticClass:"text"},[e._v("\n                                    "+e._s(t.name)+"\n                                ")])])],1):e._e()}),e._v(" "),n("li",[n("a",{attrs:{href:"//data.360jz.com/dataweb/unlogin"},on:{click:e.handleLogout}},[n("span",{staticClass:"text"},[e._v("退出")])])])],2):e._e()],1)}))])])]),e._v(" "),n("div",{ref:"Container",staticClass:"key-indicators",attrs:{id:"main-container"},on:{click:function(t){e.asideVisible=!1},touchstart:function(e){},touchend:function(e){}}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("span",[n("img",{attrs:{src:"static/img/dataImg.png"}})])])}]}},166:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.slideClass},[e._t("default")],2)},staticRenderFns:[]}},167:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[e._t("parallax-bg"),e._v(" "),n("div",{class:e.defaultSwiperClasses.wrapperClass},[e._t("default")],2),e._v(" "),e._t("pagination"),e._v(" "),e._t("button-prev"),e._v(" "),e._t("button-next"),e._v(" "),e._t("scrollbar")],2)},staticRenderFns:[]}},170:function(e,t){},32:function(e,t,n){"use strict";var i=[{name:"根",path:"/",redirect:"/datapanel/",hidden:!0},{name:"数据面板",path:"/datapanel/",redirect:"/datapanel/overview",component:function(e){n.e(9).then(function(){e(n(94))}.bind(null,n)).catch(n.oe)},children:[{name:"总览",path:"/datapanel/overview",component:function(e){n.e(3).then(function(){e(n(98))}.bind(null,n)).catch(n.oe)}},{name:"产品运营数据",path:"/datapanel/operation",component:function(e){n.e(1).then(function(){e(n(97))}.bind(null,n)).catch(n.oe)}},{name:"P4P运营数据",path:"/datapanel/p4pConsumption",component:function(e){n.e(0).then(function(){e(n(99))}.bind(null,n)).catch(n.oe)},hidden:!0},{name:"战斗力",path:"/datapanel/effectives",component:function(e){n.e(5).then(function(){e(n(93))}.bind(null,n)).catch(n.oe)}},{name:"付费会员",path:"/datapanel/member",component:function(e){n.e(4).then(function(){e(n(96))}.bind(null,n)).catch(n.oe)}},{name:"流量分布",path:"/datapanel/map",component:function(e){n.e(2).then(function(){e(n(95))}.bind(null,n)).catch(n.oe)},hidden:!0},{name:"数据字典",path:"/datapanel/readme",component:function(e){n.e(8).then(function(){e(n(100))}.bind(null,n)).catch(n.oe)}},{name:"上传文件",path:"/datapanel/uploadexcel",component:function(e){n.e(7).then(function(){e(n(101))}.bind(null,n)).catch(n.oe)}},{name:"权限管理",path:"/datapanel/authority",component:function(e){n.e(6).then(function(){e(n(92))}.bind(null,n)).catch(n.oe)}}]}];t.a=i},54:function(e,t,n){"use strict";var i={lang:{contextButtonTitle:"图表导出菜单",decimalPoint:".",downloadJPEG:"下载JPEG图片",downloadPDF:"下载PDF文件",downloadPNG:"下载PNG文件",downloadSVG:"下载SVG文件",drillUpText:"返回 {series.name}",invalidDate:"无效的时间",loading:"加载中...",months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],noData:"没有数据",numericSymbols:null,printChart:"打印图表",resetZoom:"重置缩放比例",resetZoomTitle:"重置为原始大小",shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],thousandsSep:",",weekdays:["星期一","星期二","星期三","星期四","星期五","星期六","星期天"],rangeSelectorFrom:"开始时间",rangeSelectorTo:"结束时间",rangeSelectorZoom:"缩放",zoomIn:"缩小",zoomOut:"放大"},global:{useUTC:!0},title:{text:"图表标题"},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%Y-%m-%d",month:"%Y-%m",year:"%Y"}},exporting:{},credits:{text:"Highcharts",href:"https://highcharts.com.cn"},xAxis:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%Y-%m-%d",month:"%Y-%m",year:"%Y"}}};t.a=i},55:function(e,t,n){"use strict";var i=n(0),a=n.n(i),s=n(168),d=n(32);a.a.use(s.a),t.a=new s.a({routes:d.a})},68:function(e,t){},69:function(e,t){},70:function(e,t){},71:function(e,t){},72:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){},77:function(e,t){},78:function(e,t){},79:function(e,t){},80:function(e,t){},81:function(e,t){},82:function(e,t){},83:function(e,t){},87:function(e,t,n){var i=n(12)(n(104),n(164),null,null);e.exports=i.exports}},[107]);