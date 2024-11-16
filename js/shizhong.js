var now = new Date;

function createtime() {
    var t = new Date("11/05/2024 14:00:00");
    now.setTime(now.getTime() + 250);

    var e = (now - t) / 1e3 / 60 / 60 / 24;
    var a = Math.floor(e);
    var n = (now - t) / 1e3 / 60 / 60 - 24 * a;
    var r = Math.floor(n);
    if (String(r).length == 1) r = "0" + r;

    var s = (now - t) / 1e3 / 60 - 1440 * a - 60 * r;
    var i = Math.floor(s);
    if (String(i).length == 1) i = "0" + i;

    var o = (now - t) / 1e3 - 86400 * a - 3600 * r - 60 * i;
    var l = Math.round(o);
    if (String(l).length == 1) l = "0" + l;

    let g = `<span class='textTip'>本站居然运行了 ${a} 天</span><span id='runtime'>${r} 小时 ${i} 分 ${l} 秒</span>
    <i class="fa-solid fa-heart" style="color: red;"></i>
    <i class="fa-solid fa-mug-hot"></i>`;

    // 更新页面上的内容
    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = g;
    }
}

// 每250毫秒调用一次createtime函数
setInterval(() => { createtime(); }, 250);
