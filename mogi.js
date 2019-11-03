$(function($){
  $('input[type="number"]').on('keyup change',function(){
    var easy = $('input:eq(0)').val();
    easy = parseInt(easy);
    $('input:eq(1)').val(((5000-easy)*3)/25);

    var nomal = $('input:eq(2)').val();
    nomalp = parseInt(nomal);
    $('input:eq(3)').val((6000-nomal)/10);

    var hard = $('input:eq(4)').val();
    hard = parseInt(hard);
    $('input:eq(5)').val((7500-hard)/12.5);

    var nm = $('input:eq(6)').val();
    nm = parseInt(nm);
    $('input:eq(7)').val(((10000-nm)*3)/50);

    var hell = $('input:eq(8)').val();
    hell = parseInt(hell);
    $('input:eq(9)').val((15000-hell)/25);
  });
});
