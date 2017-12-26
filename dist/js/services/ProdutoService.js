angular.module('alurapic')
    .service('ProdutoService', function ($http, $httpParamSerializer) {

        return {
            listarProdutos: function () {
                return $http({
                    method : 'get',
                    url : 'http://localhost:8080/api/produtos',
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(event){
                    return event;
                })
            },

            listarCategorias: function () {
                return $http({
                    method : 'get',
                    url : 'http://localhost:8080/api/categorias',
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(event){
                    return event;
                })
            },

            cadastrar: function (produto) {
                var json = {
                    produto: produto
                };

                return $http({
                    method : 'post',
                    url : 'http://localhost:8080/api/cadastrar',
                    crossDomain: true,
                    data: JSON.stringify(produto),
                    dataType: 'application/json',
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }).then(function(event){
                    return event;
                })
            },

            remover: function (id) {
                return $http({
                    method : 'delete',
                    url : 'http://localhost:8080/api/remover/' + id,
                    crossDomain: true,
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }).then(function(event){
                    return event;
                })
            },

            buscar: function (id) {
                return $http({
                    method : 'get',
                    url : 'http://localhost:8080/api/buscar/' + id,
                    crossDomain: true,
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }).then(function(event){
                    return event;
                })
            },

            editar: function (produto) {
                var json = {
                    produto: produto
                };

                return $http({
                    method : 'put',
                    url : 'http://localhost:8080/api/editar',
                    crossDomain: true,
                    data: JSON.stringify(produto),
                    dataType: 'application/json',
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }).then(function(event){
                    return event;
                })
            }
        }
    });