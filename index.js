import{a as y,S as b,i}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const P="46483987-c8443b8397d1fa46fa83b5f89";y.defaults.baseURL="https://pixabay.com/api";async function f(r){const o=new URLSearchParams({key:P,q:r.q,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r.page,per_page:r.per_page,maxPage:1});try{return(await y.get(`?${o.toString()}`)).data}catch(a){throw console.error(a),a}}let d;function p(r){const o=r.map(({tags:a,webformatURL:l,largeImageURL:e,likes:t,views:n,comments:w,downloads:L})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${l}" alt="${a}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${t}</li>
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
      </li>`).join("");return g(),o}function g(r){d?d.refresh():d=new b(".images-div a",{captionsData:"alt",captionDelay:250})}const q=document.querySelector("input[type=submit]"),u=document.querySelector("ul.images-div"),c=document.querySelector(".loaderClass"),m=document.querySelector(".load-more"),s={page:1,per_page:15,maxPage:1,q:""};m.addEventListener("click",x);q.addEventListener("click",S);async function S(r){r.preventDefault();const o=document.querySelector('input[name="search"]'),a=document.querySelector(".not-found-el");s.page=1;const l=o.value.trim();if(l===""){i.show({title:"Error",message:"Please enter a valid search query!",color:"red"});return}s.q=l,c.style.display="flex",console.log("Loader shown");try{const e=await f(s),t=Math.ceil(e.totalHits/s.per_page);if(e.totalHits===0){u.innerHTML="",a.innerHTML=`Results for query <span>${l}</span> not found!`,i.show({title:"Error",message:"No images found for this query. Try again!",backgroundColor:"#B51B1B",messageColor:"white",titleColor:"yellow"});return}s.maxPage=t,u.innerHTML=p(e.hits),m.style.display=s.page<s.maxPage?"flex":"none",await h(),g()}catch(e){console.error("Error fetching images:",e),i.show({title:"Error",message:"An error occurred while fetching images. Please try again later.",color:"red"})}finally{c.style.display="none",console.log("Loader hidden")}}async function x(){s.page+=1;try{c.style.display="flex";const r=await f(s),o=p(r.hits);u.insertAdjacentHTML("beforeend",o),await h(),g(),v(),s.page>=s.maxPage&&(i.show({title:"Info",message:"We're sorry, but you've reached the end of search results.",color:"blue"}),m.style.display="none")}catch(r){console.error("Error loading more images:",r),i.show({title:"Error",message:"Failed to load more images. Please try again.",color:"red"})}finally{c.style.display="none",console.log("Loader hidden")}}function v(){const o=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}async function h(){const r=document.querySelectorAll(".gallery-img"),o=Array.from(r).map(a=>new Promise(l=>{a.onload=l,a.onerror=l}));Promise.all(o).then(()=>{console.log(o)}).catch(a=>{c.innerHTML="",console.error(a)})}
//# sourceMappingURL=index.js.map
