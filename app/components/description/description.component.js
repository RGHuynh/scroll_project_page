(function(){
  var config = {
    templateUrl: '/app/components/description/description.component.html',
    controller: descriptionCtrl
  };

  function descriptionCtrl(){

  };

  angular
    .module('scrollApp')
    .component('description', config);
})();