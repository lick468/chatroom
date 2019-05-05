/**
广播消息
*/
exports.broadcast = function(data,users) {
	var from = data.from;
	var message = data.message;
	message = from + ' 说：' + message;
	var send ={
		protocal : 'broadcast',
		message : message
	}
	send =Buffer.from(JSON.stringify(send));
	for(var username in users) {
		var tmpSocket = users[username];
		tmpSocket.write(send);
	}
}