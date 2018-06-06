/* Change theme */
function theme() {
if(document.getElementById('myonoffswitch')) {
     document.getElementById('theme-css').href = "css/dark.css";
  document.getElementById('myonoffswitch').className = 'contr-d';     
  document.getElementById('myonoffswitch').id = 'myonoffswitch1';
} else {
    document.getElementById('theme-css').href = "css/light.css";
 document.getElementById('myonoffswitch1').id = 'myonoffswitch';
 document.getElementById('myonoffswitch').className = 'contr-l';
}
}

/* Notification Popup */
function pay() {
	document.getElementById('pay-button').style.display = 'none';
    document.getElementById('pay-notif').style.display = 'block';
    document.getElementById('bank-ico').className = 'bank bank-active';
}