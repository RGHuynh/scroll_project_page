(function(){
  angular
    .module('scrollApp')
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        })

    })
})();