webpackJsonp([59,70],{212:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(223);e.default={props:{color:{type:String,default:"0, 0, 0"},opacity:{type:Number,default:.5}},computed:{style:function(){var t=/,/.test(this.color)?this.color:(0,i.toRGB)(this.color.replace("#","")).join(",");return{backgroundColor:"rgba("+t+","+this.opacity+")"}}}}},223:function(t,e){"use strict";function o(t){var e=parseInt(t,16);return[e>>16,e>>8&255,255&e]}function i(t,e,o){return(o|e<<8|t<<16|1<<24).toString(16).slice(1)}Object.defineProperty(e,"__esModule",{value:!0}),e.toRGB=o,e.toHex=i},252:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".vux-masker-box{position:relative}.vux-masker{position:absolute;top:0;left:0;bottom:0;right:0;border-radius:inherit}","",{version:3,sources:["/./src/components/masker/index.vue"],names:[],mappings:"AACA,gBACE,iBAAmB,CACpB,AACD,YACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,qBAAuB,CACxB",file:"index.vue",sourcesContent:["\n.vux-masker-box {\n  position: relative;\n}\n.vux-masker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: inherit;\n}\n"],sourceRoot:"webpack://"}])},262:function(t,e,o){var i=o(252);"string"==typeof i&&(i=[[t.id,i,""]]);o(3)(i,{});i.locals&&(t.exports=i.locals)},285:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-masker-box"},[t._t("default"),t._v(" "),o("div",{staticClass:"vux-masker",style:t.style},[t._t("content")],2)],2)},staticRenderFns:[]}},292:function(t,e,o){var i,n;o(262),i=o(212);var s=o(285);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=i},390:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(292),s=i(n);e.default={components:{Masker:s.default},data:function(){return{list:[{title:"洗颜新潮流！人气洁面皂排行榜",img:"https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg"},{title:"美容用品 & 日用品（上）",img:"https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg"},{title:"远离车内毒气，日本车载空气净化器精选",img:"https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg"}]}}}},524:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".m-img{padding-bottom:33%;display:block;position:relative;max-width:100%;background-size:cover;background-position:50%;cursor:pointer;border-radius:2px}.m-title{color:#fff;text-shadow:0 0 2px rgba(0,0,0,.5);font-weight:500;font-size:16px;position:absolute;left:0;right:0;width:100%;text-align:center;top:50%;transform:translateY(-50%)}.m-time{font-size:12px;padding-top:4px;border-top:1px solid #f0f0f0;display:inline-block;margin-top:5px}","",{version:3,sources:["/./src/demos/Masker.vue"],names:[],mappings:"AACA,OAAO,mBAAmB,cAAc,kBAAkB,eAAe,sBAAsB,wBAAkC,eAAe,iBAAiB,CAChK,AACD,SAAS,WAAW,mCAAoC,gBAAgB,eAAe,kBAAkB,OAAO,QAAQ,WAAW,kBAAkB,QAAQ,0BAA0B,CACtL,AACD,QAAQ,eAAe,gBAAgB,6BAA6B,qBAAqB,cAAc,CACtG",file:"Masker.vue",sourcesContent:["\n.m-img{padding-bottom:33%;display:block;position:relative;max-width:100%;background-size:cover;background-position:center center;cursor:pointer;border-radius:2px\n}\n.m-title{color:#fff;text-shadow:0 0 2px rgba(0,0,0,0.5);font-weight:500;font-size:16px;position:absolute;left:0;right:0;width:100%;text-align:center;top:50%;transform:translateY(-50%)\n}\n.m-time{font-size:12px;padding-top:4px;border-top:1px solid #f0f0f0;display:inline-block;margin-top:5px\n}"],sourceRoot:"webpack://"}])},592:function(t,e,o){var i=o(524);"string"==typeof i&&(i=[[t.id,i,""]]);o(3)(i,{});i.locals&&(t.exports=i.locals)},727:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.list,function(e){return o("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[o("masker",{staticStyle:{"border-radius":"2px"}},[o("div",{staticClass:"m-img",style:{backgroundImage:"url("+e.img+")"}}),t._v(" "),o("div",{staticClass:"m-title",slot:"content"},[t._v("\n        "+t._s(e.title)+"\n        "),o("br"),t._v(" "),o("span",{staticClass:"m-time"},[t._v("2016-03-18")])])])],1)}),t._v(" "),o("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[o("masker",{staticStyle:{"border-radius":"2px"},attrs:{color:"F9C90C",opacity:.8}},[o("div",{staticClass:"m-img",staticStyle:{"background-image":"url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)"}}),t._v(" "),o("div",{staticClass:"m-title",slot:"content"},[t._v("\n        VUX\n        "),o("br"),t._v(" "),o("span",{staticClass:"m-time"},[t._v("2016-03-18")])])])],1)],2)},staticRenderFns:[]}},812:function(t,e,o){var i,n;o(592),i=o(390);var s=o(727);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=i}});