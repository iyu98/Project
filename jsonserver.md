#json-server   用来模拟数据

- 需要安装:  npm install json-server -g  全局安装
- 新建json文件: 
- json-server --watch --port 8080 data.json

port:端口

```
$.ajax("url").then(function(data){
    // ... 取
})

```

```
// 存
$.ajax("url",{
    type: "post",
    date: {id: 1,title:"name" }
})

```

```
// 改
$.ajax("url",{
    type: "put",
    date: {id: 1,title:"name" }
})

```

```
// 删数据
$.ajax("url",{
    type: "delete",
    date: {id: 1,ti tle:"name" }
})

```