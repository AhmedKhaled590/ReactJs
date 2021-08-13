(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{149:function(e,s,t){},150:function(e,s,t){"use strict";t.r(s);var n=t(2),c=t.n(n),r=t(11),a=t.n(r),o=(t(99),t(100),t(101),t(102),t(18)),i=t(19),l=t(21),d=t(20),j=t(5),h=t(3),m="http://localhost:3001/",b=t(1),u=function(){return Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(b.jsx)("p",{children:"Loading . . ."})]})};var O=function(e){function s(s){var t=s.dish;s.onClick;return Object(b.jsx)(h.d,{onClick:function(){return e.onClick(t.id)},children:Object(b.jsxs)(j.b,{to:"/menu/".concat(t.id),children:[Object(b.jsx)(h.g,{width:"100%",src:m+t.image,alt:t.name}),Object(b.jsx)(h.h,{children:Object(b.jsx)(h.k,{children:t.name})})]})})}var t=e.dishes.dishes.map((function(t){return Object(b.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(b.jsx)(s,{dish:t,onClick:e.onClick})},t.id)}));return e.dishes.isLoading?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)(u,{})})}):e.dishes.errMess?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("h4",{children:e.dishes.errMess})})})}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)(h.a,{children:[Object(b.jsx)(h.b,{children:Object(b.jsx)(j.b,{to:"/home",children:"Home"})}),Object(b.jsx)(h.b,{active:!0,children:"Menu"})]}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("h3",{children:"Menu"}),Object(b.jsx)("hr",{})]})]}),Object(b.jsx)("div",{className:"row",children:t})]})},x=t(17),f=t(7),p=t(29),g=function(e){return function(s){return s&&s.length>=e}},N=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).toggleModal=n.toggleModal.bind(Object(x.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n.state={isModalOpen:!1},n}return Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),console.log(e),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(h.c,{onClick:this.toggleModal,outline:!0,children:[Object(b.jsx)("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"]}),Object(b.jsxs)(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(b.jsx)(h.v,{toggle:this.toggleModal,children:"Submit Comment"}),Object(b.jsx)(h.u,{children:Object(b.jsxs)(f.LocalForm,{onSubmit:this.handleSubmit,children:[Object(b.jsx)(h.l,{md:{size:12},children:Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{children:"Rating"}),Object(b.jsxs)(f.Control.select,{model:".rating",className:"form-control",children:[Object(b.jsx)("option",{children:"1"}),Object(b.jsx)("option",{children:"2"}),Object(b.jsx)("option",{children:"3"}),Object(b.jsx)("option",{children:"4"}),Object(b.jsx)("option",{children:"5"})]})]})}),Object(b.jsx)(h.l,{md:{size:12},children:Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{children:"Your Name"}),Object(b.jsx)(f.Control.text,{className:"form-control",model:".author",placeholder:"Your Name",validators:{maxLength:(e=15,function(s){return!s||s.length<=e}),minLength:g(3)}}),Object(b.jsx)(f.Errors,{className:"text-danger",model:".author",show:"touched",messages:{maxLength:"Must be less than 15 characters",minLength:"Must be greater than 2 characters"}})]})}),Object(b.jsx)(h.l,{md:{size:12},children:Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{children:"Comment"}),Object(b.jsx)(f.Control.textarea,{className:"form-control",model:".comment",rows:"6"})]})}),Object(b.jsx)(h.B,{className:"form-group",children:Object(b.jsx)(h.l,{md:{size:10},children:Object(b.jsx)(h.c,{className:"btn btn-lg",type:"submit",color:"primary",children:"Submit"})})})]})})]})]});var e}}]),t}(n.Component);var v=function(e){function s(){return Object(b.jsx)(N,{postComment:e.postComment,dishId:e.dish.id})}function t(e){var t=e.comments;return null!=t?Object(b.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(b.jsx)("h1",{children:"Comments"}),Object(b.jsx)(p.Stagger,{in:!0,children:t.map((function(e){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("p",{children:e.comment}),Object(b.jsxs)("p",{children:["--",e.author," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.date))]})]},e.id)}))}),Object(b.jsx)(s,{})]}):Object(b.jsx)("div",{})}function n(){return null!=e.dish?Object(b.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(b.jsx)(p.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.g,{top:!0,src:m+e.dish.image,alt:e.dish.name}),Object(b.jsxs)(h.e,{children:[Object(b.jsx)(h.k,{children:e.dish.name}),Object(b.jsx)(h.j,{children:e.dish.description})]})]})})},e.dish.id):Object(b.jsx)("div",{})}return console.log(e.dish),e.isLoading?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)(u,{})})}):e.errMess?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)(h.a,{children:[Object(b.jsx)(h.b,{children:Object(b.jsx)(j.b,{to:"/menu",children:"Menu"})}),Object(b.jsx)(h.b,{active:!0,children:e.dish.name})]}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("h3",{children:e.dish.name}),Object(b.jsx)("hr",{})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(n,{dish:e.dish}),Object(b.jsx)(t,{comments:e.comments})]})]}):void 0},y=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).toggleNav=n.toggleNav.bind(Object(x.a)(n)),n.toggleModal=n.toggleModal.bind(Object(x.a)(n)),n.handleLogin=n.handleLogin.bind(Object(x.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(b.jsx)(h.v,{toggle:this.toggleModal,children:"Login"}),Object(b.jsx)(h.u,{children:Object(b.jsxs)(h.n,{onSubmit:this.handleLogin,children:[Object(b.jsxs)(h.o,{children:[Object(b.jsx)(h.r,{htmlFor:"username",children:"Username"}),Object(b.jsx)(h.p,{type:"text",id:"username",name:"username",innerRef:function(s){e.username=s}})]}),Object(b.jsxs)(h.o,{children:[Object(b.jsx)(h.r,{htmlFor:"password",children:"Password"}),Object(b.jsx)(h.p,{type:"password",id:"password",name:"password",innerRef:function(s){return e.password=s}})]}),Object(b.jsx)(h.o,{check:!0,children:Object(b.jsxs)(h.r,{check:!0,children:[Object(b.jsx)(h.p,{type:"checkbox",name:"remember",innerRef:function(s){return e.remember=s}}),"Remember me"]})}),Object(b.jsx)(h.c,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]}),Object(b.jsx)(h.y,{dark:!0,expand:"md",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h.A,{onClick:this.toggleNav}),Object(b.jsx)(h.z,{className:"mr-auto",href:"/",children:Object(b.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(b.jsxs)(h.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(b.jsxs)(h.w,{navbar:!0,children:[Object(b.jsx)(h.x,{children:Object(b.jsxs)(j.c,{className:"nav-link",to:"/home",children:[Object(b.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(b.jsx)(h.x,{children:Object(b.jsxs)(j.c,{className:"nav-link",to:"/aboutus",children:[Object(b.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(b.jsx)(h.x,{children:Object(b.jsxs)(j.c,{className:"nav-link",to:"/menu",children:[Object(b.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(b.jsx)(h.x,{children:Object(b.jsxs)(j.c,{className:"nav-link",to:"/contactus",children:[Object(b.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(b.jsx)(h.w,{className:"ml-auto",navbar:!0,children:Object(b.jsx)(h.x,{children:Object(b.jsxs)(h.c,{outline:!0,onClick:this.toggleModal,children:[Object(b.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(b.jsx)(h.q,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row row-header",children:Object(b.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(b.jsx)("h1",{children:"Ristorante con Fusion"}),Object(b.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})})]})}}]),t}(n.Component);var w=function(e){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(b.jsx)("h5",{children:"Links"}),Object(b.jsxs)("ul",{className:"list-unstyled",children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/aboutus",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/menu",children:"Menu"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/contactus",children:"Contact"})})]})]}),Object(b.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(b.jsx)("h5",{children:"Our Address"}),Object(b.jsxs)("address",{children:["121, Clear Water Bay Road",Object(b.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(b.jsx)("br",{}),"HONG KONG",Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(b.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(b.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(b.jsx)("i",{className:"fa fa-google-plus"})}),Object(b.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(b.jsx)("i",{className:"fa fa-facebook"})}),Object(b.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(b.jsx)("i",{className:"fa fa-linkedin"})}),Object(b.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(b.jsx)("i",{className:"fa fa-twitter"})}),Object(b.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(b.jsx)("i",{className:"fa fa-youtube"})}),Object(b.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(b.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})};function M(e){var s=e.item,t=e.isLoading,n=e.errMess;return t?Object(b.jsx)(u,{}):n?Object(b.jsx)("h4",{children:n}):Object(b.jsx)(p.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.g,{src:m+s.image,alt:s.name}),Object(b.jsxs)(h.e,{children:[Object(b.jsx)(h.k,{children:s.name}),s.designation?Object(b.jsx)(h.i,{children:s.designation}):null,Object(b.jsx)(h.j,{children:s.description})]})]})})}var k=function(e){return console.log(e),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row align-items-start",children:[Object(b.jsx)("div",{className:"col-12 col-md m-1",children:Object(b.jsx)(M,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(b.jsx)("div",{className:"col-12 col-md m-1",children:Object(b.jsx)(M,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})}),Object(b.jsx)("div",{className:"col-12 col-md m-1",children:Object(b.jsx)(M,{item:e.leader,isLoading:e.leadersLoading,errMess:e.LeadersErrMess})})]})})},L=t(50),C=t(86),E=t(24),S=function(e){return e&&e.length},F=function(e){return function(s){return!s||s.length<=e}},D=function(e){return function(s){return s&&s.length>=e}},T=function(e){return!isNaN(Number(e))},A=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},I=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Thank you for your feedback\n: "+JSON.stringify(e)),this.props.postFeedBack(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)(h.a,{children:[Object(b.jsx)(h.b,{children:Object(b.jsx)(j.b,{to:"/home",children:"Home"})}),Object(b.jsx)(h.b,{active:!0,children:"Contact Us"})]}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("h3",{children:"Contact Us"}),Object(b.jsx)("hr",{})]})]}),Object(b.jsxs)("div",{className:"row row-content",children:[Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("h3",{children:"Location Information"})}),Object(b.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(b.jsx)("h5",{children:"Our Address"}),Object(b.jsxs)("address",{children:["121, Clear Water Bay Road",Object(b.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(b.jsx)("br",{}),"HONG KONG",Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fa fa-envelope"}),": ",Object(b.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(b.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(b.jsx)("h5",{children:"Map of our Location"})}),Object(b.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(b.jsxs)("div",{className:"btn-group",role:"group",children:[Object(b.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(b.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(b.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(b.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(b.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(b.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(b.jsxs)("div",{className:"row row-content",children:[Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("h3",{children:"Send us your Feedback"})}),Object(b.jsx)("div",{className:"col-12 col-md-9",children:Object(b.jsxs)(f.Form,{model:"feedback",onSubmit:function(s){return e.handleSubmit(s)},children:[Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(b.jsxs)(h.l,{md:10,children:[Object(b.jsx)(f.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:S,minLength:D(3),maxLength:F(15)}}),Object(b.jsx)(f.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(b.jsxs)(h.l,{md:10,children:[Object(b.jsx)(f.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:S,minLength:D(3),maxLength:F(15)}}),Object(b.jsx)(f.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(b.jsxs)(h.l,{md:10,children:[Object(b.jsx)(f.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:S,minLength:D(3),maxLength:F(15),isNumber:T}}),Object(b.jsx)(f.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{htmlFor:"email",md:2,children:"Email"}),Object(b.jsxs)(h.l,{md:10,children:[Object(b.jsx)(f.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:S,validEmail:A}}),Object(b.jsx)(f.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.l,{md:{size:6,offset:2},children:Object(b.jsx)("div",{className:"form-check",children:Object(b.jsxs)(h.r,{check:!0,children:[Object(b.jsx)(f.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(b.jsx)("strong",{children:"May we contact you?"})]})})}),Object(b.jsx)(h.l,{md:{size:3,offset:1},children:Object(b.jsxs)(f.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(b.jsx)("option",{children:"Tel."}),Object(b.jsx)("option",{children:"Email"})]})})]}),Object(b.jsxs)(h.B,{className:"form-group",children:[Object(b.jsx)(h.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(b.jsx)(h.l,{md:10,children:Object(b.jsx)(f.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(b.jsx)(h.B,{className:"form-group",children:Object(b.jsx)(h.l,{md:{size:10,offset:2},children:Object(b.jsx)(h.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),t}(n.Component);var B=function(e){e.leaders.map((function(e){return Object(b.jsxs)("p",{children:["Leader ",e.name]})}));var s=function(e){var s=e.leaders,t=e.isLoading,n=e.errMess;return t?Object(b.jsx)(u,{}):n?Object(b.jsx)("h4",{children:n}):s.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.s,{className:"mt-5",children:[Object(b.jsx)(h.s,{left:!0,middle:!0,href:"#",children:Object(b.jsx)(h.s,{object:!0,src:m+e.image,alt:e.name})}),Object(b.jsxs)(h.s,{body:!0,className:"ml-5",children:[Object(b.jsx)(h.s,{heading:!0,children:e.name}),Object(b.jsx)("p",{children:e.designation}),e.description]})]})})}))};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)(h.a,{children:[Object(b.jsx)(h.b,{children:Object(b.jsx)(j.b,{to:"/home",children:"Home"})}),Object(b.jsx)(h.b,{active:!0,children:"About Us"})]}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("h3",{children:"About Us"}),Object(b.jsx)("hr",{})]})]}),Object(b.jsxs)("div",{className:"row row-content",children:[Object(b.jsxs)("div",{className:"col-12 col-md-6",children:[Object(b.jsx)("h2",{children:"Our History"}),Object(b.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(b.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(b.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(b.jsx)("div",{className:"col-12 col-md-5",children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(b.jsx)(h.e,{children:Object(b.jsxs)("dl",{className:"row p-1",children:[Object(b.jsx)("dt",{className:"col-6",children:"Started"}),Object(b.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(b.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(b.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(b.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(b.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(b.jsx)("dt",{className:"col-6",children:"Employees"}),Object(b.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)(h.d,{children:Object(b.jsx)(h.e,{className:"bg-faded",children:Object(b.jsxs)("blockquote",{className:"blockquote",children:[Object(b.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(b.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(b.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(b.jsxs)("div",{className:"row row-content",children:[Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("h2",{children:"Corporate Leadership"})}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)(p.Stagger,{in:!0,children:Object(b.jsx)(s,{leaders:e.leaders,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})})]})]})},R="ADD_COMMENT",q="DISHES_LOADING",P="DISHES_FAILED",H="ADD_DISHES",_="ADD_COMMENTS",Y="COMMENTS_FAILED",z="PROMOS_LOADING",U="ADD_PROMOS",W="PROMOS_FAILED",G="LEADERS_LOADING",K="ADD_LEADERS",J="LEADERS_FAILED",Z=function(){return{type:q}},$=function(e){return{type:P,payload:e}},Q=function(e){return{type:H,payload:e}},V=function(){return{type:Y}},X=function(e){return{type:_,payload:e}},ee=function(){return{type:z}},se=function(e){return{type:W,payload:e}},te=function(e){return{type:U,payload:e}},ne=function(e){return{type:R,payload:e}},ce=function(){return{type:G}},re=function(e){return{type:K,payload:e}},ae=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={selectedDish:null},n}return Object(i.a)(t,[{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(y,{}),Object(b.jsx)(L.a,{children:Object(b.jsx)(C.a,{classNames:"page",timeout:300,children:Object(b.jsxs)(j.f,{location:this.props.location,children:[Object(b.jsx)(j.e,{path:"/home",component:function(){return console.log(e.props.leaders),Object(b.jsx)(k,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(b.jsx)(j.e,{path:"/menu",exact:!0,component:function(){return Object(b.jsx)(O,{dishes:e.props.dishes,onClick:function(s){return e.onDishSelect(s)}})}}),Object(b.jsx)(j.e,{path:"/contactus",exact:!0,component:function(){return Object(b.jsx)(I,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedBack:e.props.postFeedBack})}}),Object(b.jsx)(j.e,{path:"/menu/:dishId",component:function(s){var t=s.match;return console.log(),Object(b.jsx)(v,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,addComment:e.props.addComment,postComment:e.props.postComment})}}),Object(b.jsx)(j.e,{path:"/aboutus",exact:!0,component:function(){return Object(b.jsx)(B,{leaders:e.props.leaders.leaders,leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(b.jsx)(j.d,{path:"/home"})]})},this.props.location.key)}),Object(b.jsx)(w,{})]})}}]),t}(n.Component),oe=Object(j.g)(Object(E.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{addComment:function(s,t,n,c){return e(ne(s))},fetchDishes:function(){return e((function(e){return e(Z(!0)),fetch(m+"dishes").then((function(e){if(e.ok)return e;var s=new Error("Error "+s.status+": "+s.message);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Q(s))})).catch((function(s){return e($(s.message))}))}))},resetFeedbackForm:function(){e(f.actions.reset("feedback"))},postFeedBack:function(e){!function(e){var s={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};fetch(m+"feedback",{method:"POST",body:JSON.stringify(s),headers:{"CONTENT-TYPE":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}(e)},fetchComments:function(){return e((function(e){return fetch(m+"comments").then((function(e){if(e.ok)return e;var s=new Error("Error "+s.status+": "+s.message);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(X(s))})).catch((function(s){return e(V(s.message))}))}))},fetchPromos:function(){return e((function(e){return e(ee()),fetch(m+"promotions").then((function(e){if(e.ok)return e;var s=new Error("Error "+s.status+": "+s.message);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(te(s))})).catch((function(s){e(se(s.message))}))}))},postComment:function(s,t,n,c){return e(function(e,s,t,n){return function(c){var r={dishId:e,rating:s,author:t,comment:n};return r.date=(new Date).toISOString(),fetch(m+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(ne(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(s,t,n,c))},fetchLeaders:function(){return e((function(e){return e(ce()),fetch(m+"leaders").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(re(s))})).catch((function(e){alert(e.message)}))}))}}}))(ae)),ie=(t(149),t(6)),le=t(28),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case R:var t=s.payload;return Object(ie.a)(Object(ie.a)({},e),{},{errMess:null,comments:e.comments.concat(t)});case _:return Object(ie.a)(Object(ie.a)({},e),{},{errMess:null,comments:s.payload});case Y:return Object(ie.a)(Object(ie.a)({},e),{},{errMess:s.payload,comments:[]});default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case H:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errMess:null,dishes:s.payload});case q:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case P:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errMess:s.payload,dishes:[]});default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case K:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errMess:null,leaders:s.payload});case G:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case J:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errMess:s.payload,leaders:[]});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case U:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errMess:null,promotions:s.payload});case z:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case W:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errMess:s.payload});default:return e}},be=t(92),ue=t(93),Oe=t.n(ue),xe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},fe=Object(le.createStore)(Object(le.combineReducers)(Object(ie.a)({dishes:je,promotions:me,leaders:he,comments:de},Object(f.createForms)({feedback:xe}))),Object(le.applyMiddleware)(be.a,Oe.a)),pe=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(b.jsx)(E.Provider,{store:fe,children:Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(oe,{})})})})}}]),t}(n.Component);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(pe,{})}),document.getElementById("root"))},99:function(e,s,t){}},[[150,1,2]]]);
//# sourceMappingURL=main.dc588ce6.chunk.js.map