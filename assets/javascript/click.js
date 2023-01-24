let fc_discord = document.getElementById("fc.discord");
let fc_twitter = document.getElementById("fc.twitter");
let fc_instagram = document.getElementById("fc.instagram");

fc_discord.addEventListener("click", openDiscord);
fc_twitter.addEventListener("click", openTwitter);
fc_instagram.addEventListener("click", openInstagram);

function openDiscord(){
  window.location.replace("https://discord.com/channels/@me");
}
function openTwitter(){
  window.location.replace("https://twitter.com/home");
}
function openInstagram(){
  window.location.replace("https://www.instagram.com/");
}