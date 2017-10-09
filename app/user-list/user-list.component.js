'use strict';

// Define 'UserListController'
function  UserListController($scope, $http) {
  var self = this;
  self.orderProp = 'id';

  $http.get('user-list/users.json').then(
    function(response){
      self.users = response.data;
    }
  )
}

// Define 'userList' component
angular.module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: UserListController
  });
