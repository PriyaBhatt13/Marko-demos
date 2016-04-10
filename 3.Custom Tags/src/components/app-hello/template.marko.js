function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"app-hello\"> Hello " +
      escapeXml(data.name) +
      "! You have " +
      escapeXml(data.messageCount) +
      " message(s). </div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
