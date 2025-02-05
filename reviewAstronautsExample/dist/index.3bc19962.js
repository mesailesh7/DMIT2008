const e=async({search:e})=>{let t={mode:"list"};e&&(t.search=e),console.log(t);let a=new URLSearchParams(t);console.log(a);let s=`https://ll.thespacedevs.com/2.3.0/astronauts/?${a.toString()}`;console.log(s);let l=await fetch(s,{method:"GET"});if(!l.ok)throw Error("Error Fetching response");return await l.json()},t=e=>{let t=e.nationality[0].nationality_name,{name:a,date_of_birth:s,bio:l}=e;return`<li href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
          <img src="${e.image.thumbnail_url}" class="rounded float-start" alt=""">
          <h5 class="mb-1">${a} (${e.status.name})</h5>
          <small class="float-end">born ${s}</small>
      </div>
      <small>${t} (${e.agency.abbrev})</small>
      <p class="mb-1">${l}</p>
  </li>`};let a=document.querySelector("#search-astronauts");a.addEventListener("submit",e=>{e.preventDefault();let t=a.elements.search;console.log(t.value),s(t.value)});const s=async a=>{let s=document.querySelector(".astronaut-list"),l=await e({search:a});console.log(l),s.innerHTML="",l.results.map(e=>{let a=t(e);s.innerHTML+=a})};document.addEventListener("DOMContentLoaded",async()=>{await s()});
//# sourceMappingURL=index.3bc19962.js.map
