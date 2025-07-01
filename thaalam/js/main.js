$(document).ready(function () {
  "use strict"; // start of use strict

  /*==============================
  Menu
  ==============================*/
  $(".header__btn").on("click", function () {
    $(this).toggleClass("header__btn--active");
    $(".sidebar").toggleClass("sidebar--active");
  });

  $(".header__search .close, .header__action--search button").on(
    "click",
    function () {
      $(".header__search").toggleClass("header__search--active");
    }
  );

  /*==============================
  Home slider
  ==============================*/

  /*==============================
  Carousel
  ==============================*/

  $(".main__carousel--artists").owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    loop: true,
    autoplay: false,
    smartSpeed: 600,
    margin: 20,
    autoHeight: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
        margin: 30,
      },
      992: {
        items: 6,
        margin: 30,
      },
      1200: {
        items: 6,
        margin: 30,
      },
    },
  });

  $(".main__carousel--store").owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    loop: true,
    autoplay: false,
    smartSpeed: 600,
    margin: 20,
    autoHeight: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
        margin: 30,
      },
      992: {
        items: 4,
        margin: 30,
      },
      1200: {
        items: 5,
        margin: 30,
      },
    },
  });

  $(".main__carousel--podcasts").owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    loop: true,
    autoplay: false,
    smartSpeed: 600,
    margin: 20,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
        margin: 30,
      },
      992: {
        items: 3,
        margin: 30,
      },
      1200: {
        items: 3,
        margin: 30,
        mouseDrag: false,
      },
    },
  });

  /*==============================
  Navigation
  ==============================*/
  $(".main__nav--prev").on("click", function () {
    var carouselId = $(this).attr("data-nav");
    $(carouselId).trigger("prev.owl.carousel");
  });
  $(".main__nav--next").on("click", function () {
    var carouselId = $(this).attr("data-nav");
    $(carouselId).trigger("next.owl.carousel");
  });

  /*==============================
  Partners
  ==============================*/
  $(".partners").owlCarousel({
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    margin: 20,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
        margin: 20,
      },
      768: {
        items: 4,
        margin: 30,
      },
      992: {
        items: 4,
        margin: 30,
      },
      1200: {
        items: 6,
        margin: 30,
      },
      1900: {
        items: 8,
        margin: 30,
      },
    },
  });

  /*==============================
  Product
  ==============================*/
  $(".store-item__carousel").owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    loop: true,
    autoplay: false,
    smartSpeed: 600,
    autoHeight: true,
    items: 1,
    margin: 20,
  });

  /*==============================
  Filter
  ==============================*/
  $(".filter__item-menu li").each(function () {
    $(this).attr("data-value", $(this).text().toLowerCase());
  });

  $(".filter__item-menu li").on("click", function () {
    var text = $(this).text();
    var item = $(this);
    var id = item.closest(".filter").attr("id");
    $("#" + id)
      .find(".filter__item-btn input")
      .val(text);
  });

  /*==============================
  Modal
  ==============================*/
  $(".open-video, .open-map").magnificPopup({
    disableOn: 0,
    fixedContentPos: true,
    type: "iframe",
    preloader: false,
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  $(".open-modal").magnificPopup({
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: "auto",
    type: "inline",
    preloader: false,
    focus: "#username",
    modal: false,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });

  $(".modal__close").on("click", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*==============================
  Select
  ==============================*/
  $(".main__select").select2({
    minimumResultsForSearch: Infinity,
  });

  /*==============================
  Scrollbar
  ==============================*/
  var Scrollbar = window.Scrollbar;

  $('.sidebar__nav-link[data-toggle="collapse"]').on("click", function () {
    if ($(".sidebar__menu--scroll").length) {
      Scrollbar.init(document.querySelector(".sidebar__menu--scroll"), {
        damping: 0.1,
        renderByPixels: true,
        alwaysShowTracks: true,
        continuousScrolling: false,
      });
    }
  });

  if ($(".dashbox__table-scroll").length) {
    Scrollbar.init(document.querySelector(".dashbox__table-scroll"), {
      damping: 0.1,
      renderByPixels: true,
      alwaysShowTracks: true,
      continuousScrolling: true,
    });
  }

  if ($(".cart__table-scroll").length) {
    Scrollbar.init(document.querySelector(".cart__table-scroll"), {
      damping: 0.1,
      renderByPixels: true,
      alwaysShowTracks: true,
      continuousScrolling: true,
    });
  }

  if ($(".dashbox__scroll").length) {
    Scrollbar.init(document.querySelector(".dashbox__scroll"), {
      damping: 0.1,
      renderByPixels: true,
      alwaysShowTracks: true,
      continuousScrolling: true,
    });
  }

  if ($(".release__list").length) {
    Scrollbar.init(document.querySelector(".release__list"), {
      damping: 0.1,
      renderByPixels: true,
      alwaysShowTracks: true,
      continuousScrolling: true,
    });
  }

  /*==============================
  Bg
  ==============================*/
  $(".hero__slide, .event").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "url(" + $(this).data("bg") + ")",
        "background-position": "center center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      });
    }
  });

  /*==============================
  Inputmask
  ==============================*/
  $(".stats__form input").inputmask("99-99-99-99");

  /*==============================
  Player
  ==============================*/
  $(".player__btn").on("click", function () {
    $(this).toggleClass("player__btn--active");
    $(".player").toggleClass("player--active");
  });

  const controls = `
	<div class="plyr__controls">
		<div class="plyr__actions">
			<button type="button" class="plyr__control plyr__control--prev">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.28,3.43a3.23,3.23,0,0,0-3.29,0L8,8.84V6A3,3,0,0,0,2,6V18a3,3,0,0,0,6,0V15.16l9,5.37a3.28,3.28,0,0,0,1.68.47,3.24,3.24,0,0,0,1.61-.43,3.38,3.38,0,0,0,1.72-3V6.42A3.38,3.38,0,0,0,20.28,3.43ZM6,18a1,1,0,0,1-2,0V6A1,1,0,0,1,6,6Zm14-.42a1.4,1.4,0,0,1-.71,1.25,1.23,1.23,0,0,1-1.28,0L8.68,13.23a1.45,1.45,0,0,1,0-2.46L18,5.19A1.23,1.23,0,0,1,18.67,5a1.29,1.29,0,0,1,.62.17A1.4,1.4,0,0,1,20,6.42Z"/></svg>
			</button>

			<button type="button" class="plyr__control" data-plyr="play">
				<svg class="icon--pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"></path></svg>
				<svg class="icon--not-pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
			</button>

			<button type="button" class="plyr__control plyr__control--next">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3a3,3,0,0,0-3,3V8.84L7,3.47a3.21,3.21,0,0,0-3.29,0A3.38,3.38,0,0,0,2,6.42V17.58a3.38,3.38,0,0,0,1.72,3A3.24,3.24,0,0,0,5.33,21,3.28,3.28,0,0,0,7,20.53l9-5.37V18a3,3,0,0,0,6,0V6A3,3,0,0,0,19,3ZM15.32,13.23,6,18.81a1.23,1.23,0,0,1-1.28,0A1.4,1.4,0,0,1,4,17.58V6.42a1.4,1.4,0,0,1,.71-1.25A1.29,1.29,0,0,1,5.33,5,1.23,1.23,0,0,1,6,5.19l9.33,5.58a1.45,1.45,0,0,1,0,2.46ZM20,18a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z"/></svg>
			</button>
		</div>

		<div class="plyr__wrap">
			<div class="plyr__progress">
				<input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
				<progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
				<span role="tooltip" class="plyr__tooltip">00:00</span>
			</div>

			<div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
		</div>

		<div class="plyr__wrap">
			<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
				<svg class="icon--pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.91,12l1.8-1.79a1,1,0,0,0-1.42-1.42l-1.79,1.8-1.79-1.8a1,1,0,0,0-1.42,1.42L17.09,12l-1.8,1.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.79-1.8,1.79,1.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
				<svg class="icon--not-pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z"/></svg>
				<span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
				<span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
			</button>

			<div class="plyr__volume">
				<input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
			</div>

			<a href="#" class="plyr__control" aria-label="Playlist">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,13H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-4H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/></svg>
				<span class="plyr__tooltip" role="tooltip">Playlist</span>
			</a>
		</div>
	</div>
	`;
  var player = new Plyr("#audio", {
    controls,
    volume: 0.5,
  });

  var audio = $("#audio");

  player.on("play", (event) => {
    $("a[data-link].active, a[data-playlist].active").addClass("play");
    $("a[data-link].active, a[data-playlist].active").removeClass("pause");
  });

  player.on("pause", (event) => {
    $("a[data-link].active, a[data-playlist].active").removeClass("play");
    $("a[data-link].active, a[data-playlist].active").addClass("pause");
  });

  /* single */
  $("a[data-link]").on("click", function (e) {
    e.preventDefault();
    let link = $(this);
    run(link, audio[0]);
  });

  function run(link, player) {
    if ($(link).hasClass("play")) {
      $(link).removeClass("play");
      audio[0].pause();
      $(link).addClass("pause");
    } else if ($(link).hasClass("pause")) {
      $(link).removeClass("pause");
      audio[0].play();
      $(link).addClass("play");
    } else {
      $("a[data-link]").removeClass("active");
      $("a[data-link]").removeClass("pause");
      $("a[data-link]").removeClass("play");
      $(link).addClass("active");
      $(link).addClass("play");
      player.src = $(link).attr("href");

      let title = $(link).data("title");
      let artist = $(link).data("artist");
      let img = $(link).data("img");
      $(".player__title").text(title);
      $(".player__artist").text(artist);
      $(".player__cover img").attr("src", img);
      audio[0].load();
      audio[0].play();
    }
  }

  /* playlist */
  if ($(".main__list--playlist").length) {
    var current = 0;
    var playlist = $(".main__list--playlist");
    var tracks = playlist.find("li a[data-playlist]");
    var len = tracks.length;

    playlist.find("a[data-playlist]").on("click", function (e) {
      e.preventDefault();
      let link = $(this);
      current = link.parent().index();
      run2(link, audio[0]);
    });

    player.on("ended", (event) => {
      let link = $(".single-item__cover.play");
      current++;
      if (current == len) {
        current = 0;
        link = playlist.find("a[data-playlist]")[0];
      } else {
        link = playlist.find("a[data-playlist]")[current];
      }
      run2($(link), audio[0]);
    });

    $(".plyr__control--prev").on("click", function (e) {
      let link = $(".single-item__cover.play");
      current--;
      if (current == -1) {
        current = len - 1;
        link = playlist.find("a[data-playlist]")[current];
      } else {
        link = playlist.find("a[data-playlist]")[current];
      }
      run2($(link), audio[0]);
    });

    $(".plyr__control--next").on("click", function (e) {
      let link = $(".single-item__cover.play");
      current++;
      if (current == len) {
        current = 0;
        link = playlist.find("a[data-playlist]")[0];
      } else {
        link = playlist.find("a[data-playlist]")[current];
      }
      run2($(link), audio[0]);
    });

    function run2(link, player) {
      if ($(link).hasClass("play")) {
        $(link).removeClass("play");
        audio[0].pause();
        $(link).addClass("pause");
      } else if ($(link).hasClass("pause")) {
        $(link).removeClass("pause");
        audio[0].play();
        $(link).addClass("play");
      } else {
        $("a[data-playlist]").removeClass("active");
        $("a[data-playlist]").removeClass("pause");
        $("a[data-playlist]").removeClass("play");
        $(link).addClass("active");
        $(link).addClass("play");
        player.src = $(link).attr("href");

        let title = $(link).data("title");
        let artist = $(link).data("artist");
        let img = $(link).data("img");
        $(".player__title").text(title);
        $(".player__artist").text(artist);
        $(".player__cover img").attr("src", img);
        audio[0].load();
        audio[0].play();
      }
    }
  }
});

