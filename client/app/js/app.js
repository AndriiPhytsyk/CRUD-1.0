var myApp = angular.module("crud", ["ngRoute"]);

myApp.config(function ($routeProvider) {
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
            $scope.articles.splice( i, 1);
        })
        }
    }
});

myApp.controller("editCtrl", function ($scope, $http, $routeParams, $location) {
    $http.get(`http://localhost:1337/list/${$routeParams.id}`)
        .then(function (response) {
            $scope.post = response.data[0];
        });
    $scope.edit = function (article, articleForm) {

        if(articleForm.$invalid) {
            let msg = document.querySelector("#msg");
            console.log(msg);
            msg.innerText = "Please fill all fields"
        } else {
            $http.put(`http://localhost:1337/list/${article.id}`, article).then(function (data) {
                console.log(data)
                $location.path("/")
            });
        }
    }
});

myApp.controller("createCtrl", function ($scope, $http, $location) {
    $scope.save = function (article, articleForm) {
        console.log(articleForm);
        if(articleForm.$invalid) {
            let msg = document.querySelector("#msg");
            msg.innerText = "Please fill all fields"
        } else {
        $http.post('http://localhost:1337/list', article).then(function (response) {
            console.log(response)
            $location.path("/")
            });
    }
    }
});





