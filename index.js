const express = require('express');
const bodyParser = require('body-parser');
const { encode, decode } = require('gpt-3-encoder');

const app = express();

app.use(
	bodyParser.json({
		type: 'application/json',
	})
);

/**
 * 将字符串转化成 token
 */
app.post('/encode', (req, res) => {
	try {
		const token = encode(req.body.str);
		res.send({
			code: 0,
			message: 'success',
			data: token,
		});
	} catch (error) {
        console.error('encode-failed: ', error);
    }
});

/**
 * token 解码
 */
app.post('/decode', (req, res) => {
	try {
		const decoded = decode(req.body.data);
		res.send({
			code: 0,
			message: 'success',
			data: decoded,
		});
	} catch (error) {
        console.error('encode-failed: ', error);
    }
});

app.listen(1234, '0.0.0.0', function () {
	console.log('dataServer running at port 1234');
});
