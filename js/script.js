$(document).ready(function(){
    // 'innerWidth' of '.colorBox' ==> innerWidth = width + padding
    let colorBoxWidth = $('.colorsBox').innerWidth(); 
    // in the "beignning" , make the "color box" is "hidden"
    $("#options").animate({left:`-${colorBoxWidth}`},0);
    // ++++++++++++++ Give Color to boxes ++++++++++++++
    let colorItems =  $('.color-item') ;
    colorItems.eq(0).css('background-color', '#080');
    colorItems.eq(1).css('background-color', '#f00');
    colorItems.eq(2).css('background-color', '#ff0');
    colorItems.eq(3).css('background-color', '#888');
    colorItems.eq(4).css('background-color', '#09c');
    // ++++++++++++++ When Click on "colorItem" ++++++++++++++
    colorItems.click( function(e) {
        let itemBk = $(e.target).css('backgroundColor');
        // change the color of ".changeColor" class 
        $('.changeColor').css('color',itemBk);
    });
    // ++++++++++++++ When Click on "Cog" icon ++++++++++++++  
    $("#options .cogIcon").click(function(){
        if( $("#options").css('left') == '0px'  )
        {
            $("#options").animate({left:`-${colorBoxWidth}`},500); 
        }
        else {
            $("#options").animate({left:'0'},500); 
        }
    });
});