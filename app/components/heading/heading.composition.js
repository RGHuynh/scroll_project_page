(function(){
  var config = {
    templateUrl: '/app/components/heading/heading.composition.html',
    controller: headingCtrl
  };

  function headingCtrl(){
    
  };

  angular
    .module('scrollApp')
    .component('heading', config);
})();