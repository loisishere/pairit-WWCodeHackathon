$(document).ready(function(){

  var skills = 5;
  var skillsArr = [];
  var interestArr =[];
  var interests = 5;
  $(".skill").click(function(){
    console.log($(this).css("color"))
  if(skillsArr.length < skills) {
    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      skillsArr.push($(this).text());
      $(this).css("color","#095d9b");
  }

  if($(this).hasClass('active')){
    var txt = $(this).text();
    for(var i=0;i<skillsArr.length;i++){
      if(skillsArr[i] === txt){
        skillsArr.splice(i,1);
      }
    }
    $(this).removeClass("active");
  }
} else {
  if($(this).hasClass('active')){
    var txt = $(this).text();
    for(var i=0;i<skillsArr.length;i++){
      if(skillsArr[i] === txt){
        skillsArr.splice(i,1);
      }
  }
  $(this).removeClass("active");
}
}

  });
});
