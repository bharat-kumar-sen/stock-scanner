(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5tXZ":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),i=u("XePT"),o=u("z5nN"),d=u("iutN"),r=u("Ip0R"),s=u("ZYCi"),c=u("K+Kt"),h=u("DQlY"),p=u("lqqz"),b=u("hrfs"),g=u("E5ak"),m=u("IDld"),f=u("Tbvk"),y=u("Ddub"),v=(u("Aaiw"),u("nvNc")),w=u("84xF"),x=(u("oTcB"),u("K9Ia")),C=u("+6Qm"),k=u("f0Wu"),D=function(){function l(l,n,u,t,e,a,i){this.globalService=l,this.toastr=n,this.spinner=u,this.usersService=t,this.jwtService=e,this.stocksService=a,this.cryptoService=i,this.currentUser=new v.a,this.dtOptions={},this.dtTrigger=new x.a,this.stockList=[],this.coinLivechangeList=[],this.lineChartOptions={responsive:!0},this.lineChartLabels=[],this.lineChartType="line",this.lineChartLegend=!0,this.lineChartPlugins=[],this.historyDataTable=null,this.lineChartData=[{data:[],label:"VOLUME VS 20 DAY OF VOLUME AVG HISTORY",backgroundColor:["rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)"],borderColor:["rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)","rgba(255,255,0, 0.2)"],borderWidth:1}],this.chartDataHistory=[],this.globalService.topscroll()}return l.prototype.ngOnInit=function(){var l=this;this.currentUser=this.jwtService.getCurrentUser(),setTimeout(function(){l.watchList()},1e3),this.dtOptions={responsive:!0,columnDefs:[{targets:4,orderable:!1}]}},l.prototype.ngAfterViewInit=function(){this.dtTrigger.next()},l.prototype.watchList=function(){var l=this;this.spinner.show(),this.globalService.setLoadingLabel("Data is fetching... Please Wait."),this.cryptoService.watchList().subscribe(function(n){200===n.status?l.datatableElement.dtInstance.then(function(u){u.destroy(),l.coinLivechangeList=n.data,l.dtTrigger.next(),l.spinner.hide()}):l.spinner.hide()},function(n){l.spinner.hide()})},l.prototype.closeModel=function(){this.showChartModal.hide()},l.prototype.showChartModel=function(l){this.spinner.show();var n=JSON.parse(JSON.stringify(l));this.lineChartLabels=[],this.lineChartData[0].data=[];var u=[],t=[];n.history.map(function(l){l.details=JSON.parse(l.details);var n=k(l.createdAt).format("DD/MM/YYYY");u.push(l.todayVolVsvolAvgof20Days),t.push(n)}),this.chartDataHistory=n.history,this.lineChartData[0].data=u,this.lineChartLabels=t,this.showChartModal.show();var e=this;e.historyDataTable&&e.historyDataTable.destroy(),setTimeout(function(){e.spinner.hide(),e.historyDataTable=$("#historyDataTable").DataTable({searching:!1,ordering:!0,lengthChange:!1,lengthMenu:[[5]]})},500)},l}(),T=u("SZbH"),L=u("miAi"),M=u("MT8J"),O=u("0OvR"),R=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"a",[["style","text-decoration: underline !important;"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t["\u0275ted"](5,null,[" "," "])),(l()(),t["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,["",""])),(l()(),t["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,["",""])),(l()(),t["\u0275eld"](10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,1,"span",[["class","badge badge-pill badge-dark"]],null,null,null,null,null)),(l()(),t["\u0275ted"](12,null,["",""])),(l()(),t["\u0275eld"](13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showChartModel(l.context.$implicit)&&t),t},null,null)),(l()(),t["\u0275eld"](15,0,null,null,0,"i",[["class","fa fa-history"]],null,null,null,null,null))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,t["\u0275inlineInterpolate"](1,"https://www.coingecko.com/en/coins/",null==n.context.$implicit?null:null==n.context.$implicit.details?null:n.context.$implicit.details.id,"")),l(n,5,0,n.context.$implicit.name),l(n,7,0,n.context.$implicit.shortName),l(n,9,0,null==n.context.$implicit?null:null==n.context.$implicit.details?null:n.context.$implicit.details.codeType),l(n,12,0,n.context.$implicit.history.length),l(n,14,0,!(n.context.$implicit.history.length>1))})}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"h4",[["class","modal-title p-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"a",[["style","text-decoration: underline !important;"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "]))],null,function(l,n){var u=n.component;l(n,1,0,t["\u0275inlineInterpolate"](1,"https://www.coingecko.com/en/coins/",null==u.chartDataHistory[0]?null:null==u.chartDataHistory[0].details?null:u.chartDataHistory[0].details.id,"")),l(n,2,0,u.chartDataHistory[0].name)})}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),t["\u0275ppd"](3,2),(l()(),t["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,["",""])),(l()(),t["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,[""," %"])),(l()(),t["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,[""," %"])),(l()(),t["\u0275eld"](12,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](13,null,[""," %"]))],null,function(l,n){var u=t["\u0275unv"](n,2,0,l(n,3,0,t["\u0275nov"](n.parent.parent,0),n.context.$implicit.createdAt,"dd/MM/yyyy"));l(n,2,0,u),l(n,5,0,n.context.$implicit.volAvgof20Days),l(n,7,0,n.context.$implicit.todayVol),l(n,9,0,n.context.$implicit.todayVolVsvolAvgof20Days),l(n,11,0,n.context.$implicit.change24Hrs),l(n,13,0,n.context.$implicit.change7Day)})}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,17,"table",[["class","table table-bordered table-hover table-striped"],["id","historyDataTable"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,12,"tr",[["class","text-white text-nowrap bg-dark"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"th",[["class","text-white bg-dark font9px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date"])),(l()(),t["\u0275eld"](5,0,null,null,1,"th",[["class","text-white bg-dark font9px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["20 Days of Vol Avg."])),(l()(),t["\u0275eld"](7,0,null,null,1,"th",[["class","text-white bg-dark font9px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Today Vol"])),(l()(),t["\u0275eld"](9,0,null,null,1,"th",[["class","text-white bg-dark font9px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Today Vol VS 20 Day of Vol Avg."])),(l()(),t["\u0275eld"](11,0,null,null,1,"th",[["class","text-white bg-dark font9px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["24Hr Change"])),(l()(),t["\u0275eld"](13,0,null,null,1,"th",[["class","text-white bg-dark font9px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["7Day Change"])),(l()(),t["\u0275eld"](15,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](17,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,17,0,n.component.chartDataHistory)},null)}function A(l){return t["\u0275vid"](0,[t["\u0275pid"](0,r.DatePipe,[t.LOCALE_ID]),t["\u0275qud"](671088640,1,{datatableElement:0}),t["\u0275qud"](671088640,2,{showChartModal:0}),(l()(),t["\u0275eld"](3,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,2,"h4",[["class","text-primary"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Watchlist"])),(l()(),t["\u0275eld"](8,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,30,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,29,"div",[["class","card"],["style","min-height: 550px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,8,"h4",[["class","text-primary pt-3 pl-3 pr-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Threeshold crossed gain."])),(l()(),t["\u0275eld"](15,0,null,null,4,"a",[["class","btn btn-sm btn-dark pull-right"],["title","View All Location"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,16).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t["\u0275did"](16,671744,null,0,s.p,[s.m,s.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](17,1),(l()(),t["\u0275eld"](18,0,null,null,0,"i",[["class","fa fa-arrow-left pr-2"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Back to Dashboard"])),(l()(),t["\u0275eld"](20,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,19,"div",[["class","card-body text-left table-responsive pt-1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](22,0,null,null,18,"table",[["class","table table-bordered table-hover table-striped"],["datatable",""]],null,null,null,null,null)),t["\u0275did"](23,212992,[[1,4]],0,c.a,[t.ElementRef],{dtOptions:[0,"dtOptions"],dtTrigger:[1,"dtTrigger"]},null),(l()(),t["\u0275eld"](24,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,12,"tr",[["class","text-white text-nowrap bg-dark"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,1,"th",[["class","text-white bg-dark"],["style","width: 50px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["S.No."])),(l()(),t["\u0275eld"](28,0,null,null,1,"th",[["class","text-white bg-dark"],["style","width: 300px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Symbol Name"])),(l()(),t["\u0275eld"](30,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Short Name"])),(l()(),t["\u0275eld"](32,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Code"])),(l()(),t["\u0275eld"](34,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Total Crossed"])),(l()(),t["\u0275eld"](36,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["History"])),(l()(),t["\u0275eld"](38,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](40,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](41,16777216,null,null,25,"div",[["aria-hidden","true"],["aria-labelledby","myModalLabel"],["bsModal",""],["class","modal fade"],["role","dialog"],["tabindex","-1"]],null,[[null,"click"],[null,"keydown.esc"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,42).onClick(u)&&e),"keydown.esc"===n&&(e=!1!==t["\u0275nov"](l,42).onEsc(u)&&e),e},null,null)),t["\u0275did"](42,212992,[[2,4],["showChartModal",4]],0,h.d,[t.ElementRef,t.ViewContainerRef,t.Renderer2,p.a],{config:[0,"config"]},null),t["\u0275pod"](43,{backdrop:0,keyboard:1}),(l()(),t["\u0275eld"](44,0,null,null,22,"div",[["class","modal-dialog modal-lg"],["role","document"]],null,null,null,null,null)),(l()(),t["\u0275eld"](45,0,null,null,21,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](46,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](47,0,null,null,1,"h4",[["class","modal-title text-white"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Threeshold crossed History"])),(l()(),t["\u0275eld"](49,0,null,null,2,"button",[["aria-label","Close"],["class","close text-white"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.closeModel()&&t),t},null,null)),(l()(),t["\u0275eld"](50,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\xd7"])),(l()(),t["\u0275eld"](52,0,null,null,9,"div",[["class","modal-body"],["style","height: 600px; overflow: overlay;"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](54,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](55,0,null,null,3,"div",[["class","row row-xs align-items-center mg-b-20"]],null,null,null,null,null)),(l()(),t["\u0275eld"](56,0,null,null,2,"div",[["class","w-100 position-relative"],["style","display: block;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](57,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),t["\u0275did"](58,999424,null,0,b.a,[t.ElementRef,b.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"],plugins:[5,"plugins"]},null),(l()(),t["\u0275eld"](59,0,null,null,2,"div",[["class","table-responsive pt-1"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](61,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](62,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275eld"](63,0,null,null,1,"app-alert",[],null,null,null,g.b,g.a)),t["\u0275did"](64,245760,null,0,m.a,[f.a],null,null),(l()(),t["\u0275eld"](65,0,null,null,1,"button",[["aria-label","Close"],["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.closeModel()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,[" close "]))],function(l,n){var u=n.component,t=l(n,17,0,"/dashboard");l(n,16,0,t),l(n,23,0,u.dtOptions,u.dtTrigger),l(n,40,0,u.coinLivechangeList);var e=l(n,43,0,"static",!1);l(n,42,0,e),l(n,54,0,u.chartDataHistory.length),l(n,58,0,u.lineChartData,u.lineChartLabels,u.lineChartOptions,u.lineChartType,u.lineChartLegend,u.lineChartPlugins),l(n,61,0,u.chartDataHistory.length),l(n,64,0)},function(l,n){l(n,15,0,t["\u0275nov"](n,16).target,t["\u0275nov"](n,16).href)})}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-watchlilst",[],null,null,null,A,R)),t["\u0275did"](1,4308992,null,0,D,[y.a,T.j,L.c,M.a,O.a,w.a,C.a],null,null)],function(l,n){l(n,1,0)},null)}var H=t["\u0275ccf"]("app-watchlilst",D,F,{},{},[]),E=u("gIcY"),Y=u("NJnL"),_=u("xtZt"),q=u("kykz"),J=u("axVG"),K=function(){return function(){}}();u.d(n,"WatchlilstModuleNgFactory",function(){return P});var P=t["\u0275cmf"](e,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,i.a,o.a,o.b,d.a,H]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,E.q,E.q,[]),t["\u0275mpd"](4608,E.e,E.e,[]),t["\u0275mpd"](4608,Y.a,Y.a,[t.RendererFactory2,t.PLATFORM_ID]),t["\u0275mpd"](4608,p.a,p.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,Y.a,t.ApplicationRef]),t["\u0275mpd"](4608,h.a,h.a,[t.RendererFactory2,p.a]),t["\u0275mpd"](4608,_.f,_.f,[]),t["\u0275mpd"](4608,b.c,b.c,[]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,E.p,E.p,[]),t["\u0275mpd"](1073742336,E.f,E.f,[]),t["\u0275mpd"](1073742336,E.o,E.o,[]),t["\u0275mpd"](1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),t["\u0275mpd"](1073742336,T.i,T.i,[]),t["\u0275mpd"](1073742336,L.b,L.b,[]),t["\u0275mpd"](1073742336,h.e,h.e,[]),t["\u0275mpd"](1073742336,_.e,_.e,[]),t["\u0275mpd"](1073742336,q.a,q.a,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,K,K,[]),t["\u0275mpd"](1073742336,b.b,b.b,[]),t["\u0275mpd"](1073742336,e,e,[]),t["\u0275mpd"](256,T.b,{default:T.a,config:{closeButton:!0,positionClass:"toast-bottom-right",preventDuplicates:!0}},[]),t["\u0275mpd"](256,_.a,{autoClose:!0,insideClick:!1},[]),t["\u0275mpd"](1024,s.k,function(){return[[{path:"",component:D,pathMatch:"full"}]]},[])])})}}]);