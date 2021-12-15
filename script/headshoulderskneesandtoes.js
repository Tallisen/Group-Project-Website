//får navbaren til å stoppe når den kommer til innholdet på siden

var windw = this;

$.fn.followTo = function ( elem ) {
    var $this = this,
        $window = $(windw),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function(){
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    top: (bumperPos - thisHeight)
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
        };
    $window.resize(function()
    {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });
    $window.scroll(setPosition);
    setPosition();
};

$('#navbar').followTo('#navstop');


//viser hjemmesiden når man trykker på home
homePage = document.getElementById("home");

var showHome = function () {
  if (homePage.className = 'hidden') {
    homePage.className = "show";
  } else {
    homePage.className = "hidden";
  }
  location.href = ('#home');
};



//viser sample-siden når man trykker på sample packs
samplePage = document.getElementById("samples");

var showSmplPage = function () {
  if (samplePage.className = 'hidden') {
    samplePage.className = "sample-page show";
  } else {
    samplePage.className = "sample-page hidden";
  }
  location.href = ('#samples');
};

//viser om-siden når man trykker på about & contakt
aboutPage = document.getElementById("about-contact");

var showAbout = function () {
  if (aboutPage.className = 'hidden') {
    aboutPage.className = "show";
  } else {
    aboutPage.className = "hidden";
  }
  location.href = ('#about-contact');
};


//skjuler elementer som er valgt i ankerelementet
function HideContent(obj) {
    for (var i = 0; i < obj.length; i++) {
      document.getElementById([obj[i]]).className = 'hidden';
    }
  }

//skjul enter kanppen
var siteEnter = document.getElementById('enterbtn');

var hideEnterSite = function () {
  if (siteEnter.className = 'bn1 show') {
    siteEnter.className = "hidden";
  } else {
    siteEnter.className = "bn1 show";
  }
};

/*function smoothScrollHome(){
  document.querySelector('.show').scrollIntoView({
    behavior: 'smooth'
  });
}*/