// $(function () {
// 	$('.selectpicker').selectpicker();
// });
function successToast(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }, // Callback after click
  }).showToast();
}
function errorToast(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #d50002, #fe2c1d)",
    }, // Callback after click
  }).showToast();
}
function Logout() {
  localStorage.clear();
  window.location.href = "./";
}
function SetLogin() {
  //console.log(localStorage.getItem("memberid"));
  //console.log(document.getElementById("commonnavbar"));

  if (!localStorage.getItem("memberid")) {
    console.log("flag 1");
    fetch("./mobileApi/event_page.php")
      .then((res) => res.json())
      .then((response) => {
        if (response.items[0].status == 1) {
          document.getElementById(
            "commonnavbar"
          ).innerHTML = `<nav class="header__nav"> 
    
        
        <a href="index"><img src="./img/audio.svg"> Audio</a>
        <a href="https://m.youtube.com/@thaalammediaofficial" target="_blank"><img src="./img/tv.svg"> TV</a>
        
    
        </nav>`;
        } else {
          document.getElementById(
            "commonnavbar"
          ).innerHTML = `<nav class="header__nav"> 
    
        
        <a href="index"><img src="./img/audio.svg"> Audio</a>
        <a href="https://m.youtube.com/@thaalammediaofficial" target="_blank"><img src="./img/tv.svg"> TV</a>
        
    
        </nav>`;
        }
      });
  } else {
    console.log("flag 2");
    document.getElementById(
      "commonnavbar"
    ).innerHTML = `<nav class="header__nav">
  
    <a href="./profile" style="margin-right:0px;"><label style="margin-bottom:0px;    background-color: #c3c3c324;padding: 6px 15px;border-radius: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path
	d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"
  />
				  </svg> ${localStorage.getItem("username")}</label></a>
           <label style="cursor:pointer;margin-left:10px;margin-bottom:0px;    background-color: #c3c3c324;padding: 6px 15px;border-radius: 40px;" onclick="Logout()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
				  <path
						  d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z"
						  fill="#4E4D47"></path>
								</svg> Logout </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="index"><img src="./img/audio.svg"> Audio</a>
                <a href="https://m.youtube.com/@thaalammediaofficial" target="_blank"><img src="./img/tv.svg"> TV</a>
                </nav>`;
  }
}
function Subscribe() {
  if (!localStorage.getItem("memberid")) {
    window.location.href = `signup?redirect_url=pricing`;
  } else {
    window.location.href = `pricing`;
  }
}
function SetLogin1() {
  //console.log(localStorage.getItem("memberid"));
  //console.log(document.getElementById("commonnavbar"));
  //  <a href="https://thaalamsummerfestival.com/pre-registration" target="_blank" class="tsf-prereg-text" style="color:#fff; font-weight:500;">
  //   TSF Pre-Registration
  // </a>

  if (!localStorage.getItem("memberid")) {
    document.getElementById(
      "commonnavbar"
    ).innerHTML = `<nav class="header__nav"> 
    <div class="upgradeSubscription"><a href="#" onclick="Subscribe()">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" 
     stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" 
     viewBox="0 0 24 24" style="margin-bottom:4px;">
  <circle cx="12" cy="8" r="4" />
  <path d="M4 20c0-3.33 5.33-5 8-5s8 1.67 8 5v1H4v-1z" />
  <line x1="19" y1="2" x2="19" y2="8" />
  <line x1="16" y1="5" x2="22" y2="5" />
</svg>
  Member Signup</a></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
    <a href="index"><img src="./img/audio.svg"> Audio</a>
    <a href="https://m.youtube.com/@thaalammediaofficial" target="_blank"><img src="./img/tv.svg"> TV</a>
    <a href="https://thaalamsummerfestival.com/tickets" target="_blank" class="event_ticket ">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" stroke="#000" fill="none" stroke-width="0.8">
        <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a1.3 1.3 0 0 0 0 2.6V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.2a1.3 1.3 0 0 0 0-2.6V7z" />
        <path d="M12 5v14" stroke="#000" stroke-dasharray="2,2" />
        <circle cx="12" cy="8" r="0.75" fill="#6c757d"/>
        <circle cx="12" cy="16" r="0.75" fill="#6c757d"/>
      </svg>
      <span class="">Book Now</span>
    </a>
    
    </nav>`;
  } else {
    document.getElementById(
      "commonnavbar"
    ).innerHTML = `<nav class="header__nav">
    <a href="./profile" style="margin-right:0px;"><label style="margin-bottom:0px;    background-color: #c3c3c324;padding: 6px 15px;border-radius: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"/>
            </svg> ${localStorage.getItem("username")}</label></a>
             <label style="cursor:pointer;margin-left:10px;margin-bottom:0px;    background-color: #c3c3c324;padding: 6px 15px;border-radius: 40px;" onclick="Logout()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
                d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z"
                fill="#4E4D47"></path>
                  </svg> Logout </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="index"><img src="./img/audio.svg"> Audio</a>
                <a href="https://m.youtube.com/@thaalammediaofficial" target="_blank"><img src="./img/tv.svg"> TV</a>
                <a href="https://thaalamsummerfestival.com/tickets" target="_blank" class="event_ticket ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" stroke="#6c757d" fill="none" stroke-width="0.8">
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a1.3 1.3 0 0 0 0 2.6V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.2a1.3 1.3 0 0 0 0-2.6V7z" />
                    <path d="M12 5v14" stroke="#6c757d" stroke-dasharray="2,2" />
                    <circle cx="12" cy="8" r="0.75" fill="#6c757d"/>
                    <circle cx="12" cy="16" r="0.75" fill="#6c757d"/>
                  </svg>
                  <span class="">Book Now</span>
                </a>
            </nav>`;
  }
}
// function //SetUsername() {

