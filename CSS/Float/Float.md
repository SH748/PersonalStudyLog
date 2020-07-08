# Float 元素浮动

## 为元素开启浮动

```html
<div class="float">
</div>
<style>
    .float{
        float:left;/*有效值:left,right*/
    }
</style>
```



## 特点
### 文字环绕图片

**==浮动元素后的兄弟元素的文本节点内容时候会被浮动元素覆盖？==**

**不会**

```html
<style>
    .box{
        width:100px;
        height:100px;
        background-color: lightblue;
    } 
    .float{
        float:left
    }
    /*文本不会被浮动元素覆盖*/
</style>

<body>
    <div class="float box">
    </div>
    <p>
        Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

Hook 是向下兼容的。本页面为有经验的 React 用户提供一个对 Hook 的概览。这是一个相当快速的概览，如果你有疑惑，可以参阅下面这样的黄色提示框。

详细说明

有关我们为什么要在 React 中引入 Hook 的原因，请参考动机。

↑↑↑ 每个部分的结尾都会有一个如上所示的黄色方框。 它们会链接到更详细的说明。


    </p>
</body>
```

### 元素脱离文档流

* 元素设置浮动后，将会从标准文档流中脱离
  * 脱离文档流后，一些元素的特点也会发生改变

1. block元素不再占据整行
2. 脱离文档流以后，block元素的宽和高默认被内容撑开（在不设置元素宽高的情况下）
3. inline元素脱离文档流以后会变成block元素，特点和block元素一样（可以设置宽高）
   1. 脱离文档流以后不再区分元素的inline和block 

## 高度塌陷

### BFC

1. 开启bfc的元素不会被浮动元素覆盖
2. 开启BFC的元素子元素和父元素不会重叠
3. 开启BFC的元素可以包含浮动子元素

开启BFC的方式

1. 设置浮动（元素从文档流脱离） 不推荐
2. display：inline-block (在不明确设置宽度的前提下，宽度消失)  不推荐
3. 设置overflow设置为非visible的属性  —–>不算完美
   1. overflow:hidden 开启BFC
   2. overflow：auto  开启BFC

 ### 解决方案

 ```css
.clearfix:after,
.clearfix:befor{
    display:table;
    content:'';
    clear:both
}
 ```

