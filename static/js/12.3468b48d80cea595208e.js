webpackJsonp([12],{IoyT:function(t,s){},vCr1:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Xxa5"),r=e.n(a),i=e("exGp"),c=e.n(i),n=e("ra3+"),o=e("FPXY"),l=e("i84Q"),h=e("yclV"),u={data:function(){return{geohash:"",searchValue:"",imgBaseUrl:"//elm.cangdu.org/img/",searchHistory:[],restaurantList:[],showHistory:!0,emptyResult:!1}},components:{headTop:n.a,footGuide:o.a},mounted:function(){this.geohash=this.$route.params.geohash,Object(h.b)("searchHistory")&&(this.searchHistory=Object(h.b)("searchHistory"))},methods:{checkInput:function(){""===this.searchValue&&(this.showHistory=!0,this.restaurantList=[],this.emptyResult=!1)},searchTarget:function(t){var s=this;return c()(r.a.mark(function e(){var a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}s.searchValue=t,e.next=6;break;case 4:if(s.searchValue){e.next=6;break}return e.abrupt("return");case 6:return s.showHistory=!1,e.next=9,Object(l.I)(s.geohash,s.searchValue);case 9:s.restaurantList=e.sent,s.emptyResult=!s.restaurantList.length,(a=Object(h.b)("searchHistory"))?(i=!1,s.searchHistory=a,s.searchHistory.forEach(function(t){t==s.searchValue&&(i=!0)}),i||s.searchHistory.push(s.searchValue)):s.searchHistory.push(s.searchValue),Object(h.e)("searchHistory",s.searchHistory);case 14:case"end":return e.stop()}},e,s)}))()},deleteHistory:function(t){this.searchHistory.splice(t,1),Object(h.e)("searchHistory",this.searchHistory)},clearAllHistory:function(){this.searchHistory=[],Object(h.e)("searchHistory",this.searchHistory)}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search-con"},[e("head-top",{attrs:{"head-title":"搜索","go-back":"true"}}),t._v(" "),e("form",{staticClass:"search-from"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search-input",attrs:{type:"search",name:"search",placeholder:"请输入商家或美食名称"},domProps:{value:t.searchValue},on:{input:[function(s){s.target.composing||(t.searchValue=s.target.value)},t.checkInput]}}),t._v(" "),e("input",{staticClass:"search-submit",attrs:{name:"submit",type:"submit"},on:{click:function(s){s.preventDefault(),t.searchTarget("")}}})]),t._v(" "),t.restaurantList.length?e("section",{staticClass:"search-result"},[e("h4",{staticClass:"title-restaurant"},[t._v("商家")]),t._v(" "),e("ul",{staticClass:"search-ul"},t._l(t.restaurantList,function(s,a){return e("router-link",{key:s.id,staticClass:"search-li",attrs:{to:{path:"/shop",query:{id:s.id}},tag:"li"}},[e("section",{staticClass:"item-left"},[e("img",{staticClass:"restaurant-img",attrs:{src:t.imgBaseUrl+s.image_path,alt:"shopImg"}})]),t._v(" "),e("section",{staticClass:"item-right"},[e("div",{staticClass:"item-right-text"},[e("p",[e("span",[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"pay-icon"},[t._v("支付")])]),t._v(" "),e("p",[t._v("月售 "+t._s(s.month_sales||s.recent_order_num)+" 单")]),t._v(" "),e("p",[t._v(t._s(s.delivery_fee||s.float_minimum_order_amount)+" 元起送 / 距离"+t._s(s.distance))])]),t._v(" "),e("ul",{staticClass:"item-right-detail"},t._l(s.restaurant_activity,function(s){return e("li",{key:s.id},[e("span",{staticClass:"activities-icon",style:{backgroundColor:"#"+s.icon_color}},[t._v(t._s(s.icon_name))]),t._v(" "),e("span",[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"only-phone"},[t._v("(手机客户端专享)")])])}),0)])])}),1)]):t._e(),t._v(" "),t.searchHistory.length&&t.showHistory?e("section",{staticClass:"search-history"},[e("h4",{staticClass:"title-restaurant"},[t._v("搜索历史")]),t._v(" "),e("ul",{staticClass:"history-con"},t._l(t.searchHistory,function(s,a){return e("li",{key:a,staticClass:"history-list"},[e("span",{staticClass:"history-text ellipsis",on:{click:function(e){t.searchTarget(s)}}},[t._v(t._s(s))]),t._v(" "),e("span",{staticClass:"delete-icon",on:{click:function(s){t.deleteHistory(a)}}})])}),0),t._v(" "),e("footer",{staticClass:"clear-history tips-con",on:{click:t.clearAllHistory}},[t._v("清空搜索历史")])]):t._e(),t._v(" "),t.emptyResult?e("div",{staticClass:"search-none tips-con"},[t._v("很抱歉！无搜索结果")]):t._e(),t._v(" "),e("foot-guide")],1)},staticRenderFns:[]};var p=e("VU/8")(u,_,!1,function(t){e("IoyT")},"data-v-f2b30308",null);s.default=p.exports}});
//# sourceMappingURL=12.3468b48d80cea595208e.js.map