var url ="https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=Code-For-Dayton&page=20";
var daytonLatLon ="39.7589,-84.1916";
var gmap = "http://maps.google.com/?ie=UTF8&hq=&z=15&&q=";

// var gmap = "https://maps.googleapis.com/maps/api/staticmap?ie=UTF8&hq=&zoom=15&maptype=roadmap&size=400x400&markers=color:blue%7C"; -- needs API Key!

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
    
            var output="<table class='table table-striped table-hover'>";
 				output += "<tr>";
 						output += "<th>Name</th>";
 						output += "<th>Date</th>";
 						output += "<th>Place</th>";
 						output += "<th>Meetup</th>";
 						output += "<th>Volunteers Coming</th>";
 				output += "</tr>";
 				
 	             for (var i in results) {
             	var date = new Date(results[i].time);
             	var venue = results[i].venue;
             	var venueLatLon = getLatLon(venue);
             	//var mapcenter = "&center="+venueLatLon;

                output+="<tr" + (i===0?"class='active'":"") + ">" + 
                		"<td "  +  ">" + results[i].name + "</td>" + 
                		"<td>" + date.toDateString("MMM dd yy") +" at " + getTime(date)+ "</td>" +
                		"<td>" + "<a href = '" + gmap + getAddress(venue) + getCenter(venueLatLon) + "' target='_blank'>" + getNameAndAddress(venue) +"</a>" + "</td>" +
                		"<td>" + "<a href= '" + results[i].event_url + "' target='_blank'> Sign Up/In! </a>" + "</td>" +
                		"<td>" + results[i].yes_rsvp_count+"</td>" +
                		"</tr>";
            }
            output+="</table>";
            
            document.getElementById("show-data").innerHTML = output;
  }
});

var getCenter = function (latLon) {
	return "&ll="+latLon;
}

var getLatLon = function (venue) {
	return venue.lat+","+venue.lon;
}

var getTime = function (date) {
	var meridian = "pm";
	
	var result = date.getHours();
	if(result === 0){
		result = 12;
		meridian = "am";
	}
	else if(result > 12)
		result -= 12;
   else {
   		meridian = "am";
   }
		
	result += ":" + date.getMinutes() + " " + meridian;
	return result;
}
var getAddress = function (venue) {
	return venue.address_1 + ", " + venue.city + ", " + venue.state;
}

var getNameAndAddress = function(venue){
	var result = venue.name + ", " + getAddress(venue);
	return result;
}