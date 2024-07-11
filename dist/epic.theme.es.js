import './index.css';function me(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: me
}, Symbol.toStringTag, { value: "Module" }));
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, z.apply(null, arguments);
}
function ue(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) >= 0) continue;
    t[n] = e[n];
  }
  return t;
}
function Nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Er(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Ve = { exports: {} }, Oe = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function Br() {
  if (nr) return A;
  nr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
  function N(p) {
    if (typeof p == "object" && p !== null) {
      var Q = p.$$typeof;
      switch (Q) {
        case r:
          switch (p = p.type, p) {
            case m:
            case l:
            case n:
            case i:
            case o:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case y:
                case x:
                case v:
                case a:
                  return p;
                default:
                  return Q;
              }
          }
        case t:
          return Q;
      }
    }
  }
  function F(p) {
    return N(p) === l;
  }
  return A.AsyncMode = m, A.ConcurrentMode = l, A.ContextConsumer = u, A.ContextProvider = a, A.Element = r, A.ForwardRef = y, A.Fragment = n, A.Lazy = x, A.Memo = v, A.Portal = t, A.Profiler = i, A.StrictMode = o, A.Suspense = h, A.isAsyncMode = function(p) {
    return F(p) || N(p) === m;
  }, A.isConcurrentMode = F, A.isContextConsumer = function(p) {
    return N(p) === u;
  }, A.isContextProvider = function(p) {
    return N(p) === a;
  }, A.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, A.isForwardRef = function(p) {
    return N(p) === y;
  }, A.isFragment = function(p) {
    return N(p) === n;
  }, A.isLazy = function(p) {
    return N(p) === x;
  }, A.isMemo = function(p) {
    return N(p) === v;
  }, A.isPortal = function(p) {
    return N(p) === t;
  }, A.isProfiler = function(p) {
    return N(p) === i;
  }, A.isStrictMode = function(p) {
    return N(p) === o;
  }, A.isSuspense = function(p) {
    return N(p) === h;
  }, A.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === l || p === i || p === o || p === h || p === c || typeof p == "object" && p !== null && (p.$$typeof === x || p.$$typeof === v || p.$$typeof === a || p.$$typeof === u || p.$$typeof === y || p.$$typeof === T || p.$$typeof === M || p.$$typeof === V || p.$$typeof === f);
  }, A.typeOf = N, A;
}
var P = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Wr() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
    function N(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === n || d === l || d === i || d === o || d === h || d === c || typeof d == "object" && d !== null && (d.$$typeof === x || d.$$typeof === v || d.$$typeof === a || d.$$typeof === u || d.$$typeof === y || d.$$typeof === T || d.$$typeof === M || d.$$typeof === V || d.$$typeof === f);
    }
    function F(d) {
      if (typeof d == "object" && d !== null) {
        var G = d.$$typeof;
        switch (G) {
          case r:
            var xe = d.type;
            switch (xe) {
              case m:
              case l:
              case n:
              case i:
              case o:
              case h:
                return xe;
              default:
                var tr = xe && xe.$$typeof;
                switch (tr) {
                  case u:
                  case y:
                  case x:
                  case v:
                  case a:
                    return tr;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var p = m, Q = l, Re = u, Me = a, Ie = r, je = y, be = n, De = x, Ne = v, re = t, Be = i, H = o, ee = h, ve = !1;
    function We(d) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(d) || F(d) === m;
    }
    function s(d) {
      return F(d) === l;
    }
    function g(d) {
      return F(d) === u;
    }
    function _(d) {
      return F(d) === a;
    }
    function C(d) {
      return typeof d == "object" && d !== null && d.$$typeof === r;
    }
    function O(d) {
      return F(d) === y;
    }
    function w(d) {
      return F(d) === n;
    }
    function E(d) {
      return F(d) === x;
    }
    function S(d) {
      return F(d) === v;
    }
    function k(d) {
      return F(d) === t;
    }
    function R(d) {
      return F(d) === i;
    }
    function $(d) {
      return F(d) === o;
    }
    function U(d) {
      return F(d) === h;
    }
    P.AsyncMode = p, P.ConcurrentMode = Q, P.ContextConsumer = Re, P.ContextProvider = Me, P.Element = Ie, P.ForwardRef = je, P.Fragment = be, P.Lazy = De, P.Memo = Ne, P.Portal = re, P.Profiler = Be, P.StrictMode = H, P.Suspense = ee, P.isAsyncMode = We, P.isConcurrentMode = s, P.isContextConsumer = g, P.isContextProvider = _, P.isElement = C, P.isForwardRef = O, P.isFragment = w, P.isLazy = E, P.isMemo = S, P.isPortal = k, P.isProfiler = R, P.isStrictMode = $, P.isSuspense = U, P.isValidElementType = N, P.typeOf = F;
  }()), P;
}
var ir;
function Tr() {
  return ir || (ir = 1, process.env.NODE_ENV === "production" ? Oe.exports = Br() : Oe.exports = Wr()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Fe, ar;
function Fr() {
  if (ar) return Fe;
  ar = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, u = 0; u < 10; u++)
        a["_" + String.fromCharCode(u)] = u;
      var m = Object.getOwnPropertyNames(a).map(function(y) {
        return a[y];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        l[y] = y;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Fe = o() ? Object.assign : function(i, a) {
    for (var u, m = n(i), l, y = 1; y < arguments.length; y++) {
      u = Object(arguments[y]);
      for (var h in u)
        r.call(u, h) && (m[h] = u[h]);
      if (e) {
        l = e(u);
        for (var c = 0; c < l.length; c++)
          t.call(u, l[c]) && (m[l[c]] = u[l[c]]);
      }
    }
    return m;
  }, Fe;
}
var ze, sr;
function He() {
  if (sr) return ze;
  sr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ze = e, ze;
}
var Ue, cr;
function Cr() {
  return cr || (cr = 1, Ue = Function.call.bind(Object.prototype.hasOwnProperty)), Ue;
}
var Le, ur;
function zr() {
  if (ur) return Le;
  ur = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = He(), t = {}, n = Cr();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, u, m, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in i)
        if (n(i, y)) {
          var h;
          try {
            if (typeof i[y] != "function") {
              var c = Error(
                (m || "React class") + ": " + u + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw c.name = "Invariant Violation", c;
            }
            h = i[y](a, y, m, u, null, r);
          } catch (x) {
            h = x;
          }
          if (h && !(h instanceof Error) && e(
            (m || "React class") + ": type specification of " + u + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + u + " type: " + h.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Le = o, Le;
}
var qe, lr;
function Ur() {
  if (lr) return qe;
  lr = 1;
  var e = Tr(), r = Fr(), t = He(), n = Cr(), o = zr(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var m = "Warning: " + u;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return qe = function(u, m) {
    var l = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function h(s) {
      var g = s && (l && s[l] || s[y]);
      if (typeof g == "function")
        return g;
    }
    var c = "<<anonymous>>", v = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: V(),
      arrayOf: N,
      element: F(),
      elementType: p(),
      instanceOf: Q,
      node: je(),
      objectOf: Me,
      oneOf: Re,
      oneOfType: Ie,
      shape: De,
      exact: Ne
    };
    function x(s, g) {
      return s === g ? s !== 0 || 1 / s === 1 / g : s !== s && g !== g;
    }
    function f(s, g) {
      this.message = s, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function T(s) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, _ = 0;
      function C(w, E, S, k, R, $, U) {
        if (k = k || c, $ = $ || S, U !== t) {
          if (m) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = k + ":" + S;
            !g[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[G] = !0, _++);
          }
        }
        return E[S] == null ? w ? E[S] === null ? new f("The " + R + " `" + $ + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new f("The " + R + " `" + $ + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : s(E, S, k, R, $);
      }
      var O = C.bind(null, !1);
      return O.isRequired = C.bind(null, !0), O;
    }
    function M(s) {
      function g(_, C, O, w, E, S) {
        var k = _[C], R = H(k);
        if (R !== s) {
          var $ = ee(k);
          return new f(
            "Invalid " + w + " `" + E + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return T(g);
    }
    function V() {
      return T(a);
    }
    function N(s) {
      function g(_, C, O, w, E) {
        if (typeof s != "function")
          return new f("Property `" + E + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var S = _[C];
        if (!Array.isArray(S)) {
          var k = H(S);
          return new f("Invalid " + w + " `" + E + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected an array."));
        }
        for (var R = 0; R < S.length; R++) {
          var $ = s(S, R, O, w, E + "[" + R + "]", t);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return T(g);
    }
    function F() {
      function s(g, _, C, O, w) {
        var E = g[_];
        if (!u(E)) {
          var S = H(E);
          return new f("Invalid " + O + " `" + w + "` of type " + ("`" + S + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(s);
    }
    function p() {
      function s(g, _, C, O, w) {
        var E = g[_];
        if (!e.isValidElementType(E)) {
          var S = H(E);
          return new f("Invalid " + O + " `" + w + "` of type " + ("`" + S + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(s);
    }
    function Q(s) {
      function g(_, C, O, w, E) {
        if (!(_[C] instanceof s)) {
          var S = s.name || c, k = We(_[C]);
          return new f("Invalid " + w + " `" + E + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return T(g);
    }
    function Re(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function g(_, C, O, w, E) {
        for (var S = _[C], k = 0; k < s.length; k++)
          if (x(S, s[k]))
            return null;
        var R = JSON.stringify(s, function(U, d) {
          var G = ee(d);
          return G === "symbol" ? String(d) : d;
        });
        return new f("Invalid " + w + " `" + E + "` of value `" + String(S) + "` " + ("supplied to `" + O + "`, expected one of " + R + "."));
      }
      return T(g);
    }
    function Me(s) {
      function g(_, C, O, w, E) {
        if (typeof s != "function")
          return new f("Property `" + E + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var S = _[C], k = H(S);
        if (k !== "object")
          return new f("Invalid " + w + " `" + E + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected an object."));
        for (var R in S)
          if (n(S, R)) {
            var $ = s(S, R, O, w, E + "." + R, t);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return T(g);
    }
    function Ie(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var g = 0; g < s.length; g++) {
        var _ = s[g];
        if (typeof _ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(_) + " at index " + g + "."
          ), a;
      }
      function C(O, w, E, S, k) {
        for (var R = [], $ = 0; $ < s.length; $++) {
          var U = s[$], d = U(O, w, E, S, k, t);
          if (d == null)
            return null;
          d.data && n(d.data, "expectedType") && R.push(d.data.expectedType);
        }
        var G = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new f("Invalid " + S + " `" + k + "` supplied to " + ("`" + E + "`" + G + "."));
      }
      return T(C);
    }
    function je() {
      function s(g, _, C, O, w) {
        return re(g[_]) ? null : new f("Invalid " + O + " `" + w + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return T(s);
    }
    function be(s, g, _, C, O) {
      return new f(
        (s || "React class") + ": " + g + " type `" + _ + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function De(s) {
      function g(_, C, O, w, E) {
        var S = _[C], k = H(S);
        if (k !== "object")
          return new f("Invalid " + w + " `" + E + "` of type `" + k + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var R in s) {
          var $ = s[R];
          if (typeof $ != "function")
            return be(O, w, E, R, ee($));
          var U = $(S, R, O, w, E + "." + R, t);
          if (U)
            return U;
        }
        return null;
      }
      return T(g);
    }
    function Ne(s) {
      function g(_, C, O, w, E) {
        var S = _[C], k = H(S);
        if (k !== "object")
          return new f("Invalid " + w + " `" + E + "` of type `" + k + "` " + ("supplied to `" + O + "`, expected `object`."));
        var R = r({}, _[C], s);
        for (var $ in R) {
          var U = s[$];
          if (n(s, $) && typeof U != "function")
            return be(O, w, E, $, ee(U));
          if (!U)
            return new f(
              "Invalid " + w + " `" + E + "` key `" + $ + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(_[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var d = U(S, $, O, w, E + "." + $, t);
          if (d)
            return d;
        }
        return null;
      }
      return T(g);
    }
    function re(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(re);
          if (s === null || u(s))
            return !0;
          var g = h(s);
          if (g) {
            var _ = g.call(s), C;
            if (g !== s.entries) {
              for (; !(C = _.next()).done; )
                if (!re(C.value))
                  return !1;
            } else
              for (; !(C = _.next()).done; ) {
                var O = C.value;
                if (O && !re(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Be(s, g) {
      return s === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function H(s) {
      var g = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : Be(g, s) ? "symbol" : g;
    }
    function ee(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var g = H(s);
      if (g === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function ve(s) {
      var g = ee(s);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function We(s) {
      return !s.constructor || !s.constructor.name ? c : s.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, qe;
}
var Ye, fr;
function Lr() {
  if (fr) return Ye;
  fr = 1;
  var e = He();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ye = function() {
    function n(a, u, m, l, y, h) {
      if (h !== e) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Ye;
}
if (process.env.NODE_ENV !== "production") {
  var qr = Tr(), Yr = !0;
  Ve.exports = Ur()(qr.isElement, Yr);
} else
  Ve.exports = Lr()();
var Kr = Ve.exports;
const fe = /* @__PURE__ */ Nr(Kr);
function se(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Sr(e) {
  if (!se(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Sr(e[t]);
  }), r;
}
function X(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? z({}, e) : e;
  return se(e) && se(r) && Object.keys(r).forEach((o) => {
    se(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && se(e[o]) ? n[o] = X(e[o], r[o], t) : t.clone ? n[o] = se(r[o]) ? Sr(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
const Vr = ["values", "unit", "step"], Hr = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => z({}, t, {
    [n.key]: n.val
  }), {});
};
function Gr(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = ue(e, Vr), i = Hr(r), a = Object.keys(i);
  function u(c) {
    return `@media (min-width:${typeof r[c] == "number" ? r[c] : c}${t})`;
  }
  function m(c) {
    return `@media (max-width:${(typeof r[c] == "number" ? r[c] : c) - n / 100}${t})`;
  }
  function l(c, v) {
    const x = a.indexOf(v);
    return `@media (min-width:${typeof r[c] == "number" ? r[c] : c}${t}) and (max-width:${(x !== -1 && typeof r[a[x]] == "number" ? r[a[x]] : v) - n / 100}${t})`;
  }
  function y(c) {
    return a.indexOf(c) + 1 < a.length ? l(c, a[a.indexOf(c) + 1]) : u(c);
  }
  function h(c) {
    const v = a.indexOf(c);
    return v === 0 ? u(a[1]) : v === a.length - 1 ? m(a[v]) : l(c, a[a.indexOf(c) + 1]).replace("@media", "@media not all and");
  }
  return z({
    keys: a,
    values: i,
    up: u,
    down: m,
    between: l,
    only: y,
    not: h,
    unit: t
  }, o);
}
const Xr = {
  borderRadius: 4
}, Z = process.env.NODE_ENV !== "production" ? fe.oneOfType([fe.number, fe.string, fe.object, fe.array]) : {};
function pe(e, r) {
  return r ? X(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ge = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, dr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ge[e]}px)`
};
function J(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || dr;
    return r.reduce((a, u, m) => (a[i.up(i.keys[m])] = t(r[m]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || dr;
    return Object.keys(r).reduce((a, u) => {
      if (Object.keys(i.values || Ge).indexOf(u) !== -1) {
        const m = i.up(u);
        a[m] = t(r[u], u);
      } else {
        const m = u;
        a[m] = r[m];
      }
      return a;
    }, {});
  }
  return t(r);
}
function Jr(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Zr(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function _r(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : me(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ce(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Ee(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Ce(e, t) || n, r && (o = r(o, n, e)), o;
}
function B(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const u = a[r], m = a.theme, l = Ce(m, n) || {};
    return J(a, u, (h) => {
      let c = Ee(l, o, h);
      return h === c && typeof h == "string" && (c = Ee(l, o, `${r}${h === "default" ? "" : _r(h)}`, h)), t === !1 ? c : {
        [t]: c
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Z
  } : {}, i.filterProps = [r], i;
}
function Qr(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const et = {
  m: "margin",
  p: "padding"
}, rt = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, tt = Qr((e) => {
  if (e.length > 2)
    if (pr[e])
      e = pr[e];
    else
      return [e];
  const [r, t] = e.split(""), n = et[r], o = rt[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Se = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _e = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], nt = [...Se, ..._e];
function ye(e, r, t, n) {
  var o;
  const i = (o = Ce(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function wr(e) {
  return ye(e, "spacing", 8, "spacing");
}
function he(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ot(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = he(r, t), n), {});
}
function it(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = tt(t), i = ot(o, n), a = e[t];
  return J(e, a, i);
}
function kr(e, r) {
  const t = wr(e.theme);
  return Object.keys(e).map((n) => it(e, r, n, t)).reduce(pe, {});
}
function j(e) {
  return kr(e, Se);
}
j.propTypes = process.env.NODE_ENV !== "production" ? Se.reduce((e, r) => (e[r] = Z, e), {}) : {};
j.filterProps = Se;
function D(e) {
  return kr(e, _e);
}
D.propTypes = process.env.NODE_ENV !== "production" ? _e.reduce((e, r) => (e[r] = Z, e), {}) : {};
D.filterProps = _e;
process.env.NODE_ENV !== "production" && nt.reduce((e, r) => (e[r] = Z, e), {});
function at(e = 8) {
  if (e.mui)
    return e;
  const r = wr({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function we(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? pe(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function q(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function K(e, r) {
  return B({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const st = K("border", q), ct = K("borderTop", q), ut = K("borderRight", q), lt = K("borderBottom", q), ft = K("borderLeft", q), dt = K("borderColor"), pt = K("borderTopColor"), mt = K("borderRightColor"), gt = K("borderBottomColor"), yt = K("borderLeftColor"), ht = K("outline", q), bt = K("outlineColor"), ke = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = ye(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: he(r, n)
    });
    return J(e, e.borderRadius, t);
  }
  return null;
};
ke.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Z
} : {};
ke.filterProps = ["borderRadius"];
we(st, ct, ut, lt, ft, dt, pt, mt, gt, yt, ke, ht, bt);
const $e = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = ye(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: he(r, n)
    });
    return J(e, e.gap, t);
  }
  return null;
};
$e.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Z
} : {};
$e.filterProps = ["gap"];
const Ae = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = ye(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: he(r, n)
    });
    return J(e, e.columnGap, t);
  }
  return null;
};
Ae.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Z
} : {};
Ae.filterProps = ["columnGap"];
const Pe = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = ye(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: he(r, n)
    });
    return J(e, e.rowGap, t);
  }
  return null;
};
Pe.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Z
} : {};
Pe.filterProps = ["rowGap"];
const vt = B({
  prop: "gridColumn"
}), xt = B({
  prop: "gridRow"
}), Ot = B({
  prop: "gridAutoFlow"
}), Et = B({
  prop: "gridAutoColumns"
}), Tt = B({
  prop: "gridAutoRows"
}), Ct = B({
  prop: "gridTemplateColumns"
}), St = B({
  prop: "gridTemplateRows"
}), _t = B({
  prop: "gridTemplateAreas"
}), wt = B({
  prop: "gridArea"
});
we($e, Ae, Pe, vt, xt, Ot, Et, Tt, Ct, St, _t, wt);
function ce(e, r) {
  return r === "grey" ? r : e;
}
const kt = B({
  prop: "color",
  themeKey: "palette",
  transform: ce
}), $t = B({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ce
}), At = B({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ce
});
we(kt, $t, At);
function L(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Pt = B({
  prop: "width",
  transform: L
}), Xe = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Ge[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: L(t)
      };
    };
    return J(e, e.maxWidth, r);
  }
  return null;
};
Xe.filterProps = ["maxWidth"];
const Rt = B({
  prop: "minWidth",
  transform: L
}), Mt = B({
  prop: "height",
  transform: L
}), It = B({
  prop: "maxHeight",
  transform: L
}), jt = B({
  prop: "minHeight",
  transform: L
});
B({
  prop: "size",
  cssProperty: "width",
  transform: L
});
B({
  prop: "size",
  cssProperty: "height",
  transform: L
});
const Dt = B({
  prop: "boxSizing"
});
we(Pt, Xe, Rt, Mt, It, jt, Dt);
const Je = {
  // borders
  border: {
    themeKey: "borders",
    transform: q
  },
  borderTop: {
    themeKey: "borders",
    transform: q
  },
  borderRight: {
    themeKey: "borders",
    transform: q
  },
  borderBottom: {
    themeKey: "borders",
    transform: q
  },
  borderLeft: {
    themeKey: "borders",
    transform: q
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: q
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ke
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ce
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ce
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ce
  },
  // spacing
  p: {
    style: D
  },
  pt: {
    style: D
  },
  pr: {
    style: D
  },
  pb: {
    style: D
  },
  pl: {
    style: D
  },
  px: {
    style: D
  },
  py: {
    style: D
  },
  padding: {
    style: D
  },
  paddingTop: {
    style: D
  },
  paddingRight: {
    style: D
  },
  paddingBottom: {
    style: D
  },
  paddingLeft: {
    style: D
  },
  paddingX: {
    style: D
  },
  paddingY: {
    style: D
  },
  paddingInline: {
    style: D
  },
  paddingInlineStart: {
    style: D
  },
  paddingInlineEnd: {
    style: D
  },
  paddingBlock: {
    style: D
  },
  paddingBlockStart: {
    style: D
  },
  paddingBlockEnd: {
    style: D
  },
  m: {
    style: j
  },
  mt: {
    style: j
  },
  mr: {
    style: j
  },
  mb: {
    style: j
  },
  ml: {
    style: j
  },
  mx: {
    style: j
  },
  my: {
    style: j
  },
  margin: {
    style: j
  },
  marginTop: {
    style: j
  },
  marginRight: {
    style: j
  },
  marginBottom: {
    style: j
  },
  marginLeft: {
    style: j
  },
  marginX: {
    style: j
  },
  marginY: {
    style: j
  },
  marginInline: {
    style: j
  },
  marginInlineStart: {
    style: j
  },
  marginInlineEnd: {
    style: j
  },
  marginBlock: {
    style: j
  },
  marginBlockStart: {
    style: j
  },
  marginBlockEnd: {
    style: j
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: $e
  },
  rowGap: {
    style: Pe
  },
  columnGap: {
    style: Ae
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: L
  },
  maxWidth: {
    style: Xe
  },
  minWidth: {
    transform: L
  },
  height: {
    transform: L
  },
  maxHeight: {
    transform: L
  },
  minHeight: {
    transform: L
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Nt(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Bt(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Wt() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, u = i[t];
    if (!u)
      return {
        [t]: n
      };
    const {
      cssProperty: m = t,
      themeKey: l,
      transform: y,
      style: h
    } = u;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const c = Ce(o, l) || {};
    return h ? h(a) : J(a, n, (x) => {
      let f = Ee(c, y, x);
      return x === f && typeof x == "string" && (f = Ee(c, y, `${t}${x === "default" ? "" : _r(x)}`, x)), m === !1 ? f : {
        [m]: f
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : Je;
    function u(m) {
      let l = m;
      if (typeof m == "function")
        l = m(i);
      else if (typeof m != "object")
        return m;
      if (!l)
        return null;
      const y = Jr(i.breakpoints), h = Object.keys(y);
      let c = y;
      return Object.keys(l).forEach((v) => {
        const x = Bt(l[v], i);
        if (x != null)
          if (typeof x == "object")
            if (a[v])
              c = pe(c, e(v, x, i, a));
            else {
              const f = J({
                theme: i
              }, x, (T) => ({
                [v]: T
              }));
              Nt(f, x) ? c[v] = r({
                sx: x,
                theme: i
              }) : c = pe(c, f);
            }
          else
            c = pe(c, e(v, x, i, a));
      }), Zr(h, c);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return r;
}
const Ze = Wt();
Ze.filterProps = ["sx"];
function Ft(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const zt = ["breakpoints", "palette", "spacing", "shape"];
function Ut(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = ue(e, zt), u = Gr(t), m = at(o);
  let l = X({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: z({
      mode: "light"
    }, n),
    spacing: m,
    shape: z({}, Xr, i)
  }, a);
  return l.applyStyles = Ft, l = r.reduce((y, h) => X(y, h), l), l.unstable_sxConfig = z({}, Je, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return Ze({
      sx: h,
      theme: this
    });
  }, l;
}
const mr = (e) => e, Lt = () => {
  let e = mr;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = mr;
    }
  };
}, qt = Lt(), Yt = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Kt(e, r, t = "Mui") {
  const n = Yt[r];
  return n ? `${t}-${n}` : `${qt.generate(e)}-${r}`;
}
function Vt(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vt
}, Symbol.toStringTag, { value: "Module" }));
function Gt(e, r) {
  return z({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var W = {}, $r = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})($r);
var Xt = $r.exports;
const Jt = /* @__PURE__ */ Er(Dr), Zt = /* @__PURE__ */ Er(Ht);
var Ar = Xt;
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.alpha = Ir;
W.blend = fn;
W.colorChannel = void 0;
var Qt = W.darken = er;
W.decomposeColor = Y;
W.emphasize = jr;
var gr = W.getContrastRatio = an;
W.getLuminance = Te;
W.hexToRgb = Pr;
W.hslToRgb = Mr;
var en = W.lighten = rr;
W.private_safeAlpha = sn;
W.private_safeColorChannel = void 0;
W.private_safeDarken = cn;
W.private_safeEmphasize = ln;
W.private_safeLighten = un;
W.recomposeColor = le;
W.rgbToHex = on;
var yr = Ar(Jt), rn = Ar(Zt);
function Qe(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, rn.default)(e, r, t);
}
function Pr(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function tn(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function Y(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Y(Pr(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, yr.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, yr.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Rr = (e) => {
  const r = Y(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
W.colorChannel = Rr;
const nn = (e, r) => {
  try {
    return Rr(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
W.private_safeColorChannel = nn;
function le(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function on(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = Y(e);
  return `#${r.map((t, n) => tn(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function Mr(e) {
  e = Y(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (l, y = (l + t / 30) % 12) => o - i * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let u = "rgb";
  const m = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (u += "a", m.push(r[3])), le({
    type: u,
    values: m
  });
}
function Te(e) {
  e = Y(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Y(Mr(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function an(e, r) {
  const t = Te(e), n = Te(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Ir(e, r) {
  return e = Y(e), r = Qe(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, le(e);
}
function sn(e, r, t) {
  try {
    return Ir(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function er(e, r) {
  if (e = Y(e), r = Qe(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return le(e);
}
function cn(e, r, t) {
  try {
    return er(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function rr(e, r) {
  if (e = Y(e), r = Qe(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return le(e);
}
function un(e, r, t) {
  try {
    return rr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function jr(e, r = 0.15) {
  return Te(e) > 0.5 ? er(e, r) : rr(e, r);
}
function ln(e, r, t) {
  try {
    return jr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function fn(e, r, t, n = 1) {
  const o = (m, l) => Math.round((m ** (1 / n) * (1 - t) + l ** (1 / n) * t) ** n), i = Y(e), a = Y(r), u = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return le({
    type: "rgb",
    values: u
  });
}
const ge = {
  black: "#000",
  white: "#fff"
}, dn = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, te = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, ne = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, de = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, oe = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ie = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ae = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, pn = ["mode", "contrastThreshold", "tonalOffset"], hr = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: ge.white,
    default: ge.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ke = {
  text: {
    primary: ge.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: ge.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function br(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = en(e.main, o) : r === "dark" && (e.dark = Qt(e.main, i)));
}
function mn(e = "light") {
  return e === "dark" ? {
    main: oe[200],
    light: oe[50],
    dark: oe[400]
  } : {
    main: oe[700],
    light: oe[400],
    dark: oe[800]
  };
}
function gn(e = "light") {
  return e === "dark" ? {
    main: te[200],
    light: te[50],
    dark: te[400]
  } : {
    main: te[500],
    light: te[300],
    dark: te[700]
  };
}
function yn(e = "light") {
  return e === "dark" ? {
    main: ne[500],
    light: ne[300],
    dark: ne[700]
  } : {
    main: ne[700],
    light: ne[400],
    dark: ne[800]
  };
}
function hn(e = "light") {
  return e === "dark" ? {
    main: ie[400],
    light: ie[300],
    dark: ie[700]
  } : {
    main: ie[700],
    light: ie[500],
    dark: ie[900]
  };
}
function bn(e = "light") {
  return e === "dark" ? {
    main: ae[400],
    light: ae[300],
    dark: ae[700]
  } : {
    main: ae[800],
    light: ae[500],
    dark: ae[900]
  };
}
function vn(e = "light") {
  return e === "dark" ? {
    main: de[400],
    light: de[300],
    dark: de[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: de[500],
    dark: de[900]
  };
}
function xn(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = ue(e, pn), i = e.primary || mn(r), a = e.secondary || gn(r), u = e.error || yn(r), m = e.info || hn(r), l = e.success || bn(r), y = e.warning || vn(r);
  function h(f) {
    const T = gr(f, Ke.text.primary) >= t ? Ke.text.primary : hr.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const M = gr(f, T);
      M < 3 && console.error([`MUI: The contrast ratio of ${M}:1 for ${T} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const c = ({
    color: f,
    name: T,
    mainShade: M = 500,
    lightShade: V = 300,
    darkShade: N = 700
  }) => {
    if (f = z({}, f), !f.main && f[M] && (f.main = f[M]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${M}\` property.` : me(11, T ? ` (${T})` : "", M));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : me(12, T ? ` (${T})` : "", JSON.stringify(f.main)));
    return br(f, "light", V, n), br(f, "dark", N, n), f.contrastText || (f.contrastText = h(f.main)), f;
  }, v = {
    dark: Ke,
    light: hr
  };
  return process.env.NODE_ENV !== "production" && (v[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), X(z({
    // A collection of common colors.
    common: z({}, ge),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: c({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: c({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: c({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: c({
      color: y,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: c({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: c({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: dn,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: c,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, v[r]), o);
}
const On = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function En(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vr = {
  textTransform: "uppercase"
}, xr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Tn(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = xr,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: m = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: y,
    pxToRem: h
  } = t, c = ue(t, On);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, x = h || ((M) => `${M / l * v}rem`), f = (M, V, N, F, p) => z({
    fontFamily: n,
    fontWeight: M,
    fontSize: x(V),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N
  }, n === xr ? {
    letterSpacing: `${En(F / V)}em`
  } : {}, p, y), T = {
    h1: f(i, 96, 1.167, -1.5),
    h2: f(i, 60, 1.2, -0.5),
    h3: f(a, 48, 1.167, 0),
    h4: f(a, 34, 1.235, 0.25),
    h5: f(a, 24, 1.334, 0),
    h6: f(u, 20, 1.6, 0.15),
    subtitle1: f(a, 16, 1.75, 0.15),
    subtitle2: f(u, 14, 1.57, 0.1),
    body1: f(a, 16, 1.5, 0.15),
    body2: f(a, 14, 1.43, 0.15),
    button: f(u, 14, 1.75, 0.4, vr),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, vr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return X(z({
    htmlFontSize: l,
    pxToRem: x,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: u,
    fontWeightBold: m
  }, T), c, {
    clone: !1
    // No need to clone deep
  });
}
const Cn = 0.2, Sn = 0.14, _n = 0.12;
function I(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Cn})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Sn})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_n})`].join(",");
}
const wn = ["none", I(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), I(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), I(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), I(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), I(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), I(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), I(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), I(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), I(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), I(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), I(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), I(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), I(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), I(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), I(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), I(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), I(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), I(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), I(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), I(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), I(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), I(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), I(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), I(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], kn = ["duration", "easing", "delay"], $n = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, An = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Or(e) {
  return `${Math.round(e)}ms`;
}
function Pn(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Rn(e) {
  const r = z({}, $n, e.easing), t = z({}, An, e.duration);
  return z({
    getAutoHeightDuration: Pn,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: u = r.easeInOut,
        delay: m = 0
      } = i, l = ue(i, kn);
      if (process.env.NODE_ENV !== "production") {
        const y = (c) => typeof c == "string", h = (c) => !isNaN(parseFloat(c));
        !y(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !y(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), y(u) || console.error('MUI: Argument "easing" must be a string.'), !h(m) && !y(m) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((y) => `${y} ${typeof a == "string" ? a : Or(a)} ${u} ${typeof m == "string" ? m : Or(m)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Mn = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, In = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function jn(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = ue(e, In);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : me(18));
  const u = xn(n), m = Ut(e);
  let l = X(m, {
    mixins: Gt(m.breakpoints, t),
    palette: u,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: wn.slice(),
    typography: Tn(u, i),
    transitions: Rn(o),
    zIndex: z({}, Mn)
  });
  if (l = X(l, a), l = r.reduce((y, h) => X(y, h), l), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (c, v) => {
      let x;
      for (x in c) {
        const f = c[x];
        if (y.indexOf(x) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = Kt("", x);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(c, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          c[x] = {};
        }
      }
    };
    Object.keys(l.components).forEach((c) => {
      const v = l.components[c].styleOverrides;
      v && c.indexOf("Mui") === 0 && h(v, c);
    });
  }
  return l.unstable_sxConfig = z({}, Je, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return Ze({
      sx: h,
      theme: this
    });
  }, l;
}
const b = {
  neutral: {
    main: "#6D7274",
    dark: "#313132",
    light: "#858A8C",
    accent: {
      light: "#C2C4C5",
      dark: "#494949"
    },
    bg: {
      main: "#F2F2F2",
      dark: "#DBDCDC",
      light: "#F9F9FB"
    },
    300: "#B2B5B6"
  },
  primary: {
    main: "#036",
    light: "#38598A",
    dark: "#00264D",
    accent: {
      main: "#1A5A96",
      light: "#0070E0"
    },
    bg: {
      main: "#D6EBFF",
      dark: "#85C2FF",
      light: "#F0F8FF"
    }
  },
  secondary: {
    main: "#FCBA19",
    dark: "#674901",
    light: "#FDD166",
    bg: {
      light: "#FEEEC5",
      main: "FEDD8C"
    }
  },
  success: {
    main: "#2E8540",
    dark: "#236430",
    light: "#70CD83",
    bg: {
      light: "#D6F1DC"
    }
  },
  error: {
    main: "#D8292F",
    dark: "#A31E22",
    light: "#E57074",
    bg: {
      light: "#FCEDEE"
    }
  },
  white: "#FFFFFF",
  black: "#000000",
  hover: {
    light: "#4C81AF"
  }
}, Dn = {
  fontFamily: '"BC Sans","Noto Sans",Verdana,Arial,sans-serif',
  h1: {
    fontWeight: 400,
    fontSize: "2rem",
    lineHeight: "1.5rem"
  },
  h2: {
    fontWeight: 400,
    fontSize: "1.75rem",
    lineHeight: "1.4rem",
    letterSpacing: "-1.12px"
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "1.3rem",
    fontWeight: 400
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: "1.6rem",
    fontWeight: 400
  },
  subtitle1: {
    fontSize: "1.125rem",
    lineHeight: "1.3rem",
    fontWeight: 400
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.8125rem",
    lineHeight: "1.2rem"
  },
  body1: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem"
  },
  button: {
    fontWeight: 700,
    fontSize: "1.125rem",
    textTransform: "none"
  }
}, Nn = {
  // MuiPaper: {
  //   styleOverrides: {
  //     root: {
  //       boxShadow: "none",
  //     },
  //   },
  // },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none"
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        "&>:not(:first-of-type)": {
          marginLeft: "16px"
        }
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: ({ ownerState: e }) => ({
        ...e.maxWidth === "md" && {
          maxWidth: "680px"
        },
        ...e.maxWidth === "lg" && {
          maxWidth: "832px"
        }
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState: e }) => ({
        boxShadow: "none",
        fontWeight: 700,
        fontFamily: "BC Sans",
        padding: "0.75rem 1rem",
        ...e.size === "medium" && {
          fontSize: "0.875rem",
          lineHeight: "1rem",
          height: "2.5rem"
        },
        ...e.size === "large" && {
          fontSize: "1rem",
          lineHeight: "1.5rem",
          height: "3rem"
        },
        ...e.variant === "contained" && e.color === "primary" && {
          "&:hover": {
            backgroundColor: b.primary.light,
            boxShadow: "none"
          },
          "&:active": {
            backgroundColor: b.primary.dark
          },
          "&:disabled": {
            backgroundColor: b.neutral.light,
            color: b.white
          }
        } || e.color === "secondary" && {
          "&:hover": {
            backgroundColor: b.secondary.light,
            boxShadow: "none"
          },
          "&:active": {
            backgroundColor: b.secondary.dark,
            color: b.white
          },
          "&:disabled": {
            backgroundColor: b.neutral.light,
            color: b.white
          }
        },
        ...e.variant === "outlined" && e.color === "primary" && {
          background: b.white,
          border: `2px solid ${b.primary.main}`,
          "&:hover": {
            backgroundColor: b.primary.main,
            border: `2px solid ${b.primary.main}`,
            color: b.white,
            boxShadow: "none"
          },
          "&:active": {
            backgroundColor: b.primary.dark,
            color: b.white
          },
          "&:disabled": {
            border: `2px solid ${b.neutral.light}`,
            backgroundColor: b.white,
            color: b.neutral.light
          }
        },
        ...e.variant === "text" && e.color === "primary" && {
          background: b.white,
          border: `2px solid ${b.white}`,
          color: b.primary.accent.main,
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: b.neutral.bg.main,
            border: `2px solid ${b.neutral.bg.main}`,
            boxShadow: "none"
          },
          "&:active": {
            backgroundColor: b.white,
            border: `2px solid ${b.primary.accent.light}`
          },
          "&:disabled": {
            border: `2px solid ${b.white}`,
            backgroundColor: b.white,
            color: b.neutral.light
          }
        }
      })
    },
    defaultProps: {
      disableRipple: !0
    }
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: !0
    }
  },
  MuiRadio: {
    defaultProps: {
      disableRipple: !0
    },
    styleOverrides: {
      root: {
        "&.Mui-checked": {
          color: b.primary.accent.main
        }
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.MuiOutlinedInput-root": {
          backgroundColor: b.white,
          "&.Mui-disabled": {
            backgroundColor: b.neutral.bg.dark
          },
          "& fieldset": {
            border: `2px solid ${b.neutral.accent.light}`
          },
          "&:hover fieldset": {
            borderColor: b.primary.accent.light
          },
          "&.Mui-focused fieldset": {
            borderColor: b.primary.accent.light
          },
          "&.Mui-disabled fieldset": {
            borderColor: b.neutral.accent.light
          }
        }
      }
    }
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        "&.Mui-disabled svg": {
          fill: `${b.neutral.bg.dark} !important`
        }
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        border: 0
      }
    },
    defaultProps: {
      size: "small"
    }
  },
  MuiLink: {
    defaultProps: {
      color: b.primary.accent.main
    }
  },
  MuiFormLabel: {
    defaultProps: {
      focused: !1
    }
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: b.neutral.accent.dark,
        color: b.white,
        borderRadius: "4px",
        padding: "4px 8px",
        fontSize: "0.75rem",
        maxWidth: "300px",
        margin: "2px",
        overflowWrap: "break-word",
        fontWeight: 400,
        lineHeight: "1rem",
        textAlign: "center"
      },
      tooltipArrow: {
        backgroundColor: b.neutral.accent.dark
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: "1rem"
      }
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: "#B7B7B7 transparent",
        "&::-webkit-scrollbar": {
          width: 6,
          height: 6,
          backgroundColor: "transparent"
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent"
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: 6,
          backgroundColor: "#B7B7B7",
          minHeight: 24,
          minWidth: 24
        },
        "&::-webkit-scrollbar-thumb:focus": {
          backgroundColor: "#adadad"
        },
        "&::-webkit-scrollbar-thumb:active": {
          backgroundColor: "#adadad"
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#adadad"
        },
        "&::-webkit-scrollbar-corner": {
          backgroundColor: "transparent"
        }
      }
    }
  }
}, Bn = {
  palette: {
    primary: {
      main: b.primary.main,
      light: b.primary.light,
      dark: b.primary.dark,
      contrastText: b.white
    },
    secondary: {
      main: b.secondary.main,
      dark: b.secondary.dark,
      light: b.secondary.light,
      contrastText: b.black
    },
    error: {
      main: b.error.main,
      dark: b.error.dark,
      light: b.error.light
    }
  },
  components: Nn,
  typography: Dn
}, Wn = (e) => jn({
  ...Bn,
  ...e
});
export {
  Wn as createAppTheme
};
