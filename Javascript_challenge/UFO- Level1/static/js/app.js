// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function populateTable() {
    tableData.map(data => {

        // Make new row
        var row = tbody.append("tr");
    
        // Append each row with data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
}

populateTable();
//Filter button1
var button1 = d3.select("#filter-btn");

button1.on("click", function() {

    //  user input
    var inputValue = d3.select("#datetime").property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    // Clear original table
    tbody.html("");
    //  table with forEach loop
    filteredData.forEach(obj => {
        
        // Make new row
        var row = tbody.append("tr");

        // Append each row with data
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    });
});
//Button to unfilter
var button2 = d3.select("#un-filter-btn");

button2.on("click", function(){
    tbody.html("");
    populateTable();
});