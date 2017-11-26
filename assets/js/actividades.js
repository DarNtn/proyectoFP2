/*
var activitiesbox = document.querySelector('section');

var requestURL = 'https://raw.githubusercontent.com/mrkevinomar/mrkevinomar.github.io/master/actividades.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
     var activitiesText = request.response;
     var activities = JSON.parse(activitiesText);
     showActivities(activities);
   }


 function showActivities(jsonObj) {
  var activities = jsonObj['activities'];
  for(var i = 0; i < activities.length; i++) {
   var activity = document.createElement('div');
   activity.setAttribute('class', 'actividad');
   var datetime = document.createElement('div');
   datetime.setAttribute('class','actividad-date');
   var activityBody = document.createElement('div');
   activityBody.setAttribute('class','actividad-body');
   var image_box = document.createElement('div');
   var image = document.createElement('img');
   image.setAttribute('class','notice-icon');
   var description = document.createElement('div');
   description.setAttribute('class','actividad-description');
   var title = document.createElement('a');
   title.setAttribute('class','title');
   var content = document.createElement('p');
   datetime.textContent = activities[i].datetime;
   image.setAttribute('src', activities[i].icon);
   title.textContent = activities[i].title;
   content.textContent= activities[i].description;
   description.appendChild(title);
   description.appendChild(content);
   image_box.appendChild(image);
   activityBody.appendChild(image_box);
   activityBody.appendChild(description);
   activity.appendChild(datetime);
   activity.appendChild(activityBody);
   activitiesbox.appendChild(activity);
  }
}
*/
function cargarActividades() {
  $.getJSON('https://raw.githubusercontent.com/mrkevinomar/mrkevinomar.github.io/master/actividades.json', function(data) {
	  console.log(data);
        $.each(data, function(key, val) {
			var iconValue = val['icon'];
			var titleValue = val['title'];
			var descriptionValue = val['description'];
			
			var activity = $('<div></div>');
            activity.attr('class','actividad');
			var datetime = $('<div></div>');
            datetime.attr('class','actividad-date');
			var activityBody = $('<div></div>');
            activityBody.attr('class','actividad-body');
			var image_box = $('<div></div>');
			var image = $('<img></img>');
			image.attr('class','notice-icon');
			var description = $('<div></div>');
			description.attr('class','actividad-description');
			var title = $('<a></a>');
			title.attr('class','title');
			var content = $('<p></p>');
			datetime.text(val["datetime"]);
			image.attr('src', iconValue);
			title.text(titleValue);
		    content.text(descriptionValue);
			description.append(title);
			description.append(content);
			image_box.append(image);
			activityBody.append(image_box);
			activityBody.append(description);
			activity.append(datetime);
			activity.append(activityBody);
			$('.activitiesbox').append(activity);

            
        });
    });
}

$(window).load(function() {

    cargarActividades();
    

});