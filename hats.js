HATS = function(chaining) {
  this._html = '';
  this._chaining = chaining;
  this._self_closing = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img',
    'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track',
    'wbr'];
}

HATS.prototype.tag = function(name, attributes, content) {
  if (typeof attributes != 'object' || attributes instanceof HATS) {
    var content = attributes;
    attributes = {};
  }

  var html;
  if (!!this._self_closing[name]) {
    html = '<' + name + this._obj_to_attrs(attributes) + ' />';
  }
  else {
    html = '<' + name + this._obj_to_attrs(attributes) + '>' +
              (content ? content : '') +
           '</' + name + '>';
  }

  if (this._chaining) {
    this._html += html;
    return this; // Alows chaining. Custom toString() finishes chain.
  }
  else {
    return html;
  }
}

HATS.prototype.a = function(a, c) { return this.tag('a', a, c) }
HATS.prototype.abbr = function(a, c) { return this.tag('abbr', a, c) }
HATS.prototype.address = function(a, c) { return this.tag('address', a, c) }
HATS.prototype.area = function(a, c) { return this.tag('area', a, c) }
HATS.prototype.article = function(a, c) { return this.tag('article', a, c) }
HATS.prototype.aside = function(a, c) { return this.tag('aside', a, c) }
HATS.prototype.audio = function(a, c) { return this.tag('audio', a, c) }
HATS.prototype.b = function(a, c) { return this.tag('b', a, c) }
HATS.prototype.base = function(a, c) { return this.tag('base', a, c) }
HATS.prototype.bdi = function(a, c) { return this.tag('bdi', a, c) }
HATS.prototype.bdo = function(a, c) { return this.tag('bdo', a, c) }
HATS.prototype.blockquote = function(a, c) { return this.tag('blockquote', a, c) }
HATS.prototype.body = function(a, c) { return this.tag('body', a, c) }
HATS.prototype.br = function(a, c) { return this.tag('br', a, c) }
HATS.prototype.button = function(a, c) { return this.tag('button', a, c) }
HATS.prototype.canvas = function(a, c) { return this.tag('canvas', a, c) }
HATS.prototype.caption = function(a, c) { return this.tag('caption', a, c) }
HATS.prototype.cite = function(a, c) { return this.tag('cite', a, c) }
HATS.prototype.code = function(a, c) { return this.tag('code', a, c) }
HATS.prototype.col = function(a, c) { return this.tag('col', a, c) }
HATS.prototype.colgroup = function(a, c) { return this.tag('colgroup', a, c) }
HATS.prototype.content = function(a, c) { return this.tag('content', a, c) }
HATS.prototype.data = function(a, c) { return this.tag('data', a, c) }
HATS.prototype.datalist = function(a, c) { return this.tag('datalist', a, c) }
HATS.prototype.dd = function(a, c) { return this.tag('dd', a, c) }
HATS.prototype.decorator = function(a, c) { return this.tag('decorator', a, c) }
HATS.prototype.del = function(a, c) { return this.tag('del', a, c) }
HATS.prototype.details = function(a, c) { return this.tag('details', a, c) }
HATS.prototype.dfn = function(a, c) { return this.tag('dfn', a, c) }
HATS.prototype.dialog = function(a, c) { return this.tag('dialog', a, c) }
HATS.prototype.div = function(a, c) { return this.tag('div', a, c) }
HATS.prototype.dl = function(a, c) { return this.tag('dl', a, c) }
HATS.prototype.dt = function(a, c) { return this.tag('dt', a, c) }
HATS.prototype.element = function(a, c) { return this.tag('element', a, c) }
HATS.prototype.em = function(a, c) { return this.tag('em', a, c) }
HATS.prototype.embed = function(a, c) { return this.tag('embed', a, c) }
HATS.prototype.fieldset = function(a, c) { return this.tag('fieldset', a, c) }
HATS.prototype.figcaption = function(a, c) { return this.tag('figcaption', a, c) }
HATS.prototype.figure = function(a, c) { return this.tag('figure', a, c) }
HATS.prototype.footer = function(a, c) { return this.tag('footer', a, c) }
HATS.prototype.form = function(a, c) { return this.tag('form', a, c) }
HATS.prototype.h1 = function(a, c) { return this.tag('h1', a, c) }
HATS.prototype.h2 = function(a, c) { return this.tag('h2', a, c) }
HATS.prototype.h3 = function(a, c) { return this.tag('h3', a, c) }
HATS.prototype.h4 = function(a, c) { return this.tag('h4', a, c) }
HATS.prototype.h5 = function(a, c) { return this.tag('h5', a, c) }
HATS.prototype.h6 = function(a, c) { return this.tag('h6', a, c) }
HATS.prototype.head = function(a, c) { return this.tag('head', a, c) }
HATS.prototype.header = function(a, c) { return this.tag('header', a, c) }
HATS.prototype.hr = function(a, c) { return this.tag('hr', a, c) }
HATS.prototype.html = function(a, c) { return this.tag('html', a, c) }
HATS.prototype.i = function(a, c) { return this.tag('i', a, c) }
HATS.prototype.iframe = function(a, c) { return this.tag('iframe', a, c) }
HATS.prototype.img = function(a, c) { return this.tag('img', a, c) }
HATS.prototype.input = function(a, c) { return this.tag('input', a, c) }
HATS.prototype.ins = function(a, c) { return this.tag('ins', a, c) }
HATS.prototype.kbd = function(a, c) { return this.tag('kbd', a, c) }
HATS.prototype.keygen = function(a, c) { return this.tag('keygen', a, c) }
HATS.prototype.label = function(a, c) { return this.tag('label', a, c) }
HATS.prototype.legend = function(a, c) { return this.tag('legend', a, c) }
HATS.prototype.li = function(a, c) { return this.tag('li', a, c) }
HATS.prototype.link = function(a, c) { return this.tag('link', a, c) }
HATS.prototype.main = function(a, c) { return this.tag('main', a, c) }
HATS.prototype.map = function(a, c) { return this.tag('map', a, c) }
HATS.prototype.mark = function(a, c) { return this.tag('mark', a, c) }
HATS.prototype.menu = function(a, c) { return this.tag('menu', a, c) }
HATS.prototype.menuitem = function(a, c) { return this.tag('menuitem', a, c) }
HATS.prototype.meta = function(a, c) { return this.tag('meta', a, c) }
HATS.prototype.meter = function(a, c) { return this.tag('meter', a, c) }
HATS.prototype.nav = function(a, c) { return this.tag('nav', a, c) }
HATS.prototype.noscript = function(a, c) { return this.tag('noscript', a, c) }
HATS.prototype.object = function(a, c) { return this.tag('object', a, c) }
HATS.prototype.ol = function(a, c) { return this.tag('ol', a, c) }
HATS.prototype.optgroup = function(a, c) { return this.tag('optgroup', a, c) }
HATS.prototype.option = function(a, c) { return this.tag('option', a, c) }
HATS.prototype.output = function(a, c) { return this.tag('output', a, c) }
HATS.prototype.p = function(a, c) { return this.tag('p', a, c) }
HATS.prototype.param = function(a, c) { return this.tag('param', a, c) }
HATS.prototype.pre = function(a, c) { return this.tag('pre', a, c) }
HATS.prototype.progress = function(a, c) { return this.tag('progress', a, c) }
HATS.prototype.q = function(a, c) { return this.tag('q', a, c) }
HATS.prototype.rp = function(a, c) { return this.tag('rp', a, c) }
HATS.prototype.rt = function(a, c) { return this.tag('rt', a, c) }
HATS.prototype.ruby = function(a, c) { return this.tag('ruby', a, c) }
HATS.prototype.s = function(a, c) { return this.tag('s', a, c) }
HATS.prototype.samp = function(a, c) { return this.tag('samp', a, c) }
HATS.prototype.script = function(a, c) { return this.tag('script', a, c) }
HATS.prototype.section = function(a, c) { return this.tag('section', a, c) }
HATS.prototype.select = function(a, c) { return this.tag('select', a, c) }
HATS.prototype.shadow = function(a, c) { return this.tag('shadow', a, c) }
HATS.prototype.small = function(a, c) { return this.tag('small', a, c) }
HATS.prototype.source = function(a, c) { return this.tag('source', a, c) }
HATS.prototype.span = function(a, c) { return this.tag('span', a, c) }
HATS.prototype.strong = function(a, c) { return this.tag('strong', a, c) }
HATS.prototype.style = function(a, c) { return this.tag('style', a, c) }
HATS.prototype.sub = function(a, c) { return this.tag('sub', a, c) }
HATS.prototype.summary = function(a, c) { return this.tag('summary', a, c) }
HATS.prototype.sup = function(a, c) { return this.tag('sup', a, c) }
HATS.prototype.table = function(a, c) { return this.tag('table', a, c) }
HATS.prototype.tbody = function(a, c) { return this.tag('tbody', a, c) }
HATS.prototype.td = function(a, c) { return this.tag('td', a, c) }
HATS.prototype.template = function(a, c) { return this.tag('template', a, c) }
HATS.prototype.textarea = function(a, c) { return this.tag('textarea', a, c) }
HATS.prototype.tfoot = function(a, c) { return this.tag('tfoot', a, c) }
HATS.prototype.th = function(a, c) { return this.tag('th', a, c) }
HATS.prototype.thead = function(a, c) { return this.tag('thead', a, c) }
HATS.prototype.time = function(a, c) { return this.tag('time', a, c) }
HATS.prototype.title = function(a, c) { return this.tag('title', a, c) }
HATS.prototype.tr = function(a, c) { return this.tag('tr', a, c) }
HATS.prototype.track = function(a, c) { return this.tag('track', a, c) }
HATS.prototype.u = function(a, c) { return this.tag('u', a, c) }
HATS.prototype.ul = function(a, c) { return this.tag('ul', a, c) }
HATS.prototype.var = function(a, c) { return this.tag('var', a, c) }
HATS.prototype.video = function(a, c) { return this.tag('video', a, c) }
HATS.prototype.wbr = function(a, c) { return this.tag('wbr', a, c) }

HATS.prototype.text = function(text) {
  if (text) {
    this._html += text;
  }
  return this;
}

HATS.prototype.t = function(t) { return this.text(t) }

HATS.prototype.toString = function() {
  var h = this._html;
  this._html = ''; // Chain ended, reset HATS builder
  return h;
}

HATS.prototype.s = function(str) {
  var s = this.toString();
  if (str) {
    s += str;
  }
  return s;
}

HATS.prototype._obj_to_attrs = function(obj) {
  var s = '';
  for (var attr in obj) {
    s += ' ' + attr + '="' + obj[attr] + '"';
  }
  return s;
}
