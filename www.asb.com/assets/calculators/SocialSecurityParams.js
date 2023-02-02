


  KJE.parameters.set("AGE_OF_RETIREMENT",65);
  KJE.parameters.set("CURRENT_AGE",50);
  KJE.parameters.set("HOUSEHOLD_INCOME",50000);
  KJE.parameters.set("INFLATION_RATE",KJE.Default.InflationRate);
  KJE.parameters.set("MARRIED",true);
  KJE.parameters.set("SALARY_PERCENT",3);
  
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


