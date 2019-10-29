//猴子选大王代码
function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for (let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}

//待统计字符串代码


function stat(){
    let str = document.getElementById("str").value
    let obj = {}
    let num= str.split('').sort()
    obj= num.reduce((zimu, i) => {zimu[i] ? ++zimu[i] : zimu[i] = 1;return zimu}, {})
    document.getElementById('result').innerText = JSON.stringify(obj)
}















/*function stst(){
    let str = document.getElementById("str").value
    let obj = {}
    str = parseInt(str) && Number(str)
    let str = str.split("")
    str = str.sort()
	for(i = 0; i < str.length; i++)
	{
		key = str[i];
 
		if(obj[key])
		{
			//对象中有这个字母
			obj[key]++;
		}
		else
		{
			//对象中没有这个字母,把字母加到对象中
			obj[key] = 1;
		}
	}
 
	for(var key in obj) //遍历这个对象
	{
        console.log(key + "这个字母出现了" + obj[key] + "次");
	}
    document.getElementById('result').innerText = JSON.stringify(obj)
}*/