/*!
 * ngInputSelectAll v0.1.0
 * https://weihanchen.github.io/angular-input-select-all/example
 *
 * Copyright (c) 2013-2017 weihanchen
 * License: MIT
 *
 * Generated at 2017-02-17 20:08:52 +0800
 */
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
            console.log($element[0].selectionEnd);
            if (!isInputSelected) {
               $element.select();
            }
         });
      }
   }
})();
