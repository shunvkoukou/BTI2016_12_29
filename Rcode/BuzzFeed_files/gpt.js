(function(){var window=this;var a=this;var b=function(c,e){var d=parseFloat(c);return isNaN(d)||1<d||0>d?e:d},f=function(c,e){var d=parseInt(c,10);return isNaN(d)?e:d},g=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,h=function(c,e){if(!c)return e;var d=c.match(g);return d?d[0]:e};var k=b("0.02",0),l=b("0.0",0);var m=b("0",0),n=b("0.001",0),p=f("1500",1500),q=b("0.01",0),r=b("1.0",0),t=b("0.5",0),u=b("",.001),v=f("",200),w=b("0.01",0),x=/^true$/.test("")?
!0:!1,y=b("0.0",0),z=b("0.01",0),A=b("0.1",0),B=b("0.01",0),C=b("1",0),D=b("",.001),E=b("0",0),F=b("0.1",0),G=b("0.0001",0),H=f("93",0),I=f("92",0),J=b("0.01",
0),K=b("0.0",0),aa=b("0.1",0),ba=b("0.001",0),ca=b("0.05",0),da=b("0.001",0),ea=b("0.01",0),fa=b("0.001",0),ga=b("0.05",0),ha=b("0.01",0),ia=b("0.001",0),ja=b("0.01",
0),ka=b("0.0",0),la=b("0",0);var ma=/^true$/.test("false")?!0:!1;var L=function(){return a.googletag||(a.googletag={})},M=function(c,e){var d=L();d.hasOwnProperty(c)||(d[c]=e)};var N={};N["#1#"]=h("","pagead2.googlesyndication.com");N["#2#"]=h("","pubads.g.doubleclick.net");N["#3#"]=h("","securepubads.g.doubleclick.net");N["#6#"]=function(c){try{for(var e=null;e!=c;e=c,c=c.parent)switch(c.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(d){}return!0}(window);N["#7#"]=k;N["#10#"]=m;N["#11#"]=n;N["#13#"]=p;N["#16#"]=q;N["#17#"]=r;N["#18#"]=t;N["#20#"]=l;N["#23#"]=u;
N["#24#"]=v;N["#27#"]=w;N["#28#"]=y;N["#29#"]=z;N["#31#"]=A;N["#33#"]=h("","pagead2.googlesyndication.com");N["#34#"]=C;N["#36#"]=x;N["#37#"]=B;N["#38#"]=D;N["#39#"]="";N["#40#"]=E;N["#45#"]=F;N["#46#"]=ma;N["#47#"]=G;N["#49#"]=(new Date).getTime();N["#53#"]="";N["#54#"]=K;N["#55#"]=aa;N["#56#"]=ba;N["#57#"]=ca;N["#58#"]=da;N["#59#"]=ea;N["#60#"]=fa;N["#61#"]=ga;N["#62#"]=ha;N["#63#"]=ia;N["#64#"]=ja;N["#65#"]=ka;N["#66#"]=la;
M("_vars_",N);M("getVersion",function(){return"92"});var na={};var O=L(),P=(O.fifWin||window).document;M("cmd",[]);
if("function"==function(c){var e=typeof c;if("object"==e)if(c){if(c instanceof Array)return"array";if(c instanceof Object)return e;var d=Object.prototype.toString.call(c);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof c.length&&"undefined"!=typeof c.splice&&"undefined"!=typeof c.propertyIsEnumerable&&!c.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof c.call&&"undefined"!=typeof c.propertyIsEnumerable&&!c.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==e&&"undefined"==typeof c.call)return"object";return e}(O.evalScripts))O.evalScripts();else{var Q,R=I||"92",S="",T;if(H&&J){a:{var U=[H,R],oa=2*J;if(!(1E-4>Math.random())){var V=Math.random();if(V<oa){var pa=window;try{var W=new Uint32Array(1);pa.crypto.getRandomValues(W);V=W[0]/65536/65536}catch(c){V=Math.random()}T=U[Math.floor(V*U.length)];break a}}T=null}T==H?N["#53#"]="108809094":T==R&&(N["#53#"]="108809093",S="?v="+H)}T=T||R;Q=(na["#6#"]||L()._vars_["#6#"]?"https:":"http:")+
"//partner.googleadservices.com/gpt/pubads_impl_"+T+".js"+S;var X=P.currentScript;if(!("complete"==P.readyState||"loaded"==P.readyState||X&&X.async)){var Y="gpt-impl-"+Math.random();try{P.write('<script id="'+Y+'" src="'+Q+'">\x3c/script>')}catch(c){}P.getElementById(Y)&&(O._loadStarted_=!0)}if(!O._loadStarted_){var Z=P.createElement("script");Z.src=Q;Z.async=!0;(P.head||P.body||P.documentElement).appendChild(Z);O._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)

