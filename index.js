import{a as C,S as q,i as p}from"./assets/vendor-CIu9XFSi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const E="52822111-b1008b71650d3ce195bc41da7",P="https://pixabay.com/api/",m=15;async function L(t,r){return(await C.get(`${P}`,{params:{key:E,q:t,per_page:m,page:r,type:"photo",orientation:"horizontal",safesearch:!0}})).data}const b=document.querySelector(".gallery"),S=document.querySelector(".loader"),w=document.querySelector(".load-more");let B=new q(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function $(t=[]){const r=t.map(({webformatURL:s,tags:i,largeImageURL:e,likes:o,views:n,comments:y,downloads:h})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img  class="gallery-image" src="${s}" alt="${i}" loading="lazy" 
                title="Title: ${i.split(",")[0].trim()}  |  
                Likes: ${o.toLocaleString()}  |  
                View: ${n.toLocaleString()}  |  
                Comments: ${y.toLocaleString()}  |  
                Downloads: ${h.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${o.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">View</p>
                    <p class="info-value">${n.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${y.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${h.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join("");b.insertAdjacentHTML("beforeend",r),B.refresh()}function M(){b.innerHTML=""}function v(){S.classList.remove("is-hidden")}function g(){S.classList.add("is-hidden")}function x(){w.classList.remove("is-hidden")}function a(){w.classList.add("is-hidden")}const A=document.querySelector(".form"),F=document.querySelector(".load-more");let c="",l=1,u=0;const d=t=>{p.error({message:t,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})},f=()=>{p.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})};a();g();A.addEventListener("submit",async t=>{t.preventDefault(),M();const r=t.target.elements["search-text"].value.trim();if(r===""){p.warning({message:"Please enter a search term before submitting.",position:"topCenter",timeout:3e3,backgroundColor:"#FFA000",messageColor:"white"});return}c=r,l=1,a();try{v();const s=await L(c,l);if(!s.hits.length){d("Sorry, there are no images matching your search query. Please try again!");return}u=s.totalHits,$(s.hits),l*m<u?x():(a(),f())}catch(s){d(s.message||"An unexpected error occurred.")}finally{g(),t.target.elements["search-text"].value=""}});F.addEventListener("click",async()=>{l+=1,a();try{v();const t=await L(c,l);if(!t.hits.length){a(),f();return}$(t.hits);const r=document.querySelector(".gallery-item");if(r){const{height:i}=r.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}l*m>=u?(a(),f()):x()}catch(t){d(t.message||"An unexpected error occurred."),a()}finally{g()}});
//# sourceMappingURL=index.js.map
