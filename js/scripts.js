$(document).ready(function() {
  $("form#questions").submit(function(event) {

    const q1 = $("input#q1").val();
    const q2 = $("input#q2").val();
    const q3 = $("input#q3").val();
    const q4 = $("input#q4").val();
    const q5 = $("input#q5").val();
    const name = $("input#name").val();

    $(".name").text(name);

    if (q1 === q3 && q1 != q4) {
      language = "Ruby"
    } else if (q2 === q5 && q2 != q1) {
      language = "C#"
    } else if (q4 === q2 && q5 != q2 && q5 === q3) {
      language = "JavaScript"
    } else {
      language = "not learning to code";
    }
    $("#answer").show();
    $("#language").text(language);
    

    event.preventDefault();
  });
});