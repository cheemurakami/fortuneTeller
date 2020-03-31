$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=lucky-event]:checked").each(function(){
      var lucky = $(this).val();
      console.log(lucky);
    })
  })
});