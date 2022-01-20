"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7187],{8235:function(e,t,n){n(50390);var i=n(86509),s=n(4285),o=n(25594),r=n(62559);t.Z=(0,s.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,i=e.title,s=e.help;return(0,r.jsx)("div",{className:t.root,children:(0,r.jsxs)(o.ZP,{container:!0,children:[(0,r.jsxs)(o.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,i]}),(0,r.jsx)(o.ZP,{item:!0,xs:12,className:t.helpText,children:s})]})})}))},67187:function(e,t,n){n.r(t);var i=n(23430),s=n(18489),o=n(50390),r=n(34424),c=n(86509),a=n(4285),l=n(38342),u=n.n(l),d=n(25594),f=n(14792),m=n(6793),h=n(44149),b=n(72462),x=n(8174),p=n(30324),Z=n(8235),g=n(48122),k=n(15607),j=n(49495),v=n(37882),S=n(53224),E=n(62559),I=(0,v.Z)(o.lazy((function(){return Promise.all([n.e(5444),n.e(9)]).then(n.bind(n,60009))}))),F=(0,v.Z)(o.lazy((function(){return Promise.all([n.e(14),n.e(2066),n.e(5444),n.e(3360),n.e(2309),n.e(227),n.e(4487)]).then(n.bind(n,77926))}))),N=(0,r.$j)((function(e){return{session:e.console.session,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:h.Ih});t.default=(0,a.Z)((function(e){return(0,c.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},b.qg),b.OR),{},{twHeight:{minHeight:400}}))}))(N((function(e){var t=e.classes,n=e.match,s=e.setErrorSnackMessage,r=e.loadingBucket,c=(e.bucketInfo,(0,o.useState)(!1)),a=(0,i.Z)(c,2),l=a[0],h=a[1],b=(0,o.useState)(!0),v=(0,i.Z)(b,2),N=v[0],T=v[1],P=(0,o.useState)([]),_=(0,i.Z)(P,2),C=_[0],y=_[1],A=(0,o.useState)(!1),B=(0,i.Z)(A,2),O=B[0],R=B[1],K=(0,o.useState)(null),M=(0,i.Z)(K,2),w=M[0],z=M[1],D=n.params.bucketName,H=(0,k.F)(D,[j.Ft.S3_GET_BUCKET_NOTIFICATIONS]);(0,o.useEffect)((function(){r&&T(!0)}),[r,T]),(0,o.useEffect)((function(){N&&(H?p.Z.invoke("GET","/api/v1/buckets/".concat(D,"/events")).then((function(e){var t=u()(e,"events",[]);T(!1),y(t||[])})).catch((function(e){T(!1),s(e)})):T(!1))}),[N,s,D,H]);var L=[{type:"delete",onClick:function(e){R(!0),z(e)}}];return(0,E.jsxs)(o.Fragment,{children:[O&&(0,E.jsx)(I,{deleteOpen:O,selectedBucket:D,bucketEvent:w,closeDeleteModalAndRefresh:function(e){R(!1),e&&T(!0)}}),l&&(0,E.jsx)(F,{open:l,selectedBucket:D,closeModalAndRefresh:function(){h(!1),T(!0)}}),(0,E.jsxs)(d.ZP,{container:!0,children:[(0,E.jsxs)(d.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,E.jsx)(g.Z,{children:"Events"}),(0,E.jsx)(k.Z,{scopes:[j.Ft.S3_PUT_BUCKET_NOTIFICATIONS,j.Ft.ADMIN_SERVER_INFO],resource:D,matchAll:!0,errorProps:{disabled:!0},children:(0,E.jsx)(S.Z,{tooltip:"Subscribe to Event",onClick:function(){h(!0)},text:"Subscribe to Event",icon:(0,E.jsx)(f.Z,{}),color:"primary",variant:"contained"})})]}),(0,E.jsx)(d.ZP,{item:!0,xs:12,children:(0,E.jsx)(k.Z,{scopes:[j.Ft.S3_GET_BUCKET_NOTIFICATIONS],resource:D,errorProps:{disabled:!0},children:(0,E.jsx)(x.Z,{itemActions:L,columns:[{label:"SQS",elementKey:"arn"},{label:"Events",elementKey:"events",renderFunction:function(e){return(0,E.jsx)(o.Fragment,{children:e.join(", ")})}},{label:"Prefix",elementKey:"prefix"},{label:"Suffix",elementKey:"suffix"}],isLoading:N,records:C,entityName:"Events",idField:"id",customPaperHeight:t.twHeight})})}),!N&&(0,E.jsx)(d.ZP,{item:!0,xs:12,children:(0,E.jsx)(Z.Z,{title:"Lambda Notifications",iconComponent:(0,E.jsx)(m.Z,{}),help:(0,E.jsxs)(o.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),"You can learn more at our"," ",(0,E.jsx)("a",{href:"https://docs.min.io/minio/baremetal/monitoring/bucket-notifications/bucket-notifications.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})})))},48122:function(e,t,n){n(50390);var i=n(86509),s=n(4285),o=n(62559);t.Z=(0,s.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var t=e.classes,n=e.children;return(0,o.jsx)("h1",{className:t.root,children:n})}))}}]);
//# sourceMappingURL=7187.7c4714ee.chunk.js.map