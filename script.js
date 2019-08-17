

var searchTerm;
var numRecords;
var startYear;
var endYear;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=6edhWigsVHQaO8KG2zBXkCgl2Sjo6AUj"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

    var results = response










})