'use strict';

describe('angular-input-select-all directive', function() {
   var $scope, $compile, element, isolateScope;
   beforeEach(module('angular-input-select-all'));
   //Inject dependencies
   beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $scope = _$rootScope_;
   }));

   function compile() {
      var templete = '<div><input type="text" input-select-all /></div>';
      element = $compile(templete)($scope);
      $scope.$digest();
      isolateScope = element.isolateScope();
   }

   function changeInputValue(value) {
      getInput().val(value);
   }

   function clickInput() {
      var input = getInput();
      return input[0].click();
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
         compile();
         changeInputValue('This is Test.');
      });

      it('trigger select all if it first click', function() {
         //Act
         clickInput();

         //Assert
         expect(isInputSelectAll()).toBe(true);
      });
   });

});
