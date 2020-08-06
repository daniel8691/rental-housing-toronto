
// load data from csv file
d3.csv("static/data/transposed_complete_df.csv").then(function(someData) {
    console.log(someData);

    var tableBody = d3.select("tbody")

    // console.log(someData[0]["postal_code"]);


    // console.log(someData.length)

    /////////////////////////
    // grabbing just the data needed
    /////////////////////////
    var headers = ["postal_code", 'cluster_labels', 
                'address', 'num_sqft', 'rent', "price_per_sqft",
                'metro_station', 'train_station', 'bus_station', 
                'bus_stop', 'shopping_mall', "shopping_plaza", "grocery_store"]

    // create empty list to store dictionary of data
    var results = []
    // loop through the entire data for extraction
    for (var i = 0; i<someData.length; i++){
        console.log(someData[i].postal_code)
        // create dictionary to store data
        var obj = {}
        // loop through the headers I want to use for the analysis
        for (var j = 0; j<headers.length; j++){
            obj[headers[j]] = someData[i][headers[j]]
        }
        
        results.push(obj)
    }
    console.log(results);


    /////////////////////////
    /////////////////////////


    results.map(function(cityData) {
        // var row = tableBody.append("tr")
        Object.entries(cityData).forEach(function([key,value]){
            // console.log(key);
            console.log(value)
            // row.append("td").text(value)
        })
    })


    var inputELement = d3.select("#datetime")
    var filterButton = d3.select("#filter-btn")

    var test = inputElement.property("value")

    // inputELement.on("change", runFunction)
    // filterButton.on("click", runFunction)


    // function runFunction() {
    //     // remove the table content
    //     tableBody.html("")

    //     var inputValue = inputElemenet.property("value");
    //     console.log(inputValue)

    //     var filterData = tableData.filter(function(rental_data){
    //         return rental_data.datetime == inputValue
    //     })

    // }

    // someData.forEach(function(data){
    //     data.cluster_labels = +data.cluster_labels
    //     console.log(data.cluster_labels)
    // })
});


