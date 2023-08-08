$(function () {
  $(".online input[type=tel]").bind("input", function () {
    let digit = parseInt($(this).attr("data-digit"));
    let leng = $(this).val().length;
    if (leng >= digit) $(this).next().focus();
  });

  $(".online form").change(function () {
    if ($(".online form")[0].checkValidity()) {
      $(".online button[type=submit]").attr("disabled", false);
    } else {
      $(".online button[type=submit]").attr("disabled", true);
    }
  });
}); //ready1
