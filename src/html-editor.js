(function(){
    function HtmlEditor(target){
        this.$contents = target;
    }
    HtmlEditor.prototype = {
        getHtmlCode: function(){
            return this.$contents.code();
        },
        setHtmlCode: function(code){
            this.$contents.code( code );
        },    
        initHtmlEditor: function(app){
            this.$contents.summernote({
                height: 300,
                oninit : app.autoLoad.bind(app),
                onkeyup : app.autoSave.bind(app)
            });
        },
        clear: function(){
             this.$contents.code("");
        },
        getContent: function(){
            return this.getHtmlCode();
        }
    }
    window.HtmlEditor = HtmlEditor;
})();