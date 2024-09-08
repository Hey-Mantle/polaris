"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),t=require("@shopify/polaris");var de=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function me(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ge={exports:{}};(function(n,a){(function(o,i){n.exports=i()})(de,function(){var o=1e3,i=6e4,f=36e5,g="millisecond",u="second",I="minute",v="hour",k="day",Y="week",w="month",A="quarter",x="year",L="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(m){var l=["th","st","nd","rd"],r=m%100;return"["+m+(l[(r-20)%10]||l[r]||l[0])+"]"}},C=function(m,l,r){var s=String(m);return!s||s.length>=l?m:""+Array(l+1-s.length).join(r)+m},B={s:C,z:function(m){var l=-m.utcOffset(),r=Math.abs(l),s=Math.floor(r/60),c=r%60;return(l<=0?"+":"-")+C(s,2,"0")+":"+C(c,2,"0")},m:function m(l,r){if(l.date()<r.date())return-m(r,l);var s=12*(r.year()-l.year())+(r.month()-l.month()),c=l.clone().add(s,w),S=r-c<0,p=l.clone().add(s+(S?-1:1),w);return+(-(s+(r-c)/(S?c-p:p-c))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:w,y:x,w:Y,d:k,D:L,h:v,m:I,s:u,ms:g,Q:A}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},y="en",E={};E[y]=T;var z="$isDayjsObject",W=function(m){return m instanceof $||!(!m||!m[z])},U=function m(l,r,s){var c;if(!l)return y;if(typeof l=="string"){var S=l.toLowerCase();E[S]&&(c=S),r&&(E[S]=r,c=S);var p=l.split("-");if(!c&&p.length>1)return m(p[0])}else{var H=l.name;E[H]=l,c=H}return!s&&c&&(y=c),c||!s&&y},O=function(m,l){if(W(m))return m.clone();var r=typeof l=="object"?l:{};return r.date=m,r.args=arguments,new $(r)},D=B;D.l=U,D.i=W,D.w=function(m,l){return O(m,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var $=function(){function m(r){this.$L=U(r.locale,null,!0),this.parse(r),this.$x=this.$x||r.x||{},this[z]=!0}var l=m.prototype;return l.parse=function(r){this.$d=function(s){var c=s.date,S=s.utc;if(c===null)return new Date(NaN);if(D.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var p=c.match(d);if(p){var H=p[2]-1||0,F=(p[7]||"0").substring(0,3);return S?new Date(Date.UTC(p[1],H,p[3]||1,p[4]||0,p[5]||0,p[6]||0,F)):new Date(p[1],H,p[3]||1,p[4]||0,p[5]||0,p[6]||0,F)}}return new Date(c)}(r),this.init()},l.init=function(){var r=this.$d;this.$y=r.getFullYear(),this.$M=r.getMonth(),this.$D=r.getDate(),this.$W=r.getDay(),this.$H=r.getHours(),this.$m=r.getMinutes(),this.$s=r.getSeconds(),this.$ms=r.getMilliseconds()},l.$utils=function(){return D},l.isValid=function(){return this.$d.toString()!==h},l.isSame=function(r,s){var c=O(r);return this.startOf(s)<=c&&c<=this.endOf(s)},l.isAfter=function(r,s){return O(r)<this.startOf(s)},l.isBefore=function(r,s){return this.endOf(s)<O(r)},l.$g=function(r,s,c){return D.u(r)?this[s]:this.set(c,r)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(r,s){var c=this,S=!!D.u(s)||s,p=D.p(r),H=function(V,G){var Z=D.w(c.$u?Date.UTC(c.$y,G,V):new Date(c.$y,G,V),c);return S?Z:Z.endOf(k)},F=function(V,G){return D.w(c.toDate()[V].apply(c.toDate("s"),(S?[0,0,0,0]:[23,59,59,999]).slice(G)),c)},_=this.$W,N=this.$M,j=this.$D,X="set"+(this.$u?"UTC":"");switch(p){case x:return S?H(1,0):H(31,11);case w:return S?H(1,N):H(0,N+1);case Y:var J=this.$locale().weekStart||0,ne=(_<J?_+7:_)-J;return H(S?j-ne:j+(6-ne),N);case k:case L:return F(X+"Hours",0);case v:return F(X+"Minutes",1);case I:return F(X+"Seconds",2);case u:return F(X+"Milliseconds",3);default:return this.clone()}},l.endOf=function(r){return this.startOf(r,!1)},l.$set=function(r,s){var c,S=D.p(r),p="set"+(this.$u?"UTC":""),H=(c={},c[k]=p+"Date",c[L]=p+"Date",c[w]=p+"Month",c[x]=p+"FullYear",c[v]=p+"Hours",c[I]=p+"Minutes",c[u]=p+"Seconds",c[g]=p+"Milliseconds",c)[S],F=S===k?this.$D+(s-this.$W):s;if(S===w||S===x){var _=this.clone().set(L,1);_.$d[H](F),_.init(),this.$d=_.set(L,Math.min(this.$D,_.daysInMonth())).$d}else H&&this.$d[H](F);return this.init(),this},l.set=function(r,s){return this.clone().$set(r,s)},l.get=function(r){return this[D.p(r)]()},l.add=function(r,s){var c,S=this;r=Number(r);var p=D.p(s),H=function(N){var j=O(S);return D.w(j.date(j.date()+Math.round(N*r)),S)};if(p===w)return this.set(w,this.$M+r);if(p===x)return this.set(x,this.$y+r);if(p===k)return H(1);if(p===Y)return H(7);var F=(c={},c[I]=i,c[v]=f,c[u]=o,c)[p]||1,_=this.$d.getTime()+r*F;return D.w(_,this)},l.subtract=function(r,s){return this.add(-1*r,s)},l.format=function(r){var s=this,c=this.$locale();if(!this.isValid())return c.invalidDate||h;var S=r||"YYYY-MM-DDTHH:mm:ssZ",p=D.z(this),H=this.$H,F=this.$m,_=this.$M,N=c.weekdays,j=c.months,X=c.meridiem,J=function(G,Z,ae,le){return G&&(G[Z]||G(s,S))||ae[Z].slice(0,le)},ne=function(G){return D.s(H%12||12,G,"0")},V=X||function(G,Z,ae){var le=G<12?"AM":"PM";return ae?le.toLowerCase():le};return S.replace(P,function(G,Z){return Z||function(ae){switch(ae){case"YY":return String(s.$y).slice(-2);case"YYYY":return D.s(s.$y,4,"0");case"M":return _+1;case"MM":return D.s(_+1,2,"0");case"MMM":return J(c.monthsShort,_,j,3);case"MMMM":return J(j,_);case"D":return s.$D;case"DD":return D.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return J(c.weekdaysMin,s.$W,N,2);case"ddd":return J(c.weekdaysShort,s.$W,N,3);case"dddd":return N[s.$W];case"H":return String(H);case"HH":return D.s(H,2,"0");case"h":return ne(1);case"hh":return ne(2);case"a":return V(H,F,!0);case"A":return V(H,F,!1);case"m":return String(F);case"mm":return D.s(F,2,"0");case"s":return String(s.$s);case"ss":return D.s(s.$s,2,"0");case"SSS":return D.s(s.$ms,3,"0");case"Z":return p}return null}(G)||p.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(r,s,c){var S,p=this,H=D.p(s),F=O(r),_=(F.utcOffset()-this.utcOffset())*i,N=this-F,j=function(){return D.m(p,F)};switch(H){case x:S=j()/12;break;case w:S=j();break;case A:S=j()/3;break;case Y:S=(N-_)/6048e5;break;case k:S=(N-_)/864e5;break;case v:S=N/f;break;case I:S=N/i;break;case u:S=N/o;break;default:S=N}return c?S:D.a(S)},l.daysInMonth=function(){return this.endOf(w).$D},l.$locale=function(){return E[this.$L]},l.locale=function(r,s){if(!r)return this.$L;var c=this.clone(),S=U(r,s,!0);return S&&(c.$L=S),c},l.clone=function(){return D.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},m}(),Q=$.prototype;return O.prototype=Q,[["$ms",g],["$s",u],["$m",I],["$H",v],["$W",k],["$M",w],["$y",x],["$D",L]].forEach(function(m){Q[m[1]]=function(l){return this.$g(l,m[0],m[1])}}),O.extend=function(m,l){return m.$i||(m(l,$,O),m.$i=!0),O},O.locale=U,O.isDayjs=W,O.unix=function(m){return O(1e3*m)},O.en=E[y],O.Ls=E,O.p={},O})})(ge);var Se=ge.exports;const ce=me(Se),M={Annual:"ANNUAL",Every30Days:"EVERY_30_DAYS"},ee={Public:"public",CustomerTag:"customerTag",ShopifyPlan:"shopifyPlan",Customer:"customer",Hidden:"hidden"},b={AmountPerInterval:"{{ amount }} per {{ interval }}",Back:"Back",Cancel:"Cancel",CancelConfirmation:"Are you sure you want to cancel your subscription?",CancelPlan:"Cancel plan",ChangePlan:"Change plan",CurrentPlan:"Current plan",CustomPlans:"Custom plans",CustomPlansDescription:"Plans tailored to your specific needs",DiscountAmount:"{{ amount }} discount",DiscountAmountExpired:"{{ amount }} discount expired",FreeTrialLength:"{{ trialDays }}-day free trial",Features:"Features",Month:"month",MonthShort:"mo",Monthly:"Monthly",NextBillingDate:"Next billing date",NotSubscribed:"You're not subscribed to a plan yet.",Year:"year",YearShort:"yr",Yearly:"Yearly",MostPopular:"Most popular",Per:"/",Plans:"Plans",Price:"Price",SelectPlan:"Select plan",SubscribeSuccessTitle:"Subscription successful",SubscribeSuccessBody:"Thanks for subscribing to our app!",Subscription:"Subscription",SubscriptionCancelled:"Subscription cancelled",UsageCharges:"Usage charges"},pe=e.createContext(),be=()=>{const n=e.useContext(pe);if(n===void 0)throw new Error("useMantle must be used within a MantleProvider");return n},ke=(n="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:n,notation:"standard"}),R=(n,a="USD",o=!0)=>{let i=ke(a).format(n);return o&&(i=i.replace(/\.00$/,"")),i},Ce=(n=M.Every30Days)=>{switch(n){case M.Annual:return"year";case M.Every30Days:default:return"month"}},xe=(n=M.Every30Days)=>{switch(n){case M.Annual:return"yr";case M.Every30Days:default:return"mo"}},te=({interval:n=M.Every30Days,useShortFormPlanIntervals:a=!0})=>a?xe(n):Ce(n),se=({plan:n,customFieldKey:a="recommended"})=>{var o;return!!((o=n.customFields)!=null&&o[a])},ue=({plan:n,customFieldKey:a="buttonLabel"})=>{var o;return((o=n.customFields)==null?void 0:o[a])||b.SelectPlan},he=({plan:n})=>{var a;return((a=n.discounts)==null?void 0:a.length)>0?n.discounts.reduce((o,i)=>o.discountedAmount<i.discountedAmount?o:i):void 0},Be=(n=4)=>n%4===0?{xs:6,sm:6,md:2,lg:3,xl:3}:n%3===0?{xs:6,sm:6,md:2,lg:4,xl:4}:n%2===0?{xs:6,sm:6,md:3,lg:6,xl:6}:n===1?{xs:6,sm:6,md:6,lg:12,xl:12}:{xs:6,sm:6,md:2,lg:4,xl:4},Pe=(n=4)=>n%4===0?4:n%3===0?3:n%2===0?2:n===1?1:4,De=({orientation:n="horizontal",onShowPlans:a,onCancelPlan:o,onPlanCancelled:i=()=>{},cancelSubscription:f=async()=>{},i18n:g,subscription:u,refetch:I=async()=>{},apps:v=[]})=>e.createElement(t.Banner,{title:"Bundle and save!",tone:"success"},e.createElement(t.BlockStack,{gap:"400"},e.createElement(t.Text,null,"Save money on your subscription when you install these great apps."),e.createElement(t.BlockStack,{gap:"300"},v.map((k,Y)=>e.createElement(t.BlockStack,{gap:"300"},e.createElement(t.InlineStack,{gap:"200",align:"space-between",blockAlign:"center"},e.createElement(t.InlineStack,{gap:"300"},e.createElement(t.Thumbnail,{source:k.iconUrl,alt:k.name,size:"small"}),e.createElement(t.BlockStack,null,e.createElement(t.Text,{variant:"headingSm"},k.name),e.createElement(t.Text,null,k.description))),e.createElement(t.InlineStack,{gap:"400"},e.createElement(t.Text,{tone:"subdued"},"20% off"),e.createElement(t.BlockStack,null,e.createElement(t.Button,null,g.Install)))),Y<v.length-1&&e.createElement(t.Divider,null))))));var q=function(a){return e.createElement("svg",Object.assign({viewBox:"0 0 20 20"},a),e.createElement("path",{fillRule:"evenodd",d:"M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"}))};q.displayName="CheckIcon";var ie=function(a){return e.createElement("svg",Object.assign({viewBox:"0 0 20 20"},a),e.createElement("path",{d:"M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"}))};ie.displayName="PlusIcon";const $e=({plan:n,t:a,translatePlanName:o,planNameTextVariant:i,planDescriptionTextVariant:f})=>e.createElement(t.BlockStack,{gap:"100"},e.createElement(t.Text,{variant:i,alignment:"center"},o?a(n.name):n.name),n.description&&e.createElement(t.Text,{variant:f,tone:"subdued",alignment:"center"},a(n.description))),Me=({plan:n,discount:a,t:o,priceTextVariant:i,useShortFormPlanIntervals:f=!0})=>e.createElement(t.BlockStack,{gap:"100"},!!a&&e.createElement(t.InlineStack,{align:"center",blockAlign:"center",gap:"200"},e.createElement(t.Text,{variant:i},R(a.presentmentDiscountedAmount,n.presentmentCurrencyCode,!0)),e.createElement(t.Text,{variant:i,tone:"subdued",fontWeight:"medium",textDecorationLine:"line-through"},R(n.presentmentAmount,n.presentmentCurrencyCode,!0)),e.createElement(t.Text,{variant:"bodyLg",tone:"subdued"},o(b.Per)," ",o(te({interval:n.interval,useShortFormPlanIntervals:f})))),!a&&e.createElement(t.InlineStack,{align:"center",blockAlign:"center",gap:"200"},e.createElement(t.Text,{alignment:"center",variant:i},R(n.presentmentAmount,n.presentmentCurrencyCode,!0)),e.createElement(t.Text,{alignment:"center",variant:"bodyLg",tone:"subdued"},o(b.Per)," ",o(te({interval:n.interval,useShortFormPlanIntervals:f})))),n.usageCharges.length>0&&e.createElement(t.BlockStack,null,n.usageCharges.map((g,u)=>e.createElement(t.InlineStack,{key:`plan-usageCharge-${u}`,align:"center",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:ie,tone:"subdued"})),e.createElement(t.Text,{variant:"bodyLg"},o(g.terms)))))),we=({plan:n,t:a,trialDaysAsFeature:o=!1})=>e.createElement(t.BlockStack,{gap:"300"},o&&n.trialDays&&n.trialDays>0?e.createElement(t.InlineStack,{align:"center",blockAlign:"center",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:q,tone:"subdued"})),e.createElement(t.Text,null,a(b.FreeTrialLength).replace("{{ trialDays }}",n.trialDays))):null,n.featuresOrder.map((i,f)=>{const g=n.features[i];if(g.type!=="boolean"||g.value===!0)return e.createElement(t.InlineStack,{key:`plan-feature-${f}`,align:"center",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:q,tone:"subdued"})),g.type==="boolean"?e.createElement(t.Text,null,a(g.name)):e.createElement(t.Text,null,g.value," ",a(g.name)))})),ye=({plan:n,discount:a,buttonLabel:o,onSelectPlan:i,useShortFormPlanIntervals:f=!0,trialDaysAsFeature:g=!1,expanded:u=!1,isActivePlan:I=!1,isRecommendedPlan:v=!1,isCustomPlan:k=!1,showRecommendedPlanBadge:Y=!0,t:w,translatePlanName:A=!0,planNameTextVariant:x="headingMd",planDescriptionTextVariant:L="bodyLg",priceTextVariant:h="heading3xl"})=>{const[d,P]=e.useState(!1),T=w||(B=>B),C=async({plan:B,discount:y})=>{i?(P(!0),await i({plan:B,discount:y})!==!0&&P(!1)):console.log("No onSelectPlan callback provided")};return e.createElement(t.Box,{position:"relative",minHeight:"100%"},e.createElement(t.Box,{paddingBlock:u||v?void 0:"800",minHeight:"100%"},e.createElement(t.Box,{background:v||k?"bg-surface":"bg-surface-secondary",borderStyle:"solid",borderColor:"border",borderWidth:"025",paddingBlock:u||v?"1600":"800",paddingInline:"400",borderRadius:"200",minHeight:"calc(100% - calc(var(--p-space-800) * 2))"},e.createElement(t.BlockStack,{gap:"800"},e.createElement(t.BlockStack,{gap:"400"},e.createElement($e,{plan:n,t:T,translatePlanName:A,planNameTextVariant:x,planDescriptionTextVariant:L}),e.createElement(Me,{plan:n,discount:a,useShortFormPlanIntervals:f,t:T,priceTextVariant:h})),e.createElement(t.Button,{size:"large",variant:v?"primary":"secondary",onClick:async()=>{await C({plan:n,discount:a})},disabled:I,loading:d},T(o||b.SelectPlan)),e.createElement(we,{plan:n,t:T,trialDaysAsFeature:g}),v&&Y&&e.createElement(t.InlineStack,{align:"center",gap:"100"},e.createElement(t.Badge,{tone:"success"},T(b.MostPopular)))))))},K={Highlighted:"highlighted",Horizontal:"horizontal",Vertical:"vertical"},re=({plans:n,customer:a,onSelectPlan:o,planInterval:i,cardType:f=K.Horizontal,trialDaysAsFeature:g=!0,useShortFormPlanIntervals:u=!0,keyForRecommended:I="recommended",keyForCustomButtonLabel:v="buttonLabel",showRecommendedPlanBadge:k=!0,applyDiscount:Y=!0,t:w,translatePlanName:A=!0})=>{var C;const x=(C=a==null?void 0:a.subscription)!=null&&C.active?a.subscription:void 0,L=x==null?void 0:x.plan,h=i?n.filter(B=>B.interval===i):n,d=f===K.Vertical?1:Pe(h.length),P=Be(d),T=w||(B=>B);return e.createElement(t.Grid,{columns:d},h.map(B=>{const y=Y?he({plan:B}):void 0,E=(L==null?void 0:L.id)===B.id&&!(x!=null&&x.cancelOn);return e.createElement(t.Grid.Cell,{columnSpan:P,key:B.id},f===K.Highlighted&&e.createElement(ye,{key:`HighlightedPlanCard-${B.id}`,plan:B,discount:y,onSelectPlan:o,isActivePlan:E,trialDaysAsFeature:g,useShortFormPlanIntervals:u,isCustomPlan:B.availability!==ee.Public,isRecommendedPlan:se({plan:B,customFieldKey:I}),buttonLabel:ue({plan:B,customFieldKey:v}),showRecommendedPlanBadge:k,t:T,translatePlanName:A}),f===K.Horizontal&&e.createElement(fe,{key:`HorizontalPlanCard-${B.id}`,plan:B,discount:y,onSelectPlan:o,isActivePlan:E,trialDaysAsFeature:g,useShortFormPlanIntervals:u,isRecommendedPlan:se({plan:B,customFieldKey:I}),buttonLabel:ue({plan:B,customFieldKey:v}),showRecommendedPlanBadge:k,t:T,translatePlanName:A}))}))},Te=({customer:n,plans:a,onSubscribe:o,backUrl:i="",showRecommendedBadge:f=!0,customFieldCta:g,customFieldPlanRecommended:u="Recommended",showPlanIntervalToggle:I=!0,showTrialDaysAsFeature:v=!0,useShortFormPlanIntervals:k,pageWidth:Y="default",showCustomPlans:w=!0})=>{const A=n==null?void 0:n.subscription,x=new URLSearchParams(window.location.search),L=a.some(E=>E.interval===M.Annual)&&a.some(E=>E.interval===M.Every30Days),h=a.find(E=>E.id===(A==null?void 0:A.plan.id)),[d,P]=e.useState(h?h.interval:L?M.Annual:M.Every30Days),T=a.filter(E=>E.availability===ee.Public),C=w?a.filter(E=>E.availability!==ee.Public):[],[B,y]=e.useState(x.get("subscribed")==="true");return e.createElement(t.Page,{title:b.Plans,backAction:i?{content:b.Back,url:i}:void 0,secondaryActions:I&&L?e.createElement(t.ButtonGroup,{variant:"segmented"},e.createElement(t.Button,{pressed:d===M.Every30Days,onClick:()=>P(M.Every30Days)},b.Monthly),e.createElement(t.Button,{pressed:d===M.Annual,onClick:()=>P(M.Annual)},b.Yearly)):void 0,fullWidth:Y==="full",narrowWidth:Y==="narrow"},e.createElement(t.Layout,null,e.createElement(t.Layout.Section,null,e.createElement(t.BlockStack,{gap:"1000"},B&&e.createElement(t.Banner,{tone:"success",title:b.SubscribeSuccessTitle,onDismiss:()=>{y(!1),window.history.replaceState({},document.title,window.location.pathname)}},b.SubscribeSuccessBody),e.createElement(re,{plans:T,onSelectPlan:o,planInterval:d,cardType:K.Horizontal,keyForRecommended:u,keyForCustomButtonLabel:g,trialDaysAsFeature:v,useShortFormPlanIntervals:k,showRecommendedPlanBadge:f}),(C==null?void 0:C.length)>0&&e.createElement(t.Divider,{borderColor:"border"}),(C==null?void 0:C.length)>0&&e.createElement(t.BlockStack,{gap:"300"},e.createElement(t.Box,{paddingInline:{xs:400,sm:0}},e.createElement(t.Text,{variant:"headingMd"},b.CustomPlans)),e.createElement(re,{plans:C,onSelectPlan:o,planInterval:d,cardType:K.Horizontal,keyForRecommended:u,keyForCustomButtonLabel:g,trialDaysAsFeature:v,useShortFormPlanIntervals:k,showRecommendedPlanBadge:f}))))))},Ae=({plan:n,t:a,translatePlanName:o,isRecommendedPlan:i=!1,planNameTextVariant:f,planDescriptionTextVariant:g,showRecommendedPlanBadge:u})=>e.createElement(t.BlockStack,{gap:"100"},e.createElement(t.InlineStack,{align:"space-between",gap:"100"},e.createElement(t.Text,{variant:f},o?a(n.name):n.name),i&&u&&e.createElement(t.Badge,{tone:"success"},a(b.MostPopular))),n.description&&e.createElement(t.Text,{variant:g,tone:"subdued"},a(n.description))),Le=({plan:n,discount:a,t:o,useShortFormPlanIntervals:i=!0,priceTextVariant:f})=>e.createElement(t.BlockStack,null,!!a&&a.presentmentDiscountedAmount>0&&e.createElement(t.InlineStack,{blockAlign:"center",gap:"200"},e.createElement(t.Text,{variant:f},R(a.presentmentDiscountedAmount,n.presentmentCurrencyCode)),e.createElement(t.Text,{variant:f,tone:"subdued",fontWeight:"medium",textDecorationLine:"line-through"},n.presentmentAmount),e.createElement(t.Text,{variant:"bodyLg",tone:"subdued"},o(b.Per)," ",o(te({interval:n.interval,useShortFormPlanIntervals:i})))),(!a||a.presentmentDiscountedAmount==0)&&e.createElement(t.InlineStack,{blockAlign:"center",gap:"200"},e.createElement(t.Text,{alignment:"center",variant:f},R(n.presentmentAmount,n.presentmentCurrencyCode)),e.createElement(t.Text,{alignment:"center",variant:"bodyLg",tone:"subdued"},o(b.Per)," ",o(te({interval:n.interval,useShortFormPlanIntervals:i})))),n.usageCharges&&n.usageCharges.length>0&&e.createElement(t.BlockStack,null,n.usageCharges.map((g,u)=>e.createElement(t.InlineStack,{key:`plan-usageCharge-${u}`,align:"start",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:ie,tone:"subdued"})),e.createElement(t.Text,{variant:"bodyLg"},o(g.terms)))))),Ie=({plan:n,t:a,trialDaysAsFeature:o=!1})=>e.createElement(t.BlockStack,{gap:"100"},o&&n.trialDays&&n.trialDays>0?e.createElement(t.InlineStack,{align:"start",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:q,tone:"subdued"})),e.createElement(t.Text,null,a(b.FreeTrialLength).replace("{{ trialDays }}",n.trialDays))):null,n.featuresOrder.map((i,f)=>{const g=n.features[i];if(g.type!=="boolean"||g.value===!0)return e.createElement(t.InlineStack,{key:`plan-feature-${f}`,align:"start",gap:"100",wrap:!1},e.createElement(t.Box,null,e.createElement(t.Icon,{source:q,tone:"subdued"})),g.type==="boolean"?e.createElement(t.Text,null,a(g.name)):e.createElement(t.Text,null,g.value," ",a(g.name)))})),fe=({plan:n,discount:a,buttonLabel:o,onSelectPlan:i,useShortFormPlanIntervals:f=!0,trialDaysAsFeature:g=!1,isRecommendedPlan:u=!1,isActivePlan:I=!1,t:v,translatePlanName:k=!0,showRecommendedPlanBadge:Y=!0,planNameTextVariant:w="bodyLg",planDescriptionTextVariant:A="bodyMd",priceTextVariant:x="headingXl"})=>{const[L,h]=e.useState(!1),d=v||(T=>T),P=async({plan:T,discount:C})=>{i?(h(!0),await i({plan:T,discount:C})!==!0&&h(!1)):console.log("No onSelectPlan callback provided")};return e.createElement(t.Card,null,e.createElement(t.BlockStack,{gap:"400"},e.createElement(Ae,{plan:n,isRecommendedPlan:u,showRecommendedPlanBadge:Y,t:d,translatePlanName:k,planNameTextVariant:w,planDescriptionTextVariant:A}),e.createElement(Le,{plan:n,discount:a,useShortFormPlanIntervals:f,t:d,priceTextVariant:x}),e.createElement(t.Button,{size:"large",variant:u?"primary":"secondary",onClick:async()=>{await P({plan:n,discount:a})},disabled:I,loading:L},d(I?b.CurrentPlan:o||b.SelectPlan)),e.createElement(Ie,{plan:n,trialDaysAsFeature:g,t:d})))},Ye=({customer:n,plans:a,onSubscribe:o,backUrl:i="",showRecommendedBadge:f=!0,customFieldCta:g=null,customFieldPlanRecommended:u="Recommended",showPlanIntervalToggle:I=!0,showTrialDaysAsFeature:v=!0,useShortFormPlanIntervals:k=!0,pageWidth:Y="default",showCustomPlans:w=!0})=>{const A=n==null?void 0:n.subscription,x=new URLSearchParams(window.location.search),L=a.some(E=>E.interval===M.Annual)&&a.some(E=>E.interval===M.Every30Days),h=a.find(E=>E.id===(A==null?void 0:A.plan.id)),[d,P]=e.useState(h?h.interval:L?M.Annual:M.Every30Days),T=a.filter(E=>E.availability===ee.Public),C=w?a.filter(E=>E.availability!==ee.Public):[],[B,y]=e.useState(x.get("subscribed")==="true");return e.createElement(t.Page,{title:b.Plans,backAction:i&&i!==""?{content:b.Back,url:i}:void 0,secondaryActions:I&&L?e.createElement(t.ButtonGroup,{variant:"segmented"},e.createElement(t.Button,{pressed:d===M.Every30Days,onClick:()=>P(M.Every30Days)},b.Monthly),e.createElement(t.Button,{pressed:d===M.Annual,onClick:()=>P(M.Annual)},b.Yearly)):void 0,fullWidth:Y==="full",narrowWidth:Y==="narrow"},e.createElement(t.Box,{paddingBlockEnd:"800"},e.createElement(t.Layout,null,e.createElement(t.Layout.Section,null,e.createElement(t.BlockStack,{gap:"1000"},B&&e.createElement(t.Banner,{tone:"success",title:b.SubscribeSuccessTitle,onDismiss:()=>{y(!1),window.history.replaceState({},document.title,window.location.pathname)}},b.SubscribeSuccessBody),e.createElement(re,{plans:T,onSelectPlan:o,planInterval:d,cardType:K.Highlighted,keyForRecommended:u,keyForCustomButtonLabel:g,trialDaysAsFeature:v,useShortFormPlanIntervals:k,showRecommendedPlanBadge:f}),(C==null?void 0:C.length)>0&&e.createElement(t.Divider,{borderColor:"border"}),(C==null?void 0:C.length)>0&&e.createElement(t.BlockStack,{gap:"300"},e.createElement(t.Box,{paddingInline:{xs:400,sm:0}},e.createElement(t.Text,{variant:"headingMd"},b.CustomPlans)),e.createElement(re,{plans:C,onSelectPlan:o,planInterval:d,cardType:K.Highlighted,keyForRecommended:u,keyForCustomButtonLabel:g,trialDaysAsFeature:v,useShortFormPlanIntervals:k,showRecommendedPlanBadge:f})))))))},Ee=({plan:n,discount:a,buttonLabel:o,onSelectPlan:i,useShortFormPlanIntervals:f=!0,trialDaysAsFeature:g=!1,isRecommendedPlan:u=!1,isActivePlan:I=!1,t:v=_t,translatePlanName:k=!0,showRecommendedPlanBadge:Y=!0,planNameTextVariant:w="bodyLg",planDescriptionTextVariant:A="bodyMd",priceTextVariant:x="headingXl"})=>{const[L,h]=e.useState(!1),d=async({plan:y,discount:E})=>{i?(h(!0),await i({plan:y,discount:E})!==!0&&h(!1)):console.log("No onSelectPlan callback provided")},P=({plan:y})=>e.createElement(t.BlockStack,null,e.createElement(t.Text,{variant:w},k?v(y.name):y.name),y.description&&e.createElement(t.Text,{variant:A,tone:"subdued"},v(y.description))),T=({plan:y})=>e.createElement(t.BlockStack,{gap:"200"},e.createElement(t.Text,{fontWeight:"medium"},v(b.Features)),e.createElement(t.BlockStack,{gap:"100"},g&&y.trialDays&&y.trialDays>0?e.createElement(t.InlineStack,{align:"start",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:q,tone:"positive"})),e.createElement(t.Text,{tone:"subdued"},v(b.FreeTrialLength.replace("{{ trialDays }}",y.trialDays)))):null,y.featuresOrder.map((E,z)=>{const W=y.features[E];if(W.type!=="boolean"||W.value===!0)return e.createElement(t.InlineStack,{key:`plan-feature-${z}`,align:"start",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:q,tone:"positive"})),W.type==="boolean"?e.createElement(t.Text,{tone:"subdued"},W.name):e.createElement(t.Text,{tone:"subdued"},W.value," ",W.name))}))),C=({plan:y,discount:E})=>e.createElement(t.BlockStack,{gap:"100"},E?e.createElement(t.InlineStack,{blockAlign:"center",gap:"200"},e.createElement(t.Text,{variant:x},R(E.presentmentDiscountedAmount,y.presentmentCurrencyCode)),e.createElement(t.Text,{variant:x,tone:"subdued",fontWeight:"medium",textDecorationLine:"line-through"},y.presentmentAmount),e.createElement(t.Text,{variant:"bodyLg",tone:"subdued"},b.Per," ",te({interval:y.interval,useShortFormPlanIntervals:f}))):e.createElement(t.InlineStack,{blockAlign:"center",gap:"200"},e.createElement(t.Text,{alignment:"center",variant:x},R(y.presentmentAmount,y.presentmentCurrencyCode)),e.createElement(t.Text,{alignment:"center",variant:"bodyLg",tone:"subdued"},b.Per," ",te({interval:y.interval,useShortFormPlanIntervals:f}))),y.usageCharges.length>0&&e.createElement(t.BlockStack,null,y.usageCharges.map((z,W)=>e.createElement(t.InlineStack,{key:`plan-usageCharge-${W}`,align:"start",gap:"100"},e.createElement(t.Box,null,e.createElement(t.Icon,{source:ie,tone:"positive"})),e.createElement(t.Text,{variant:"bodyLg"},z.terms))))),B=({plan:y,discount:E})=>e.createElement(t.InlineStack,{blockAlign:"center",gap:"400"},e.createElement(t.Button,{size:"large",variant:u?"primary":"secondary",onClick:async()=>{await d({plan:y,discount:E})},disabled:I,loading:L},v(I?b.CurrentPlan:o||b.SelectPlan)),u&&Y&&e.createElement(t.Badge,{tone:"success"},v(b.MostPopular)));return e.createElement(t.Card,null,e.createElement(t.Grid,null,e.createElement(t.Grid.Cell,{columnSpan:{xs:6,sm:6,md:3,lg:6,xl:6}},e.createElement(t.BlockStack,{gap:"300"},P({plan:n}),C({plan:n,discount:a}),e.createElement(t.Box,null,B({plan:n,discount:a})))),e.createElement(t.Grid.Cell,{columnSpan:{xs:6,sm:6,md:3,lg:6,xl:6}},T({plan:n}))))},He=({plans:n,customer:a,onSubscribe:o,backUrl:i="",keyForRecommended:f="recommended",keyForCustomButtonLabel:g="buttonLabel",showPlanIntervalToggle:u=!1,trialDaysAsFeature:I=!0,useShortFormPlanIntervals:v=!0,pageWidth:k="default",showCustomPlans:Y=!0,showRecommendedPlanBadge:w=!0,applyDiscount:A=!0,t:x,translatePlanName:L=!0})=>{var D;const h=new URLSearchParams(window.location.search),d=n.some($=>$.interval===M.Annual)&&n.some($=>$.interval===M.Every30Days),P=(D=a==null?void 0:a.subscription)!=null&&D.active?a.subscription:void 0,T=P==null?void 0:P.plan,[C,B]=e.useState(T?T.interval:d?M.Annual:M.Every30Days),y=n.filter($=>$.availability!=="customerTag"&&$.availability!=="customer"),E=u&&d?y.filter($=>$.interval===C):y,z=Y?n.filter($=>$.availability==="customerTag"||$.availability==="customer"):[],[W,U]=e.useState(h.get("subscribed")==="true"),O=x||($=>$);return e.createElement(t.Page,{title:b.Plans,backAction:i!==""?{content:b.Back,url:i}:void 0,secondaryActions:u&&d?e.createElement(t.ButtonGroup,{variant:"segmented"},e.createElement(t.Button,{pressed:C===M.Every30Days,onClick:()=>B(M.Every30Days)},b.Monthly),e.createElement(t.Button,{pressed:C===M.Annual,onClick:()=>B(M.Annual)},b.Year)):void 0,fullWidth:k==="full",narrowWidth:k==="narrow"},e.createElement(t.Layout,null,e.createElement(t.Layout.Section,null,e.createElement(t.BlockStack,{gap:"400"},W&&e.createElement(t.Banner,{tone:"success",title:b.SubscribeSuccessTitle,onDismiss:()=>{U(!1),window.history.replaceState({},document.title,window.location.pathname)}},b.SubscribeSuccessBody),E.map(($,Q)=>{const m=A?he({plan:$}):void 0,l=(T==null?void 0:T.id)===$.id&&!(P!=null&&P.cancelOn);return e.createElement(Ee,{key:`plan-${Q}`,plan:$,discount:m,onSelectPlan:o,isActivePlan:l,trialDaysAsFeature:I,useShortFormPlanIntervals:v,isCustomPlan:$.availability!==ee.Public,isRecommendedPlan:se({plan:$,customFieldKey:f}),buttonLabel:ue({plan:$,customFieldKey:g}),showRecommendedPlanBadge:w,t:O,translatePlanName:L})}),(z==null?void 0:z.length)>0&&e.createElement(t.Divider,{borderColor:"border"}),(z==null?void 0:z.length)>0&&e.createElement(t.BlockStack,{gap:"300"},e.createElement(t.Box,{paddingInline:{xs:400,sm:0}},e.createElement(t.Text,{variant:"headingMd"},b.CustomPlans)),e.createElement(t.Grid,null,z.map(($,Q)=>{var l;const m=((l=$.discounts)==null?void 0:l.length)>0?$.discounts.reduce((r,s)=>r.discountedAmount<s.discountedAmount?r:s):null;return e.createElement(t.Grid.Cell,{key:`custom-plan-${Q}`,columnSpan:columnSpan()},e.createElement(t.Card,null,e.createElement(t.BlockStack,{gap:"400"},titleComponent({plan:$,discount:m}),pricingComponent({plan:$,discount:m}),ctaComponent({plan:$,discount:m}),featuresComponent({plan:$,discount:m}))))})))))))};var ve={exports:{}};(function(n,a){(function(o,i){n.exports=i()})(de,function(){var o={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(i,f,g){var u=f.prototype,I=u.format;g.en.formats=o,u.format=function(v){v===void 0&&(v="YYYY-MM-DDTHH:mm:ssZ");var k=this.$locale().formats,Y=function(w,A){return w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,L,h){var d=h&&h.toUpperCase();return L||A[h]||o[h]||A[d].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,T,C){return T||C.slice(1)})})}(v,k===void 0?{}:k);return I.call(this,Y)}}})})(ve);var Oe=ve.exports;const Fe=me(Oe);ce.extend(Fe);const oe=({orientation:n="horizontal",onShowPlans:a,onCancelPlan:o,onPlanCancelled:i=()=>{},cancelSubscription:f=async()=>{},i18n:g,subscription:u,refetch:I=async()=>{},t:v,translatePlanName:k=!0,hideSelectPlanButton:Y=!1})=>{var U;const[w,A]=e.useState(!1),[x,L]=e.useState(!1),h=v||(O=>O),d={...b,...g||{}};if(!u)return e.createElement(t.Card,null,e.createElement(t.BlockStack,{gap:"200"},e.createElement(t.Text,{variant:"headingMd"},h(d.Subscription)),e.createElement(t.Text,null,h(d.NotSubscribed)),e.createElement(t.InlineStack,{align:"end"},e.createElement(t.ButtonGroup,null,!Y&&e.createElement(t.Button,{variant:"primary",onClick:a,accessibilityLabel:h(d.ChangePlan)},h(d.SelectPlan))))));const{plan:P}=u,T=R(u.presentmentTotal,P.presentmentCurrencyCode),C=h(P.interval===M.Annual?d.Year:d.Month),B=n==="horizontal"?t.InlineGrid:t.BlockStack,y=(U=u==null?void 0:u.appliedDiscount)==null?void 0:U.discount,E=y?y.percentage?`${y.percentage}%`:R(y.presentmentAmount,P.presentmentCurrencyCode):null,z=y&&u.appliedDiscount.discountEndsAt&&ce().isAfter(ce(u.appliedDiscount.discountEndsAt)),W=P.usageCharges.length>0?{xs:1,md:3}:{xs:1,md:2};return e.createElement(t.Card,null,e.createElement(t.BlockStack,{gap:"200"},e.createElement(t.Text,{variant:"headingMd"},h(d.Subscription)),e.createElement(t.BlockStack,{gap:"400"},e.createElement(B,{columns:W,gap:"300"},e.createElement(t.BlockStack,null,e.createElement(t.Text,null,h(d.CurrentPlan)),e.createElement(t.Text,{tone:"subdued"},k?h(P.name):P.name),u.cancelOn&&e.createElement(t.Text,{tone:"subdued"},h("Canceled, active until {{ date }}").replace("{{ date }}",ce(u.cancelOn).format("LL")))),e.createElement(t.BlockStack,null,e.createElement(t.Text,null,h(d.Price)),e.createElement(t.BlockStack,null,e.createElement(t.Text,{tone:"subdued"},h(d.AmountPerInterval).replace("{{ amount }}",T).replace("{{ interval }}",C)),y&&!z&&e.createElement(t.Text,{tone:"success"},h(d.DiscountAmount).replace("{{ amount }}",E)),y&&z&&e.createElement(t.Text,{tone:"subdued",textDecorationLine:"line-through"},h(d.DiscountAmountExpired).replace("{{ amount }}",E)))),P.usageCharges.length>0&&e.createElement(t.BlockStack,null,e.createElement(t.Text,null,h(d.UsageCharges||"Usage charges")),P.usageCharges.map((O,D)=>e.createElement(t.Text,{key:`usage-charge-${D}`,tone:"subdued"},h(O.terms))))),e.createElement(t.InlineStack,{align:"end"},e.createElement(t.ButtonGroup,null,e.createElement(t.Button,{onClick:()=>{o?o():A(!0)},accessibilityLabel:h(d.CancelPlan),tone:"critical",disabled:!!u.cancelOn},h(d.CancelPlan)),!Y&&e.createElement(t.Button,{variant:"primary",onClick:a,accessibilityLabel:h(d.ChangePlan)},h(d.ChangePlan)))))),w&&e.createElement(t.Modal,{open:!0,onClose:()=>A(!1),title:h(d.CancelPlan),primaryAction:{content:h(d.CancelPlan),destructive:!0,loading:x,disabled:x,onAction:async()=>{L(!0),await f(),await I(),L(!1),A(!1),i()}},secondaryActions:[{content:h(d.Back),disabled:x,onAction:()=>A(!1)}]},e.createElement(t.Modal.Section,null,h(d.CancelConfirmation))))},ze=({backUrl:n="",pageWidth:a="narrow"})=>{const{cancelSubscription:o,i18n:i,subscription:f,refetch:g}=be(),u=()=>{console.log("Show plans. Navigate to the plans page, open a modal, etc.")};return e.createElement(t.Page,{title:i.Subscription,backAction:n?{content:i.Back,url:n}:void 0,fullWidth:a==="full",narrowWidth:a==="narrow"},e.createElement(t.BlockStack,{gap:"400"},e.createElement(oe,{onShowPlans:u,cancelSubscription:o,i18n:i,subscription:f,refetch:g}),e.createElement(t.Layout,null,e.createElement(t.Layout.Section,null,e.createElement(oe,{onShowPlans:u,cancelSubscription:o,i18n:i,subscription:f,refetch:g})),e.createElement(t.Layout.Section,{variant:"oneThird"},e.createElement(oe,{onShowPlans:u,cancelSubscription:o,i18n:i,subscription:f,refetch:g,orientation:"vertical"})))))};exports.BundleCard=De;exports.HighlightedPlanCard=ye;exports.HighlightedPlanCards=Ye;exports.HorizontalPlanCard=fe;exports.HorizontalPlanCards=Te;exports.PlanCardStack=re;exports.PlanCardType=K;exports.SubscriptionSummaryCard=oe;exports.SubscriptionSummaryPage=ze;exports.VerticalPlanCard=Ee;exports.VerticalPlanCards=He;
