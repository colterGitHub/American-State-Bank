


  KJE.parameters.set("ACCELERATE_BALANCE",0);
  KJE.parameters.set("CC_BALANCE1",5000);
  KJE.parameters.set("CC_RATE1",18.9);
  KJE.parameters.set("NEW_LOAN_BALANCE",5000);
  KJE.parameters.set("NEW_LOAN_RATE",11.00);
  KJE.parameters.set("NEW_LOAN_TERM",120);
  KJE.parameters.set("CALC_ACCEL",false);


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


