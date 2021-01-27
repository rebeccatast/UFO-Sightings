// from data.js
var tableData = data;

//Display dataset
showTable(data);
d3.select('button').on('click',handleClick);
function showTable(data) {
    d3.select('tbody').html('');
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

//Filter dataset
function handleClick() {
    var filteredData = data;
    var dateTime = d3.select("#datetime").property("value");
    var selectedCountry = d3.select("#country").property("value").toLowerCase();
    var selectedState = d3.select("#state").property("value").toLowerCase();
    var selectedCity = d3.select("#city").property("value").toLowerCase();
    var selectedShape = d3.select("#shape").property("value").toLowerCase();
    if (dateTime) {
        filteredData = filteredData.filter(record => record.datetime === dateTime);
    }
    if (selectedCountry) {
        filteredData = filteredData.filter(record => record.country === selectedCountry);
    }
    if (selectedState) {
        filteredData = filteredData.filter(record => record.state === selectedState);
    }
    if (selectedCity) {
        filteredData = filteredData.filter(record => record.city === selectedCity);
    }
    if (selectedShape) {
        filteredData = filteredData.filter(record => record.shape === selectedShape);
    };
    //Show filtered data
    d3.select('input').property('value','');
    showTable(filteredData);
};

//Prevent page from refreshing
d3.event.preventDefault();
