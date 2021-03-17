function Fetch_All_statistics(){
    const fetch_statistics = document.getElementById('fetch_statistics');
  
fetch_statistics.addEventListener('click',(w)=>{
w.preventDefault()
fetch("https://covid-193.p.rapidapi.com/statistics", {
"method": "GET",
"headers": {
    "x-rapidapi-key": "55f21114f5mshb14fba71a57d3fbp19016ejsn707c9f97e9fa",
    "x-raidapi-host": "covid-193.p.rapidapi.com"
}
})
.then(response => response.json()) 
.then(response => {
    let RESPONSE = response.response
    let res = RESPONSE 
    console.log('RESPONSE',RESPONSE)

    let text =document.getElementById('text')
    // let sa = res.filter(v => v.continent == 'Asia');
    let sa = getCountryStat(text.value, res);
    if (sa !== null) {
     
    document.getElementById("country").innerHTML = ` ${sa.country}`;
        

    document.getElementById("cases_total").innerHTML = ` ${sa.cases.total}`;
    document.getElementById("cases_new").innerHTML = `  ${sa.cases.new}`;

    document.getElementById("recovered").innerHTML = ` ${sa.cases.recovered}`;
    document.getElementById("none").innerHTML = `-`;

     document.getElementById("deaths_total").innerHTML = ` ${sa.deaths.total}`;
     document.getElementById("deaths_new").innerHTML = ` ${sa.deaths.new}`;
  
    document.getElementById("none").innerHTML = `-`;
    document.getElementById("tests_total").innerHTML = ` ${sa.tests.total}`;


    }
    console.log('sa:',sa);
}) 
.catch(err => {
console.error(err);
});
})
}
// let list = [];
// list.length = 0;
// list;
function getCountryStat(country, data) {
//     let a;
//     for (let i; i < data.length; i++) {
//         if (data[i].country == 'Bahrain') {
//             a.add(data[i].country);
//         }
//     }
    let result = data.filter(value => value.country == country);
    console.log(typeof result);
    if (result.length>0) {
        return result[0];
    } else {
      return alert('Be sure you write the country correctly!');
    }
    //return data.filter(value => value.country == country);
}
export default Fetch_All_statistics
//        // console.log('statistics_Loooop_Started',response)
//        let Statistics_Lopp = response.response
//        console.log("Yes it's Working" ,Statistics_Lopp)
//    for( const one of Statistics_Lopp){  // loop in  [0..233]
//    console.log(" loop" , one)  
//    //   for(const two of one.continent){
//    //         console.log('haha',two)
//    //     }
//            let text =document.getElementById('text')
//            const country = one.country
//    //    if( text.value = country){
//    //        console.log('same')
//    //        document.getElementById("day").innerHTML = ` ${one.country}`;
//    //    }
//        if(one.continent == "Asia"){
//           const AsiaLoop = one.continent == 'Asia' // true
     
//           console.log('lola sosa', AsiaLoop)
//             for (const two of one){
//                 console.log('two',two)
//             }
//            //  if(text.value=== AsiaLoop){
//            //     console.log("Okayy")
//            //     document.getElementById("day").innerHTML = ` ${AsiaLoop.day}`;

//            //  }
//       }
       
//    }