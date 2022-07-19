
//open pineapple if password matches

function pasuser(form) { 
if (form.pass.value=="lemonlime") { 
$(".lock__top").animate({height:"toggle"},1000);
$(".lock__bottom").animate({height:"toggle"},1000);
$(".home").addClass("active").addClass("fade-in").removeClass("hidden");
// $(".lock").addClass("hidden");
setTimeout(function () {
    $(".lock").addClass("hidden");
}, 1500);
} 
else { alert("Wrong Password") } 
};

// Wait for document to load
$(document).ready(() => {
    $('form').on('submit', () => {

        // prevents default behaviour
        // Prevents event propagation
        return false;
    });
});
$('form').keypress((e) => {

    // Enter key corresponds to number 13
    if (e.which === 13) {
        $('.form').submit();
        console.log('form submitted');
    }
})

// Initialize and add the map
function initMap() {
    // The location of event
    const quadra = { lat: 50.035688, lng: -125.198945 };
    // The map, centered on Quadra
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: quadra,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: quadra,
      map: map,
    });
  }
  
  window.initMap = initMap;
