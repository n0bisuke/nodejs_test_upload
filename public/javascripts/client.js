jQuery(function($) {
	"use strict";
	var socket = io.connect('http://'+location.host + '/');
	
	$('h1').click(function(){
		socket.emit('h1click');
	});

	socket.on('h1click',function(data){
		$('h1').append('あああ');
	});
});