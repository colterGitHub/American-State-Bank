


  KJE.parameters.set("NEW_LOAN_BALANCE",250000);
  KJE.parameters.set("NEW_LOAN_PAYMENT",100);
  KJE.parameters.set("NEW_LOAN_RATE",6.9);
  KJE.parameters.set("NEW_LOAN_TERM",30);
  KJE.parameters.set("CALC_INDEX",KJE.EnhancedLoanCalc.CALC_PAYMENT);



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


