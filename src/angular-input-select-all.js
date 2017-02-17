/**
 * @ngdoc directive
 * @name inputSelectAll
 * @module angular-input-select-all
 *
 * @description
 * Simple input select all, prevent interrupted user's operation
 */
(function() {
   'use strict';
   angular.module('angular-input-select-all', [])
      .directive('inputSelectAll', [inputSelectAll]);

   function inputSelectAll() {
      return {
         restrict: 'A',
         controller: ['$element', selectAllController],
         controllerAs: 'selectAllCtrl',
         bindToController: true
      };

      function selectAllController($element) {
         $element.on('click', function() {
            var isInputSelected = $element[0].selectionEnd - $element[0].selectionStart != 0;
            if (!isInputSelected) {
               $element[0].select();
               console.log($element[0].selectionEnd)
               console.log($element[0].selectionStart)
            }
         });
      }
   }
})();
