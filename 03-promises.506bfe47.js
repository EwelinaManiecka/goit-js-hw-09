function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function l(t,n){new Promise(((e,r)=>{setTimeout((()=>{Math.random()>.3?e({position:t,delay:n}):r({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.elements.delay.value),n=Number(e.currentTarget.elements.step.value),r=Number(e.currentTarget.elements.amount.value);for(let e=0;e<r;e++){l(e+1,e*n+t)}}));
//# sourceMappingURL=03-promises.506bfe47.js.map
