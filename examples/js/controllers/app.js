'use strict';
(function() {
   angular.module('app', ['angular-input-select-all'])
      .controller('appController', [appController])

   function appController() {
      var self = this;
      self.text= "This is test";
   }
})()
