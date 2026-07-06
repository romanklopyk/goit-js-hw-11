import{a as c,S as u,i as d}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();async function p(t){return(await c.get("https://pixabay.com/api/",{params:{key:"56574812-7e56c45bcaff458824f0ca6f0",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery");function m(t){const o=t.hits.map(e=>`<li class="gallery-item">
                <a href="${e.largeImageURL}">
                  <img class="gallery__image"
                       src="${e.webformatURL}"
                       alt="${e.tags}"
                       data-source="${e.largeImageURL}"
                       data-id="${e.id}">
                </a>
                <div class="description">
                  <p>Likes<span>${e.likes}</span></p>
                  <p>Views<span>${e.views}</span></p>
                  <p>Comments<span>${e.comments}</span></p>
                  <p>Downloads<span>${e.downloads}</span></p>
                </div>
            </li>`).join("");l.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8}).refresh()}function f(){l.innerHTML=""}function y(){let t=document.querySelector(".loader");if(!t){t=document.createElement("div"),t.className="loader";const r=document.querySelector(".gallery");r.parentElement.insertBefore(t,r)}t.style.display="block"}function i(){const t=document.querySelector(".loader");t&&(t.style.display="none")}const g=document.querySelector('[name="search-text"]'),h=document.querySelector(".form");document.querySelector(".gallery");h.addEventListener("submit",async t=>{t.preventDefault(),f();try{y();const r=g.value.trim();if(r==="")return;const o=await p(r);if(o.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i();return}m(o)}catch(r){console.log(r)}finally{i()}});
//# sourceMappingURL=index.js.map
