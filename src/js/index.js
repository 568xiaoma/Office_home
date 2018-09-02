//监会提交页面的逻辑

/**
 * 绑定，删除事件
 * @param {obj对象}   elm       需要绑定事件的对象
 * @param {[type]}   evType     需要绑定的事件名称
 * @param {Function} fn         绑定事件的函数
 * @param {[type]}   useCapture true/false冒泡方式
 */
/**
 * 原生JS获取form中的信息
 * @param  {[type]} frmID [description]
 * @return {[type]}       [description]
 */
//考虑浏览器的兼容性，获取浏览器对象判断后进行声明
function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture); //DOM2.0
        return true;
    } else if (elm.attachEvent) {
        var r = elm.attachEvent("on" + evType, fn); //IE5+
        return r;
    } else {
        elm['on' + evType] = fn; //DOM 0
    }
}

function forbiddenEvent(event) {//不知道干嘛的
    event = event || window.event;
    if (event.stopPropagation) event.stopPropagation();
    else event.cancelBubble = true;
    if (event.preventDefault) event.preventDefault();
    else event.returnValue = false;

}

var xmlhttp;//http协议
if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

//ajax请求数据
function getData(method, url, queryString, fnc) { //获取JSON数据
    //异步链接服务器，设置连接方式
    xmlhttp.open(method, url, true);
    //设置请求头
    xmlhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    //发送request数据
    xmlhttp.send(queryString);
    //改变状态，调用函数
    xmlhttp.onreadystatechange = fnc;
}
//自动填写日期
var form = document.getElementById('meeting_form');
var myDate = new Date();
form.date.value = myDate.toLocaleDateString();

//添加请求
addEvent(document.getElementById('meeting_form'),"submit", function(event) {
    forbiddenEvent(event);
    //获取表单提交数据
    var form = document.getElementById('meeting_form');
    var info = {
        name:'',
        department:'',
        date:'',
        place:'',
        personnumber:'',
        absentperson:'',
        message:'',
        password:''
    };
    //获取表单各个元素
    info.name = form.name.value;
    info.department = form.department.value;
    info.date = form.date.value;
    info.place = form.place.value;
    info.personnumber = form.personnumber.value;
    info.absentperson = form.absentperson.value;
    info.message = form.message.value;
    info.password = form.password.value;
    //POST表单json数据到服务器
    getData("POST", "http://118.190.207.113:3000/meeting", JSON.stringify(info), function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {//与后台的回应有关，具体判断需要看后台的逻辑
                if(RegExp("No user").test(xmlhttp.responseText)){
                    alert("您非办公室成员，无权提交");
                }else if(RegExp("Password error").test(xmlhttp.responseText)){
                    alert("密码错误");
                }else{
                    alert("提交成功");
                }
            } else {
                console.log("发生错误" + xmlhttp.status);
            }
        }
    });
}
, false);
