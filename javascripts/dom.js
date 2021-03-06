var CatStore = ((oldCatStore) => {

	oldCatStore.combineArrays = (cats, owners) => {
		// debugger;
		cats.forEach((cat) => {
			owners.forEach((owner) => {
				if (cat.ownerId === owner.id) {
					cat.owner = owner.name;
				}
			});
		});
		CatStore.writeToDom(cats);
	};

	oldCatStore.writeToDom = (inputArray) => {
		//write some strings
		let catz = '';
        for(let i=0; i<inputArray.length; i++){
            let newCat = "";
            newCat+=`<div class="col-xs-3">`
            newCat+=`<div class="catBox col-xs-12 text-center noPad"  id="catBox-${i}">`;
            newCat+=`<div class="catName">${inputArray[i].name}</div>`;
            newCat+=`<img class="catImage" src="${inputArray[i].imageUrl}">`;
            if(inputArray[i].owner !== "None"){
                newCat+= `<button class="btn btn-default owner">${inputArray[i].owner}</button>`
            } else {
                newCat+= `<button class="btn btn-danger owner" id="adopt-${i}">Adopt Me!</button>`
            }
            newCat+= `<div class="catSkill text-center">${inputArray[i].specialSkill}</div>`
            newCat+= `</div>`
            newCat+= `</div>`
            catz += newCat;
        }
		CatStore.domString(catz);
		// console.log(catz);
	};

	oldCatStore.domString = (strang) => {
		var outputEl = document.getElementById("outputdiv");
		outputEl.innerHTML = strang;
	};

	return oldCatStore;
})(CatStore || {})