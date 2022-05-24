window.onload = function () {


    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTp');

    ajax_.open('get', 'http://localhost:3000/useing/public');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                // 转对象
                var data = JSON.parse(ajax_.responseText);
                show(data);
            } else {
                alert('请求失败');
            }
        }

    }
}

// 渲染数据


function show(data) {



    var str = '';
    for (var i = 0; i <= 3; i++) {

        str += `<dt>
<a href="guid/detail.html">
<span class="top-tip shoufa">${data[i].info_ty}</span>
<img src="${data[i].img}" with="220" height="130" />
<div class="hot-con">
<h2 class="name">${data[i].text}</h2>
<p class="tabs red">
    <span>${data[i].totalnum}</span>
    <span>${data[i].num}</span>
    </p>
    <p class="sq">  <span>${data[i].apply}</span>申请</p>
    <p class="current red">剩余时间2天</p>
    </div>
    </a>
    </dt>
`;
    }
    var dl_ = document.getElementsByTagName('dl')[1];
    dl_.innerHTML = str;
}
