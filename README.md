# rental-housing-toronto

Visualizations for this project can be better viewed on 
<a href="https://public.tableau.com/views/toronto_neighborhood_cluster_visualized_15957377283180/Story1?:language=en&:display_count=y&:origin=viz_share_link" target="_blank">Tableau Public</a>

The Toronto's rental market has become quite competitive in recent years due to strong immigration numbers and job growth in the tech industry. The rental prices have shot to high levels, encouraged by the people's willingness to pay in order to live closer to their workplaces. For this analysis, I want to focus on the condo one-bedroom units because they are one of the most common choice for renters. 
Some of the common indicators for the price of a property includes ease of access to infrastructures. Therefore, this analysis will focus on the distance the rental property is, from subway, bus, and train stations, bus stops, shopping malls and plazas, and grocery stores. This analysis aims to discover whether the high rent in the specific locations in the city of Toronto is justified by their locations. For instance, if a highly priced property does not have any grocery stores nearby, perhaps a potential renter can look at similarly priced options at another location within Toronto, that offers a closer proximity to grocery stores. 

## How to Open the Webpage
git clone this link https://github.com/daniel8691/rental-housing-toronto.git and within the same folder, open up git bash and type in "Python -m http.server" and open up the webpage on Google Chrome using localhost:8000

Once the page is opened, look for a folder called "Templates" and feel feel to browse around the site!

## Data
I will use web scrape my data from https://www.torontorentals.com by looping through all the pages within my search result (one bedroom condo units). I tried using Kaggle.com for my dataset but I find most datasets to be outdated or missing specific information I need. The codes I used for scraping are located in my GitHub repository called Toronto-condo-scrape.ipynb. This scraped data will include the rental units' rent, address, postal code, number of bedrooms and bathrooms, and the square footage of the unit. After the web scrapping process is completed, I will use Python's Geopy library to obtain the geo coordinates of each rental property using its address.

## Extract-Transform-Load (ETL)
Data used in the analysis were scrapped from https://www.torontorentals.com for individual property rent prices and https://toronto.listing.ca/real-estate-price-history.htm for a price history of the properties' sold pirce for the past 10 years
The data is then cleaned and stored in a database file and within the AWS bucket. 

## Cluster Analysis
In order to analyze individual clusters better, I visualized the data for each clusters on Tableau which is a data visualization software.
Cluster zero seems to cluster in the downtown core area, Cluster one in North York, Cluster two in the Scarborough region, and Cluster three kind of surrounding the downtown core area. 
![tableau_geomap](https://github.com/daniel8691/rental-housing-toronto/blob/master/templates/site_pictures/tableau_geomap.jpg)

Looking only at the geomap, we can see that most properties within cluster zero seem to cluster around the center of cities like the downtown Toronto area and district of Etobicoke. Cluster one mostly clusters around North York, North of the city of Toronto. Cluster two groups around the Scarborough region just East of Toronto and cluster three forms a semi circle surrounding the downtown core. 

<hr>

![cluster_analysis](https://github.com/daniel8691/rental-housing-toronto/blob/master/templates/site_pictures/tableau_shopping.jpg)

Cluster zero have the most properties out of the four clusters that are within 5000 meters away from shopping malls and grocery stores. Properties from cluster zero, however, tend to be further away from shopping plazas, with some properties reaching out further than 20 thousand meters. This could be explained by the location of the cluster, how they are located in the heart of the cities where there are space limitations on having shopping plazas. 

Rental properties in cluster one, are close to the three features (mall, plaza, grocery store). Cluster two are further away from shopping malls and closer to shopping plazas and grocery stores. Cluster three are more scattered with some properties located within 10 thousand meters from the nearest shopping plaza and some located 20 thousand meters away. 

<hr>

![cluster_analysis](https://github.com/daniel8691/rental-housing-toronto/blob/master/templates/site_pictures/tableau_transit.jpg)

Properties in cluster zero are closest to the features with the features accessible within a five-kilometer radius. Rental units in cluster one, have similar characteristics as cluster zero, but units within this cluster are more likely to be relatively far away from bus stops so depending on ones needs, this 
may be a factor to consider. 
            
Properties in cluster two are not as close as properties in cluster zero and one, to the transit stations. Tenants who choose to live in cluster two will mostly likely have to travel around four kilometers to arrive at the transit stations. 

Finally, for cluster three, most properties in this cluster are located far away from metro stations, and relatively far away from bus stations and bus stops. This makes travelling a little more difficult for people choosing to rent within this cluster.           

<hr>

![cluster_price_analysis](https://github.com/daniel8691/rental-housing-toronto/blob/master/templates/site_pictures/cluster_price_sorted.jpg)
Cluster zero, as expected is the most expensive out of the four clusters because properties classified in cluster zero tend to be closer to the popular features a renter looks for which is convenience to shopping options and transit stations. 

<hr>

![neighborhood_analysis](https://github.com/daniel8691/rental-housing-toronto/blob/master/templates/site_pictures/tableau_neighborhood_prices.jpg)

Visualized which neightborhood is the most expensive to rent. A renter could use this information to determine whether the rent of the neighborhood is justified by shopping options and priximity to transit stations. For example, If a property is in the "M5R" neighborhood but there are no grocery stores or bus stops nearby, then the renter should think twice before choosing to rent in that location. 

