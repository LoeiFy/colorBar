;(function() {

    function debounce(func, wait, immediate) {
        var timeout
        return function() {
            var context = this
            var args = arguments
            var later = function() {
                timeout = null
                if (!immediate) {
                    func.apply(context, args)
                }
            }
            var callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) {
                func.apply(context, args)
            }
        }
    }

    function colorBar(option) {
        var _this = this

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

        window.addEventListener('resize', debounce(function() { 
            _this.resize() 
        }, 250))
    }

    colorBar.prototype.resize = function() {
        if (this.status === 'loading') {
            this.loading()
        }
    }

    colorBar.prototype.loading = function() {
        this.element.style.display = 'block'

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

        this.element.className = styleClass
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
