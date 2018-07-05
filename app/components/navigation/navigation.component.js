(function(){
  var config = {
    templateUrl: '/app/components/navigation/navigation.component.html',
    controller: navigationCtrl
  };

  function navigationCtrl(){
    var ctrl = this;

    ctrl.test = 'navigation success';
  };

  angular
    .module('scrollApp')
    .component('navigation', config)
})();