//   if (!localStorage.getItem("memberid")) {
//     document.getElementById(
//       "commonnavbar1"
//     ).innerHTML = `<div class="upgradeSubscription subcriptionbtnmobile"></div>`;
//   } else {
//     document.getElementById(
//       "commonnavbar1"
//     ).innerHTML = `<div class="upgradeSubscription subcriptionbtnmobile"><label style="margin-bottom:0px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
//     <path
//     d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"
//     /> </svg> ${localStorage.getItem("username")}</label></div>`;
//   }
// }

function SetLogout() {
  fetch("./mobileApi/event_page.php")
    .then((res) => res.json())
    .then((response) => {
      let ele = document.getElementById("commonnavbar2");
    });
}
const commonNavbar3 = document.getElementById("commonnavbar3");
// <a href="https://thaalamsummerfestival.com/pre-registration" target="_blank" class="tsf-prereg-text">
//       TSF Pre-Registration
//     </a>
if (!localStorage.getItem("memberid")) {
  commonNavbar3.innerHTML = `
    <div class="tsf-navbar-box">
      <a href="https://thaalamsummerfestival.com/tickets" target="_blank">
         <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" stroke="#6c757d" fill="none" stroke-width="0.8">
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a1.3 1.3 0 0 0 0 2.6V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.2a1.3 1.3 0 0 0 0-2.6V7z" />
                    <path d="M12 5v14" stroke="#6c757d" stroke-dasharray="2,2" />
                    <circle cx="12" cy="8" r="0.75" fill="#6c757d"/>
                    <circle cx="12" cy="16" r="0.75" fill="#6c757d"/>
                  </svg> 
     <span style="color: #000;">Book Now</span>
      </a>
      <a class="header__action-btn" href="#" onclick="Subscribe()">
        <img src="./img/signin.svg" style="width:30px;" />
      </a>
    </div>
  `;
} else {
  commonNavbar3.innerHTML = `
    <div class="tsf-navbar-box">
     <a href="https://thaalamsummerfestival.com/tickets" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" stroke="#6c757d" fill="none" stroke-width="0.8">
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a1.3 1.3 0 0 0 0 2.6V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.2a1.3 1.3 0 0 0 0-2.6V7z" />
                    <path d="M12 5v14" stroke="#6c757d" stroke-dasharray="2,2" />
                    <circle cx="12" cy="8" r="0.75" fill="#6c757d"/>
                    <circle cx="12" cy="16" r="0.75" fill="#6c757d"/>
                  </svg>   
     <span style="color: #000;">Book Now</span>
    </a>
    <a href="./profile" class="header__action-btn">
      <img src="./img/profile.svg" style="width:30px;" />
    </a>
    </div>
  `;
}

