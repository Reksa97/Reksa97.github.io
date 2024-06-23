import{s as yt,n as ct,c as _t,f as At}from"../chunks/scheduler.B9E4Uqbn.js";import{S as bt,i as mt,e as ut,H as Mt,s as Bt,t as Tt,c as st,a as vt,z as Ct,d as at,f as Et,b as Dt,q as rt,l as Y,g as Lt,h as ot}from"../chunks/index.7EnQtd5t.js";import{p as kt}from"../chunks/stores.CLIRxqyY.js";function Rt(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var dt={exports:{}};(function(y,b){var D=function(){var M=function(c,p){var s=236,g=17,n=c,h=C[p],r=null,t=0,l=null,u=[],v={},m=function(a,o){t=n*4+17,r=function(e){for(var i=new Array(e),f=0;f<e;f+=1){i[f]=new Array(e);for(var d=0;d<e;d+=1)i[f][d]=null}return i}(t),B(0,0),B(t-7,0),B(0,t-7),$(),I(),J(a,o),n>=7&&j(a),l==null&&(l=wt(n,h,u)),X(l,o)},B=function(a,o){for(var e=-1;e<=7;e+=1)if(!(a+e<=-1||t<=a+e))for(var i=-1;i<=7;i+=1)o+i<=-1||t<=o+i||(0<=e&&e<=6&&(i==0||i==6)||0<=i&&i<=6&&(e==0||e==6)||2<=e&&e<=4&&2<=i&&i<=4?r[a+e][o+i]=!0:r[a+e][o+i]=!1)},k=function(){for(var a=0,o=0,e=0;e<8;e+=1){m(!0,e);var i=E.getLostPoint(v);(e==0||a>i)&&(a=i,o=e)}return o},I=function(){for(var a=8;a<t-8;a+=1)r[a][6]==null&&(r[a][6]=a%2==0);for(var o=8;o<t-8;o+=1)r[6][o]==null&&(r[6][o]=o%2==0)},$=function(){for(var a=E.getPatternPosition(n),o=0;o<a.length;o+=1)for(var e=0;e<a.length;e+=1){var i=a[o],f=a[e];if(r[i][f]==null)for(var d=-2;d<=2;d+=1)for(var x=-2;x<=2;x+=1)d==-2||d==2||x==-2||x==2||d==0&&x==0?r[i+d][f+x]=!0:r[i+d][f+x]=!1}},j=function(a){for(var o=E.getBCHTypeNumber(n),e=0;e<18;e+=1){var i=!a&&(o>>e&1)==1;r[Math.floor(e/3)][e%3+t-8-3]=i}for(var e=0;e<18;e+=1){var i=!a&&(o>>e&1)==1;r[e%3+t-8-3][Math.floor(e/3)]=i}},J=function(a,o){for(var e=h<<3|o,i=E.getBCHTypeInfo(e),f=0;f<15;f+=1){var d=!a&&(i>>f&1)==1;f<6?r[f][8]=d:f<8?r[f+1][8]=d:r[t-15+f][8]=d}for(var f=0;f<15;f+=1){var d=!a&&(i>>f&1)==1;f<8?r[8][t-f-1]=d:f<9?r[8][15-f-1+1]=d:r[8][15-f-1]=d}r[t-8][8]=!a},X=function(a,o){for(var e=-1,i=t-1,f=7,d=0,x=E.getMaskFunction(o),w=t-1;w>0;w-=2)for(w==6&&(w-=1);;){for(var R=0;R<2;R+=1)if(r[i][w-R]==null){var N=!1;d<a.length&&(N=(a[d]>>>f&1)==1);var _=x(i,w-R);_&&(N=!N),r[i][w-R]=N,f-=1,f==-1&&(d+=1,f=7)}if(i+=e,i<0||t<=i){i-=e,e=-e;break}}},z=function(a,o){for(var e=0,i=0,f=0,d=new Array(o.length),x=new Array(o.length),w=0;w<o.length;w+=1){var R=o[w].dataCount,N=o[w].totalCount-R;i=Math.max(i,R),f=Math.max(f,N),d[w]=new Array(R);for(var _=0;_<d[w].length;_+=1)d[w][_]=255&a.getBuffer()[_+e];e+=R;var H=E.getErrorCorrectPolynomial(N),U=P(d[w],H.getLength()-1),ht=U.mod(H);x[w]=new Array(H.getLength()-1);for(var _=0;_<x[w].length;_+=1){var lt=_+ht.getLength()-x[w].length;x[w][_]=lt>=0?ht.getAt(lt):0}}for(var gt=0,_=0;_<o.length;_+=1)gt+=o[_].totalCount;for(var ft=new Array(gt),nt=0,_=0;_<i;_+=1)for(var w=0;w<o.length;w+=1)_<d[w].length&&(ft[nt]=d[w][_],nt+=1);for(var _=0;_<f;_+=1)for(var w=0;w<o.length;w+=1)_<x[w].length&&(ft[nt]=x[w][_],nt+=1);return ft},wt=function(a,o,e){for(var i=S.getRSBlocks(a,o),f=G(),d=0;d<e.length;d+=1){var x=e[d];f.put(x.getMode(),4),f.put(x.getLength(),E.getLengthInBits(x.getMode(),a)),x.write(f)}for(var w=0,d=0;d<i.length;d+=1)w+=i[d].dataCount;if(f.getLengthInBits()>w*8)throw"code length overflow. ("+f.getLengthInBits()+">"+w*8+")";for(f.getLengthInBits()+4<=w*8&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(!1);for(;!(f.getLengthInBits()>=w*8||(f.put(s,8),f.getLengthInBits()>=w*8));)f.put(g,8);return z(f,i)};v.addData=function(a,o){o=o||"Byte";var e=null;switch(o){case"Numeric":e=K(a);break;case"Alphanumeric":e=W(a);break;case"Byte":e=it(a);break;case"Kanji":e=q(a);break;default:throw"mode:"+o}u.push(e),l=null},v.isDark=function(a,o){if(a<0||t<=a||o<0||t<=o)throw a+","+o;return r[a][o]},v.getModuleCount=function(){return t},v.make=function(){if(n<1){for(var a=1;a<40;a++){for(var o=S.getRSBlocks(a,h),e=G(),i=0;i<u.length;i++){var f=u[i];e.put(f.getMode(),4),e.put(f.getLength(),E.getLengthInBits(f.getMode(),a)),f.write(e)}for(var d=0,i=0;i<o.length;i++)d+=o[i].dataCount;if(e.getLengthInBits()<=d*8)break}n=a}m(!1,k())},v.createTableTag=function(a,o){a=a||2,o=typeof o>"u"?a*4:o;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+o+"px;",e+='">',e+="<tbody>";for(var i=0;i<v.getModuleCount();i+=1){e+="<tr>";for(var f=0;f<v.getModuleCount();f+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+a+"px;",e+=" height: "+a+"px;",e+=" background-color: ",e+=v.isDark(i,f)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>",e},v.createSvgTag=function(a,o,e,i){var f={};typeof arguments[0]=="object"&&(f=arguments[0],a=f.cellSize,o=f.margin,e=f.alt,i=f.title),a=a||2,o=typeof o>"u"?a*4:o,e=typeof e=="string"?{text:e}:e||{},e.text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,i=typeof i=="string"?{text:i}:i||{},i.text=i.text||null,i.id=i.text?i.id||"qrcode-title":null;var d=v.getModuleCount()*a+o*2,x,w,R,N,_="",H;for(H="l"+a+",0 0,"+a+" -"+a+",0 0,-"+a+"z ",_+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',_+=f.scalable?"":' width="'+d+'px" height="'+d+'px"',_+=' viewBox="0 0 '+d+" "+d+'" ',_+=' preserveAspectRatio="xMinYMin meet"',_+=i.text||e.text?' role="img" aria-labelledby="'+tt([i.id,e.id].join(" ").trim())+'"':"",_+=">",_+=i.text?'<title id="'+tt(i.id)+'">'+tt(i.text)+"</title>":"",_+=e.text?'<description id="'+tt(e.id)+'">'+tt(e.text)+"</description>":"",_+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',_+='<path d="',R=0;R<v.getModuleCount();R+=1)for(N=R*a+o,x=0;x<v.getModuleCount();x+=1)v.isDark(R,x)&&(w=x*a+o,_+="M"+w+","+N+H);return _+='" stroke="transparent" fill="black"/>',_+="</svg>",_},v.createDataURL=function(a,o){a=a||2,o=typeof o>"u"?a*4:o;var e=v.getModuleCount()*a+o*2,i=o,f=e-o;return Q(e,e,function(d,x){if(i<=d&&d<f&&i<=x&&x<f){var w=Math.floor((d-i)/a),R=Math.floor((x-i)/a);return v.isDark(R,w)?0:1}else return 1})},v.createImgTag=function(a,o,e){a=a||2,o=typeof o>"u"?a*4:o;var i=v.getModuleCount()*a+o*2,f="";return f+="<img",f+=' src="',f+=v.createDataURL(a,o),f+='"',f+=' width="',f+=i,f+='"',f+=' height="',f+=i,f+='"',e&&(f+=' alt="',f+=tt(e),f+='"'),f+="/>",f};var tt=function(a){for(var o="",e=0;e<a.length;e+=1){var i=a.charAt(e);switch(i){case"<":o+="&lt;";break;case">":o+="&gt;";break;case"&":o+="&amp;";break;case'"':o+="&quot;";break;default:o+=i;break}}return o},xt=function(a){var o=1;a=typeof a>"u"?o*2:a;var e=v.getModuleCount()*o+a*2,i=a,f=e-a,d,x,w,R,N,_={"██":"█","█ ":"▀"," █":"▄","  ":" "},H={"██":"▀","█ ":"▀"," █":" ","  ":" "},U="";for(d=0;d<e;d+=2){for(w=Math.floor((d-i)/o),R=Math.floor((d+1-i)/o),x=0;x<e;x+=1)N="█",i<=x&&x<f&&i<=d&&d<f&&v.isDark(w,Math.floor((x-i)/o))&&(N=" "),i<=x&&x<f&&i<=d+1&&d+1<f&&v.isDark(R,Math.floor((x-i)/o))?N+=" ":N+="█",U+=a<1&&d+1>=f?H[N]:_[N];U+=`
`}return e%2&&a>0?U.substring(0,U.length-e-1)+Array(e+1).join("▀"):U.substring(0,U.length-1)};return v.createASCII=function(a,o){if(a=a||1,a<2)return xt(o);a-=1,o=typeof o>"u"?a*2:o;var e=v.getModuleCount()*a+o*2,i=o,f=e-o,d,x,w,R,N=Array(a+1).join("██"),_=Array(a+1).join("  "),H="",U="";for(d=0;d<e;d+=1){for(w=Math.floor((d-i)/a),U="",x=0;x<e;x+=1)R=1,i<=x&&x<f&&i<=d&&d<f&&v.isDark(w,Math.floor((x-i)/a))&&(R=0),U+=R?N:_;for(w=0;w<a;w+=1)H+=U+`
`}return H.substring(0,H.length-1)},v.renderTo2dContext=function(a,o){o=o||2;for(var e=v.getModuleCount(),i=0;i<e;i++)for(var f=0;f<e;f++)a.fillStyle=v.isDark(i,f)?"black":"white",a.fillRect(i*o,f*o,o,o)},v};M.stringToBytesFuncs={default:function(c){for(var p=[],s=0;s<c.length;s+=1){var g=c.charCodeAt(s);p.push(g&255)}return p}},M.stringToBytes=M.stringToBytesFuncs.default,M.createStringToBytes=function(c,p){var s=function(){for(var n=F(c),h=function(){var I=n.read();if(I==-1)throw"eof";return I},r=0,t={};;){var l=n.read();if(l==-1)break;var u=h(),v=h(),m=h(),B=String.fromCharCode(l<<8|u),k=v<<8|m;t[B]=k,r+=1}if(r!=p)throw r+" != "+p;return t}(),g=63;return function(n){for(var h=[],r=0;r<n.length;r+=1){var t=n.charCodeAt(r);if(t<128)h.push(t);else{var l=s[n.charAt(r)];typeof l=="number"?(l&255)==l?h.push(l):(h.push(l>>>8),h.push(l&255)):h.push(g)}}return h}};var T={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},C={L:1,M:0,Q:3,H:2},L={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},E=function(){var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p=1335,s=7973,g=21522,n={},h=function(r){for(var t=0;r!=0;)t+=1,r>>>=1;return t};return n.getBCHTypeInfo=function(r){for(var t=r<<10;h(t)-h(p)>=0;)t^=p<<h(t)-h(p);return(r<<10|t)^g},n.getBCHTypeNumber=function(r){for(var t=r<<12;h(t)-h(s)>=0;)t^=s<<h(t)-h(s);return r<<12|t},n.getPatternPosition=function(r){return c[r-1]},n.getMaskFunction=function(r){switch(r){case L.PATTERN000:return function(t,l){return(t+l)%2==0};case L.PATTERN001:return function(t,l){return t%2==0};case L.PATTERN010:return function(t,l){return l%3==0};case L.PATTERN011:return function(t,l){return(t+l)%3==0};case L.PATTERN100:return function(t,l){return(Math.floor(t/2)+Math.floor(l/3))%2==0};case L.PATTERN101:return function(t,l){return t*l%2+t*l%3==0};case L.PATTERN110:return function(t,l){return(t*l%2+t*l%3)%2==0};case L.PATTERN111:return function(t,l){return(t*l%3+(t+l)%2)%2==0};default:throw"bad maskPattern:"+r}},n.getErrorCorrectPolynomial=function(r){for(var t=P([1],0),l=0;l<r;l+=1)t=t.multiply(P([1,A.gexp(l)],0));return t},n.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case T.MODE_NUMBER:return 10;case T.MODE_ALPHA_NUM:return 9;case T.MODE_8BIT_BYTE:return 8;case T.MODE_KANJI:return 8;default:throw"mode:"+r}else if(t<27)switch(r){case T.MODE_NUMBER:return 12;case T.MODE_ALPHA_NUM:return 11;case T.MODE_8BIT_BYTE:return 16;case T.MODE_KANJI:return 10;default:throw"mode:"+r}else if(t<41)switch(r){case T.MODE_NUMBER:return 14;case T.MODE_ALPHA_NUM:return 13;case T.MODE_8BIT_BYTE:return 16;case T.MODE_KANJI:return 12;default:throw"mode:"+r}else throw"type:"+t},n.getLostPoint=function(r){for(var t=r.getModuleCount(),l=0,u=0;u<t;u+=1)for(var v=0;v<t;v+=1){for(var m=0,B=r.isDark(u,v),k=-1;k<=1;k+=1)if(!(u+k<0||t<=u+k))for(var I=-1;I<=1;I+=1)v+I<0||t<=v+I||k==0&&I==0||B==r.isDark(u+k,v+I)&&(m+=1);m>5&&(l+=3+m-5)}for(var u=0;u<t-1;u+=1)for(var v=0;v<t-1;v+=1){var $=0;r.isDark(u,v)&&($+=1),r.isDark(u+1,v)&&($+=1),r.isDark(u,v+1)&&($+=1),r.isDark(u+1,v+1)&&($+=1),($==0||$==4)&&(l+=3)}for(var u=0;u<t;u+=1)for(var v=0;v<t-6;v+=1)r.isDark(u,v)&&!r.isDark(u,v+1)&&r.isDark(u,v+2)&&r.isDark(u,v+3)&&r.isDark(u,v+4)&&!r.isDark(u,v+5)&&r.isDark(u,v+6)&&(l+=40);for(var v=0;v<t;v+=1)for(var u=0;u<t-6;u+=1)r.isDark(u,v)&&!r.isDark(u+1,v)&&r.isDark(u+2,v)&&r.isDark(u+3,v)&&r.isDark(u+4,v)&&!r.isDark(u+5,v)&&r.isDark(u+6,v)&&(l+=40);for(var j=0,v=0;v<t;v+=1)for(var u=0;u<t;u+=1)r.isDark(u,v)&&(j+=1);var J=Math.abs(100*j/t/t-50)/5;return l+=J*10,l},n}(),A=function(){for(var c=new Array(256),p=new Array(256),s=0;s<8;s+=1)c[s]=1<<s;for(var s=8;s<256;s+=1)c[s]=c[s-4]^c[s-5]^c[s-6]^c[s-8];for(var s=0;s<255;s+=1)p[c[s]]=s;var g={};return g.glog=function(n){if(n<1)throw"glog("+n+")";return p[n]},g.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return c[n]},g}();function P(c,p){if(typeof c.length>"u")throw c.length+"/"+p;var s=function(){for(var n=0;n<c.length&&c[n]==0;)n+=1;for(var h=new Array(c.length-n+p),r=0;r<c.length-n;r+=1)h[r]=c[r+n];return h}(),g={};return g.getAt=function(n){return s[n]},g.getLength=function(){return s.length},g.multiply=function(n){for(var h=new Array(g.getLength()+n.getLength()-1),r=0;r<g.getLength();r+=1)for(var t=0;t<n.getLength();t+=1)h[r+t]^=A.gexp(A.glog(g.getAt(r))+A.glog(n.getAt(t)));return P(h,0)},g.mod=function(n){if(g.getLength()-n.getLength()<0)return g;for(var h=A.glog(g.getAt(0))-A.glog(n.getAt(0)),r=new Array(g.getLength()),t=0;t<g.getLength();t+=1)r[t]=g.getAt(t);for(var t=0;t<n.getLength();t+=1)r[t]^=A.gexp(A.glog(n.getAt(t))+h);return P(r,0).mod(n)},g}var S=function(){var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p=function(n,h){var r={};return r.totalCount=n,r.dataCount=h,r},s={},g=function(n,h){switch(h){case C.L:return c[(n-1)*4+0];case C.M:return c[(n-1)*4+1];case C.Q:return c[(n-1)*4+2];case C.H:return c[(n-1)*4+3];default:return}};return s.getRSBlocks=function(n,h){var r=g(n,h);if(typeof r>"u")throw"bad rs block @ typeNumber:"+n+"/errorCorrectionLevel:"+h;for(var t=r.length/3,l=[],u=0;u<t;u+=1)for(var v=r[u*3+0],m=r[u*3+1],B=r[u*3+2],k=0;k<v;k+=1)l.push(p(m,B));return l},s}(),G=function(){var c=[],p=0,s={};return s.getBuffer=function(){return c},s.getAt=function(g){var n=Math.floor(g/8);return(c[n]>>>7-g%8&1)==1},s.put=function(g,n){for(var h=0;h<n;h+=1)s.putBit((g>>>n-h-1&1)==1)},s.getLengthInBits=function(){return p},s.putBit=function(g){var n=Math.floor(p/8);c.length<=n&&c.push(0),g&&(c[n]|=128>>>p%8),p+=1},s},K=function(c){var p=T.MODE_NUMBER,s=c,g={};g.getMode=function(){return p},g.getLength=function(r){return s.length},g.write=function(r){for(var t=s,l=0;l+2<t.length;)r.put(n(t.substring(l,l+3)),10),l+=3;l<t.length&&(t.length-l==1?r.put(n(t.substring(l,l+1)),4):t.length-l==2&&r.put(n(t.substring(l,l+2)),7))};var n=function(r){for(var t=0,l=0;l<r.length;l+=1)t=t*10+h(r.charAt(l));return t},h=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;throw"illegal char :"+r};return g},W=function(c){var p=T.MODE_ALPHA_NUM,s=c,g={};g.getMode=function(){return p},g.getLength=function(h){return s.length},g.write=function(h){for(var r=s,t=0;t+1<r.length;)h.put(n(r.charAt(t))*45+n(r.charAt(t+1)),11),t+=2;t<r.length&&h.put(n(r.charAt(t)),6)};var n=function(h){if("0"<=h&&h<="9")return h.charCodeAt(0)-48;if("A"<=h&&h<="Z")return h.charCodeAt(0)-65+10;switch(h){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+h}};return g},it=function(c){var p=T.MODE_8BIT_BYTE,s=M.stringToBytes(c),g={};return g.getMode=function(){return p},g.getLength=function(n){return s.length},g.write=function(n){for(var h=0;h<s.length;h+=1)n.put(s[h],8)},g},q=function(c){var p=T.MODE_KANJI,s=M.stringToBytesFuncs.SJIS;if(!s)throw"sjis not supported.";(function(h,r){var t=s(h);if(t.length!=2||(t[0]<<8|t[1])!=r)throw"sjis not supported."})("友",38726);var g=s(c),n={};return n.getMode=function(){return p},n.getLength=function(h){return~~(g.length/2)},n.write=function(h){for(var r=g,t=0;t+1<r.length;){var l=(255&r[t])<<8|255&r[t+1];if(33088<=l&&l<=40956)l-=33088;else if(57408<=l&&l<=60351)l-=49472;else throw"illegal char at "+(t+1)+"/"+l;l=(l>>>8&255)*192+(l&255),h.put(l,13),t+=2}if(t<r.length)throw"illegal char at "+(t+1)},n},V=function(){var c=[],p={};return p.writeByte=function(s){c.push(s&255)},p.writeShort=function(s){p.writeByte(s),p.writeByte(s>>>8)},p.writeBytes=function(s,g,n){g=g||0,n=n||s.length;for(var h=0;h<n;h+=1)p.writeByte(s[h+g])},p.writeString=function(s){for(var g=0;g<s.length;g+=1)p.writeByte(s.charCodeAt(g))},p.toByteArray=function(){return c},p.toString=function(){var s="";s+="[";for(var g=0;g<c.length;g+=1)g>0&&(s+=","),s+=c[g];return s+="]",s},p},et=function(){var c=0,p=0,s=0,g="",n={},h=function(t){g+=String.fromCharCode(r(t&63))},r=function(t){if(!(t<0)){if(t<26)return 65+t;if(t<52)return 97+(t-26);if(t<62)return 48+(t-52);if(t==62)return 43;if(t==63)return 47}throw"n:"+t};return n.writeByte=function(t){for(c=c<<8|t&255,p+=8,s+=1;p>=6;)h(c>>>p-6),p-=6},n.flush=function(){if(p>0&&(h(c<<6-p),c=0,p=0),s%3!=0)for(var t=3-s%3,l=0;l<t;l+=1)g+="="},n.toString=function(){return g},n},F=function(c){var p=c,s=0,g=0,n=0,h={};h.read=function(){for(;n<8;){if(s>=p.length){if(n==0)return-1;throw"unexpected end of file./"+n}var t=p.charAt(s);if(s+=1,t=="=")return n=0,-1;if(t.match(/^\s$/))continue;g=g<<6|r(t.charCodeAt(0)),n+=6}var l=g>>>n-8&255;return n-=8,l};var r=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(t==43)return 62;if(t==47)return 63;throw"c:"+t};return h},O=function(c,p){var s=c,g=p,n=new Array(c*p),h={};h.setPixel=function(u,v,m){n[v*s+u]=m},h.write=function(u){u.writeString("GIF87a"),u.writeShort(s),u.writeShort(g),u.writeByte(128),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(255),u.writeByte(255),u.writeByte(255),u.writeString(","),u.writeShort(0),u.writeShort(0),u.writeShort(s),u.writeShort(g),u.writeByte(0);var v=2,m=t(v);u.writeByte(v);for(var B=0;m.length-B>255;)u.writeByte(255),u.writeBytes(m,B,255),B+=255;u.writeByte(m.length-B),u.writeBytes(m,B,m.length-B),u.writeByte(0),u.writeString(";")};var r=function(u){var v=u,m=0,B=0,k={};return k.write=function(I,$){if(I>>>$)throw"length over";for(;m+$>=8;)v.writeByte(255&(I<<m|B)),$-=8-m,I>>>=8-m,B=0,m=0;B=I<<m|B,m=m+$},k.flush=function(){m>0&&v.writeByte(B)},k},t=function(u){for(var v=1<<u,m=(1<<u)+1,B=u+1,k=l(),I=0;I<v;I+=1)k.add(String.fromCharCode(I));k.add(String.fromCharCode(v)),k.add(String.fromCharCode(m));var $=V(),j=r($);j.write(v,B);var J=0,X=String.fromCharCode(n[J]);for(J+=1;J<n.length;){var z=String.fromCharCode(n[J]);J+=1,k.contains(X+z)?X=X+z:(j.write(k.indexOf(X),B),k.size()<4095&&(k.size()==1<<B&&(B+=1),k.add(X+z)),X=z)}return j.write(k.indexOf(X),B),j.write(m,B),j.flush(),$.toByteArray()},l=function(){var u={},v=0,m={};return m.add=function(B){if(m.contains(B))throw"dup key:"+B;u[B]=v,v+=1},m.size=function(){return v},m.indexOf=function(B){return u[B]},m.contains=function(B){return typeof u[B]<"u"},m};return h},Q=function(c,p,s){for(var g=O(c,p),n=0;n<p;n+=1)for(var h=0;h<c;h+=1)g.setPixel(h,n,s(h,n));var r=V();g.write(r);for(var t=et(),l=r.toByteArray(),u=0;u<l.length;u+=1)t.writeByte(l[u]);return t.flush(),"data:image/gif;base64,"+t};return M}();(function(){D.stringToBytesFuncs["UTF-8"]=function(M){function T(C){for(var L=[],E=0;E<C.length;E++){var A=C.charCodeAt(E);A<128?L.push(A):A<2048?L.push(192|A>>6,128|A&63):A<55296||A>=57344?L.push(224|A>>12,128|A>>6&63,128|A&63):(E++,A=65536+((A&1023)<<10|C.charCodeAt(E)&1023),L.push(240|A>>18,128|A>>12&63,128|A>>6&63,128|A&63))}return L}return T(M)}})(),function(M){y.exports=M()}(function(){return D})})(dt);var Pt=dt.exports;const It=Rt(Pt),Z=7;function Nt(y){return{...y,margin:y.margin??1,shape:y.shape??"square",logoRatio:y.logoRatio??1,moduleFill:y.moduleFill??"currentcolor",anchorOuterFill:y.anchorOuterFill??"currentcolor",anchorInnerFill:y.anchorInnerFill??"currentcolor",typeNumber:y.typeNumber??0,errorCorrectionLevel:y.errorCorrectionLevel??"H"}}function Ot(y,b){const{data:D,margin:M,shape:T,logo:C,logoRatio:L,anchorInnerFill:E,anchorOuterFill:A,moduleFill:P,typeNumber:S,errorCorrectionLevel:G}=Nt(y);b||(b=It(S,G),b.addData(D),b.make());const K=b.getModuleCount(),W=K+M*2,it=[["top-left",M,M],["top-right",K-Z+M,M],["bottom-left",M,K-Z+M]];let q="";for(const[F,O,Q]of it){let c=`M${O} ${Q} h7 v7 h-7 v-7z m1 1 v5 h5 v-5 h-5 z`,p=`M${O+2} ${Q+2} h3 v3 h-3 v-3 z`;T!=="square"&&(c=`M${O+.5} ${Q}h6s0.5 0 .5 .5v6s0 .5-.5 .5h-6s-.5 0-.5-.5v-6s0-.5 .5-.5zm.75 1s-.25 0-.25 .25v4.5s0 .25 .25 .25h4.5s.25 0 .25-.25v-4.5s0-.25 -.25 -.25h-4.5z`,p=`M${O+2.5} ${Q+2} h2 s.5 0 .5 .5 v2 s0 .5-.5 .5 h-2 s-.5 0-.5-.5 v-2 s0-.5 .5-.5 z`);const s=`<path class="anchor-outer" fill="${A}" d="${c}" />`,g=`<path class="anchor-outer" fill="${E}" d="${p}" />`;q+=`<g class="anchor" data-position="${F}">${s} ${g}</g>`}q=`<g class="anchors">${q}</g>`;let V="";for(let F=0;F<K;F++)for(let O=0;O<K;O++){if(!b.isDark(F,O)||Ft(F,O,K)||C&&Ht(F,O,K))continue;const Q=F+M,c=O+M;V+=`<rect class="module" fill="${P}" data-column="${F}" data-row="${O}" x="${Q}" y="${c}" width="1" height="1" ${T==="circle"?'rx="0.5"':""} />`}V=`<g class="modules">${V}</g>`;let et="";if(C){const F=Math.floor(K*Math.sqrt(.1)),{width:O,height:Q}=Ut(F*.8,L),c=(W-O+1)/2,p=(W-Q+1)/2;et=`<image width="${O}" height="${Q}" x="${c}" y="${p}" href="${C}" class="logo" />`}return{attributes:{viewBox:`0, 0 ${W} ${W}`,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},anchors:q,modules:V,logo:et}}function pt(y){const{anchors:b,attributes:D,logo:M,modules:T}=Ot(y),C={...D};return y.width&&(C.width=y.width),y.height&&(C.height=y.height),`<svg ${Object.entries(C).map(([L,E])=>`${L}="${E}"`).join(" ")}>${b} ${T} ${M}</svg>`}function $t(y){const b=pt(y);return"data:image/svg+xml;base64,"+btoa(b)}function Ft(y,b,D){return b<=Z?y<=Z||y>=D-Z:y<=Z?b>=D-Z:!1}function Ht(y,b,D){const M=D/2,T=1,C=Math.floor(D*Math.sqrt(.1)/2),L=C*T,E=C/T,A=M-L,P=M+L,S=M-E,G=M+E;return b>=S&&b<=G&&y>=A&&y<=P}function Ut(y,b){return b>=1?{width:y,height:y/b}:{width:y*b,height:y}}function St(y){let b,D,M,T,C,L,E;return{c(){b=ut("div"),D=ut("a"),M=new Mt(!1),T=Bt(),C=ut("a"),L=Tt("Click to download QR as SVG"),this.h()},l(A){b=st(A,"DIV",{});var P=vt(b);D=st(P,"A",{download:!0,href:!0});var S=vt(D);M=Ct(S,!1),S.forEach(at),T=Et(P),C=st(P,"A",{href:!0,style:!0,download:!0});var G=vt(C);L=Dt(G,"Click to download QR as SVG"),G.forEach(at),P.forEach(at),this.h()},h(){M.a=null,rt(D,"download","nft-qr.svg"),rt(D,"href",y[1]),Y(D,"width","70vw"),Y(D,"max-width","75vh"),Y(D,"margin-top","10vh"),Y(D,"color","inherit"),rt(C,"href",y[1]),rt(C,"style",E=y[0]?"":"visibility:hidden;"),rt(C,"download","nft-qr.svg"),Y(C,"margin","1em"),Y(b,"display","flex"),Y(b,"flex-direction","column"),Y(b,"align-items","center"),Y(b,"justify-items","center"),Y(b,"max-height","100vh")},m(A,P){Lt(A,b,P),ot(b,D),M.m(y[2],D),ot(b,T),ot(b,C),ot(C,L)},p(A,[P]){P&1&&E!==(E=A[0]?"":"visibility:hidden;")&&rt(C,"style",E);const S=P&1;(P&1||S)&&Y(C,"margin","1em")},i:ct,o:ct,d(A){A&&at(b)}}}function Qt(y,b,D){let M;_t(y,kt,A=>D(3,M=A));const T={data:"http://192.168.10.94:5173/projects?id=moi"},C=$t(T),L=pt(T);let E=!1;return At(()=>{D(0,E=M.url.searchParams.get("showLink")==="true")}),[E,C,L]}class Gt extends bt{constructor(b){super(),mt(this,b,Qt,St,yt,{})}}export{Gt as component};
