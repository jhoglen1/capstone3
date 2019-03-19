


 
  $(".log-out").on("click", function(e) {
    e.preventDefault();
    $("#workouts-page").hide();
    $(location).attr("href","./index.html")
  });
  $("#work").on("click", function(e) {
    e.preventDefault();
    $(".daily").show();
    
  
  }); 
  
  function display(responseJson) {
   
    for (let i = 0; i < responseJson.length; i++){

$('.workout-section').append(`<div class="daily">
     
<input class="id" type="text" value="${responseJson[i]._id}" >      
<input class="Day" type="text" value="${responseJson[i].Day}" >
<input class="Miles" type="text" value="${responseJson[i].Miles}" >
<input class="HR" type="text" value="${responseJson[i].HR}" >
<input type="button" class="edit_button1" value="Edit" class="edit">
<input type="button" class="save_button1" value="Save" class="save">
<input type="button" value="Delete" class="delete">
</div>`);      
}
} 


/* rest */
/*function getWorkouts() {
    console.log("Getting workout information");
    let authToken = localStorage.getItem("authToken");
    $.ajax({
      method: "GET",
      url: "/api/workouts",
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      contentType: "application/json",
      success: function(workouts) {
       
        showWorkoutsResults(workouts);
      },
      error: function(error) {
        console.log("error");
      }
    });
}*/
