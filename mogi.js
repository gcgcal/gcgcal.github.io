$(function($){
  $('input[type="number"]').on('keyup change',function(){
    var easy = $('input[id=easy]').val();
    p = parseInt(easy);
    t = (30000-(p*6))/50;
    $('input:eq(1)').val(t);

    var nomal = $('input[id=nomal]').val();
    p = parseInt(nomal);
    t = (30000-(p*5))/50;
    $('input:eq(3)').val(t);

    var hard = $('input[id=hard]').val();
    p = parseInt(hard);
    t = (30000-(p*4))/50;
    $('input:eq(5)').val(t);

    var nm = $('input[id=nm]').val();
    p = parseInt(nm);
    t = (30000-(p*3))/50;
    $('input:eq(7)').val(t);

    var hell = $('input[id=hell]').val();
    p = parseInt(hell);
    t = (30000-(p*2))/50;
    $('input:eq(9)').val(t);
  });
});
