import{a as S,S as C,i}from"./assets/vendor-CIu9XFSi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w="52822111-b1008b71650d3ce195bc41da7",$="https://pixabay.com/api/",v=15;async function g(o,r){return(await S.get(`${$}`,{params:{key:w,q:o,per_page:v,page:r,type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more");let x=new C(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(o=[]){d.innerHTML=o.map(({webformatURL:r,tags:s,largeImageURL:a,likes:e,views:t,comments:n,downloads:m})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img  class="gallery-image" src="${r}" alt="${s}" loading="lazy" 
                title="Title: ${s.split(",")[0].trim()}  |  
                Likes: ${e.toLocaleString()}  |  
                View: ${t.toLocaleString()}  |  
                Comments: ${n.toLocaleString()}  |  
                Downloads: ${m.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">View</p>
                    <p class="info-value">${t.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${n.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${m.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join(""),d.insertAdjacentHTML("beforeend",markup),x.refresh()}function E(){d.innerHTML=""}function b(){h.classList.remove("is-hidden")}function c(){h.classList.add("is-hidden")}function P(){y.classList.remove("is-hidden")}function u(){y.classList.add("is-hidden")}const q=document.querySelector(".form"),B=document.querySelector(".load-more");let f="",l=1,p=0;u();c();q.addEventListener("submit",async o=>{o.preventDefault(),E();const r=o.target.elements["search-text"].value.trim();if(r===""){i.warning({message:"Please enter a search term before submitting.",position:"topCenter",timeout:3e3,backgroundColor:"#FFA000",messageColor:"white"});return}f=r,l=1,u();try{b();const s=await g(f,l);if(c(),!s.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1});return}p=s.totalHits,L(s.hits),l*15<p?P():(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))}catch(s){c(),i.error({message:s.message||"An unexpected error occurred.",position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}finally{o.target.elements["search-text"].value=""}});B.addEventListener("click",async()=>{l+=1;try{b();const o=await g(f,l);if(c(),!o.hits.length){u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"});return}L(o.hits);const r=document.querySelector(".gallery-item");if(r){const{height:a}=r.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}l*PER_PAGE>=p&&(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))}catch(o){c(),i.error({message:o.message||"An unexpected error occurred.",position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}});
//# sourceMappingURL=index.js.map
