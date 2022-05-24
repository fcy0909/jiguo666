
  
//   酷玩-最热

window.onload = function fn() {
    // 1、创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    //2、建立连接
    // ajax_.open('get','./demo.txt',true);
    ajax_.open('get', 'http://localhost:3000/play/hot',true);

    //3、发送请求
    ajax_.send();

    //4、接收服务器数据
    ajax_.onreadystatechange = function () {
       
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                console.log(ajax_.responseText);
                var json_ = ajax_.responseText;

                // json转换字符串
                json_ = JSON.parse(json_);

                // console.log(json_);
                var str = '';
                for (var item of json_) {
                    for (var i = 0; i <= json_.length; i++) {
                        
                        str += `
                        <li>
                <a href="#">
                    <img src="${item[i].img}" alt="" width="213" height="130">
                    <div class="info">
                        <p class="name">${item[i].text}</p>
                        <div class="info_1">
                            <span class="price left">${item[i].price}</span>
                            <div class="info_2">
                                <span class="mind">3</span>
                                <span class="browse">3</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>   
                   `
                    }
                }

                var myul= document.getElementById('myDiv');
                 myul.innerHTML = str;

                // console.log(str);
                // myul.appendChild(str);
            } else {
                console.log('获取连接失败');
            }
        }
    }

}


  