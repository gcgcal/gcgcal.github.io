$(function($){
 // 経験値テーブル
  exptable=[0,133,320,583,989,1551,2281,3188,4280,5566,7051,8742,12767,10863,15112,17685,20491,23534,26819,30351,34133,38168,42462,47016,51836,56924,62283,67918,73830,80023,86501,93265,100319,107665,115306,123246,131486,140028,148877,158033,171427,185592,200555,216339,232969,250472,268871,288192,308461,329704,351946,375213,399533,424931,451433,479067,507859,537836,569025,601454,635149,670139,706451,744112,783152,823597,865476,908817,953649,1000000]
  // 必要経験値計算
  function exp(){
        var now = $('input[id=level]').val();
        var ew = $('input[id=ew]').val();
        var eb = $('input[id=eb]').val();
        var ep = $('input[id=ep]').val();
        var eg = $('input[id=eg]').val();
        var dub = $('input[id="dub"]').prop('checked');
        getexp = 3750*3+15000*1;

        reqexp = exptable[69]-exptable[now-1];
        reqexp = reqexp-((750*parseInt(ew))+(3750*parseInt(eb))+(15000*parseInt(ep))+(75000*parseInt(eg)));

        if (dub == true){
                getexp *= 2;
        }
        getexp += 3750*2;
        $('input[id=reqexp]').val(Math.ceil(reqexp));
        $('input[id=round_exp]').val(Math.ceil(reqexp/getexp));
  };
  // レベルアップ計算
  $('input[name=db]').on('keyup change',function(){
	var wb = $('input[id=wb]').val()
	var bb = $('input[id=bb]').val()
	var pb = $('input[id=pb]').val()
	var gb = $('input[id=gb]').val()
	var wa = $('input[id=wa]').val()
	var ba = $('input[id=ba]').val()
	var pa = $('input[id=pa]').val()
	var ga = $('input[id=ga]').val()

        getexp = 750*wb+3750*bb+15000*pb+75000*gb+500*wa+2500*ba+10000*pa+50000*ga;
	reqcry = 500*(wb+wa)+2500*(bb+ba)+10000*(pb+pa)+50000*(gb+ga);
        $('input[id=exp]').val(Math.ceil(getexp));
        $('input[id=cry]').val(Math.ceil(reqcry));

        lv70 = Math.floor(getexp/1000000);
        $('input[id=lv70]').val(lv70);

        getexp -= 1000000*lv70;
        for(i=1;getexp>=0;i++){
                getexp -= exptable[i]-exptable[i-1];
        }
        $('input[id=rem]').val(Math.ceil(i-1));

	//必要経験値計算
        $('input[id=level]').val(Math.ceil(i-1));
	exp();
  });
  // 必要経験値だけ計算
  $('input[name=exp]').on('keyup change',function(){
	  exp();
  });
});
