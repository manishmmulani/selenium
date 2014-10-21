var irctc_stations = [
{name : "HYDERABAD DECAN", code : "HYB"},
{name : "MUMBAI CENTRAL", code : "BCT"},
{name : "KALYAN JN", code : "KYN"},
{name : "KACHEGUDA", code : "KCG"},
{name : "BEAS", code : "BEAS"},
{name : "BANGALORE CY JN", code : "SBC"},
{name : "NEW DELHI", code : "NDLS"},
{name : "BEAS", code : "BEAS"},
{name : "H NIZAMUDDIN", code : "NZM"},
{name : "SHIMOGA TOWN", code : "SMET"}
];

var getStationsStr = function() {
    var str = "";
    for(var i = 0; i < irctc_stations.length; i++) { str+=irctc_stations[i].code+",";}
    return str.replace(/,$/, "");
};

var getStationValue = function(code) {
    for(var i = 0; i < irctc_stations.length; i++) {
	    if (code === irctc_stations[i].code)
            return irctc_stations[i].name + " - " + code;
    }
    return "";
};