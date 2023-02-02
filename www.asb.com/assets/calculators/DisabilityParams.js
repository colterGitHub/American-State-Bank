


  KJE.parameters.set("ANNUAL_INFLATION",KJE.Default.InflationRate);
  KJE.parameters.set("CURRENT_MONTHLY_COVERAGE",1500);
  KJE.parameters.set("DEFAULT_EXPENSE_PERCENT",70);
  KJE.parameters.set("LENGTH_OF_CURRENT_COVERAGE",6);
  KJE.parameters.set("LENGTH_OF_DISABILITY",12);
  KJE.parameters.set("MONTHLY_DISABILITY_EXPENSES",1750);
  KJE.parameters.set("MONTHLY_EXPENSES",2500);
  KJE.parameters.set("MONTHLY_INCOME",3000);


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


