const fs = require('fs')
const path=require('path')
module.exports={
    readJSONFile :  function ()
        {

            var customerData=[];
            var filedata = fs.readFileSync(path.join(__dirname, '../../data/customer_data.txt'), {encoding: 'utf8'});
            var jsonStrings=filedata.split(/\r?\n/);    //splitting textfile on newline
            jsonStrings.forEach(jsonString => {
                customerData.push(JSON.parse(jsonString));
                    
                });
        return customerData;
        
        }
    }