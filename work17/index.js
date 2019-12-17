var inputs = document.getElementsByTagName('input');
//为每个input框添加失去焦点事件
for (var i = 0; i < inputs.length - 1; ++i){
    inputs[i].onblur = inputBlur;
} 
function inputBlur() {
    var name = this.name;
    var val = this.value;
    var tips = this.placeholder;
    var tips_obj = this.parentNode.nextElementSibling;
//去点两端空白字符
    val = val.trim();
//空的文本框出现的提示
    if(!val) {
        error(tips_obj, '输入框不能为空');
        return false;
    }
//获取匹配信息和提示
    var reg_msg = getRegMSg(name, tips);
//检查石佛符合正则规律
    if(reg_msg['reg'].test(val)){
//匹配成功，出现的提示
        success(tips_obj, reg_msg['msg']['success']);
    }else{
//匹配失败，出现的提示
        error(tips_obj, reg_msg['msg']['error']);
    }
}
//根据input的name的值，设置正则规律及提示信息
function getRegMSg(name, tips) {
    var reg = msg = '';
    switch (name) {
        case 'username':
            reg = /^[a-zA-Z]{4,12}$/;
            msg = {'success':'用户名输入正确', 'error': tips};
            break;
        case 'pwd':
            reg = /^\w{6,20}$/;
            msg = {'success':'密码输入正确', 'error': tips};
            break;
        case 'repwd':
            var con = document.getElementsByTagName('input')[1].value;
            reg = RegExp("^" + con + "$");
            msg = {'success':'两次密码输入正确', 'error': '两次输入的密码不一致'};
            break;
        case 'tel':
            reg = /^1[34578]\d{9}$/;
            msg = {'success': '手机号输入正确', 'error': tips};
            break;
        case 'email':
            reg = /^(\w+(\_|\-|\.)*)+@(\w+(\-)?)+(\.\w{2,})+$/;
            msg = {'success': '邮箱输入正确', 'error': tips};
            break;
        }
        return {'reg': reg, 'msg': msg};
}
//
function success(obj, msg) {
    obj.className = 'success';
    obj.innerHTML = msg;
}
//
function error(obj, msg) {
    obj.className = 'error';
    obj.innerHTML = msg + ', 请重新输入';
}