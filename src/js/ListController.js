
function ListController($http, $scope) {
    
    $scope.contacts = ["Test", "1234656", 123456];
    
    $http.get("http://localhost:8080/contacts").then(function(resposta){
        $scope.contacts = resposta.data;
    });
    
    $scope.click = function (item) {
        $scope.selected = item;
    };
    
    $scope.add = function (item) {
        var request = {
            name : item
        };
        $http.post("http://localhost:8080/add", request).then(function(resposta){
            $scope.contacts = resposta.data;
        });
    };
    
}

app.controller("ListController", ListController);