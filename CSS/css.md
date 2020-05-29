# CSS



## 文本

> font  设置文本样式

```css
font: bold italic 15px/1.5em 'Courier New',Courier,monospace;
/*	  加粗  斜体   大小 行高   字体，多个字体之间用逗号分割	   */
```

> font-family：字体设置

* 定义字体

```css
@font-face{
    font-family:"字体名字";
    src:url("字体文件路径") format("字体文件类型（以便浏览器确认是否可以处理，如果不能处理，浏览器将不加载该资源）")，
        url("字体文件路径") format("字体文件类型（以便浏览器确认是否可以处理，如果不能处理，浏览器将不加载该资源）");
    /*可以定义多个引用，在上面的引用优先级比较高*/
}
/*使用*/
div{
    font-faily:"刚刚定义的字体名字"
}
```

> 字体大小写

```css 
font-variant: small-caps;/*小型大写*/
text-transform: uppercase;/*全大写*/
text-transform: lowercase;/*全小写*/
text-transform: capitalize;/*首字母大写*/
```

> 文本阴影

```css
text-shadow:#ddd 5px 5px;
/*          颜色  水平偏移量  竖直偏移量  */
```

###  ==文本溢出==

```css
/*1.换行*/
white-space:/*非nowrap即可*/
/*2.隐藏*/
overflow:hidden;
/*3.省略*/
text-overflow:ellipssis;
```

