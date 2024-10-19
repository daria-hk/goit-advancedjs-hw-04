import{S as d,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="46483987-c8443b8397d1fa46fa83b5f89";function y(l){const t=new URLSearchParams({key:f,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${t.toString()}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let c;function h(l){const t=l.map(({tags:o,webformatURL:s,largeImageURL:e,likes:r,views:i,comments:n,downloads:a})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${s}" alt="${o}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${r}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${i}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${n}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${a}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");g(t)}function g(l){const t=document.querySelector("ul.images-div");t.innerHTML=l,c?c.refresh():c=new d(".images-div a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector("input[type=submit]"),S=document.querySelector(".images-div"),u=document.querySelector(".loaderClass");p.addEventListener("click",b);function b(l){l.preventDefault();let t=document.querySelector('input[name="search"]'),o=document.querySelector(".not-found-el"),s=t.value.trim();if(s<=0){m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}u.style.display="flex",y(s).then(e=>{if(e.total===0){S.innerHTML="",o.innerHTML=`Results for query <span>${s}</span> not found!`,m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"white",titleColor:"yellow"});return}h(e.hits);const r=document.querySelectorAll(".gallery-img"),i=Array.from(r).map(n=>new Promise(a=>{n.onload=a,n.onerror=a}));Promise.all(i).then(()=>{console.log(i)}).catch(n=>{u.innerHTML="",console.error(n)})}).catch(console.error).finally(()=>{console.log("completed"),u.style.display="none"}),t.value=""}
//# sourceMappingURL=index.js.map
