!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["sidebarmenu"]=e():t["sidebarmenu"]=e()}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=6)}([function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});var s={data:function(){return{active:!1,childActive:!1,itemShow:!1}},created:function(){var t=this;this.initActiveState(),this.initShowState(),this.$router||window.addEventListener("hashchange",function(){t.initActiveState()})},methods:{isLinkActive:function(t){return this.matchRoute(t.href)||this.isAliasActive(t)},isChildActive:function(t){var e=this;return t.some(function(t){return e.isLinkActive(t)||!!t.child&&e.isChildActive(t.child)})},isAliasActive:function(t){var e=this;return!!t.alias&&(Array.isArray(t.alias)?t.alias.some(function(t){return e.matchRoute(t)}):this.matchRoute(t.alias))},matchRoute:function(t){return this.$route?t===this.$route.fullPath:t===window.location.pathname+window.location.search+window.location.hash},clickEvent:function(t,e){if(this.emitItemClick(t,this.item),(this.item.href||this.item.child&&!e)&&!this.item.disabled){if(!e&&this.isCollapsed&&this.firstItem){var i=this.item.child;this.$parent.$emit("touchClickItem",i)}var s=this.firstItem&&this.showOneChild&&!this.showChild;if(!e&&this.item.child){if(this.isRouterLink&&!this.active)return void(s?this.setActiveShow(!0,this._uid):this.itemShow=!0);this.item.href||t.preventDefault(),s?this.activeShow.uid===this._uid?this.setActiveShow(!1):this.setActiveShow(!0,this._uid):this.itemShow=!this.itemShow}else!e&&s&&this.emitActiveShow(null)}else t.preventDefault()},setActiveShow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.emitActiveShow(t?e:null),this.itemShow=t},initActiveState:function(){this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)},initShowState:function(){this.item&&this.item.child&&(this.showChild?this.itemShow=!0:(this.itemShow=this.isLinkActive(this.item)||this.isChildActive(this.item.child),this.showOneChild&&!this.showChild&&this.firstItem&&(this.active||this.childActive)&&this.emitActiveShow(this._uid)))}},computed:{isRouterLink:function(){return this.$router&&this.item&&void 0!==this.item.href},show:function(){return!(!this.item||!this.item.child)&&(this.firstItem&&this.showOneChild&&!this.showChild?!!this.activeShow.uid&&this._uid===this.activeShow.uid:this.itemShow)}},watch:{$route:function(){this.initActiveState()}},inject:["showChild","showOneChild","emitActiveShow","activeShow","emitItemClick","rtl"]},n={methods:{expandEnter:function(t){t.style.height=t.scrollHeight+"px"},expandAfterEnter:function(t){t.style.height="auto"},expandBeforeLeave:function(t){this.isCollapsed?t.style.display="none":t.style.height=t.scrollHeight+"px"}}}},function(t,e,i){"use strict";function s(t,e,i,s,n,o,a,l){var c,m="function"==typeof t?t.options:t;if(e&&(m.render=e,m.staticRenderFns=i,m._compiled=!0),s&&(m.functional=!0),o&&(m._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},m._ssrRegister=c):n&&(c=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(m.functional){m._injectStyles=c;var r=m.render;m.render=function(t,e){return c.call(e),r(t,e)}}else{var h=m.beforeCreate;m.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:m}}i.d(e,"a",function(){return s})},function(t,e,i){"use strict";i.r(e);var s=i(4),n=i(0),o={components:{SubItem:s.a},mixins:[n.b,n.a],props:{item:{type:Object,required:!0},firstItem:{type:Boolean,default:!1},isCollapsed:{type:Boolean}},methods:{mouseEnter:function(t){this.isCollapsed&&this.firstItem&&this.$parent.$emit("mouseEnterItem",{item:this.item,pos:t.currentTarget.getBoundingClientRect().top-this.$parent.$el.getBoundingClientRect().top,height:this.$el.offsetHeight})}}},a=i(1),l=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"first-item":t.firstItem},{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}],on:{mouseenter:function(e){t.mouseEnter(e)}}},[t.isRouterLink?[i("router-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"router-link",t.item.attributes,!1),[t.item.icon?["string"==typeof t.item.icon||t.item.icon instanceof String?i("i",{staticClass:"vsm-icon",class:t.item.icon}):i(t.item.icon.element?t.item.icon.element:"i",t._b({tag:"component",staticClass:"vsm-icon",class:t.item.icon.class},"component",t.item.icon.attributes,!1))]:t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i(t.item.badge.element?t.item.badge.element:"span",t._b({tag:"component",staticClass:"vsm-badge",class:t.item.badge.class,style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"component",t.item.badge.attributes,!1),[t._v("\n          "+t._s(t.item.badge.text)+"\n        ")]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]:[i("a",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:t.clickEvent}},"a",t.item.attributes,!1),[t.item.icon?["string"==typeof t.item.icon||t.item.icon instanceof String?i("i",{staticClass:"vsm-icon",class:t.item.icon}):i(t.item.icon.element?t.item.icon.element:"i",t._b({tag:"component",staticClass:"vsm-icon",class:t.item.icon.class},"component",t.item.icon.attributes,!1))]:t._e(),t._v(" "),t.isCollapsed?t._e():[t.item.badge?i(t.item.badge.element?t.item.badge.element:"span",t._b({tag:"component",staticClass:"vsm-badge",class:t.item.badge.class,style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"component",t.item.badge.attributes,!1),[t._v(t._s(t.item.badge.text))]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)],t._v(" "),t.item.child?[t.isCollapsed?t._e():[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})}),1)]):t._e()])]]:t._e()],2)},[],!1,null,null,null);l.options.__file="Item.vue";e.default=l.exports},function(t,e,i){},function(t,e,i){"use strict";var s=i(2),n=i(0),o={components:{Item:s.default},mixins:[n.b,n.a],props:{item:{type:Object,required:!0}},beforeCreate:function(){this.$options.components.Item=i(2).default}},a=i(1),l=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"open-item":t.show},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[i("router-link",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){return t.clickEvent(e)}}},"router-link",t.item.attributes,!1),[t.item.icon?["string"==typeof t.item.icon||t.item.icon instanceof String?i("i",{staticClass:"vsm-icon",class:t.item.icon}):i(t.item.icon.element?t.item.icon.element:"i",t._b({tag:"component",staticClass:"vsm-icon",class:t.item.icon.class},"component",t.item.icon.attributes,!1))]:t._e(),t._v(" "),t.item.badge?i(t.item.badge.element?t.item.badge.element:"span",t._b({tag:"component",staticClass:"vsm-badge",class:t.item.badge.class,style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"component",t.item.badge.attributes,!1),[t._v("\n        "+t._s(t.item.badge.text)+"\n      ")]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()],2)]:[i("a",t._b({staticClass:"vsm-link",class:t.item.class,attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:t.clickEvent}},"a",t.item.attributes,!1),[t.item.icon?["string"==typeof t.item.icon||t.item.icon instanceof String?i("i",{staticClass:"vsm-icon",class:t.item.icon}):i(t.item.icon.element?t.item.icon.element:"i",t._b({tag:"component",staticClass:"vsm-icon",class:t.item.icon.class},"component",t.item.icon.attributes,!1))]:t._e(),t._v(" "),t.item.badge?i(t.item.badge.element?t.item.badge.element:"span",t._b({tag:"component",staticClass:"vsm-badge",class:t.item.badge.class,style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"component",t.item.badge.attributes,!1),[t._v("\n        "+t._s(t.item.badge.text)+"\n      ")]):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()],2)],t._v(" "),t.item.child?[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.show?i("div",{staticClass:"vsm-dropdown"},[i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("item",{key:e,attrs:{item:t}})}),1)]):t._e()])]:t._e()],2)},[],!1,null,null,null);l.options.__file="SubItem.vue";e.a=l.exports},function(t,e,i){"use strict";var s=i(3);i.n(s).a},function(t,e,i){"use strict";i.r(e);var s=i(2),n=i(4),o=i(0),a={mixins:[o.b],props:{item:{type:Object,default:null}},data:function(){return{firstItem:!0}},watch:{item:function(){this.active=!(!this.item||!this.item.href)&&this.isLinkActive(this.item),this.childActive=!(!this.item||!this.item.child)&&this.isChildActive(this.item.child)}}},l=i(1),c=Object(l.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("div",{staticClass:"vsm-item mobile-item",class:[{"open-item":t.item.child},{"active-item":t.active},{"parent-active-item":t.childActive}]},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href,disabled:t.item.disabled,event:t.item.disabled?"":"click"},nativeOn:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?["string"==typeof t.item.icon||t.item.icon instanceof String?i("i",{staticClass:"vsm-icon",class:t.item.icon}):i(t.item.icon.element?t.item.icon.element:"i",t._b({tag:"component",staticClass:"vsm-icon",class:t.item.icon.class},"component",t.item.icon.attributes,!1))]:t._e(),t._v(" "),t.item.badge?i(t.item.badge.element?t.item.badge.element:"span",t._b({tag:"component",staticClass:"vsm-badge",class:t.item.badge.class,style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"component",t.item.badge.attributes,!1),[t._v("\n        "+t._s(t.item.badge.text)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.item.title)+"\n      "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()],2)]:[i("a",{staticClass:"vsm-link",attrs:{href:t.item.href?t.item.href:"#",disabled:t.item.disabled},on:{click:function(e){t.clickEvent(e,!0)}}},[t.item.icon?["string"==typeof t.item.icon||t.item.icon instanceof String?i("i",{staticClass:"vsm-icon",class:t.item.icon}):i(t.item.icon.element?t.item.icon.element:"i",t._b({tag:"component",staticClass:"vsm-icon",class:t.item.icon.class},"component",t.item.icon.attributes,!1))]:t._e(),t._v(" "),t.item.badge?i(t.item.badge.element?t.item.badge.element:"span",t._b({tag:"component",staticClass:"vsm-badge",class:t.item.badge.class,style:[t.rtl?t.item.child?{"margin-left":"30px"}:"":t.item.child?{"margin-right":"30px"}:""]},"component",t.item.badge.attributes,!1),[t._v("\n        "+t._s(t.item.badge.text)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.item.title)+"\n      "),t.item.child?i("i",{staticClass:"vsm-arrow open-arrow"}):t._e()],2)]],2):t._e()},[],!1,null,null,null);c.options.__file="MobileItem.vue";var m=c.exports,r={name:"SidebarMenu",components:{Item:s.default,SubItem:n.a,MobileItem:m},mixins:[o.a],props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"350px"},widthCollapsed:{type:String,default:"50px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1}},data:function(){return{isCollapsed:this.collapsed,mobileItem:null,mobileItemPos:0,mobileItemHeight:0,closeTimeout:null,activeShow:null,sidebarHeight:0}},computed:{sidebarWidth:function(){return this.isCollapsed?this.widthCollapsed:this.width}},watch:{collapsed:function(t){var e=this;this.isCollapsed=t,this.$nextTick(function(){e.initSidebarHeight()})}},created:function(){var t=this;this.$on("mouseEnterItem",function(e){t.mobileItem=null,t.$nextTick(function(){t.mobileItem=e.item,t.mobileItemPos=e.pos,t.mobileItemHeight=e.height})}),this.$on("touchClickItem",function(e){e?clearTimeout(t.closeTimeout):(t.closeTimeout&&clearTimeout(t.closeTimeout),t.closeTimeout=setTimeout(function(){t.mouseLeave()},600))})},mounted:function(){this.initSidebarHeight()},methods:{mouseLeave:function(){this.mobileItem=null},toggleCollapse:function(){var t=this;this.isCollapsed=!this.isCollapsed,this.$nextTick(function(){t.initSidebarHeight()}),this.$emit("collapse",this.isCollapsed)},onActiveShow:function(t){this.activeShow=t},onItemClick:function(t,e){this.$emit("itemClick",t,e)},initSidebarHeight:function(){this.sidebarHeight=this.$el.offsetHeight}},provide:function(){var t=this,e={};return Object.defineProperty(e,"uid",{enumerable:!0,get:function(){return t.activeShow}}),{showChild:this.showChild,showOneChild:this.showOneChild,emitActiveShow:this.onActiveShow,activeShow:e,emitItemClick:this.onItemClick,rtl:this.rtl}}},h=(i(5),Object(l.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-sidebar-menu",class:[t.isCollapsed?"vsm-collapsed":"vsm-default",t.theme,t.rtl?"rtl":""],style:{width:t.sidebarWidth},on:{mouseleave:t.mouseLeave}},[i("div",{staticClass:"vsm-list"},[t._l(t.menu,function(e,s){return[e.header?[!e.visibleOnCollapse&&t.isCollapsed||!e.component?e.visibleOnCollapse||!t.isCollapsed?[i("div",t._b({key:s,staticClass:"vsm-header",class:e.class},"div",e.attributes,!1),[t._v("\n            "+t._s(e.title)+"\n          ")])]:t._e():[i(e.component,{key:s,tag:"component"})]]:i("item",{key:s,attrs:{item:e,"first-item":!0,"is-collapsed":t.isCollapsed}})]})],2),t._v(" "),t.isCollapsed?i("div",{style:[{position:"absolute"},{top:t.mobileItemPos+"px"},t.rtl?{right:"0px"}:{left:"0px"},{"z-index":30},{width:t.width}]},[i("mobile-item",{attrs:{item:t.mobileItem}}),t._v(" "),i("transition",{attrs:{name:"slide-animation"}},[t.mobileItem?i("div",{staticClass:"vsm-mobile-bg",style:[{position:"absolute"},{left:"0px"},{right:"0px"},{top:"0px"},{height:t.mobileItemHeight+"px"}]}):t._e()]),t._v(" "),i("div",{staticClass:"vsm-dropdown",style:[{position:"absolute"},{top:t.mobileItemHeight+"px"},{left:t.rtl?"0px":t.sidebarWidth},{right:t.rtl?t.sidebarWidth:"0px"},{"max-height":"calc("+t.sidebarHeight+"px - "+(t.mobileItemPos+t.mobileItemHeight)+"px)"},{"overflow-y":"auto"}]},[i("transition",{attrs:{name:"expand"},on:{enter:t.expandEnter,afterEnter:t.expandAfterEnter,beforeLeave:t.expandBeforeLeave}},[t.mobileItem&&t.mobileItem.child?i("div",{staticClass:"vsm-list"},t._l(t.mobileItem.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})}),1):t._e()])],1)],1):t._e(),t._v(" "),i("button",{staticClass:"collapse-btn",on:{click:t.toggleCollapse}})])},[],!1,null,null,null));h.options.__file="SidebarMenu.vue";var d=h.exports;i.d(e,"SidebarMenu",function(){return d});e.default={install:function(t){t.component("sidebar-menu",d)}}}])});
//# sourceMappingURL=sidebarmenu.js.map

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
};

Vue.use(sidebarmenu.default);

var vm =  new Vue({
  methods: {
    onCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
    }
  },
  data: {
    themes: ['', 'white-theme'],
    selectedTheme: 'white-theme',
    collapsed: false,
    menu: [
               {
    header: true,
    title: 'Example'
  },
  {
    title: 'Badge',
    icon: 'fa fa-cog',
    badge: {
      text: 'new',
      class: 'default-badge'
    }
  },
  {
    href: '#page',
    title: 'Dropdown Page',
    icon: 'fa fa-list-ul',
    child: [
      {
        href: '#sub-page-1',
        title: 'Sub Page 01',
        icon: 'fa fa-file-alt'
      },
      {
        href: '#sub-page-2',
        title: 'Sub Page 02',
        icon: 'fa fa-file-alt'
      }
    ]
  },
  {
    title: 'Multiple Level',
    icon: 'fa fa-list-alt',
    child: [
      {
        title: 'page'
      },
      {
        title: 'Level 2 ',
        child: [
          {
            title: 'page'
          },
          {
            title: 'Page'
          }
        ]
      },
      {
        title: 'Page'
      },
      {
        title: 'Another Level 2',
        child: [
          {
            title: 'Level 3',
            child: [
              {
                title: 'Page'
              },
              {
                title: 'Page'
              }
            ]
          }
        ]
      }
    ]
},
        {
    href: '#disabled',
    title: 'Disabled page',
    icon: 'fa fa-lock',
    disabled: true
  },
      {
    header: true,
    component: separator,
    visibleOnCollapse: true
  },
    {
    header: true,
    title: 'Another Example'
  },
  {
    href: '#disabled',
    title: 'Disabled page',
    icon: 'fa fa-lock',
    disabled: true
  },
  {
    title: 'Badge',
    icon: 'fa fa-cog',
    badge: {
      text: 'new',
      class: 'default-badge'
    }
  },
  {
    href: '#page',
    title: 'Dropdown Page',
    icon: 'fa fa-list-ul',
    child: [
      {
        href: '#sub-page-1',
        title: 'Sub Page 01',
        icon: 'fa fa-file-alt'
      },
      {
        href: '#sub-page-2',
        title: 'Sub Page 02',
        icon: 'fa fa-file-alt'
      }
    ]
  },
  {
    title: 'Multiple Level',
    icon: 'fa fa-list-alt',
    child: [
      {
        title: 'page'
      },
      {
        title: 'Level 2 ',
        child: [
          {
            title: 'page'
          },
          {
            title: 'Page'
          }
        ]
      },
      {
        title: 'Page'
      },
      {
        title: 'Another Level 2',
        child: [
          {
            title: 'Level 3',
            child: [
              {
                title: 'Page'
              },
              {
                title: 'Page'
              }
            ]
          }
        ]
      }
    ]
}
    ]
  }
  }).$mount('#app');