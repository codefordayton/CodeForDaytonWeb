var url ="https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=Code-For-Dayton&page=20";
var data;

$.ajax({
  type: 'GET',
  url: url,
  data: data,
  async: false,
  beforeSend: function (xhr) {
    if (xhr && xhr.overrideMimeType) {
      xhr.overrideMimeType('application/json;charset=utf-8');
    }
  },
  dataType: 'jsonp',
  success: function (data) {
  	var results = data.results;
    console.log(results);
    
            var output="<dl>";
 
             for (var i in results) {
             	var date = new Date(results[i].time);
             	
                output+="<dd>" + results[i].name + ",  " + date.toString("MMM dd yy") + ",  " + getPlace(results[i].venue) + ", <a href= '" + results[i].event_url + "'> Join the Meetup! </a>, " + results[i].description + ", " + results[i].yes_rsvp_count + " Volunteers so far!</dd>";
            }
            output+="</dl>";
            
            document.getElementById("show-data").innerHTML = output;
  }
});

var getPlace = function(venue){
	var result = venue.name + ", " + venue.address_1 + ", " + venue.city + ", " + venue.state;
	return result;
}