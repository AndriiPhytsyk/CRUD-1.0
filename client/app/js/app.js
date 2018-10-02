var myApp = angular.module("crud", ["ngRoute"]);

//var defaulrUrl = 'https://www.liquidtelecom.com/images/hai.png';

myApp.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/posts.html",
            controller: "postsCtrl"
        })
        .when("/createPost", {
            templateUrl: "templates/create.html",
            controller: "createCtrl"
        })
        .when("/editPost/:id", {
            templateUrl: "templates/edit.html",
            controller: "editCtrl"
        })
        .when("/deletePost/:id", {
            templateUrl: "templates/delete.html",
            controller: "deleteCtrl"
        })
        .when("/notFound", {
            templateUrl: "templates/notFound.html"
        })
        .otherwise("/notFound", {
            templateUrl: "templates/notFound.html"
        });
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
});

myApp.controller("postsCtrl", function ($scope, $http) {
    $http({method: 'GET', url: 'http://localhost:1337/list'}).then(function success(response) {
        $scope.articles = response.data;
    });

    $scope.delete = function (article) {
        if (confirm('Are you sure want to delete this post')) {
            $http.delete(`http://localhost:1337/list/${article.id}`).then(function (response) {
                let i = $scope.articles.findIndex(art => art.id === article.id);
                if (response)
                    $scope.articles.splice(i, 1);
            })
        }
    }
});

myApp.controller("editCtrl", function ($scope, $http, $route, $location, $routeParams) {
    $http.get(`http://localhost:1337/list/${$routeParams.id}`)
        .then(function (response) {
            //  console.log(response);
            let post = response.data.length ? response.data[0] : $location.path('/notFound');
            $scope.post = post;

        });
    $scope.edit = function (article, articleEditForm) {
        console.log(article);
        if (articleEditForm.$invalid) {
            let msg = document.querySelector("#msg");
            msg.innerText = "Please fill all fields"
        } else {
            $http.put(`http://localhost:1337/list/${$routeParams.id}`, article).then(function (data) {
                console.log('haha', data);
                $location.path("/")
            });
        }
    }
});



myApp.controller("createCtrl", function ($scope, $http, $location, Utils) {
    $scope.test = function () {
        Utils.isImage($scope.article.url).then(function (result) {
            $scope.result = result;
        });
    };

    $scope.save = function (article, articleForm) {
        console.log(articleForm);
        if (articleForm.$invalid) {
            let msg = document.querySelector("#msg");
            msg.innerText = "Please fill all fields"
        }

        if (!$scope.result) {
            let msg = document.querySelector("#msg");
            msg.innerText = "Invalid image url"
        }

        else {
            $http.post('http://localhost:1337/list', article).then(function (response) {
                console.log("qqq", response);
                $location.path("/")
            });
        }
    }

});

myApp.factory('Utils', function ($q) {
    return {
        isImage: function (src) {
            // ... above code for isImage function

            var deferred = $q.defer();

            var image = new Image();
            image.onerror = function () {
                deferred.resolve(false);
            };
            image.onload = function () {
                deferred.resolve(true);
            };
            image.src = src;

            return deferred.promise;
        }
    };
});
