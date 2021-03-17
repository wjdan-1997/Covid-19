
function Yemen_Covid_19(){
    console.log('Yemen here')
    const yemen = document.querySelector('#yemen_sent')
        console.log('Yemen-button', yemen)
    yemen.addEventListener('click', (e)=>{
        e.preventDefault()
        
        fetch("https://covid-193.p.rapidapi.com/statistics?country=Yemen", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
    console.log('lol',response);
    document.getElementById("Yemen_continent").innerHTML = ` ${response.response[0].continent}`;
    document.getElementById("Yemen_country").innerHTML = ` ${response.response[0].country}`;
    document.getElementById("Yemen_population").innerHTML = `${response.response[0].population}`;
    document.getElementById("Yemen_day").innerHTML = `${response.response[0].day}`;
    document.getElementById("Yemen_time").innerHTML = `${response.response[0].time}`;
    
    
    document.getElementById("Y_Cases_1M_pop").innerHTML = ` ${response.response[0].cases["1M_pop"]}`;
    document.getElementById("Y_Cases_active").innerHTML = ` ${response.response[0].cases.active}`;
    document.getElementById("Y_Cases_critical").innerHTML = ` ${response.response[0].cases.new}`;
    document.getElementById("Y_Cases_new").innerHTML = ` ${response.response[0].cases.recovered}`;
    document.getElementById("Y_Cases_recovered").innerHTML = ` ${response.response[0].cases.total}`;
    document.getElementById("Y_Cases_total").innerHTML = ` ${response.response[0].cases.critical}`;
       
    document.getElementById("Y_deathe_1M_pop").innerHTML = ` ${response.response[0].deaths["1M_pop"]}`;
    document.getElementById("Y_deathe_new").innerHTML = ` ${response.response[0].deaths.new}`;
    document.getElementById("Y_deathe_total").innerHTML = ` ${response.response[0].deaths.total}`;
    
    
    document.getElementById("Y_Tests_1M_pop").innerHTML = ` ${response.response[0].tests["1M_pop"]}`;
    document.getElementById("Y_Tests_total").innerHTML = ` ${response.response[0].tests.total}`;
    
    
    })
    .catch(err => {
        console.error(err);
    });
    
    })
    }
    export default Yemen_Covid_19