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
  var self_closing = false;
  for (var i = 0; i < h._self_closing.length; i++)
    if (this._self_closing[i] == name )
      self_closing = true;
  if (self_closing) {
    html = '<' + name + HATS._obj_to_attrs(attributes) + ' />';
  }
  else {
    html = '<' + name + HATS._obj_to_attrs(attributes) + '>' +
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

HATS._f = function(name) {
  return function(attributes, content) {
    return this.tag(name, attributes, content);
  }
}

HATS.prototype.a = HATS._f('a');
HATS.prototype.abbr = HATS._f('abbr');
HATS.prototype.address = HATS._f('address');
HATS.prototype.area = HATS._f('area');
HATS.prototype.article = HATS._f('article');
HATS.prototype.aside = HATS._f('aside');
HATS.prototype.audio = HATS._f('audio');
HATS.prototype.b = HATS._f('b');
HATS.prototype.base = HATS._f('base');
HATS.prototype.bdi = HATS._f('bdi');
HATS.prototype.bdo = HATS._f('bdo');
HATS.prototype.blockquote = HATS._f('blockquote');
HATS.prototype.body = HATS._f('body');
HATS.prototype.br = HATS._f('br');
HATS.prototype.button = HATS._f('button');
HATS.prototype.canvas = HATS._f('canvas');
HATS.prototype.caption = HATS._f('caption');
HATS.prototype.cite = HATS._f('cite');
HATS.prototype.code = HATS._f('code');
HATS.prototype.col = HATS._f('col');
HATS.prototype.colgroup = HATS._f('colgroup');
HATS.prototype.content = HATS._f('content');
HATS.prototype.data = HATS._f('data');
HATS.prototype.datalist = HATS._f('datalist');
HATS.prototype.dd = HATS._f('dd');
HATS.prototype.decorator = HATS._f('decorator');
HATS.prototype.del = HATS._f('del');
HATS.prototype.details = HATS._f('details');
HATS.prototype.dfn = HATS._f('dfn');
HATS.prototype.dialog = HATS._f('dialog');
HATS.prototype.div = HATS._f('div');
HATS.prototype.dl = HATS._f('dl');
HATS.prototype.dt = HATS._f('dt');
HATS.prototype.element = HATS._f('element');
HATS.prototype.em = HATS._f('em');
HATS.prototype.embed = HATS._f('embed');
HATS.prototype.fieldset = HATS._f('fieldset');
HATS.prototype.figcaption = HATS._f('figcaption');
HATS.prototype.figure = HATS._f('figure');
HATS.prototype.footer = HATS._f('footer');
HATS.prototype.form = HATS._f('form');
HATS.prototype.h1 = HATS._f('h1');
HATS.prototype.h2 = HATS._f('h2');
HATS.prototype.h3 = HATS._f('h3');
HATS.prototype.h4 = HATS._f('h4');
HATS.prototype.h5 = HATS._f('h5');
HATS.prototype.h6 = HATS._f('h6');
HATS.prototype.head = HATS._f('head');
HATS.prototype.header = HATS._f('header');
HATS.prototype.hr = HATS._f('hr');
HATS.prototype.html = HATS._f('html');
HATS.prototype.i = HATS._f('i');
HATS.prototype.iframe = HATS._f('iframe');
HATS.prototype.img = HATS._f('img');
HATS.prototype.input = HATS._f('input');
HATS.prototype.ins = HATS._f('ins');
HATS.prototype.kbd = HATS._f('kbd');
HATS.prototype.keygen = HATS._f('keygen');
HATS.prototype.label = HATS._f('label');
HATS.prototype.legend = HATS._f('legend');
HATS.prototype.li = HATS._f('li');
HATS.prototype.link = HATS._f('link');
HATS.prototype.main = HATS._f('main');
HATS.prototype.map = HATS._f('map');
HATS.prototype.mark = HATS._f('mark');
HATS.prototype.menu = HATS._f('menu');
HATS.prototype.menuitem = HATS._f('menuitem');
HATS.prototype.meta = HATS._f('meta');
HATS.prototype.meter = HATS._f('meter');
HATS.prototype.nav = HATS._f('nav');
HATS.prototype.noscript = HATS._f('noscript');
HATS.prototype.object = HATS._f('object');
HATS.prototype.ol = HATS._f('ol');
HATS.prototype.optgroup = HATS._f('optgroup');
HATS.prototype.option = HATS._f('option');
HATS.prototype.output = HATS._f('output');
HATS.prototype.p = HATS._f('p');
HATS.prototype.param = HATS._f('param');
HATS.prototype.pre = HATS._f('pre');
HATS.prototype.progress = HATS._f('progress');
HATS.prototype.q = HATS._f('q');
HATS.prototype.rp = HATS._f('rp');
HATS.prototype.rt = HATS._f('rt');
HATS.prototype.ruby = HATS._f('ruby');
HATS.prototype.s = HATS._f('s');
HATS.prototype.samp = HATS._f('samp');
HATS.prototype.script = HATS._f('script');
HATS.prototype.section = HATS._f('section');
HATS.prototype.select = HATS._f('select');
HATS.prototype.shadow = HATS._f('shadow');
HATS.prototype.small = HATS._f('small');
HATS.prototype.source = HATS._f('source');
HATS.prototype.span = HATS._f('span');
HATS.prototype.strong = HATS._f('strong');
HATS.prototype.style = HATS._f('style');
HATS.prototype.sub = HATS._f('sub');
HATS.prototype.summary = HATS._f('summary');
HATS.prototype.sup = HATS._f('sup');
HATS.prototype.table = HATS._f('table');
HATS.prototype.tbody = HATS._f('tbody');
HATS.prototype.td = HATS._f('td');
HATS.prototype.template = HATS._f('template');
HATS.prototype.textarea = HATS._f('textarea');
HATS.prototype.tfoot = HATS._f('tfoot');
HATS.prototype.th = HATS._f('th');
HATS.prototype.thead = HATS._f('thead');
HATS.prototype.time = HATS._f('time');
HATS.prototype.title = HATS._f('title');
HATS.prototype.tr = HATS._f('tr');
HATS.prototype.track = HATS._f('track');
HATS.prototype.u = HATS._f('u');
HATS.prototype.ul = HATS._f('ul');
HATS.prototype.var = HATS._f('var');
HATS.prototype.video = HATS._f('video');
HATS.prototype.wbr = HATS._f('wbr');

HATS.prototype.text = function(text) {
  if (text) this._html += text;
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
  if (str) s += str;
  return s;
}

HATS._obj_to_attrs = function(obj) {
  var s = '';
  for (var attr in obj)
    s += ' ' + attr + '="' + obj[attr] + '"';
  return s;
}
