import{a as f,S as P,i as c}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const q="46483987-c8443b8397d1fa46fa83b5f89";f.defaults.baseURL="https://pixabay.com/api";async function p(r){const o=new URLSearchParams({key:q,q:r.q,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r.page,per_page:r.per_page,maxPage:1});try{return(await f.get(`?${o.toString()}`)).data}catch(a){throw console.error(a),a}}let u;function h(r){const o=r.map(({tags:a,webformatURL:s,largeImageURL:e,likes:t,views:i,comments:L,downloads:b})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${s}" alt="${a}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${t}</li>
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
      </li>`).join("");return m(),o}function m(r){u?u.refresh():u=new P(".images-div a",{captionsData:"alt",captionDelay:250})}const x=document.querySelector("input[type=submit]"),g=document.querySelector("ul.images-div"),d=document.querySelector(".loaderClass"),n=document.querySelector(".load-more"),y=document.querySelector(".loading-button"),l={page:1,per_page:15,maxPage:1,q:""};n.addEventListener("click",v);x.addEventListener("click",S);async function S(r){r.preventDefault();const o=document.querySelector('input[name="search"]'),a=document.querySelector(".not-found-el");l.page=1;const s=o.value.trim();if(s===""){c.show({title:"Error",message:"Please enter a valid search query!",color:"red"});return}l.q=s,d.style.display="flex",console.log("Loader shown");try{const e=await p(l),t=Math.ceil(e.totalHits/l.per_page);if(e.totalHits===0){g.innerHTML="",a.innerHTML=`Results for query <span>${s}</span> not found!`,c.show({title:"Error",message:"No images found for this query. Try again!",backgroundColor:"#B51B1B",messageColor:"white",titleColor:"yellow"});return}l.maxPage=t,g.innerHTML=h(e.hits),n.style.display=l.page<l.maxPage?"flex":"none",y.style.display="none",await w(),m()}catch(e){console.error("Error fetching images:",e),c.show({title:"Error",message:"An error occurred while fetching images. Please try again later.",color:"red"})}finally{d.style.display="none",console.log("Loader hidden")}}async function v(){l.page+=1,y.style.display="flex";try{n.style.display="none",d.style.display="flex";const r=await p(l),o=h(r.hits);g.insertAdjacentHTML("beforeend",o),await w(),m(),E(),l.page>=l.maxPage&&(c.show({title:"Info",message:"We're sorry, but you've reached the end of search results.",color:"blue"}),n.style.display="none")}catch(r){console.error("Error loading more images:",r),c.show({title:"Error",message:"Failed to load more images. Please try again.",color:"red"})}finally{l.page>=l.maxPage?n.style.display="none":n.style.display="flex",y.style.display="none",d.style.display="none",console.log("Loader hidden")}}function E(){const o=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}async function w(){const r=document.querySelectorAll(".gallery-img"),o=Array.from(r).map(a=>new Promise(s=>{a.onload=s,a.onerror=s}));Promise.all(o).then(()=>{console.log(o)}).catch(a=>{d.innerHTML="",console.error(a)})}
//# sourceMappingURL=index.js.map
