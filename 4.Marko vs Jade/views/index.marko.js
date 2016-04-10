function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      async_fragment = __loadTag(require("marko/taglibs/async/async-fragment-tag")),
      forEach = __helpers.f;

  return function render(data, out) {
    out.w("<html> <head> <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" integrity=\"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7\" crossorigin=\"anonymous\"> </head> <body> <h1> " +
      escapeXml(data.name) +
      " </h1> ");

    async_fragment({
        dataProvider: data.composed,
        clientReorder: "true",
        _name: "data.composed",
        renderBody: function renderBody(out, promise) {
          out.w(" ");

          forEach(promise.items, function(item) {
            out.w("<ul> <li>" +
              escapeXml(item) +
              "</li> </ul>");
          });

          out.w(" ");
        }
      }, out);

    out.w(" </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
