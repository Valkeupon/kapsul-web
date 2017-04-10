var config = {
  apiKey: "AIzaSyBpnjcxvtO1WPL-brH9jHa4oqM42JrnBDY",
  authDomain: "website-kapsul-9a992.firebaseapp.com",
  databaseURL: "https://website-kapsul-9a992.firebaseio.com",
  projectId: "website-kapsul-9a992",
  storageBucket: "website-kapsul-9a992.appspot.com",
  messagingSenderId: "14616293680"
};
firebase.initializeApp(config);
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
  var elemDates = document.getElementById('dates');
  var elemDesc = document.getElementById('describ');
  var elemCd = document.getElementById('cd');
  var data = snapshot.val();
  var datesContent = data.Dates;
  var describContent = data.describ;
  var cdContent = data.cd;

  for(var index in datesContent) {
    elemDates.innerHTML += datesHtml(datesContent[index]);
  }

  elemDesc.innerHTML += describHtml(describContent);
  elemCd.innerHTML += cdHtml(cdContent);

}, function (error) {
   console.log("Error: " + error.code);
});

function datesHtml(data){
  var eventLink = data.url;
  var html = '';
  
  if(eventLink){
    html += '<li><a href="'+ data.url +'" target="_blank"><div class="row"><div class="large-5 columns"><b>'+data.ville+'</b></div><div class="columns large-3">'+data.lieu+'</div><div class="large-2 columns">'+data.content+'</div><div class="large-2 columns"><i class="fa fa-calendar" aria-hidden="true"></i></div></div></div></a></li>';
  }else{
    html += '<li class="noEvent"><a target="_blank"><div class="row"><div class="large-5 columns"><b>'+data.ville+'</b></div><div class="columns large-3">'+data.lieu+'</div><div class="large-2 columns">'+data.content+'</div><div class="large-2 columns"><i class="fa fa-calendar" aria-hidden="true"></i></div></div></div></a></li>';
  }

  return html;

}

function describHtml(data){

  var html = '';
  html += '<div>';
  html += '<p>'+data+'</p>';
  html += '</div>';

  return html;
}


function cdHtml(data){

  var html = data;

  return html;
}

$( document ).ready(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.fa-bars').click(function(){
      $( ".section--menu--small" ).slideToggle( "slow" );
      $(this).addClass('active');
  });

  $('.noEvent').click(function(e){
    e.preventDefault();
    alert("il n'y pas encore d'évènement sur cette dates");
  });

});
