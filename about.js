 window.onscroll = function() {myFunction1()};

function myFunction1() {
  if (document.documentElement.scrollTop > 1500) {
      myatminbox.style.display  = "flex"
  }
  if (document.documentElement.scrollTop > 2000) {
      arkerbox.style.display = "flex"
  }
  if (document.documentElement.scrollTop > 2500) {
      minthiakbox.style.display = "flex"
  }
  if (document.documentElement.scrollTop > 3000) {
      zayarbox.style.display = "flex"
  }
}
