(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(t,n,r){"use strict";var e=r(0),i=r(61),s=r(13),a=r(2),o=r(29),c=[],l=c.sort,u=a((function(){c.sort(void 0)})),f=a((function(){c.sort(null)})),v=o("sort");e({target:"Array",proto:!0,forced:u||!f||!v},{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),i(t))}})},144:function(t,n,r){var e=r(12),i=Date.prototype,s=i.toString,a=i.getTime;new Date(NaN)+""!="Invalid Date"&&e(i,"toString",(function(){var t=a.call(this);return t==t?s.call(this):"Invalid Date"}))},178:function(t,n,r){},264:function(t,n,r){"use strict";var e=r(178);r.n(e).a},268:function(t,n,r){"use strict";r.r(n);r(16),r(143),r(144),r(97);var e={computed:{books:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/resources/books")&&!t.frontmatter.list_resources})).sort((function(t,n){return new Date(n.frontmatter.date)-new Date(t.frontmatter.date)}))}}},i=(r(264),r(28)),s=Object(i.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",t._l(t.books,(function(n){return r("div",[r("div",{staticClass:"line"},[r("div",{staticClass:"line_img"},[r("img",{attrs:{src:n.frontmatter.image?t.$withBase("/"+n.frontmatter.image):t.$withBase("/champ.png"),alt:"champi"}})]),t._v(" "),r("div",{staticClass:"line_text"},[r("div",{staticClass:"line_title"},[r("span",[r("strong",[t._v(t._s(n.frontmatter.title))]),t._v("\n            - "+t._s(n.frontmatter.author)+"\n          ")])]),t._v(" "),r("div",{staticClass:"line_description"},[t._v(t._s(n.frontmatter.description))])])])])})),0)}),[],!1,null,"44f63674",null);n.default=s.exports}}]);