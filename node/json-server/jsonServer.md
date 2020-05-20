# Json-Server

JSON-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源

## 安装json-server

```sh
npm install -g json-server
```

## 启动 json-server

`json-server`可以直接把一个`json`文件托管成一个具备全`RESTful`风格的`API`,并支持跨域、`jsonp`、路由订制、数据快照保存等功能的 web 服务器。

db.json文件的内容：

```json
{
  "course": [
    {
      "id": 1000,
      "course_name": "马连白米且",
      "autor": "袁明",
      "college": "金并即总变史",
      "category_Id": 2
    },
    {
      "id": 1001,
      "course_name": "公拉农题队始果动",
      "autor": "高丽",
      "college": "先了队叫及便",
      "category_Id": 2
    }
  }
}
```

例如以下命令，把`db.json`文件托管成一个 web 服务。

```sh
$ json-server --watch --port 53000 db.json
```

输出类似以下内容，说明启动成功。

```
\{^_^}/ hi!

Loading db.json
Done

Resources
http://localhost:53000/course

Home
http://localhost:53000

Type s + enter at any time to create a snapshot of the database
Watching...
```

此时，你可以打开你的浏览器，然后输入：http://localhost:53000/course

## json-server 的相关启动参数

+ 语法：`json-server [options] `
+ 选项列表：

| 参数               | 简写 | 默认值                                              | 说明                             |
| :----------------- | :--- | :-------------------------------------------------- | :------------------------------- |
| --config           | -c   | 指定配置文件                                        | [默认值: "json-server.json"]     |
| --port             | -p   | 设置端口 [默认值: 3000]                             | Number                           |
| --host             | -H   | 设置域 [默认值: "0.0.0.0"]                          | String                           |
| --watch            | -w   | Watch file(s)                                       | 是否监听                         |
| --routes           | -r   | 指定自定义路由                                      |                                  |
| --middlewares      | -m   | 指定中间件 files                                    | [数组]                           |
| --static           | -s   | Set static files directory                          | 静态目录,类比：express的静态目录 |
| --readonly         | --ro | Allow only GET requests [布尔]                      |                                  |
| --nocors           | --nc | Disable Cross-Origin Resource Sharing [布尔]        |                                  |
| --no               | gzip | , --ng Disable GZIP Content-Encoding [布尔]         |                                  |
| --snapshots        | -S   | Set snapshots directory [默认值: "."]               |                                  |
| --delay            | -d   | Add delay to responses (ms)                         |                                  |
| --id               | -i   | Set database id property (e.g. _id) [默认值: "id"]  |                                  |
| --foreignKeySuffix | --   | fks Set foreign key suffix (e.g. _id as in post_id) | [默认值: "Id"]                   |
| --help             | -h   | 显示帮助信息                                        | [布尔]                           |
| --version          | -v   | 显示版本号                                          | [布尔]                           |

+ source可以是json文件或者js文件。实例：

```sh
$ json-server --watch -c ./jsonserver.json
$ json-server --watch app.js
$ json-server db.json
json-server --watch -port 8888 db.json
```

## RestFul API

