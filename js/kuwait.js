// Kwuait City 

function Kwuai_covid_19 (){
console.log('Kwuait here')
const kwuait = document.getElementById('sent_kwuait') // done 
    console.log('Kwuait_button', kwuait)  // done 
kwuait.addEventListener('click', (e)=>{
    e.preventDefault()
    
    fetch("https://covid-193.p.rapidapi.com/statistics?country=Kuwait", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
            "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response =>{
        console.log("Kwuait statistics", response)
        // document.getElementById("Kuwait_continent").innerHTML = ` ${response.response[0].continent}`;
document.getElementById("Kuwait_continent").innerHTML = ` ${response.response[0].continent}`;
document.getElementById("Kuwait_population").innerHTML = `${response.response[0].country}`;
document.getElementById("Kuwait_day").innerHTML = `${response.response[0].day}`;
document.getElementById("Kuwait_time").innerHTML = `${response.response[0].time}`;


document.getElementById("K_Cases_1M_pop").innerHTML = ` ${response.response[0].cases["1M_pop"]}`;
document.getElementById("K_Cases_active").innerHTML = ` ${response.response[0].cases.active}`;
document.getElementById("K_Cases_critical").innerHTML = ` ${response.response[0].cases.new}`;
document.getElementById("K_Cases_new").innerHTML = ` ${response.response[0].cases.recovered}`;
document.getElementById("K_Cases_recovered").innerHTML = ` ${response.response[0].cases.total}`;
document.getElementById("K_Cases_total").innerHTML = ` ${response.response[0].cases.critical}`;
   
document.getElementById("K_deathe_1M_pop").innerHTML = ` ${response.response[0].deaths["1M_pop"]}`;
document.getElementById("K_deathe_new").innerHTML = ` ${response.response[0].deaths.new}`;
document.getElementById("K_deathe_total").innerHTML = ` ${response.response[0].deaths.total}`;


document.getElementById("K_Tests_1M_pop").innerHTML = ` ${response.response[0].tests["1M_pop"]}`;
document.getElementById("K_Tests_total").innerHTML = ` ${response.response[0].tests.total}`;
    })
    .catch(err => {
        console.error(err);
    });
})
} 
 export default Kwuai_covid_19








































