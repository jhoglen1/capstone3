
const workout= {
	"cyclingWorkout": [
        {
            "id": "1111111",
            "day": "Monday",
            "miles": "25 miles",
            "hr": "130 bpm"
            
        },
        {
            "id": "2222222",
            "day": "Tuesday",
            "miles": "46 miles",
            "hr": "155 bpm",
           
        },
        {
            "id": "333333",
            "day": "Wednesday",
            "miles": "17 miles",
            "hr": "145 bpm",
          
        },
        {
            "id": "4444444",
            "day": "Thursday",
            "miles": "99 miles",
            "hr": "160 bpm",
           
        },
        {
            "id": "55555555",
            "day": "Friday",
            "miles": "25 miles",
            "hr": "160 bpm",
        }

    ]
};


function getRecentCyclingWorkout(callbackFn) {
	setTimeout(function(){ callbackFn(workout)}, 1);
}

function displayCyclingworkout(data) {
    for (index in data.cyclingWorkout) {
	   $('body').append(
        '<p>' + data.cyclingWorkout[index].day +'</p>',
        '<p>' + data.cyclingWorkout[index].miles +'</p>',
        '<p>' + data.cyclingWorkout[index].hr+'</p>');
    }
}


function getAndDisplayCyclingWorkout() {
	getRecentCyclingWorkout(displayCyclingworkout);
}

$(function() {
   getAndDisplayCyclingWorkout();
})
