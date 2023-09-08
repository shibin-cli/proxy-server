# 使用说明
## 启动代理

```bash
npm start
```

## `.env`文件配置说明

* `BASE` 代理的基础路径
* `HOST` 主机地址，只能是一个，配合 PORT 使用，多个地址是需要使用 TARGET
* `PORT` 代理的端口号，多个端口使用 `,` 隔开， 配合 HOST 使用
* `TARGET` 代理的 url ，包括地址和端口号,多个地址使用 `,` 隔开，同时 HOST 和 PORT 的配置失效

```bash
BASE=/api  # 代理的基础路径
HOST=http://10.23.89.153 # 代理的地址，只能是一个，配合 PORT 使用，多个地址是需要使用 TARGET
PORT=10027 # 代理的端口号，多个端口使用 `,` 隔开， 配合 HOST 使用
TARGET=http://10.23.89.153:10026 # 代理的 url ，包括地址和端口号,多个地址使用 `,` 隔开，同时 HOST 和 PORT 的配置失效
```

**注意** 配置 `TARGET` 时，不需要配置 `HOST` 和 `PORT`，配置 `HOST` 和 `PORT`时，不需要配置 `TARGET` , `HOST` 和 `PORT` 必须配合使用