// if (localStorage.getItem("memberid")) {
//   document.getElementById(
//     "mobilelogout"
//   ).innerHTML = `<a href="contact" class="sidebar__nav-link mobilelogout1">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"></path></svg>
//     <span>Logout (${localStorage.getItem("username")})</span>
//   </a>`;
// }
let ele4 = document.getElementById("commonnavbar4");
if (ele4) {
  if (!localStorage.getItem("memberid")) {
    ele4.innerHTML = ` 
    <a class="header__action-btn" href="signin" style="color:#000; font-size:16px; background-color: #c3c3c324;padding: 6px 15px;border-radius: 40px;">
      <img src="./img/signin.svg" style="    width: 30px;"/>  Subscribe  </a>
   `;
  }
  // else {
  //   ele4.innerHTML = `
  //   <a class="header__action-btn" onclick="Logout()">
  //   <img src="./img/signin.svg" style="width: 30px;"/>
  // </a>
  //  `;

  // }
}

function getBanner() {
  fetch("./mobileApi/home_banner.php")
    .then((res) => res.json())
    .then((response) => {
      //console.log(response);
      let str = "";
      for (let x of response.items) {
        str += `<div
          class="owl-item" 
        >
        <a href="https://thaalamsummerfestival.com/index" target="_blank">
          <img src=${x.url} width="100%"/>
          </a>
        </div>`;
      }

      // Assuming "data" is an object in the JSON response
      const count = Object.keys(response.items).length;
      if (count == 1) {
        document.getElementById("carouselimages").innerHTML = str;
        $(".hero").owlCarousel({
          mouseDrag: false,
          touchDrag: false,
          dots: false,
          loop: false,
          autoplay: false,
          smartSpeed: 600,
          autoHeight: true,
          items: 1,
          responsive: {
            0: {
              margin: 20,
            },
            576: {
              margin: 20,
            },
            768: {
              margin: 30,
            },
            1200: {
              margin: 30,
            },
          },
        });
      } else if (count > 1) {
        document.getElementById("carouselimages").innerHTML = str;
        $(".hero").owlCarousel({
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          loop: true,
          autoplay: true,
          smartSpeed: 600,
          autoHeight: false,
          items: 1,
          responsive: {
            0: {
              margin: 20,
            },
            576: {
              margin: 20,
            },
            768: {
              margin: 30,
            },
            1200: {
              margin: 30,
            },
          },
        });
      }
    });
}

