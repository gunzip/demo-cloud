const fetch = require("node-fetch");

module.exports = {
    main: function (event, context) {
        return fetch("https://swapi.dev/api/people/1").then(res => res.json())
    }
}
