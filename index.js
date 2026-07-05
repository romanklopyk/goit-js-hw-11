import{a as c,i as u,S as d}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();async function m(e){return(await c.get("https://pixabay.com/api/",{params:{key:"56574812-7e56c45bcaff458824f0ca6f0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function p(e){return e.hits.map(r=>`<li class="gallery-item">
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
            </li>`).join("")}function f(e){e.innerHTML=""}function y(){let e=document.querySelector(".loader");if(!e){e=document.createElement("div"),e.className="loader";const o=document.querySelector(".gallery");o.parentElement.insertBefore(e,o)}e.style.display="block"}function i(){const e=document.querySelector(".loader");e&&(e.style.display="none")}const g=document.querySelector('[name="search-text"]'),h=document.querySelector(".form"),l=document.querySelector(".gallery");h.addEventListener("submit",async e=>{e.preventDefault(),f(l),y();const o=g.value,r=await m(o);if(r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i();return}l.insertAdjacentHTML("beforeend",p(r)),new d(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8}).refresh(),i()});
//# sourceMappingURL=index.js.map
