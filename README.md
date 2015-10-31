# colorBar
colorfull ajax loading bar

## Demo
http://loeify.github.io/colorBar

## How to use

```js
// optional (default value)
var option = {
	id: 'colorBar',
	height: '3px',
	duration: '2s',
	colors: ['#37cca2', '#46deb6', '#feed00', '#fbf27a', '#f24141', '#37cca2']
}

// init
var bar = new colorBar('.bar', option);

// loading
bar.loading()

// loaded
bar.loaded()
bar.loaded(0)	// remove colorBar
```

## For develop
```bash
$ npm i
$ gulp
```
now access `http://127.0.0.1:2222` for development

## License
MIT