(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,a,t){},216:function(e,a,t){e.exports=t.p+"static/media/profile_photo.a51267c4.jpg"},217:function(e,a,t){},219:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(12),s=t.n(c),i=(t(74),t(16)),r=t(17),o=t(19),m=t(18),u=t(20),p=(t(76),t(78),t(67)),h=t.n(p),d=t(35),f=t.n(d),E=t(34),v=t.n(E),k=function(e){function a(){var e,t;Object(i.a)(this,a);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={specialTheme:!1,anchorEl:null},t.scrollToAbout=function(){var e=document.querySelector(".about-page");v()(e,{offset:0,duration:1500})},t.scrollToHome=function(){var e=document.querySelector(".landing-page");v()(e,{offset:0,duration:1500})},t.scrollToProjects=function(){var e=document.querySelector(".projects-page");v()(e,{offset:0,duration:1500})},t.toggleSpecialTheme=function(){t.setState({specialTheme:!t.state.specialTheme})},t.renderSpecialTheme=function(){if(t.state.specialTheme)return n.a.createElement("div",{className:"snowflakes","aria-hidden":"true"},n.a.createElement("div",{className:"snowflake snowflake-blue snowflake-big"},"\u2744"),n.a.createElement("div",{className:"snowflake snowflake-blue snowflake-big"},"\u2745"),n.a.createElement("div",{className:"snowflake snowflake-blue snowflake-small"},"\u2746"),n.a.createElement("div",{className:"snowflake snowflake-blue snowflake-small"},"\u2744"),n.a.createElement("div",{className:"snowflake snowflake-blue snowflake-small"},"\u2745"),n.a.createElement("div",{className:"snowflake snowflake-white snowflake-big"},"\u2746"),n.a.createElement("div",{className:"snowflake snowflake-white snowflake-big"},"\u2744"),n.a.createElement("div",{className:"snowflake snowflake-white snowflake-big"},"\u2745"),n.a.createElement("div",{className:"snowflake snowflake-white snowflake-small"},"\u2746"),n.a.createElement("div",{className:"snowflake snowflake-white snowflake-small"},"\u2744"))},t.handleMenuOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleMenuClose=function(){t.setState({anchorEl:null})},t.handleMenuItemClick=function(e){switch(e){case"home":t.scrollToHome();break;case"about":t.scrollToAbout();break;case"portfolio":t.scrollToProjects()}t.setState({anchorEl:null})},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"landing-page"},this.renderSpecialTheme(),n.a.createElement("nav",null,n.a.createElement("div",{className:"brand"},n.a.createElement("div",{className:"brand-title"},"DT |"),n.a.createElement("i",{className:"fas fa-code"})),n.a.createElement("div",{className:"menu"},n.a.createElement("div",{className:"menu-item",onClick:this.scrollToHome},"Home"),n.a.createElement("div",{className:"menu-item",onClick:this.scrollToAbout},"About"),n.a.createElement("div",{className:"menu-item",onClick:this.scrollToProjects},"Portfolio"),n.a.createElement("i",{className:"fas fa-bars expandable-menu",onClick:this.handleMenuOpen}),n.a.createElement(h.a,{anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.handleMenuClose},n.a.createElement(f.a,{key:"home",onClick:function(){return e.handleMenuItemClick("home")}},"Home"),n.a.createElement(f.a,{key:"about",onClick:function(){return e.handleMenuItemClick("about")}},"About"),n.a.createElement(f.a,{key:"portfolio",onClick:function(){return e.handleMenuItemClick("portfolio")}},"Portfolio")))),n.a.createElement("main",null,n.a.createElement("div",{className:"intro-wrapper"},n.a.createElement("div",{className:"intro-name"},"Hello I'm Dimitris"),n.a.createElement("div",{className:"intro-skills"},"Full-Stack Developer | React Enthousiast"),n.a.createElement("div",{className:"social-icons"},n.a.createElement("a",{href:"https://github.com/dimitamp",className:"hvr-wobble-vertical"},n.a.createElement("img",{style:this.state.specialTheme?{}:{display:"none"},className:"github-hat",alt:"christmas hat icon",src:t(33)}),n.a.createElement("i",{className:"fab fa-github"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/dimitrios-tampakis-538144175",className:"hvr-wobble-vertical"},n.a.createElement("img",{style:this.state.specialTheme?{}:{display:"none"},className:"linkedin-hat",alt:"christmas hat icon",src:t(33)}),n.a.createElement("i",{className:"fab fa-linkedin"})),n.a.createElement("a",{href:"https://www.instagram.com/lamouchefatale/",className:"hvr-wobble-vertical"},n.a.createElement("img",{style:this.state.specialTheme?{}:{display:"none"},className:"instagram-hat",alt:"christmas hat icon",src:t(33)}),n.a.createElement("i",{className:"fab fa-instagram"})),n.a.createElement("a",{href:"https://devpost.com/DimitriosTampakis?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",className:"hvr-wobble-vertical"},n.a.createElement("img",{style:this.state.specialTheme?{}:{display:"none"},className:"dev-hat",alt:"christmas hat icon",src:t(33)}),n.a.createElement("i",{className:"fab fa-dev"}))))))}}]),a}(l.Component),b=(t(214),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"about-page"},n.a.createElement("main",null,n.a.createElement("div",{className:"profile-photo"},n.a.createElement("img",{src:t(216),alt:"profile"})),n.a.createElement("div",{className:"about-section"},n.a.createElement("div",{className:"studies"},"I received the Diploma Degree in Electrical & Computer Engineering from the faculty school of Aristotle University of Thessaloniki in 2017."),n.a.createElement("div",{className:"current-work"},"Currently I am working as a Full Stack Developer at"," ",n.a.createElement("a",{href:"https://vilabs.eu/"},"ViLabs"),", a company that is active in Research and Development of new ICT Technologies."))))}}]),a}(l.Component)),N=(t(217),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"projects-page"},n.a.createElement("main",null,n.a.createElement("div",{className:"project-card hvr-wobble-vertical"},n.a.createElement("div",{className:"project-skills-wrapper"},n.a.createElement("div",{className:"project-skill-icon"},"CSS"),n.a.createElement("div",{className:"project-skill-icon"},"JS"),n.a.createElement("div",{className:"project-skill-icon"},"NODE"),n.a.createElement("div",{className:"project-skill-icon"},"REACT"),n.a.createElement("div",{className:"project-skill-icon"},"MONGO")),n.a.createElement("a",{href:"http://83.212.107.194:4000",className:"project-description"},"FAMILIES SHARE")),n.a.createElement("div",{className:"project-card hvr-wobble-vertical"},n.a.createElement("div",{className:"project-skills-wrapper"},n.a.createElement("div",{className:"project-skill-icon"},"JS"),n.a.createElement("div",{className:"project-skill-icon"},"CSS"),n.a.createElement("div",{className:"project-skill-icon"},"REACT")),n.a.createElement("a",{href:"https://github.com/dimitamp/portfolio",className:"project-description"},"PORTFOLIO")),n.a.createElement("div",{className:"project-card hvr-wobble-vertical"},n.a.createElement("div",{className:"project-skills-wrapper"},n.a.createElement("div",{className:"project-skill-icon"},"CSS"),n.a.createElement("div",{className:"project-skill-icon"},"JS"),n.a.createElement("div",{className:"project-skill-icon"},"HTML")),n.a.createElement("div",{className:"project-description"},"UX BOT")),n.a.createElement("div",{className:"project-card hvr-wobble-vertical"},n.a.createElement("div",{className:"project-skills-wrapper"},n.a.createElement("div",{className:"project-skill-icon"},"NLP"),n.a.createElement("div",{className:"project-skill-icon"},"WIT.AI"),n.a.createElement("div",{className:"project-skill-icon"},"CHATBOT"),n.a.createElement("div",{className:"project-skill-icon"},"NODE")),n.a.createElement("div",{className:"project-description"},"UX EXTENSION"))))}}]),a}(l.Component)),w=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(k,null),n.a.createElement(b,null),n.a.createElement(N,null))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,a,t){e.exports=t.p+"static/media/christmashat.46509ade.png"},69:function(e,a,t){e.exports=t(219)},74:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){}},[[69,2,1]]]);
//# sourceMappingURL=main.5a371fe7.chunk.js.map