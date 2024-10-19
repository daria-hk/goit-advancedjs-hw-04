import{a as m,S as f,i as d}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="46483987-c8443b8397d1fa46fa83b5f89";m.defaults.baseURL="https://pixabay.com/api";async function g(l){const t=new URLSearchParams({key:y,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await m.get(`?${t.toString()}`)).data}catch(o){throw console.error(o),o}}let c;function h(l){const t=l.map(({tags:o,webformatURL:s,largeImageURL:e,likes:r,views:a,comments:i,downloads:n})=>`
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
                    <li>${a}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${i}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${n}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");p(t)}function p(l){const t=document.querySelector("ul.images-div");t.innerHTML=l,c?c.refresh():c=new f(".images-div a",{captionsData:"alt",captionDelay:250})}const b=document.querySelector("input[type=submit]"),L=document.querySelector(".images-div"),u=document.querySelector(".loaderClass");b.addEventListener("click",S);async function S(l){l.preventDefault();let t=document.querySelector('input[name="search"]'),o=document.querySelector(".not-found-el"),s=t.value.trim();if(s<=0){d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}u.style.display="flex";try{const e=await g(s);if(console.log(e),e.total===0){L.innerHTML="",o.innerHTML=`Results for query <span>${s}</span> not found!`,d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"white",titleColor:"yellow"});return}h(e.hits);const r=document.querySelectorAll(".gallery-img"),a=Array.from(r).map(i=>new Promise(n=>{i.onload=n,i.onerror=n}));Promise.all(a).then(()=>{console.log(a)}).catch(i=>{u.innerHTML="",console.error(i)})}catch(e){console.log(e)}finally{console.log("completed"),u.style.display="none"}}
//# sourceMappingURL=index.js.map
