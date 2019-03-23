
  let authToken = localStorage.getItem("authToken");
  $.ajax({
    method: "GET",
    url: "/api/protected",
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    contentType: "application/json",
    success: function(workouts){
   console.log("success")
    },
    error: function(error) {
      console.log("error");
      $(location).attr("href","./index.html")
    
      
    }
  });

 
  $(".log-out").on("click", function(e) {
    e.preventDefault();
    $(location).attr("href","./index.html")
    localStorage.setItem("authToken","");
  });


  

  
   

   
  
  



  
  $(".edit-form").on("submit", function(e) {
      e.preventDefault();
  })
   

      $(".create-workout").on("click", function(e) {
        e.preventDefault();
        $(".back").show();
       
       
       
       
     
      let workout = {
        day: $("#day").val(),
        miles: $("#miles").val(),
        hr: $("#hr").val(),
        id: $('#id').val()
      };
       addWorkout(workout);
       
       $("#day").val("");
       $("#miles").val("");
       $("#hr").val("");
    });

    $(".back-to-workouts").on("click", function(e) {
      e.preventDefault();
      
    }); 

    $("#workouts-page").on("click", ".delete", function(e) {
      e.preventDefault();
      let id = $(this).attr("data-id");
     
  
          deleteWorkout(id);
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
          displayResults(workouts);
        },
        error: function(error) {
          console.log("error");
        }
      });
    }
   
    function displayResults(workoutArray) {
  
      console.log(workoutArray);
     $('#results-list').empty();
      for (let i = 0; i < workoutArray.length; i++){
        let workout = workoutArray[i];
      
        $('#results-list').append(
          `<section class="workout-section" data-index="${i}">   </section>
         <ul>
        <li>${workout.day}</li>
         <li>miles: ${workout.miles}</li>
          <li>hr: ${workout.hr}</li>
          <button class="delete" data-id="${workout.id}">Delete</button>
         
      
         </li>
         </ul>
    
         `)
         };
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
          getWorkouts();
          displayResults(workout);
        },
        error: function(err) {
          console.log(err);
        },
        dataType: "json"
      });
    }

    function deleteWorkout(id) {
      console.log(id);
      let authToken = localStorage.getItem("authToken");
      $.ajax({
        url: `/api/workouts/${id}`,
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${authToken}`
        },
        method: "DELETE",
        success: function(workout) {
         getWorkouts();
        },
        error: function(err) {
          console.log(err);
        }
      });
    }
    getWorkouts();


  

    
    