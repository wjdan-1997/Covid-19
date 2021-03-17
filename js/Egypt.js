
function Egypt_Covid_19(){
    console.log('Egypt here')
    const Egypt = document.querySelector('#Egypt_sent')
        console.log('Egypt-button', Egypt)
    Egypt.addEventListener('click', (e)=>{
        e.preventDefault()
        
        fetch("https://covid-193.p.rapidapi.com/statistics?country=Egypt", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
    console.log('lol',response);
    document.getElementById("Egypt_continent").innerHTML = ` ${response.response[0].continent}`;
    document.getElementById("Egypt_country").innerHTML = ` ${response.response[0].country}`;
    document.getElementById("Egypt_population").innerHTML = `${response.response[0].population}`;
    document.getElementById("Egypt_day").innerHTML = `${response.response[0].day}`;
    document.getElementById("Egypt_time").innerHTML = `${response.response[0].time}`;
    
    
    document.getElementById("E_Cases_1M_pop").innerHTML = ` ${response.response[0].cases["1M_pop"]}`;
    document.getElementById("E_Cases_active").innerHTML = ` ${response.response[0].cases.active}`;
    document.getElementById("E_Cases_critical").innerHTML = ` ${response.response[0].cases.new}`;
    document.getElementById("E_Cases_new").innerHTML = ` ${response.response[0].cases.recovered}`;
    document.getElementById("E_Cases_recovered").innerHTML = ` ${response.response[0].cases.total}`;
    document.getElementById("E_Cases_total").innerHTML = ` ${response.response[0].cases.critical}`;
       
    document.getElementById("E_deathe_1M_pop").innerHTML = ` ${response.response[0].deaths["1M_pop"]}`;
    document.getElementById("E_deathe_new").innerHTML = ` ${response.response[0].deaths.new}`;
    document.getElementById("E_deathe_total").innerHTML = ` ${response.response[0].deaths.total}`;
    
    
    document.getElementById("E_Tests_1M_pop").innerHTML = ` ${response.response[0].tests["1M_pop"]}`;
    document.getElementById("E_Tests_total").innerHTML = ` ${response.response[0].tests.total}`;
    
    
    })
    .catch(err => {
        console.error(err);
    });
    
    })
    }
    export default Egypt_Covid_19