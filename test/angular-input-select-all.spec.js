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
      var templete = '<div><input placeholder="Please input some text..." ng-model="text" input-select-all /></div>';
      element = $compile(templete)($scope);
      document.body.appendChild(element[0]); //append element to dom
      $scope.$digest();
      isolateScope = element.isolateScope();
   }

   function changeInputValue(value) {
      getInput().val(value);
   }

   function getInput() {
      return element.find('input');
   }

   function getInputSelectionCount() {
      var input = getInput();
      return input[0].selectionEnd - input[0].selectionStart;
   }

   function isInputSelectAll() {
      var input = getInput();
      return input.val().length === getInputSelectionCount();
   }

   function inputSelect(start, end) {
      var input = getInput()[0];
      if (input.setSelectionRange) { /* WebKit */
         input.focus();
         input.setSelectionRange(start, end);
      } else if (input.createTextRange) { /* IE */
         var range = input.createTextRange();
         range.collapse(true);
         range.moveEnd('character', end);
         range.moveStart('character', start);
         range.select();
      } else if (input.selectionStart) {
         input.selectionStart = start;
         input.selectionEnd = end;
      }

   }



   describe('basic features', function() {
      beforeEach(function() {
         $scope.text = "Hello";
         compile();
      });

      it('trigger select all if it first click', function() {
         //Act
         getInput()[0].click();
         $timeout.flush();
         //Assert
         expect(isInputSelectAll()).toBe(true);
      });

      it('does not select all when click in selected region', function() {
         //Arrange
         var input = getInput();
         //Act
         input[0].click();
         $timeout.flush();
         input[0].click();
         inputSelect();
         $timeout.flush();
         //Assert
         expect(getInputSelectionCount()).toEqual(0);
      });

      it('trigger select all if not click in selected section', function() {
         //Arrange
         var input = getInput();
         var length = input.val().length;
         var end = length / 2;
         //Act
         inputSelect(0, end);
         input[0].click();
         $timeout.flush();
         inputSelect(length, length);
         input[0].click();
         $timeout.flush();
         //Assert
         expect(getInputSelectionCount()).toEqual(length);
      })
   });

});
