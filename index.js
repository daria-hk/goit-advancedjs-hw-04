import{a as p,S as P,i as c}from"./assets/vendor-C4-ZuMk8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const x="46483987-c8443b8397d1fa46fa83b5f89";p.defaults.baseURL="https://pixabay.com/api";async function f(o){const r=new URLSearchParams({key:x,q:o.q,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o.page,per_page:o.per_page,maxPage:1});try{return(await p.get(`?${r.toString()}`)).data}catch(t){throw console.error(t),t}}let u;function h(o){const r=o.map(({tags:t,webformatURL:s,largeImageURL:e,likes:a,views:i,comments:L,downloads:b})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${s}" alt="${t}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${a}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${i}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${L}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${b}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");return m(),r}function m(o){u?u.refresh():u=new P(".images-div a",{captionsData:"alt",captionDelay:250})}const q=document.querySelector("input[type=submit]"),y=document.querySelector("ul.images-div"),d=document.querySelector(".loaderClass"),n=document.querySelector(".load-more"),g=document.querySelector(".loading-button"),l={page:1,per_page:15,maxPage:1,q:""};n.addEventListener("click",v);q.addEventListener("click",S);async function S(o){o.preventDefault();const r=document.querySelector('input[name="search"]'),t=document.querySelector(".not-found-el");l.page=1;const s=r.value.trim();if(s===""){c.show({title:"Error",message:"Please enter a valid search query!",color:"red"});return}l.q=s,d.style.display="flex",console.log("Loader shown");try{const e=await f(l),a=Math.ceil(e.totalHits/l.per_page);if(e.totalHits===0){y.innerHTML="",t.innerHTML=`Results for query <span>${s}</span> not found!`,c.show({title:"Error",message:"No images found for this query. Try again!",backgroundColor:"#B51B1B",messageColor:"white",titleColor:"yellow"}),t.style.display="flex",n.style.display="none";return}else t.style.display="none";l.maxPage=a,y.innerHTML=h(e.hits),n.style.display=l.page<l.maxPage?"flex":"none",g.style.display="none",await w(),m()}catch(e){console.error("Error fetching images:",e),c.show({title:"Error",message:"An error occurred while fetching images. Please try again later.",color:"red"})}finally{d.style.display="none",console.log("Loader hidden")}}async function v(){l.page+=1,g.style.display="flex";try{n.style.display="none",d.style.display="flex";const o=await f(l),r=h(o.hits);y.insertAdjacentHTML("beforeend",r),await w(),m(),E(),l.page>=l.maxPage&&(c.show({title:"Info",message:"We're sorry, but you've reached the end of search results.",color:"blue"}),n.style.display="none")}catch(o){console.error("Error loading more images:",o),c.show({title:"Error",message:"Failed to load more images. Please try again.",color:"red"})}finally{l.page>=l.maxPage?n.style.display="none":n.style.display="flex",g.style.display="none",d.style.display="none",console.log("Loader hidden")}}function E(){const r=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}async function w(){const o=document.querySelectorAll(".gallery-img"),r=Array.from(o).map(t=>new Promise(s=>{t.onload=s,t.onerror=s}));Promise.all(r).then(()=>{console.log(r)}).catch(t=>{d.innerHTML="",console.error(t)})}
//# sourceMappingURL=index.js.map
