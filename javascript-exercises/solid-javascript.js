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


// Double Click events

function Event(name) {
    this._handlers = [];
    this.name = name;
}
Event.prototype.addHandler = function(handler) {
    this._handlers.push(handler);
};
Event.prototype.removeHandler = function(handler) {
    for (var i = 0; i < handlers.length, i++) {
        if(this._handlers[i] == handler) {
            this._handlers.splice(i, 1);
            break;
        }
    }
};
Event.prototype.fire = function(eventArgs) {
    this._handlers.forEach(function(h) {
        h(eventArgs);
    });
};

var eventAggregator = (function() {
    var events = [];

    function getEvent(eventName) {
        return $.grep(events, function(event) {
            return event.name === eventName;
        })[0];
    }

    return {
        publish: function(eventName, handler) {
            var event = getEvent(eventname);

            if(!event) {
                event = new Event(eventName);
                events.push(event);
            }
            event.fire(eventArgs);
        },

        subscribe: function(eventname, handler) {
            var event = getEvent(eventName);

            if (!event) {
                event = new Event(eventName);
                events.push(event);
            }

            event.addHandler(handler);
        }
    };
})();

function Cart() {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
        eventAggregator.publish("itemAdded", item);
    };

    var cartView = function() {
        eventAggregator.subscribe("itemAdded", function(eventArgs) {
            var newItem = $('<li></li>')
            .html(eventArgs.getDescription())
            .attr('id-card', eventArgs.getId())
            .appendTo("#cart");
        });
    }();
};