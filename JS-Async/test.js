

let city = prompt("Enter A City Name: ");
// Taking City name from user


async function weather(city){
  try{

    // Using city variable in fetch URL according to openweather API docs
    let url =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eeb3c46cdc1d276ac7ed1cbaa2d677c&units=metric`);
    
    let data = await url.json()

    if (data.cod==='404'){
      throw new Error(`Invalid Link`);}
    
    else{

      let main = data.main // making variables as per json response

      console.log("\nASYNC FUNCTION RESPONSE")
      console.log(`Pressure: ${main.pressure}`) // to access specific weather info from the json
      console.log(`Humidity: ${main.humidity}`)

    }
  }
  catch(e){
    console.log(`${e}`)
    // To handle errors like unknown city name is entered
  }
}

// Calling the async weather function and passing the city input taken from user
weather(city) 



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eeb3c46cdc1d276ac7ed1cbaa2d677c&units=metric`)
.then(response => response.json())
.then(data =>{  
  
  if (data.cod==='404'){
    throw new Error(`Invalid Link`);}

  else{
    let main = data.main; // making variables as per json response
    console.log("\n.then() RESPONSE") 
  
    console.log(`Current Temperature: ${main.temp}`) // to access specific weather info from the json
    console.log(`Temperature High: ${main.temp_max}`)
    console.log(`Temperature Low: ${main.temp_min}`)
    console.log(`Feels Like: ${main.feels_like}`)
  }
})
.catch((e)=> console.log(`${e}`))   // To handle errors like unknown city name is entered


