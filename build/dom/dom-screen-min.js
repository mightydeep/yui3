YUI.add("dom-screen",function(A){(function(F){var D="documentElement",P="compatMode",N="position",C="fixed",L="relative",G="left",H="top",I="BackCompat",O="medium",E="borderLeftWidth",B="borderTopWidth",Q="getBoundingClientRect",J="getComputedStyle",K=F.DOM,M=/^t(?:able|d|h)$/i;F.mix(K,{winHeight:function(S){var R=K._getWinSize(S).height;return R;},winWidth:function(S){var R=K._getWinSize(S).width;return R;},docHeight:function(S){var R=K._getDocSize(S).height;return Math.max(R,K._getWinSize(S).height);},docWidth:function(S){var R=K._getDocSize(S).width;return Math.max(R,K._getWinSize(S).width);},docScrollX:function(T,U){U=U||(T)?K._getDoc(T):F.config.doc;var S=U.defaultView,R=(S)?S.pageXOffset:0;return Math.max(U[D].scrollLeft,U.body.scrollLeft,R);},docScrollY:function(T,U){U=U||(T)?K._getDoc(T):F.config.doc;var S=U.defaultView,R=(S)?S.pageYOffset:0;return Math.max(U[D].scrollTop,U.body.scrollTop,R);},getXY:function(){if(F.config.doc[D][Q]){return function(U){var b=null,V,S,W,Z,Y,R,T,X,a;if(U){if(K.inDoc(U)){a=U.ownerDocument;V=K.docScrollX(U,a);S=K.docScrollY(U,a);W=U[Q]();b=[W.left,W.top];if(F.UA.ie){Z=2;Y=2;X=a[P];R=K[J](a[D],E);T=K[J](a[D],B);if(F.UA.ie===6){if(X!==I){Z=0;Y=0;}}if((X==I)){if(R!==O){Z=parseInt(R,10);}if(T!==O){Y=parseInt(T,10);}}b[0]-=Z;b[1]-=Y;}if((S||V)){b[0]+=V;b[1]+=S;}}else{b=K._getOffset(U);}}return b;};}else{return function(S){var V=null,U,R,X,T,W;if(S){if(K.inDoc(S)){V=[S.offsetLeft,S.offsetTop];U=S.ownerDocument;R=S;X=((F.UA.gecko||F.UA.webkit>519)?true:false);while((R=R.offsetParent)){V[0]+=R.offsetLeft;V[1]+=R.offsetTop;if(X){V=K._calcBorders(R,V);}}if(K.getStyle(S,N)!=C){R=S;while((R=R.parentNode)){T=R.scrollTop;W=R.scrollLeft;if(F.UA.gecko&&(K.getStyle(R,"overflow")!=="visible")){V=K._calcBorders(R,V);}if(T||W){V[0]-=W;V[1]-=T;}}V[0]+=K.docScrollX(S,U);V[1]+=K.docScrollY(S,U);}else{V[0]+=K.docScrollX(S,U);V[1]+=K.docScrollY(S,U);}}else{V=K._getOffset(S);}}return V;};}}(),_getOffset:function(R){var T,S=null;if(R){T=K.getStyle(R,N);S=[parseInt(K[J](R,G),10),parseInt(K[J](R,H),10)];if(isNaN(S[0])){S[0]=parseInt(K.getStyle(R,G),10);if(isNaN(S[0])){S[0]=(T===L)?0:R.offsetLeft||0;}}if(isNaN(S[1])){S[1]=parseInt(K.getStyle(R,H),10);if(isNaN(S[1])){S[1]=(T===L)?0:R.offsetTop||0;}}}return S;},getX:function(R){return K.getXY(R)[0];},getY:function(R){return K.getXY(R)[1];},setXY:function(S,V,Y){var T=K.setStyle,X,W,R,U;if(S&&V){X=K.getStyle(S,N);W=K._getOffset(S);if(X=="static"){X=L;T(S,N,X);}U=K.getXY(S);if(V[0]!==null){T(S,G,V[0]-U[0]+W[0]+"px");}if(V[1]!==null){T(S,H,V[1]-U[1]+W[1]+"px");}if(!Y){R=K.getXY(S);if(R[0]!==V[0]||R[1]!==V[1]){K.setXY(S,V,true);}}}else{}},setX:function(S,R){return K.setXY(S,[R,null]);},setY:function(R,S){return K.setXY(R,[null,S]);},swapXY:function(S,R){var T=K.getXY(S);K.setXY(S,K.getXY(R));K.setXY(R,T);},_calcBorders:function(T,U){var S=parseInt(K[J](T,B),10)||0,R=parseInt(K[J](T,E),10)||0;if(F.UA.gecko){if(M.test(T.tagName)){S=0;R=0;}}U[0]+=R;U[1]+=S;return U;},_getWinSize:function(U,W){W=W||(U)?K._getDoc(U):F.config.doc;var V=W.defaultView||W.parentWindow,X=W[P],T=V.innerHeight,S=V.innerWidth,R=W[D];if(X&&!F.UA.opera){if(X!="CSS1Compat"){R=W.body;}T=R.clientHeight;S=R.clientWidth;}return{height:T,width:S};},_getDocSize:function(S){var T=(S)?K._getDoc(S):F.config.doc,R=T[D];if(T[P]!="CSS1Compat"){R=T.body;}return{height:R.scrollHeight,width:R.scrollWidth};}});})(A);(function(G){var D="top",C="right",H="bottom",B="left",F=function(L,K){var N=Math.max(L[D],K[D]),O=Math.min(L[C],K[C]),I=Math.min(L[H],K[H]),J=Math.max(L[B],K[B]),M={};M[D]=N;M[C]=O;M[H]=I;M[B]=J;return M;},E=G.DOM;G.mix(E,{region:function(J){var K=E.getXY(J),I=false;if(J&&K){I=E._getRegion(K[1],K[0]+J.offsetWidth,K[1]+J.offsetHeight,K[0]);}return I;},intersect:function(K,I,M){var J=M||E.region(K),L={},O=I,N;if(O.tagName){L=E.region(O);}else{if(G.Lang.isObject(I)){L=I;}else{return false;}}N=F(L,J);return{top:N[D],right:N[C],bottom:N[H],left:N[B],area:((N[H]-N[D])*(N[C]-N[B])),yoff:((N[H]-N[D])),xoff:(N[C]-N[B]),inRegion:E.inRegion(K,I,false,M)};},inRegion:function(L,I,J,N){var M={},K=N||E.region(L),P=I,O;if(P.tagName){M=E.region(P);}else{if(G.Lang.isObject(I)){M=I;}else{return false;}}if(J){return(K[B]>=M[B]&&K[C]<=M[C]&&K[D]>=M[D]&&K[H]<=M[H]);}else{O=F(M,K);if(O[H]>=O[D]&&O[C]>=O[B]){return true;}else{return false;}}},inViewportRegion:function(J,I,K){return E.inRegion(J,E.viewportRegion(J),I,K);},_getRegion:function(K,L,I,J){var M={};M[D]=M[1]=K;M[B]=M[0]=J;M[H]=I;M[C]=L;M.width=M[C]-M[B];M.height=M[H]-M[D];return M;},viewportRegion:function(J){J=J||G.config.doc.documentElement;var I=false,L,K;if(J){L=E.docScrollX(J);K=E.docScrollY(J);I=E._getRegion(K,E.winWidth(J)+L,K+E.winHeight(J),L);}return I;}});})(A);},"@VERSION@",{requires:["dom-base","dom-style","event-base"]});