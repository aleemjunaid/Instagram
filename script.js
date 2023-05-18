// Sugesstion Start
let changeFollow = document.querySelector(".changeFollow");
let changeFollowing = document.querySelector(".changeFollowing");
changeFollow.addEventListener("click", () => {
  changeFollow.classList.add("display-n");
  changeFollowing.classList.add("display-b");
});
changeFollowing.addEventListener("click", () => {
  changeFollowing.classList.remove("display-b");
  changeFollow.classList.remove("display-n");
});
let changeFollow2 = document.querySelector(".changeFollow2");
let changeFollowing2 = document.querySelector(".changeFollowing2");
changeFollow2.addEventListener("click", () => {
  changeFollow2.classList.add("display-n");
  changeFollowing2.classList.add("display-b");
});
changeFollowing2.addEventListener("click", () => {
  changeFollowing2.classList.remove("display-b");
  changeFollow2.classList.remove("display-n");
});
let changeFollow3 = document.querySelector(".changeFollow3");
let changeFollowing3 = document.querySelector(".changeFollowing3");
changeFollow3.addEventListener("click", () => {
  changeFollow3.classList.add("display-n");
  changeFollowing3.classList.add("display-b");
});
changeFollowing3.addEventListener("click", () => {
  changeFollowing3.classList.remove("display-b");
  changeFollow3.classList.remove("display-n");
});
let changeFollow4 = document.querySelector(".changeFollow4");
let changeFollowing4 = document.querySelector(".changeFollowing4");
changeFollow4.addEventListener("click", () => {
  changeFollow4.classList.add("display-n");
  changeFollowing4.classList.add("display-b");
});
changeFollowing4.addEventListener("click", () => {
  changeFollowing4.classList.remove("display-b");
  changeFollow4.classList.remove("display-n");
});
let changeFollow5 = document.querySelector(".changeFollow5");
let changeFollowing5 = document.querySelector(".changeFollowing5");
changeFollow5.addEventListener("click", () => {
  changeFollow5.classList.add("display-n");
  changeFollowing5.classList.add("display-b");
});
changeFollowing5.addEventListener("click", () => {
  changeFollowing5.classList.remove("display-b");
  changeFollow5.classList.remove("display-n");
});

// Sugession end

// Story Start

/* Story One Start*/

