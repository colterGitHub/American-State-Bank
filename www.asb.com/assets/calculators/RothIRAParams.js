


  KJE.parameters.set("AGE_OF_RETIREMENT",65);
  KJE.parameters.set("ANNUAL_CONTRIBUTION",5000);
  KJE.parameters.set("CONTRIBUTE_MAX",false);
  KJE.parameters.set("CURRENT_AGE",29);
  KJE.parameters.set("MARGINAL_TAX_RATE",KJE.Default.TaxRate);
  KJE.parameters.set("RATE_OF_RETURN",KJE.Default.RORMarket);
  KJE.parameters.set("STARTING_BALANCE",0);


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


