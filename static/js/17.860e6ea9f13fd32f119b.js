webpackJsonp([17],{"75y+":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Xxa5"),i=s.n(a),r=s("exGp"),n=s.n(r),d=s("Dd8w"),o=s.n(d),u=s("ra3+"),l=s("Uoa1"),v=s("i84Q"),c=s("NYxO"),h={data:function(){return{verify:!1,verifythree:!1,verifyfour:!1,verifyfive:!1,oreadySumbit:!1,addressWarn:"",userMessage:"",addressDetail:"",telNum:"",telWarn:"",standByTelNum:"",standByTelWarn:"",showAlert:!1,alertText:null}},computed:o()({},Object(c.d)(["userInfo","addAddress","addressList","geohash"])),components:{headTop:u.a,alertTip:l.a},methods:o()({},Object(c.c)(["ADD_ADDRESS"]),{inputThing:function(){this.userMessage?this.verify=!1:this.verify=!0,this.bindThing()},inputThingthree:function(){this.verifythree=!0,0==this.addressDetail.length?this.addressWarn="请详细填写送餐地址":this.addressDetail.length>0&&this.addressDetail.length<=2?this.addressWarn="送餐地址太短了，不能辨识":(this.verifythree=!1,this.addressWarn=""),this.bindThing()},inputThingfour:function(){this.verifyfour=!0,/^[1][358][0-9]{9}$/.test(this.telNum)?this.verifyfour=!1:""==this.telNum?this.telWarn="手机号不能为空":this.telWarn="请输入正确的手机号",this.bindThing()},inputThingfive:function(){this.verifyfive=!0,/^[1][358][0-9]{9}$/.test(this.standByTelNum)||""==this.standByTelNum?this.verifyfive=!1:this.standByTelWarn="请输入正确的手机号",this.bindThing()},submitThing:function(){var e=this;return n()(i.a.mark(function t(){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.C)(e.userInfo.user_id,e.addressDetail,e.addAddress,e.geohash,e.userMessage,e.telNum,e.standByTelNum,0,1,"公司",4);case 2:(s=t.sent).message?(e.showAlert=!0,e.alertText=s.message):e.oreadySumbit&&(e.ADD_ADDRESS({name:e.userMessage,address:e.addressDetail,address_detail:e.addAddress,geohash:"wtw37r7cxep4",phone:e.telNum,phone_bk:e.standByTelNum,poi:e.addAddress,poi_type:0}),e.$router.go(-1));case 4:case"end":return t.stop()}},t,e)}))()},bindThing:function(){this.userMessage&&this.addressDetail&&!this.verifyfour?this.oreadySumbit=!0:this.oreadySumbit=!1}})},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-page"},[s("head-top",{attrs:{"head-title":"新增地址","go-back":"true"}}),e._v(" "),s("section",{staticClass:"add-con"},[s("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault()}}},[s("section",{staticClass:"ui-padding-block"},[s("div",{staticClass:"input-new"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userMessage,expression:"userMessage"}],class:{verifies:e.verify},attrs:{type:"text",placeholder:"请填写你的姓名"},domProps:{value:e.userMessage},on:{input:[function(t){t.target.composing||(e.userMessage=t.target.value)},e.inputThing]}}),e._v(" "),e.verify?s("p",[e._v("请填写您的姓名")]):e._e()]),e._v(" "),s("router-link",{staticClass:"add-router",attrs:{to:"/profile/info/address/add/addDetail"}},[s("div",{staticClass:"input-new"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.addAddress,expression:"addAddress"}],attrs:{type:"text",placeholder:"小区/写字楼/学校等",readonly:"readonly"},domProps:{value:e.addAddress},on:{input:function(t){t.target.composing||(e.addAddress=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"input-new"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.addressDetail,expression:"addressDetail"}],class:{verifies:e.verifythree},attrs:{type:"text",placeholder:"请填写详细送餐地址"},domProps:{value:e.addressDetail},on:{input:[function(t){t.target.composing||(e.addressDetail=t.target.value)},e.inputThingthree]}}),e._v(" "),e.verifythree?s("p",[e._v(e._s(e.addressWarn))]):e._e()]),e._v(" "),s("div",{staticClass:"input-new"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.telNum,expression:"telNum"}],class:{verifies:e.verifyfour},attrs:{type:"text",placeholder:"请填写能够联系到您的手机号"},domProps:{value:e.telNum},on:{input:[function(t){t.target.composing||(e.telNum=t.target.value)},e.inputThingfour]}}),e._v(" "),e.verifyfour?s("p",[e._v(e._s(e.telWarn))]):e._e()]),e._v(" "),s("div",{staticClass:"input-new"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.standByTelNum,expression:"standByTelNum"}],attrs:{type:"text",placeholder:"备用联系电话（选填）"},domProps:{value:e.standByTelNum},on:{input:[function(t){t.target.composing||(e.standByTelNum=t.target.value)},e.inputThingfive]}}),e._v(" "),e.verifyfive?s("p",[e._v(e._s(e.standByTelWarn))]):e._e()])],1),e._v(" "),s("section",{staticClass:"add-button"},[s("button",{class:{"no-opacity":e.oreadySumbit},on:{click:function(t){return t.preventDefault(),e.submitThing(t)}}},[e._v("新增地址")])])])]),e._v(" "),s("transition",{attrs:{name:"router-slid",mode:"out-in"}},[s("router-view")],1),e._v(" "),e.showAlert?s("alert-tip",{attrs:{alertText:e.alertText},on:{closeTip:function(t){e.showAlert=!1}}}):e._e()],1)},staticRenderFns:[]};var f=s("VU/8")(h,p,!1,function(e){s("iHsT")},"data-v-c8d94ad6",null);t.default=f.exports},iHsT:function(e,t){}});
//# sourceMappingURL=17.860e6ea9f13fd32f119b.js.map