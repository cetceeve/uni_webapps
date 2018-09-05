function preview() {
  $('input').hide();
  $('.pass').hide();
  $('#sliderResult').hide();
  $.each($('input'), (index, v) => {
    if (v.type === "password") {
      v.hide();
    } else {
      $("<span> " + v.value + "</span>").insertBefore(v);
    }
  });
}
