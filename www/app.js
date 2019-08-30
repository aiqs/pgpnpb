var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		if(window.plugins){
			alert('winPlug in');
			if(window.plugins.PushbotsPlugin){
				alert('winPlug PB in');				
				window.plugins.PushbotsPlugin.initialize("5d685fb4b794125eb92d5902", {"android":{"sender_id":"1051793649421"}});
				
				window.plugins.PushbotsPlugin.on("registered", function(token){
					alert("Registration Id:" + token);
				});
			}else{
				alert('winPlug PB off');
			}
		}else{
			alert('winPlug off');
		}
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        alert('Received Event: ' + id);
    }
};
