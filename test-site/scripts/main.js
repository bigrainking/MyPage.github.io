// 选择img标签
let myImg = document.querySelector("img");

// 点击事件实现替换图片源
myImg.onclick = function(){
    let imgSrc = myImg.getAttribute('src');
    if (imgSrc === "images/apple.jpg"){
        myImg.setAttribute('src', "images/Eeyore.jpg");
    }else{
        myImg.setAttribute('src', "images/apple.jpg");
    }
}

// 增加修改用户账户功能

// 获取按钮and H1
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// 设置个性化欢迎信息
function setUserName(){
    let username = prompt("请输入你的用户名");
    // 检查用户是否输入为空（直接点击确定）或者取消输入, 是则输入
    if (username === null || !username){
        setUserName();
    }
    localStorage.setItem('username', username); // 其他时候就可以通过username来获取
    myHeading.textContent = "oh！ my baby " + username;
}

// 查看用户是否在数据库里，确定打招呼
if (!localStorage.getItem('username')){

    setUserName();
}else{
    let storeName = localStorage.getItem('username');
    myHeading.textContent = "oh ! nice to see you again honey " + storeName
}

// 按钮点击事件
myButton.onclick = function(){
    setUserName();
}