webpackJsonp([24],{"+SLE":function(e,t){},H1Fl:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Xxa5"),i=s.n(n),a=s("exGp"),d=s.n(a),r=s("Dd8w"),o=s.n(r),c=s("ra3+"),u=s("NYxO"),l=s("mtWM"),f=s.n(l),_={data:function(){return{deleteOnfoo:!1,editText:"编辑"}},components:{headTop:c.a},computed:o()({},Object(u.d)(["userInfo","addressList"])),mounted:function(){this.initData()},methods:o()({},Object(u.b)(["saveAddress"]),{initData:function(){this.userInfo&&this.userInfo.user_id&&this.saveAddress()},editThing:function(){"编辑"==this.editText?(this.editText="完成",this.deleteOnfoo=!0):(this.editText="编辑",this.deleteOnfoo=!1)},deleteSite:function(e,t){var s=this;return d()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!s.userInfo||!s.userInfo.user_id){n.next=4;break}return n.next=3,f.a.delete("/v1/users/"+s.userInfo.user_id+"/addresses/"+t.id,{});case 3:s.addressList.splice(e,1);case 4:case"end":return n.stop()}},n,s)}))()}}),watch:{userInfo:function(e){e&&e.user_id&&this.initData()}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"address-page"},[s("head-top",{attrs:{"go-back":"true","head-title":"编辑地址"}},[s("span",{staticClass:"edit-btn",attrs:{slot:"edit"},on:{click:e.editThing},slot:"edit"},[e._v(e._s(e.editText))])]),e._v(" "),s("section",{staticClass:"address-con"},[s("ul",{staticClass:"address-list"},e._l(e.addressList,function(t,n){return s("li",{key:t.id,staticClass:"address-item"},[s("div",[s("p",[e._v(e._s(t.address))]),e._v(" "),s("p",[s("span",[e._v(e._s(t.phone))]),e._v(" "),t.phonepk?s("span",[e._v("、"+e._s(t.phonepk))]):e._e()])]),e._v(" "),e.deleteOnfoo?s("span",{staticClass:"delete-btn",on:{click:function(s){e.deleteSite(n,t)}}},[e._v("x")]):e._e()])}),0),e._v(" "),s("router-link",{staticClass:"add-site",attrs:{to:"/profile/info/address/add"}},[s("h4",[e._v("新增地址")]),e._v(" "),s("span",{staticClass:"arrow-right"})])],1),e._v(" "),s("transition",{attrs:{name:"router-slid",mode:"out-in"}},[s("router-view")],1)],1)},staticRenderFns:[]};var v=s("VU/8")(_,p,!1,function(e){s("+SLE")},"data-v-7e7dac61",null);t.default=v.exports}});
//# sourceMappingURL=24.4e8d8d0dfc8ddc47fc2f.js.map