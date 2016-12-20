# colorBar
colorfull ajax loading bar

## Demo
http://loeify.github.io/colorBar

## Example Here
http://guo.lu

## How to use

```js
// optional (default value)
var option = {
	id: 'colorBar',
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
}

// init
var bar = new colorBar('.bar', option);

// loading
bar.loading()

// loaded
bar.loaded()		// hide colorBar
bar.loaded(true)	// show colorBar

// get status
var s = bar.status()		// s = 'loading' or s = 'normal'
```

## For develop
```bash
$ npm i
$ gulp
```
now access `http://127.0.0.1:2222` for development

## License
MIT