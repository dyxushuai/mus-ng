angular.module("musNg").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div layout=\"vertical\" layout-fill=\"\"><header ng-include=\"\'components/navbar/navbar.html\'\"></header><md-content><section class=\"jumbotron\"><h1>\'Allo, \'Allo!</h1><p class=\"lead\"><img src=\"assets/images/yeoman.png\" alt=\"I\'m Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p><a class=\"btn\" ng-href=\"#\">Splendid!</a></p></section><div class=\"techs\" layout-align=\"center\"><md-card ng-repeat=\"awesomeThing in awesomeThings | orderBy:\'rank\'\"><div class=\"thumbnail\"><img class=\"pull-right\" ng-src=\"assets/images/{{awesomeThing.logo}}\" alt=\"{{awesomeThing.title}}\"><div class=\"caption\"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href=\"{{awesomeThing.url}}\">{{awesomeThing.url}}</a></p></div></div></md-card></div></md-content><footer><md-toolbar layout=\"row\" layout-align=\"center center\"><p>With ♥ from <a href=\"https://twitter.com/Swiip\">@Swiip</a></p></md-toolbar></footer></div>");
$templateCache.put("components/navbar/navbar.html","<md-toolbar layout=\"row\" layout-align=\"center center\" ng-controller=\"NavbarCtrl\"><md-button href=\"https://github.com/Swiip/generator-gulp-angular\">Gulp Angular</md-button><section flex=\"\" layout=\"row\" layout-align=\"left center\"><md-button href=\"#\" class=\"md-raised\">Home</md-button><md-button href=\"#\" class=\"md-raised\">About</md-button><md-button href=\"#\" class=\"md-raised\">Contact</md-button></section><md-button href=\"#\">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>");}]);