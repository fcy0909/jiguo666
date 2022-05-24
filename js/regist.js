

var phone = document.getElementById('phone');
var check = document.getElementById('check');
var code = document.getElementById('code');
var username = document.getElementById('username');
var pwd1 = document.getElementById('pwd1');
var pwd2 = document.getElementById('pwd2');
var xx = document.getElementsByClassName('xx')

// 手机号
phone.onfocus = function () {
    xx[0].innerHTML = '手机号11位数';
    xx[0].style.color = 'gray';
}

phone.onblur = function () {
    var reg = /^\w{11}$/;
    var str = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

    if (phone.value == '') {
        xx[0].innerHTML = '手机号不能为空';
        xx[0].style.color = 'red';
        return false;

    } else if (!reg.test(phone.value)) {
        xx[0].style.color = 'red';
        xx[0].innerHTML = '手机号不正确';
        return false;
    } else if (!str.test(phone.value)) {
        xx[0].style.color = 'red';
        xx[0].innerHTML = '手机号格式不对';
        return false;
    } else {
        xx[0].style.color = 'green';
        xx[0].innerHTML = '正确';
        return true;
    }
}
// 手机号结束

// 校验
check.onfocus = function () {
    xx[1].style.color = 'gray';
    xx[1].innerHTML = '图片校验';
}

check.onblur = function () {

    if (check.value == '') {
        xx[1].style.color = 'red';
        xx[1].innerHTML = '校验不能为空';
        return false;
    } else if (check.value != 'r2B7') {
        xx[1].style.color = 'red';
        xx[1].innerHTML = '校验不正确';
        return false;
    } else {
        xx[1].style.color = 'green';
        xx[1].innerHTML = '校验正确';
        return true;
    }
}
//  校验结束


// 验证码

code.onfocus = function () {
    xx[2].style.color = 'gray';
    xx[2].innerHTML = '输入验证码';
}

// var getCode = document.getElementsByClassName('getCode')[0];
// var obj;
// var timer;
// getCode.onclick = function () {

//     var num = 60;
//     var obj = [];
//     clearInterval(timer)
//     timer = setInterval(function () {
//         num--
//         if (num == 0) {
//             clearInterval(timer)
//             num = 60;
//             // getCode.style.pointerEvents = "";
//             getCode.innerHTML = '重新发送';
//         } else {
//             getCode.innerHTML = num + '秒重新发送'
//         }
//         if (num == 56) {
//             for (var i = 0; i < 4; i++) {
//                 var num_ = Math.floor(Math.random() * 10);
//                 obj.push(num_);
//             }
//             obj = obj.join('');
//             alert('验证码：' + obj);
//         }
//     }, 1000)
// }


var getCode = document.getElementsByClassName('getCode')[0];
var obj;
var timer;
getCode.onclick = function () {

    var num = 60;
    obj = [];
    clearInterval(timer)
    timer = setInterval(function () {
        num--;
        if (num == 0) {
            clearInterval(timer)
            num = 60;
            getCode.innerHTML = '重新发送'
        } else {
            getCode.innerHTML = num + '秒后发送';
        }
        if (num == 57) {
            for (var i = 0; i < 4; i++) {
                var num_ = Math.floor(Math.random() * 10);
                obj.push(num_);
            }
            obj = obj.join('');
            alert('你的验证码为：' + obj)
        }
    }, 1000)
}


code.onblur = function () {
    if (code.value == '') {
        xx[2].style.color = 'red';
        xx[2].innerHTML = '验证码不能为空';
        return false;

    } else if (code.value != obj) {
        xx[2].style.color = 'red';
        xx[2].innerHTML = '验证码错误';
        return false;
    } else {
        xx[2].style.color = 'skyblue';
        xx[2].innerHTML = '输入正确';
        return true;
    }

}

// 用户名

username.onfocus = function () {
    xx[3].style.color = 'gray';
    xx[3].innerHTML = '4-16字母,数字,下划线';
}

username.onblur = function () {
    //    //用户名正则，4到16位（字母，数字，下划线，减号）
    var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    if (username.value == '') {
        xx[3].style.color = 'red';
        xx[3].innerHTML = '用户名不能为空';
        return false;
    } else if (!uPattern.test(username.value)) {
        xx[3].style.color = 'red';
        xx[3].innerHTML = '用户名格式不正确';
        return false;
    } else {
        xx[3].style.color = 'greed';
        xx[3].innerHTML = '正确';
        return true;
    }
}

//   用户名结束


//  密码

pwd1.onfocus = function () {
    xx[4].style.color = 'gray';
    xx[4].innerHTML = '6-12数字字母下划线';
}

pwd1.onblur = function () {
    var reg = /^\w{6,12}$/;
    // var arr = /^[a-z0-9]+$/i;
    var reg2 = /[^a-zA-Z]/;
    if (pwd1.value == '') {
        xx[4].style.color = 'red';
        xx[4].innerHTML = '密码不能为空';
        return false;
    } else if (!reg.test(pwd1.value)) {
        xx[4].style.color = 'red';
        xx[4].innerHTML = '长度不在范围';
        return false;
    } else if (!reg.test(pwd1.value)) {
        xx[4].style.color = 'red';
        xx[4].innerHTML = '不能全是数字';
        return false;
    } else if (!reg2.test(pwd1.value)) {
        xx[4].style.color = 'red';
        xx[4].innerHTML = '不能全是字母';
        return false;
    } else {
        xx[4].style.color = 'green';
        xx[4].innerHTML = '输入正确';
        return true;
    }
}

//   密码结束

pwd2.onfocus = function () {
    xx[5].style.color = 'gray';
    xx[5].innerHTML = '两次密码要一致';
}
pwd2.onblur = function () {
    if (pwd2.value == '') {
        xx[5].style.color = 'red';
        xx[5].innerHTML = '密码不能为空';
        return false;
    } else if (pwd2.value != pwd1.value) {
        xx[5].style.color = 'red';
        xx[5].innerHTML = '两次密码不一致';
        return false;
    } else {
        xx[5].style.color = 'green';
        xx[5].innerHTML = '输入正确';
        return true;
    }
}

//   button按钮
var btn = document.getElementById('submit');

btn.onclick = function () {
    console.log('&&&&&&&&&&&&&');
    if (phone.onblur() && check.onblur() && code.onblur() && username.onblur() && pwd1.onblur()) {
        console.log('66666666666666');
        alert('注册成功');
        phone = document.getElementById('phone').value;
        username = document.getElementById('username').value;
        pwd1 = document.getElementById('pwd1').value;
        setCookie('手机号', phone);
        setCookie('用户名', username);
        setCookie('密码', pwd1);

    }
}
var submit = document.getElementById('submit');
submit.onclick = function () {
    submit.innerHTML = '注册成功'
}










