this["Templates"] = this["Templates"] || {};
this["Templates"]["template.html"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<article>");t.b("\n" + i);t.b("  <h1>");t.b(t.v(t.f("title",c,p,0)));t.b("</h1>");t.b("\n" + i);t.b("  <p>");t.b(t.v(t.f("content",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("</article>");return t.fl(); },partials: {}, subs: {  }});

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = this["Templates"];
}