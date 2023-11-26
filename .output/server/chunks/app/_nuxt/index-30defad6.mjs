import { defineComponent, h, inject, computed, unref, ref, Suspense, nextTick, mergeProps, Transition, provide, useSSRContext, reactive, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, watchEffect } from 'vue';
import { P as PageRouteSymbol, d as useRoute, e as appLayoutTransition, _ as _wrapIf, L as LayoutMetaSymbol, j as useAuth, g as useState, f as useNuxtApp, h as useComediansStore } from '../server.mjs';
import { useRoute as useRoute$1 } from 'vue-router';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { z } from 'zod';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';

const layouts = {
  default: () => import('./default-c5489b59.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0$2 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(props.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => {
          var _a;
          return name === ((_a = route.meta.layout) != null ? _a : "default");
        }
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const _sfc_main$c = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "mr-2 w-8 h-8"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Sort.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$b = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "{1.5}",
    stroke: "currentColor",
    className: "w-6 h-6"
  }, _attrs))}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Search.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FilterdModal",
  __ssrInlineRender: true,
  props: {
    searchValue: {
      type: String,
      required: true
    }
  },
  emits: ["searched"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const comedians = useState("comedians");
    const filteredComedians = ref([]);
    ref({});
    watchEffect(() => {
      filteredComedians.value = comedians.value.filter((comedian) => {
        return comedian.name.startsWith(props.searchValue);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute z-50 mt-2 w-full overflow-hidden rounded-md bg-white" }, _attrs))}><ul class="absolutew-[calc(80%)]list-none">`);
      if (unref(filteredComedians).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(filteredComedians), (comedian) => {
          _push(`<li class="cursor-pointer hover:bg-yellow-50 hover:text-gray-900 px-4 py-2">${ssrInterpolate(comedian.name)}</li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<li class="px-4 py-2">\u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093</li>`);
      }
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterdModal.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "ml-2 w-8 h-8"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Signout.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const useSortComediansByName = () => {
  const comedianStore = useComediansStore();
  comedianStore.value = comedianStore.value.sort((a, b) => a.name.localeCompare(b.name, "ja"));
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SearchInput",
  __ssrInlineRender: true,
  emits: ["searched"],
  setup(__props, { emit: __emit }) {
    const { signOut, status } = useAuth();
    const searchValue = ref("");
    ref([]);
    const emit = __emit;
    const isShowFilter = ref(false);
    const loggedIn = computed(() => status.value === "authenticated");
    const setComedian = (searchedComedian) => {
      searchValue.value = searchedComedian.name;
      isShowFilter.value = false;
      emit("searched", searchedComedian);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_IconSort = __nuxt_component_0$1;
      const _component_IconSearch = __nuxt_component_1;
      const _component_FilterdModal = _sfc_main$a;
      const _component_IconSignout = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center py-6 bg-gray-100" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IconSort, { onClick: "useSortComediansByName" in _ctx ? _ctx.useSortComediansByName : unref(useSortComediansByName) }, null, _parent));
      _push(`<div class="relative w-[calc(70%)]"><input${ssrRenderAttr("value", unref(searchValue))} type="search" placeholder="Search..." class="neu-input"><button class="absolute inset-y-0 right-0 flex items-center pr-3 shadow-sm hover:shadow-2xl">`);
      _push(ssrRenderComponent(_component_IconSearch, null, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_FilterdModal, {
        style: ((_a = unref(searchValue)) == null ? void 0 : _a.length) > 0 && unref(isShowFilter) ? null : { display: "none" },
        searchValue: unref(searchValue),
        onSearched: setComedian
      }, null, _parent));
      _push(`</div>`);
      if (unref(loggedIn)) {
        _push(ssrRenderComponent(_component_IconSignout, {
          onClick: ($event) => unref(signOut)()
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchInput.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ComedianCard",
  __ssrInlineRender: true,
  props: {
    comedian: {
      type: Object,
      required: true
    }
  },
  emits: ["open"],
  setup(__props, { emit: __emit }) {
    const { data } = useAuth();
    const props = __props;
    const userScore = ref(computed(() => {
      var _a;
      return (_a = props.comedian.scores) == null ? void 0 : _a.find((scoreObject) => {
        var _a2;
        return scoreObject.userId === ((_a2 = data.value) == null ? void 0 : _a2.id);
      });
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card glass shadow-xl m-3 card-shadow" }, _attrs))}><div class="relative"><h2 class="text-center py-3 text-xl w-full rounded-t-2xl text-violet-100 bg-slate-600 bg-opacity-70">${ssrInterpolate((_a = props.comedian) == null ? void 0 : _a.name)}</h2><div class="flex"><div class="card flex-1 m-3 text-center justify-center bg-neutral text-neutral-content"><span class="text-2xl">${ssrInterpolate(((_b = props.comedian) == null ? void 0 : _b.averageScore) || 75)}</span><span>\u5E73\u5747</span></div><div class="card flex-1 m-3 text-center justify-center bg-neutral text-neutral-content"><span class="text-2xl">${ssrInterpolate(((_c = unref(userScore)) == null ? void 0 : _c.score) || "--")}</span><span>\u63A1\u70B9</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ComedianCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ScoreModal",
  __ssrInlineRender: true,
  props: {
    comedian: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a;
    const { data } = useAuth();
    const props = __props;
    const isError = ref(false);
    const isLoading = ref(false);
    const score = ref("");
    const userData = ref(null);
    const validateScore = (score2) => {
      score2 = score2.toLowerCase();
      const num = parseInt(score2);
      const containsNonNumeric = /\D/.test(score2);
      if (isNaN(num) || num < 50 || num > 100 || containsNonNumeric) {
        isError.value = true;
        return false;
      } else {
        isError.value = false;
        return true;
      }
    };
    watchEffect(() => {
      validateScore(score.value);
    });
    watchEffect(() => {
      userData.value = data.value;
    });
    console.log((_a = userData.value) == null ? void 0 : _a.id);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        class: "modal modal-bottom sm:modal-middle bg-slate-700 bg-opacity-50",
        open: ""
      }, _attrs))}><div class="modal-box">`);
      if (!unref(isLoading)) {
        _push(`<div><div class="flex flex-col h-full"><h2 class="flex-1 font-bold text-2xl">${ssrInterpolate((_a2 = props.comedian) == null ? void 0 : _a2.name)}</h2><div class="flex-1 form-control w-full max-w-xs"><label class="label"><span class="${ssrRenderClass([{ "text-red-600": unref(isError) }, "label-text"])}">50~100\u307E\u3067\u306E\u6570\u5B57\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</span></label><input${ssrRenderAttr("value", unref(score))} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"></div></div><div class="modal-action"><button class="btn">Close</button><button class="btn"${ssrIncludeBooleanAttr(unref(isError)) ? " disabled" : ""}>\u78BA\u5B9A</button></div></div>`);
      } else {
        _push(`<div class="w-full flex justify-center"><span class="loading loading-dots block w-24 my-10"></span></div>`);
      }
      _push(`</div><form method="dialog" class="modal-backdrop"></form></dialog>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScoreModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M22.1623 5.656C21.3989 5.9937 20.5893 6.21548 19.7603 6.314C20.634 5.79144 21.288 4.96902 21.6003 4C20.7803 4.488 19.8813 4.83 18.9443 5.015C18.3149 4.34158 17.4807 3.89497 16.5713 3.74459C15.6618 3.59421 14.7282 3.74849 13.9156 4.18346C13.1029 4.61842 12.4567 5.30969 12.0774 6.1498C11.6981 6.9899 11.607 7.93178 11.8183 8.829C10.1554 8.74566 8.52863 8.31353 7.04358 7.56067C5.55854 6.80781 4.24842 5.75105 3.1983 4.459C2.82659 5.09745 2.63125 5.82323 2.6323 6.562C2.6323 8.012 3.3703 9.293 4.4923 10.043C3.82831 10.0221 3.17893 9.84278 2.5983 9.52V9.572C2.5985 10.5377 2.93267 11.4736 3.54414 12.2211C4.15562 12.9685 5.00678 13.4815 5.9533 13.673C5.33691 13.84 4.6906 13.8647 4.0633 13.745C4.33016 14.5762 4.8503 15.3032 5.55089 15.8241C6.25147 16.345 7.09742 16.6338 7.9703 16.65C7.10278 17.3313 6.10947 17.835 5.04718 18.1322C3.98488 18.4294 2.87442 18.5143 1.7793 18.382C3.69099 19.6114 5.91639 20.2641 8.1893 20.262C15.8823 20.262 20.0893 13.889 20.0893 8.362C20.0893 8.182 20.0843 8 20.0763 7.822C20.8952 7.23017 21.6019 6.49702 22.1633 5.657L22.1623 5.656Z" fill="#1DA1F2"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Twitter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TwitterLogin",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTwitter = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": "CTwitter\u3067\u30ED\u30B0\u30A4\u30F3",
        class: "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex justify-center items-center w-full"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IconTwitter, null, null, _parent));
      _push(`<p class="text-center font-medium ml-2 text-gray-700"> Twitter\u3067\u30ED\u30B0\u30A4\u30F3 </p></button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TwitterLogin.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  emits: ["isLoading"],
  setup(__props, { emit: __emit }) {
    useAuth();
    const userId = ref("");
    const password = ref("");
    const errors = ref({});
    z.object({
      userId: z.string({ required_error: "\u5FC5\u9808\u9805\u76EE\u3067\u3059", invalid_type_error: "\u5165\u529B\u5024\u306B\u8AA4\u308A\u304C\u308A\u307E\u3059" }).regex(/^[a-zA-Z0-9]+$/, { message: "\u534A\u89D2\u82F1\u6570\u5B57\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }).min(6, { message: "6\u6587\u5B57\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }).max(15, { message: "15\u6587\u5B57\u4EE5\u4E0B\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }),
      password: z.string({ required_error: "\u5FC5\u9808\u9805\u76EE\u3067\u3059", invalid_type_error: "\u5165\u529B\u5024\u306B\u8AA4\u308A\u304C\u308A\u307E\u3059" }).regex(/^[a-zA-Z0-9]+$/, { message: "\u534A\u89D2\u82F1\u6570\u5B57\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }).min(6, { message: "8\u6587\u5B57\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }).max(15, { message: "15\u6587\u5B57\u4EE5\u4E0B\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" })
    });
    const isSubmitDisabled = computed(() => {
      return Object.keys(errors.value).length > 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TwitterLogin = _sfc_main$4;
      _push(`<!--[--><div class="form-control w-full mt-2"><label class="label" name="userId"><span class="label-text mr-3">\u30E6\u30FC\u30B6\u30FCID</span>`);
      if (unref(errors).userId) {
        _push(`<span class="label-text text-red-600">\u203B${ssrInterpolate(unref(errors).userId._errors[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><input type="text" placeholder="\u30E6\u30FC\u30B6\u30FCID" class="input input-bordered w-full"${ssrRenderAttr("value", unref(userId))}></div><div class="form-control w-full"><label class="label" name="password"><span class="label-text mr-3">\u30D1\u30B9\u30EF\u30FC\u30C9</span>`);
      if (unref(errors).password) {
        _push(`<span class="label-text text-red-600">\u203B${ssrInterpolate(unref(errors).password._errors[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><input type="password" placeholder="\u30D1\u30B9\u30EF\u30FC\u30C9" class="input input-bordered w-full"${ssrRenderAttr("value", unref(password))}></div><div class="form-control mt-6 w-full"><button${ssrIncludeBooleanAttr(unref(isSubmitDisabled)) ? " disabled" : ""} class="btn btn-primary font-medium w-full">\u30ED\u30B0\u30A4\u30F3</button></div><div class="w-full flex items-center justify-between py-5"><hr class="w-full bg-gray-400"><p class="text-base font-medium leading-4 px-2.5 text-gray-400"> OR </p><hr class="w-full bg-gray-400"></div>`);
      _push(ssrRenderComponent(_component_TwitterLogin, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/Login.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SignUp",
  __ssrInlineRender: true,
  emits: ["isLoading"],
  setup(__props, { emit: __emit }) {
    useAuth();
    const userId = ref("");
    const password = ref("");
    const comfirmPassword = ref("");
    const errors = ref({});
    z.object({
      userId: z.string({ required_error: "\u5FC5\u9808\u9805\u76EE\u3067\u3059", invalid_type_error: "\u5165\u529B\u5024\u306B\u8AA4\u308A\u304C\u308A\u307E\u3059" }).regex(/^[a-zA-Z0-9]+$/, { message: "\u534A\u89D2\u82F1\u6570\u5B57\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }).min(6, { message: "6\u6587\u5B57\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }).max(15, { message: "15\u6587\u5B57\u4EE5\u4E0B\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }),
      password: z.string({ required_error: "\u5FC5\u9808\u9805\u76EE\u3067\u3059", invalid_type_error: "\u5165\u529B\u5024\u306B\u8AA4\u308A\u304C\u308A\u307E\u3059" }).regex(/^[a-zA-Z0-9]+$/, { message: "\u534A\u89D2\u82F1\u6570\u5B57\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }).min(6, { message: "8\u6587\u5B57\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }).max(15, { message: "15\u6587\u5B57\u4EE5\u4E0B\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }),
      comfirmPassword: z.string().refine(() => comfirmPassword.value === password.value, {
        message: "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u7570\u306A\u308A\u307E\u3059"
      })
    });
    const isSubmitDisabled = computed(() => {
      return Object.keys(errors.value).length > 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TwitterLogin = _sfc_main$4;
      _push(`<!--[--><div class="form-control w-full mt-2"><label class="label"><span class="label-text">\u30E6\u30FC\u30B6\u30FCID</span>`);
      if (unref(errors).userId) {
        _push(`<span class="label-text text-red-600">\u203B${ssrInterpolate(unref(errors).userId._errors[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><input type="text" placeholder="\u30E6\u30FC\u30B6\u30FCID" class="input input-bordered w-full"${ssrRenderAttr("value", unref(userId))}></div><div class="form-control w-full"><label class="label"><span class="label-text">\u30D1\u30B9\u30EF\u30FC\u30C9</span>`);
      if (unref(errors).password) {
        _push(`<span class="label-text text-red-600">\u203B${ssrInterpolate(unref(errors).password._errors[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><input type="password" placeholder="\u30D1\u30B9\u30EF\u30FC\u30C9" class="input input-bordered w-full"${ssrRenderAttr("value", unref(password))}></div><div class="form-control w-full"><label class="label"><span class="label-text">\u78BA\u8A8D\u7528\u30D1\u30B9\u30EF\u30FC\u30C9</span>`);
      if (unref(errors).comfirmPassword) {
        _push(`<span class="label-text text-red-600">\u203B${ssrInterpolate(unref(errors).comfirmPassword._errors[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><input type="password" placeholder="\u78BA\u8A8D\u7528\u30D1\u30B9\u30EF\u30FC\u30C9" class="input input-bordered w-full"${ssrRenderAttr("value", unref(comfirmPassword))}></div><div class="form-control mt-6 w-full"><button${ssrIncludeBooleanAttr(unref(isSubmitDisabled)) ? " disabled" : ""} class="btn btn-primary w-full">\u767B\u9332</button></div><div class="w-full flex items-center justify-between py-5"><hr class="w-full bg-gray-400"><p class="text-base font-medium leading-4 px-2.5 text-gray-400"> OR </p><hr class="w-full bg-gray-400"></div>`);
      _push(ssrRenderComponent(_component_TwitterLogin, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/SignUp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthModal",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const isLoading = ref(false);
    const handleLoading = (bool) => {
      isLoading.value = bool;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthLogin = _sfc_main$3;
      const _component_AuthSignUp = _sfc_main$2;
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        class: "modal modal-bottom sm:modal-middle md:modal-middle bg-slate-700 bg-opacity-50",
        open: ""
      }, _attrs))}><div class="modal-box">`);
      if (!unref(isLoading)) {
        _push(`<div role="tablist" class="tabs tabs-boxed"><input type="radio" name="my_tabs_1" role="tab" class="tab w-full" aria-label="\u30ED\u30B0\u30A4\u30F3" checked><div role="tabpanel" class="tab-content"><div class="flex flex-col items-center justify-center p-3">`);
        _push(ssrRenderComponent(_component_AuthLogin, { onIsLoading: handleLoading }, null, _parent));
        _push(`</div></div><input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="\u767B\u9332"><div role="tabpanel" class="tab-content"><div class="flex flex-col items-center justify-center p-3">`);
        _push(ssrRenderComponent(_component_AuthSignUp, { onIsLoading: handleLoading }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div class="w-full flex justify-center"><span class="loading loading-dots block w-24 my-10"></span></div>`);
      }
      _push(`</div><form method="dialog" class="modal-backdrop"></form></dialog>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { status, data, getSession } = useAuth();
    const loggedIn = computed(() => status.value === "authenticated");
    const comedians = useState("comedians");
    const modalState = reactive({
      showModal: false,
      selectedComedian: {}
    });
    const openModal = (comedian) => {
      modalState.selectedComedian = comedian;
      modalState.showModal = true;
    };
    const scrollToComedian = (searchedComedian) => {
      const element = document.getElementById(searchedComedian.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$2;
      const _component_SearchInput = _sfc_main$8;
      const _component_ComedianCard = _sfc_main$7;
      const _component_ScoreModal = _sfc_main$6;
      const _component_AuthModal = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        searchInput: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SearchInput, { onSearched: scrollToComedian }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SearchInput, { onSearched: scrollToComedian })
            ];
          }
        }),
        comedianCard: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(comedians), (comedian) => {
              _push2(ssrRenderComponent(_component_ComedianCard, {
                key: comedian.id,
                id: comedian.id,
                comedian,
                onClick: ($event) => openModal(comedian)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(comedians), (comedian) => {
                return openBlock(), createBlock(_component_ComedianCard, {
                  key: comedian.id,
                  id: comedian.id,
                  comedian,
                  onClick: ($event) => openModal(comedian)
                }, null, 8, ["id", "comedian", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(loggedIn)) {
        _push(ssrRenderComponent(_component_ScoreModal, {
          style: unref(modalState).showModal ? null : { display: "none" },
          onClose: ($event) => unref(modalState).showModal = false,
          comedian: unref(modalState).selectedComedian
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_AuthModal, {
          style: unref(modalState).showModal ? null : { display: "none" },
          onClose: ($event) => unref(modalState).showModal = false
        }, null, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-30defad6.mjs.map
