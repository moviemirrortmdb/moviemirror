import{b as f,c as S,e as h,o as v}from"./chunk-DCDN6MXI.js";import{Fa as o,Ra as b,Ta as l,Y as c,Ya as s,Za as r,_a as m,bb as I,cb as w,db as y,ea as C,fa as _,ib as p,kb as g,pb as u,rb as M}from"./chunk-7JH22RSN.js";var T=["data-ng-comp","modal-image"],D=(i,t,d)=>({"modal-xl":i,"modal-lg":t,"modal-md":d}),F=(()=>{let t=class t{constructor(){this.title="Title",this.src="",this.ratio="landscape"}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["","data-ng-comp","modal-image"]],inputs:{title:"title",src:"src",ratio:"ratio"},standalone:!0,features:[u],attrs:T,decls:9,vars:9,consts:[["id","modalImage","tabindex","-1","aria-labelledby","modalImageLabel","aria-hidden","true",1,"modal","modal-image","fade"],[1,"modal-dialog","modal-dialog-centered",3,"ngClass"],[1,"modal-content"],[1,"modal-body","p-0"],["data-ng-comp","image",3,"src","ratio","caption"],[1,"modal-footer","justify-content-between"],["id","modalImageLabel",1,"modal-title","fs-5","me-3"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"]],template:function(a,e){a&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"div",4),r(),s(5,"div",5)(6,"h1",6),p(7),r(),m(8,"button",7),r()()()()),a&2&&(o(),l("ngClass",M(5,D,e.ratio=="landscape",e.ratio=="square",e.ratio=="portrait")),o(3),l("src",e.src)("ratio",e.ratio)("caption","hdn"),o(3),g(" ",e.title," "))},dependencies:[v,h,f],styles:[`.modal-image .modal-dialog{height:auto;max-height:90vh}
`],encapsulation:2});let i=t;return i})();var V=["data-ng-comp","images-gallery"];function X(i,t){if(i&1){let d=I();s(0,"li",5)(1,"a",6),w("click",function(){let a=C(d).$implicit,e=y();return _(e.mdlSrc=a.file_path)}),m(2,"div",7),r()()}if(i&2){let d=t.$implicit,n=y();o(2),l("title",n.title)("src",d.file_path)("ratio",n.ratio)("caption",n.caption)}}var $=(()=>{let t=class t{constructor(){this.title="",this.ratio="square",this.caption="stc",this.colsMd=3,this.colsXl=6,this.images=[],this.mdlSrc=""}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["","data-ng-comp","images-gallery"]],inputs:{title:"title",ratio:"ratio",caption:"caption",colsMd:"colsMd",colsXl:"colsXl",images:"images"},standalone:!0,features:[u],attrs:V,decls:6,vars:6,consts:[[1,"has-images-gallery","py-2"],[1,"visually-hidden"],[1,"list-unstyled","my-0","row","g-0","row-cols-1",3,"ngClass"],["class","col",4,"ngFor","ngForOf"],["data-ng-comp","modal-image",3,"src","title","ratio"],[1,"col"],["href","#modalImage","data-bs-toggle","modal","data-bs-target","#modalImage",1,"has-figure",3,"click"],["data-ng-comp","image",3,"title","src","ratio","caption"]],template:function(a,e){a&1&&(s(0,"section",0)(1,"h2",1),p(2),r(),s(3,"ul",2),b(4,X,3,4,"li",3),r()(),m(5,"div",4)),a&2&&(o(2),g("",e.title," images"),o(),l("ngClass","row-cols-md-"+e.colsMd+" row-cols-xl-"+e.colsXl),o(),l("ngForOf",e.images),o(),l("src",e.mdlSrc)("title",e.title)("ratio",e.ratio))},dependencies:[h,f,S,v,F],encapsulation:2});let i=t;return i})();export{$ as a};