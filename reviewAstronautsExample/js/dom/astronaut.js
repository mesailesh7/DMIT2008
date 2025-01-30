/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

// I want you create a method called renderAstronaut
// return the html list item
// export that function
// use this function in the index.js
const renderAstronaut = (astronautData) => {
    // the astronaut data is the data from
    // the api, change the capitalize pieces to the data.

    // we're only going to select the first nationality here.
    let nationality = astronautData.nationality[0].nationality_name

    // as an option above you could essentially map through all of
    // the nationalities.

    // let's use some of knowledge
    let {name, date_of_birth, bio} = astronautData

    return `<li href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
          <img src="${astronautData.image.thumbnail_url}" class="rounded float-start" alt=""">
          <h5 class="mb-1">${name} (${astronautData.status.name})</h5>
          <small class="float-end">born ${date_of_birth}</small>
      </div>
      <small>${nationality} (${astronautData.agency.abbrev})</small>
      <p class="mb-1">${bio}</p>
  </li>`
}

export {renderAstronaut}
