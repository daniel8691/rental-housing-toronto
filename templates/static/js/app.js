
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

    // console.log(Math.round(someData[0][headers[5]] * 100) / 100);
    // console.log(headers[5] == "price_per_sqft")

    // create empty list to store dictionary of data
    var results = []
    // loop through the entire data for extraction
    for (var i = 0; i<someData.length; i++){
        // console.log(someData[i].postal_code)


        // create dictionary to store data
        var obj = {}
        // loop through the headers I want to use for the analysis
        for (var j = 0; j<headers.length; j++){
            if (headers[j] == "price_per_sqft"){
                obj[headers[j]] = Math.round(someData[i][headers[j]] * 100) / 100;
            } else {
                obj[headers[j]] = someData[i][headers[j]]
            }
           
        }
        
        results.push(obj)
    }
    console.log(results);
    


    /////////////////////////
    /////////////////////////


    results.map(function(cityData) {
        var row = tableBody.append("tr")
        Object.entries(cityData).forEach(function([key,value]){
            // console.log(key);
            // console.log(value)
            row.append("td").text(value)
        })
    })


    // var filteredData = results.filter(function(toronto_data){
    //     return toronto_data.cluster_labels == 3
    // });
    // console.log(filteredData);

    var inputElement = d3.select("#cluster_labels")
    // .on("change", runFunction)
    var filterButton = d3.select("#filter-btn").on("click", runFunction)



    // // console.log(results.cluster_labels)
    function runFunction(){

        // prevent page from refreshing
        // d3.event.preventDefault();

        // remove the table content
        tableBody.html("")

        // get the value of input statement
        var inputValue = inputElement.property("value")
        console.log(inputValue);

        // var buttonValue = filterButton.property('value')
        // console.log(buttonValue)

        // filter data based on input value 
        var filteredData = results.filter(function(toronto_data){
            return toronto_data.cluster_labels == inputValue;
        });
        // check input content
        console.log(filteredData)

        // add data to the chart according to input data
        filteredData.map(function(add_data){
            // append table row for each iteration
            var row = tableBody.append("tr")

            Object.entries(add_data).forEach(function([key,value]){
                row.append("td").text(value)
            })
        })

    }    


});


