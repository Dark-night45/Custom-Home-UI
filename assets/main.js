let clock = document.getElementById("clock-show");
let notif_title = document.getElementById("notif-title");
let close_notif = document.getElementById("close-notif");
let open_notif = document.getElementById("open-notif");
let notif = document.getElementById("notification");
let taskclock = document.getElementById("taskbar-clock");
let taskbar = document.getElementById("taskbar");
let version = document.getElementById("version");
let sdate = document.getElementById("date-show");
let sf = document.getElementById("search-form");

function setCookie(name,value,minute) {
  var expires = "";
  if (minute) {
      var date = new Date();
      date.setTime(date.getTime() + (minute*60));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};
if(new Date().getHours() === 03 || new Date().getHours() === 04){
  notif_title.innerText = "Good Midnight";
} else if(new Date().getHours() === 05 || new Date().getHours() === 06 || new Date().getHours() === 07 || new Date().getHours() === 08 || new Date().getHours() === 09 || new Date().getHours() === 10){
  notif_title.innerText = "Good Morning";
} else if(new Date().getHours() === 11 || new Date().getHours() === 12 || new Date().getHours() === 13){
  notif_title.innerText = "Good Noon";
} else if(new Date().getHours() === 14 || new Date().getHours() === 15 || new Date().getHours() === 16){
  notif_title.innerText = "Good Afternoon";
} else if(new Date().getHours() === 17 || new Date().getHours() === 18 || new Date().getHours() === 19){
  notif_title.innerText = "Good Evening";
} else if(new Date().getHours() === 20 || new Date().getHours() === 21 || new Date().getHours() === 22 || new Date().getHours() === 23 || new Date().getHours() === 00 || new Date().getHours() === 01 || new Date().getHours() === 02){
  notif_title.innerText = "Good Night";
} else {
  notif_title.innerText = "Hmmm...";
}

window.addEventListener("load", function(){
  if(getCookie("isClsoeNotification") === null){
    setCookie("isClsoeNotification","false",1000000000000000000); 
  } else if(getCookie("isClsoeNotification") === "true"){
    notif.style.display = "none";
    notif.style.opacity = 0;
  }
})

sf.addEventListener("submit", submitSearch);
close_notif.addEventListener("click", closeNotification);
open_notif.addEventListener("click", openNotification);
function closeNotification(){
  notif.classList.add("going-notif");
  deleteCookie("isClsoeNotification");
  setTimeout(500, setCookie("isClsoeNotification","true",35));
}
function openNotification(){
  window.open('https://github.com/Dark-Night45', '_blank', 'location=yes,height=700,width=1100,scrollbars=yes,status=yes');
}
function submitSearch(){
  let searchValue = document.getElementById("input").value;
  if(searchValue === ""){
    return false;
  } else {
    let searchInput = searchValue.replaceAll(' ', '+');
    let searchInput2 = encodeURIComponent(searchValue);
    if(isValidURL(searchInput) === true){
      let furl;
      if(searchValue.includes('https://') || searchValue.includes('http://')){
        furl = "";
      } else {
        furl = "http://";
      }
      window.location.replace(furl + searchInput2);
    } else if(isValidURL(searchInput) === false){
      window.location.replace("https://google.com/search?q=" + searchInput);
    }
  }
}

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let hh2 = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
  let fdate = Math.floor(date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();

  if(hh2 == 0){
       hh2 = 12;
   }
   if(hh2 > 12){
       hh2 = hh2 - 12;
       session = "PM";
    }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let time = hh + " : " + mm + " : " + ss;
  let task_time = hh2 + ":" + mm + " " + session + "<br>" + fdate;
  clock.innerText = time;
  taskclock.innerHTML = task_time;
  let t = setTimeout(function () { currentTime(); }, 500);
}
currentTime();

function currentDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let pdate = date.getDate();
  let day = date.getDay();
  let sday;
  let sdays;
  let smonth;
  let syear;
  switch (day) {
    case 0:
      sdays = "????????????";
      break;
    case 1:
      sdays = "????????????";
      break;
    case 2:
      sdays = "???? ????????";
      break;
    case 3:
      sdays = "????????????????";
      break;
    case 4:
      sdays = "??????????????";
      break;
    case 5:
      sdays = "????????";
      break;
    case 6:
      sdays = "????????";
      break;
  }
  switch (month) {
    case 0:
      syear = year - 622;
      if (pdate <= 20) {
        smonth = "????";
        sday = pdate + 10;
      } else {
        smonth = "????????";
        sday = pdate - 20;
      }
      break;
    case 1:
      syear = year - 622;
      if (pdate <= 19) {
        smonth = "????????";
        sday = pdate + 11;
      } else {
        smonth = "??????????";
        sday = pdate - 19;
      }
      break;
    case 2:
      {
        if ((year - 621) % 4 == 0) var i = 10;
        else var i = 9;
        if (pdate <= 20) {
          syear = year - 622;
          smonth = "??????????";
          sday = pdate + i;
        } else {
          syear = year - 621;
          smonth = "??????????????";
          sday = pdate - 20;
        }
      }
      break;
    case 3:
      syear = year - 621;
      if (pdate <= 20) {
        smonth = "??????????????";
        sday = pdate + 11;
      } else {
        smonth = "????????????????";
        sday = pdate - 20;
      }
      break;
    case 4:
      syear = year - 621;
      if (pdate <= 21) {
        smonth = "????????????????";
        sday = pdate + 10;
      } else {
        smonth = "??????????";
        sday = pdate - 21;
      }
      break;
    case 5:
      syear = year - 621;
      if (pdate <= 21) {
        smonth = "??????????";
        sday = ppate + 10;
      } else {
        smonth = "??????";
        sday = pdate - 21;
      }
      break;
    case 6:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "??????";
        sday = pdate + 9;
      } else {
        smonth = "??????????";
        sday = pdate - 22;
      }
      break;
    case 7:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "??????????";
        sday = pdate + 8;
      } else {
        smonth = "????????????";
        sday = pdate - 22;
      }
      break;
    case 8:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "????????????";
        sday = pdate + 9;
      } else {
        smonth = "??????";
        sday = pdate + 22;
      }
      break;
    case 9:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "??????";
        sday = pdate + 8;
      } else {
        smonth = "????????";
        sday = pdate - 22;
      }
      break;
    case 10:
      syear = year - 621;
      if (pdate <= 21) {
        smonth = "????????";
        sday = pdate + 9;
      } else {
        smonth = "??????";
        sday = pdate - 21;
      }

      break;
    case 11:
      syear = year - 621;
      if (pdate <= 19) {
        smonth = "??????";
        sday = pdate + 9;
      } else {
        smonth = "????";
        sday = pdate + 21;
      }
      break;
  }
  sdate.innerHTML = syear + "/" + sday + "/" + sdays + " - " + smonth;
  setTimeout(function () { currentDate(); }, 10000)
}
currentDate();

let isFullScreen = false;
window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "F11":
      if(isFullScreen === false){
        openFullscreen();
        isFullScreen = true;
      } else if(isFullScreen === true){
        closeFullscreen();
        isFullScreen = false;
      }
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
  taskclock.style.opacity = 1;
  taskclock.style.visibility = "visible";
  taskbar.style.opacity = 1;
  taskbar.style.visibility = "visible";
  notif.style.margin = "60px 20px";
  version.style.opacity = 0;
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  taskclock.style.opacity = 0;
  taskclock.style.visibility = "hidden";
  taskbar.style.opacity = 0;
  taskbar.style.visibility = "hidden";
  notif.style.margin = "20px";
  version.style.opacity = 1;
}