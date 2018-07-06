(function(){
  angular
    .module("scrollApp")
    .factory('headingService', headingService)

    function headingService(){
      var slideIndex = 0;
      var service = {
        carousel: carousel
      };

      return service;

      function carousel(){
        var index = 0;
        var backgroundElement = document.getElementsByClassName("mySlides");
        for (; index < backgroundElement.length; index++){
          backgroundElement[index].style.display = 'none';
          backgroundElement[index].style.backgroundSize = 'cover';
          backgroundElement[index].style.backgroundRepeat = 'no-repeat';
          backgroundElement[index].style.backgroundPosition = 'center bottom';
        }
        
        slideIndex++;
        if (slideIndex > backgroundElement.length){slideIndex = 1}
        backgroundElement[slideIndex - 1].style.display = "table";
        setTimeout(carousel, 3000);
      }

    };
})();