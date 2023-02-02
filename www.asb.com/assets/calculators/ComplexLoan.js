
KJE.Default.PAY_WEEKLY=0;KJE.Default.PAY_ACCEL_WEEK=1;KJE.Default.PAY_ACCEL_BI=2;KJE.Default.PAY_BIWEEKLY=3;KJE.Default.PAY_2XMONTHLY=4;KJE.Default.PAY_MONTHLY=5;KJE.Default.PAY_QUARTERLY=6;KJE.Default.PAY_SEMIANNUAL=7;KJE.Default.PAY_ANNUAL=8;KJE.Default.getPayDrop=function(c,b,g){KJE.Default.PAY_PERIOD_IDs=KJE.parameters.get("ARRAY_PAY_PERIODS_IDS",[KJE.Default.PAY_WEEKLY,KJE.Default.PAY_ACCEL_WEEK,KJE.Default.PAY_ACCEL_BI,KJE.Default.PAY_BIWEEKLY,KJE.Default.PAY_2XMONTHLY,KJE.Default.PAY_MONTHLY]);KJE.Default.PAY_PERIODS=KJE.parameters.get("ARRAY_PAY_PERIODS",["weekly","accelerated weekly","accelerated bi-weekly","bi-weekly","semi-monthly","monthly","quarterly","semi-annual","annual"]);KJE.Default.PAY_PERIODS_TITLE=KJE.parameters.get("ARRAY_PAY_PERIODS_TITLE",["Weekly","Accelerated weekly","Accelerated bi-weekly","Bi-weekly","Semi-monthly","Monthly","Quarterly","Semi-annual","Annual"]);KJE.Default.PAY_FREQUENCY=[52,12,12,26,24,12,4,2,1];KJE.Default.PAY_FREQUENCY_ACCELERATED=[52,52,26,26,24,12,4,2,1];KJE.Default.PAY_ACCELERATED=[false,true,true,false,false,false,false,false,false];var a=KJE.Default.PAY_PERIOD_IDs;var f=a.length;var e=KJE.Default.PAY_PERIODS_TITLE;var d=new Array(f);for(i=0;i<f;i++){d[i]=e[a[i]]}return KJE.getDropBox(c,KJE.parameters.get(c,(!b?KJE.Default.PAY_LOAN_IDs:b)),a,d,g)};KJE.SimpleLoanCalc=function(){KJE.parameters.getSet("MSG_REPEAT_TITLE","Payment Schedule");this.TERM_PRODUCT="";this.LOAN_AMOUNT_DECIMALS=KJE.parameters.get("LOAN_AMOUNT_DECIMALS",0);this.INPUT_YEARS=KJE.parameters.get("INPUT_YEARS",false);this.USE_ACCEL_WEEKLYPAYMENTS=KJE.parameters.get("USE_ACCEL_WEEKLYPAYMENTS",false);this.MSG_GRAPH_BY_YEAR=KJE.parameters.get("MSG_GRAPH_BY_YEAR","Balance after year");this.MSG_GRAPH_BY_PAYMENT=KJE.parameters.get("MSG_GRAPH_BY_PAYMENT","Balance after payment");this.MSG_YEAR_NUMBER=KJE.parameters.get("MSG_YEAR_NUMBER","Year Number");this.MSG_PAYMENT_NUMBER=KJE.parameters.get("MSG_PAYMENT_NUMBER","Payment Number");this.MSG_LOAN_TITLE=KJE.parameters.get("MSG_LOAN_TITLE","Loan amount is KJE1");this.MSG_GRAPH_TITLE=KJE.parameters.get("MSG_GRAPH_TITLE","Balances for a KJE1 loan");this.MSG_REPORT_LOAN=KJE.parameters.get("MSG_REPORT_LOAN","A PERIOD_LABEL payment of MONTHLY_PAYMENT at INTEREST_RATE for TERM periods will give you a loan amount of LOAN_AMOUNT.");this.MSG_REPORT_PAYMENT=KJE.parameters.get("MSG_REPORT_PAYMENT","A loan amount of LOAN_AMOUNT at INTEREST_RATE for TERM PERIOD_LABEL payments will give you a payment of MONTHLY_PAYMENT.");this.DEFERRED_PAYMENT=KJE.parameters.get("DEFERRED_PAYMENT",false);this.TERM=0;this.PAYMENT_CALC=true;this.ANNUAL_PERIODS=12;this.PERIOD_LABEL="";this.bUSE_CAMORTGAGE=KJE.parameters.get("USE_CAMORTGAGE",false);this.DS_BALANCE=null;this.DS_INTEREST=null;this.DS_PRINCIPAL=null;this.cats=null;this.sSchedule=new KJE.Repeating()};KJE.SimpleLoanCalc.prototype.clear=function(){this.MONTHLY_PAYMENT=0;this.INTEREST_RATE=0;this.LOAN_AMOUNT=0;this.PAYMENT_TYPE=KJE.Default.PAY_MONTHLY;this.DEFERRED_FOR=-1};KJE.SimpleLoanCalc.prototype.calculate=function(w){var f=KJE;var e=this.INTEREST_RATE;var j=this.PAYMENT_TYPE;this.STARTING_AMOUNT=this.LOAN_AMOUNT;var d=0;var b=0;if(this.DEFERRED_PAYMENT){this.LOAN_AMOUNT=f.round(this.LOAN_AMOUNT+this.LOAN_AMOUNT*(e/1200*(1+this.DEFERRED_FOR)),2)}this.PERIOD_LABEL=KJE.Default.PAY_PERIODS[j];this.ANNUAL_PERIODS=KJE.Default.PAY_FREQUENCY[j];var x=0;if(this.INPUT_YEARS){x=this.TERM;this.TERM=this.TERM*this.ANNUAL_PERIODS}else{x=(this.TERM/this.ANNUAL_PERIODS)}this.sReturnMessage="";var t=this.getPeriodRate(e,this.ANNUAL_PERIODS);if(this.PAYMENT_CALC){if(this.USE_ACCEL_WEEKLYPAYMENTS&&(this.ANNUAL_PERIODS==52||this.ANNUAL_PERIODS==26)){this.MONTHLY_PAYMENT=f.round(KJE.PMT(this.getPeriodRate(e,12),x*12,this.LOAN_AMOUNT)/(this.ANNUAL_PERIODS==52?4:2),2)}else{this.MONTHLY_PAYMENT=f.round(KJE.PMT(t,this.TERM,this.LOAN_AMOUNT),2)}this.sReturnMessage=this.MSG_REPORT_PAYMENT}else{this.LOAN_AMOUNT=f.round(KJE.PV(t,this.TERM,this.MONTHLY_PAYMENT),this.LOAN_AMOUNT_DECIMALS);this.sReturnMessage=this.MSG_REPORT_LOAN}var l=Math.round(this.TERM);var s=0;var k=l;if(l>this.ANNUAL_PERIODS*5){k=Math.floor(l/this.ANNUAL_PERIODS);if((l%this.ANNUAL_PERIODS)!=0){k+=1}}this.DS_BALANCE=KJE.FloatArray(k+1);this.DS_INTEREST=KJE.FloatArray(k);this.DS_PRINCIPAL=KJE.FloatArray(k);this.cats2=new Array(k);this.cats=new Array(k+1);this.cats[0]="";this.DS_BALANCE[0]=this.LOAN_AMOUNT;if(w){var h=this.sSchedule;h.clearRepeat();h.addHeader(h.sReportCol("#",1),h.sReportCol("Payment",2),h.sReportCol("Principal",3),h.sReportCol("Interest",4),h.sReportCol("Loan balance",5));h.addRepeat("&nbsp;","&nbsp;","&nbsp;","&nbsp;",f.dollars(this.LOAN_AMOUNT))}var a=this.LOAN_AMOUNT;var u=0;var y=0;var g=this.MONTHLY_PAYMENT;var o=0;var m=0;var p=true;var v=0;var c=0;for(var r=1;r<=l;r++){s=r-1;if(l>this.ANNUAL_PERIODS*5){p=((s%this.ANNUAL_PERIODS)==0)}else{p=true}m=a;if(a!=0){u=f.round(t*a,2);y=this.MONTHLY_PAYMENT-u;a-=y;if(a<=0){g+=a;a=0;y=g-u}else{g=this.MONTHLY_PAYMENT}if(l==r){if(a>0.005){g+=a;a=0;y=g-u}else{a=0}}}else{g=0;a=0;y=0;u=0}v+=u;c+=y;if((l>this.ANNUAL_PERIODS*5)&&((s%this.ANNUAL_PERIODS)==0)){this.cats2[o]=""+Math.floor((r+this.ANNUAL_PERIODS)/this.ANNUAL_PERIODS);this.cats[o+1]=this.cats2[o];if(s>0){this.DS_INTEREST[o-1]=(v);this.DS_PRINCIPAL[o-1]=(c);this.DS_BALANCE[o]=(a)}v=0;c=0;o++}else{if(l<=this.ANNUAL_PERIODS*5){this.cats2[o]=""+r;this.cats[o+1]=""+r;this.DS_BALANCE[o+1]=(a);this.DS_INTEREST[o]=(u);this.DS_PRINCIPAL[o]=(y);o++}}b+=g;d+=u;if(l>this.ANNUAL_PERIODS*5){this.DS_INTEREST[this.DS_INTEREST.length-1]=((v+u));this.DS_PRINCIPAL[this.DS_INTEREST.length-1]=((c+y))}if(w){h.addRepeat(f.number(r),f.dollars(g,2),f.dollars(y,2),f.dollars(u,2),f.dollars(a,2))}}this.INTEREST_PAID=d;this.TOTAL_OF_PAYMENTS=b};KJE.SimpleLoanCalc.prototype.formatReport=function(b){var c=KJE;var a=this.iDecimal;var d=b;if(this.DEFERRED_PAYMENT){d=KJE.replace("DEFERRED_FOR",KJE.Default.DF_ITEMS[this.DEFERRED_FOR],d);d=KJE.replace("STARTING_AMOUNT",c.dollars(this.STARTING_AMOUNT,this.LOAN_AMOUNT_DECIMALS),d);d=KJE.replace("LOAN_AMOUNT",c.dollars(this.LOAN_AMOUNT,this.LOAN_AMOUNT_DECIMALS),d)}d=KJE.replace("RESULT_MESSAGE",this.sReturnMessage,d);d=KJE.replace("MONTHLY_PAYMENT",c.dollars(this.MONTHLY_PAYMENT,2),d);d=KJE.replace("INTEREST_RATE",c.percent(this.INTEREST_RATE/100,3),d);d=KJE.replace("TERM_PRODUCT",this.TERM_PRODUCT,d);d=KJE.replace("TERM",c.number(this.TERM),d);d=KJE.replace("PERIOD_LABEL",this.PERIOD_LABEL,d);d=KJE.replace("PERIOD_TITLE",KJE.Default.PAY_PERIODS_TITLE[this.PAYMENT_TYPE],d);d=KJE.replace("LOAN_AMOUNT",c.dollars(this.LOAN_AMOUNT,this.LOAN_AMOUNT_DECIMALS),d);d=KJE.replace("INTEREST_PAID",c.dollars(this.INTEREST_PAID,2),d);d=KJE.replace("TOTAL_OF_PAYMENTS",c.dollars(this.TOTAL_OF_PAYMENTS,2),d);d=KJE.replace("ANNUAL_PERIODS",c.number(this.ANNUAL_PERIODS),d);d=d.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());this.sSchedule.clearRepeat();return d};KJE.SimpleLoanCalc.prototype.getPeriodRate=function(a,b){if(this.bUSE_CAMORTGAGE){return(Math.pow(1+(a/200),(1/(b/2)))-1)}return(a/b)/100};KJE.CalcName="Alternative Payment Frequencies";KJE.CalcType="ComplexLoan";KJE.CalculatorTitleTemplate="Monthly loan payment is KJE1 for KJE2 payments at KJE3.";KJE.parameters.set("PAYMENT_TYPE",KJE.Default.PAY_MONTHLY);KJE.parseInputs=function(b){b=KJE.replace("**PAYMENT_TYPE**",KJE.Default.getPayDrop("PAYMENT_TYPE",KJE.Default.PAY_MONTHLY),b);var a=KJE.parameters.get("DEFERRED_PAYMENT",false);if(a){b=KJE.replace("**DEFERRED_FOR**",KJE.getDropBox("DEFERRED_FOR",KJE.parameters.get("DEFERRED_FOR",0),KJE.Default.DF_ID,KJE.Default.DF_ITEMS),b)}return b};KJE.initialize=function(){KJE.CalcControl=new KJE.SimpleLoanCalc();KJE.GuiControl=new KJE.SimpleLoan(KJE.CalcControl)};KJE.SimpleLoan=function(j){var e=KJE;var b=KJE.gLegend;var f=KJE.inputs.items;var a=KJE.parameters.get("MSG_DROPPER_TITLE","Loan inputs:");var c=KJE.parameters.get("MSG_DROPPER_CLOSETITLE"," KJE1 at KJE2 with KJE3 KJE4 payments of KJE5.");this.MSG_GRAPH_TITLE1=(KJE.parameters.get("MSG_GRAPH_TITLE1","Total Principal and Interest by Year"));this.MSG_GRAPH_TITLE2=(KJE.parameters.get("MSG_GRAPH_TITLE2","Total Principal and Interest by Payment"));this.MSG_PRINCIPAL=KJE.parameters.get("MSG_PRINCIPAL","Principal");this.MSG_INTEREST=KJE.parameters.get("MSG_INTEREST","Interest");this.bUSE_TERM_DROPDOWN=KJE.parameters.get("USE_TERM_DROPDOWN",false);KJE.DropBox("PAYMENT_TYPE","Payment frequency");if(j.DEFERRED_PAYMENT){KJE.DropBox("DEFERRED_FOR","Payments deferred for");KJE.Label("STARTING_AMOUNT","Starting amount",null,null,"bold")}KJE.Radioboxes("PAYMENT_CALC","Calculate",true,"Payment","Amount","bold");KJE.DollarSlider("MONTHLY_PAYMENT","Monthly payment",0,100000000,2,0,4);KJE.DollarSlider("LOAN_AMOUNT","Loan amount",0,100000000,0,0,4);KJE.LoanRateSlider("INTEREST_RATE","Interest rate");if(this.bUSE_TERM_DROPDOWN){KJE.DropBox("TERM",(j.INPUT_YEARS?"Term in years":"Term in months"))}else{KJE.NumberSlider("TERM",(j.INPUT_YEARS?"Term in years":"Term in months"),1,(j.INPUT_YEARS?KJE.Default.MortgageTermMax:KJE.Default.MortgageTermMax*12));if(f.TERM._value==f.TERM.vDefault&&j.INPUT_YEARS==true){f.TERM.setValue(KJE.parameters.get("TERM",48)/12,true)}}KJE.Label("TOTAL_OF_PAYMENTS","Total payments",null,null,"bold");KJE.Label("INTEREST_PAID","Total interest paid",null,null,"bold");var g=KJE.gNewGraph(KJE.gLINE,"GRAPH1",true,false,KJE.colorList[1],j.MSG_GRAPH_TITLE);g._titleYAxis.setText(KJE.sCurrency);g._legend.setVisible(false);g._iArea=KJE.gGraphLine.AREA_FIRST_ONLY;var h=KJE.gNewGraph(KJE.gSTACKED,"GRAPH2",true,true,KJE.colorList[1],this.MSG_GRAPH_TITLE1);if(h){h._titleYAxis.setText(KJE.sCurrency)}var d=function(){return a+KJE.subText(KJE.getKJEReplaced(c,f.LOAN_AMOUNT.getFormatted(),f.INTEREST_RATE.getFormatted(),f.TERM.getFormatted(),j.PERIOD_LABEL,f.MONTHLY_PAYMENT.getFormatted()),"KJECenter")};KJE.addDropper(new KJE.Dropper("INPUTS",true,a,d),KJE.colorList[0])};KJE.SimpleLoan.prototype.setValues=function(b){var a=KJE.inputs.items;b.PAYMENT_CALC=a.PAYMENT_CALC.getValue();if(b.PAYMENT_CALC){b.LOAN_AMOUNT=a.LOAN_AMOUNT.getValue();a.LOAN_AMOUNT.enable();a.MONTHLY_PAYMENT.disable()}else{b.MONTHLY_PAYMENT=a.MONTHLY_PAYMENT.getValue();a.MONTHLY_PAYMENT.enable();a.LOAN_AMOUNT.disable()}b.INTEREST_RATE=a.INTEREST_RATE.getValue();if(this.bUSE_TERM_DROPDOWN){b.TERM=KJE.Default.getProductTerm(a.TERM.getValue());b.TERM_PRODUCT=KJE.Default.getProductTitle(a.TERM.getValue())}else{b.TERM=a.TERM.getValue()}b.PAYMENT_TYPE=a.PAYMENT_TYPE.getValue();if(b.DEFERRED_PAYMENT){b.DEFERRED_FOR=a.DEFERRED_FOR.getValue()}};KJE.SimpleLoan.prototype.refresh=function(f){var e=KJE;var d=KJE.gLegend;var b=KJE.inputs.items;var a=KJE.gGraphs[0];var c=KJE.gGraphs[1];KJE.setTitleTemplate(e.dollars(f.MONTHLY_PAYMENT,2),e.number(f.TERM),e.percent(f.INTEREST_RATE/100,3));a.removeAll();a.setGraphCategories(f.cats);a.setTitleTemplate(e.dollars(f.LOAN_AMOUNT));if(f.TERM>f.ANNUAL_PERIODS*5){a.add(new KJE.gGraphDataSeries(f.DS_BALANCE,f.MSG_GRAPH_BY_YEAR,a.getColor(1)))}else{a.add(new KJE.gGraphDataSeries(f.DS_BALANCE,f.MSG_GRAPH_BY_PAYMENT,a.getColor(1)))}if(f.TERM>f.ANNUAL_PERIODS*5){a._titleXAxis.setText(f.MSG_YEAR_NUMBER)}else{a._titleXAxis.setText(f.MSG_PAYMENT_NUMBER)}a.paint();if(c){c.removeAll();c.setGraphCategories(f.cats2);c.add(new KJE.gGraphDataSeries(f.DS_PRINCIPAL,this.MSG_PRINCIPAL,a.getColor(1)));c.add(new KJE.gGraphDataSeries(f.DS_INTEREST,this.MSG_INTEREST,a.getColor(2)));if(f.TERM>60){c._titleXAxis.setText(f.MSG_YEAR_NUMBER);c.setTitle(this.MSG_GRAPH_TITLE1)}else{c._titleXAxis.setText(f.MSG_PAYMENT_NUMBER);c.setTitle(this.MSG_GRAPH_TITLE2)}c.paint()}b.MONTHLY_PAYMENT.setValue(f.MONTHLY_PAYMENT,true);b.TOTAL_OF_PAYMENTS.setText(e.dollars(f.TOTAL_OF_PAYMENTS,2));b.INTEREST_PAID.setText(e.dollars(f.INTEREST_PAID,2));if(f.DEFERRED_PAYMENT){b.STARTING_AMOUNT.setText(e.dollars(f.LOAN_AMOUNT,2))}else{b.LOAN_AMOUNT.setValue(f.LOAN_AMOUNT,true)}};KJE.parameters.set("TITLE_TEMPLATE","Loan payment is KJE1 for KJE2 payments at KJE3.");KJE.parameters.set("MSG_TERM","Number of payments");KJE.parameters.set("MSG_MONTHLY_PAYMENT","Payment");KJE.parameters.set("ARRAY_PAY_PERIODS_IDS",[KJE.Default.PAY_WEEKLY,KJE.Default.PAY_BIWEEKLY,KJE.Default.PAY_2XMONTHLY,KJE.Default.PAY_MONTHLY,KJE.Default.PAY_QUARTERLY,KJE.Default.PAY_SEMIANNUAL,KJE.Default.PAY_ANNUAL]);KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-PAYMENT_CALC'><fieldset id='KJE-FS-PAYMENT_CALC'><input type=radio id='KJE-PAYMENT_CALC1' name=KJE-PAYMENT_CALC /><input type=radio id='KJE-PAYMENT_CALC2' name=KJE-PAYMENT_CALC /></fieldset></div> <div id='KJE-C-LOAN_AMOUNT'><input id='KJE-LOAN_AMOUNT' /></div> <div id='KJE-C-MONTHLY_PAYMENT'><input id='KJE-MONTHLY_PAYMENT' /></div> <div id='KJE-C-INTEREST_RATE'><input id='KJE-INTEREST_RATE' /></div> <div id='KJE-C-TERM'><input id='KJE-TERM' /></div> <div id='KJE-C-PAYMENT_TYPE'>**PAYMENT_TYPE**</div> <div id='KJE-C-INTEREST_PAID'><div id='KJE-INTEREST_PAID'></div></div> <div id='KJE-C-TOTAL_OF_PAYMENTS'><div id='KJE-TOTAL_OF_PAYMENTS'></div></div> <div style=\"height:10px\"></div> </div> **GRAPH1** **GRAPH2** ";KJE.DefinitionText=" <div id='KJE-D-LOAN_AMOUNT' ><dt>Loan amount</dt><dd>Total amount of your loan.</dd></div> <div id='KJE-D-MONTHLY_PAYMENT' ><dt>Payment</dt><dd>Payment for this loan.</dd></div> <div id='KJE-D-INTEREST_RATE' ><dt>Interest rate</dt><dd>Annual interest rate for this loan. Interest is calculated each period on the current outstanding balance of your loan. The periodic rate is your annual rate divided by the number of periods per year.</dd></div> <div id='KJE-D-TERM' ><dt>Number of payments</dt><dd>Number of payments for this loan.</dd></div> <div id='KJE-D-PAYMENT_TYPE' > <dt>Payment frequency</dt><dd>Choose how often payments will be made. The options are weekly (52 payments per year), bi-weekly (26 payments per year), semi-monthly (24 payments per year), monthly (12 payments per year), bi-monthly (6 payments per year), quarterly (4 payments per year), semi-annual (2 payments per year), and annually (1 payment per year).</dd></div> <div id='KJE-D-INTEREST_PAID' ><dt>Interest paid</dt><dd>Total amount of interest that will be paid on this loan. This total assumes all payments are made as scheduled, and there are no prepayments of principal.</dd></div> <div id='KJE-D-TOTAL_OF_PAYMENTS' ><dt>Total payments</dt><dd>Total all payments for this loan. This includes all interest and principal. This total assumes all payments are made as scheduled, and there are no prepayments of principal.</dd></div> ";KJE.ReportText=" <h2 class='KJEReportHeader KJEFontHeading'>Your LOAN_AMOUNT loan has TERM PERIOD_LABEL payments of MONTHLY_PAYMENT.</h2> If you make all of your payments on this loan, and do not prepay any of the principal, the total interest for this loan is INTEREST_PAID. <p></p> **GRAPH** <div class=KJECenter> <div class=KJEReportTableDiv><table class=KJEReportTable><caption class='KJEHeaderRow KJEHeading'>Loan summary</caption> <tbody class='KJEReportTBody'> <tr class=KJEOddRow><th class=\"KJELabel KJECellBorder KJECell70\" scope='row'>Loan amount</th><td class=KJECell>LOAN_AMOUNT</td></tr> <tr class=KJEEvenRow><th class=\"KJELabel KJECellBorder KJECell70\" scope='row'>Payment</th><td class=KJECell>MONTHLY_PAYMENT</td></tr> <tr class=KJEOddRow><th class=\"KJELabel KJECellBorder KJECell70\" scope='row'>Number of payments</th><td class=KJECell>TERM PERIOD_TITLE payments</td></tr> <tr class=KJEEvenRow><th class=\"KJELabel KJECellBorder KJECell70\" scope='row'>Payment frequency</th><td class=KJECell>ANNUAL_PERIODS per year</td></tr> <tr class=KJEOddRow><th class=\"KJELabel KJECellBorder KJECell70\" scope='row'>Interest rate</th><td class=KJECell>INTEREST_RATE</td></tr> </tbody> <tfoot class='KJEReportTFooter'> <tr class=KJEFooterRow><th class=\"KJELabel KJECellBorder KJECell70\" scope='row'>Total payments</th><td class=KJECell>TOTAL_OF_PAYMENTS</td></tr> <tr class=KJEFooterRow><th class=\"KJELabel KJECellBorder KJECell70\" scope='row'>Total interest paid</th><td class=KJECell>INTEREST_PAID</td></tr> </tfoot> </table></div> </div> <p class=\"KJEBreakHeader\">**GRAPH**</p> <h2 class='KJEScheduleHeader KJEFontHeading'>Payment Schedule</h2> **REPEATING GROUP** ";
// 01/02/2023 Copyright 2023 KJE Computer Solutions, Inc.  Licensed for use on data2.profitstarscms.com denmarkstate.com ramseybank.com www.centurybanknet.com foresightbank.com fnb-hartford.com

