# HTML Autoclosing Tag to String 🎩 HATS

## A simple no dependencies JS library for building HTML strings.

I found myself occasionally writing HTML in little JavaScript strings and
that felt wrong. All the string concatenation (or interpolation if you're
using CoffeeScript) was a mess. So I wrote this little library to let you
write HTML tags in JavaScript, pass attributes in as an object, use a variable
for the content, etc.

### Examples

_Note: the `h` variable and `H()` function in examples below have slightly 
different purposes and are user configurable. More on that later._

Comparing HATS and the generated HTML string.

```
h.span({id: 'awesome_hat'}, 'Hats are cool.')

'<div id="awesome_hat">Hats are cool.</div>'
```

And of course you can then add the string to your page:

```
$('body').html(h.div({id: 'awesome_hat'}))
```

A more complex example, this time with a CoffeeScript version too:

```
h.div({id: 'main_menu', class: 'menu'},
  H().div({class: 'arrow'}).div({class: 'tooltip'})
     .div({ class: 'menu_inner' },
       H().button(h.strong('Important') + 'Settings)
          .button('About')
          .button('Help')
          .s('Main Menu.')
     )
)

h.div {id: 'main_menu', class: 'menu'},
  H().div({class: 'arrow'}).div({class: 'tooltip'})
     .div { class: 'menu_inner' },
       H().button("#{h.strong('Important')} Settings")
          .button('About')
          .button('Help')
          .s('Main Menu.')

'<div id="main_menu" class="menu">
  <div class="arrow"></div><div class="tooltip"></div>
  <div id="menu_inner">
    <button><strong>Important</strong> Settings</button>
    <button>About</button>
    <button>Help</button>
    Main Menu.
  </div>
</div>'
```

### Basic Usage

Over 100 HTML tags have corresponding HATS methods, so go wild:

```
h.div('What')   // '<div>What</div>'
h.span('Where') // '<span>Where</span>'
h.p('When')     // '<p>When</p>'
h.strong('Why') // '<strong>Why</strong>'

//etc
```

You can still use a tag that isn't supported (because it's deprecated or 
bleeding-edge):

```
h.tag('blink', {id: 'evil'}, 'Hello, World!')

'<blink id="evil">Hello, World!</blink>'
```

You can use variables in your attributes or content:

```
var attrs = {'data-foo': 'bar'}
var content = 'Mary had a littl lamb.'
h.p(attrs, content)
```

You can supply an attributes object, and/or a content string, or neither:

```
h.div({id: 'bla'}, 'with attributes') // '<div id="bla">with attributes</div>'
h.div('without attributes')           // '<div>without attributes</div>'
h.div({id: 'only_attributes'})        // '<div id="only_attributes"></div>'
h.div()                               // '<div></div>'
```

Void elements don't have a closing tag or content:

```
h.input({type: 'text', value: 'Name'}) // '<input type="text" value="Name" />'
h.hr({class: 'divider'})               // '<hr class="divider" />'
h.br()                                 // '<br />'
```

The return value is just a string:

```
var food = 'I ' + h.strong('really') + ' like pasta!'
```

### Chained Usage

So, there are 2 modes to HATS, chained and normal. You've seen normal mode in
the section above, that's the `h` variable. It returns a standard string of
the tag. There is also chained mode where each tag function returns a HATS
object containing the HTML string built up so far. To end this chain you must
call `.toString()` however this can be done implicitly, and there is also a
shorthand `.s()`.

Explicit longform toString:

```
H().span('Some text ').strong('is important').toString()

'<span>Some text </span><strong>is important</strong>'
```

Explicit shortform toString:

```
H().span('Some text ').strong('is important').s()

'<span>Some text </span><strong>is important</strong>'
```

Implicit toString by concatenating:

```
H().span('Some text ').strong('is important') + ' but not all.'

'<span>Some text </span><strong>is important</strong> but not all.'
```

There's also a `.text()` function to add text in the chain, and a `.t()` 
shorthand alias:

```
H().t('ello ello ello ').em('what do we ave ere then?').s()

'ello ello ello <em>what do we ave ere then?</em>'
```

Finally you can also add text to the end with the `.s()` function 
(but only the end as it finishes the chain):

```
H().text('1, 2, ').strong('Fizz').s(', 4')

'1, 2, <strong>Fizz</strong>, 4'
```

### Nesting and Mixing

You can nest and mix `h` normal and `H()` chained modes of HATS. If you use the
`H()` chained mode nested in the content of another HATS call then toString will
be called implicitly for you. I'll repeat the complex example from above to show
you how HATS calls can be composed:

```
h.div({id: 'main_menu', class: 'menu'},
  H().div({class: 'arrow'}).div({class: 'tooltip'})
     .div({ class: 'menu_inner' },
       H().button(h.strong('Important') + 'Settings)
          .button('About')
          .button('Help')
          .s('Main Menu.')
     )
)

h.div {id: 'main_menu', class: 'menu'},
  H().div({class: 'arrow'}).div({class: 'tooltip'})
     .div { class: 'menu_inner' },
       H().button("#{h.strong('Important')} Settings")
          .button('About')
          .button('Help')
          .s('Main Menu.')

'<div id="main_menu" class="menu">
  <div class="arrow"></div><div class="tooltip"></div>
  <div id="menu_inner">
    <button><strong>Important</strong> Settings</button>
    <button>About</button>
    <button>Help</button>
    Main Menu.
  </div>
</div>'
```


### Instalation and Setup

1) Download `hats.js` and wear it in your javascripts folder.

2) Define your normal and chaining mode variables:

```
window.h = new HATS()
window.H = function() { return new HATS(true) }
```

`H()` is a function that returns a new HATS object to operate on, this
is so that you can nest HATS chains without their HTML content strings getting
mixed up. Compare this to the `h` variable that just contains a HATS instance.

You can call `h` and `H` anything, `hat` and `HAT` or `marco` and 
`POLO`; whatever you like.


### Development

HATS is coded in simple JavaScript, though I use it in a CoffeeScript app.
I've tested it in a few different situations in my application (making the odd
improvement to HATS along the way) so it should work for a variety of real-world 
use-cases.

The included tag methods should be complete according to 
[MDN](http://developer.mozilla.org/en/docs/Web/HTML/Element), as should the
built in void tag self closing support according to the 
[HTML5 Draft](http://www.w3.org/TR/html5/syntax.html#void-elements).

If you do spot something wrong or there's a feature you'd like added, please 
open an issue or better send a pull request.

🎩 
