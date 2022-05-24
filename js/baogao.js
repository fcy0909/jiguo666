window.onload = function () {
    var zuire_ = document.getElementsByClassName('play-nav')[0].lastElementChild;
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://localhost:3000/report/new');
    if (zuire_.className == 'on') {
        ajax_.open('get', 'http://localhost:3000/report/hot');
    }
    ajax_.send();
    var data = [];
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                data = JSON.parse(ajax_.responseText);
                render();
            }
        }
    }
    function render() {
        var str = '';
        for (var i = 0; i <= 4; i++) {
            if (i == 4) {
                str += '<a name="tiao"></a>';
            }
            str += '<li>' + '<a href="../guid/detail.html">';
            str += '<img src="' + data[i].img + '" width="700" height="412">' + '</a>';
            str += '<div class="info">' + '<a href="../guid/detail.html">' + '<p class="title">' + data[i].text + '</p>' + '</a>';
            str += '<div class="btm fix">' + '<div class="userInfo left">'
            str += '<span class="avt">' + '</span>' + '<span class="name">' + data[i].uName + '</span>'
            str += '<span class="time">' + data[i].endTime + '</span>' + '</div>'
            str += '<div class="right icon">' + '<span class="zan" onclick="zzz(this)"> ' + data[i].totalnum + ' </span>' + ' <span class="look">' + data[i].apply + '</span>'
            str += '</div>' + '</div>' + '</li>';
            if (zuire_.className == '') {
                str += '<li>' + '<a href="../guid/detail.html">' + '<div class="click-look">' + '关于' + data[i].text + '还有' + data[i].num + '篇报告，点击查看' + '</div>' + '</a>' + '</li>';
            }
        }
        var mydiv_ = document.getElementById('myDiv');
        mydiv_.innerHTML = str;
    }

    var mbt_ = document.getElementsByClassName('more-btn')[0];
    mbt_.onclick = function () {
        clearInterval(time_js);
        var num = 2;
        var time_js = setInterval(function () {
            mbt_.className = 'more-btn loading'
            mbt_.innerHTML = '正在加载中';
            num--;
            if (num == 0) {
                var str = '';
                for (var i = 5; i < data.length; i++) {
                    str += '<li>' + '<a href="../guid/detail.html">';
                    str += '<img src="' + data[i].img + '" width="700" height="412">' + '</a>';
                    str += '<div class="info">' + '<p class="title">' + data[i].text + '</p>';
                    str += '<div class="btm fix">' + '<div class="userInfo left">'
                    str += '<span class="avt">' + '</span>' + '<span class="name">' + data[i].uName + '</span>'
                    str += '<span class="time">' + data[i].endTime + '</span>' + '</div>'
                    str += '<div class="right icon">' + '<span class="zan" onclick="zzz(this)"> ' + data[i].totalnum + ' </span>' + ' <span class="look">' + data[i].apply + '</span>'
                    str += '</div>' + '</div>' + '</li>';
                    if (zuire_.className == '') {
                        str += '<li>' + '<a href="../guid/detail.html">' + '<div class="click-look">' + '关于' + data[i].text + '还有' + data[i].num + '篇报告，点击查看' + '</div>' + '</a>' + '</li>';
                    }
                }
                var mydiv_ = document.getElementById('myDiv');
                mydiv_.innerHTML += str;
                location.href = encodeURI("#tiao");
                mbt_.className = '';
                mbt_.innerHTML = '没有更多了';
                mbt_.style.color = 'green';
                mbt_.onclick = '';
                clearInterval(time_js);
            }
        }, 1000);
    }
}
var a = 0;
function zzz(thit) {
    a++;
    var i = 2032;
    console.log(i);
    if (a == 1) {
        var i = thit.textContent;
        thit.style.background = 'none';
        thit.textContent++;
        thit.innerHTML = '已赞' + thit.textContent;
        thit.style.color = 'orange';
    } else if (a == 2) {
        thit.textContent = '';
        thit.textContent = i;
        thit.style.background = 'url(../css/img/zan.png) no-repeat left 4px';
        thit.style.color = '#a3a3a3';
        a = 0;
    }
}
