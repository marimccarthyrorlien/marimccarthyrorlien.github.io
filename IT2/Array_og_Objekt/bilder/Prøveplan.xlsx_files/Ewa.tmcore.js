Type.registerNamespace("Diag");Diag.q=function(){};Diag.r=function(){};Diag.n=function(n,t,i,r,u){this.T=n;this.L=t;this.S=i;this.I=r;this.V=u};Diag.m=function(n,t,i){this.o=n;this.l=t;this.p=i;this.b()};Diag.m.prototype={m:0,i:null,p:null,j:0,n:0,o:0,l:0,b:function(){this.i=[];this.j=25;this.m=(new Date).getTime()},a:function(){return this.i.length},k:0,g:function(){return this.k},d:function(n){return this.k=n,n},h:function(n){return this.n=n,n},e:function(n){var t,i,r;n&&(n.a.length>this.l&&(n.a=n.a.substr(0,this.l-13)+"... [trimmed]",Diag.a.a(3465240,100,50,"Trimmed message for log {0}",Diag.h.a(n.b))),t=new Diag.f(n.a,n.e,n.c,n.f-this.m,n.d,n.b),i=t.a(),this.n>0&&i+this.j>this.n&&(r=this.i.length,this.b(),Diag.a.a(0,100,15,"The log size is too large to be accepted by the server, throwing away {0} logs.",r)),Array.add(this.i,t),this.j+=i)},f:function(){return this.j>this.o},c:function(){return Diag.a.j(new Diag.n(this.m,this.i,this.p,this.k,1))}};Diag.f=function(n,t,i,r,u,f){this.G=f;this.T=r;this.M=n;this.C=t;this.D=u*1e3+i};Diag.f.a=function(n){var t=""+n;return t.length};Diag.f.prototype={G:0,T:0,M:null,C:null,D:0,a:function(){return 31+Diag.f.a(this.G)+Diag.f.a(this.T)+this.M.length+Diag.f.a(this.C)+Diag.f.a(this.D)}};Diag.c=function(){};Diag.c.a=function(n){var t=new Date(n),i=[Diag.c.d(t.getUTCFullYear()),"-",Diag.c.b(t.getUTCMonth()+1),"-",Diag.c.b(t.getUTCDate()),"T",Diag.c.b(t.getUTCHours()),":",Diag.c.b(t.getUTCMinutes()),":",Diag.c.b(t.getUTCSeconds()),".",Diag.c.c(t.getUTCMilliseconds()),"Z"];return Diag.a.h(i)};Diag.c.d=function(n){return n<1e3?"0"+Diag.c.c(n):n.toString()};Diag.c.c=function(n){return n<100?"0"+Diag.c.b(n):n.toString()};Diag.c.b=function(n){return n<10?"0"+n:n.toString()};Diag.i=function(n,t,i,r,u,f,e,o){n!=null&&(this.d=n);t!=null&&(this.e=t);i!=null&&(this.g=i);r!=null&&(this.f=r);u!=null&&(this.c=u);f!=null&&(this.b=f);e!=null&&(this.a=e);o!=null&&o>0&&(this.h=o)};Diag.i.prototype={d:3072,e:65536,g:6e4,f:2e3,c:1e4,b:5e3,a:!1,h:0};Diag.s=function(n,t,i){this.K=Function.createDelegate(this,this.M);this.y=Function.createDelegate(this,this.u);this.L=Function.createDelegate(this,this.P);this.dispose=this.c;i||(i=new Diag.i(null,null,null,null,null,null,null,null));this.C=n;this.s=t;this.s.toLowerCase().startsWith("http:")&&document.URL.toLowerCase().startsWith("https:")&&Diag.a.i();this.E=i.g;this.D=i.f;this.A=i.c;this.F=i.b;this.z=i.a;this.g=new Diag.m(i.e,i.d,n);this.g.h(i.h);this.G();this.k=[];this.H()};Diag.s.prototype={s:null,o:0,E:0,D:0,A:0,F:0,z:!1,C:null,l:0,g:null,k:null,h:0,f:null,B:!1,a:function(n){if(this.X()>1){Array.add(this.k,n);return}this.g.e(n);this.Y(n)?(this.O("LogIndicatesError in HandleTrace"),Diag.a.a(3731793,100,200,"Flushing error-level log (tag {0}) synchronously",Diag.h.a(n.b))):this.g.f()&&(this.d(),Diag.a.a(3731794,100,200,"Flushing asynchronously due to cache size"))},Y:function(n){return!!n&&(n.d===1||n.c===10)},c:function(){this.B||(this.B=!0,this.W(),Diag.a.g(null),window.clearTimeout(this.i),window.clearTimeout(this.n),window.clearTimeout(this.m),this.i=0,this.n=0,this.m=0)},W:function(){this.I(2);this.P();this.q=!1;this.M();this.O("FlushForAppClose")},r:function(n,t){return(n.d(this.l),this.Q(n.c(),t))?(this.l++,!0):!1},Q:function(n,t){var i=this.z||!t;return(this.f&&i||(this.f=new XMLHttpRequest),!this.f.readyState||this.f.readyState===4)?(this.f.open("POST",this.s,i),this.f.setRequestHeader("Content-Type","application/json"),this.f.setRequestHeader("X-UserSessionId",this.C),i&&(this.f.timeout=this.F),this.Z(this.f),this.f.send(n),!0):(Diag.a.a(3731796,100,50,"Could not initiate upload {0}",{UploadId:this.l,XhrReadyState:this.f.readyState}),!1)},ba:function(){this.f&&this.f.abort()},Z:function(){},v:function(n,t,i){var r=this;return window.setTimeout(function(){Diag.a.a(3731797,100,200,"Timeout ({0} ms) set by {1} is now firing.",t,i);n()},t)},n:0,H:function(){window.clearTimeout(this.n);this.n=this.v(this.L,this.A,"ResetDelayedLoggingTimer")},X:function(){return Diag.a.l()+this.h},P:function(){var t=this.k.length,i,n;if(!t){this.H();return}for(i=[],Array.addRange(i,this.k),this.k=[],Diag.a.a(3731798,100,50,"HandleDelayedLogs {0}",{Count:t}),this.h++,n=0;n<t;n++)this.a(i[n]);this.h--;this.H()},m:0,G:function(){window.clearTimeout(this.m);this.m=this.v(this.y,this.E,"ResetCadenceTimer")},t:0,p:0,I:function(n){return n?this.p||(this.t=this.v(this.K,this.D,"ThrottlingMode Setter")):(window.clearTimeout(this.t),this.t=0),this.p=n,n},M:function(){this.I(0);this.q&&(this.q=!1,this.u())},q:!1,bb:function(n){return this.p===2||this.p===1&&!n},O:function(n){Diag.a.a(3731800,100,200,"Flushing Synchronous due to {0}",n);this.u(!0)},i:0,d:function(){this.N(0)},N:function(n){this.i||(this.i=this.v(this.y,n,"FlushAsynchronous"))},u:function(n){this.h++;try{window.clearTimeout(this.i)}catch(i){Diag.a.a(0,100,15,"FlushImpl: Calling Window.ClearTimeout() failed with exception: {0}",i.toString())}if(this.i=0,!this.g.a()){this.G();this.h--;return}if(this.bb(n)){Diag.a.a(3731801,100,200,"Not flushing ({0}) due to throttling",n?"sync":"async");this.q=!0;this.h--;return}this.I(n?2:1);this.G();Diag.a.a(3731803,100,200,"Flushing ({0}) cached bULS logs ({1} logs)",n?"sync":"async",this.g.a());var t;try{t=this.r(this.g,n)}catch(r){this.ba(r);t=!1}t?(this.g.b(),this.o=0):(this.o++,this.o<3?this.N(15e3):(this.g.b(),this.l++,this.o=0));this.h--},e:function(){},b:function(){}};Diag.n.registerClass("Diag.n");Diag.f.registerClass("Diag.f");Diag.s.registerClass("Diag.s",null,Diag.d,Sys.IDisposable);Type.registerNamespace("DiagUse");DiagUse.d=function(){};DiagUse.e=function(){};DiagUse.c=function(n,t){this.f=n;this.g=t};DiagUse.c.prototype={e:null,h:null,f:"DOMUpdate",g:null,b:function(){return this.e?(new Date).getTime()-this.e.getTime():0},c:function(){throw Error.notImplemented();},d:function(){return this.e=new Date,this.h=null,null},a:function(){this.e&&Diag.a.a(4257028,200,50,"Stopwatch stopped: {0}",{Operation:this.f,Target:this.g,StartTime:this.e.toUTCString(),DurationInMilliseconds:this.b()})}};Type.registerNamespace("Common.App.Diagnostics");Common.App.Diagnostics.a=function(n,t,i,r){this.R=Function.createDelegate(this,this.bf);this.S=Function.createDelegate(this,this.bg);Common.App.Diagnostics.a.initializeBase(this,[Common.a.n,Common.App.Diagnostics.a.c(n,t,i),new Diag.i(null,null,r.b("BulsUploadFrequencyInMs",6e4),null,null,null,null,Common.a.bq)]);this.j=i;this.w=r;!this.j};Common.App.Diagnostics.a.c=function(n,t,i){return n=Common.App.Diagnostics.a.a(n,t),Common.App.Diagnostics.a.b(n,i)};Common.App.Diagnostics.a.b=function(n,t){if(!t)return n;var i=t.c();return i?Common.l.a(n,"waccluster",i,!1):n};Common.App.Diagnostics.a.a=function(n,t){return t?Common.l.a(n,"build",Common.a.o,!1):n};Common.App.Diagnostics.a.prototype={J:null,U:function(){return this.J||(this.J=new Sys.EventHandlerList)},b:function(n){this.U().addHandler("CommonUlsTraceEventKey",n)},V:function(){return null},bc:function(){return null},j:null,w:null,a:function(n){Diag.s.prototype.a.call(this,n);var t=this.U().getHandler("CommonUlsTraceEventKey"),i=new Diag.k(n);t&&t(null,i)},r:function(n,t){if(this.j){if(!this.be())return!1;var i=n.c();return Common.a.bq>0&&i.length>Common.a.bq?!1:(n.d(this.l++),this.T(this.s,i,t&&!this.V()?0:3,1,t,n.g(),this.V(),this.bc()),!0)}return Diag.s.prototype.r.call(this,n,t)},bg:function(){},bf:function(n){var t=n.b,r,i,u;if(!t){Diag.a.a(5002497,100,15,"Request Item is null! RequestFailedEventArgs = {0}",n);return}if(t.a===13){Diag.a.a(6399108,100,50,"Request timed out in the ClientRequestManager queue. Falling back to default XHR.");Diag.s.prototype.Q.call(this,t.d.get_body(),!1);return}if(!t.e){Diag.a.a(5002498,100,15,"Item.ResponseHeader is null! RequestItem id = {0}, responseXml = {1}, data = {2}",t.f,t.i,t.b);return}"X-InvalidUlsJson"in t.e||(r=t.c,400<=r&&r<=499)||(i=t.g,i.a>=3)||(u=this,window.setTimeout(function(){u.T(t.d.get_url(),t.d.get_body(),3,i.a+1,!1,i.c,i.b,i.d)},15e3))},T:function(n,t,i,r,u,f,e,o){this.j.a(n,2,t,null,!1,i,this.S,this.R,new Common.App.Diagnostics.a.d(f,r,e,o),null,u,this.w.b("BulsClientRequestManagerQueueTimeInMS",3e4),null,null,e,!1,o)},x:null,bd:function(){return this.x||(this.x=this.w.b("bULSUploadRetryDelayWhenDisconnectedInMilliseconds",6e4)),this.x},be:function(){var n=this.j.g(),t,i;return n&&(t=new Date,i=t.getTime()-this.j.s().getTime(),i>=this.bd())?!0:!n}};Common.App.Diagnostics.a.d=function(n,t,i,r){this.c=n;this.a=t;this.b=i;this.d=r};Common.App.Diagnostics.a.d.prototype={c:0,a:0,b:null,d:null};Common.App.Diagnostics.c=function(){};Common.App.Diagnostics.c.a=function(){Common.App.a.a().a(new Common.App.Diagnostics.c,0,!1)};Common.App.Diagnostics.c.prototype={c:function(n){var t=this;n.b(Common.App.Diagnostics.b).c(Common.el).a().b(function(){return new Common.App.Diagnostics.b})},a:function(){return"Common.App.Diagnostics"},b:function(){}};Common.App.Diagnostics.e=function(n,t,i,r,u){this.f=n;this.b=t;this.d=i;this.c=r;this.e=u};Common.App.Diagnostics.e.prototype={f:null,b:null,d:0,c:0,e:!1,a:function(n,t){try{var i=this.g();i.send(this.h(n,t))}catch(r){Diag.a.a(6161306,201,10,"Could not send error report [{0}]",r.toString())}},g:function(){var n=new XMLHttpRequest,t;return n.open("POST",this.f,!0),n.setRequestHeader("Content-Type","text/json; charset=utf-8"),Common.a.n&&n.setRequestHeader("X-UserSessionId",Common.d.h(Common.a.n)),this.b&&n.setRequestHeader("X-OfficeVersion",this.b),Common.a.d&&(t=Common.a.d.c(),t&&n.setRequestHeader("X-WacCluster",t)),n},h:function(n,t){var i,r;return n?(t=t?"<stack>"+t+"<\/stack>":"",i=new Common.App.Diagnostics.d,i.Message=n.b,i.File=n.a,i.Line=n.d,i.Column=n.c,i.Stack=t,i.ClientAppVersion=this.b,i.AppType=this.d,i.AppMode=this.c,i.DeobfuscateWithSourceMaps=this.e,Common.a.a.a("JavaScriptCrashJsonTagEnabled")&&(r=Common.a.a.e.SessionStartInfoJson||"",i.SessionStartInfoJson=r,Common.a.m&&(i.DataPlumber=JSON.stringify(Common.a.m)),i.IsShuttingDown=Common.a.i,i.Flight=Common.a.bx),i.a()):null}};Common.App.Diagnostics.b=function(){};Common.App.Diagnostics.b.prototype={a:function(n,t,i,r,u){return new Common.App.Diagnostics.e(n,t,i,r,u)}};Common.App.Diagnostics.d=function(){};Common.App.Diagnostics.d.prototype={Message:null,File:null,Line:0,Column:0,Stack:null,ClientAppVersion:null,AppType:0,AppMode:0,DeobfuscateWithSourceMaps:!1,SessionStartInfoJson:null,DataPlumber:null,IsShuttingDown:!1,Flight:null,a:function(){return JSON.stringify(this)}};Common.App.Diagnostics.a.registerClass("Common.App.Diagnostics.a",Diag.s);Common.App.Diagnostics.a.d.registerClass("Common.App.Diagnostics.a.d");Common.App.Diagnostics.b.registerClass("Common.App.Diagnostics.b",null,Common.el);Common.App.Diagnostics.d.registerClass("Common.App.Diagnostics.d");Common.App.Diagnostics.c.a();Type.registerNamespace("_Ewa");_Ewa.jE=function(n){this.dispose=this.c;this.f=n;Sys.Application.registerDisposableObject(this)};_Ewa.jE.a=function(n,t){var i=new($$sc.D.$$(Diag.d)),r;return _Ewa.jE.isInstanceOfType(Common.a.bc)||(t=t||new _Ewa.jE.b,r=function(){if(Common.a.dd){var r=t.a(n+"/RemoteUls.ashx");Common.a.bc=r;Diag.a.e(50);Diag.a.g(r);i.b(new _Ewa.jE(r))}else Diag.a.i()},_Ewa.bH.f(r,!Common.a.eT())),i.a};_Ewa.jE.prototype={f:null,b:function(n){this.f.b(n)},c:function(){},a:function(n){this.f.a(n)},e:function(n){this.f.e(n)},d:function(){this.f.d()}};_Ewa.jE.c=function(n){_Ewa.jE.c.initializeBase(this,[n,!1,Common.a.d,Common.a.a])};_Ewa.jE.c.prototype={a:function(n){Common.App.Diagnostics.a.prototype.a.call(this,n)},r:function(n,t){return Common.a.i&&Common.a.H?!1:(t=!!(t&!Common.a.H),Common.App.Diagnostics.a.prototype.r.call(this,n,t))}};_Ewa.jE.b=function(){};_Ewa.jE.b.prototype={a:function(n){return new _Ewa.jE.c(n)}};_Ewa.xh=function(n){_Ewa.xh.initializeBase(this);this.h=n;this.j()};_Ewa.xh.prototype={h:null,b:function(){var n=this;_Ewa.f.c(_Ewa.jE.a(this.h,null),function(t){var i=t.a();_Ewa.bg.a().b(Diag.d,131,i);n.i(i)},this.cT())}};_Ewa.jE.registerClass("_Ewa.jE",null,Diag.d,Sys.IDisposable);_Ewa.jE.c.registerClass("_Ewa.jE.c",Common.App.Diagnostics.a);_Ewa.xh.registerClass("_Ewa.xh",_Ewa.mu.$$(Diag.d));Type.registerNamespace("_Ewa");_Ewa.OI=function(){};_Ewa.OI.a=function(){_Ewa.bg.a().b(_Ewa.Lv.$$(Diag.d),42,new _Ewa.xh(_Ewa.r.b.b.ServerUriBase))};_Ewa.OI.a();