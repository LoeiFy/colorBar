;(function() {

    function colorBar(option) {
        this.option = {
            selector: 'colorBar',
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

        this.element = document.getElementById(this.option.selector)
        this.status = 'loaded'

        if (!this.element) {
            return console.error('cannot find the element')
        }

        var style = this.option.colors.map(function(color) {
            return color[0] + ' ' + color[1]
        }).join(',')

        this.element.style.cssText = 
            'height:' + this.option.height + ';' +
            'background-image:-webkit-linear-gradient(left,' + style + ');' +
            'background-image:-moz-linear-gradient(left,' + style + ');' +
            'background-image:linear-gradient(to right,' + style + ');'
    }

    colorBar.prototype.loading = function() {
        var styleId = this.option.selector + '-style'
        var elementWidth = this.element.clientWidth
        var styleClass = this.option.selector + '-' + elementWidth
        var oldStyle = document.getElementById(styleId)
        var newStyle = document.createElement('style')
        var stylePosition = styleClass + ' { 100% { background-position-x: ' + elementWidth + 'px } }'
        var styleAnimation = styleClass + ' ' + this.option.duration + ' infinite linear;'

        newStyle.id = styleId 
        newStyle.innerHTML = 
            '@-webkit-keyframes ' + stylePosition +
            '@-moz-keyframes ' + stylePosition +
            '@keyframes '+ stylePosition +

            '.' + styleClass +' { ' +
            '-webkit-animation: '+ styleAnimation +
            '-moz-animation: '+ styleAnimation +
            'animation: ' + styleAnimation + ' }'

        if (oldStyle) {
            document.head.removeChild(oldStyle)
        }
        document.head.appendChild(newStyle)

        this.element.className = styleTag
        this.element.style.display = 'block'
        this.status = 'loading'
    }

    colorBar.prototype.loaded = function() {
        this.element.className = ''
        this.status = 'loaded'
    }

    colorBar.prototype.hide = function() {
        this.element.className = ''
        this.element.style.display = 'none'
        this.status = 'loaded'
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = colorBar
    } else {
        window['colorBar'] = colorBar
    }

}())
