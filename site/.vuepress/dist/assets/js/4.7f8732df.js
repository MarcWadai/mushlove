(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,9,10],{142:function(t,e,n){},143:function(t,e,n){"use strict";var r=n(0),i=n(61),s=n(13),a=n(2),o=n(29),c=[],l=c.sort,u=a((function(){c.sort(void 0)})),f=a((function(){c.sort(null)})),v=o("sort");r({target:"Array",proto:!0,forced:u||!f||!v},{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),i(t))}})},144:function(t,e,n){var r=n(12),i=Date.prototype,s=i.toString,a=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var t=a.call(this);return t==t?s.call(this):"Invalid Date"}))},146:function(t,e,n){"use strict";var r=n(142);n.n(r).a},147:function(t,e,n){},148:function(t,e,n){},149:function(t,e,n){"use strict";n.r(e);var r={props:["title","description","image"],computed:{}},i=(n(146),n(28)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"title-container"},[t.image?n("img",{attrs:{src:t.$withBase("/"+t.image),alt:"champi"}}):t._e(),t._v(" "),n("h2",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"body"},[t._v("\n    "+t._s(t.description)+"\n  ")])])}),[],!1,null,"7cc1caca",null);e.default=s.exports},175:function(t,e,n){"use strict";var r=n(147);n.n(r).a},176:function(t,e,n){"use strict";var r=n(148);n.n(r).a},177:function(t,e,n){},193:function(t,e,n){"use strict";n.r(e);var r={computed:{}},i=(n(176),n(28)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n\n\n    I am a section newsletter\n\n")])}),[],!1,null,"39eb38ec",null);e.default=s.exports},194:function(t,e,n){"use strict";n.r(e);n(16),n(31),n(143),n(144),n(97),n(149);var r={computed:{species:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/cultivation/species")&&!t.frontmatter.cultivation_index})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return t.length<3?t:t.slice(0,3)},howtos:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/cultivation/howtodo")&&!t.frontmatter.cultivation_index})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return t.length<3?t:t.slice(0,3)},blogs:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/blog/")&&!t.frontmatter.blog_index})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));return t.length<3?t:t.slice(0,3)}}},i=(n(175),n(28)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[t._m(0),t._v(" "),n("div",{staticClass:"stack-card"},t._l(t.blogs,(function(t,e){return n("div",{class:"one-card-"+e},[n("router-link",{attrs:{to:t.path}},[n("InfoCard",{attrs:{description:t.frontmatter.description,title:t.frontmatter.title}})],1)],1)})),0)]),t._v(" "),n("section",[t._m(1),t._v(" "),n("div",{staticClass:"stack-card"},t._l(t.howtos,(function(t,e){return n("div",{class:"one-card-"+e},[n("router-link",{attrs:{to:t.path}},[n("InfoCard",{attrs:{description:t.frontmatter.description,title:t.frontmatter.title}})],1)],1)})),0)]),t._v(" "),n("section",[t._m(2),t._v(" "),n("div",{staticClass:"stack-card"},t._l(t.species,(function(t){return n("div",[n("router-link",{attrs:{to:t.path}},[n("InfoCard",{attrs:{description:t.frontmatter.description,title:t.frontmatter.title,image:t.frontmatter.image}})],1)],1)})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-left"},[e("h3",[e("strong",[this._v("Read articles about mushroom !")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-right"},[e("h3",[e("strong",[this._v("Discover cultivation techniques")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-left"},[e("h3",[e("strong",[this._v("Discover species growth parameters")])])])}],!1,null,"6f50f74b",null);e.default=s.exports},263:function(t,e,n){"use strict";var r=n(177);n.n(r).a},270:function(t,e,n){"use strict";n.r(e);n(194),n(193);var r={computed:{}},i=(n(263),n(28)),s=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home_section"},[e("SectionInfo")],1)}),[],!1,null,"48921230",null);e.default=s.exports}}]);