



fetch('https://api.covid19api.com/summary')
.then((apidata) => {
    // console.log(apidata);
    return apidata.json()
})



.then((data) => {
    let shortData = data.Countries;
    // console.log(shortData)
    console.log(data);
    // const mydata = actualdata.Countries[76];
    // document.getElementById('apiindia').innerHTML = `The name of the Country is ${mydata.Country}.
    // The Total numbers of cases is ${mydata.TotalConfirmed}`;   




    // This Code is for print data on browser

    for (var i=0; i<shortData.length; i++){
        document.getElementById('rows').innerHTML +=
        `<tr class="new"> 
        <td>${i}</td>
        <td>${shortData[i].Country}</td>
        <td>${shortData[i].Date}</td>
        <td>${shortData[i].CountryCode}</td>
        <td>${shortData[i].NewConfirmed}</td>
        <td>${shortData[i].NewDeaths}</td>
        <td>${shortData[i].NewRecovered}</td>
        <td>${shortData[i].TotalDeaths}</td>
        <td>${shortData[i].TotalConfirmed}</td>
        <td>${shortData[i].TotalRecovered}</td>
        </tr>
        `
    }





    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }







 } )












 