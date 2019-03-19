



//$("#workouts-page").on("click", ".details", function() {
  //  hideAllPages();

  $(".log-out").on("click", function(e) {
    e.preventDefault();
    $("#workouts-page").hide();
    $(location).attr("href","./index.html")
  });
  

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
}
//})
*/