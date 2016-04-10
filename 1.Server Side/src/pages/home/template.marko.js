function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html> <head> <meta charset=\"UTF-8\"> <title>Marko server side rendering demo</title> </head> <body> <h1>Marko Server side rendering demo</h1> Hello " +
      escapeXml(data.name) +
      "! ");

    if (notEmpty(data.colors)) {
      out.w("<ul> ");

      forEach(data.colors, function(color) {
        out.w("<li> " +
          escapeXml(color) +
          " </li>");
      });

      out.w(" </ul>");
    } else {
      out.w("<div> There are no colors! </div>");
    }

    out.w(" </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
