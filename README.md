# ChatGPT encode/decode Express Service

## install

```js
npm i
```

## Usage

**start Express server**

```
node index.js
```

**encode**

```bash
curl -H "Content-Type: application/json" -X POST -d '{"str": "中国"}'  http://localhost:1234

# {"code":0,"message":"success","data":[40792,32368,121]}
```

## Author

**ChatGPT** © [San Baofeng](https://blog.csdn.net/baofs), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by San Baofeng

> [San Baofeng's](https://blog.csdn.net/baofs) · GitHub [@San Baofeng](https://blog.csdn.net/baofs) · Twitter [@Baofeng15](https://twitter.com/Baofeng15)
