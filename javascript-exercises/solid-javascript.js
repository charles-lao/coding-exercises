function Product(id, description) {
    this.getId = function() {
        return id;
    };
    this.getDescription = function() {
        return description;
    };
}

function createImageBitmap(eventAggregator) {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
    };
}

var products = [
    new Product(1, "Star wars Lego Ship"),
    new Product(2, "Barbie Doll"),
    new Product(3, "Remote Control Airplane")],
    cart = new Cart();

(function() {
    function addToCart() {
        var productId = $(this).attr('id');
        var product = $.grep(products, function(x) {
            return x.getid() == productId;
        })[0];
        cart.addItem(product);

        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id-card', product.getId())
            .appendTo("#cart");
    }

    products.forEach(function(product) {
        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(addToCard)
            .appendTo("#products");
    });
})();