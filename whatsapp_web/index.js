const listOfDis = [
  {
    id: 1,
    img: "./images/img1.jpg",
    name: "claude",
    time: "11:30",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: null,
  },
  {
    id: 2,
    img: "./images/img2.jpg",
    name: "Mel",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 3,
    img: "./images/img3.jpg",
    name: "Sego",
    time: "10:35",
    lasTText:
      "Lorem ipsum dolor sit Lorem Lorem, ipsum dolor Lorem ipsum dolor sit Lorem Lorem, ipsum doloripsum dolor Lorem ipsum dolor sit Lorem Lorem, ipsum dolor",
    unRead: 1,
  },
  {
    id: 4,
    img: "./images/img5.jpg",
    name: "Dilane",
    time: "10:30",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 5,
    img: "./images/img7.jpg",
    name: "Samy",
    time: " 09:35",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: null,
  },
  {
    id: 6,
    img: "./images/img2.jpg",
    name: "Daniel",
    time: " 09:20",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 4,
  },
  {
    id: 7,
    img: "./images/img8.jpg",
    name: "Rodrick",
    time: "11:35",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 8,
    img: "./images/img2.jpg",
    name: "Xavier",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 9,
    img: "./images/img3.jpg",
    name: "Dane",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 10,
    img: "./images/img9.jpg",
    name: "Juju",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: null,
  },
];

var messages = [
  {
    from: "sender",
    msg: "hi",
    time: "11:30",
  },
  {
    from: "sender",
    msg: "how you doing?",
    time: "11:30",
  },
  {
    from: "reciever",
    msg: "hey there",
    time: "11:35",
  },
  {
    from: "reciever",
    msg: "i'm very okay",
    time: "11:36",
  },
  {
    from: "reciever",
    msg: "what about you?",
    time: "11:35",
  },
  {
    from: "sender",
    msg: "pretty good too",
    time: "11:39",
  },
  {
    from: "reciever",
    msg: "Okay that's cool",
    time: "11:40",
  },
  {
    from: "sender",
    msg: "yeah",
    time: "11:42",
  },
  {
    from: "reciever",
    msg: "so let's say later right",
    time: "11:50",
  },
  {
    from: "sender",
    msg: "yeah later",
    time: "11:55",
  },
  {
    from: "sender",
    msg: "nice day",
    time: "11:55",
  },
  {
    from: "reciever",
    msg: "thank's you too",
    time: "11:58",
  },
];

var selectedId = null;

function createMessageDiv(from, msg, time) {
  var parent = document.createElement("div");
  parent.classList.add(from);

  var msgPar = document.createElement("p");
  msgPar.innerText = msg;

  var brk = document.createElement("br");

  var span = document.createElement("span");
  span.innerText = time;

  parent.appendChild(msgPar);
  parent.appendChild(brk);
  parent.appendChild(span);

  return parent;
}

function setDiscussion(id) {
  var chatBox = document.getElementById("chatBox");
  console.log(chatBox);
  messages.forEach((e) => {
    console.log(createMessageDiv(e.from, e.msg, e.time));
    chatBox.appendChild(createMessageDiv(e.from, e.msg, e.time));
  });
}

function selectDicussion(e) {
  e.preventDefault();
  id = parseInt(e.target.id.split(" ")[1]);
  var element = document.getElementById(e.target.id);

  var pickedUser = listOfDis.find((e) => e.id === id);
  var selectedUser = document.getElementById("selectedUser");
  selectedUser.innerText = pickedUser.name;

  var selectedProfPic = document.getElementById("selectedProfPic");
  selectedProfPic.src = pickedUser.img;

  if (selectedId === null) {
    var imgHolder = document.getElementById("imgHolder");
    imgHolder.style.height = "0%";
    imgHolder.style.opacity = "0";

    setTimeout(function () {
        const element = document.getElementById("imgHolder");
        element.remove();
    }, 400);

    selectedId = id;
    element.classList.add("chat_active");
    setDiscussion(id);
  }
  if (selectedId === id) {
    return;
  } else {
    var lastPicker = document.getElementById("chat " + selectedId);
    lastPicker.classList.remove("chat_active");
    selectedId = id;
    element.classList.add("chat_active");
    setDiscussion(id);
  }
}

function createRecntChatChart(id, img, name, time, msg, unRead) {
  var chatDiv = document.createElement("div");
  chatDiv.classList.add("chat");
  chatDiv.setAttribute("id", `chat ${id}`);

  var profileDiv = document.createElement("div");
  profileDiv.classList.add("profile");

  var imgDiv = document.createElement("img");
  imgDiv.classList.add("user");
  imgDiv.src = img;

  var detailDiv = document.createElement("div");
  detailDiv.classList.add("details");

  var nameDiv = document.createElement("div");
  nameDiv.classList.add("name");

  var msgDiv = document.createElement("div");
  msgDiv.classList.add("message");

  var namePar = document.createElement("p");
  namePar.innerText = time;
  namePar.style.color = "#C1BDB3";

  var nameH4 = document.createElement("h4");
  nameH4.innerText = name;

  var msgPar = document.createElement("p");

  msgPar.innerText = msg;

  var msgBold = document.createElement("b");
  msgBold.innerText = unRead ?? "";

  nameDiv.append(nameH4);
  nameDiv.append(namePar);

  msgDiv.append(msgPar);

  if (unRead != null && unRead != undefined && unRead != 0) {
    msgDiv.append(msgBold);
  }

  profileDiv.append(imgDiv);

  detailDiv.append(nameDiv);
  detailDiv.append(msgDiv);

  chatDiv.append(profileDiv);
  chatDiv.append(detailDiv);
  chatDiv.addEventListener("click", selectDicussion);

  return chatDiv;
}

var chatList = document.getElementById("chatList");

listOfDis.forEach((e) => {
  chatList.append(
    createRecntChatChart(e.id, e.img, e.name, e.time, e.lasTText, e.unRead)
  );
});
