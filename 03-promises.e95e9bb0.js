var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("iQIUW");const i=document.querySelector(".form");function l(e,n){return new Promise(((o,t)=>{setTimeout((()=>{Math.random()>.3?o(`Fulfilled promise ${e} in ${n}ms`):t(`Rejected promise ${e} in ${n}ms`)}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();const n=+i.delay.value,o=+i.step.value,t=+i.amount.value;for(let e=1;e<=t;e+=1){const t=n+o*(e-1);console.log(t),l(e,t).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e)))}}));
//# sourceMappingURL=03-promises.e95e9bb0.js.map
