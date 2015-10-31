/*
 * https://github.com/LoeiFy/colorBar/
 *
 * @version 0.1.0
 * @author LoeiFy@gmail.com
 * http://lorem.in/ | under MIT license
 */

function colorBar(selector, option) {

    this.option = {
        id: 'colorBar',
        height: '3px',
        duration: '2s',
        colors: ['#37cca2', '#46deb6', '#feed00', '#fbf27a', '#f24141', '#37cca2']
    }

    if (option && typeof option === 'object') {
        for (var key in option) {
            this.option[key] = option[key]
        }
    }

    if (selector) {

        var element = document.querySelector(selector);
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }

        this.selector = element;

        this.colorBarElement = document.createElement('div');
        this.colorBarElement.id = this.option.id;

        var cssStyle = this.option.colors[0] +' 0%,'+ this.option.colors[1] +' 17%,'+ this.option.colors[2] +' 38%,'+ this.option.colors[3] +' 59%,'+ this.option.colors[4] +' 79%,'+ this.option.colors[5] +' 100%';

        this.colorBarElement.style.cssText = 
            'height:'+ this.option.height +';'+
            'background-image:-webkit-linear-gradient(left, '+ cssStyle +');'+
            'background-image:-moz-linear-gradient(left, '+ cssStyle +');'+
            'background-image:linear-gradient(to right, '+ cssStyle +');';

        element.appendChild(this.colorBarElement)
    }

}

colorBar.prototype.loading = function() {

    var oldStyle = document.getElementById('colorBarStyle');
    if (oldStyle) {
        document.getElementsByTagName('head')[0].removeChild(oldStyle)
    }

    function getWidth(element) {
        var style = window.getComputedStyle(element),
            padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

        return element.clientWidth - padding
    } 

    var style = document.createElement('style'),
        w = getWidth(this.selector);

    style.id = 'colorBarStyle';
    style.innerHTML = 
        '@-webkit-keyframes loader'+ w +'{ 100% { background-position:'+ w +'px 0 } }'+
        '@-moz-keyframes loader'+ w +'{ 100% { background-position:'+ w +'px 0 } }'+
        '@keyframes loader'+ w +'{ 100% { background-position:'+ w +'px 0 } }'+

        '.loader'+ w +'{ -webkit-animation:loader'+ w + ' '+ this.option.duration +' infinite linear;'+
                        '-moz-animation:loader'+ w + ' '+ this.option.duration +' infinite linear;'+
                        'animation:loader'+ w + ' '+ this.option.duration +' infinite linear;}';

    document.getElementsByTagName('head')[0].appendChild(style)

    this.colorBarElement.className = 'loader'+ w;
    this.colorBarElement.style.display = 'block';

}

colorBar.prototype.loaded = function(mark) {

    this.colorBarElement.className = '';
    if (!mark) {
        this.colorBarElement.style.display = 'none'
    }

}
