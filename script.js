const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a5eec284cmsh4c670210a7bc226p14e918jsnf2cc5f3cda7d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
    cityName.innerHTML = city 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp        
            wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("New Delhi")

const cities =["Seattle" , "Boston" , "Srinagar", "Lucknow", "Kolkata"];

// api url
const api_url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Temp</th>
		<th>Max Temp</th>
		<th>Min Temp</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.office}</td>
	<td>${r.position}</td>
	<td>${r.salary}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
