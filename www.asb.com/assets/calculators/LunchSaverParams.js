


  KJE.parameters.set("AMT_SAVE_MONTH",200);
  KJE.parameters.set("BAGGED_PRICE",3.00);
  KJE.parameters.set("EAT_OUT_PRICE",6.50);
  KJE.parameters.set("NUMBER_BAGGED",20);
  KJE.parameters.set("ROR_INVEST",KJE.Default.RORMarket);
  KJE.parameters.set("YEARS_TO_SAVE",4);


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


