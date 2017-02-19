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
         controller: ['$element', '$timeout', selectAllController],
         controllerAs: 'selectAllCtrl',
         bindToController: true
      };

      function selectAllController($element, $timeout) {
         $element.on('click', function() {
            var isInputSelected = $element[0].selectionEnd != $element[0].selectionStart;
            if (!isInputSelected) {
               $element[0].select();
            }

           $timeout(function() {
           }, 100)

         });
      }
   }
})();
