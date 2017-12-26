angular.module('alurapic').controller('PrincipalController', PrincipalController);

function PrincipalController($scope, ProdutoService) {

    $scope.produtos = [];

    ProdutoService.listarProdutos().then(function (value) {
        $scope.produtos = value.data;
    }).catch(function (error) {
        console.log(error);
    });


    $scope.remover = function (produto) {
        ProdutoService.remover(produto.id).then(function (value) {
            var indiceProduto = $scope.produtos.indexOf(produto);
            $scope.produtos.splice(indiceProduto, 1);
            console.log(value.data);
        }).catch(function (error) {
            console.log(error);
        });
    }
}