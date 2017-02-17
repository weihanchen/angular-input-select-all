'use strict';

describe('angular-input-select-all directive', function() {
   var $scope, $compile, $timeout, element, isolateScope;
   beforeEach(module('angular-input-select-all'));
   //Inject dependencies
   beforeEach(inject(function(_$compile_, _$rootScope_, _$document_, _$timeout_, _$window_) {
      $compile = _$compile_;
      $scope = _$rootScope_;
      $timeout = _$timeout_;
   }));

   function compile() {
      var templete = '<div><input type="text" placeholder="Please input some text..." ng-model="text" input-select-all /></div>';
      element = $compile(templete)($scope);
      $scope.$digest();
      isolateScope = element.isolateScope();
   }

   function changeInputValue(value) {
      getInput().val(value);
   }

   function clickInput() {
      var input = getInput();
      input[0].selectionStart = 1;
      input[0].focus();
      return input[0].select();
   }

   function getInput() {
      return element.find('input');
   }

   function isInputSelectAll() {
      var input = getInput();
      return input.val().length === (input[0].selectionEnd - input[0].selectionStart);
   }


   describe('basic features', function() {
      beforeEach(function() {
         $scope.text = "Hello";
         compile();
      });

      it('trigger select all if it first click', function() {
          //Arrange
          var input = element.find('input');
          input.triggerHandler('click');


         //Act
         $scope.$digest();
         $timeout.flush(1000);
         //Assert
         expect(isInputSelectAll()).toBe(true);
      });
   });

});
