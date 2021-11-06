fetch("https://covid-19-data.p.rapidapi.com/totals", {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "838a58c050msh7a645958883cdbap1c246fjsnf2bcd2c8cd3c"
    }
})
    .then(data => data.json())
    .then(Data => {
    const lastUpdate = Data[0].lastUpdate;
    document.getElementById("confirmed").innerHTML = Data[0].confirmed;
    document.getElementById("recovered").innerHTML = Data[0].recovered;
    document.getElementById("critical").innerHTML = Data[0].critical;
    document.getElementById("deaths").innerHTML = Data[0].deaths;
    document.getElementById("lastUpdate").innerHTML = Data[0].lastUpdate;
})
