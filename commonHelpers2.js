import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l={form:document.querySelector(".feedback-form"),email:document.querySelector('input[type="email"]'),message:document.querySelector("textarea")},{form:r,email:a,message:o}=l,t={email:"",message:""};function n(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(a.value=e.email||"",o.value=e.message||"")}function m(e){if(e.preventDefault(),a.value===""||o.value===""){alert("Please fill all fields");return}console.log("Data sent successfully"),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}function s(e){e.preventDefault(),t[e.target.name]=e.target.value,!(a.value===""||o.value==="")&&(console.log(t),localStorage.setItem("feedback-form-state",JSON.stringify(t)))}r.addEventListener("submit",m);r.addEventListener("input",s);document.addEventListener("DOMContentLoaded",n);document.addEventListener("DOMContentLoaded",n);
//# sourceMappingURL=commonHelpers2.js.map
