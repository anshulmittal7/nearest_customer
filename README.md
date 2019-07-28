Nearest Customer
=========

Solution to get customers whose GPS coordinates are in specified km radius. 

## Installation

  `npm i nearest_customer`

## Usage

    var nearestCustomer = require('nearest_customer');
    var nearestCustomerList = nearestCustomer(53.339428, -6.257664, 100);
  
## Output
  
  Solution will return list of customers available in mentioned range. List will also be sorted on user_id of customer in ascending order.
  
## Detail Explanation

Three parameters are required where first parameter is Latitude of source point, second parameter is Longitude of source point & third parameter is range in km, under which customers whose GPS coordinates are present will come. 
Inside data/customers_data.txt, customers record are present as one customer per line in JSON format. 
For every customer, distance is calculated between his/her coordinates & source coordinated provided by user. 

For calculating distance, Haversine Formula is used.

Please refer about Haversine Formula on Wikipedia page.
Haversine formula (https://en.wikipedia.org/wiki/Haversine_formula)

## Assumptions
  
In this solution, Earth is assumed as a sphere. Haversine formula determines distance between 2 points on sphere. As our Earth it spheroid and not a perfect sphere, an error of around 0.3% is present.
