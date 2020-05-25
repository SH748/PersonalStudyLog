# CSS

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

  



