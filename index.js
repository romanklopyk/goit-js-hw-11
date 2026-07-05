import{a as c,i as u,S as d}from"./assets/vendor-CucEYOFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function m(e){return(await c.get("https://pixabay.com/api/",{params:{key:"56574812-7e56c45bcaff458824f0ca6f0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function p(e){return e.hits.map(r=>`<li class="gallery-item">
                <a href="${r.largeImageURL}">
                  <img class="gallery__image"
                       src="${r.webformatURL}"
                       alt="${r.tags}"
                       data-source="${r.largeImageURL}"
                       data-id="${r.id}">
                </a>
                <div class="description">
                  <p>Views<span>${r.views}</span></p>
                  <p>Comments<span>${r.comments}</span></p>
                  <p>Downloads<span>${r.downloads}</span></p>
                </div>
            </li>`).join("")}function f(e){e.innerHTML=""}function y(){let e=document.querySelector(".loader");if(!e){e=document.createElement("div"),e.className="loader";const a=document.querySelector(".gallery");a.parentElement.insertBefore(e,a)}e.style.display="block"}function i(){const e=document.querySelector(".loader");e&&(e.style.display="none")}const g=document.querySelector('[name="search-text"]'),h=document.querySelector(".form"),l=document.querySelector(".gallery");h.addEventListener("submit",async e=>{e.preventDefault(),f(l);try{y();const a=g.value,r=await m(a);if(r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i();return}l.insertAdjacentHTML("beforeend",p(r)),new d(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8}).refresh(),i()}catch(a){console.log(a)}});
//# sourceMappingURL=index.js.map
