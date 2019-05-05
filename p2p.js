/**
点对点消息
*/

exports.p2p = function(socket,data,users) {
	var from = data.from;
	var to = data.to;
	var message = data.message;
	//找到要发送人的socket地址对象
	var receiver = users[to];
	//如果接收人不存在，告诉客户端没有该用户
	if(!receiver) {
		var send = {
			protocal: 'p2p',
			code : 2001,
			message : '用户不存在'
		}
		socket.write(Buffer.from(JSON.stringify(send)));
	}else {
		//如果接收人存在，则将消息发送给该用户
		// *** 对你说 ： ***
		var send = {
			protocal : 'p2p',
			code : 2000,
			from  : data.from,
			message : message
		}
		receiver.write(Buffer.from(JSON.stringify(send)));
	}
}