function getSponsor() {
  fetch("./mobileApi/sponsor_report.php")
    .then((res) => res.json())
    .then((response) => {
      //console.log(response);
      let str = "";

      if (response.status == "success") {
        for (let x of response.items) {
          str += `<a href="#" class="partners__img" id="modal-info3">
          <img src=${x.url} alt="" />
        </a>`;
        }
        document.getElementById("popupcarousel").innerHTML = str;
        $(".hero1").owlCarousel({
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          loop: true,
          autoplay: true,
        });
      }
    });
}
function getEventBanner() {
  fetch("./mobileApi/event_banner.php")
    .then((res) => res.json())
    .then((response) => {
      //console.log(response);
      let str = "";
      for (let x of response.items) {
        str += `<div
          class="owl-item" 
        >
        <a href="https://thaalamsummerfestival.com/index" target="_blank">
          <img src=${x.url} width="100%" />
          </a>
        </div>`;
      }

      // Assuming "data" is an object in the JSON response
      const count = Object.keys(response.items).length;
      if (count == 1) {
        document.getElementById("eventcarousel").innerHTML = str;
        $(".hero").owlCarousel({
          mouseDrag: false,
          touchDrag: false,
          dots: false,
          loop: false,
          autoplay: false,
          smartSpeed: 600,
          autoHeight: true,
          items: 1,
          responsive: {
            0: {
              margin: 20,
            },
            576: {
              margin: 20,
            },
            768: {
              margin: 30,
            },
            1200: {
              margin: 30,
            },
          },
        });
      } else if (count > 1) {
        document.getElementById("eventcarousel").innerHTML = str;
        $(".hero").owlCarousel({
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          loop: true,
          autoplay: true,
          smartSpeed: 600,
          autoHeight: false,
          items: 1,
          responsive: {
            0: {
              margin: 20,
            },
            576: {
              margin: 20,
            },
            768: {
              margin: 30,
            },
            1200: {
              margin: 30,
            },
          },
        });
      }
    });
}

