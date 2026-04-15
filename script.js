
async function getWeather() {
  let city = document.getElementById("city").value;

  if(city === ""){
    alert("Enter city name");
    return;
  }

  try {
    let res = await fetch(`https://goweather.xyz/weather/${city}`);
    let data = await res.json();

   let result= document.getElementById("result")
   result.innerHTML = `
      <div class="card">
        <h2>${city}</h2>
        <p>🌡️ Temperature: ${data.temperature}</p>
        <p>🌬️ Wind: ${data.wind}</p>
        <p>🌥️ Description: ${data.description}</p>
      </div>
    `
  } catch (error) {
    result.innerHTML = "Error fetching data";
  }
}

let btn=document.getElementById("btn")
btn.addEventListener("click",getWeather)
getWeather()
