$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
    var luckyArray = [];
    $("input:checkbox[name=lucky-event]:checked").each(function(){
      var lucky = $(this).val();
      luckyArray.push(lucky);
    })
    // console.log(luckyArray);
    // console.log(luckyArray.length)
    var unluckyArray = [];
    $("input:checkbox[name=unlucky-event]:checked").each(function(){
      var unlucky = $(this).val();
      unluckyArray.push(unlucky);
    })
    // console.log(unluckyArray);
    // console.log(unluckyArray.length)
  })
  
});