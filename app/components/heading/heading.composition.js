(function(){
  var config = {
    templateUrl: '/app/components/heading/heading.composition.html',
    controller: headingCtrl
  };

  function headingCtrl(headingService){
    var ctrl = this;
    ctrl.backgroundStyle = headingService.backgroundStyle;
    ctrl.slides = ['picture2.jpg', 'picture1.jpg']
  };

  angular
    .module('scrollApp')
    .component('heading', config);
})();