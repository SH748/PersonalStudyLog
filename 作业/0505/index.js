require("http").createServer((res, rep) => {

    let css = `
        <style>
            *{
                margin:0;
                padding:0;
            }
            body{
                display:flex;
                height:100vh;
                justify-content:center;
                align-items:center;
            }
            table{
                width:300px;
                text-align:center;
            }
            table tr:first-child{
                background-color:#eee;
            }
            table tr td{
                width:50%
            }
        </style>
    `;
    let html = `
            <table>
                <tr>
                    <td>姓名</td>
                    <td>年纪</td>
                </tr>
                <tr>
                    <td>刘亦菲</td>
                    <td>18</td>
                </tr>
            </table>
    `;

    rep.setHeader("content-type", "text/html; charset=UTF-8");
    rep.write(css);
    rep.write(html);
    rep.end();

}).listen(8000);