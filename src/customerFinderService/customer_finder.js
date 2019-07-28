const haversine = require('../utilityService/haversine')
var file_reader = require('../utilityService/file_reader')
module.exports={
    getNearestCustomers :   function (sourceLat,sourceLong,range)
        {
            console.log("getNearestCustomers accessed");
            var resultJSON=[];
            var customerData=file_reader.readJSONFile();
            //console.log(customerData);
            customerData.forEach(customer => {
                var distanceFromSource= haversine.haversineDistance(sourceLat,sourceLong,customer.latitude, customer.longitude);
                //console.log(distanceFromSource);
                if(distanceFromSource <= range)
                {
                    //console.log("found");
                    resultJSON.push({name:customer.name, user_id:customer.user_id});
                }
            });
            
            //sorting array on user_id
            resultJSON.sort(function(a, b){
                return a.user_id - b.user_id;
            }); 
            return JSON.stringify(resultJSON);
        }
    }
