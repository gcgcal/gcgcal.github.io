function ExpCalc() {
	now = document.form2.level.value;
	dub = document.form2.dub.checked;
	w = document.form2.w.value;
        b = document.form2.b.value;
        p = document.form2.p.value;
        g = document.form2.g.value;
	exptable=[0,133,320,583,989,1551,2281,3188,4280,5566,7051,8742,12767,10863,15112,17685,20491,23534,26819,30351,34133,38168,42462,47016,51836,56924,62283,67918,73830,80023,86501,93265,100319,107665,115306,123246,131486,140028,148877,158033,171427,185592,200555,216339,232969,250472,268871,288192,308461,329704,351946,375213,399533,424931,451433,479067,507859,537836,569025,601454,635149,670139,706451,744112,783152,823597,865476,908817,953649,1000000]
	getexp = 3750*3+15000*1;

	reqexp = exptable[70-1]-exptable[now-1]
	reqexp = reqexp-((750*parseInt(w))+(3750*parseInt(b))+(15000*parseInt(p))+(75000*parseInt(g)))

	if (dub == true){
		getexp *= 2;
	}
	getexp += 3750*2;
	round_exp = reqexp/getexp
	document.form2.round_exp.value = Math.ceil(round_exp);
	document.form2.reqexp.value = Math.ceil(reqexp);
}
