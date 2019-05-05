/**
用户注册
*/
exports.signup = function(socket,data,users) {
	//处理用户注册请求
	var username = data.username;
	//如果用户名不存在，则将用户名与socket地址绑定
	if(!users[username]) {
		users[username] = socket;
		var send = {
			protocal : 'signup',
			code : 1000,
			username : username,
			message : '注册成功'
		}
		socket.write(JSON.stringify(send));
	}else {
		var send =  {
			protocal : 'signup',
			code : 1001,
			message : '用户名已被占用，请重新输入用户名：'
		}
		socket.write(JSON.stringify(send));
	}
}

