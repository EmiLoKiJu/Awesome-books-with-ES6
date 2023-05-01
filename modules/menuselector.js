const menuselector = (menuelement, menu, section) => {
  for (let i = 0; i < menu.length; i += 1) {
    if (menuelement === menu[i]) {
      if (!menu[i].classList.contains('activewindow')) menu[i].classList.add('activewindow');
      if (section[i].classList.contains('dnone')) section[i].classList.remove('dnone');
    } else {
      if (menu[i].classList.contains('activewindow')) menu[i].classList.remove('activewindow');
      if (!section[i].classList.contains('dnone')) section[i].classList.add('dnone');
    }
  }
};

export default menuselector;