import{a as y,S as b,i}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const P="46483987-c8443b8397d1fa46fa83b5f89";y.defaults.baseURL="https://pixabay.com/api";async function f(r){const t=new URLSearchParams({key:P,q:r.q,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r.page,per_page:r.per_page,maxPage:1});try{return(await y.get(`?${t.toString()}`)).data}catch(a){throw console.error(a),a}}let d;function p(r){const t=r.map(({tags:a,webformatURL:l,largeImageURL:e,likes:o,views:n,comments:w,downloads:L})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${l}" alt="${a}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${o}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${n}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${w}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${L}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");return g(),t}function g(r){d?d.refresh():d=new b(".images-div a",{captionsData:"alt",captionDelay:250})}const q=document.querySelector("input[type=submit]"),u=document.querySelector("ul.images-div"),c=document.querySelector(".loaderClass"),m=document.querySelector(".load-more"),s={page:1,per_page:15,maxPage:1,q:""};m.addEventListener("click",x);q.addEventListener("click",S);async function S(r){r.preventDefault();const t=document.querySelector('input[name="search"]'),a=document.querySelector(".not-found-el");s.page=1;const l=t.value.trim();if(l===""){i.show({title:"Error",message:"Please enter a valid search query!",color:"red"});return}s.q=l,c.style.display="flex",console.log("Loader shown");try{const e=await f(s),o=Math.ceil(e.totalHits/s.per_page);if(e.totalHits===0){u.innerHTML="",a.innerHTML=`Results for query <span>${l}</span> not found!`,i.show({title:"Error",message:"No images found for this query. Try again!",backgroundColor:"#B51B1B",messageColor:"white",titleColor:"yellow"});return}s.maxPage=o,u.innerHTML=p(e.hits),m.style.display=s.page<s.maxPage?"flex":"none",await h(),g()}catch(e){console.error("Error fetching images:",e),i.show({title:"Error",message:"An error occurred while fetching images. Please try again later.",color:"red"})}finally{c.style.display="none",console.log("Loader hidden")}}async function x(){s.page+=1;try{c.style.display="flex";const r=await f(s),t=p(r.hits);u.insertAdjacentHTML("beforeend",t),await h(),g(),v(),s.page>=s.maxPage&&(i.show({title:"Info",message:"We're sorry, but you've reached the end of search results.",color:"blue"}),m.style.display="none")}catch(r){console.error("Error loading more images:",r),i.show({title:"Error",message:"Failed to load more images. Please try again.",color:"red"})}finally{c.style.display="none",console.log("Loader hidden")}}function v(){const r=document.querySelector(".gallery-card");window.scrollBy({top:r.height*2,behavior:"smooth"})}async function h(){const r=document.querySelectorAll(".gallery-img"),t=Array.from(r).map(a=>new Promise(l=>{a.onload=l,a.onerror=l}));Promise.all(t).then(()=>{console.log(t)}).catch(a=>{c.innerHTML="",console.error(a)})}
//# sourceMappingURL=index.js.map
