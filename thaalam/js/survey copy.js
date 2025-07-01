//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$("#english1").click(function(){

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");
  const mobile = document.getElementById("mobile");
  function isValidEmail(email) {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    return emailRegex.test(email);
  }

  if (!name.value) {
    errorToast("Enter valid name");
    return;
  } else if (!email.value) {
    errorToast("Enter valid email");
    return;
  } else if (!mobile.value) {
    errorToast("Enter valid Mobile Number");
    return;
  } else if (!country.value) {
    errorToast("Enter valid Country");
    return;
  } 
  
  if (!isValidEmail(email.value)) { 
    errorToast("Enter valid Email");
    return;
  }
  

  localStorage.setItem("surveyemail", email.value);  
  fetch("./mobileApi/survey1.php", {
    method: "post",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      country: country.value
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

$("#english2").click(function(){

  const ques1 = document.getElementById("ques1");
  const ques2 = document.getElementById("ques2");
  const email1 = localStorage.getItem("surveyemail");
  // console.log(email1);

  if (!ques1.value) {
    errorToast("Please select Question 1");
    return;
  } else if (!ques2.value) {
    errorToast("Please select Question 2");
    return;
  }

  fetch("./mobileApi/survey2.php", {
    method: "post",
    body: JSON.stringify({
      email1: email1,
      ques1: ques1.value,
      ques2: ques2.value
    }),
  })
    .then((res) => res.text())
    .then((response) => {
      console.log(response);
      localStorage.setItem("surveyemail", "");  

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
  
});
$("#cancel").click(function(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");

  name.value="";
  email.value="";
  country.value="-- Select Country --";
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

// -----------------------------------------------------

$("#german1").click(function(){

  const name = document.getElementById("name1");
  const email = document.getElementById("email1");
  const country = document.getElementById("signupcountry1");
  const mobile = document.getElementById("mobile1");
  function isValidEmail(email) {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    return emailRegex.test(email);
  }

  if (!name.value) {
    errorToast("Enter valid name");
    return;
  } else if (!email.value) {
    errorToast("Enter valid email");
    return;
  } else if (!mobile.value) {
    errorToast("Enter valid Mobile Number");
    return;
  } else if (!country.value) {
    errorToast("Enter valid Country");
    return;
  } 
  
  if (!isValidEmail(email.value)) { 
    errorToast("Enter valid Email");
    return;
  }
  

  localStorage.setItem("surveyemail", email.value);  
  fetch("./mobileApi/survey1.php", {
    method: "post",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      country: country.value
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

$("#german2").click(function(){

  const ques1 = document.getElementById("ques11");
  const ques2 = document.getElementById("ques21");
  const email1 = localStorage.getItem("surveyemail");
  // console.log(email1);

  if (!ques1.value) {
    errorToast("Please select Question 1");
    return;
  } else if (!ques2.value) {
    errorToast("Please select Question 2");
    return;
  }

  fetch("./mobileApi/survey2.php", {
    method: "post",
    body: JSON.stringify({
      email1: email1,
      ques1: ques1.value,
      ques2: ques2.value
    }),
  })
    .then((res) => res.text())
    .then((response) => {
      console.log(response);
      localStorage.setItem("surveyemail", "");  

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
  
});

$("#cancel1").click(function(){
  const name = document.getElementById("name1");
  const email = document.getElementById("email1");
  const mobile = document.getElementById("mobile1");
  const country = document.getElementById("signupcountry1");

  name.value="";
  email.value="";
  mobile.value="";
  country.value="-- Select Country --";
});

$(".previous1").click(function(){
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
// ------------------------------------------------------------


// -----------------------------------------------------

$("#french1").click(function(){

  const name = document.getElementById("name2");
  const email = document.getElementById("email2");
  const country = document.getElementById("signupcountry2");
  const mobile = document.getElementById("mobile2");
  function isValidEmail(email) {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    return emailRegex.test(email);
  }

  if (!name.value) {
    errorToast("Enter valid name");
    return;
  } else if (!email.value) {
    errorToast("Enter valid email");
    return;
  } else if (!mobile.value) {
    errorToast("Enter valid Mobile Number");
    return;
  } else if (!country.value) {
    errorToast("Enter valid Country");
    return;
  } 
  
  if (!isValidEmail(email.value)) { 
    errorToast("Enter valid Email");
    return;
  }
  

  localStorage.setItem("surveyemail", email.value);  
  fetch("./mobileApi/survey1.php", {
    method: "post",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      country: country.value
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

$("#french2").click(function(){

  const ques1 = document.getElementById("ques12");
  const ques2 = document.getElementById("ques22");
  const email1 = localStorage.getItem("surveyemail");
  // console.log(email1);

  if (!ques1.value) {
    errorToast("Please select Question 1");
    return;
  } else if (!ques2.value) {
    errorToast("Please select Question 2");
    return;
  }

  fetch("./mobileApi/survey2.php", {
    method: "post",
    body: JSON.stringify({
      email1: email1,
      ques1: ques1.value,
      ques2: ques2.value
    }),
  })
    .then((res) => res.text())
    .then((response) => {
      console.log(response);
      localStorage.setItem("surveyemail", "");  

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
  
});

$("#cancel2").click(function(){
  const name = document.getElementById("name2");
  const email = document.getElementById("email2");
  const mobile = document.getElementById("mobile2");
  const country = document.getElementById("signupcountry2");

  name.value="";
  email.value="";
  mobile.value="";
  country.value="-- Select Country --";
});

$(".previous2").click(function(){
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
// ------------------------------------------------------------


// -----------------------------------------------------

$("#tamil1").click(function(){

  const name = document.getElementById("name3");
  const email = document.getElementById("email3");
  const country = document.getElementById("signupcountry3");
  const mobile = document.getElementById("mobile3");
  function isValidEmail(email) {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    return emailRegex.test(email);
  }

  if (!name.value) {
    errorToast("Enter valid name");
    return;
  } else if (!email.value) {
    errorToast("Enter valid email");
    return;
  } else if (!mobile.value) {
    errorToast("Enter valid Mobile Number");
    return;
  } else if (!country.value) {
    errorToast("Enter valid Country");
    return;
  } 
  
  if (!isValidEmail(email.value)) { 
    errorToast("Enter valid Email");
    return;
  }
  

  localStorage.setItem("surveyemail", email.value);  
  fetch("./mobileApi/survey1.php", {
    method: "post",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      country: country.value
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

$("#tamil2").click(function(){

  const ques1 = document.getElementById("ques13");
  const ques2 = document.getElementById("ques23");
  const email1 = localStorage.getItem("surveyemail");
  // console.log(email1);

  if (!ques1.value) {
    errorToast("Please select Question 1");
    return;
  } else if (!ques2.value) {
    errorToast("Please select Question 2");
    return;
  }

  fetch("./mobileApi/survey2.php", {
    method: "post",
    body: JSON.stringify({
      email1: email1,
      ques1: ques1.value,
      ques2: ques2.value
    }),
  })
    .then((res) => res.text())
    .then((response) => {
      console.log(response);
      localStorage.setItem("surveyemail", "");  

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
  
});

$("#cancel3").click(function(){
  const name = document.getElementById("name3");
  const email = document.getElementById("email3");
  const mobile = document.getElementById("mobile3");
  const country = document.getElementById("signupcountry3");

  name.value="";
  email.value="";
  mobile.value="";
  country.value="-- Select Country --";
});

$(".previous3").click(function(){
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
// ------------------------------------------------------------

$(".submit").click(function(){
  return false;
})

$("#oslo_cancel1").click(function(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");

  name.value="";
  email.value="";
  country.value="OSLO";
});
$("#oslo_cancel2").click(function(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");

  name.value="";
  email.value="";
  country.value="OSLO";
});


$("#Holland_cancel1").click(function(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");

  name.value="";
  email.value="";
  country.value="Holland";
});

$("#Holland_cancel2").click(function(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("signupcountry");

  name.value="";
  email.value="";
  country.value="Holland";
});