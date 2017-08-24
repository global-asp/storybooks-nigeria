document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].currentTime = 0;
      audios[i].pause();
    }
  }
}, true);

function playpause(n) {
  p = document.getElementById('audio' + n);
  if (p.paused) {
    p.play();
  } else {
    p.pause();
  }
}

function switchlang(d,l) {
  en = document.getElementsByClassName("en");
  fr = document.getElementsByClassName("fr");
  def = document.getElementsByClassName("def");
  btn_en = document.getElementsByClassName("lang-en");
  btn_fr = document.getElementsByClassName("lang-fr");
  if (l == "en") {
    for (var i = 0; i < btn_en.length + 1; i++) {
      fr[i].style.display = "none";
      en[i].style.display = "block";
      def[i].style.display = "none";
      btn_en[i].innerHTML = d;
      btn_fr[i].innerHTML = "fr";
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_fr[i].setAttribute("onclick", "switchlang('" + d + "','fr')");
    }
  } else if (l == "fr") {
    for (var i = 0; i < btn_fr.length + 1; i++) {
      en[i].style.display = "none";
      fr[i].style.display = "block";
      def[i].style.display = "none";
      btn_en[i].innerHTML = "en";
      btn_fr[i].innerHTML = d;
      btn_fr[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','en')");
    }
  } else if (l == d) {
    for (var i = 0; i < btn_fr.length + 1; i++) {
      en[i].style.display = "none";
      fr[i].style.display = "none";
      def[i].style.display = "block";
      btn_en[i].innerHTML = "en";
      btn_fr[i].innerHTML = "fr";
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','en')");
      btn_fr[i].setAttribute("onclick", "switchlang('" + d + "','fr')");
    }
  }
}
