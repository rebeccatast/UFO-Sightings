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
//Filter data and show filtered data
function handleClick() {
    var filteredData = data;
    var value = d3.select('input').property('value');
    if (value) {
        filteredData = filteredData.filter(obj => obj.datetime == value);
    };
    d3.select('input').property('value','');
    showTable(filteredData);
};
//Prevent page from refreshing
d3.event.preventDefault();
