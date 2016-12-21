# colorBar
colorfully loading bar 
http://loeify.github.io/colorBar

## Installation

```bash
npm i -S colorbar
```

## Usage

html markup

```html
<div id="bar"></div>
```

use as module

```js
import colorBar from 'colorbar'
//var colorBar = require('colorbar')
``` 

or use the script

```html
<script src="colorBar.min.js"></script>
```

### Options

```js
// default
new colorBar({
	selector: 'colorBar',  // html id only
	height: '3px',
	duration: '2s',
	colors: [
        ['#37cca2', '0%'], 
        ['#46deb6', '17%'], 
        ['#feed00', '38%'], 
        ['#fbf27a', '59%'], 
        ['#f24141', '79%'], 
        ['#37cca2', '100%']
    ]
})
```

### API

```js
const bar = new colorBar({
    selector: 'bar'
})

// loading
bar.loading()

// loaded
bar.loaded()

// hide
bar.hide()
```

## Development

```bash
# build 
$ npm run build

# local server
$ npm start
```

## License
MIT