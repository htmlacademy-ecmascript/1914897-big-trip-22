(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",a="hour",r="day",l="week",o="month",c="quarter",u="year",d="date",p="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+_(s,2,"0")+":"+_(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,o),a=n-i<0,r=t.clone().add(s+(a?-1:1),o);return+(-(s+(n-i)/(a?i-r:r-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:u,w:l,d:r,D:d,h:a,m:i,s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",y={};y[b]=h;var g="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[g])},M=function e(t,n,s){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();y[a]&&(i=a),n&&(y[a]=n,i=a);var r=t.split("-");if(!i&&r.length>1)return e(r[0])}else{var l=t.name;y[l]=t,i=l}return!s&&i&&(b=i),i||!s&&b},D=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},w=m;w.l=M,w.i=$,w.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function h(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var _=h.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(v);if(s){var i=s[2]-1||0,a=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===p)},_.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return D(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<D(e)},_.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),v=function(e,t){var s=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?s:s.endOf(r)},f=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,_=this.$M,m=this.$D,b="set"+(this.$u?"UTC":"");switch(p){case u:return c?v(1,0):v(31,11);case o:return c?v(1,_):v(0,_+1);case l:var y=this.$locale().weekStart||0,g=(h<y?h+7:h)-y;return v(c?m-g:m+(6-g),_);case r:case d:return f(b+"Hours",0);case a:return f(b+"Minutes",1);case i:return f(b+"Seconds",2);case s:return f(b+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var l,c=w.p(e),p="set"+(this.$u?"UTC":""),v=(l={},l[r]=p+"Date",l[d]=p+"Date",l[o]=p+"Month",l[u]=p+"FullYear",l[a]=p+"Hours",l[i]=p+"Minutes",l[s]=p+"Seconds",l[n]=p+"Milliseconds",l)[c],f=c===r?this.$D+(t-this.$W):t;if(c===o||c===u){var h=this.clone().set(d,1);h.$d[v](f),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else v&&this.$d[v](f);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[w.p(e)]()},_.add=function(n,c){var d,p=this;n=Number(n);var v=w.p(c),f=function(e){var t=D(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(v===o)return this.set(o,this.$M+n);if(v===u)return this.set(u,this.$y+n);if(v===r)return f(1);if(v===l)return f(7);var h=(d={},d[i]=e,d[a]=t,d[s]=1e3,d)[v]||1,_=this.$d.getTime()+n*h;return w.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,r=this.$m,l=this.$M,o=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,s))||i[n].slice(0,a)},v=function(e){return w.s(a%12||12,e,"0")},h=u||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(f,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return l+1;case"MM":return w.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return v(1);case"hh":return v(2);case"a":return h(a,r,!0);case"A":return h(a,r,!1);case"m":return String(r);case"mm":return w.s(r,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,p){var v,f=this,h=w.p(d),_=D(n),m=(_.utcOffset()-this.utcOffset())*e,b=this-_,y=function(){return w.m(f,_)};switch(h){case u:v=y()/12;break;case o:v=y();break;case c:v=y()/3;break;case l:v=(b-m)/6048e5;break;case r:v=(b-m)/864e5;break;case a:v=b/t;break;case i:v=b/e;break;case s:v=b/1e3;break;default:v=b}return p?v:w.a(v)},_.daysInMonth=function(){return this.endOf(o).$D},_.$locale=function(){return y[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=M(e,t,!0);return s&&(n.$L=s),n},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),k=S.prototype;return D.prototype=k,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",r],["$M",o],["$y",u],["$D",d]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,S,D),e.$i=!0),D},D.locale=M,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=y[b],D.Ls=y,D.p={},D}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,s=6e4,i=36e5,a=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=31536e6,o=2628e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:l,months:o,days:a,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof b},p=function(e,t,n){return new b(e,n,t.$l)},v=function(e){return t.p(e)+"s"},f=function(e){return e<0},h=function(e){return f(e)?Math.ceil(e):Math.floor(e)},_=function(e){return Math.abs(e)},m=function(e,t){return e?f(e)?{negative:!0,format:""+_(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},b=function(){function f(e,t,n){var s=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return p(e*u[v(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[v(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(c);if(i){var a=i.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=a[0],this.$d.months=a[1],this.$d.weeks=a[2],this.$d.days=a[3],this.$d.hours=a[4],this.$d.minutes=a[5],this.$d.seconds=a[6],this.calMilliseconds(),this}}return this}var _=f.prototype;return _.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*u[n]}),0)},_.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=h(e/l),e%=l,this.$d.months=h(e/o),e%=o,this.$d.days=h(e/a),e%=a,this.$d.hours=h(e/i),e%=i,this.$d.minutes=h(e/s),e%=s,this.$d.seconds=h(e/n),e%=n,this.$d.milliseconds=e},_.toISOString=function(){var e=m(this.$d.years,"Y"),t=m(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=m(n,"D"),i=m(this.$d.hours,"H"),a=m(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var l=m(r,"S"),o=e.negative||t.negative||s.negative||i.negative||a.negative||l.negative,c=i.format||a.format||l.format?"T":"",u=(o?"-":"")+"P"+e.format+t.format+s.format+c+i.format+a.format+l.format;return"P"===u||"-P"===u?"P0D":u},_.toJSON=function(){return this.toISOString()},_.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(r,(function(e,t){return t||String(s[e])}))},_.as=function(e){return this.$ms/u[v(e)]},_.get=function(e){var t=this.$ms,n=v(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?h(t/u[n]):this.$d[n],t||0},_.add=function(e,t,n){var s;return s=t?e*u[v(t)]:d(e)?e.$ms:p(e,this).$ms,p(this.$ms+s*(n?-1:1),this)},_.subtract=function(e,t){return this.add(e,t,!0)},_.locale=function(e){var t=this.clone();return t.$l=e,t},_.clone=function(){return p(this.$ms,this)},_.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},f}(),y=function(e,t,n){return e.add(t.years()*n,"y").add(t.months()*n,"M").add(t.days()*n,"d").add(t.hours()*n,"h").add(t.minutes()*n,"m").add(t.seconds()*n,"s").add(t.milliseconds()*n,"ms")};return function(n,s,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return p(e,{$l:n},t)},i.isDuration=d;var a=s.prototype.add,r=s.prototype.subtract;s.prototype.add=function(e,t){return d(e)?y(this,e,1):a.bind(this)(e,t)},s.prototype.subtract=function(e,t){return d(e)?y(this,e,-1):r.bind(this)(e,t)}}}()}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}const s=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],i="MMM DD",a="HH:mm",r="DD/MM/YY HH:mm",l="DD[D]",o="HH[H]",c="mm[M]";var u=n(484),d=n.n(u),p=n(646),v=n.n(p);function f(e){return Math.floor(Math.random()*e)}function h(e,t){if(e)return d()(e).format(t)}d().extend(v());class _{constructor(e,t,n){this.point=e,this.destinations=t,this.offers=n}getTemplate(){return function(e,t,n){const{id:i=0,basePrice:a="",dateFrom:l=new Date,dateTo:o=new Date,offers:c=[],type:u=s[0]}=e,d=[...n.find((e=>e.type===u)).offers],p=t.find((t=>t.id===e.destination));return`\n  <li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-${i}">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${u}.png" alt="Event type icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${i}" type="checkbox">\n\n      <div class="event__type-list">\n        <fieldset class="event__type-group">\n          <legend class="visually-hidden">Event type</legend>\n          ${function(e,t){return s.map((n=>`<div class="event__type-item">\n      <input id="event-type-${n}-${t}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${n}" ${n===e?"checked":""}>\n        <label class="event__type-label  event__type-label--${n}" for="event-type-${n}-${t}">${n}</label>\n</div>`)).join("")}(u,i)}\n        </fieldset>\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-${i}">\n        ${u}\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-${i}" type="text" name="event-destination" value="${p?p.name:""}" list="destination-list-${i}">\n      <datalist id="destination-list-${i}">\n        ${t.map((e=>`<option value = "${e.name}"></option>`)).join("")}\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${h(l,r)}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${h(o,r)}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-${i}">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-${i}" type="text" name="event-price" value="${a}">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">${0===i?"Cancel":"Delete"}</button>\n    < ${0!==i?'<button class="event__rollup-btn" type="button">\n    <span class="visually-hidden">Open event</span>\n  </button>':""}\n  </header>\n  <section class="event__details">\n  ${d.length?function(e,t){return`<section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n        ${function(e,t){return e.map((e=>{const n=t.includes(e.id)?"checked":"";return`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${e.id}" type="checkbox" name="event-offer-luggage" ${n}>\n        <label class="event__offer-label" for="event-offer-luggage-${e.id}">\n          <span class="event__offer-title">${e.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>`})).join("")}(e,t)}\n      </div>\n    </section>`}(d,c):""}\n  ${p?function(e){return`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${e.description}</p>\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${e.pictures.map((e=>`<img class="event__photo" src="${e.src}" alt="${e.description}">`))}\n        </div>\n      </div>\n    </section>`}(p):""}\n  </section>\n</form>\n</li>`}(this.point,this.destinations,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class m{getTemplate(){return'\n  <li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n\n            <div class="event__type-item">\n              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          Flight\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n        <datalist id="destination-list-1">\n          <option value="Amsterdam"></option>\n          <option value="Geneva"></option>\n          <option value="Chamonix"></option>\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Cancel</button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n            <label class="event__offer-label" for="event-offer-luggage-1">\n              <span class="event__offer-title">Add luggage</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">30</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n            <label class="event__offer-label" for="event-offer-comfort-1">\n              <span class="event__offer-title">Switch to comfort class</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">100</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n            <label class="event__offer-label" for="event-offer-meal-1">\n              <span class="event__offer-title">Add meal</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">15</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n            <label class="event__offer-label" for="event-offer-seats-1">\n              <span class="event__offer-title">Choose seats</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">5</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n            <label class="event__offer-label" for="event-offer-train-1">\n              <span class="event__offer-title">Travel by train</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">40</span>\n            </label>\n          </div>\n        </div>\n      </section>\n\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n        <div class="event__photos-container">\n          <div class="event__photos-tape">\n            <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n          </div>\n        </div>\n      </section>\n    </section>\n  </form>\n</li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{getTemplate(){return'\n  <ul class="trip-events__list">\n  </ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class y{constructor(e,t,n){this.point=e,this.destinations=t,this.offers=n}getTemplate(){return function(e,t,n){const{basePrice:s,isFavorite:r,dateFrom:u,dateTo:p,type:v}=e,f=n.find((t=>t.type===e.type)).offers.filter((t=>e.offers.includes(t.id))),_=t.find((t=>t.id===e.destination));return`\n  <li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime=${u}>${h(u,i)}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${v.toLowerCase()}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${v} ${_.name}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime=${u}>${h(u,a)}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime=${p}>${h(p,a)}</time>\n                  </p>\n                  <p class="event__duration">${function(e,t){const n=function(e,t){return d()(t).diff(d()(e))}(e,t),s=function(e){return d().duration(e)}(n),i=(s.days()>0?`${l} `:"")+(s.hours()>0?`${o} `:"")+c;return s.format(i)}(u,p)}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${s}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  ${f.map((e=>function({title:e,price:t}){return`<li class="event__offer">\n        <span class="event__offer-title">${e}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t}</span>\n    </li>`}(e))).join("")}\n                  </ul>\n                  <button class="event__favorite-btn ${r?"event__favorite-btn--active":""} type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.point,this.destinations,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class g{getTemplate(){return'\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const $=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:f(1500),dateFrom:"2019-03-19T00:00",dateTo:"2019-03-20T00:00",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e04",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31","b4c3e4e6-9053-42ce-b747-e281314bca31","b4c3e4e6-9053-42ce-b747-e281314baa35"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2809c",basePrice:f(1500),dateFrom:"2019-03-19T10:30",dateTo:"2019-03-20T11:00",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e05",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281313baa31"],type:"ship"},{id:"f4b62099-293f-4c3d-a702-94eec4a2806c",basePrice:f(1500),dateFrom:"2019-03-19T12:25",dateTo:"2019-03-20T13:35",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e06",isFavorite:!1,offers:[],type:"drive"}],M=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:120},{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"choose model of car",price:100}]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Add meal",price:20},{id:"b4c3e4e6-9053-42ce-b747-e281314baa36",title:"Choose seats",price:120}]},{type:"drive",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa37",title:"Rent a car",price:200}]},{type:"sightseeing ",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa37",title:"Book tickets",price:40},{id:"b4c3e4e6-9053-42ce-b747-e281314baa39",title:"Lunch in city",price:30}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa40",title:"choose seats",price:50}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"add meal",price:80}]},{type:"ship",offers:[]},{type:"restaraunt",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa45",title:"book a table",price:40}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa48",title:"carry the luggage",price:75}]}],D=[{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e04",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Chamonix parliament building"}]},{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e05",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet augue in eros molestie vestibulum ac consequat risus. Sed cursus elementum scelerisque. Maecenas vitae faucibus nunc, ut dapibus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam posuere semper sodales. Morbi tincidunt euismod dolor, nec faucibus ante. Proin hendrerit pulvinar est, et varius ipsum egestas at.",name:"Moscow",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163318",description:"lorem"}]},{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e06",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet augue in eros molestie vestibulum ac consequat risus. Sed cursus elementum scelerisque. Maecenas vitae faucibus nunc, ut dapibus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam posuere semper sodales. Morbi tincidunt euismod dolor, nec faucibus ante. Proin hendrerit pulvinar est, et varius ipsum egestas at.",name:"Paris",pictures:[]}],w=document.querySelector(".trip-main"),S=document.querySelector(".trip-controls__filters"),k=document.querySelector(".trip-events"),x=new class{constructor(){this.points=[],this.offers=[],this.destinations=[]}init(){this.points=$,this.offers=M,this.destinations=D}getPoints(){return this.points}getOffers(){return this.offers}getDestinations(){return this.destinations}};x.init();const T=new class{sortComponent=new g;createFormComponent=new m;listComponent=new b;constructor({container:e,pointModel:t}){this.container=e,this.pointModel=t}init(){const e=this.pointModel.getPoints(),n=this.pointModel.getDestinations(),s=this.pointModel.getOffers();t(this.sortComponent,this.container),t(this.listComponent,this.container),t(new _(e,n,s),this.listComponent.getElement());for(const i of e)t(new y(i,n,s),this.listComponent.getElement())}}({container:k,pointModel:x});t(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n    </div>\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},w,"afterbegin"),t(new class{getTemplate(){return'\n  <form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>\n            </div>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},S),T.init()})()})();
//# sourceMappingURL=bundle.5503d599b993a9cf867e.js.map