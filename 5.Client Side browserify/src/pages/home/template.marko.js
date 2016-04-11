function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html> <head> <meta charset=\"UTF-8\"> <title>Marko client side rendering demo</title> </head> <body> <script src=\"./js/browser.js\"></script> </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
