
KJE.definitions.set("**401K_ANNUAL_LIMITS**","The annual maximum for 2023 is $22,500.  If you are age 50 or over, a 'catch-up' provision allows you to contribute an additional $7,500 into your account. The SECURE 2.0 Act of 2022 adds an additional catch-up provision starting in 2025.  The current calculator does not include this new catch-up contribution.  The new special catch-up contribution, when you are age 60 to 63, allows an additional contribution of $10,000 or 150% of the standard catch-up contribution limit from 2024 (whichever is higher). The $10,000 maximum is adjusted for inflation starting in 2026.");KJE.definitions.set("**401k_ANNUAL_LIMITS_LONG**","The annual maximum for 2023 is $22,500 (the Code Section 402(g) limit). If you are age 50 or over, a 'catch-up' provision allows you to contribute even more to your 401(k) account, provided your employer's plan allows catch-up contributions. In 2023, employees age 50 or older can deposit an additional $7,500 into their 401(k) account. The SECURE 2.0 Act of 2022 adds an additional catch-up provision starting in 2025.  The current calculator does not include this new catch-up contribution.  The new special catch-up contribution, when you are age 60 to 63, allows an additional contribution of $10,000 or %150 of the standard catch-up contribution limit from 2024 (whichever is higher). The $10,000 maximum is adjusted for inflation starting in 2026.");KJE.definitions.set("**401k_HIGHLY_COMPENSATED**","If you expect your salary to be $150,000 or more in 2023 or was $135,000 or more in 2022, you may need to contact your employer to see if these additional contribution limits apply to you.");KJE.definitions.set("**401k_HIGHLY_COMPENSATED_LONG**","Employees classified as 'Highly Compensated' (those employees who either earn over $150,000 (in 2023) or own more than 5% of the company) may be subject to a lower annual contribution limit due to the rate of participation of Non-highly Compensated employees versus Highly Compensated employees during the year.");KJE.definitions.set("**403B_ANNUAL_LIMITS**","The annual maximum for 2023 is $22,500.  If you are age 50 or over, a 'catch-up' provision allows you to contribute an additional $7,500 into your 403(b) account.");KJE.definitions.set("**PLAN_YEAR**","2023");KJE.definitions.set("**FICA_MAX**","$160,200");KJE.Retire401kCalc=function(){this.MATCH_SALARY=KJE.parameters.get("MATCH_SALARY",false);this.MSG_ERROR2=KJE.parameters.get("MSG_ERROR2","This calculator requires you be at least 1 year from retirement.");this.EMPLOYER_PROFIT_SHARE_FIXED=KJE.parameters.get("EMPLOYER_PROFIT_SHARE_FIXED",false);this.CONTRIBUTE_ANNUAL_FIXED=KJE.parameters.get("CONTRIBUTE_ANNUAL_FIXED",false);this.CONTRIBUTE_DECIMALS=KJE.parameters.get("CONTRIBUTE_DECIMALS",2);this.MINIMUM_CONTRIBUTE_PERCENT=KJE.parameters.get("MINIMUM_CONTRIBUTE_PERCENT",0);this.MAXIMUM_CONTRIBUTE_PERCENT=KJE.parameters.get("MAXIMUM_CONTRIBUTE_PERCENT",100);this.CALC_EMPLOYER_MATCH=KJE.parameters.get("CALC_EMPLOYER_MATCH",true);this.DEPOSIT_FREQUENCY=KJE.parameters.get("DEPOSIT_FREQUENCY",12);this.COMPOUND_INTEREST=KJE.parameters.get("COMPOUND_INTEREST",1);this.USE_457_MATCHRULES=KJE.parameters.get("USE_457_MATCHRULES",false);this.PLAN_YEAR=2023;this.ANNUAL_MAX=[22500,22500];this.CATCHUP_MAX=[7500,7500];this.INVESTMENT_FEE=0;this.CONTRIBUTE_ANNUAL_FIXED=false;this.CONTRIBUTE_MAXIMUM=0;this.TOTAL_AT_END_OF_INVESTMENT_WITHFEE=0;this.EMPLOYER_PROFIT_SHARE=0;this.PROFIT_SHARE_ANNUAL=0;this.PROFIT_SHARE_MONTHLY=0;this.CONTRIBUTE_ANNUAL=0;this.EMPLOYER_CALC_MAX=0;this.YEARS_UNTIL_RETIREMENT=0;this.sSchedule=new KJE.Repeating()};KJE.Retire401kCalc.prototype.clear=function(){this.STARTING_AMOUNT=0;this.RATE_OF_RETURN=0;this.CURRENT_AGE=0;this.AGE_OF_RETIREMENT=0;this.ANNUAL_SALARY=0;this.CONTRIBUTE_PERCENT=0;this.EMPLOYER_MATCH=0;this.EMPLOYER_MAX=0;this.SALARY_INCREASE=0};KJE.Retire401kCalc.prototype.calculate=function(L){var d=KJE;if(!this.CALC_EMPLOYER_MATCH){this.EMPLOYER_MATCH=0;this.EMPLOYER_MAX=0}if(this.EMPLOYER_MAX==0){this.EMPLOYER_MATCH=0}var v=this.STARTING_AMOUNT;var Q=this.DEPOSIT_FREQUENCY;var w=this.RATE_OF_RETURN;var c=this.COMPOUND_INTEREST;var q=this.CURRENT_AGE;var z=this.AGE_OF_RETIREMENT;var j=this.ANNUAL_SALARY;var B=this.CONTRIBUTE_PERCENT;var O=this.EMPLOYER_MATCH;var t=this.EMPLOYER_MAX;var p=this.SALARY_INCREASE;var b=0;var u=0;var M=0;this.YEARS_UNTIL_RETIREMENT=z-q;if(this.YEARS_UNTIL_RETIREMENT<=0){throw (this.MSG_ERROR2)}var P=this.YEARS_UNTIL_RETIREMENT;this.CONTRIBUTE_MAXIMUM=this.ANNUAL_MAX[0]+(q<50?0:this.CATCHUP_MAX[0]);if(this.CONTRIBUTE_ANNUAL_FIXED){b=this.CONTRIBUTE_ANNUAL;this.CONTRIBUTE_ANNUAL=Math.min(b,this.CONTRIBUTE_MAXIMUM);B=d.round(this.CONTRIBUTE_ANNUAL/j,3)*100}else{b=d.round((B/100)*j,2);this.CONTRIBUTE_ANNUAL=Math.min(b,this.CONTRIBUTE_MAXIMUM)}if(this.MAXIMUM_CONTRIBUTE_PERCENT<B){throw ("Percent to contribute must be less than "+d.percent(this.MAXIMUM_CONTRIBUTE_PERCENT/100))}if(this.MATCH_SALARY){if(B<this.MINIMUM_CONTRIBUTE_PERCENT){u=0}else{if(j>t){u=d.round(t*(O/100),2)}else{u=d.round(j*(O/100),2)}}this.EMPLOYER_CALC_MAX=this.MINIMUM_CONTRIBUTE_PERCENT/100;M=u}else{var k=d.round(j*(t/100),2);u=Math.min(k,this.CONTRIBUTE_MAXIMUM);this.EMPLOYER_CALC_MAX=(u/j);M=d.round(Math.min(u,this.CONTRIBUTE_ANNUAL)*(O/100),2);u=d.round(u*(O/100),2)}if(this.USE_457_MATCHRULES){var Y=M+this.CONTRIBUTE_ANNUAL;if(Y>this.CONTRIBUTE_MAXIMUM){M=d.round((M/Y)*this.CONTRIBUTE_MAXIMUM,2);this.CONTRIBUTE_ANNUAL=this.CONTRIBUTE_MAXIMUM-M}}var V=d.round(this.CONTRIBUTE_ANNUAL/12,2);var h=d.round(M/12,2);if(this.EMPLOYER_PROFIT_SHARE_FIXED){this.EMPLOYER_PROFIT_SHARE=d.round(this.PROFIT_SHARE_ANNUAL/j,3)*100}else{this.PROFIT_SHARE_ANNUAL=d.round(j*(this.EMPLOYER_PROFIT_SHARE/100),2)}this.PROFIT_SHARE_MONTHLY=d.round(this.PROFIT_SHARE_ANNUAL/12,2);var m=0;var y=0;var W=h+V+this.PROFIT_SHARE_MONTHLY;var f=Math.round(P);this.DR_INTEREST=KJE.FloatArray(f);this.DR_BALANCE=KJE.FloatArray(f);this.DR_BALANCE_WITHFEE=KJE.FloatArray(f);this.DR_INTEREST_WITHFEE=KJE.FloatArray(f);this.DR_INTEREST_NOMATCH=KJE.FloatArray(f);this.DR_BALANCE_NOMATCH=KJE.FloatArray(f);this.DR_MATCH=KJE.FloatArray(f+1);this.DR_CONTRIBUTE=KJE.FloatArray(f+1);var Z=0;var A=0;var r=0;var J=0;var H=0;var N=0;var o=0;var K=0;var g=0;if(c==Q){Z=(w/Q)/100;A=((w-this.INVESTMENT_FEE)/Q)/100}else{var C,s=0;if(c==1){C=w/100;s=(w-this.INVESTMENT_FEE)/100}else{C=1/Math.pow((1+w/(c*100)),(-1*c))-1;s=1/Math.pow((1+(w-this.INVESTMENT_FEE)/(c*100)),(-1*c))-1}Z=KJE.ROR_PERIOD(C,Q);A=KJE.ROR_PERIOD(s,Q)}var X=Q*P;var G=v;var l=v;this.TOTAL_AT_END_OF_INVESTMENT_WITHFEE=v;var T=W;var a=V;var x=this.CONTRIBUTE_MAXIMUM;this.DR_CONTRIBUTE[o]=this.CONTRIBUTE_ANNUAL;this.DR_MATCH[o]=M;var aa=j;for(var R=0;R<X;R++){G+=T;N=Z*G;J+=N;G+=N;this.TOTAL_AT_END_OF_INVESTMENT_WITHFEE+=T;g=A*this.TOTAL_AT_END_OF_INVESTMENT_WITHFEE;K+=g;this.TOTAL_AT_END_OF_INVESTMENT_WITHFEE+=g;l+=a;H=A*l;r+=H;l+=H;if(((R+1)%Q)==0){var I=d.round(1+p/100,3);aa*=I;this.DR_BALANCE[o]=G;this.DR_INTEREST[o]=J;J=0;this.DR_BALANCE_NOMATCH[o]=l;this.DR_INTEREST_NOMATCH[o]=r;r=0;this.DR_BALANCE_WITHFEE[o]=this.TOTAL_AT_END_OF_INVESTMENT_WITHFEE;this.DR_INTEREST_WITHFEE[o]=K;K=0;y+=this.DR_CONTRIBUTE[o];m+=this.DR_MATCH[o];o++;var E=((o)<this.ANNUAL_MAX.length?(o):this.ANNUAL_MAX.length-1);x=this.ANNUAL_MAX[E]+(q+o<50?0:this.CATCHUP_MAX[E]);if(this.CONTRIBUTE_ANNUAL_FIXED){this.DR_CONTRIBUTE[o]=d.round(Math.min(this.CONTRIBUTE_ANNUAL,x),2)}else{var S=Math.min(d.round((B/100)*aa,2),x);this.DR_CONTRIBUTE[o]=d.round(Math.min(S,x),2)}if(this.MATCH_SALARY){if(B<this.MINIMUM_CONTRIBUTE_PERCENT){this.DR_MATCH[o]=0}else{if(aa>t){this.DR_MATCH[o]=d.round(t*(O/100),2)}else{this.DR_MATCH[o]=d.round(aa*(O/100),2)}}}else{this.DR_MATCH[o]=d.round(Math.min(d.round(aa*(O/100)*(t/100),2),this.DR_CONTRIBUTE[o]*(O/100)),2)}if(this.USE_457_MATCHRULES){var Y=this.DR_CONTRIBUTE[o]+this.DR_MATCH[o];if(Y>x){this.DR_MATCH[o]=d.round((this.DR_MATCH[o]/Y)*x,2);this.DR_CONTRIBUTE[o]=x-this.DR_MATCH[o]}}if(this.EMPLOYER_PROFIT_SHARE_FIXED){this.DR_MATCH[o]+=this.PROFIT_SHARE_ANNUAL}else{this.DR_MATCH[o]+=d.round(aa*(this.EMPLOYER_PROFIT_SHARE/100),2)}a=d.round(this.DR_CONTRIBUTE[o]/12,2);T=d.round(a+this.DR_MATCH[o]/12,2)}}this.cats=new Array(f);var U=0;var D=1;var e=1;if(L){var F=this.sSchedule;F.clearRepeat();F.addHeader(F.sReportCol("Age",1),F.sReportCol("Contributions",2),(O>0||this.EMPLOYER_PROFIT_SHARE>0?F.sReportCol("Employer Match",3):null),(this.INVESTMENT_FEE>0||(this.EMPLOYER_PROFIT_SHARE<=0&&O<=0)?null:F.sReportCol("Balance Without<br />Employer Match",4)),F.sReportCol((O>0||this.EMPLOYER_PROFIT_SHARE>0)?"Balance With<br />Employer Match":"Ending<br />Balance",5),(this.INVESTMENT_FEE>0?F.sReportCol("Balance With<br />Investment Fee",6):null));F.addRepeat("&nbsp;","&nbsp;",(O||this.EMPLOYER_PROFIT_SHARE>0>0?"&nbsp;":null),(this.INVESTMENT_FEE>0||(O<=0&&this.EMPLOYER_PROFIT_SHARE<=0)?null:d.dollars(v)),d.dollars(v),(this.INVESTMENT_FEE>0?d.dollars(v):null))}for(var R=1;R<=f;R++){U=R-1;this.cats[U]=""+((U+q));if(L){D=1;e++;F.addRepeat(d.number(U+q),d.dollars(this.DR_CONTRIBUTE[U]),(O>0||this.EMPLOYER_PROFIT_SHARE>0?d.dollars(this.DR_MATCH[U]):null),(this.INVESTMENT_FEE>0||(O<=0&&this.EMPLOYER_PROFIT_SHARE<=0)?null:d.dollars(this.DR_BALANCE_NOMATCH[U])),d.dollars(this.DR_BALANCE[U]),(this.INVESTMENT_FEE>0?d.dollars(this.DR_BALANCE_WITHFEE[U]):null))}}this.EMPLOYER_MATCH=O;this.EMPLOYER_MAX=t;this.TOTAL_AMOUNT_YOU_HAVE_PAID_IN=y;this.TOTAL_AT_END_OF_INVESTMENT=G;this.NOMATCH_AT_END_OF_INVESTMENT=l;this.YEARS=P;this.CONTRIBUTE_DOLLARS=b;this.CONTRIBUTE_MONTHLY=V;this.CONTRIBUTE_TOTAL=W;this.EMPLOYER_DOLLARS=u;this.EMPLOYER_ANNUAL=M;this.EMPLOYER_MONTHLY=h;this.TOTAL_AMOUNT_EMPLOYER_PAID_IN=m};KJE.Retire401kCalc.prototype.formatReport=function(b){var c=KJE;var a=this.iDecimal;var d=b;d=KJE.replace("TOTAL_AT_END_OF_INVESTMENT_WITHFEE",c.dollars(this.TOTAL_AT_END_OF_INVESTMENT_WITHFEE,0),d);d=KJE.replace("SALARY_INCREASE",c.percent(this.SALARY_INCREASE/100,1),d);d=KJE.replace("INVESTMENT_FEE",c.percent(this.INVESTMENT_FEE/100,1),d);d=KJE.replace("CONTRIBUTE_MAXIMUM",c.dollars(this.CONTRIBUTE_MAXIMUM)+"*",d);d=KJE.replace("ANNUAL_SALARY",c.dollars(this.ANNUAL_SALARY),d);d=KJE.replace("CONTRIBUTE_PERCENT",c.percent(this.CONTRIBUTE_PERCENT/100,this.CONTRIBUTE_DECIMALS),d);d=KJE.replace("EMPLOYER_MATCH",c.percent(this.EMPLOYER_MATCH/100,2),d);d=KJE.replace("EMPLOYER_PROFIT_SHARE",c.percent(this.EMPLOYER_PROFIT_SHARE/100,(this.EMPLOYER_PROFIT_SHARE_FIXED?3:0)),d);d=KJE.replace("PROFIT_SHARE_ANNUAL",c.dollars(this.PROFIT_SHARE_ANNUAL),d);d=KJE.replace("PROFIT_SHARE_MONTHLY",c.dollars(this.PROFIT_SHARE_MONTHLY),d);if(this.MATCH_SALARY){d=KJE.replace("EMPLOYER_MAX",c.dollars(this.EMPLOYER_MAX*(this.EMPLOYER_MATCH/100),2),d)}else{d=KJE.replace("EMPLOYER_MAX",c.percent(this.EMPLOYER_MAX/100,2),d)}d=KJE.replace("EMPLOYER_MAX",c.percent(this.EMPLOYER_MAX/100,2),d);d=KJE.replace("EMPLOYER_CALC_MAX",c.percent(this.EMPLOYER_CALC_MAX,2),d);d=KJE.replace("YEARS_UNTIL_RETIREMENT",c.number(this.YEARS_UNTIL_RETIREMENT,0),d);d=KJE.replace("CURRENT_AGE",c.number(this.CURRENT_AGE,0),d);d=KJE.replace("AGE_OF_RETIREMENT",c.number(this.AGE_OF_RETIREMENT,0),d);d=KJE.replace("CONTRIBUTE_DOLLARS",c.dollars(this.CONTRIBUTE_DOLLARS,2),d);d=KJE.replace("CONTRIBUTE_ANNUAL",c.dollars(this.CONTRIBUTE_ANNUAL,2),d);d=KJE.replace("CONTRIBUTE_MONTHLY",c.dollars(this.CONTRIBUTE_MONTHLY,2),d);d=KJE.replace("CONTRIBUTE_TOTAL",c.dollars(this.CONTRIBUTE_TOTAL,2),d);d=KJE.replace("CONTRIBUTE_MONTHLY_TOTAL",c.dollars(this.CONTRIBUTE_MONTHLY+this.EMPLOYER_MONTHLY,2),d);d=KJE.replace("EMPLOYER_DOLLARS",c.dollars(this.EMPLOYER_DOLLARS,2),d);d=KJE.replace("EMPLOYER_ANNUAL",c.dollars(this.EMPLOYER_ANNUAL,2),d);d=KJE.replace("EMPLOYER_MONTHLY",c.dollars(this.EMPLOYER_MONTHLY,2),d);d=KJE.replace("TOTAL_AMOUNT_EMPLOYER_PAID_IN",c.dollars(this.TOTAL_AMOUNT_EMPLOYER_PAID_IN,2),d);d=KJE.replace("STARTING_AMOUNT",c.dollars(this.STARTING_AMOUNT),d);d=KJE.replace("YEARS",c.number(this.YEARS),d);d=KJE.replace("RATE_OF_RETURN",c.percent(this.RATE_OF_RETURN/100,2),d);d=KJE.replace("COMPOUND_INTEREST",this.COMPOUND_DESC,d);d=KJE.replace("TOTAL_AMOUNT_YOU_HAVE_PAID_IN",c.dollars(this.TOTAL_AMOUNT_YOU_HAVE_PAID_IN,2),d);d=KJE.replace("TOTAL_AT_END_OF_INVESTMENT",c.dollars(this.TOTAL_AT_END_OF_INVESTMENT),d);d=KJE.replace("NOMATCH_AT_END_OF_INVESTMENT",c.dollars(this.NOMATCH_AT_END_OF_INVESTMENT),d);d=KJE.replace("PLAN_YEAR",c.input(this.PLAN_YEAR),d);d=KJE.replace("PLAN_MAX_CATCHUP",c.dollars(this.ANNUAL_MAX[0]+this.CATCHUP_MAX[0]),d);d=KJE.replace("PLAN_MAX",c.dollars(this.ANNUAL_MAX[0]),d);d=KJE.replace("PLAN_CATCHUP",c.dollars(this.CATCHUP_MAX[0]),d);d=d.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());this.sSchedule.clearRepeat();return d};KJE.CalcName="401(k) Calculator";KJE.CalcType="Retire401k";KJE.CalculatorTitleTemplate="Your total is KJE1 after KJE2 years.";KJE.initialize=function(){KJE.CalcControl=new KJE.Retire401kCalc();KJE.GuiControl=new KJE.Retire401k(KJE.CalcControl)};KJE.Retire401k=function(j){var d=KJE;var b=KJE.gLegend;var g=KJE.inputs.items;this.MSG_AGE=KJE.parameters.get("MSG_AGE","at age");KJE.PercentSlider("CONTRIBUTE_PERCENT","Percent to contribute",j.MINIMUM_CONTRIBUTE_PERCENT,j.MAXIMUM_CONTRIBUTE_PERCENT,j.CONTRIBUTE_DECIMALS);KJE.DollarSlider("ANNUAL_SALARY","Annual salary",0,KJE.parameters.get("MAX_ANNUAL_SALARY",1000000));KJE.NumberSlider("CURRENT_AGE","Current age",KJE.parameters.get("MINIMUM_CURRENT_AGE",15),90,0);KJE.NumberSlider("AGE_OF_RETIREMENT","Age at retirement",10,90,0);KJE.DollarSlider("STARTING_AMOUNT","Current 401(k) balance",0,10000000);KJE.InvestRateSlider("RATE_OF_RETURN","Annual rate of return");KJE.PercentSlider("SALARY_INCREASE","Annual salary increase",0,12,1);KJE.PercentSlider("EMPLOYER_MATCH","Employer match",0,400,2);KJE.PercentSlider("EMPLOYER_MAX","Employer match ends",0,(j.MATCH_SALARY?5000000:100),2);KJE.Label("TOTAL_AMOUNT_YOU_HAVE_PAID_IN","Total employee contributions",null,null,"KJEBold");KJE.Label("TOTAL_AMOUNT_EMPLOYER_PAID_IN","Total employer contributions",null,null,"KJEBold");this.GRAPH_LABEL_2=KJE.parameters.get("MSG_GRAPH_LABEL_2","With employer match");this.GRAPH_LABEL_3=KJE.parameters.get("MSG_GRAPH_LABEL_3","Without employer match");var h=KJE.gNewGraph(KJE.gCOLUMN,"GRAPH1",true,false,KJE.colorList[1],KJE.parameters.get("MSG_GRAPH_LABEL_1","401(k) Balance by Year"));h._legend._iOrientation=(b.BOTTOM);h._showItemLabelOnTop=true;var a=KJE.parameters.get("MSG_DROPPER_TITLE","401(k) Employee Savings Plan:");var c=KJE.parameters.get("MSG_DROPPER_CLOSETITLE","Contribute KJE1 of your KJE2 salary and retire at KJE3");var e=function(){return a+KJE.subText(KJE.getKJEReplaced(c,g.CONTRIBUTE_PERCENT.getFormatted(),g.ANNUAL_SALARY.getFormatted(),g.AGE_OF_RETIREMENT.getFormatted()),"KJECenter")};KJE.addDropper(new KJE.Dropper("INPUTS",true,a,e),KJE.colorList[0]);var k=KJE.parameters.get("MSG_DROPPER2_TITLE","401(k) Employer Match:");var f=KJE.parameters.get("MSG_DROPPER_CLOSETITLE","Employer match of KJE1 up to KJE2 of your salary.");var i=function(){return k+KJE.subText(KJE.getKJEReplaced(f,g.EMPLOYER_MATCH.getFormatted(),g.EMPLOYER_MAX.getFormatted()),"KJECenter")};KJE.addDropper(new KJE.Dropper("INPUTS2",true,k,i),KJE.colorList[0])};KJE.Retire401k.prototype.setValues=function(b){var a=KJE.inputs.items;b.CONTRIBUTE_PERCENT=a.CONTRIBUTE_PERCENT.getValue();b.ANNUAL_SALARY=a.ANNUAL_SALARY.getValue();b.CURRENT_AGE=a.CURRENT_AGE.getValue();b.AGE_OF_RETIREMENT=a.AGE_OF_RETIREMENT.getValue();b.STARTING_AMOUNT=a.STARTING_AMOUNT.getValue();b.RATE_OF_RETURN=a.RATE_OF_RETURN.getValue();b.SALARY_INCREASE=a.SALARY_INCREASE.getValue();b.EMPLOYER_MATCH=a.EMPLOYER_MATCH.getValue();b.EMPLOYER_MAX=a.EMPLOYER_MAX.getValue()};KJE.Retire401k.prototype.refresh=function(e){var d=KJE;var c=KJE.gLegend;var b=KJE.inputs.items;var a=KJE.gGraphs[0];KJE.setTitleTemplate(d.dollars(e.TOTAL_AT_END_OF_INVESTMENT),d.number(e.YEARS));a.removeAll();a.setGraphCategories(e.cats);a._showItemLabel=(e.DR_BALANCE.length<-4);if(e.CALC_EMPLOYER_MATCH){a.add(new KJE.gGraphDataSeries(e.DR_BALANCE,this.GRAPH_LABEL_2,a.getColor(1)," "+d.dollars(e.TOTAL_AT_END_OF_INVESTMENT),this.GRAPH_LABEL_2+" "+this.MSG_AGE));a._legend.setVisible(true)}else{a._legend.setVisible(false)}a.add(new KJE.gGraphDataSeries(e.DR_BALANCE_NOMATCH,this.GRAPH_LABEL_3,a.getColor(2)," "+d.dollars(e.NOMATCH_AT_END_OF_INVESTMENT),this.GRAPH_LABEL_3+" "+this.MSG_AGE));a.paint();b.TOTAL_AMOUNT_YOU_HAVE_PAID_IN.setText(d.dollars(e.TOTAL_AMOUNT_YOU_HAVE_PAID_IN));b.TOTAL_AMOUNT_EMPLOYER_PAID_IN.setText(d.dollars(e.TOTAL_AMOUNT_EMPLOYER_PAID_IN))};KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-CONTRIBUTE_PERCENT'><input id='KJE-CONTRIBUTE_PERCENT' /></div> <div id='KJE-C-ANNUAL_SALARY'><input id='KJE-ANNUAL_SALARY' /></div> <div id='KJE-C-SALARY_INCREASE'><input id='KJE-SALARY_INCREASE' /></div> <div id='KJE-C-CURRENT_AGE'><input id='KJE-CURRENT_AGE' /></div> <div id='KJE-C-AGE_OF_RETIREMENT'><input id='KJE-AGE_OF_RETIREMENT' /></div> <div id='KJE-C-STARTING_AMOUNT'><input id='KJE-STARTING_AMOUNT' /></div> <div id='KJE-C-RATE_OF_RETURN'><input id='KJE-RATE_OF_RETURN' /></div> <div id='KJE-C-TOTAL_AMOUNT_YOU_HAVE_PAID_IN'><div id='KJE-TOTAL_AMOUNT_YOU_HAVE_PAID_IN'></div></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-INPUTS2><div id=KJE-P-INPUTS2>Input information:</div></div> <div id=KJE-E-INPUTS2 > <div id='KJE-C-EMPLOYER_MATCH'><input id='KJE-EMPLOYER_MATCH' /></div> <div id='KJE-C-EMPLOYER_MAX'><input id='KJE-EMPLOYER_MAX' /></div> <div id='KJE-C-TOTAL_AMOUNT_EMPLOYER_PAID_IN'><div id='KJE-TOTAL_AMOUNT_EMPLOYER_PAID_IN'></div></div> <div style=\"height:10px\"></div> </div> **GRAPH1** ";KJE.DefinitionText=" <div id='KJE-D-CONTRIBUTE_PERCENT' ><dt>Percent to contribute</dt><dd>This is the percentage of your annual salary you contribute to your 401(k) plan each year. Your annual 401(k) contribution is subject to maximum limits established by the IRS. **401K_ANNUAL_LIMITS** Employer contributions do not count toward the IRS annual contribution limit. <p>Employees classified as \"Highly Compensated\" may be subject to additional limits based on their employer's overall 401(k) participation. **401k_HIGHLY_COMPENSATED**</dd></div> <div id='KJE-D-ANNUAL_SALARY' ><dt>Annual salary</dt><dd>This is your annual salary from your employer, before taxes and other benefit deductions. Since your contribution and employer match are based on the salary paid to you by your employer, do not include any income you may receive from sources other than your employer.</dd></div> <div id='KJE-D-CURRENT_AGE' ><dt>Current age</dt><dd>Your current age.</dd></div> <div id='KJE-D-AGE_OF_RETIREMENT' ><dt>Age at retirement</dt><dd>Age at which you plan to retire. This calculator assumes that the year you retire, you do not make any contributions to your 401(k). For example, if you retire at age 65, your last contribution occurs when you are actually 64.</dd></div> <div id='KJE-D-STARTING_AMOUNT' ><dt>Current 401(k) balance</dt><dd>The starting balance or current amount you have invested or saved in your 401(k).</dd></div> <div id='KJE-D-RATE_OF_RETURN' ><dt>Annual rate of return</dt><dd>The annual rate of return for your 401(k) account. This calculator assumes that your return is compounded annually and your deposits are made monthly. **ROR_DEFINITION**</dd></div> <div id='KJE-D-SALARY_INCREASE' ><dt>Annual salary increase</dt><dd>The annual percentage you expect your salary to increase. The calculator assumes that your salary will continue to increase at this rate until you retire.</dd></div> <div id='KJE-D-EMPLOYER_MATCH' ><dt>Employer match</dt><dd>The percentage of your annual 401(k) contributions your employer will match. These contributions are often capped. Please read the definition for \"Employer maximum\" for more information. Also note employer contributions do not count toward the IRS annual contribution limit. <p>Matching contributions can also be subject to a vesting schedule. See your plan information for details.</dd></div> <div id='KJE-D-EMPLOYER_MAX' ><dt>Employer maximum</dt><dd>This is the maximum percent of your salary matched by your employer, regardless of the amount you decide to contribute. <p>For example, let's assume your employer provides a 50% match on the first 6% of your annual salary that you contribute to your 401(k). If you have an annual salary of $100,000 and contribute 6%, your contribution will be $6,000 and your employer's 50% match will be $3,000 ($6,000 x 50%), for a total of $9,000. If you only contribute 3%, your contribution will be $3,000 and your employer's 50% match will be $1,500, for a total of $4,500. <p>If you increase your contribution to 10%, you will contribute $10,000. Your employer's 50% match is limited to the first 6% of your salary then limits your employer's contribution to $3,000 on a $100,000 salary. The total 401(k) contribution from you and your employer would therefore be $13,000.</dd></div> ";KJE.ReportText=' <!--HEADING "401(k) Savings Calculator" HEADING--> <h2 class=\'KJEReportHeader KJEFontHeading\'>With a RATE_OF_RETURN return, your 401(k) could be worth TOTAL_AT_END_OF_INVESTMENT after YEARS years. </h2> This was calculated with your current contribution of CONTRIBUTE_ANNUAL per year and a current 401(k) balance of STARTING_AMOUNT. In the current scenario, you will contribute CONTRIBUTE_PERCENT of your annual salary up to the IRS annual maximum of CONTRIBUTE_MAXIMUM. **GRAPH** <p>Your 401(k) total also includes a EMPLOYER_MATCH employer match<!--SALARY_MATCH--> on up to EMPLOYER_MAX of your annual salary<!--SALARY_MATCH_END-->. In the current scenario, your employer is contributing EMPLOYER_ANNUAL annually to your 401(k). <!--SALARY_MATCH-->To receive your employer\'s maximum 401(k) match of EMPLOYER_DOLLARS, you should contribute at least EMPLOYER_CALC_MAX of your annual salary to your 401(k).<!--SALARY_MATCH_END--> Without your employer\'s match, your ending 401(k) would be reduced to NOMATCH_AT_END_OF_INVESTMENT. <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Results Summary</caption> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell60" scope=\'row\'>Current 401(k) balance </th><td class="KJECell KJECell40"> STARTING_AMOUNT </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Years to invest </th><td class="KJECell">YEARS </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Annual rate of return </th><td class="KJECell"> RATE_OF_RETURN </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Annual salary </th><td class="KJECell"> ANNUAL_SALARY</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Expected annual salary increase </th><td class="KJECell" valign=TOP> SALARY_INCREASE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Percent to contribute </th><td class="KJECell"> CONTRIBUTE_PERCENT </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Your 401(k) contribution* </th><td class="KJECell"> CONTRIBUTE_ANNUAL per year</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Your employer\'s 401(k) match </th><td class="KJECell"> EMPLOYER_ANNUAL per year<BR>This is <!--SALARY_MATCH-->a <!--SALARY_MATCH_END-->EMPLOYER_MATCH employer match<!--SALARY_MATCH-->up to a maximum of EMPLOYER_MAX<!--SALARY_MATCH_END--> of your annual salary.</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total you will contribute </th><td class="KJECell"> TOTAL_AMOUNT_YOU_HAVE_PAID_IN </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total your employer will contribute </th><td class="KJECell"> TOTAL_AMOUNT_EMPLOYER_PAID_IN </td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total at age AGE_OF_RETIREMENT </th><td class="KJECellStrong">TOTAL_AT_END_OF_INVESTMENT</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total without employer match </th><td class="KJECellStrong">NOMATCH_AT_END_OF_INVESTMENT</td></tr> </tfoot> </table> </div><P class=KJEFooter>*Your annual 401(k) contribution is subject to maximum limits established by the IRS. The annual maximum for PLAN_YEAR is PLAN_MAX. A "catch-up" provision allows employees age 50 and older to contribute an additional PLAN_CATCHUP into their 401(k) account. Employer contributions do not count toward the IRS annual contribution limit. <h2 class=\'KJEScheduleHeader KJEFontHeading\'>401(k) Balance by Year</h2> **REPEATING GROUP** ';
// 01/02/2023 Copyright 2023 KJE Computer Solutions, Inc.  Licensed for use on data2.profitstarscms.com denmarkstate.com ramseybank.com www.centurybanknet.com foresightbank.com fnb-hartford.com

