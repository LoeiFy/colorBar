/*
 * https://github.com/LoeiFy/colorBar/
 *
 * @version 0.1.0
 * @author LoeiFy@gmail.com
 * http://lorem.in/ | under MIT license
 */

;(function(window, undefined) {

    function colorBar(selector, option) {

        this.option = {
            height: '3px',
            duration: '2s',
            colors: ['#37cca2', '#46deb6', '#feed00', '#fbf27a', '#f24141', '#37cca2']
        }

        if (option && typeof option === 'object') {
            for (var key in option) {
                this.option[key] = option[key]
            }
        }

    }

})(window)
