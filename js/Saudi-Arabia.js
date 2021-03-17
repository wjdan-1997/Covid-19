
function Saudi_Covid_19(){
console.log('Sausi-Arabi here')
const sent = document.querySelector('#sent')
    console.log('Saudi-Arabi-button', sent)
sent.addEventListener('click', (e)=>{
    e.preventDefault()
    
    fetch("https://covid-193.p.rapidapi.com/statistics?country=Saudi-Arabia", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
            "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
console.log('lol',response);
document.getElementById("Saudi_continent").innerHTML = ` ${response.response[0].continent}`;
document.getElementById("Saudi_country").innerHTML = ` ${response.response[0].country}`;
document.getElementById("Saudi_population").innerHTML = `${response.response[0].population}`;
document.getElementById("Saudi_day").innerHTML = `${response.response[0].day}`;
document.getElementById("Saudi_time").innerHTML = `${response.response[0].time}`;


document.getElementById("Cases_1M_pop").innerHTML = ` ${response.response[0].cases["1M_pop"]}`;
document.getElementById("Cases_active").innerHTML = ` ${response.response[0].cases.active}`;
document.getElementById("Cases_critical").innerHTML = ` ${response.response[0].cases.new}`;
document.getElementById("Cases_new").innerHTML = ` ${response.response[0].cases.recovered}`;
document.getElementById("Cases_recovered").innerHTML = ` ${response.response[0].cases.total}`;
document.getElementById("Cases_total").innerHTML = ` ${response.response[0].cases.critical}`;
   
document.getElementById("deathe_1M_pop").innerHTML = ` ${response.response[0].deaths["1M_pop"]}`;
document.getElementById("deathe_new").innerHTML = ` ${response.response[0].deaths.new}`;
document.getElementById("deathe_total").innerHTML = ` ${response.response[0].deaths.total}`;


document.getElementById("Tests_1M_pop").innerHTML = ` ${response.response[0].tests["1M_pop"]}`;
document.getElementById("Tests_total").innerHTML = ` ${response.response[0].tests.total}`;


})
.catch(err => {
    console.error(err);
});

})
}
export default Saudi_Covid_19