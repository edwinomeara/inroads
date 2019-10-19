console.log("hello world");
//var data = require("./data_class.json");

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'data_class.json');
// xhr.send(null);

var userdata = (function() {
    var userdata = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://api.myjson.com/bins/1ckrcc",
        'dataType': "json",
        'success': function (data) {
            userdata = data;
        }
    });
    return userdata;
})();

console.log(userdata)
var user1_name = userdata[0].name;
var user1_age = userdata[0].age;
var user2_name = userdata[1].name;
var user2_age = userdata[1].age;