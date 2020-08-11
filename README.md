# rental-housing-toronto

The Toronto's rental market has become quite competitive in recent years due to strong immigration numbers and job growth in the tech industry. The rental prices have shot to high levels, encouraged by the people's willingness to pay in order to live closer to their workplaces. For this analysis, I want to focus on the condo one-bedroom units because they are one of the most common choice for renters. 
Some of the common indicators for the price of a property includes ease of access to infrastructures. Therefore, this analysis will focus on the distance the rental property is, from subway, bus, and train stations, bus stops, shopping malls and plazas, and grocery stores. This analysis aims to discover whether the high rent in the specific locations in the city of Toronto is justified by their locations. For instance, if a highly priced property does not have any grocery stores nearby, perhaps a potential renter can look at similarly priced options at another location within Toronto, that offers a closer proximity to grocery stores. 

## Data
I will use web scrape my data from https://www.torontorentals.com by looping through all the pages within my search result (one bedroom condo units). I tried using Kaggle.com for my dataset but I find most datasets to be outdated or missing specific information I need. The codes I used for scraping are located in my GitHub repository called Toronto-condo-scrape.ipynb. This scraped data will include the rental units' rent, address, postal code, number of bedrooms and bathrooms, and the square footage of the unit. After the web scrapping process is completed, I will use Python's Geopy library to obtain the geo coordinates of each rental property using its address.


## How to Open the Webpage
git clone this link https://github.com/daniel8691/rental-housing-toronto.git and within the same foler, open up git bash and type in "Python -m http.server" and open up the webpage on Google Chrome using localhost:8000

Once the page is opened, look for a folder called "Templates" and feel feel to browse around the site!
