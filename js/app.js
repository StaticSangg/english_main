$(document).ready(function(){
    list_ani();
})



function list_ani () {
    $('.li_2').hide();
    $('.li_3').hide();
    $('#inf3').hide();

    $('.li_1').mouseover(function() {
        $('.li_2').show()   
    })

    $('.li_2').mouseover(function() {
        $('.li_3').show()   
    })

    $('.li_3').mouseover(function () {
        $('#inf3').show();
    })
}