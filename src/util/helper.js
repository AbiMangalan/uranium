let printDate = function()
                {
                    let today = new Date();
                    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
                    return date;
                };
let printMonth = function()
                {
                    let today = new Date();
                    let date = (today.getMonth()+1);
                    switch(date)
                    {
                        case 1  :   return "January";
                        case 2  :   return "February";
                        case 3  :   return "March";
                        case 4  :   return "April";
                        case 5  :   return "May";
                        case 6  :   return "June";
                        case 7  :   return "July";
                        case 8  :   return "August";
                        case 9  :   return "September";
                        case 10  :   return "October";
                        case 11  :   return "November";
                        case 12  :   return "December";
                    }
                };
let getBatchInfo = function()
                    {
                        return "Thorium, W3D1, the topic for today is Nodejs module system.";
                    };
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;