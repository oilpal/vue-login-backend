const express = require('express');

const app = express();
const port = 9197;

app.get('/get_user_info', function(request, response) {

	var id = request.query.uid;
	var pw = request.query.password;

	console.log('id = ' + id);
	console.log('pw = ' + pw);

	var user = {
		name: '이지훈',
		age: 46
	};

	return response.json(user);
})

app.get('/is_finished', function(request, response) {

	var user = {
		name: '이지훈',
		age: 46,
		CNT: 0
	};

	var result = [ user ];

	return response.json(result);
})

app.listen(port, function(err) {
	console.log('Connected port' + port);
	if (err) {
		return console.log('Found error', err);	
	}
})
