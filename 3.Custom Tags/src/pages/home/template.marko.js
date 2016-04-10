function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      app_hello = __loadTag(require("../../components/app-hello/renderer"));

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html> <head> <meta charset=\"UTF-8\"> <title>Marko server side rendering demo</title> </head> <body> <h1>Marko Custom Tags Demo</h1> ");

    app_hello({
        name: "frank",
        messageCount: "30"
      }, out);

    out.w(" ");

    app_hello({
        messageCount: "1"
      }, out);

    out.w(" </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
