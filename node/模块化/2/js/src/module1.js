export function choujiang(dom) {
    dom.onclick = function () {
        let result = percent(20);
        alert(result ? "中奖了" : "没中奖")
    }


}

function percent(num) {
    //获取一个 从 1-100 的随机数
    let n = rand(1, 100);
    //判断
    if (n <= num) {
        return true;
    } else {
        return false;
    }
}

function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}