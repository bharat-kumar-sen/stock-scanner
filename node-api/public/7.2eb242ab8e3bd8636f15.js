(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+6Qm":function(l,n,t){"use strict";t.d(n,"a",function(){return r});var u=t("67Y/"),e=t("Gd0I"),o=t("CcnG"),i=t("t/Na"),r=function(){function l(l,n){this.http=l,this.apiService=n,this.crypto="crypto"}return l.prototype.saveCryptoSymbol=function(l){return this.apiService.post(this.crypto+"/saveCryptoSymbol",l).pipe(Object(u.a)(function(l){return l}))},l.prototype.list=function(l){return console.log("call cryptoservice"),this.apiService.get(this.crypto+"/getCryptoSymbol").pipe(Object(u.a)(function(l){return console.log("data",l),l}))},l.prototype.getCryptoSymbolLiveDetails=function(l){return this.apiService.get(this.crypto+"/getCryptoSymbolDetails").pipe(Object(u.a)(function(l){return console.log("data",l),l}))},l.prototype.watchList=function(l){return this.apiService.get(this.crypto+"/watchList").pipe(Object(u.a)(function(l){return console.log("data",l),l}))},l.prototype.delete=function(l){return this.apiService.delete(this.crypto+"/deleteCryptoSymbol",l).pipe(Object(u.a)(function(l){return l}))},l.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new l(o["\u0275\u0275inject"](i.c),o["\u0275\u0275inject"](e.a))},token:l,providedIn:"root"}),l}()},Aaiw:function(l,n,t){"use strict";t("Gd0I"),t("Ddub"),t("0OvR"),t("MT8J")},BRQc:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("Ip0R"),r=t("K+Kt"),a=t("DQlY"),d=t("lqqz"),s=t("gIcY"),c=t("E5ak"),p=t("IDld"),m=t("Tbvk"),y=(t("oTcB"),t("K9Ia")),b=(t("Aaiw"),t("nvNc")),f=t("+6Qm"),h=function(){return function(){this.name=""}}(),v=function(){function l(l,n,t,u,e){this.globalService=l,this.toastr=n,this.spinner=t,this.jwtService=u,this.cryptoService=e,this.currentUser=new b.a,this.dtOptions={},this.dtTrigger=new y.a,this.cryptoList=[],this.submitted=!1,this.requiredValidate={name:""},this.newSymbol=new h,this.globalService.topscroll(),this.getListCrypto()}return l.prototype.ngOnInit=function(){this.currentUser=this.jwtService.getCurrentUser(),this.dtOptions={responsive:!0,columnDefs:[{targets:0,orderable:!1,searchable:!1},{targets:1,orderable:!1},{targets:2,orderable:!1},{targets:3,orderable:!1}]}},l.prototype.ngAfterViewInit=function(){this.dtTrigger.next()},l.prototype.getListCrypto=function(){var l=this;this.spinner.show(),this.cryptoService.list().subscribe(function(n){200===n.status&&l.datatableElement.dtInstance.then(function(t){t.destroy(),l.dtTrigger.next(),l.cryptoList=n.data,l.spinner.hide()})},function(n){console.log("status 200 success"),l.spinner.hide()})},l.prototype.showAddEditModal=function(l){this.newSymbol=l,l&&l._id?(this.newSymbol=Object.assign({},l),this.showAddEditCryptoSymbolModal.show()):(this.newSymbol=new h,this.showAddEditCryptoSymbolModal.show())},l.prototype.showshowActionModal=function(l){this.newSymbol=l,this.deleteCryptSymboModal.show()},l.prototype.saveCryptoSymbol=function(){var l=this,n=this;if(Object.keys(this.requiredValidate).filter(function(l){return!n.newSymbol[l]}).length)return this.toastr.error("* Please fill all mandatory fields.","Error"),!1;this.spinner.show();var t=Object.assign({},this.newSymbol);t.name=t.name.toLowerCase(),this.cryptoService.saveCryptoSymbol(t).subscribe(function(n){l.spinner.hide(),200===n.status?(l.toastr.success("Details "+(l.newSymbol._id?"Updated":"Saved")+" Successfully.","Success"),l.getListCrypto(),l.closeModel()):422===n.status?l.toastr.warning("This coin name is not valid. Please enter valid coin name.","Validation"):l.closeModel()},function(n){l.closeModel(),l.spinner.hide(),l.toastr.error("There are some server error. Please check connection.","Error")})},l.prototype.closeModel=function(){this.showAddEditCryptoSymbolModal.hide(),this.deleteCryptSymboModal.hide()},l.prototype.deletecryptoSymbol=function(){var l=this;this.spinner.show(),this.cryptoService.delete(this.newSymbol).subscribe(function(n){l.spinner.hide(),l.closeModel(),l.getListCrypto(),l.toastr.success("Crypto Symbol deleted successfully.","Success")},function(n){l.spinner.hide(),l.deleteCryptSymboModal.hide(),l.toastr.error("There are some server error. Please check connection.","Error")})},l}(),g=t("Ddub"),w=t("SZbH"),C=t("miAi"),S=t("0OvR"),k=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,["",""])),(l()(),u["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](4,null,["",""])),(l()(),u["\u0275eld"](5,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](6,null,["",""])),u["\u0275ppd"](7,2),(l()(),u["\u0275eld"](8,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,["",""])),u["\u0275ppd"](10,2),(l()(),u["\u0275eld"](11,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,4,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,1,"button",[["class","tn btn-sm btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.showAddEditModal(l.context.$implicit)&&u),u},null,null)),(l()(),u["\u0275eld"](14,0,null,null,0,"i",[["class","fa fa-pencil"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-sm btn-outline-danger"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.showshowActionModal(l.context.$implicit)&&u),u},null,null)),(l()(),u["\u0275eld"](16,0,null,null,0,"i",[["class","fa fa-trash-o"]],null,null,null,null,null))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.name);var t=u["\u0275unv"](n,6,0,l(n,7,0,u["\u0275nov"](n.parent,0),n.context.$implicit.updatedAt,"yy/MM/dd"));l(n,6,0,t);var e=u["\u0275unv"](n,9,0,l(n,10,0,u["\u0275nov"](n.parent,0),n.context.$implicit.createdAt,"yy/MM/dd"));l(n,9,0,e)})}function M(l){return u["\u0275vid"](0,[u["\u0275pid"](0,i.DatePipe,[u.LOCALE_ID]),u["\u0275qud"](671088640,1,{datatableElement:0}),u["\u0275qud"](671088640,2,{deleteCryptSymboModal:0}),u["\u0275qud"](671088640,3,{showAddEditCryptoSymbolModal:0}),(l()(),u["\u0275eld"](4,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,2,"h4",[["class","text-primary"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Crypto Currency "])),(l()(),u["\u0275eld"](9,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,24,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,23,"div",[["class","card"],["style","min-height: 550px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,22,"div",[["class","card-body text-left table-responsive"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,3,"div",[["class","col-sm-12 d-flex justify-content-end mb-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.showAddEditModal()&&u),u},null,null)),(l()(),u["\u0275eld"](17,0,null,null,0,"i",[["class","fa fa-plus mr-1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Add Crypto Currency"])),(l()(),u["\u0275eld"](19,0,null,null,16,"table",[["class","table table-bordered table-hover table-striped"],["datatable",""]],null,null,null,null,null)),u["\u0275did"](20,212992,[[1,4]],0,r.a,[u.ElementRef],{dtOptions:[0,"dtOptions"],dtTrigger:[1,"dtTrigger"]},null),(l()(),u["\u0275eld"](21,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),u["\u0275eld"](22,0,null,null,10,"tr",[["class","text-white text-nowrap bg-dark"]],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,1,"th",[["class","text-white bg-dark"],["style","width: 50px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["S.No."])),(l()(),u["\u0275eld"](25,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["name"])),(l()(),u["\u0275eld"](27,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["updated Date"])),(l()(),u["\u0275eld"](29,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["created Date"])),(l()(),u["\u0275eld"](31,0,null,null,1,"th",[["class","text-white bg-dark"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Action"])),(l()(),u["\u0275eld"](33,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,x)),u["\u0275did"](35,278528,null,0,i.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](36,16777216,null,null,34,"div",[["aria-hidden","true"],["aria-labelledby","myModalLabel"],["bsModal",""],["class","modal fade"],["role","dialog"],["tabindex","-1"]],null,[[null,"click"],[null,"keydown.esc"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,37).onClick(t)&&e),"keydown.esc"===n&&(e=!1!==u["\u0275nov"](l,37).onEsc(t)&&e),e},null,null)),u["\u0275did"](37,212992,[[3,4],["showAddEditCryptoSymbolModal",4]],0,a.d,[u.ElementRef,u.ViewContainerRef,u.Renderer2,d.a],{config:[0,"config"]},null),u["\u0275pod"](38,{backdrop:0,keyboard:1}),(l()(),u["\u0275eld"](39,0,null,null,31,"div",[["class","modal-dialog"],["role","document"]],null,null,null,null,null)),(l()(),u["\u0275eld"](40,0,null,null,30,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),u["\u0275eld"](41,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](42,0,null,null,1,"h4",[["class","modal-title text-white"]],null,null,null,null,null)),(l()(),u["\u0275ted"](43,null,[""," Crypto Currency"])),(l()(),u["\u0275eld"](44,0,null,null,2,"button",[["aria-label","Close"],["class","close text-white"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.closeModel()&&u),u},null,null)),(l()(),u["\u0275eld"](45,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xd7"])),(l()(),u["\u0275eld"](47,0,null,null,18,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](48,0,null,null,17,"div",[["class","row row-xs align-items-center mg-b-20"]],null,null,null,null,null)),(l()(),u["\u0275eld"](49,0,null,null,7,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](50,0,null,null,6,"label",[["class","font-weight-bold mg-b-0"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Name "])),(l()(),u["\u0275eld"](52,0,null,null,4,"sup",[],null,null,null,null,null)),(l()(),u["\u0275eld"](53,0,null,null,3,"i",[["aria-hidden","true"],["class","fa fa-star star-icon"]],null,null,null,null,null)),u["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](55,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](56,{"text-secondary":0,"text-primary":1}),(l()(),u["\u0275eld"](57,0,null,null,8,"div",[["class","col-md-10 mg-t-5 mg-md-t-0"]],null,null,null,null,null)),(l()(),u["\u0275eld"](58,0,null,null,7,"input",[["class","form-control"],["id","name"],["maxlength","40"],["name","name"],["placeholder","Please enter Crypto Symbol name"],["type","text"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,o=l.component;return"input"===n&&(e=!1!==u["\u0275nov"](l,59)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u["\u0275nov"](l,59).onTouched()&&e),"compositionstart"===n&&(e=!1!==u["\u0275nov"](l,59)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u["\u0275nov"](l,59)._compositionEnd(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.newSymbol.name=t)&&e),e},null,null)),u["\u0275did"](59,16384,null,0,s.d,[u.Renderer2,u.ElementRef,[2,s.a]],null,null),u["\u0275did"](60,540672,null,0,s.g,[],{maxlength:[0,"maxlength"]},null),u["\u0275prd"](1024,null,s.h,function(l){return[l]},[s.g]),u["\u0275prd"](1024,null,s.i,function(l){return[l]},[s.d]),u["\u0275did"](63,671744,null,0,s.n,[[8,null],[6,s.h],[8,null],[6,s.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.j,null,[s.n]),u["\u0275did"](65,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),u["\u0275eld"](66,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),u["\u0275eld"](67,0,null,null,1,"app-alert",[],null,null,null,c.b,c.a)),u["\u0275did"](68,245760,null,0,p.a,[m.a],null,null),(l()(),u["\u0275eld"](69,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.saveCryptoSymbol()&&u),u},null,null)),(l()(),u["\u0275ted"](70,null,["",""])),(l()(),u["\u0275eld"](71,16777216,null,null,24,"div",[["aria-hidden","true"],["aria-labelledby","myModalLabel"],["bsModal",""],["class","modal fade"],["role","dialog"],["tabindex","-1"]],null,[[null,"click"],[null,"keydown.esc"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,72).onClick(t)&&e),"keydown.esc"===n&&(e=!1!==u["\u0275nov"](l,72).onEsc(t)&&e),e},null,null)),u["\u0275did"](72,212992,[[2,4],["deleteCryptSymboModal",4]],0,a.d,[u.ElementRef,u.ViewContainerRef,u.Renderer2,d.a],{config:[0,"config"]},null),u["\u0275pod"](73,{backdrop:0,keyboard:1}),(l()(),u["\u0275eld"](74,0,null,null,21,"div",[["class","modal-dialog"],["role","document"]],null,null,null,null,null)),(l()(),u["\u0275eld"](75,0,null,null,20,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),u["\u0275eld"](76,0,null,null,6,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](77,0,null,null,2,"h4",[["class","modal-title text-white"]],null,null,null,null,null)),(l()(),u["\u0275eld"](78,0,null,null,0,"i",[["class","fa fa-trash"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Delete Crypto Symbol"])),(l()(),u["\u0275eld"](80,0,null,null,2,"button",[["aria-label","Close"],["class","close text-white"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.closeModel()&&u),u},null,null)),(l()(),u["\u0275eld"](81,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xd7"])),(l()(),u["\u0275eld"](83,0,null,null,7,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](84,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Are you sure want to delete this Crypto Currency?"])),(l()(),u["\u0275eld"](86,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["\u0275eld"](87,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Crypto Symbol Name:"])),(l()(),u["\u0275ted"](89,null,[" ",""])),(l()(),u["\u0275eld"](90,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](91,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),u["\u0275eld"](92,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.closeModel()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Close"])),(l()(),u["\u0275eld"](94,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.deletecryptoSymbol()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Delete"]))],function(l,n){var t=n.component;l(n,20,0,t.dtOptions,t.dtTrigger),l(n,35,0,t.cryptoList);var u=l(n,38,0,"static",!1);l(n,37,0,u);var e=l(n,56,0,!(null!=t.newSymbol&&t.newSymbol.name),null==t.newSymbol?null:t.newSymbol.name);l(n,55,0,"fa fa-star star-icon",e),l(n,60,0,"40"),l(n,63,0,"name",t.newSymbol.name),l(n,68,0);var o=l(n,73,0,"static",!1);l(n,72,0,o)},function(l,n){var t=n.component;l(n,43,0,t.newSymbol._id?"Edit":"Add"),l(n,58,0,u["\u0275nov"](n,60).maxlength?u["\u0275nov"](n,60).maxlength:null,u["\u0275nov"](n,65).ngClassUntouched,u["\u0275nov"](n,65).ngClassTouched,u["\u0275nov"](n,65).ngClassPristine,u["\u0275nov"](n,65).ngClassDirty,u["\u0275nov"](n,65).ngClassValid,u["\u0275nov"](n,65).ngClassInvalid,u["\u0275nov"](n,65).ngClassPending),l(n,70,0,t.newSymbol._id?"Update":"Save"),l(n,89,0,null==t.newSymbol?null:t.newSymbol.name)})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-crypto-symbols",[],null,null,null,M,k)),u["\u0275did"](1,4308992,null,0,v,[g.a,w.j,C.c,S.a,f.a],null,null)],function(l,n){l(n,1,0)},null)}var I=u["\u0275ccf"]("app-crypto-symbols",v,R,{},{},[]),O=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),T=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["stock-symbols works!"]))],null,null)}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-stock-symbols",[],null,null,null,E,T)),u["\u0275did"](1,114688,null,0,O,[],null,null)],function(l,n){l(n,1,0)},null)}var A=u["\u0275ccf"]("app-stock-symbols",O,D,{},{},[]),L=t("XePT"),N=t("z5nN"),j=t("iutN"),_=t("NJnL"),F=t("xtZt"),V=t("ZYCi"),P=function(){return function(){}}(),q=t("kykz"),K=t("axVG");t.d(n,"SettingsModuleNgFactory",function(){return $});var $=u["\u0275cmf"](e,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,I,A,L.a,N.a,N.b,j.a]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[u.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,s.q,s.q,[]),u["\u0275mpd"](4608,s.e,s.e,[]),u["\u0275mpd"](4608,_.a,_.a,[u.RendererFactory2,u.PLATFORM_ID]),u["\u0275mpd"](4608,d.a,d.a,[u.ComponentFactoryResolver,u.NgZone,u.Injector,_.a,u.ApplicationRef]),u["\u0275mpd"](4608,a.a,a.a,[u.RendererFactory2,d.a]),u["\u0275mpd"](4608,F.f,F.f,[]),u["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),u["\u0275mpd"](1073742336,V.q,V.q,[[2,V.v],[2,V.m]]),u["\u0275mpd"](1073742336,P,P,[]),u["\u0275mpd"](1073742336,s.p,s.p,[]),u["\u0275mpd"](1073742336,s.f,s.f,[]),u["\u0275mpd"](1073742336,s.o,s.o,[]),u["\u0275mpd"](1073742336,w.i,w.i,[]),u["\u0275mpd"](1073742336,C.b,C.b,[]),u["\u0275mpd"](1073742336,a.e,a.e,[]),u["\u0275mpd"](1073742336,F.e,F.e,[]),u["\u0275mpd"](1073742336,q.a,q.a,[]),u["\u0275mpd"](1073742336,K.a,K.a,[]),u["\u0275mpd"](1073742336,e,e,[]),u["\u0275mpd"](1024,V.k,function(){return[[{path:"crypto_symbols",component:v,pathMatch:"full"},{path:"stock_symbols",component:O,pathMatch:"full"}]]},[]),u["\u0275mpd"](256,w.b,{default:w.a,config:{closeButton:!0,positionClass:"toast-bottom-right",preventDuplicates:!0}},[]),u["\u0275mpd"](256,F.a,{autoClose:!0,insideClick:!1},[])])})},E5ak:function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r});var u=t("CcnG"),e=t("Ip0R"),o=(t("IDld"),t("Tbvk"),u["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function i(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"span",[["style","color: #eb6f33;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,["",""])),(l()(),u["\u0275eld"](3,0,null,null,1,"a",[["class","close custom-cursor-pointer"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.removeAlert(l.context.$implicit)&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["\xd7"]))],null,function(l,n){l(n,0,0,u["\u0275inlineInterpolate"](1,"",n.component.cssClass(n.context.$implicit)," alert-dismissable")),l(n,2,0,n.context.$implicit.message)})}function r(l){return u["\u0275vid"](0,[(l()(),u["\u0275and"](16777216,null,null,1,null,i)),u["\u0275did"](1,278528,null,0,e.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.alerts)},null)}},"K+Kt":function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(l){this.el=l,this.dtOptions={}}return l.prototype.ngOnInit=function(){var l=this;this.dtTrigger?this.dtTrigger.subscribe(function(){l.displayTable()}):this.displayTable()},l.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},l.prototype.displayTable=function(){var l=this;this.dtInstance=new Promise(function(n,t){Promise.resolve(l.dtOptions).then(function(t){setTimeout(function(){l.dt=$(l.el.nativeElement).DataTable(t),n(l.dt)})})})},l}()},axVG:function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t("K+Kt");var u=function(){function l(){}var n;return n=l,l.forRoot=function(){return{ngModule:n}},l}()},oTcB:function(l,n,t){"use strict";t("K+Kt"),t("axVG")}}]);