import{a as C,S as w,i as a}from"./assets/vendor-CIu9XFSi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const $="52822111-b1008b71650d3ce195bc41da7",v="https://pixabay.com/api/",x=15;async function g(o,r){return(await C.get(`${v}`,{params:{key:$,q:o,per_page:x,page:r,type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),L=document.querySelector(".load-more");let E=new w(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function b(o=[]){const r=o.map(({webformatURL:s,tags:i,largeImageURL:e,likes:t,views:n,comments:p,downloads:m})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img  class="gallery-image" src="${s}" alt="${i}" loading="lazy" 
                title="Title: ${i.split(",")[0].trim()}  |  
                Likes: ${t.toLocaleString()}  |  
                View: ${n.toLocaleString()}  |  
                Comments: ${p.toLocaleString()}  |  
                Downloads: ${m.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${t.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">View</p>
                    <p class="info-value">${n.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${p.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${m.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join("");h.insertAdjacentHTML("beforeend",r),E.refresh()}function P(){h.innerHTML=""}function S(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}function q(){L.classList.remove("is-hidden")}function u(){L.classList.add("is-hidden")}const B=document.querySelector(".form"),F=document.querySelector(".load-more");let d="",l=1,f=0;u();c();B.addEventListener("submit",async o=>{o.preventDefault(),P();const r=o.target.elements["search-text"].value.trim();if(r===""){a.warning({message:"Please enter a search term before submitting.",position:"topCenter",timeout:3e3,backgroundColor:"#FFA000",messageColor:"white"});return}d=r,l=1,u();try{S();const s=await g(d,l);if(c(),!s.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1});return}f=s.totalHits,b(s.hits),l*15<f?q():(u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))}catch(s){c(),a.error({message:s.message||"An unexpected error occurred.",position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}finally{o.target.elements["search-text"].value=""}});F.addEventListener("click",async()=>{l+=1;try{S();const o=await g(d,l);if(c(),!o.hits.length){u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"});return}b(o.hits);const r=document.querySelector(".gallery-item");if(r){const{height:i}=r.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}l*PER_PAGE>=f&&(u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))}catch(o){c(),a.error({message:o.message||"An unexpected error occurred.",position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}});
//# sourceMappingURL=index.js.map
