webpackJsonp([49,70],{57:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=["-moz-box-","-webkit-box-",""];n.default={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={},n="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(e[n]=this.$parent.gutter+"px",this.span)for(var t=0;t<o.length;t++)e[o[t]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return"undefined"!=typeof this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},58:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"align-items":this.align,"flex-wrap":this.wrap,"flex-direction":this.direction}}}}},63:function(e,n,o){n=e.exports=o(2)(),n.push([e.id,".vux-flexbox{width:100%;text-align:left;display:-ms-flexbox;display:flex;box-align:center;-ms-flex-align:center;align-items:center}.vux-flexbox .vux-flexbox-item{-ms-flex:1;flex:1;min-width:20px;width:0}.vux-flexbox-item>.vux-flexbox{width:100%}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col{box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}.vux-flex-row{box-direction:row;box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}","",{version:3,sources:["/./src/components/flexbox/flexbox.vue"],names:[],mappings:"AACA,aAAa,WAAW,gBAAgB,oBAAoB,aAAa,iBAAiB,sBAAsB,kBAAkB,CACjI,AACD,+BAA+B,WAAW,OAAO,eAAe,OAAO,CACtE,AACD,+BAA+B,UAAU,CACxC,AACD,2CAA2C,wBAAyB,sBAAuB,CAC1F,AACD,cAAc,oBAAoB,0BAA0B,qBAAqB,CAChF,AACD,gCAAgC,UAAU,CACzC,AACD,cAAc,kBAAkB,sBAAsB,uBAAuB,kBAAkB,CAC9F",file:"flexbox.vue",sourcesContent:["\n.vux-flexbox{width:100%;text-align:left;display:-ms-flexbox;display:flex;box-align:center;-ms-flex-align:center;align-items:center\n}\n.vux-flexbox .vux-flexbox-item{-ms-flex:1;flex:1;min-width:20px;width:0\n}\n.vux-flexbox-item>.vux-flexbox{width:100%\n}\n.vux-flexbox .vux-flexbox-item:first-child{margin-left:0 !important;margin-top:0 !important\n}\n.vux-flex-col{box-orient:vertical;-ms-flex-direction:column;flex-direction:column\n}\n.vux-flex-col>.vux-flexbox-item{width:100%\n}\n.vux-flex-row{box-direction:row;box-orient:horizontal;-ms-flex-direction:row;flex-direction:row\n}"],sourceRoot:"webpack://"}])},64:function(e,n,o){var t=o(63);"string"==typeof t&&(t=[[e.id,t,""]]);o(3)(t,{});t.locals&&(e.exports=t.locals)},65:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===e.orient,"vux-flex-row":"horizontal"===e.orient},style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},66:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"vux-flexbox-item",style:e.style},[e._t("default")],2)},staticRenderFns:[]}},67:function(e,n,o){var t,a;t=o(57);var i=o(66);a=t=t||{},"object"!=typeof t.default&&"function"!=typeof t.default||(a=t=t.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=t},68:function(e,n,o){var t,a;o(64),t=o(58);var i=o(65);a=t=t||{},"object"!=typeof t.default&&"function"!=typeof t.default||(a=t=t.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=t},380:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=o(68),i=t(a),r=o(67),c=t(r),x=o(605),m=t(x);n.default={components:{Flexbox:i.default,FlexboxItem:c.default},methods:{go:function(e){this.$router.push("/component/"+e)}},data:function(){return{components:m.default}}}},506:function(e,n,o){n=e.exports=o(2)(),n.push([e.id,'.vux-1px-t[data-v-4e287a62]{border-top:1px solid #e0e0e0}.vux-1px-b[data-v-4e287a62],.vux-1px-tb[data-v-4e287a62]{border-bottom:1px solid #e0e0e0}.vux-1px-tb[data-v-4e287a62]{border-top:1px solid #e0e0e0;background-image:none}.vux-1px-l[data-v-4e287a62]{border-left:1px solid #e0e0e0}.vux-1px-r[data-v-4e287a62]{border-right:1px solid #e0e0e0}.vux-1px[data-v-4e287a62]{border:1px solid #e0e0e0}.vux-1px-radius[data-v-4e287a62]{border:1px solid #e0e0e0;border-radius:4px}@media screen and (min-device-pixel-ratio:2){.vux-1px-radius[data-v-4e287a62]{position:relative;border:0}.vux-1px-radius[data-v-4e287a62]:before{content:"";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid #e0e0e0;transform:scale(.5);transform-origin:0 0;padding:1px;box-sizing:border-box;border-radius:8px;pointer-events:none}}@media screen and (-webkit-min-device-pixel-ratio:2){.vux-1px[data-v-4e287a62]{position:relative;border:0}.vux-1px-b[data-v-4e287a62],.vux-1px-l[data-v-4e287a62],.vux-1px-r[data-v-4e287a62],.vux-1px-t[data-v-4e287a62],.vux-1px-tb[data-v-4e287a62]{border:0}.vux-1px-t[data-v-4e287a62]{background-position:0 0;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.5,transparent),color-stop(.5,#e0e0e0))}.vux-1px-b[data-v-4e287a62]{background-position:0 100%;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(.5,transparent),color-stop(.5,#e0e0e0))}.vux-1px-b[data-v-4e287a62],.vux-1px-t[data-v-4e287a62],.vux-1px-tb[data-v-4e287a62]{background-repeat:repeat-x;-webkit-background-size:100% 1px}.vux-1px-tb[data-v-4e287a62]{background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.5,transparent),color-stop(.5,#e0e0e0)),-webkit-gradient(linear,left top,left bottom,color-stop(.5,transparent),color-stop(.5,#e0e0e0));background-position:top,bottom}.vux-1px-l[data-v-4e287a62]{background-position:0 0;background-image:-webkit-gradient(linear,right top,left top,color-stop(.5,transparent),color-stop(.5,#e0e0e0))}.vux-1px-r[data-v-4e287a62]{background-position:100% 0;background-image:-webkit-gradient(linear,left top,right top,color-stop(.5,transparent),color-stop(.5,#e0e0e0))}.vux-1px-l[data-v-4e287a62],.vux-1px-r[data-v-4e287a62]{background-repeat:repeat-y;background-size:1px 100%}.vux-1px[data-v-4e287a62]:after{content:"";width:100%;height:100%;position:absolute;top:0;left:0;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.5,transparent),color-stop(.5,#e0e0e0)),-webkit-gradient(linear,left top,right top,color-stop(.5,transparent),color-stop(.5,#e0e0e0)),-webkit-gradient(linear,left top,left bottom,color-stop(.5,transparent),color-stop(.5,#e0e0e0)),-webkit-gradient(linear,right top,left top,color-stop(.5,transparent),color-stop(.5,#e0e0e0));background-size:100% 1px,1px 100%,100% 1px,1px 100%;background-repeat:no-repeat;background-position:top,100%,bottom,0;padding:1px;box-sizing:border-box;z-index:10;pointer-events:none}}.cbox[data-v-4e287a62]{text-align:center}.cbox-inner[data-v-4e287a62]{padding:15px 0;width:100%;height:100%}.cname[data-v-4e287a62]{text-transform:capitalize}@font-face{font-family:vux-demo;src:url("//at.alicdn.com/t/font_333ae73qzu4k7qfr.eot");src:url("//at.alicdn.com/t/font_333ae73qzu4k7qfr.eot?#iefix") format("embedded-opentype"),url("//at.alicdn.com/t/font_333ae73qzu4k7qfr.woff") format("woff"),url("//at.alicdn.com/t/font_333ae73qzu4k7qfr.ttf") format("truetype"),url("//at.alicdn.com/t/font_333ae73qzu4k7qfr.svg#iconfont") format("svg")}.demo-icon[data-v-4e287a62]{font-family:vux-demo;font-size:20px;color:#04be02}.demo-icon[data-v-4e287a62]:before{content:attr(icon)}',"",{version:3,sources:["/./src/demos/Demo.vue"],names:[],mappings:"AACA,4BAA4B,4BAA4B,CACvD,AAGD,yDAF4B,+BAA+B,CAG1D,AADD,6BAA6B,6BAA6B,AAAgC,qBAAqB,CAC9G,AACD,4BAA4B,6BAA6B,CACxD,AACD,4BAA4B,8BAA8B,CACzD,AACD,0BAA0B,wBAAwB,CACjD,AACD,iCAAiC,yBAAyB,iBAAiB,CAC1E,AACD,6CACA,iCAAiC,kBAAkB,QAAQ,CAC1D,AACD,wCAAwC,WAAW,WAAW,YAAY,kBAAkB,MAAM,OAAO,yBAAyB,oBAAoB,qBAAqB,YAAY,sBAAsB,kBAAkB,mBAAmB,CACjP,CACA,AACD,qDACA,0BAA0B,kBAAkB,QAAQ,CACnD,AACD,6IAA6I,QAAQ,CACpJ,AACD,4BAA4B,wBAA6B,gHAAsH,CAC9K,AACD,4BAA4B,2BAAgC,gHAAsH,CACjL,AACD,qFAAqF,2BAA2B,gCAAgC,CAC/I,AACD,6BAA6B,iNAA6N,8BAA8B,CACvR,AACD,4BAA4B,wBAA6B,8GAAoH,CAC5K,AACD,4BAA4B,2BAA8B,8GAAoH,CAC7K,AACD,wDAAwD,2BAA2B,wBAAwB,CAC1G,AACD,gCAAgC,WAAW,WAAW,YAAY,kBAAkB,MAAM,OAAO,6YAAqa,oDAAoD,4BAA4B,sCAA0C,YAAY,sBAAsB,WAAW,mBAAmB,CAC/rB,CACA,AACD,uBAAuB,iBAAiB,CACvC,AACD,6BAA6B,eAAe,WAAW,WAAW,CACjE,AACD,wBAAwB,yBAAyB,CAChD,AACD,WAAW,qBAAuB,uDAAuD,4SAA4S,CACpY,AACD,4BAA4B,qBAAuB,eAAe,aAAa,CAC9E,AACD,mCAAmC,kBAAkB,CACpD",file:"Demo.vue",sourcesContent:["\n.vux-1px-t[data-v-4e287a62]{border-top:1px solid #e0e0e0\n}\n.vux-1px-b[data-v-4e287a62]{border-bottom:1px solid #e0e0e0\n}\n.vux-1px-tb[data-v-4e287a62]{border-top:#e0e0e0 1px solid;border-bottom:#e0e0e0 1px solid;background-image:none\n}\n.vux-1px-l[data-v-4e287a62]{border-left:1px solid #e0e0e0\n}\n.vux-1px-r[data-v-4e287a62]{border-right:1px solid #e0e0e0\n}\n.vux-1px[data-v-4e287a62]{border:1px solid #e0e0e0\n}\n.vux-1px-radius[data-v-4e287a62]{border:1px solid #e0e0e0;border-radius:4px\n}\n@media screen and (min-device-pixel-ratio:2){\n.vux-1px-radius[data-v-4e287a62]{position:relative;border:0\n}\n.vux-1px-radius[data-v-4e287a62]:before{content:\"\";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid #e0e0e0;transform:scale(.5);transform-origin:0 0;padding:1px;box-sizing:border-box;border-radius:8px;pointer-events:none\n}\n}\n@media screen and (-webkit-min-device-pixel-ratio:2){\n.vux-1px[data-v-4e287a62]{position:relative;border:0\n}\n.vux-1px-t[data-v-4e287a62],.vux-1px-b[data-v-4e287a62],.vux-1px-l[data-v-4e287a62],.vux-1px-r[data-v-4e287a62],.vux-1px-tb[data-v-4e287a62]{border:0\n}\n.vux-1px-t[data-v-4e287a62]{background-position:left top;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(.5, transparent), color-stop(.5, #e0e0e0))\n}\n.vux-1px-b[data-v-4e287a62]{background-position:left bottom;background-image:-webkit-gradient(linear, left top, left bottom, color-stop(.5, transparent), color-stop(.5, #e0e0e0))\n}\n.vux-1px-t[data-v-4e287a62],.vux-1px-b[data-v-4e287a62],.vux-1px-tb[data-v-4e287a62]{background-repeat:repeat-x;-webkit-background-size:100% 1px\n}\n.vux-1px-tb[data-v-4e287a62]{background-image:-webkit-gradient(linear, left bottom, left top, color-stop(.5, transparent), color-stop(.5, #e0e0e0)),-webkit-gradient(linear, left top, left bottom, color-stop(.5, transparent), color-stop(.5, #e0e0e0));background-position:top,bottom\n}\n.vux-1px-l[data-v-4e287a62]{background-position:left top;background-image:-webkit-gradient(linear, right top, left top, color-stop(.5, transparent), color-stop(.5, #e0e0e0))\n}\n.vux-1px-r[data-v-4e287a62]{background-position:right top;background-image:-webkit-gradient(linear, left top, right top, color-stop(.5, transparent), color-stop(.5, #e0e0e0))\n}\n.vux-1px-l[data-v-4e287a62],.vux-1px-r[data-v-4e287a62]{background-repeat:repeat-y;background-size:1px 100%\n}\n.vux-1px[data-v-4e287a62]:after{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(.5, transparent), color-stop(.5, #e0e0e0)),-webkit-gradient(linear, left top, right top, color-stop(.5, transparent), color-stop(.5, #e0e0e0)),-webkit-gradient(linear, left top, left bottom, color-stop(.5, transparent), color-stop(.5, #e0e0e0)),-webkit-gradient(linear, right top, left top, color-stop(.5, transparent), color-stop(.5, #e0e0e0));background-size:100% 1px,1px 100%,100% 1px,1px 100%;background-repeat:no-repeat;background-position:top,right,bottom,left;padding:1px;box-sizing:border-box;z-index:10;pointer-events:none\n}\n}\n.cbox[data-v-4e287a62]{text-align:center\n}\n.cbox-inner[data-v-4e287a62]{padding:15px 0;width:100%;height:100%\n}\n.cname[data-v-4e287a62]{text-transform:capitalize\n}\n@font-face{font-family:'vux-demo';src:url('//at.alicdn.com/t/font_333ae73qzu4k7qfr.eot');src:url('//at.alicdn.com/t/font_333ae73qzu4k7qfr.eot?#iefix') format('embedded-opentype'),url('//at.alicdn.com/t/font_333ae73qzu4k7qfr.woff') format('woff'),url('//at.alicdn.com/t/font_333ae73qzu4k7qfr.ttf') format('truetype'),url('//at.alicdn.com/t/font_333ae73qzu4k7qfr.svg#iconfont') format('svg')\n}\n.demo-icon[data-v-4e287a62]{font-family:'vux-demo';font-size:20px;color:#04BE02\n}\n.demo-icon[data-v-4e287a62]:before{content:attr(icon)\n}"],sourceRoot:"webpack://"}])},570:function(e,n,o){var t=o(506);"string"==typeof t&&(t=[[e.id,t,""]]);o(3)(t,{});t.locals&&(e.exports=t.locals)},605:function(e,n){e.exports=[{name:"actionsheet",icon:"&#xe624;"},{name:"alert",icon:"&#xe603;"},{name:"badge",icon:"&#xe65b;",color:"#f74c31"},{name:"blur",icon:"&#xe640;"},{name:"button-tab",icon:"&#xe659;",items:["button-tab","button-tab-item"]},{name:"calendar",icon:"&#xe62b;"},{name:"card",icon:"&#xe658;"},{name:"cell",icon:"&#xe62a;"},{name:"checker",icon:"&#xe655;",items:["checker","checker-item"]},{name:"checklist",icon:"&#xe61d;"},{name:"clocker",icon:"&#xe620;"},{name:"color-picker",icon:"&#xe63f;",color:"#f2c400"},{name:"confirm",icon:"&#xe608;"},{name:"countdown",icon:"&#xe653;"},{name:"countup",icon:"&#xe63e;"},{name:"datetime",icon:"&#xe60a;"},{name:"divider",icon:"&#xe65d;"},{name:"flexbox",icon:"&#xe61f;",items:["flexbox","flexbox-item"]},{name:"form-preview",icon:"&#xe699;"},{name:"group",icon:"&#xe62a;"},{name:"icon",icon:"&#xe619;"},{name:"inline-calendar",icon:"&#xe62b;"},{name:"load-more",icon:"&#xe610;"},{name:"loading",icon:"&#xe610;"},{name:"masker",icon:"&#xe651;"},{name:"panel",icon:"&#xe658;"},{name:"picker",icon:"&#xe627;"},{name:"popover",icon:"&#xe65f;"},{name:"popup-picker",icon:"&#xe626;"},{name:"popup",icon:"&#xe61e;"},{name:"previewer",icon:"&#xe65c;"},{name:"qrcode",icon:"&#xe65a;"},{name:"radio",icon:"&#xe60f;"},{name:"range",icon:"&#xe60b;"},{name:"rater",icon:"&#xe606;",color:"#FF9900"},{name:"scroller",icon:"&#xe641;"},{name:"search",icon:"&#xe63b;"},{name:"selector",icon:"&#xe607;"},{name:"spinner",icon:"&#xe610;"},{name:"step",icon:"&#xe65e;",items:["step","step-item"]},{name:"sticky",icon:"&#xe623;"},{name:"swiper",icon:"&#xe612;"},{name:"tab",icon:"&#xe615;",items:["tab","tab-item"]},{name:"tabbar",icon:"&#xe657;",items:["tabbar","tabbar-item"]},{name:"timeline",icon:"&#xe656;"},{name:"toast",icon:"&#xe625;"},{name:"wechat-emotion",icon:"&#xe63c;"},{name:"x-address",icon:"&#xe61b;"},{name:"x-button",icon:"&#xe616;"},{name:"x-circle",icon:"&#xe63d;"},{name:"x-dialog",icon:"&#xe608;"},{name:"x-header",icon:"&#xe654;"},{name:"x-img",icon:"&#xe602;"},{name:"x-input",icon:"&#xe614;"},{name:"x-number",icon:"&#xe605;"},{name:"x-progress",icon:"&#xe618;"},{name:"x-switch",icon:"&#xe61c;"},{name:"x-textarea",icon:"&#xe611;"},{name:"actionsheet",icon:"&#xe624;"},{name:"alert",icon:"&#xe603;"},{name:"badge",icon:"&#xe65b;",color:"#f74c31"},{name:"blur",icon:"&#xe640;"},{name:"button-tab",icon:"&#xe659;",items:["button-tab","button-tab-item"]},{name:"calendar",icon:"&#xe62b;"},{name:"card",icon:"&#xe658;"},{name:"cell",icon:"&#xe62a;"},{name:"checker",icon:"&#xe655;",items:["checker","checker-item"]},{name:"checklist",icon:"&#xe61d;"},{name:"clocker",icon:"&#xe620;"},{name:"color-picker",icon:"&#xe63f;",color:"#f2c400"},{name:"confirm",icon:"&#xe608;"},{name:"countdown",icon:"&#xe653;"},{name:"countup",icon:"&#xe63e;"},{name:"datetime",icon:"&#xe60a;"},{name:"divider",icon:"&#xe65d;"},{name:"flexbox",icon:"&#xe61f;",items:["flexbox","flexbox-item"]},{name:"form-preview",icon:"&#xe699;"},{name:"group",icon:"&#xe62a;"},{name:"icon",icon:"&#xe619;"},{name:"inline-calendar",icon:"&#xe62b;"},{name:"load-more",icon:"&#xe610;"},{name:"loading",icon:"&#xe610;"},{name:"masker",icon:"&#xe651;"},{name:"panel",icon:"&#xe658;"},{name:"picker",icon:"&#xe627;"},{name:"popover",icon:"&#xe65f;"},{name:"popup-picker",icon:"&#xe626;"},{name:"popup",icon:"&#xe61e;"},{name:"previewer",icon:"&#xe65c;"},{name:"qrcode",icon:"&#xe65a;"},{name:"radio",icon:"&#xe60f;"},{name:"range",icon:"&#xe60b;"},{name:"rater",icon:"&#xe606;",color:"#FF9900"},{name:"scroller",icon:"&#xe641;"},{name:"search",icon:"&#xe63b;"},{name:"selector",icon:"&#xe607;"},{name:"spinner",icon:"&#xe610;"},{name:"step",icon:"&#xe65e;",items:["step","step-item"]},{name:"sticky",icon:"&#xe623;"},{name:"swiper",icon:"&#xe612;"},{name:"tab",icon:"&#xe615;",items:["tab","tab-item"]},{name:"tabbar",icon:"&#xe657;",items:["tabbar","tabbar-item"]},{name:"timeline",icon:"&#xe656;"},{name:"toast",icon:"&#xe625;"},{name:"wechat-emotion",icon:"&#xe63c;"},{name:"x-address",icon:"&#xe61b;"},{name:"x-button",icon:"&#xe616;"},{name:"x-circle",icon:"&#xe63d;"},{name:"x-dialog",icon:"&#xe608;"},{name:"x-header",icon:"&#xe654;"},{name:"x-img",icon:"&#xe602;"},{name:"x-input",icon:"&#xe614;"},{name:"x-number",icon:"&#xe605;"},{name:"x-progress",icon:"&#xe618;"},{name:"x-switch",icon:"&#xe61c;"},{name:"x-textarea",icon:"&#xe611;"},{name:"actionsheet",icon:"&#xe624;"},{name:"alert",icon:"&#xe603;"},{name:"badge",icon:"&#xe65b;",color:"#f74c31"},{name:"blur",icon:"&#xe640;"},{name:"button-tab",icon:"&#xe659;",items:["button-tab","button-tab-item"]},{name:"calendar",icon:"&#xe62b;"},{name:"card",icon:"&#xe658;"},{name:"cell",icon:"&#xe62a;"},{name:"checker",icon:"&#xe655;",items:["checker","checker-item"]},{name:"checklist",icon:"&#xe61d;"},{name:"clocker",icon:"&#xe620;"},{name:"color-picker",icon:"&#xe63f;",color:"#f2c400"},{name:"confirm",icon:"&#xe608;"},{name:"countdown",icon:"&#xe653;"},{name:"countup",icon:"&#xe63e;"},{name:"datetime",icon:"&#xe60a;"},{name:"divider",icon:"&#xe65d;"},{name:"flexbox",icon:"&#xe61f;",items:["flexbox","flexbox-item"]},{name:"form-preview",icon:"&#xe699;"},{name:"group",icon:"&#xe62a;"},{name:"icon",icon:"&#xe619;"},{name:"inline-calendar",icon:"&#xe62b;"},{name:"load-more",icon:"&#xe610;"},{name:"loading",icon:"&#xe610;"},{name:"masker",icon:"&#xe651;"},{name:"panel",icon:"&#xe658;"},{name:"picker",icon:"&#xe627;"},{name:"popover",icon:"&#xe65f;"},{name:"popup-picker",icon:"&#xe626;"},{name:"popup",icon:"&#xe61e;"},{name:"previewer",icon:"&#xe65c;"},{name:"qrcode",icon:"&#xe65a;"},{name:"radio",icon:"&#xe60f;"},{name:"range",icon:"&#xe60b;"},{name:"rater",icon:"&#xe606;",color:"#FF9900"},{name:"scroller",icon:"&#xe641;"},{name:"search",icon:"&#xe63b;"},{name:"selector",icon:"&#xe607;"},{name:"spinner",icon:"&#xe610;"},{name:"step",icon:"&#xe65e;",items:["step","step-item"]},{name:"sticky",icon:"&#xe623;"},{name:"swiper",icon:"&#xe612;"},{name:"tab",icon:"&#xe615;",items:["tab","tab-item"]},{name:"tabbar",icon:"&#xe657;",items:["tabbar","tabbar-item"]},{name:"timeline",icon:"&#xe656;"},{name:"toast",icon:"&#xe625;"},{name:"wechat-emotion",icon:"&#xe63c;"},{name:"x-address",icon:"&#xe61b;"},{name:"x-button",icon:"&#xe616;"},{name:"x-circle",icon:"&#xe63d;"},{name:"x-dialog",icon:"&#xe608;"},{name:"x-header",icon:"&#xe654;"},{name:"x-img",icon:"&#xe602;"},{name:"x-input",icon:"&#xe614;"},{name:"x-number",icon:"&#xe605;"},{name:"x-progress",icon:"&#xe618;"},{name:"x-switch",icon:"&#xe61c;"},{name:"x-textarea",icon:"&#xe611;"},{name:"actionsheet",icon:"&#xe624;"},{name:"alert",icon:"&#xe603;"},{name:"badge",icon:"&#xe65b;",color:"#f74c31"},{name:"blur",icon:"&#xe640;"},{name:"button-tab",icon:"&#xe659;",items:["button-tab","button-tab-item"]},{name:"calendar",icon:"&#xe62b;"},{name:"card",icon:"&#xe658;"},{name:"cell",icon:"&#xe62a;"},{name:"checker",icon:"&#xe655;",items:["checker","checker-item"]},{name:"checklist",icon:"&#xe61d;"},{name:"clocker",icon:"&#xe620;"},{name:"color-picker",icon:"&#xe63f;",color:"#f2c400"},{name:"confirm",icon:"&#xe608;"},{name:"countdown",icon:"&#xe653;"},{name:"countup",icon:"&#xe63e;"},{name:"datetime",icon:"&#xe60a;"},{name:"divider",icon:"&#xe65d;"},{name:"flexbox",icon:"&#xe61f;",items:["flexbox","flexbox-item"]},{name:"form-preview",icon:"&#xe699;"},{name:"group",icon:"&#xe62a;"},{name:"icon",icon:"&#xe619;"},{name:"inline-calendar",icon:"&#xe62b;"},{name:"load-more",icon:"&#xe610;"},{name:"loading",icon:"&#xe610;"},{name:"masker",icon:"&#xe651;"},{name:"panel",icon:"&#xe658;"},{name:"picker",icon:"&#xe627;"},{name:"popover",icon:"&#xe65f;"},{name:"popup-picker",icon:"&#xe626;"},{name:"popup",icon:"&#xe61e;"},{name:"previewer",icon:"&#xe65c;"},{name:"qrcode",icon:"&#xe65a;"},{name:"radio",icon:"&#xe60f;"},{name:"range",icon:"&#xe60b;"},{name:"rater",icon:"&#xe606;",color:"#FF9900"},{name:"scroller",icon:"&#xe641;"},{name:"search",icon:"&#xe63b;"},{name:"selector",icon:"&#xe607;"},{name:"spinner",icon:"&#xe610;"},{name:"step",icon:"&#xe65e;",items:["step","step-item"]},{name:"sticky",icon:"&#xe623;"},{name:"swiper",icon:"&#xe612;"},{name:"tab",icon:"&#xe615;",items:["tab","tab-item"]},{name:"tabbar",icon:"&#xe657;",items:["tabbar","tabbar-item"]},{name:"timeline",icon:"&#xe656;"},{name:"toast",icon:"&#xe625;"},{name:"wechat-emotion",icon:"&#xe63c;"},{name:"x-address",icon:"&#xe61b;"},{name:"x-button",icon:"&#xe616;"},{name:"x-circle",icon:"&#xe63d;"},{name:"x-dialog",icon:"&#xe608;"},{name:"x-header",icon:"&#xe654;"},{name:"x-img",icon:"&#xe602;"},{name:"x-input",icon:"&#xe614;"},{name:"x-number",icon:"&#xe605;"},{name:"x-progress",icon:"&#xe618;"},{name:"x-switch",icon:"&#xe61c;"},{name:"x-textarea",icon:"&#xe611;"}]},686:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("flexbox",{staticClass:"vux-1px-b",attrs:{wrap:"wrap",gutter:0}},e._l(e.components,function(n){return o("flexbox-item",{staticClass:"cbox vux-1px-t",attrs:{span:1/3},nativeOn:{click:function(o){e.go(n.name.toLowerCase())}}},[o("div",{staticClass:"vux-1px-r cbox-inner"},[o("span",{staticClass:"demo-icon",style:{color:n.color},domProps:{innerHTML:e._s(n.icon)}}),e._v(" "),o("br"),e._v(" "),o("span",{staticClass:"cname"},[e._v(e._s(n.name))])])])}))],1)},staticRenderFns:[]}},802:function(e,n,o){var t,a;o(570),t=o(380);var i=o(686);a=t=t||{},"object"!=typeof t.default&&"function"!=typeof t.default||(a=t=t.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-4e287a62",e.exports=t}});