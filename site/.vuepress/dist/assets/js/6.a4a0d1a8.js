(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{142:function(t,e,r){},143:function(t,e,r){"use strict";var i=r(0),n=r(61),a=r(13),s=r(2),o=r(29),c=[],l=c.sort,u=s((function(){c.sort(void 0)})),f=s((function(){c.sort(null)})),d=o("sort");i({target:"Array",proto:!0,forced:u||!f||!d},{sort:function(t){return void 0===t?l.call(a(this)):l.call(a(this),n(t))}})},144:function(t,e,r){var i=r(12),n=Date.prototype,a=n.toString,s=n.getTime;new Date(NaN)+""!="Invalid Date"&&i(n,"toString",(function(){var t=s.call(this);return t==t?a.call(this):"Invalid Date"}))},146:function(t,e,r){"use strict";var i=r(142);r.n(i).a},147:function(t,e,r){},149:function(t,e,r){"use strict";r.r(e);var i={props:["title","description","image"],computed:{}},n=(r(146),r(28)),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"title-container"},[t.image?r("img",{attrs:{src:t.$withBase("/"+t.image),alt:"champi"}}):t._e(),t._v(" "),r("h2",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),r("div",{staticClass:"body"},[t._v("\n    "+t._s(t.description)+"\n  ")])])}),[],!1,null,"7cc1caca",null);e.default=a.exports},175:function(t,e,r){"use strict";var i=r(147);r.n(i).a},194:function(t,e,r){"use strict";r.r(e);r(16),r(31),r(143),r(144),r(97),r(149);var i={computed:{species:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/cultivation/species")&&!t.frontmatter.cultivation_index})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return t.length<3?t:t.slice(0,3)},howtos:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/cultivation/howtodo")&&!t.frontmatter.cultivation_index})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return t.length<3?t:t.slice(0,3)},blogs:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/blog/")&&!t.frontmatter.blog_index})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return t.length<3?t:t.slice(0,3)}}},n=(r(175),r(28)),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",[t._m(0),t._v(" "),r("div",{staticClass:"stack-card"},t._l(t.blogs,(function(t,e){return r("div",{class:"one-card-"+e},[r("router-link",{attrs:{to:t.path}},[r("InfoCard",{attrs:{description:t.frontmatter.description,title:t.frontmatter.title}})],1)],1)})),0)]),t._v(" "),r("section",[t._m(1),t._v(" "),r("div",{staticClass:"stack-card"},t._l(t.howtos,(function(t,e){return r("div",{class:"one-card-"+e},[r("router-link",{attrs:{to:t.path}},[r("InfoCard",{attrs:{description:t.frontmatter.description,title:t.frontmatter.title}})],1)],1)})),0)]),t._v(" "),r("section",[t._m(2),t._v(" "),r("div",{staticClass:"stack-card"},t._l(t.species,(function(t){return r("div",[r("router-link",{attrs:{to:t.path}},[r("InfoCard",{attrs:{description:t.frontmatter.description,title:t.frontmatter.title,image:t.frontmatter.image}})],1)],1)})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-left"},[e("h3",[e("strong",[this._v("Read articles about mushroom !")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-right"},[e("h3",[e("strong",[this._v("Discover cultivation techniques")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-left"},[e("h3",[e("strong",[this._v("Discover species growth parameters")])])])}],!1,null,"6f50f74b",null);e.default=a.exports}}]);