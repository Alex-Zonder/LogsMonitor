var menu_width = 250;
function Button_Main_Menu() {
  menu_holder = document.getElementById("Menu_Holder");
  menu_body_separator = document.getElementById("Menu_Body_Separator");
  body_holder = document.getElementById("Body_Holder");
  if (menu_holder.style.marginLeft != '') {
    menu_holder.style.marginLeft = '';
    menu_holder.style.width = menu_width + 'px';
    body_holder.style.width = 'calc(100% - ' + (menu_width + 1) + 'px)';
    //body_holder.style.marginLeft = '201px';
    menu_body_separator.style.display = "block";
  }
  else {
    menu_holder.style.marginLeft = '-' + (menu_width + 1) + 'px';
    body_holder.style.width = 'calc(100%)';
    //body_holder.style.marginLeft = '0px';
    menu_body_separator.style.display = "none";
  }
}


var menu_width_change_enabled = false;
function Change_Menu_Width (e) {
  if (menu_width_change_enabled == true) {
    menu_width = e.clientX;
    Menu_Holder.style.width = menu_width + 'px';
    Body_Holder.style.width = 'calc(100% - ' + (menu_width + 1) + 'px)';
  }
}
function Enable_Change_Menu_Width (e) {
  menu_width_change_enabled = true;
  Menu_Holder.style.transition = "0s";
  Body_Holder.style.transition = "0s";
}
function Disable_Change_Menu_Width () {
  menu_width_change_enabled = false;
  Menu_Holder.style.transition = "0.3s";
  Body_Holder.style.transition = "0.3s";
}
