var app = angular.module('superhero', []);

app.directive('superman', function (){
  return {
    restrict: "A",
    link: function(){
      alert("I am working!!")
    }
  }
})

app.directive('flash', function (){
  return {
    restrict: "A",
    link: function(){
      alert("I am working stronger!!")
    }
  }
})
