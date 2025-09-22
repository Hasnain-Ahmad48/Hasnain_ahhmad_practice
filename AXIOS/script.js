function fetchNamazTimes() {
  const url =
    "https://api.aladhan.com/v1/timingsByCity?city=Mardan&country=Pakistan&method=2";
  axios.get(url).then(response => {
    if (
      response.data.code === 200 &&
      response.data.data &&
      response.data.timings
    ) {
      const t = response.data.data.timings;
      const html =
        `<strong>Namaz Times for Mardan, Pakistan</strong> <ul> <li>Fajr: ${t.Fajr}</li>
        <li>Duhr: ${t.Duhr}</li>
        <li>Asr: ${t.Asr}</li>
        <li>Maghrib: ${t.Maghrib}</li>
        <li>Isha: ${Isha}</li>`;
        document.getElementById("result").innerHTML=html;
    }
    else{
        document.getElementById("result").innerHTML="Could not fetch Namaz Timing"
    }
  })
  .catch(error=>{
    console.error("")
  })
}