function getBlogs() {
  const id = "";
  fetch("./mobileApi/blogs.php", {
    body: JSON.stringify({ id }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((response) => {
      //console.log(response);
      let str = "";
      for (let x of response.items) {
        str += `<div class="col-12 col-sm-6 col-lg-4">
      <div class="post">
        <a href="single_blog?id=${x.id}" class="post__img">
          <img src=${x.image} alt="">
        </a>

        <div class="post__content">
          <h3 class="post__title"><a href="single_blog?id=${x.id}">${x.title
          }</a></h3>
          <div class="post__meta">
            <span class="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24">
                <path
                  d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z">
                </path>
              </svg> ${humanized_time_span(x.date)}</span>
            <!-- <span class="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24">
                <path
                  d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z">
                </path>
              </svg> 18</span> -->
          </div>
        </div>
      </div>
    </div>`;
      }
      document.getElementById("blogcontent").innerHTML = str;
    });
}
function eventpage() {
  fetch("./mobileApi/event_page.php")
    .then((res) => res.json())
    .then((response) => {
      if (response.items[0].status == 1) {
        document.querySelector(".evnetpage").style.display = "block";
      } else {
        document.querySelector(".evnetpage").style.display = "none";
      }
    });
}

function getRecentBlogs() {
  const id = "";
  fetch("./mobileApi/recent_blogs.php", {
    body: JSON.stringify({ id }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((response) => {
      //console.log(response);
      let str = "";
      for (let x of response.items) {
        str += `<div class="col-12 col-sm-6 col-lg-4">
      <div class="post">
        <a href="single_blog?id=${x.id}" class="post__img">
          <img src=${x.image} alt="">
        </a>

        <div class="post__content">
          <h3 class="post__title"><a href="single_blog?id=${x.id}">${x.title
          }</a></h3>
          <div class="post__meta">
            <span class="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24">
                <path
                  d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z">
                </path>
              </svg> ${humanized_time_span(x.date)}</span>
            <!-- <span class="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24">
                <path
                  d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z">
                </path>
              </svg> 18</span> -->
          </div>
        </div>
      </div>
    </div>`;
      }
      document.getElementById("blogcontent").innerHTML = str;
    });
}

function numOnly(id) {
  // Get the element by id
  var element = document.getElementById(id);
  // Use numbers only pattern, from 0 to 9 with \-
  var regex = /[^0-9\-]/gi;
  // Replace other characters that are not in regex pattern
  element.value = element.value.replace(regex, "");
}
