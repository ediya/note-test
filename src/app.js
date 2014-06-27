(function($){
    function App(htmlEditor){
        this.selectedKey = this.createKey();
        this.htmlEditor = htmlEditor;
    }
    App.prototype = {    
        createKey: function(){
            var key = 'mynote';
            return key;
        },
        autoSave: function(event){
            window.localStorage.setItem(this.selectedKey, this.htmlEditor.getHtmlCode());
        },
        autoLoad: function(event){
            this.htmlEditor.setHtmlCode( window.localStorage.getItem(this.selectedKey) );
        },
        loadLocalStorage: function(event){
            value = $(event.currentTarget).val();
            this.htmlEditor.setHtmlCode( window.localStorage.getItem(value) );
        },
        clear: function(){
            this.htmlEditor.clear();
        },
        save: function(path){
            var value = htmlEditor.getContent();
            var blob = new Blob([value], {type: "text/plain;charset=utf-8"});
            saveAs(blob, path);
        },
        toggleFullScreen: function(){
            document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen || document.documentElement.msRequestFullscreen;
        
            function requestFullscreen(element) {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if(element.msRequestFullscreen){
                    element.msRequestFullscreen();
                }
            }
            
            if (document.fullscreenEnabled) {
                requestFullscreen(document.documentElement);
            }
        }
    }
    window.App = App;
})(jQuery);
