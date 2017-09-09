var CatStore = ((oldCatStore) => {

	oldCatStore.catLoadWorks = function() {
		let catData = JSON.parse(this.responseText).cats;
		console.log("cat data", catData);
	}

	oldCatStore.ownersLoadWorks = function() {
		let ownerData = JSON.parse(this.responseText).owners;
		console.log("owner data", ownerData);
	}

	oldCatStore.shitBroke = () => {
		console.log("RUINED IT")
	}


	oldCatStore.catXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.catLoadWorks);
		myCats.addEventListener("error", CatStore.shitBroke);
		myCats.open("GET", "./db/cats.json");
		myCats.send();
	};

	oldCatStore.ownerXHR = () => {
		let myOwners = new XMLHttpRequest;
		myOwners.addEventListener("load", CatStore.ownersLoadWorks);
		myOwners.addEventListener("error", CatStore.shitBroke);
		myOwners.open("GET", "./db/owners.json");
		myOwners.send();
	};

	return oldCatStore;
})(CatStore || {})