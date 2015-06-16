


var Sammy = new $.sammy(function () {

    this.element_selector = '#Contenedor';

    this.get('#/productos', function (context) {

        context.$element().load("Views/Productos/productos.html", function () {
            //Ready de Home
            ready();
        });

    });

    this.get('#/productos/:nom/:desc/:prec/:imgName', function (context) {

        var param={ 
            nom : this.params['nom'],
            desc : this.params['desc'],
            prec : this.params['prec'],
            imgName : this.params['imgName']
        }
        context.$element().load("Views/Productos/productos.html", function () {
            //Ready de Home
            ready(param);
        });

    });


    this.get('#/ejemplo2', function (context) {

        context.$element().load("Views/ejemplo2.html", function () {
            //Ready de Home
            ready();
        });

    });


    this.get('#/ejemplo3', function (context) {

        context.$element().load("Views/ejemplo3.html", function () {
            //Ready de Home
            ready();
        });

    });



});

$(function () {
    Sammy.run('#/prouctos');
});