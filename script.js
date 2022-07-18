$(document).ready(() => {
  var toggle = false;
  $('.clicks').on('click', function () {

    if (toggle == false) {
      $('#box').addClass('show');
      toggle = true;
    }
    else if (toggle == true) {
      $('#box').removeClass('show');
      toggle = false;
    }
  });
  $('.cancel').on('click', function () {
    $('#box').removeClass('show');
  });
  $("#errorUsername").hide();
  $("#errorEmail").hide();

  let usernameError = true;
  let emailError = true;

  $("#username").keyup(() => {
    usernameValidation();
  });
  const usernameValidation = () => {
    let usernameValue = $("#username").val();
    const usernameRegex = new RegExp(/^[a-z0-9_-]{3,10}$/gim);
    if (usernameValue.length === 0) {
      $("#errorUsername").show();
      $("#").text("Username can't be empty");
      usernameError = true;
    } else if (!usernameRegex.test(usernameValue)) {
      $("#errorUsername").show();
      $("#errorUsername").text("Invalid Username");
      usernameError = true;
    } else {
      $("#errorUsername").hide();
      usernameError = false;
    }
  };
  $("#email").keyup(() => {
    emailValidation();
  });

  const emailValidation = () => {
    let emailValue = $("#email").val();
    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (emailValue.length === 0) {
      $("#errorEmail").show();
      $("#errorEmail").text("Email id can't be empty");
      emailError = true;
    } else if (!emailRegex.test(emailValue)) {
      $("#errorEmail").show();
      $("#errorEmail").text("Invalid Email id");
      emailError = true;
    } else {
      $("#errorEmail").hide();
      emailError = false;
    }
  };
  $(".submission").click(() => {
    usernameValidation();
    emailValidation();
    if (usernameError) {
      var error = document.getElementById("errorUsername")
      error.textContent = "Please enter a valid Username"
      error.style.color = "red"
      return false;
    } else if (emailError) {
      var error = document.getElementById("errorEmail")
      // Changing content and color of content
      error.textContent = "Please enter a valid number"
      error.style.color = "red"
    } else {
      $('#box').removeClass('show');
      error.textContent = ""

    }
  });
});