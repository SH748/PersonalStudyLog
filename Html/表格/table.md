# table表格

## 标签

> table
>
> thead
>
> tr
>
> th
>
> tbody
>
> tfoot
>
> caption

## 不规则操作

> colspan ：合并列
>
> rowspan ： 合并行

```html
 <table border="1">
        <caption>我的标题</caption>
        <thead>
            <tr>
                <th> # </th>
                <th> 姓 名 </th>
                <th> 年 纪 </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2">1</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td rowspan="2">3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
        </tbody>

    </table>
```

