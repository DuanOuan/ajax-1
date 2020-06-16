gitHTML.onclick = () => {
    const request = new XMLHttpRequest(); //创建 XMLHttpReques 对象
    request.open("GET", "/1.html"); //调用open()方法 获取html数据
    request.onreadystatechange = () => {    //监听对象的onreadystatechange事件
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement("div");
                div.innerHTML = request.response
                document.body.appendChild(div);
            } else {
                alert("加载HTML失败")
            }
        }
    };
    request.send(); //发送请求
};
gitJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement("script");
                script.innerHTML = request.response;
                document.body.appendChild(script);
            } else {
                alert("加载JS失败")
            }
        }
    };
    request.send();
};