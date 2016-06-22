var url ="https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=Code-For-Dayton&page=20";


$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON(url, function (data) {
      console.log(data);

      var items = data.items.map(function (item) {
       return item.key + ': ' + item.value;
      });

   showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});
