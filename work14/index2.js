let sj=new Date()
let fen=miao=0
 //倒计时
fen=59-sj.getMinutes() //分钟
 miao=59-sj.getSeconds()//秒钟
let id1 =setInterval(seckill,1000)
function seckill() {
    miao--
    if(miao==-1){
       miao=59
       fen-=1
    }
    else if(fen==-1){
       fen=59
    }
    document.getElementById('fen').innerHTML = fen +'分'
    document.getElementById('miao').innerHTML = miao +'秒'
}