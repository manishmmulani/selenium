var passengers = [
{nick : "passenger1", name : "Passenger One", age : 26, gender : "Male", pan : "ABCDE1212M", senior : false},
{nick : "passenger2", name : "Passenger Two", age : 26, gender : "Female", pan : "ABCDE1212M", senior : false},
{nick : "passenger3", name : "Passenger Three", age : 62, gender : "Male", pan : "ABCDE1212M", senior : true},
{nick : "passenger4", name : "Passenger Four", age : 33, gender : "Female", pan : "ABCDE1212M", senior : false},
{nick : "passenger5", name : "Passenger Five", age : 38, gender : "Male", pan : "ABCDE1212M", senior : false}
];

var getNicks = function() {
    var str = "";
    for (var i = 0; i < passengers.length; i++) {
        str += passengers[i].nick + ",";
    }
    return str.replace(/,$/, "");
};

var getPassenger = function(nick) {
    for (var i = 0; i < passengers.length; i++) {
        if(nick === passengers[i].nick)
            return passengers[i];
    }
    return null;
};