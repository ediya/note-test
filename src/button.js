var target = $('#contents');

var htmlEditor = new HtmlEditor(target);
var app = new App(htmlEditor);
htmlEditor.initHtmlEditor(app);

$("#new-note").on("click",function(){
	app.clear();
});

$("#full-screen").on("click",function(){
    app.toggleFullScreen();
});

$("#file-save").on('click', function(){
	app.save("hello world.html");
});