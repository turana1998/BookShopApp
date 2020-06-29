var app = angular.module('myApp', ['ngMaterial', 'ngMessages']);
app.run(($rootScope)=>{
    $rootScope.api_url = 'http://localhost:3000';
    localStorage.removeItem('JTOKEN');
})
.controller('MainCtrl', function($scope, $timeout,$http) {
  $scope.loginModel={};
  $scope.error={emailErr:null,passwordErr:null}

  $scope.login=()=>{
      let canlogin=true;
      if(!$scope.loginModel.username){
        $scope.error.emailErr='Email daxil edilməyib';
        canlogin=false;
      }
      if(!$scope.loginModel.password){
        $scope.error.passwordErr='Şifrə daxil edilməyib';
        canlogin=false;
      }
      if(canlogin){
          $http({
              url:$scope.api_url+'/auth/login',
              method:"POST",
              data:$scope.loginModel
          }).then(response=>{
              if(!response.data.error){
                  localStorage.setItem("JTOKEN",response.data.data);
                  window.location.href="/";
              }else{
                  alert(response.data.error);
              }
          },(err)=>{
                alert("Xəta baş verdi");
                console.log(err);
             }
          )
      }
  }

})
