
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=11.847676&bl_longitude=108.473209&tr_longitude=109.149359&tr_latitude=12.838442&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1");
xhr.setRequestHeader("X-RapidAPI-Key", "4b96938647mshd866b09f142e6e0p1ba0adjsndcfd58c620a1");
xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");

xhr.send(data);