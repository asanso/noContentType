//Lets require/import the HTTP module
var http = require('http');
var url = require('url');

//We need a function which handles requests and send response
function handleRequest(request, response){
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	//response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum porta enim sit amet pretium. Mauris in quam quis dui iaculis iaculis et non nisl. Fusce dignissim libero eu nunc dictum mattis. Nam imperdiet ullamcorper sem vel laoreet. Mauris massa purus, molestie vitae nisi quis, tempor varius metus. Vivamus at tincidunt arcu, ac lacinia justo. Vestibulum vulputate, tortor in finibus lobortis, leo turpis mollis augue, a euismod quam enim ac ex. Quisque eget molestie nisi, ut finibus lorem. Mauris elit mi, tempus sit amet lectus sed, accumsan bibendum mauris. Maecenas eu est luctus, pellentesque justo vel, dapibus arcu. Vestibulum ut ex quis mauris convallis pretium vel quis sem. Proin vestibulum ligula at dui suscipit, nec varius nibh aliquam. Suspendisse vel velit sapien. Nullam erat mauris, molestie a eros feugiat, sollicitudin cursus tellus. Morbi id ante vel mauris interdum vestibulum. '+query.name);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen((process.env.PORT || 5000), function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost");
});