let heart = document.querySelector("#heart");
let storyOne = document.querySelector("#storyOne");
let storyOneEdit = document.querySelector("#storyOneEdit");
let crossStoryOne = document.querySelector("#crossStoryOne");
let storyOneInp = document.querySelector("#storyOneInp");
let sendMsg = document.querySelector("#sendMsg");
let gif = document.querySelector("#gif");
// let borderClass=document.querySelector('.lg')
let grow = 0;
let timeOut
let intervalOut
storyOneInp.addEventListener("click", () => {
  heart.style.display = "none";
  storyOneInp.style.width = "410px";
});
toggleSendMsg = () => {
  if (storyOneInp.value !== "") {
    sendMsg.style.display = "block";
  } else {
    sendMsg.style.display = "none";
  }
};
storyOneInp.addEventListener("keyup", toggleSendMsg);
sendMsg.addEventListener("click", () => {
  // alert('sent')
  heart.style.display = "block";
  storyOneInp.style.width = "384px";
  storyOneInp.value = "";
  sendMsg.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif.addEventListener("click", () => {
  heart.style.display = "block";
  storyOneInp.style.width = "384px";
  storyOneInp.value = "";
  sendMsg.style.display = "none";
});
crossStoryOne.addEventListener("click", () => {
  storyOneEdit.style.display = "flex";
  story_One.style.display = "none";
  grow=0
  clearTimeout(timeOut)
  clearInterval(intervalOut)
});
storyOne.addEventListener("click", () => {
  // alert('working')
  storyOneEdit.style.display = "none";
  story_One.style.display = "flex";
  timeOut = setTimeout(() => {
    storyOneEdit.style.display = "flex";
    story_One.style.display = "none";
  }, 5000);
  if (grow < 100) {
   intervalOut =  setInterval(() => {
      document.querySelector("#grow").style.width = `${grow++}%`;
    }, 50);
    storyOne.classList.remove("lg");
    storyOne.classList.add("lg2");
  } else {
    grow = 0;
  }
});
heart.addEventListener("click", () => {
  heart.classList.remove("heartwhite");
  heart.classList.toggle("heart");
});

/* Story One End */

/* Story Two Start*/

let heart2 = document.querySelector("#heart2");
let storyOne2 = document.querySelector("#storyTwo");
let story_One2 = document.querySelector("#story_Two");
let storyOneEdit2 = document.querySelector("#storyOneEdit");
let crossStoryOne2 = document.querySelector("#crossStoryOne2");
let storyOneInp2 = document.querySelector("#storyOneInp2");
let sendMsg2 = document.querySelector("#sendMsg2");
let gif2 = document.querySelector("#gif2");
let growtwo = 0;
let timeOut2
let intervalOut2
storyOneInp2.addEventListener("click", () => {
  heart2.style.display = "none";
  storyOneInp2.style.width = "410px";
});
toggleSendMsg2 = () => {
  if (storyOneInp2.value !== "") {
    sendMsg2.style.display = "block";
  } else {
    sendMsg2.style.display = "none";
  }
};
storyOneInp2.addEventListener("keyup", toggleSendMsg2);
sendMsg2.addEventListener("click", () => {
  // alert('sent')
  heart2.style.display = "block";
  storyOneInp2.style.width = "384px";
  storyOneInp2.value = "";
  sendMsg2.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif2.addEventListener("click", () => {
  heart2.style.display = "block";
  storyOneInp2.style.width = "384px";
  storyOneInp2.value = "";
  sendMsg2.style.display = "none";
});
crossStoryOne2.addEventListener("click", () => {
  storyOneEdit2.style.display = "flex";
  story_One2.style.display = "none";
  growtwo=0
  clearTimeout(timeOut2)
  clearInterval(intervalOut2)
});
storyOne2.addEventListener("click", () => {
  // alert('working')
  storyOneEdit2.style.display = "none";
  story_One2.style.display = "flex";
  timeOut2 = setTimeout(() => {
    storyOneEdit2.style.display = "flex";
    story_One2.style.display = "none";
  }, 5000);
  if (growtwo < 100) {
   intervalOut2 =  setInterval(() => {
      document.querySelector("#grow2").style.width = `${growtwo++}%`;
    }, 50);
    storyOne2.classList.remove("lg");
    storyOne2.classList.add("lg2");
  } else {
    growtwo = 0;
  }
});
heart2.addEventListener("click", () => {
  heart2.classList.remove("heartwhite");
  heart2.classList.toggle("heart");
});

/* Story Two End */

/* Story Three Start*/

let heart3 = document.querySelector("#heart3");
let storyOne3 = document.querySelector("#storyThree");
let story_One3 = document.querySelector("#story_Three");
let storyOneEdit3 = document.querySelector("#storyOneEdit");
let crossStoryOne3 = document.querySelector("#crossStoryOne3");
let storyOneInp3 = document.querySelector("#storyOneInp3");
let sendMsg3 = document.querySelector("#sendMsg3");
let gif3 = document.querySelector("#gif3");
let growthree = 0;
let timeOut3
let intervalOut3
storyOneInp3.addEventListener("click", () => {
  heart3.style.display = "none";
  storyOneInp3.style.width = "410px";
});
toggleSendMsg3 = () => {
  if (storyOneInp3.value !== "") {
    sendMsg3.style.display = "block";
  } else {
    sendMsg3.style.display = "none";
  }
};
storyOneInp3.addEventListener("keyup", toggleSendMsg3);
sendMsg3.addEventListener("click", () => {
  // alert('sent')
  heart3.style.display = "block";
  storyOneInp3.style.width = "384px";
  storyOneInp3.value = "";
  sendMsg3.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif3.addEventListener("click", () => {
  heart3.style.display = "block";
  storyOneInp3.style.width = "384px";
  storyOneInp3.value = "";
  sendMsg3.style.display = "none";
});
crossStoryOne3.addEventListener("click", () => {
  storyOneEdit3.style.display = "flex";
  story_One3.style.display = "none";
  growthree=0
  clearTimeout(timeOut3)
  clearInterval(intervalOut3)
});
storyOne3.addEventListener("click", () => {
  // alert('working')
  storyOneEdit3.style.display = "none";
  story_One3.style.display = "flex";
  timeOut3 = setTimeout(() => {
    storyOneEdit3.style.display = "flex";
    story_One3.style.display = "none";
  }, 5000);
  if (growthree < 100) {
    intervalOut3 = setInterval(() => {
      document.querySelector("#grow3").style.width = `${growthree++}%`;
    }, 50);
    storyOne3.classList.remove("lg");
    storyOne3.classList.add("lg2");
  } else {
    growthree = 0;
  }
});
heart3.addEventListener("click", () => {
  heart3.classList.remove("heartwhite");
  heart3.classList.toggle("heart");
});

/* Story Three End */

/* Story Four Start*/

let heart4 = document.querySelector("#heart4");
let storyOne4 = document.querySelector("#storyFour");
let story_One4 = document.querySelector("#story_Four");
let storyOneEdit4 = document.querySelector("#storyOneEdit");
let crossStoryOne4 = document.querySelector("#crossStoryOne4");
let storyOneInp4 = document.querySelector("#storyOneInp4");
let sendMsg4 = document.querySelector("#sendMsg4");
let gif4 = document.querySelector("#gif4");
let growfour = 0;
let timeOut4
let intervalOut4
storyOneInp4.addEventListener("click", () => {
  heart4.style.display = "none";
  storyOneInp4.style.width = "410px";
});
toggleSendMsg4 = () => {
  if (storyOneInp4.value !== "") {
    sendMsg4.style.display = "block";
  } else {
    sendMsg4.style.display = "none";
  }
};
storyOneInp4.addEventListener("keyup", toggleSendMsg4);
sendMsg4.addEventListener("click", () => {
  // alert('sent')
  heart4.style.display = "block";
  storyOneInp4.style.width = "384px";
  storyOneInp4.value = "";
  sendMsg4.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif4.addEventListener("click", () => {
  heart4.style.display = "block";
  storyOneInp4.style.width = "384px";
  storyOneInp4.value = "";
  sendMsg4.style.display = "none";
});
crossStoryOne4.addEventListener("click", () => {
  storyOneEdit4.style.display = "flex";
  story_One4.style.display = "none";
  growfour=0
  clearTimeout(timeOut4)
  clearInterval(intervalOut4)
});
storyOne4.addEventListener("click", () => {
  // alert('working')
  storyOneEdit4.style.display = "none";
  story_One4.style.display = "flex";
  timeOut4 = setTimeout(() => {
    storyOneEdit4.style.display = "flex";
    story_One4.style.display = "none";
  }, 5000);
  if (growfour < 100) {
   intervalOut4 = setInterval(() => {
      document.querySelector("#grow4").style.width = `${growfour++}%`;
    }, 50);
    storyOne4.classList.remove("lg");
    storyOne4.classList.add("lg2");
  } else {
    growfour = 0;
  }
});
heart4.addEventListener("click", () => {
  heart4.classList.remove("heartwhite");
  heart4.classList.toggle("heart");
});

/* Story Four End */

/* Story Five Start*/

let heart5 = document.querySelector("#heart5");
let storyOne5 = document.querySelector("#storyFive");
let story_One5 = document.querySelector("#story_Five");
let storyOneEdit5 = document.querySelector("#storyOneEdit");
let crossStoryOne5 = document.querySelector("#crossStoryOne5");
let storyOneInp5 = document.querySelector("#storyOneInp5");
let sendMsg5 = document.querySelector("#sendMsg5");
let gif5 = document.querySelector("#gif5");
let growfive = 0;
let timeOut5
let intervalOut5
storyOneInp5.addEventListener("click", () => {
  heart5.style.display = "none";
  storyOneInp5.style.width = "410px";
});
toggleSendMsg5 = () => {
  if (storyOneInp5.value !== "") {
    sendMsg5.style.display = "block";
  } else {
    sendMsg5.style.display = "none";
  }
};
storyOneInp5.addEventListener("keyup", toggleSendMsg5);
sendMsg5.addEventListener("click", () => {
  // alert('sent')
  heart5.style.display = "block";
  storyOneInp5.style.width = "384px";
  storyOneInp5.value = "";
  sendMsg5.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif5.addEventListener("click", () => {
  heart5.style.display = "block";
  storyOneInp5.style.width = "384px";
  storyOneInp5.value = "";
  sendMsg5.style.display = "none";
});
crossStoryOne5.addEventListener("click", () => {
  storyOneEdit5.style.display = "flex";
  story_One5.style.display = "none";
  growfive=0
  clearTimeout(timeOut5)
  clearInterval(intervalOut5)
});
storyOne5.addEventListener("click", () => {
  // alert('working')
  storyOneEdit5.style.display = "none";
  story_One5.style.display = "flex";
  timeOut5 = setTimeout(() => {
    storyOneEdit5.style.display = "flex";
    story_One5.style.display = "none";
  }, 5000);
  if (growfive < 100) {
   intervalOut5 = setInterval(() => {
      document.querySelector("#grow5").style.width = `${growfive++}%`;
    }, 50);
    storyOne5.classList.remove("lg");
    storyOne5.classList.add("lg2");
  } else {
    growfive = 0;
  }
});
heart5.addEventListener("click", () => {
  heart5.classList.remove("heartwhite");
  heart5.classList.toggle("heart");
});

/* Story Five End */

/* Story Six Start*/

let heart6 = document.querySelector("#heart6");
let storyOne6 = document.querySelector("#storySix");
let story_One6 = document.querySelector("#story_Six");
let storyOneEdit6 = document.querySelector("#storyOneEdit");
let crossStoryOne6 = document.querySelector("#crossStoryOne6");
let storyOneInp6 = document.querySelector("#storyOneInp6");
let sendMsg6 = document.querySelector("#sendMsg6");
let gif6 = document.querySelector("#gif6");
let growsix = 0;
let timeOut6
let intervalOut6
storyOneInp6.addEventListener("click", () => {
  heart6.style.display = "none";
  storyOneInp6.style.width = "410px";
});
toggleSendMsg6 = () => {
  if (storyOneInp6.value !== "") {
    sendMsg6.style.display = "block";
  } else {
    sendMsg6.style.display = "none";
  }
};
storyOneInp6.addEventListener("keyup", toggleSendMsg6);
sendMsg6.addEventListener("click", () => {
  // alert('sent')
  heart6.style.display = "block";
  storyOneInp6.style.width = "384px";
  storyOneInp6.value = "";
  sendMsg6.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif6.addEventListener("click", () => {
  heart6.style.display = "block";
  storyOneInp6.style.width = "384px";
  storyOneInp6.value = "";
  sendMsg6.style.display = "none";
});
crossStoryOne6.addEventListener("click", () => {
  storyOneEdit6.style.display = "flex";
  story_One6.style.display = "none";
  growsix=0
  clearTimeout(timeOut6)
  clearInterval(intervalOut6)
});
storyOne6.addEventListener("click", () => {
  // alert('working')
  storyOneEdit6.style.display = "none";
  story_One6.style.display = "flex";
  timeOut6 = setTimeout(() => {
    storyOneEdit6.style.display = "flex";
    story_One6.style.display = "none";
  }, 5000);
  if (growsix < 100) {
   intervalOut6 = setInterval(() => {
      document.querySelector("#grow6").style.width = `${growsix++}%`;
    }, 50);
    storyOne6.classList.remove("lg");
    storyOne6.classList.add("lg2");
  } else {
    growsix = 0;
  }
});
heart6.addEventListener("click", () => {
  heart6.classList.remove("heartwhite");
  heart6.classList.toggle("heart");
});

/* Story Six End */

/* Story Seven Start*/

let heart7 = document.querySelector("#heart7");
let storyOne7 = document.querySelector("#storySeven");
let story_One7 = document.querySelector("#story_Seven");
let storyOneEdit7 = document.querySelector("#storyOneEdit");
let crossStoryOne7 = document.querySelector("#crossStoryOne7");
let storyOneInp7 = document.querySelector("#storyOneInp7");
let sendMsg7 = document.querySelector("#sendMsg7");
let gif7 = document.querySelector("#gif7");
let growseven = 0;
let timeOut7
let intervalOut7
storyOneInp7.addEventListener("click", () => {
  heart7.style.display = "none";
  storyOneInp7.style.width = "410px";
});
toggleSendMsg7 = () => {
  if (storyOneInp7.value !== "") {
    sendMsg7.style.display = "block";
  } else {
    sendMsg7.style.display = "none";
  }
};
storyOneInp7.addEventListener("keyup", toggleSendMsg7);
sendMsg7.addEventListener("click", () => {
  // alert('sent')
  heart7.style.display = "block";
  storyOneInp7.style.width = "384px";
  storyOneInp7.value = "";
  sendMsg7.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif7.addEventListener("click", () => {
  heart7.style.display = "block";
  storyOneInp7.style.width = "384px";
  storyOneInp7.value = "";
  sendMsg7.style.display = "none";
});
crossStoryOne7.addEventListener("click", () => {
  storyOneEdit7.style.display = "flex";
  story_One7.style.display = "none";
  growseven=0
  clearTimeout(timeOut7)
  clearInterval(intervalOut7)
});
storyOne7.addEventListener("click", () => {
  // alert('working')
  storyOneEdit7.style.display = "none";
  story_One7.style.display = "flex";
  timeOut7 = setTimeout(() => {
    storyOneEdit7.style.display = "flex";
    story_One7.style.display = "none";
  }, 5000);
  if (growseven < 100) {
   intervalOut7 = setInterval(() => {
      document.querySelector("#grow7").style.width = `${growseven++}%`;
    }, 50);
    storyOne7.classList.remove("lg");
    storyOne7.classList.add("lg2");
  } else {
    growseven = 0;
  }
});
heart7.addEventListener("click", () => {
  heart7.classList.remove("heartwhite");
  heart7.classList.toggle("heart");
});

/* Story Seven End */

/* Story Eight Start*/

let heart8 = document.querySelector("#heart8");
let storyOne8 = document.querySelector("#storyEight");
let story_One8 = document.querySelector("#story_Eight");
let storyOneEdit8 = document.querySelector("#storyOneEdit");
let crossStoryOne8 = document.querySelector("#crossStoryOne8");
let storyOneInp8 = document.querySelector("#storyOneInp8");
let sendMsg8 = document.querySelector("#sendMsg8");
let gif8 = document.querySelector("#gif8");
let groweight = 0;
let timeOut8
let intervalOut8
storyOneInp8.addEventListener("click", () => {
  heart8.style.display = "none";
  storyOneInp8.style.width = "410px";
});
toggleSendMsg8 = () => {
  if (storyOneInp8.value !== "") {
    sendMsg8.style.display = "block";
  } else {
    sendMsg8.style.display = "none";
  }
};
storyOneInp8.addEventListener("keyup", toggleSendMsg8);
sendMsg8.addEventListener("click", () => {
  // alert('sent')
  heart8.style.display = "block";
  storyOneInp8.style.width = "384px";
  storyOneInp8.value = "";
  sendMsg8.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif8.addEventListener("click", () => {
  heart8.style.display = "block";
  storyOneInp8.style.width = "384px";
  storyOneInp8.value = "";
  sendMsg8.style.display = "none";
});
crossStoryOne8.addEventListener("click", () => {
  storyOneEdit8.style.display = "flex";
  story_One8.style.display = "none";
  groweight=0
  clearTimeout(timeOut8)
  clearInterval(intervalOut8)
});
storyOne8.addEventListener("click", () => {
  // alert('working')
  storyOneEdit8.style.display = "none";
  story_One8.style.display = "flex";
  timeOut8 =  setTimeout(() => {
    storyOneEdit8.style.display = "flex";
    story_One8.style.display = "none";
  }, 5000);
  if (groweight < 100) {
    intervalOut8 = setInterval(() => {
      document.querySelector("#grow8").style.width = `${groweight++}%`;
    }, 50);
    storyOne8.classList.remove("lg");
    storyOne8.classList.add("lg2");
  } else {
    groweight = 0;
  }
});
heart8.addEventListener("click", () => {
  heart8.classList.remove("heartwhite");
  heart8.classList.toggle("heart");
});

/* Story Eight End */

/* Story Nine Start*/

let heart9 = document.querySelector("#heart9");
let storyOne9 = document.querySelector("#storyNine");
let story_One9 = document.querySelector("#story_Nine");
let storyOneEdit9 = document.querySelector("#storyOneEdit");
let crossStoryOne9 = document.querySelector("#crossStoryOne9");
let storyOneInp9 = document.querySelector("#storyOneInp9");
let sendMsg9 = document.querySelector("#sendMsg9");
let gif9 = document.querySelector("#gif9");
let grownine = 0;
let timeOut9
let intervalOut9
storyOneInp9.addEventListener("click", () => {
  heart9.style.display = "none";
  storyOneInp9.style.width = "410px";
});
toggleSendMsg9 = () => {
  if (storyOneInp9.value !== "") {
    sendMsg9.style.display = "block";
  } else {
    sendMsg9.style.display = "none";
  }
};
storyOneInp9.addEventListener("keyup", toggleSendMsg9);
sendMsg9.addEventListener("click", () => {
  // alert('sent')
  heart9.style.display = "block";
  storyOneInp9.style.width = "384px";
  storyOneInp9.value = "";
  sendMsg9.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif9.addEventListener("click", () => {
  heart9.style.display = "block";
  storyOneInp9.style.width = "384px";
  storyOneInp9.value = "";
  sendMsg9.style.display = "none";
});
crossStoryOne9.addEventListener("click", () => {
  storyOneEdit9.style.display = "flex";
  story_One9.style.display = "none";
  grownine=0
  clearTimeout(timeOut9)
  clearInterval(intervalOut9)
});
storyOne9.addEventListener("click", () => {
  // alert('working')
  storyOneEdit9.style.display = "none";
  story_One9.style.display = "flex";
  timeOut9 = setTimeout(() => {
    storyOneEdit9.style.display = "flex";
    story_One9.style.display = "none";
  }, 5000);
  if (grownine < 100) {
    intervalOut9 =  setInterval(() => {
      document.querySelector("#grow9").style.width = `${grownine++}%`;
    }, 50);
    storyOne9.classList.remove("lg");
    storyOne9.classList.add("lg2");
  } else {
    grownine = 0;
  }
});
heart9.addEventListener("click", () => {
  heart9.classList.remove("heartwhite");
  heart9.classList.toggle("heart");
});

/* Story Nine End */

/* Story Ten Start*/

let heart10 = document.querySelector("#heart10");
let storyOne10 = document.querySelector("#storyTen");
let story_One10 = document.querySelector("#story_Ten");
let storyOneEdit10 = document.querySelector("#storyOneEdit");
let crossStoryOne10 = document.querySelector("#crossStoryOne10");
let storyOneInp10 = document.querySelector("#storyOneInp10");
let sendMsg10 = document.querySelector("#sendMsg10");
let gif10 = document.querySelector("#gif10");
let growten = 0;
let timeOut10
let intervalOut10
storyOneInp10.addEventListener("click", () => {
  heart10.style.display = "none";
  storyOneInp10.style.width = "410px";
});
toggleSendMsg10 = () => {
  if (storyOneInp10.value !== "") {
    sendMsg10.style.display = "block";
  } else {
    sendMsg10.style.display = "none";
  }
};
storyOneInp10.addEventListener("keyup", toggleSendMsg10);
sendMsg10.addEventListener("click", () => {
  // alert('sent')
  heart10.style.display = "block";
  storyOneInp10.style.width = "384px";
  storyOneInp10.value = "";
  sendMsg10.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif10.addEventListener("click", () => {
  heart10.style.display = "block";
  storyOneInp10.style.width = "384px";
  storyOneInp10.value = "";
  sendMsg10.style.display = "none";
});
crossStoryOne10.addEventListener("click", () => {
  storyOneEdit10.style.display = "flex";
  story_One10.style.display = "none";
  growten=0
  clearTimeout(timeOut10)
  clearInterval(intervalOut10)
});
storyOne10.addEventListener("click", () => {
  // alert('working')
  storyOneEdit10.style.display = "none";
  story_One10.style.display = "flex";
  timeOut10 = setTimeout(() => {
    storyOneEdit10.style.display = "flex";
    story_One10.style.display = "none";
  }, 5000);
  if (growten < 100) {
    intervalOut10 = setInterval(() => {
      document.querySelector("#grow10").style.width = `${growten++}%`;
    }, 50);
    storyOne10.classList.remove("lg");
    storyOne10.classList.add("lg2");
  } else {
    growten = 0;
  }
});
heart10.addEventListener("click", () => {
  heart10.classList.remove("heartwhite");
  heart10.classList.toggle("heart");
});

/* Story Ten End */

/* Story Eleven Start*/

let heart11 = document.querySelector("#heart11");
let storyOne11 = document.querySelector("#storyEleven");
let story_One11 = document.querySelector("#story_Eleven");
let storyOneEdit11 = document.querySelector("#storyOneEdit");
let crossStoryOne11 = document.querySelector("#crossStoryOne11");
let storyOneInp11 = document.querySelector("#storyOneInp11");
let sendMsg11 = document.querySelector("#sendMsg11");
let gif11 = document.querySelector("#gif11");
let groweleven = 0;
let timeOut11
let intervalOut11
storyOneInp11.addEventListener("click", () => {
  heart11.style.display = "none";
  storyOneInp11.style.width = "410px";
});
toggleSendMsg11 = () => {
  if (storyOneInp11.value !== "") {
    sendMsg11.style.display = "block";
  } else {
    sendMsg11.style.display = "none";
  }
};
storyOneInp11.addEventListener("keyup", toggleSendMsg11);
sendMsg11.addEventListener("click", () => {
  // alert('sent')
  heart11.style.display = "block";
  storyOneInp11.style.width = "384px";
  storyOneInp11.value = "";
  sendMsg11.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif11.addEventListener("click", () => {
  heart11.style.display = "block";
  storyOneInp11.style.width = "384px";
  storyOneInp11.value = "";
  sendMsg11.style.display = "none";
});
crossStoryOne11.addEventListener("click", () => {
  storyOneEdit11.style.display = "flex";
  story_One11.style.display = "none";
  groweleven=0
  clearTimeout(timeOut11)
  clearInterval(intervalOut11)
});
storyOne11.addEventListener("click", () => {
  // alert('working')
  storyOneEdit11.style.display = "none";
  story_One11.style.display = "flex";
  timeOut11 =  setTimeout(() => {
    storyOneEdit11.style.display = "flex";
    story_One11.style.display = "none";
  }, 5000);
  if (groweleven < 100) {
    intervalOut11 = setInterval(() => {
      document.querySelector("#grow11").style.width = `${groweleven++}%`;
    }, 50);
    storyOne11.classList.remove("lg");
    storyOne11.classList.add("lg2");
  } else {
    groweleven = 0;
  }
});
heart11.addEventListener("click", () => {
  heart11.classList.remove("heartwhite");
  heart11.classList.toggle("heart");
});

/* Story Eleven End */

/* Story Twelve Start*/

let heart12 = document.querySelector("#heart11");
let storyOne12 = document.querySelector("#storyTwelve");
let story_One12 = document.querySelector("#story_Twelve");
let storyOneEdit12 = document.querySelector("#storyOneEdit");
let crossStoryOne12 = document.querySelector("#crossStoryOne12");
let storyOneInp12 = document.querySelector("#storyOneInp12");
let sendMsg12 = document.querySelector("#sendMsg12");
let gif12 = document.querySelector("#gif12");
let growtwelve = 0;
let timeOut12
let intervalOut12
storyOneInp12.addEventListener("click", () => {
  heart12.style.display = "none";
  storyOneInp12.style.width = "410px";
});
toggleSendMsg12 = () => {
  if (storyOneInp12.value !== "") {
    sendMsg12.style.display = "block";
  } else {
    sendMsg12.style.display = "none";
  }
};
storyOneInp12.addEventListener("keyup", toggleSendMsg12);
sendMsg12.addEventListener("click", () => {
  // alert('sent')
  heart12.style.display = "block";
  storyOneInp12.style.width = "384px";
  storyOneInp12.value = "";
  sendMsg12.style.display = "none";
});
// storyOneInp.addEventListener('change',toggleSendMsg)
gif12.addEventListener("click", () => {
  heart12.style.display = "block";
  storyOneInp12.style.width = "384px";
  storyOneInp12.value = "";
  sendMsg12.style.display = "none";
});
crossStoryOne12.addEventListener("click", () => {
  storyOneEdit12.style.display = "flex";
  story_One12.style.display = "none";
  growtwelve=0
  clearTimeout(timeOut12)
  clearInterval(intervalOut12)
});
storyOne12.addEventListener("click", () => {
  // alert('working')
  storyOneEdit12.style.display = "none";
  story_One12.style.display = "flex";
  timeOut12 = setTimeout(() => {
    storyOneEdit12.style.display = "flex";
    story_One12.style.display = "none";
  }, 5000);
  if (growtwelve < 100) {
    intervalOut12 = setInterval(() => {
      document.querySelector("#grow12").style.width = `${growtwelve++}%`;
    }, 50);
    storyOne12.classList.remove("lg");
    storyOne12.classList.add("lg2");
  } else {
    groweleven = 0;
  }
});
heart12.addEventListener("click", () => {
  heart12.classList.remove("heartwhite");
  heart12.classList.toggle("heart");
});

/* Story Twelve End */

// Stories End

// Main Posts Start
let arr2;
let arr = [
  {
    logo: "./imran Khan (1).jpg",
    name: "imrankhan.pti",
    location: "Zaman Park,Lahore.",
    img: "./imrankhanpost.jpg",
    likes: "800,000 likes",
    time: "2h ago",
    title: "Will be Live around 11:15 PM",
    id: 1,
    Comments:'View all 23,000 comments'
  },
  {
    logo: "./ronaldologo.jpg",
    name: "cristiano",
    location: "Portugal",
    img: "./ronaldopost.jpg",
    likes: "4,800,000 likes",
    time: "16h ago",
    title: "Great team performance - we keep pushing forward 💪🏽",
    id: 2,
    Comments:'View all 13,000 comments'
  },
  {
    logo: "./lambo.jpg",
    name: "lamborghini",
    location: "uk",
    img: "./lamopost.jpg",
    likes: "515,100 likes",
    time: "10h ago",
    title:"Even inside a videogame like @forzahorizonofficial our Super Sports Cars",
    id: 3,
    Comments:'View all 123,000 comments'
  },
  {
    logo: "./audi logo.jpg",
    name: "audi_de",
    location: "germany",
    img: "./audi post (1).jpg",
    likes: "8,800,000 likes",
    time: "23h ago",
    title: "Audi R8 GT",
    id: 4,
    Comments:'View all 63,000 comments'
  },
  {
    logo: "./nitegologo.jpg",
    name: "natgeo",
    location: "africa",
    img: "./lion.jpg",
    likes: "900,000 likes",
    time: "3h ago",
    title: "#King",
    id: 5,
    Comments:'View all 13,000 comments'
  },
  {
    logo: "./me.jpg",
    name: "aleem._.junaid",
    location: "~♥ iN yOur heArt ♥~",
    img: "./aleem.jpg",
    likes: "740 likes",
    time: "13w ago",
    title: "𝐓𝐡𝐞 𝐋𝐞𝐬𝐬 𝐘𝐨𝐮 𝐓𝐞𝐥𝐥💯,𝐓𝐡𝐞 𝐌𝐨𝐫𝐞 𝐓𝐡𝐞𝐲 𝐖𝐨𝐧𝐝𝐞𝐫🤔.",
    id: 6,
    Comments:'View all 3,000 comments'
  },
  {
    logo: "./babar logo (1).jpg",
    name: "babarazam",
    location: "Lahore",
    img: "./babar.jpg",
    likes: "501,218 likes",
    time: "24h ago",
    title: "Good start to my #Zalmi journey.💛",
    id: 7,
    Comments:'View all 203,000 comments'
  },
  {
    logo: "./ferrairi.jpg",
    name: "ferrari",
    location: "Nürburgring",
    img: "./ferraaripost.jpg",
    likes: "291,140 likes",
    time: "5d ago",
    title:"A sunny day completes the vibe of the #FerrariDaytonaSP3 on the track",
    id: 8,
    Comments:'View all 263,000 comments'
  },
  {
    logo: "./bmw.jpg",
    name: "bmwdeutschland",
    location: "Canada",
    img: "./bmw post.jpg",
    likes: "901,218 likes",
    time: "6h ago",
    title: "Performance aus jedem Blickwinkel. Der BMW M4 CSL.",
    id: 9,
    Comments:'View all 423,000 comments',
  },
  {
    logo: "./PURPLR logo.jpg",
    name: "rollsroycecars",
    location: "london",
    img: "./rollsroycepost.jpg",
    likes: "401,218 likes",
    time: "1h ago",
    title:"It is a spacious sanctum to gather ones thoughts. Little disturbs the peace found within its confines.",
    id: 10,
    Comments:'View all 600,000 comments',
    value: 0,
  },
];
console.log(arr);
showPosts = () => {
  let containerShow = document.querySelector("#containerShow");
  containerShow.innerHTML = "";
  let containerDiv = document.createElement("div");
  arr.map((item) => {
    containerDiv.innerHTML += `
        <div class="w-[100%] mb-4 flex flex-col items-center item-${item.id}">
        <div class="flex w-[70%]">
        <img class="h-8 w-8 rounded-full mt-6" src="${item.logo}"></img>
        <div class="flex flex-col pt-3">
        <h1 class="font-semibold text-[0.8em] pl-3 pt-2">${item.name}</h1>
        <p class="text-[0.7em] pl-3 pt-1">${item.location}</p>
        </div>
        <p class="text-[0.8em] pt-7 pl-2 text-[#a8a8a8]">. ${item.time}</p>
        </div>
        <div class="w-[70%] flex flex-col rounded-1xl pt-4">
        <img id="commentImg" class="h-[60vh] w-[100%] rounded-1xl" src="${item.img}"></img>
        <div>
        <div class="flex justify-between mt-3">
        <div class="flex w-24 justify-between">
        <i onclick="heartClick2(${item.id})" class="fa-regular fa-heart changeColor2 cursor-pointer text-[1.3em] pt-[1px] hovIcon"></i>
        <i onclick="heartClick(${item.id})" title="Like" class="fa-solid fa-heart changeColor cursor-pointer text-[1.3em] pt-[1px] text-red-500 hidden"></i>
        <svg onclick="comment(${item.id})" aria-label="Comment" class="x1lliihq x1n2onr6 cursor-pointer hovIcon" fill="rgb(168, 168, 168)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        <svg aria-label="Share Post" class="x1lliihq x1n2onr6 cursor-pointer hovIcon" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
        <div>
        <i onclick="shareCLick(${item.id})" class="fa-sharp fa-regular fa-bookmark cursor-pointer change hovIcon text-[1.2em]"></i>
        <i onclick="noShareClick(${item.id})" class="fa-sharp fa-solid fa-bookmark noChange hidden text-white  cursor-pointer"></i>
        </div>
        </div>
        <h1 class="font-semibold pt-2">${item.likes}</h1>
        <div class="flex">
        <h1 class="font-semibold text-[0.8em] pt-2">${item.name}</h1>
        <p class="text-[0.8em] pt-2 pl-3">${item.title}</p>
        </div>
        <p onclick="comment(${item.id})" class="text-[#a8a8a8] text-[1em] pt-2 cursor-pointer">${item.Comments}</p>
        <h1 class="insertComment pt-2"></h1>
        <input onkeypress="enterFunc(${item.id})" onkeyup="inpFunc(${item.id})" class="border-none outline-none bg-black mt-2 w-full editInp" placeholder="Add a comment..."/>
        <p onclick="submitComment(${item.id})" class="text-blue-500 mt-[-24px] text-[0.9em] ml-[90%] hidden selectPost cursor-pointer">Post</p>
        <div class="bdSmall mt-4"></div>
        </div>
        </div>
        <div id="commentDiv" class="fixed top-[100px] md:top-[120px] lg:top-[30px] sm:left-[100px] md:left-[150px] lg:left-[210px] z-50"></div>
        </div>
        `;
  });
  containerShow.appendChild(containerDiv);
};
arr2=[
  {
    logo: "./imran Khan (1).jpg",
    name: "imrankhan.pti",
    location: "Zaman Park,Lahore.",
    img: "./imrankhanpost.jpg",
    likes: "800,000 likes",
    time: "2h ago",
    title: "Will be Live around 11:15 PM",
    id: 1,
    commentoneimg1:'./obj1imgfour (9).jpg',
    commentoneimg2:'./obj1imgfour (8).jpg',
    commentoneimg3:'./obj1imgfour (7).jpg',
    commentoneimg4:'./obj1imgfour (10).jpg',
    commentone:'Kya personality ha khan sahab🥰♥️🔥mtlb kuch bhe❤️‍🔥',
    commenttwo:'Qurbaan... ❤️ Allah hifazat farmaye.. PM of pakistan soon.. In shaa Allah 🔥🔥❤️❤️',
    commentthree:'Mera khan 🔥 love you khan sab 😍',
    commentfour:'Khan sahab 🔥❤️',
    commentnameone:'hinaishfaq84',
    commentnametwo:'dr_tayyaba01',
    commentnamethree:'murtazasultan31',
    commentnamefour:'murtazasultan31',
  },
  {
    logo: "./ronaldologo.jpg",
    name: "cristiano",
    location: "Portugal",
    img: "./ronaldopost.jpg",
    likes: "4,800,000 likes",
    time: "16h ago",
    title: "Great team performance - we keep pushing forward 💪🏽",
    id: 2,
    commentoneimg1:'./obj2img1 (1).jpg',
    commentoneimg2:'./obj2img1 (2).jpg',
    commentoneimg3:'./obj2img1 (3).jpg',
    commentoneimg4:'./obj2img1 (4).jpg',
    commentone:'🔥👑',
    commenttwo:'Happiness is Cristiano Ronaldo! ❤️🥺 SIUUUU 😍🔥',
    commentthree:'LOVE FROM KERALA 💛💛💛💛💛💛💛',
    commentfour:'🖤CR7',
    commentnameone:'kutesonali',
    commentnametwo:'afsana_dawood',
    commentnamethree:'naveen_aneesh__',
    commentnamefour:'houda_hadhoudda_',
  },
  {
    logo: "./lambo.jpg",
    name: "lamborghini",
    location: "uk",
    img: "./lamopost.jpg",
    likes: "515,100 likes",
    time: "10h ago",
    title:"Even inside a videogame like @forzahorizonofficial our Super Sports Cars",
    id: 3,
    commentoneimg1:'./lamborghini cooment img (1).jpg',
    commentoneimg2:'./lamborghini cooment img (2).jpg',
    commentoneimg3:'./lamborghini cooment img (3).jpg',
    commentoneimg4:'./lamborghini cooment img (4).jpg',
    commentone:'What is price of this hot Lambo?',
    commenttwo:'❤️❤️❤️',
    commentthree:'It looks like the Revuelto truly embodies the perfect storm of power, innovation, and cutting-edge design!',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'mohammad_ql',
    commentnametwo:'adolf_amadoo',
    commentnamethree:'amirhosinkhoshghadam',
    commentnamefour:'nostalgear_',
  },
  {
    logo: "./audi logo.jpg",
    name: "audi_de",
    location: "germany",
    img: "./audi post (1).jpg",
    likes: "8,800,000 likes",
    time: "23h ago",
    title: "Audi R8 GT",
    id: 4,
    commentoneimg1:'./audicomment img.jpg',
    commentoneimg2:'./audicomment img3.jpg',
    commentoneimg3:'./audicommentimg2.jpg',
    commentoneimg4:'./audicommentimg4.jpg',
    commentone:'Thats dope 🔥🔥🔥',
    commenttwo:'Goodness gracious I havent witnessed something this majestic 😭😭😭🚀⭕️⭕️⭕️⭕️',
    commentthree:'Gorgeous ..🔥',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'hadar_ali_44',
    commentnametwo:'cristina9.11',
    commentnamethree:'anna_rulska',
    commentnamefour:'pure.carlover',
  },
  {
    logo: "./nitegologo.jpg",
    name: "natgeo",
    location: "africa",
    img: "./lion.jpg",
    likes: "900,000 likes",
    time: "3h ago",
    title: "#King",
    id: 5,
    commentoneimg1:'./lamborghini cooment img (1).jpg',
    commentoneimg2:'./lamborghini cooment img (2).jpg',
    commentoneimg3:'./lamborghini cooment img (3).jpg',
    commentoneimg4:'./lamborghini cooment img (4).jpg',
    commentone:'What is price of this hot Lambo?',
    commenttwo:'❤️❤️❤️',
    commentthree:'It looks like the Revuelto truly embodies the perfect storm of power, innovation, and cutting-edge design!',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'mohammad_ql',
    commentnametwo:'adolf_amadoo',
    commentnamethree:'amirhosinkhoshghadam',
    commentnamefour:'nostalgear_',
  },
  {
    logo: "./me.jpg",
    name: "aleem._.junaid",
    location: "~♥ iN yOur heArt ♥~",
    img: "./aleem.jpg",
    likes: "740 likes",
    time: "13w ago",
    title: "𝐓𝐡𝐞 𝐋𝐞𝐬𝐬 𝐘𝐨𝐮 𝐓𝐞𝐥𝐥💯,𝐓𝐡𝐞 𝐌𝐨𝐫𝐞 𝐓𝐡𝐞𝐲 𝐖𝐨𝐧𝐝𝐞𝐫🤔.",
    id: 6,
    commentoneimg1:'./audicomment img.jpg',
    commentoneimg2:'./audicomment img3.jpg',
    commentoneimg3:'./audicommentimg2.jpg',
    commentoneimg4:'./audicommentimg4.jpg',
    commentone:'Thats dope 🔥🔥🔥',
    commenttwo:'Goodness gracious I havent witnessed something this majestic 😭😭😭🚀⭕️⭕️⭕️⭕️',
    commentthree:'Gorgeous ..🔥',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'hadar_ali_44',
    commentnametwo:'cristina9.11',
    commentnamethree:'anna_rulska',
    commentnamefour:'pure.carlover',
  },
  {
    logo: "./babar logo (1).jpg",
    name: "babarazam",
    location: "Lahore",
    img: "./babar.jpg",
    likes: "501,218 likes",
    time: "24h ago",
    title: "Good start to my #Zalmi journey.💛",
    id: 7,
    commentoneimg1:'./lamborghini cooment img (1).jpg',
    commentoneimg2:'./lamborghini cooment img (2).jpg',
    commentoneimg3:'./lamborghini cooment img (3).jpg',
    commentoneimg4:'./lamborghini cooment img (4).jpg',
    commentone:'What is price of this hot Lambo?',
    commenttwo:'❤️❤️❤️',
    commentthree:'It looks like the Revuelto truly embodies the perfect storm of power, innovation, and cutting-edge design!',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'mohammad_ql',
    commentnametwo:'adolf_amadoo',
    commentnamethree:'amirhosinkhoshghadam',
    commentnamefour:'nostalgear_',
  },
  {
    logo: "./ferrairi.jpg",
    name: "ferrari",
    location: "Nürburgring",
    img: "./ferraaripost.jpg",
    likes: "291,140 likes",
    time: "5d ago",
    title:"A sunny day completes the vibe of the #FerrariDaytonaSP3 on the track",
    id: 8,
    commentoneimg1:'./audicomment img.jpg',
    commentoneimg2:'./audicomment img3.jpg',
    commentoneimg3:'./audicommentimg2.jpg',
    commentoneimg4:'./audicommentimg4.jpg',
    commentone:'Thats dope 🔥🔥🔥',
    commenttwo:'Goodness gracious I havent witnessed something this majestic 😭😭😭🚀⭕️⭕️⭕️⭕️',
    commentthree:'Gorgeous ..🔥',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'hadar_ali_44',
    commentnametwo:'cristina9.11',
    commentnamethree:'anna_rulska',
    commentnamefour:'pure.carlover',
  },
  {
    logo: "./bmw.jpg",
    name: "bmwdeutschland",
    location: "Canada",
    img: "./bmw post.jpg",
    likes: "901,218 likes",
    time: "6h ago",
    title: "Performance aus jedem Blickwinkel. Der BMW M4 CSL.",
    id: 9,
    commentoneimg1:'./lamborghini cooment img (1).jpg',
    commentoneimg2:'./lamborghini cooment img (2).jpg',
    commentoneimg3:'./lamborghini cooment img (3).jpg',
    commentoneimg4:'./lamborghini cooment img (4).jpg',
    commentone:'What is price of this hot Lambo?',
    commenttwo:'❤️❤️❤️',
    commentthree:'It looks like the Revuelto truly embodies the perfect storm of power, innovation, and cutting-edge design!',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'mohammad_ql',
    commentnametwo:'adolf_amadoo',
    commentnamethree:'amirhosinkhoshghadam',
    commentnamefour:'nostalgear_',
  },
  {
    logo: "./PURPLR logo.jpg",
    name: "rollsroycecars",
    location: "london",
    img: "./rollsroycepost.jpg",  
    likes: "401,218 likes",
    time: "1h ago",
    title:"It is a spacious sanctum to gather ones thoughts. Little disturbs the peace found within its confines.",
    id: 10,
    commentoneimg1:'./audicomment img.jpg',
    commentoneimg2:'./audicomment img3.jpg',
    commentoneimg3:'./audicommentimg2.jpg',
    commentoneimg4:'./audicommentimg4.jpg',
    commentone:'Thats dope 🔥🔥🔥',
    commenttwo:'Goodness gracious I havent witnessed something this majestic 😭😭😭🚀⭕️⭕️⭕️⭕️',
    commentthree:'Gorgeous ..🔥',
    commentfour:'🔥🔥🔥🔥',
    commentnameone:'hadar_ali_44',
    commentnametwo:'cristina9.11',
    commentnamethree:'anna_rulska',
    commentnamefour:'pure.carlover',
  },
]
let comment = (id)=> {
  let item = document.querySelector(`.item-${id}`);
  let commentDiv = item.querySelector('#commentDiv');
  commentDiv.style.display="block"
  let post = arr2.find(post => post.id === id);
  // commentDiv.innerHTML = "";
  commentDiv.innerHTML += `
    <div class="w-[140vw] md:w-[80vw] lg:w-[80vw] p-2 flex flex-col md:flex-row lg:flex-row post-${post.id}">
    <div class="w-[50%] h-[55vh] md:h-[70vh] lg:h-[90vh]">
    <img class="h-[100%] w-[100%]" src="${post.img}"></img>
    </div>
    <div class="w-[50%] h-[20vh] md:h-[70vh] lg:h-[90vh] bg-black pl-4">
    <h1 onclick="crossDiv(${post.id})" class="text-white text-[1.5em] absolute right-[420px] md:right-8 lg:right-4 top-4 cursor-pointer">X</h1>
    <div class="flex pt-2 hidden md:flex lg:flex">
    <img src="${post.logo}" class="h-12 w-12 rounded-full"></img>
    <div class="flex flex-col pt-2">
    <h1 class="font-semibold text-[0.8em] pl-3">${post.name}</h1>
    <p class="text-[0.7em] pl-3">${post.location}</p>
    </div>
    </div>
    <div class="borderComment hidden md:flex lg:flex"></div>
    <div class="setOverflow hidden md:block lg:block h-[35vh] lg:h-[56vh]">
    <div class="flex mt-2 pl-2">
    <img src="${post.logo}" class="h-8 w-8 rounded-full"></img>
    <h1 class="font-semibold text-[0.8em] pt-2 pl-3">${post.name}</h1>
    <p class="text-[0.8em] pt-2 pl-3">${post.title}</p>
    </div>
    <h1 id="commentDiv"></h1>
    <div class="flex mt-2 pl-2 pt-4">
    <img src="${post.commentoneimg1}" class="h-8 w-8 rounded-full"></img>
    <p class="text-[0.8em] pt-2 pl-3">${post.commentnameone}</p>
    <h1 class="font-semibold text-[0.8em] pt-2 pl-3">${post.commentone}</h1>
    </div>
    <div class="flex text-[#a8a8a8] text-[0.8em] pl-12 cursor-pointer">
    <p class="pl-1">6h</p>
    <p class="pl-2">6 likes</p>
    <p class="pl-2">Reply</p>
    <p class="pl-2">See translation</p>
    </div>
    <div class="flex mt-2 pl-2 pt-4">
    <img src="${post.commentoneimg2}" class="h-8 w-8 rounded-full"></img>
    <p class="text-[0.8em] pt-2 pl-3">${post.commentnametwo}</p>
    <h1 class="font-semibold text-[0.8em] pt-2 pl-3">${post.commenttwo}</h1>
    </div>
    <div class="flex text-[#a8a8a8] text-[0.8em] pl-12 cursor-pointer">
    <p class="pl-1">6h</p>
    <p class="pl-2">6 likes</p>
    <p class="pl-2">Reply</p>
    <p class="pl-2">See translation</p>
    </div>
    <div class="flex mt-2 pl-2 pt-4">
    <img src="${post.commentoneimg3}" class="h-8 w-8 rounded-full"></img>
    <p class="text-[0.8em] pt-2 pl-3">${post.commentnamethree}</p>
    <h1 class="font-semibold text-[0.8em] pt-2 pl-3">${post.commentthree}</h1>
    </div>
    <div class="flex text-[#a8a8a8] text-[0.8em] pl-12 cursor-pointer">
    <p class="pl-1">6h</p>
    <p class="pl-2">6 likes</p>
    <p class="pl-2">Reply</p>
    <p class="pl-2">See translation</p>
    </div>
    <div class="flex mt-2 pl-2 pt-4">
    <img src="${post.commentoneimg4}" class="h-8 w-8 rounded-full"></img>
    <p class="text-[0.8em] pt-2 pl-3">${post.commentnamefour}</p>
    <h1 class="font-semibold text-[0.8em] pt-2 pl-3">${post.commentfour}</h1>
    </div>
    <div class="flex text-[#a8a8a8] text-[0.8em] pl-12 cursor-pointer">
    <p class="pl-1">6h</p>
    <p class="pl-2">6 likes</p>
    <p class="pl-2">Reply</p>
    <p class="pl-2">See translation</p>
    </div>
    <div class="flex mt-2 pl-2 pt-4">
    <img src="${post.commentoneimg2}" class="h-8 w-8 rounded-full"></img>
    <p class="text-[0.8em] pt-2 pl-3">${post.commentnametwo}</p>
    <h1 class="font-semibold text-[0.8em] pt-2 pl-3">${post.commenttwo}</h1>
    </div>
    <div class="flex text-[#a8a8a8] text-[0.8em] pl-12 cursor-pointer">
    <p class="pl-1">6h</p>
    <p class="pl-2">6 likes</p>
    <p class="pl-2">Reply</p>
    <p class="pl-2">See translation</p>
    </div>
    </div>
    <div class="borderComment mb-4"></div>
    <div class="flex justify-between mt-3">
    <div class="flex w-24 justify-between">
    <i onclick="commentHeartClick(${post.id})" class="fa-regular fa-heart commentchangeColor2 cursor-pointer text-[1.3em] pt-[1px] hovIcon"></i>
    <i onclick="commentHeartClick2(${post.id})" title="Like" class="fa-solid fa-heart commentchangeColor cursor-pointer text-[1.3em] pt-[1px] text-red-500 hidden"></i>
    <svg aria-label="Comment" class="x1lliihq x1n2onr6 cursor-pointer hovIcon" fill="rgb(168, 168, 168)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
    <svg aria-label="Share Post" class="x1lliihq x1n2onr6 cursor-pointer hovIcon" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
    </div>
    <div>
    <i onclick="commentShareCLick(${post.id})" class="fa-sharp fa-regular fa-bookmark cursor-pointer change2 hovIcon text-[1.2em]"></i>
    <i onclick="nocommentShareClick(${post.id})" class="fa-sharp fa-solid fa-bookmark noChange2 hidden text-white  cursor-pointer"></i>
    </div>
    </div>
    <h1 class="font-semibold pt-2">${post.likes}</h1>
    <p class="text-[0.8em] pt-2 text-[#a8a8a8]">${post.time}</p>
    <div class="borderComment pt-2"></div>
    <h1 class="insertComment pt-2"></h1>
    <input onkeyup="commentInpFunc(${post.id})" class="border-none outline-none bg-black mt-2 w-full hidden md:flex lg:flex" placeholder="Add a comment..."/>
    <p onclick="submitCommenttwo(${post.id})" class="mt-[-24px] text-[0.9em] ml-[95%] selectPost2 cursor-pointer hidden md:flex lg:flex">Post</p>
    </div>
    </div>
  `;
  document.body.style.overflow='hidden'
}
let crossDiv = (id)=> {
  let item = document.querySelector(`.item-${id}`);
  let commentDiv = item.querySelector('#commentDiv');
  commentDiv.style.display="none"
  document.body.style.overflow='auto'
}
let commentInpFunc = (id)=> {
  let post=document.querySelector(`.post-${id}`)
  let inp = post.querySelector('input')
  let selectPost2 = post.querySelector('.selectPost2')
    if(inp.value!=="")
    {
      selectPost2.style.color="#809db7"
    }
    else{
      selectPost2.style.color="#3b82f6"
    }
}
let enterFunc = (id)=> {
  // alert('w')
  let item=document.querySelector(`.item-${id}`)
  let inp = item.querySelector('input')
  if(id.key == 'Enter'){
    alert('working')
  }
}
let inpFunc = (id)=> {
  let item=document.querySelector(`.item-${id}`)
  let inp = item.querySelector('input')
  let selectPost = item.querySelector('.selectPost')
    if(inp.value!=="")
    {
      selectPost.style.display="block"
    }
    else{
      selectPost.style.display="none"
    }
    // let insertComment = item.querySelector('.insertComment')
    // insertComment.innerHTML+=`aleem._.junaid ${inp.value}<br>`
    // inp.value=""
    // selectPost.style.display="none"
}
const submitCommenttwo = (id)=> {
  let post=document.querySelector(`.post-${id}`)
  // let post=document.querySelector(`.post-${id}`)
  let inp = post.querySelector('input')
  let commentDiv = post.querySelector('#commentDiv')
  let selectPost2 = post.querySelector('.selectPost2')
  // console.log(inp,insertComment);
  commentDiv.innerHTML+=`
  <div>
  <div class="flex mt-2 pl-2 pt-4">
  <img src="./me.jpg  " class="h-8 w-8 rounded-full"></img>
  <h1 class="font-semibold text-[0.8em] pt-2 pl-3">aleem._.junaid</h1>
  <p class="text-[0.8em] pt-2 pl-3">${inp.value}</p>
  </div>
  </div>
  `
  inp.value=""
  selectPost2.style.color="#3b82f6"
}
const submitComment = (id)=> {
  let item=document.querySelector(`.item-${id}`)
  let inp = item.querySelector('input')
  let insertComment = item.querySelector('.insertComment')
  let selectPost = item.querySelector('.selectPost')
  insertComment.innerHTML+=`<div class="mb-2">aleem._.junaid ${inp.value}<br></div>`
  inp.value=""
  selectPost.style.display="none"
}
const commentShareCLick = (id)=> {
  let post=document.querySelector(`.post-${id}`)
  post.querySelector('.change2').style.display="none"
  post.querySelector('.noChange2').style.display="block"
}
const nocommentShareClick = (id)=> {
  let post=document.querySelector(`.post-${id}`)
  post.querySelector('.change2').style.display="block"
  post.querySelector('.noChange2').style.display="none"
}
const shareCLick = (id)=> {
  let item=document.querySelector(`.item-${id}`)
  item.querySelector('.change').style.display="none"
  item.querySelector('.noChange').style.display="block"
}
const noShareClick = (id)=> {
  let item=document.querySelector(`.item-${id}`)
  item.querySelector('.change').style.display="block"
  item.querySelector('.noChange').style.display="none"
}
const commentHeartClick = (id) => {
  let post=document.querySelector(`.post-${id}`)
  post.querySelector('.commentchangeColor2').style.display="none"
  post.querySelector('.commentchangeColor').style.display="block"
};
const commentHeartClick2 = (id) => {
  let post=document.querySelector(`.post-${id}`)
  post.querySelector('.commentchangeColor2').style.display="block"
  post.querySelector('.commentchangeColor').style.display="none"
};
const heartClick = (id) => {
  let item=document.querySelector(`.item-${id}`)
  item.querySelector('.changeColor2').style.display="block"
  item.querySelector('.changeColor').style.display="none"
};
const heartClick2 = (id) => {
  let item=document.querySelector(`.item-${id}`)
  item.querySelector('.changeColor2').style.display="none"
  item.querySelector('.changeColor').style.display="block"
};
showPosts();

function mydata(data) {
  console.log(data);
  let div = document.createElement("div");
  div.innerHTML = "";
  data.map((ele) => {
    div.innerHTML += `
    <img src="${ele.images}"></img>
    `;
  });
  containerShow.appendChild(div);
}
