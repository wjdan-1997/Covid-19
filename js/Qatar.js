

function Qatar_Covid_19(){
    console.log('Qatar here')
    const Qatar = document.querySelector('#Qatar_sent')
        console.log('Qatar-button', Qatar)
    Qatar.addEventListener('click', (e)=>{
        e.preventDefault()
        
        fetch("https://covid-193.p.rapidapi.com/statistics?country=Qatar", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
    console.log('lol',response);
    document.getElementById("Qatar_continent").innerHTML = ` ${response.response[0].continent}`;
    document.getElementById("Qatar_country").innerHTML = ` ${response.response[0].country}`;
    document.getElementById("Qatar_population").innerHTML = `${response.response[0].population}`;
    document.getElementById("Qatar_day").innerHTML = `${response.response[0].day}`;
    document.getElementById("Qatar_time").innerHTML = `${response.response[0].time}`;
    
    
    document.getElementById("Q_Cases_1M_pop").innerHTML = ` ${response.response[0].cases["1M_pop"]}`;
    document.getElementById("Q_Cases_active").innerHTML = ` ${response.response[0].cases.active}`;
    document.getElementById("Q_Cases_critical").innerHTML = ` ${response.response[0].cases.new}`;
    document.getElementById("Q_Cases_new").innerHTML = ` ${response.response[0].cases.recovered}`;
    document.getElementById("Q_Cases_recovered").innerHTML = ` ${response.response[0].cases.total}`;
    document.getElementById("Q_Cases_total").innerHTML = ` ${response.response[0].cases.critical}`;
       
    document.getElementById("Q_deathe_1M_pop").innerHTML = ` ${response.response[0].deaths["1M_pop"]}`;
    document.getElementById("Q_deathe_new").innerHTML = ` ${response.response[0].deaths.new}`;
    document.getElementById("Q_deathe_total").innerHTML = ` ${response.response[0].deaths.total}`;
    
    
    document.getElementById("Q_Tests_1M_pop").innerHTML = ` ${response.response[0].tests["1M_pop"]}`;
    document.getElementById("Q_Tests_total").innerHTML = ` ${response.response[0].tests.total}`;
    
    
    })
    .catch(err => {
        console.error(err);
    });
    
    })
    }
    export default Qatar_Covid_19