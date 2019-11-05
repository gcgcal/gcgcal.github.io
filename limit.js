$(function($){
  $('input').on('keyup change',function(){
	var ssr0_num = $('input[id=ssr0_num]').val();
	var ssr1_num = $('input[id=ssr1_num]').val();
	var ssr2_num = $('input[id=ssr2_num]').val();
	var sr0_num = $('input[id=sr0_num]').val();
	var sr1_num = $('input[id=sr1_num]').val();
	var sr2_num = $('input[id=sr2_num]').val();
	var w = $('input[id=w]').val();
	var b = $('input[id=b]').val();
	var p = $('input[id=p]').val();
	var g = $('input[id=g]').val();

	//必要個数
	req_w = 420*parseInt(ssr0_num);
	req_w += 370*parseInt(ssr1_num);
	req_w += 270*parseInt(ssr2_num);
	req_w += 230*parseInt(sr0_num);
	req_w += 200*parseInt(sr1_num);
	req_w += 120*parseInt(sr2_num);

	req_b = 160*parseInt(ssr0_num);
	req_b += 140*parseInt(ssr1_num);
	req_b += 100*parseInt(ssr2_num);
	req_b += 95*parseInt(sr0_num);
	req_b += 80*parseInt(sr1_num);
	req_b += 50*parseInt(sr2_num);

	req_p = 85*parseInt(ssr0_num);
	req_p += 85*parseInt(ssr1_num);
	req_p += 50*parseInt(ssr2_num);
	req_p += 50*parseInt(sr0_num);
	req_p += 50*parseInt(sr1_num);
	req_p += 30*parseInt(sr2_num);

	req_g = 10*parseInt(ssr0_num);
	req_g += 10*parseInt(ssr1_num);
	req_g += 6*parseInt(ssr2_num);
	req_g += 5*parseInt(sr0_num);
	req_g += 5*parseInt(sr1_num);
	req_g += 3*parseInt(sr2_num);

	$('input[id=req_w]').val(req_w);
	$('input[id=req_b]').val(req_b);
	$('input[id=req_p]').val(req_p);
	$('input[id=req_g]').val(req_g);

	//不足数
        beh_w = req_w - w;
        beh_b = req_b - b;
        beh_p = req_p - p;
        beh_g = req_g - g;
	$('input[id=beh_w]').val(beh_w);
	$('input[id=beh_b]').val(beh_b);
	$('input[id=beh_p]').val(beh_p);
	$('input[id=beh_g]').val(beh_g);

        //周回数
        inf = [18,6,3]
        nig = [14,5,2]
        hard = [10,3,1]
	var dub = $('input[id="dub"]').prop('checked');
        if (dub == true){
                for(i=0;i<3;i++){
                        inf[i] *= 2;
                        nig[i] *= 2;
                        hard[i] *= 2;
                }
        }
        round_iw = (beh_w)/inf[0];
        round_ib = (beh_b)/inf[1];
        round_ip = (beh_p)/inf[2];
        round_nw = (beh_w)/nig[0];
        round_nb = (beh_b)/nig[1];
        round_np = (beh_p)/nig[2];
        round_hw = (beh_w)/hard[0];
        round_hb = (beh_b)/hard[1];
        round_hp = (beh_p)/hard[2];
        $('input[id=round_iw]').val(Math.ceil(round_iw));
        $('input[id=round_ib]').val(Math.ceil(round_ib));
        $('input[id=round_ip]').val(Math.ceil(round_ip));
        $('input[id=round_nw]').val(Math.ceil(round_nw));
        $('input[id=round_nb]').val(Math.ceil(round_nb));
        $('input[id=round_np]').val(Math.ceil(round_np));
        $('input[id=round_hw]').val(Math.ceil(round_hw));
        $('input[id=round_hb]').val(Math.ceil(round_hb));
        $('input[id=round_hp]').val(Math.ceil(round_hp));
  });
});
