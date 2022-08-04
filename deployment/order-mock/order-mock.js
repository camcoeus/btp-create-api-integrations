const randomWords = require("random-words");

module.exports = {
    main: function (event, context) {
        return {
            OrderNo: (event.data.orderNo || 1).toString(),
            createdBy: "Internal Inc.",
            buyer: "The Buyer Co.",
            currency: { code: "EUR" },
            Items: [
                {
                    product_ID: getRandomInt(1000, 1000000).toString(),
                    quantity: getRandomInt(1, 10),
                    title: randomWords(), price: getRandomInt(10, 20),
                },
            ],
        };
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); return Math.floor(Math.random() * (max - min) + min);
}