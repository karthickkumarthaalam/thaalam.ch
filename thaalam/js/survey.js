//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$("#english1").click(function(){

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");
  const state = document.getElementById("signupstate");
  const mobile = document.getElementById("mobile");
  const ques1 = document.getElementById("ques1");

  function isValidEmail(email) {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    return emailRegex.test(email);
  }

  if (!name.value) {
    errorToast("Enter valid name");
    return;
  } else if (!mobile.value) {
    errorToast("Enter valid Mobile Number");
    return;
  } else if (!email.value) {
    errorToast("Enter valid email");
    return;
  } else if (!country.value || country.value == "0") {
    errorToast("Please select valid Canton");
    return;
  }else  if (!ques1.value) {
    errorToast("Please select Question");
    return;
  } 
  if (!isValidEmail(email.value)) { 
    errorToast("Enter valid Email");
    return;
  }
  

  localStorage.setItem("surveyemail", email.value);  
  localStorage.setItem("surveymobile", mobile.value);  
  localStorage.setItem("surveyname", name.value);  
  localStorage.setItem("mobileverify",0);
  fetch("./mobileApi/survey1.php", {
    method: "post",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      country: country.value,
      state:state.value,
      ques1:ques1.value
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      console.log(response.status);
      console.log(response.message);
      if (response.status === "error") {
        errorToast(response.message);
        return;
      }  
  
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
      
      next_fs.css({'left': left, 'opacity': opacity});
     
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
  
});
});

$("#otpbutton").click(function(){
  const verifys=localStorage.getItem("mobileverify");

  const otp1 = document.getElementById("otp01");
  const otp2 = document.getElementById("otp02");
  const otp3 = document.getElementById("otp03");
  const otp4 = document.getElementById("otp04");
  const otp5 = document.getElementById("otp05");
  const otp6 = document.getElementById("otp06");
  const otpbutton = document.getElementById("otpbutton");
  
  const otp= otp1.value+otp2.value+otp3.value+otp4.value+otp5.value+otp6.value;
  if(otp==""){
    errorToast("Please enter Valid OTP");
    return;
  }
  const mob1 = localStorage.getItem("surveymobile");
  const email = localStorage.getItem("surveyemail");

  fetch("./mobileApi/survey_verification.php", {
    method: "post",
    body: JSON.stringify({
      email: email,
      otp: otp
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      
      if(response.status==="success"){
        successToast(response.message);
        localStorage.setItem("mobileverify",1);
        otp1.setAttribute("readonly","true");
        otp2.setAttribute("readonly","true");
        otp3.setAttribute("readonly","true");
        otp4.setAttribute("readonly","true");
        otp5.setAttribute("readonly","true");
        otp6.setAttribute("readonly","true");
      }else{
        errorToast(response.message);
      }
      console.log(response);
    });
 
    
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
      
      next_fs.css({'left': left, 'opacity': opacity});
     
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  }); 
    setTimeout(function () {
       location.reload();
      }, 60000); 
});

function resend(){
  const email = localStorage.getItem("surveyemail");
  const name = localStorage.getItem("surveyname");
  fetch("./mobileApi/resend_code_survey.php", {
    method: "post",
    body: JSON.stringify({
      email: email,
      name:name
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      
      if(response.status==="success"){
        successToast(response.message);
      }else{
        errorToast(response.message);
      }
      console.log(response);
    });
}

$("#cancel").click(function(){
  const name = document.getElementById("name");
  const mobile = document.getElementById("mobile");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");
  const state = document.getElementById("signupstate");
  const ques1 = document.getElementById("ques1");

  name.value="";
  mobile.value="";
  email.value="";
  state.value=0;
  ques1.value=0;
});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity });
      
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
      previous_fs.css({ 
        'position': 'relative'
      });
    }, 
    
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
  
});

// -------------------------------------------------------------------------------------------------


const inputs = document.querySelectorAll(".otp-field > input");
const button = document.getElementById("otpbutton");

window.addEventListener("load", () => inputs[0].focus());


inputs[0].addEventListener("paste", function (event) {
  event.preventDefault();

  const pastedValue = (event.clipboardData || window.clipboardData).getData(
    "text"
  );
  const otpLength = inputs.length;
console.log(pastedValue);
  for (let i = 0; i < otpLength; i++) {
    if (i < pastedValue.length) {
      inputs[i].value = pastedValue[i];
      inputs[i].focus;
    } else {
      inputs[i].value = ""; // Clear any remaining inputs
      inputs[i].focus;
    }
  }
});
 
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }

 
  });
});

// $("#otpbutton").click(function(){
  
//   const otp1 = document.getElementById("otp01");
//   const otp2 = document.getElementById("otp02");
//   const otp3 = document.getElementById("otp03");
//   const otp4 = document.getElementById("otp04");
//   const otp5 = document.getElementById("otp05");
//   const otp6 = document.getElementById("otp06");
//   const otpbutton = document.getElementById("otpbutton");
  
  
//   const otp= otp1.value+otp2.value+otp3.value+otp4.value+otp5.value+otp6.value;
//   if(otp==""){
//     errorToast("Please enter Valid OTP");
//     return;
//   }
//   const mob1 = localStorage.getItem("surveymobile");

//   fetch("./mobileApi/survey_verification.php", {
//     method: "post",
//     body: JSON.stringify({
//       mobile: mob1,
//       otp: otp
//     }),
//   })
//     .then((res) => res.json())
//     .then((response) => {
      
//       if(response.status==="success"){
//         successToast(response.message);
//         localStorage.setItem("mobileverify",1);
//         otpbutton.setAttribute("disabled", "disabled");
//         otp1.setAttribute("readonly","true");
//         otp2.setAttribute("readonly","true");
//         otp3.setAttribute("readonly","true");
//         otp4.setAttribute("readonly","true");
//         otp5.setAttribute("readonly","true");
//         otp6.setAttribute("readonly","true");
//       }else{
//         errorToast(response.message);
//       }
//       console.log(response);
//     });

// });