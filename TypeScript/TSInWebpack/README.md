# 使用webpack搭建TypeScript环境问题记录
## 搭建项目时没有创建tsconfig.json文件
* 导致使用TypeScript的某些关键字时报错
* 解决方法:
  * 执行命令: 
```shell
tsc --init #执行该命令后会创建tsconfig.json文件
```


