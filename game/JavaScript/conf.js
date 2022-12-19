function setTopo(){
  $(window).scrollTop(0);
}
$(window).bind('scroll', setTopo);

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden';
  document.body.scroll = "no"; // IE
}
unloadScrollBars();

