'use strict';

// Register 'loginController'
function LoginController($scope, $rootScope, $location, toastr){
  $scope.submit = function(){
    if ($scope.username == 'admin' && $scope.password == '123') {
      toastr.success('Dang nhap thanh cong!', 'Success!!!');
      $rootScope.loggedIn = true;
      $location.path('/users');
    }else{
      toastr.error('Sai tên tài khoản hoặc mật khẩu :p', 'Có gì đó sai sai');
    }
  }
}

// Register 'loginApp' component
angular.module('loginApp')
  .component('loginApp', {
    templateUrl: 'login/login.template.html',
    controller: LoginController
  });
