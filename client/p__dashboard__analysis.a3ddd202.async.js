(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{jXcd:function(z,O,e){"use strict";e.r(O);var Z=e("g9YV"),T=e("wCAj"),w=e("+L6B"),j=e("2/Rp"),k=e("P2fV"),K=e("NJEC"),h=e("KQm4"),S=e("1OyB"),W=e("vuIU"),g=e("Ji7U"),N=e("LK+K"),q=e("5NDa"),F=e("5rEg"),x=e("o0o1"),D=e.n(x),u=e("VTBJ"),J=e("HaE+"),V=e("rePB"),ee=e("y8nQ"),P=e("Vl3Y"),y=e("ODXe"),b=e("Ff2n"),i=e("q1tI"),t=e.n(i),$=function(){var R=t.a.createContext(),Q=function(o){var s=o.index,m=Object(b.a)(o,["index"]),a=P.a.useForm(),r=Object(y.a)(a,1),n=r[0];return t.a.createElement(P.a,{form:n,component:!1},t.a.createElement(R.Provider,{value:n},t.a.createElement("tr",m)))},X=function(o){var s=o.title,m=o.editable,a=o.children,r=o.dataIndex,n=o.record,l=o.handleSave,_=Object(b.a)(o,["title","editable","children","dataIndex","record","handleSave"]),E=Object(i.useState)(!1),c=Object(y.a)(E,2),f=c[0],G=c[1],p=Object(i.useRef)(),I=Object(i.useContext)(R);Object(i.useEffect)(function(){f&&p.current.focus()},[f]);var M=function(){G(!f),I.setFieldsValue(Object(V.a)({},r,n[r]))},U=function(){var L=Object(J.a)(D.a.mark(function A(H){var B;return D.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,I.validateFields();case 3:B=d.sent,M(),l(Object(u.a)(Object(u.a)({},n),B)),d.next=11;break;case 8:d.prev=8,d.t0=d.catch(0),console.log("Save failed:",d.t0);case 11:case"end":return d.stop()}},A,null,[[0,8]])}));return function(H){return L.apply(this,arguments)}}(),C=a;return m&&(C=f?t.a.createElement(P.a.Item,{style:{margin:0},name:r,rules:[{required:!0,message:"".concat(s," is required.")}]},t.a.createElement(F.a,{ref:p,onPressEnter:U,onBlur:U})):t.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:M},a)),t.a.createElement("td",_,C)},Y=function(v){Object(g.a)(s,v);var o=Object(N.a)(s);function s(m){var a;return Object(S.a)(this,s),a=o.call(this,m),a.handleDelete=function(r){var n=Object(h.a)(a.state.dataSource);a.setState({dataSource:n.filter(function(l){return l.key!==r})})},a.handleAdd=function(){var r=a.state,n=r.count,l=r.dataSource,_={key:n,name:"Edward King ".concat(n),age:32,address:"London, Park Lane no. ".concat(n)};a.setState({dataSource:[].concat(Object(h.a)(l),[_]),count:n+1})},a.handleSave=function(r){var n=Object(h.a)(a.state.dataSource),l=n.findIndex(function(E){return r.key===E.key}),_=n[l];n.splice(l,1,Object(u.a)(Object(u.a)({},_),r)),a.setState({dataSource:n})},a.columns=[{title:"\u59D3\u540D",dataIndex:"name",width:"30%",editable:!0},{title:"\u90AE\u7BB1",dataIndex:"address"},{title:"\u89D2\u8272",dataIndex:"role"},{title:"\u64CD\u4F5C",dataIndex:"operation",render:function(n,l){return a.state.dataSource.length>=1?t.a.createElement(t.a.Fragment,null,t.a.createElement("a",null,"\u7F16\u8F91   "),t.a.createElement(K.a,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F",onConfirm:function(){return a.handleDelete(l.key)}},t.a.createElement("a",null,"\u5220\u9664"))):null}}],a.state={dataSource:[{key:"0",name:"\u5F20jic",role:"32",address:"London, Park Lane no. 0"},{key:"1",name:"\u8001\u5A46",role:"32",address:"Lon"}],count:2},a}return Object(W.a)(s,[{key:"render",value:function(){var a=this,r=this.state.dataSource,n={body:{row:Q,cell:X}},l=this.columns.map(function(_){return _.editable?Object(u.a)(Object(u.a)({},_),{},{onCell:function(c){return{record:c,editable:_.editable,dataIndex:_.dataIndex,title:_.title,handleSave:a.handleSave}}}):_});return t.a.createElement("div",null,t.a.createElement(j.a,{onClick:this.handleAdd,type:"primary",style:{marginBottom:16}},"\u589E\u52A0"),t.a.createElement(T.a,{components:n,rowClassName:function(){return"editable-row"},bordered:!0,dataSource:r,columns:l}))}}]),s}(t.a.Component);return t.a.createElement(t.a.Fragment,null,t.a.createElement(Y,null))};O.default=$}}]);
