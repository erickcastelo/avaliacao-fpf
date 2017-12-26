angular.module('alurapic').controller('FormularioController', FormularioController);

function FormularioController($scope, ProdutoService, $routeParams) {

    $scope.produto = {};
    $scope.categorias = [];

    $scope.mensagem = '';

    ProdutoService.listarCategorias().then(function (value) {
        $scope.categorias = value.data;
    }).catch(function (error) {
        console.log(error);
    });

    //se id for verdadeiro vamos para tela de editar
    var id = $routeParams.id;

    if (id) {
        ProdutoService.buscar(id).then(function (value) {
            $scope.produto = value.data;
            $scope.produto.categoria.id = value.data.categoria.id;

        }).catch(function (error) {
            console.log(error);
        });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            var categoria= null;
            // lógica para colocar no objeto produto o objeto categoria
            $scope.categorias.forEach(function (item) {
                if (item.id === $scope.produto.categoria.id){
                    categoria = item;
                }
            });

            $scope.produto.categoria = categoria;
            if ($scope.produto.id) {
                ProdutoService.editar($scope.produto).then(function (value) {
                    console.log(value.data);
                    $scope.mensagem = 'Produto editado com sucesso!!';
                }).catch(function (error) {
                    console.log(error);
                    $scope.mensagem = 'Erro ao tentar editar o produto!!';
                });
            } else {
                ProdutoService.cadastrar($scope.produto).then(function (value) {
                    console.log(value.data);
                    $scope.mensagem = 'Produto cadastrado com sucesso!!';
                }).catch(function (error) {
                    console.log(error);
                    $scope.mensagem = 'Erro ao tentar cadastrar o produto!!';
                });
            }

            $scope.produto = {};
        }
    }
}