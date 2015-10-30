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
