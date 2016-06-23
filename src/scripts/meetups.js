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
 //   console.log(results);
    
            var output="<table class='table table-striped table-hover'>";
 				output += "<tr>";
 						output += "<th>Name</th>";
 						output += "<th>Date</th>";
 						output += "<th>Place</th>";
 						output += "<th>Meetup URL</th>";
 						output += "<th>Volunteers Coming</th>";
 				output += "</tr>";
 				
 	             for (var i in results) {
             	var date = new Date(results[i].time);
             	
                output+="<tr" + (i===0?"class='active'":"") + ">" + 
                		"<td "  +  ">" + results[i].name + "</td>" + 
                		"<td>" + date.toDateString("MMM dd yy") +" at " + getTime(date)+ "</td>" +
                		"<td>" + getPlace(results[i].venue) + "</td>" +
                		"<td>" + "<a href= '" + results[i].event_url + "'> Join this Meetup! </a>" + "</td>" +
                		"<td>" + results[i].yes_rsvp_count+"</td>" +
                		"</tr>";
            }
            output+="</table>";
            
            document.getElementById("show-data").innerHTML = output;
  }
});

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

var getPlace = function(venue){
	var result = venue.name + ", " + venue.address_1 + ", " + venue.city + ", " + venue.state;
	return result;
}