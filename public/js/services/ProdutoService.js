angular.module('alurapic')
    .service('ProdutoService', function ($http, $httpParamSerializer) {
        var url = 'http://localhost:8080/api/';

        return {
            listarProdutos: function () {
                return $http({
                    method : 'get',
                    url : url + 'produtos/',
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(event){
                    return event;
                })
            },

            listarCategorias: function () {
                return $http({
                    method : 'get',
                    url : url + 'categorias/',
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
                    url : url + 'produto/',
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
                    url : url + 'produto/' + id,
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
                    url : url + 'produto/' + id,
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
                    url : url + 'produto',
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
