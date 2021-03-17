//import { response } from "express"
import Kwuai_covid_19 from './kuwait.js'
import Saudi_Covid_19 from './Saudi-Arabia.js'
import Yemen_Covid_19 from './Yemen.js'
import Egypt_Covid_19 from './Egypt.js'
import Bahrain_Covid_19 from './Bahrain.js'
import Qatar_Covid_19 from './Qatar.js'
import Fetch_All_statistics from './Fetch_All_statistics.js'




//console.log('yes here all functions imported')
// Saudi_Covid_19()
// Kwuai_covid_19 ()
// Yemen_Covid_19()

// Bahrain_Covid_19()
// Qatar_Covid_19()
Fetch_All_statistics()
//console.log('Done')



//const statistics =document.querySelector('#statistics')
document.addEventListener('DOMContentLoaded',(e)=>{
e.preventDefault()
fetch("https://covid-19-data.p.rapidapi.com/totals", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
})
.then(response => response.json()) 
.then(response => {
    console.log('statistics',response)

     document.getElementById("Worldwide_cases_total").innerHTML = ` ${response[0].confirmed}`;
    //document.getElementById("Worldwide_cases_new").innerHTML = `  ${response}`;
     document.getElementById("World_recovered").innerHTML = ` ${response[0].recovered}`;
    //document.getElementById("Worldwide_none").innerHTML = `-`;
    document.getElementById("Worldwide_deaths_total").innerHTML = ` ${response[0].deaths}`;
   
   

}) .catch(err => {
    console.error(err);
    });
           
       
})