> **`white-space`** CSS 属性是用来设置如何处理元素中的 [空白](https://developer.mozilla.org/en-US/docs/Glossary/whitespace)。

```css
white-space:normal;
white-space:nowrap;
white-space:pre;
white-space:pre-wrap;
white-space:pre-line;
white-spance:break-spaces;
white-space: inherit;
white-space: initial;
white-space: unset;
```

查阅[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)

|                | 换行符 | 空格和制表符 | 文字换行 | 行尾空格 |
| :------------- | :----- | :----------- | :------- | :------- |
| `normal`       | 合并   | 合并         | 换行     | 删除     |
| `nowrap`       | 合并   | 合并         | 不换行   | 删除     |
| `pre`          | 保留   | 保留         | 不换行   | 保留     |
| `pre-wrap`     | 保留   | 保留         | 换行     | 挂起     |
| `pre-line`     | 保留   | 合并         | 换行     | 删除     |
| `break-spaces` | 保留   | 保留         | 换行     | 换行     |

> 文本排版

* 缩进

```css
text-indent:2em;/*建议使用em而不是固定像素宽度*/
```

* 文本居中||居右

```css
text-align:center;
text-align:right;
```

* [vertical-align](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align) 文本垂直方向 

```css
/* Keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;
```

* [letter-spacing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing) 字符间距

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

* [word-spacing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing) 单词间距

```css
ord-spacing: normal;    /* Keyword value */
word-spacing: 3px;       /* <length> values */
word-spacing: 0.3em;

word-spacing: inherit;
```

* [writing-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode) 文本排列方向

```css
/* 关键值 */ 
writing-mode: horizontal-tb; 
writing-mode: vertical-rl; 
writing-mode: vertical-lr; 

/* 全局值 */ 
writing-mode: inherit; 
writing-mode: initial; 
writing-mode: unset;
```





## css选择器

在非常多的元素中快速选中想要的元素的一种工具

* 全选择器

  ```css
  *{
  }
  ```

  

* 标签选择器

  ```css
  a{},div{},p{}
  ```

  * 层叠

  ```css
  a,div,p{}/*同时对多个匹配规则进行样式设置 */
  ```

  

* 类选择器

  ```css
  .className{}
  ```

  

* ID选择器

```css
#IDName{}
```

* 结构选择器

  ```html
  <div>
      <p></p>
      <h2></h2>
      <article>
      	<h1></h1>
          <p></p>
      </article>
   	<h2></h2>   
  </div>
  ```

  

  * 后代选择器

  ```css
  div arctile p{}/*div中的article中的p*/
  ```

  * 子代选择

  ```css
  div>p{}/*div子元素中的p，article不会选中*/
  ```

  * 兄弟选择

  ```css
  div p~h2{}/*div子元素中的p标签的兄弟元素中的h2标签*/
  ```

  * 兄弟相邻选择器

  ```css
  div p+h2{}/*div子元素中的p标签的兄弟元素中的和p相邻的h2标签，两个标签之间没有其他元素*/
  ```

* 属性选择

```css
<p title="aaa"></p>
<p title></p>
```



* 属性头选择

```css
p[title]{}/*p标签中带有title属性的*/
```

* 属性选择器属性值约束

```css
p[title="aaa"]{}/*p标签中title属性值为aaa的*/
p[title^="aaa"]{}/*p标签中title属性值以aaa开头的*/
p[title$="aaa"]{}/*p标签中title属性值以aaa结束的*/
p[title*="aaa"]{}/*p标签中title属性值带有aaa的*/
p[title~="aaa"]{}/*p标签中title属性值带有aaa单词的*/
p[title|="aaa"]{}/*p标签中title属性值以aaa单词开始的，或则以aaa单词开始后面用-连接的，其他符号连接不可以*/
```

* 伪类选择器

  * :link 	向未访问的==链接==添加特殊的样式
  * :visited    向访问的==链接==添加特殊的样式
  * :hover    向鼠标悬浮时的元素添加样式
  * :active    向鼠标点击时一瞬间时的元素添加样式
  * :focus    向获取焦点时的元素添加样式
  * :target    锚链接跳转到指定位置时，目标元素属添加样式
  * :root    根
  * :empty    元素内容为空时被选中
  * :first-child
  * :last-child
  * ………

  

## CSS权重

  当对同一个元素的同一个属性设置了不同的值时，最后作用哪一个值的效果的比较

  ### 权限应用
<hr>

<table style="max-width:200px;">
    <thead>
    	<th>规则</th>
        <th>粒度</th>
    </thead>
    <tbody>
    	<tr>
        	<td>ID</td>
            <td>0100</td>
        </tr>
        <tr>
        	<td>Class,类属性值</td>
            <td>0010</td>
        </tr>
        <tr>
        	<td>标签伪元素</td>
            <td>0001</td>
        </tr>
        <tr>
        	<td>*</td>
            <td>0000</td>
        </tr>
        <tr>
        	<td>行内样式</td>
            <td>1000</td>
        </tr>
    </tbody>
</table>

  ==CSS权重可以相加==

```css
div .class {} /*11*/
.class[type]{}/*20*/ 
```

### 强制优先级

* !important 

```css
div{
    color:red !important;
}
```



### 样式继承

* 部分属性可以被子元素继承

* 继承规则没有权重 null 无权重小于0权重



## 盒子模型
### 盒子模型图

![image-20190817163854641](D:\个人前端学习日志\CSS\css.assets\image-20190817163854641.0f6c1947.png)

### 边距

* maring 外边距

```css
margin:top right bottom left;
margin:top-bottom right-left;

margin:all;

/*单独为某一边设置外边距*/
margin-left:10px;
margin-bottom:10px;
margin-top:10px
margin-right:10px;

/*自动*/
margin: 0 auto;/*上下为0，左右自动，元素在水平居中*/

/*边距可以为负值*/
```

==相邻元素的边距合并问题==

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>边距合并</title>
</head>
<body>
    <style>
        *{
            font-size: 16px;
        }
        ul{
            list-style: none;
        }
        ul li{
            margin: 20px 0;
        }
        pre{
            width: 500px;
            white-space: pre-wrap;
            color: darkorchid;
            background-color: lightblue;
            font-size: 1.5em;
            font-weight: 600;
        }
        body>div:nth-of-type(1){
            border: 1px solid red;
            width: 100px;
            height: 50px;
            margin-bottom: 10px;
        }
        body>div:nth-of-type(2){
            width: 100px;
            height: 50px;
            border: 1px solid green;
            margin-top: 20px;
        }
    </style>
    <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
    </ul>
    <pre>

    ul li{
        argin: 20px 0;
    }
    给li便签设置了上下边距为20px，上一个元素有20px下边距，下一个元素有上边距20px。
    按一般思维理解，两个元素的间距应该是相加40px（暨:上一个元素的下边距+下一个元素的上边距），但实际距离为20px。因为发生了边距合并，此时两个元素的距离是取自两个元素的外边距的最大值。
    因为都为20px，所以两个元素的距离取任意一个值都是可以的，所以是20px

    </pre>

    <div>part1</div>
    <div>part2</div>
    <pre>

    body>div:nth-of-type(1){
        /*part1*/
        border: 1px solid red;
        width: 100px;
        height: 50px;
        margin-bottom: 10px;
    }
    body>div:nth-of-type(2){
        /*part2*/
        width: 100px;
        height: 50px;
        border: 1px solid green;
        margin-top: 20px;
    }
    给part1设置下边距为10px,给part2设置边距20px.
    展示结果：两元素间距20px。
    原因：边距合并，取两者中最大的一个生效
        </pre>
</body>
</html>
```

* padding 内边距

```css
padding:top right bottom left;
padding:top-bottom right-left;

/*四边统一设置*/
padding:all;

/*单独为某一边设置外边距*/
padding-left:10px;
padding-bottom:10px;
padding-top:10px
padding-right:10px;
```

==固定盒子外宽，使得内边距和边框的修改不会影响盒子宽度==

```css
box-sizing:border-box;
```
### box-sizing 语法
`box-sizing` 属性被指定为下面列表中的关键字。

+ **content-box**

  默认值，标准盒子模型。 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 与 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 只包括内容的宽和高， 不包括边框（border），内边距（padding），外边距（margin）。注意: 内边距、边框和外边距都在这个盒子的外部。 比如说，`.box {width: 350px; border: 10px solid black;}` 在浏览器中的渲染的实际宽度将是 370px。  尺寸计算公式：

  `width` = 内容的宽度

  `height` = 内容的高度

  宽度和高度的计算值都不包含内容的边框（border）和内边距（padding）。

+ **border-box**

   [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性包括内容，内边距和边框，但不包括外边距。这是当文档处于 Quirks模式 时Internet Explorer使用的[盒模型](https://developer.mozilla.org/en-US/docs/CSS/Box_model)。注意，填充和边框将在盒子内 , 例如, `.box {width: 350px; border: 10px solid black;}` 导致在浏览器中呈现的宽度为350px的盒子。内容框不能为负，并且被分配到0，使得不可能使用border-box使元素消失。  尺寸计算公式：

  *`width` = border + padding + 内容的宽度*

  *`height` = border + padding + 内容的高度*

+ 形式化语法

```css
content-box | border-box
```

### 边框 border

```css
border: solid 1px red;
/*      样式  大小  颜色 */
```

==边框样式==

| 类型   | 描述                                                  |
| :----- | :---------------------------------------------------- |
| none   | 定义无边框。                                          |
| dotted | 定义点状边框。在大多数浏览器中呈现为实线。            |
| dashed | 定义虚线。在大多数浏览器中呈现为实线。                |
| solid  | 定义实线。                                            |
| double | 定义双线。双线的宽度等于 border-width 的值。          |
| groove | 定义 3D 凹槽边框。其效果取决于 border-color 的值。    |
| ridge  | 定义 3D 垄状边框。其效果取决于 border-color 的值。    |
| inset  | 定义 3D inset 边框。其效果取决于 border-color 的值。  |
| outset | 定义 3D outset 边框。其效果取决于 border-color 的值。 |

#### 边框圆角

```css
border-radius: 10px;
```

### 轮廓线 outline

```css
outline:solid 3px gray;
/*      样式  大小  颜色*/
/*轮廓线不占用空间位置*/

/*去除某些标签的自带轮廓线*/
outline:none;
```

