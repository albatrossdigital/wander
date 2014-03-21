'use strict';

/* Directives */


angular.module('myApp.directives', [])

  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

  .directive('sirTrevorForm', [function() {

    return {
      restrict: 'A',
      template: '<div class="errors"></div><textarea class="sir-trevor" name="content"></textarea>',
      link: function(scope, elm, attrs) {
        $(function(){
          SirTrevor.DEBUG = true;
          SirTrevor.LANGUAGE = "en";

          SirTrevor.setBlockOptions("Text", {
            onBlockRender: function() {
              console.log("Text block rendered");
            }
          });

          window.editor = new SirTrevor.Editor({
            el: $('.sir-trevor'),
            blockTypes: [
              "Heading",
              "Text",
              "List",
              "Quote",
              "Image",
              "Video",
              "Tweet"
            ]
          });
        });
        console.log('hi');
      }
    };
  }]);
