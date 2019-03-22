const authToken = localStorage.getItem("Bearer");

   

function hideAllPages() {
    $("#landing-page").hide();
    $("#signup-page").hide();
    $("#workouts-page").hide();
    $("#login-page").hide();
  
  }
  
  function showWorkoutsPage() {
    hideAllPages();
    getWorkouts();
    $("#workouts-page").show();
  }



/* landing page */

$("#log-in").on("click", function() {
    hideAllPages();
    $("#login-page").show();
  });
  
  $("#register").on("click", function() {
    hideAllPages();
    $("#signup-page").show();
  });

  /*login page*/
$(".login-form").on("submit", function(e) {
    e.preventDefault();
    let userInfo = {
      username: $("#login-username").val(),
      password: $("#login-password").val()
    };
    login(userInfo);
    
  });
  
 


  $(".back-to-landing").on("click", function(e) {
    e.preventDefault();
    hideAllPages();
    $("#landing-page").show();
  });




  /*signup page*/
  $(".signup-form").on("submit", function(e) {
    e.preventDefault();
    let user = {
      firstName: $("#first-name").val(),
      lastName: $("#last-name").val(),
      username: $("#signup-username").val(),
      password: $("#password").val(),
      retype: $("#retype-signup-password").val()
    };
    register(user);
  });
  
  $(".back-to-landing-page").on("click", function(e) {
    e.preventDefault();
    hideAllPages();
    $("#landing-page").show();
  });




  /* registering page */

  
function register(user) {
    let settings = {
      url: "api/user/",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(user),
      success: function(data) {
        console.log("successfully registered", data);
        hideAllPages();
        $("#login-page").show();
      },
      error: function(err) {
        console.log(err);
        console.log(user);
       // if (user.password.length ) ;

        
        if (user.password !== user.retype) {
          $("#signup-error").html("Passwords must match </br> ");
        }
      }
    };
    $.ajax(settings);
  }
  


  function login(userInfo) {
    let settings = {
      url: "/api/authorize/login",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(userInfo),
      success: function(data) {
        console.log("successfully logged in");
        localStorage.setItem("authToken", data.authToken);
        $(location).attr("href","./workout.html")
       // $("#log-out").show();
      },
      error: function(err) {
        console.log(err);
        $("#login-error").html("Incorrect Credentials");
      }
    };
    $.ajax(settings);
  
  }

  
  
  