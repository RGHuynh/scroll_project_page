(function(){
  var config = {
    templateUrl: '/app/components/heading/heading.composition.html',
    controller: headingCtrl
  };

  function headingCtrl(headingService){
    headingService.carousel();
  };

  angular
    .module('scrollApp')
    .component('heading', config);
})();