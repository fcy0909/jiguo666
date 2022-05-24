
  
//   酷玩-最新

window.onload = function fn() {
    // 1、创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    //2、建立连接
    // ajax_.open('get','./demo.txt',true);
    ajax_.open('get', 'http://localhost:3000/guid/new',true);

    //3、发送请求
    ajax_.send();

    //4、接收服务器数据
    ajax_.onreadystatechange = function () {
       
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                // console.log(ajax_.responseText);
                var json_ = ajax_.responseText;

                // json转换字符串
                json_ = JSON.parse(json_);

                console.log(json_);
                var str = '';
                for (var item of json_) {
                   
                        
                        str += `
                        <li>
                <a href="#">
                    <img src="${item.img}" alt="" width="213" height="130">
                    <div class="info">
                        <p class="name">${item.text}</p>
                        <div class="info_1">

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


  