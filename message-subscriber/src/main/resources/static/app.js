// const { connection } = require("websocket");

$(document).ready(function(){
    var websocket = null;
    var username = null;

    $("#disconnect").on("click", (e) => {
        disconnect();
    })
    
    $("#msgSend").on("click", (e) => {
        send();
    });

    $('#connect').on("click", (e) => {
        connect();
    })

    function connect(){
        console.log("test");
        websocket = new WebSocket("ws://localhost:50051/ws/chat", "roomId");
        
        websocket.onmessage = onMessage;
        websocket.onopen = onOpen;
        websocket.onclose = onClose;
    } 
    
    function send(){
        let msg = document.getElementById("msg");
        var username = $("#name").val();
        console.log(username + ":" + msg.value);
        websocket.send(username + ":" + msg.value);
        msg.value = '';
    }
    
    //채팅창에서 나갔을 때
    function onClose(evt) {
        var username = $("#name").val();
        var str = username + ": 님이 방을 나가셨습니다.";
        websocket.send(str);
    }
    
    //채팅창에 들어왔을 때
    function onOpen(evt) {
        var username = $("#name").val();
        var str = username + ": 님이 입장하셨습니다.";
        websocket.send(str);
    }

    function onMessage(msg) {
        var data = msg.data;
        var sessionId = null;
        //데이터를 보낸 사람
        var message = null;
        var arr = data.split(":");

        for(var i=0; i<arr.length; i++){
            console.log('arr[' + i + ']: ' + arr[i]);
        }

        var cur_session = username;

        //현재 세션에 로그인 한 사람
        console.log("cur_session : " + cur_session);
        sessionId = arr[0];
        message = arr[1];

        console.log("sessionID : " + sessionId);
        console.log("cur_session : " + cur_session);

        //로그인 한 클라이언트와 타 클라이언트를 분류하기 위함
        if(sessionId == cur_session){
            var str = "<div class='col-6'>";
            str += "<div class='alert alert-secondary'>";
            str += "<b>" + sessionId + " : " + message + "</b>";
            str += "</div></div>";
            $("#msgArea").append(str);
        }
        else{
            var str = "<div class='col-6'>";
            str += "<div class='alert alert-warning'>";
            str += "<b>" + sessionId + " : " + message + "</b>";
            str += "</div></div>";
            $("#msgArea").append(str);
        }
    }
})