app.controller("myCtrl", function($scope, $http){

    var onMovieComplete = function(response) {
        $scope.movie = response.data;
        console.log($scope.movie);
        console.log($scope.movie.Response)
        if($scope.movie.Response == "False") {
            onError();
        } else {
            onMovies(response);
        }
    }
    $scope.search = function(movie){
        console.log(`searching for ${movie}`)
    $http.get("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
        .then(onMovieComplete)
    }

    function onError(reason) {
        $scope.error = "No Movie by that name found";
        $scope.movie = "try again";
    }

    function onMovies(response) {
        $scope.movies = response.data;
        console.log($scope.movies)
        $scope.movie = "Look for another?";
        $scope.rated = response.data.Rated;
        $scope.title = response.data.Title;
        $scope.poster = response.data.Poster;
        $scope.actors = response.data.Actors;

        $scope.mainActors = $scope.actors.split(",")
        console.log($scope.mainActors);
        console.log($scope.m$sainActors[0])
        
        
    }

})