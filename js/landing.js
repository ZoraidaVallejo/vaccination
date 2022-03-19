
// warning stripe -------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var accordeon = document.getElementsByClassName("accordeon_title");
  // console.log(accordeon);
  
  for (item = 0; item < accordeon.length; item++) {
    accordeon[item].addEventListener("click", function (e) {
      // var clickElement = e.target;  // get the dom element clicked.
      // var elementClassName = e.target.className;  // get the classname of the element clicked
      // console.log(e);
      var expand = this.parentNode;
      var content = this.nextElementSibling;
      content.classList.toggle('active');
      expand.classList.toggle('expanded')
    });
  }
})
