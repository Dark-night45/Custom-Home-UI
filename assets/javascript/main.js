let clock = document.getElementById("clock-show"),
notif_title = document.getElementById("notif-title");
notif_description = document.getElementById("wb"),
accname = document.getElementById("accname"),
desname = document.getElementById("desname"),
close_notif = document.getElementById("close-notif"),
open_notif = document.getElementById("open-notif"),
notif = document.getElementById("notification"),
taskclock = document.getElementById("taskbar-clock"),
taskbar = document.getElementById("taskbar"),
taskbar_img = document.getElementById("taskbar-img"),
version = document.getElementById("version"),
sdate = document.getElementById("date-show"),
sf = document.getElementById("search-form"), //Search form
body = document.getElementById("body"),
img = ['0.webp', '1.jpg'],
ri = Math.floor(Math.random() * img.length); //Random images
body.style.backgroundImage = `url(assets/background/${img[ri]})`;

  const username = accname.textContent;

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

function checkVersion() {  
  if(version === null){
    alert(`Version dosen't exist\nPlease fix it or redownload source\nhttps://github.com/Dark-Night45/Custom-home-ui`);
    return false;
  }
  if((version.textContent).includes("1.3") !== true){
    alert("Version dosen't match");
    return false;
  }
};
checkVersion();

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

desname.innerText = username;
notif_description.innerText = `Hi ${username}, welcome back to your customized browser`;

window.addEventListener("load", function(){
  if(getCookie("isClsoeNotification") === null){
    setCookie("isClsoeNotification","false",10000000000); 
  } else if(getCookie("isClsoeNotification") === "true"){
    notif.style.display = "none";
    notif.style.opacity = 0;
  }
})


sf.addEventListener("submit", submitSearch);
version.addEventListener("click", openVersion);
close_notif.addEventListener("click", closeNotification);
open_notif.addEventListener("click", openNotification);
function openVersion(){
  window.open('https://github.com/Dark-Night45/Custom-home-ui', '_blank');
}
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
    if(isValidURL(searchInput) == true){
      let furl;
      if(searchValue.includes('https://', 'http://')){
        furl = "";
      } else {
        furl = "http://";
      }
      window.location.replace(furl + searchInput);
    } else if(isValidURL(searchInput) == false){
      window.location.replace("https://www.google.com/search?q=" + searchInput); 
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
      sdays = "يکشنبه";
      break;
    case 1:
      sdays = "دوشنبه";
      break;
    case 2:
      sdays = "سه شنبه";
      break;
    case 3:
      sdays = "چهارشنبه";
      break;
    case 4:
      sdays = "پنجشنبه";
      break;
    case 5:
      sdays = "جمعه";
      break;
    case 6:
      sdays = "شنبه";
      break;
  }
  switch (month) {
    case 0:
      syear = year - 622;
      if (pdate <= 20) {
        smonth = "دي";
        sday = pdate + 10;
      } else {
        smonth = "بهمن";
        sday = pdate - 20;
      }
      break;
    case 1:
      syear = year - 622;
      if (pdate <= 19) {
        smonth = "بهمن";
        sday = pdate + 11;
      } else {
        smonth = "اسفند";
        sday = pdate - 19;
      }
      break;
    case 2:
      {
        if ((year - 621) % 4 == 0) var i = 10;
        else var i = 9;
        if (pdate <= 20) {
          syear = year - 622;
          smonth = "اسفند";
          sday = pdate + i;
        } else {
          syear = year - 621;
          smonth = "فروردين";
          sday = pdate - 20;
        }
      }
      break;
    case 3:
      syear = year - 621;
      if (pdate <= 20) {
        smonth = "فروردين";
        sday = pdate + 11;
      } else {
        smonth = "ارديبهشت";
        sday = pdate - 20;
      }
      break;
    case 4:
      syear = year - 621;
      if (pdate <= 21) {
        smonth = "ارديبهشت";
        sday = pdate + 10;
      } else {
        smonth = "خرداد";
        sday = pdate - 21;
      }
      break;
    case 5:
      syear = year - 621;
      if (pdate <= 21) {
        smonth = "خرداد";
        sday = ppate + 10;
      } else {
        smonth = "تير";
        sday = pdate - 21;
      }
      break;
    case 6:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "تير";
        sday = pdate + 9;
      } else {
        smonth = "مرداد";
        sday = pdate - 22;
      }
      break;
    case 7:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "مرداد";
        sday = pdate + 8;
      } else {
        smonth = "شهريور";
        sday = pdate - 22;
      }
      break;
    case 8:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "شهريور";
        sday = pdate + 9;
      } else {
        smonth = "مهر";
        sday = pdate + 22;
      }
      break;
    case 9:
      syear = year - 621;
      if (pdate <= 22) {
        smonth = "مهر";
        sday = pdate + 8;
      } else {
        smonth = "آبان";
        sday = pdate - 22;
      }
      break;
    case 10:
      syear = year - 621;
      if (pdate <= 21) {
        smonth = "آبان";
        sday = pdate + 9;
      } else {
        smonth = "آذر";
        sday = pdate - 21;
      }

      break;
    case 11:
      syear = year - 621;
      if (pdate <= 19) {
        smonth = "آذر";
        sday = pdate + 9;
      } else {
        smonth = "دي";
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
  taskbar.style.opacity = 1;
  taskbar.style.visibility = "visible";
  notif.style.margin = "60px 20px";
  version.style.opacity = 0;
  if((taskbar_img.src).includes('taskbar0.png')){
  taskclock.style.opacity = 1;
  taskclock.style.visibility = "visible";
  }
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
