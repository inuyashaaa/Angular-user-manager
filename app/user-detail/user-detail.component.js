'use strict';

// Define 'UserDetailController'
function UserDetailController($http, $routeParams){
  var self = this;
  self.userId = $routeParams.userId;
  console.log(self.userId);
  $http.get('user-list/users.json').then(
    function(response){
      self.users = response.data;
    }
  );
};
// Define 'userDetail' component
angular.module('userDetail')
  .component('userDetail', {
    templateUrl: 'user-detail/user-detail.template.html',
    controller: UserDetailController
  });
