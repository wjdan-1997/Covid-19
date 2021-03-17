
function Bahrain_Covid_19(){
    console.log('Bahrain here')
    const Bahrain = document.querySelector('#Bahrain_sent')
        console.log('Bahrain-button', Bahrain)
    Bahrain.addEventListener('click', (e)=>{
        e.preventDefault()
        
        fetch("https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-cross-currencies?id=aed%2Caud%2Cbrl%2Ccad%2Cchf%2Ccnh%2Ccny%2Ccop%2Cczk%2Cdkk%2Ceur%2Cgbp%2Chkd%2Chuf%2Cidr%2Cils%2Cinr%2Cjpy%2Ckrw%2Cmxn%2Cmyr%2Cnok%2Cnzd%2Cphp%2Cpln%2Crub%2Csek%2Csgd%2Cthb%2Ctry%2Ctwd%2Cusd%2Czar", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
                "x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com"
            }


    
})
.then(response => response.json())
.then(response => {
    console.log('lol',response);
    // document.getElementById("Bahrain_continent").innerHTML = ` ${response.response[0].continent}`;
    // document.getElementById("Bahrain_country").innerHTML = ` ${response.response[0].country}`;
    // document.getElementById("Bahrain_population").innerHTML = `${response.response[0].population}`;
    // document.getElementById("Bahrain_day").innerHTML = `${response.response[0].day}`;
    // document.getElementById("Bahrain_time").innerHTML = `${response.response[0].time}`;
    // document.getElementById("B_Cases_1M_pop").innerHTML = ` ${response.response[0].cases["1M_pop"]}`;
    // document.getElementById("B_Cases_active").innerHTML = ` ${response.response[0].cases.active}`;
    // document.getElementById("B_Cases_critical").innerHTML = ` ${response.response[0].cases.new}`;
    // document.getElementById("B_Cases_new").innerHTML = ` ${response.response[0].cases.recovered}`;
    // document.getElementById("B_Cases_recovered").innerHTML = ` ${response.response[0].cases.total}`;
    // document.getElementById("B_Cases_total").innerHTML = ` ${response.response[0].cases.critical}`;
    // document.getElementById("B_deathe_1M_pop").innerHTML = ` ${response.response[0].deaths["1M_pop"]}`;
    // document.getElementById("B_deathe_new").innerHTML = ` ${response.response[0].deaths.new}`;
    // document.getElementById("B_deathe_total").innerHTML = ` ${response.response[0].deaths.total}`;
    // document.getElementById("B_Tests_1M_pop").innerHTML = ` ${response.response[0].tests["1M_pop"]}`;
    // document.getElementById("B_Tests_total").innerHTML = ` ${response.response[0].tests.total}`;   
    })
    .catch(err => {
        console.error(err);
    });
    
    })
    }
    export default Bahrain_Covid_19