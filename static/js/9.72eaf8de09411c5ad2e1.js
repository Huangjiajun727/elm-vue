webpackJsonp([9],{"5kt/":function(t,e){},"9zw/":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Xxa5"),s=r.n(a),n=r("Gu7T"),i=r.n(n),o=r("exGp"),u=r.n(o),c=r("Dd8w"),l=r.n(c),d=r("NYxO"),h=r("ra3+"),m={data:function(){return{countNum:900,showAlert:!1,alertText:null}},mounted:function(){this.countNum-=this.numTime,this.remainingTime()},props:["time"],components:{alertTip:r("Uoa1").a},methods:{closeTip:function(){this.$emit("closeTip")},remainingTime:function(){var t=this;clearInterval(this.timer),this.timer=setInterval(function(){t.countNum--,0==t.countNum&&(clearInterval(t.timer),t.showAlert=!0,t.alertText="支付超时")},1e3)},gotoPay:function(){this.showAlert=!0,this.alertText="暂不开放支付接口"}},computed:{remaining:function(){var t=parseInt(this.countNum/60),e=parseInt(this.countNum%60);return t<10&&(t="0"+t),e<10&&(e="0"+e),"去支付(还剩"+t+"分"+e+"秒)"},numTime:function(){return-1!==this.time.toString().indexOf("分钟")?60*parseInt(this.time):parseInt(this.time)}}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("span",{staticClass:"rem_time",staticStyle:{color:"orange","border-width":"1px","border-style":"solid","border-color":"orange"},on:{click:t.gotoPay}},[t._v("\n\t       "+t._s(t.remaining)+"\n        ")]),t._v(" "),t.showAlert?r("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:function(e){t.showAlert=!1}}}):t._e()],1)},staticRenderFns:[]};var p=r("VU/8")(m,_,!1,function(t){r("5kt/")},"data-v-528412a6",null).exports,f=r("44dg"),v=r("FPXY"),g=r("i84Q"),w={data:function(){return{orderList:null,offset:0,preventRepeat:!1,showLoading:!0,imgBaseUrl:"//elm.cangdu.org/img/"}},mounted:function(){this.initData()},mixins:[r("we8T").b],components:{headTop:h.a,footGuide:v.a,loading:f.a,computeTime:p},computed:l()({},Object(d.d)(["userInfo","geohash"])),methods:l()({},Object(d.c)(["SAVE_ORDER"]),{initData:function(){var t=this;return u()(s.a.mark(function e(){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.userInfo||!t.userInfo.user_id){e.next=8;break}return e.next=3,Object(g.r)(t.userInfo.user_id,t.offset);case 3:r=e.sent,t.orderList=[].concat(i()(r)),t.hideLoading(),e.next=9;break;case 8:t.hideLoading();case 9:case"end":return e.stop()}},e,t)}))()},loaderMore:function(){var t=this;return u()(s.a.mark(function e(){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.preventRepeat){e.next=2;break}return e.abrupt("return");case 2:return t.preventRepeat=!0,t.showLoading=!0,t.offset+=10,e.next=7,Object(g.r)(t.userInfo.user_id,t.offset);case 7:if(r=e.sent,t.orderList=[].concat(i()(t.orderList),i()(r)),t.hideLoading(),!(r.length<10)){e.next=12;break}return e.abrupt("return");case 12:t.preventRepeat=!1;case 13:case"end":return e.stop()}},e,t)}))()},showDetail:function(t){this.SAVE_ORDER(t),this.preventRepeat=!1,this.$router.push("/order/orderDetail")},hideLoading:function(){this.showLoading=!1}}),watch:{userInfo:function(t){t&&t.user_id&&!this.orderList&&this.initData()}}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order_page"},[r("head-top",{attrs:{"head-title":"订单列表","go-back":"true"}}),t._v(" "),r("ul",{directives:[{name:"load-more",rawName:"v-load-more",value:t.loaderMore,expression:"loaderMore"}],staticClass:"order_list_ul"},t._l(t.orderList,function(e){return r("li",{key:e.id,staticClass:"order_list_li"},[r("img",{staticClass:"restaurant_image",attrs:{src:t.imgBaseUrl+e.restaurant_image_url,alt:""}}),t._v(" "),r("section",{staticClass:"order_item_right"},[r("section",{on:{click:function(r){t.showDetail(e)}}},[r("header",{staticClass:"order_item_right_header"},[r("section",{staticClass:"order_header"},[r("h4",[r("span",{staticClass:"ellipsis"},[t._v(t._s(e.restaurant_name)+" ")]),t._v(" "),r("span",{staticClass:"arrow-right"})]),t._v(" "),r("p",{staticClass:"order_time"},[t._v(t._s(e.formatted_created_at))])]),t._v(" "),r("p",{staticClass:"order_status"},[t._v("\n              "+t._s(e.status_bar.title)+"\n            ")])]),t._v(" "),r("section",{staticClass:"order_basket"},[r("p",{staticClass:"order_name ellipsis"},[t._v(t._s(e.basket.group[0][0].name)+t._s(e.basket.group[0].length>1?" 等"+e.basket.group[0].length+"件商品":""))]),t._v(" "),r("p",{staticClass:"order_amount"},[t._v("¥"+t._s(e.total_amount.toFixed(2)))])])]),t._v(" "),r("div",{staticClass:"order_again"},["等待支付"==e.status_bar.title?r("compute-time",{attrs:{time:e.time_pass}}):r("router-link",{staticClass:"buy_again",attrs:{to:{path:"/shop",query:{geohash:t.geohash,id:e.restaurant_id}},tag:"span"}},[t._v("再来一单")])],1)])])}),0),t._v(" "),r("foot-guide"),t._v(" "),r("transition",{attrs:{name:"loading"}},[r("loading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1),t._v(" "),r("transition",{attrs:{name:"router-slid",mode:"out-in"}},[r("router-view")],1)],1)},staticRenderFns:[]};var x=r("VU/8")(w,b,!1,function(t){r("n8sp")},"data-v-3070bcf5",null);e.default=x.exports},n8sp:function(t,e){}});
//# sourceMappingURL=9.72eaf8de09411c5ad2e1.js.map