

 
  $(".log-out").on("click", function(e) {
    e.preventDefault();
    $("#workouts-page").hide();
    $(location).attr("href","./index.html")
  });
  $(".work").on("click", function(e) {
    e.preventDefault();
    $("#work-page").show();
    $(".work").hide();
  });
   
  $(".clear").on("click", function(e) {
    $("form").trigger("reset");
  });
  

   

    $(".edit-form").on("submit", function(e) {
      e.preventDefault();
   

      let workout = {
        day: $("#day").val(),
        miles: $("#miles").val(),
        hr: $("#hr").val()
      };
       addWorkout(workout);
    });
    
    $(".back-to-workouts").on("click", function(e) {
      e.preventDefault();
      
    });

    function getWorkouts() {
      console.log("Getting workouts information");
      let authToken = localStorage.getItem("authToken");
      $.ajax({
        method: "GET",
        url: "/api/workouts",
        headers: {
          Authorization: `Bearer ${authToken}`
        },
        contentType: "application/json",
        success: function(workouts){
        },
        error: function(error) {
          console.log("error");
        }
      });
    }



    function showWorkoutResults(workoutArray) {
      console.log(workoutArray);
      $("#workout-results").empty();
      for (const i = 0; i < workoutArray.length; i++) {
        let project = workoutArray[i];
        $("#workout-results").append(`
        <section class="works-section" data-index="${i}" data-id="${workout.id}">
    <p>${workout.workoutday}</p>
          <ul>
            <li>day:${workouts.day}</li>
            <li>miles:${workouts.miles}</li>
            <li>heartrate:${workouts.hr}</li>
           
          </ul>
          <button class="details">View Project Details</button>
          <button class="delete">Delete</button>
        </section>
      `);
      }
    } 
 

    function addWorkout(workout){
      console.log("Adding workout", workout);
      let authToken = localStorage.getItem("authToken");
      $.ajax({
        method: "POST",
        url: "/api/workouts",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`
        },
        data: JSON.stringify(workout),
        success: function(data) {
          console.log("WORKOUT CREATED");
          
        },
        error: function(err) {
          console.log(err);
        },
        dataType: "json"
      });
    }

    function deleteWorkout(id) {
      console.log(`Deleting workout ${id}`);
      let authToken = localStorage.getItem("authToken");
      $.ajax({
        url: `/api/workouts/${id}`,
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${authToken}`
        },
        method: "DELETE",
        success: function(data) {
          getWorkouts();
        },
        error: function(err) {
          console.log(err);
        }
      });
    }


 



