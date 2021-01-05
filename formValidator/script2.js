$("#email").blur(function (e) {
  e.preventDefault();
  var email_input = $("#email").val();
  result = checkEmail(email_input);
  // console.log(result);
  var message = $("#email").siblings('small').first();
  // console.log(message.text());
  if (result) {
    message.css('visibility', 'hidden')
  } else {
    message.text("email is not valid").css('visibility', 'visible');
  }

})
function checkEmail(email) {
  var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  return emailRule.test();
}



// 使用者名稱
$("#username").blur(function () {

  var username_input = $("#username").val();
  var message_username = $("#username").siblings('small').first();


  if (username_input.length < 3) {
    message_username.text("Username must be at least 3 characters").css('visibility', 'visible');

  } else if (username_input.length > 15) {
    message_username.text("Username must be at less than 15 characters").css('visibility', 'visible');

  } else {
    message_username.css('visibility', 'hidden');


  }

  $("#username").focus(function (e) {
    e.preventDefault();
    var username_input = $("#username").val();
    var message_username = $("#username").siblings('small').first();


    if (username_input.length < 3) {
      $(this).addClass("error");
    } else if (username_input.length > 15) {
      $(this).addClass("error");
    } else {
      $(this).addClass("success");
    }
  })

  // $("#username").focus(function () {
  //   if (username_input.length < 3) {
  //     $("#username").addClass("error");
  //   } else if (username_input.length > 15) {
  //     $("#username").addClass("error");
  //   } else {
  //     $("#username").addClass("success");
  //   }

})

//正確時，外框顯示綠色，錯誤時紅色 


//密碼
$("#password").blur(function (e) {

  e.preventDefault();
  var password_input = $("#password").val();
  var message_password = $("#password").siblings('small').first();
  if (password_input.length < 8) {
    message_password.text("Password must be at least 8 characters").css('visibility', 'visible');
  } else if (password_input.length > 16) {
    message_password.text("Password must be at less than 16 characters").css('visibility', 'visible');
  } else {
    message_password.css('visibility', 'hidden')
  }


})


$("#password").blur(function (e) {

  e.preventDefault();
  var password2_input = $("#password2").val();
  var message_password2 = $("#password2").siblings('small').first();
  if (password2_input.length < 8) {
    message_password2.text("Password2 must be at least 8 characters").css('visibility', 'visible');
  } else if (password2_input.length > 16) {
    message_password2.text("Password2 must be at less than 16 characters").css('visibility', 'visible');
  } else {
    message_password2.css('visibility', 'hidden')
  }


})



// check password match
$("#form").submit(function (e) {
  e.preventDefault();
  var password_input = $("#password").val();
  var password2_input = $("#password2").val();
  var message_password2 = $("#password2").siblings('small').first();

  if (password_input !== password2_input) {
    message_password2.text('Password do not match').css('visibility', 'visible');
  }

})
