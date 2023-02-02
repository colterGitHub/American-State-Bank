


  KJE.parameters.set("CC_BALANCE1",5000);
  KJE.parameters.set("CC_RATE1",KJE.Default.RateCard);
  KJE.parameters.set("STUDENT_LOAN_AMOUNT",10000);
  KJE.parameters.set("STUDENT_LOAN_CURR_PAYMENT",170);
  KJE.parameters.set("STUDENT_LOAN_RATE",KJE.SnowBallCalc.RateStudentLoan);

  
KJE.ReportProcess = function(sText) {
sText= KJE.replace("appraised","assessed value",sText);
sText= KJE.replace("Appraised","Assessed value",sText);
return KJE.replace("value value","value",sText);
}


KJE.parseDefinitions = function(sText) {
sText= KJE.replace("appraised","assessed value",sText);
sText= KJE.replace("Appraised","Assessed value",sText);
return KJE.replace("value value","value",sText);
}
/**V3_CUSTOM_CODE**/
/* <!--
  Financial Calculators, &copy;1998-2022 KJE Computer Solutions, Inc.
  For more information please see:
  <A HREF="https://www.dinkytown.net">https://www.dinkytown.net</A>
 -->
 */


