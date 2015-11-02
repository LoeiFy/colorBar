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
        colors: [
            ['#37cca2', '0%'], 
            ['#46deb6', '17%'], 
            ['#feed00', '38%'], 
            ['#fbf27a', '59%'], 
            ['#f24141', '79%'], 
            ['#37cca2', '100%']
        ]
    }

    if (option && typeof option === 'object') {
        for (var key in option) {
            this.option[key] = option[key]
        }
    }

    if (selector) {
        var element = document.querySelector(selector);

        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild)
            }

            this.selector = element;

            this.colorBarElement = document.createElement('div');
            this.colorBarElement.id = this.option.id;

            var cssStyle = '';
            for (var i = 0; i < this.option.colors.length; i ++) {
                cssStyle += this.option.colors[i][0] +' '+ this.option.colors[i][1] +','
            }
            cssStyle = cssStyle.substr(0, cssStyle.length - 1)

            this.colorBarElement.style.cssText = 
                'height:'+ this.option.height +';'+
                'background-image:-webkit-linear-gradient(left, '+ cssStyle +');'+
                'background-image:-moz-linear-gradient(left, '+ cssStyle +');'+
                'background-image:linear-gradient(to right, '+ cssStyle +');';

            element.appendChild(this.colorBarElement)
        }
    }

}

colorBar.prototype.loading = function() {

    var oldStyle = document.getElementById('colorBar'+ this.option.id);
    if (oldStyle) {
        document.getElementsByTagName('head')[0].removeChild(oldStyle)
    }

    function getWidth(element) {
        var style = window.getComputedStyle(element),
            padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

        return element.clientWidth - padding
    } 

    var style = document.createElement('style'),
        w = getWidth(this.selector),
        styleTag = 'loader'+ this.option.id + w;

    style.id = 'colorBar'+ this.option.id;
    style.innerHTML = 
        '@-webkit-keyframes '+ styleTag +'{ 100% { background-position:'+ w +'px 0 } }'+
        '@-moz-keyframes '+ styleTag +'{ 100% { background-position:'+ w +'px 0 } }'+
        '@keyframes '+ styleTag +'{ 100% { background-position:'+ w +'px 0 } }'+

        '.'+ styleTag +'{ -webkit-animation:'+ styleTag + ' '+ this.option.duration +' infinite linear;'+
                        '-moz-animation:'+ styleTag + ' '+ this.option.duration +' infinite linear;'+
                        'animation:'+ styleTag + ' '+ this.option.duration +' infinite linear;}';

    document.getElementsByTagName('head')[0].appendChild(style)

    this.colorBarElement.className = styleTag;
    this.colorBarElement.style.display = 'block';

}

colorBar.prototype.loaded = function(mark) {

    this.colorBarElement.className = '';
    if (!mark) {
        this.colorBarElement.style.display = 'none'
    }

}

colorBar.prototype.status = function() {

    if (this.colorBarElement.className === '') {
        return 'normal'
    }
    return 'loading'

}
