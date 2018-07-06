(function(){
  angular
    .module("scrollApp")
    .factory('headingService', headingService)

    function headingService(){
      var service = {
        backgroundStyle: backgroundStyle,
        slides: slides
      };

      return service;

      function slides(){
        return ['picture2.jpg', 'picture1.jpg']
      }
      
      function backgroundStyle(image) {
        var style = {
          background: 'url(/assets/img/' + image + ') no-repeat bottom center',
          backgroundSize: 'cover'
        }
        return style;
      }

    };
})();