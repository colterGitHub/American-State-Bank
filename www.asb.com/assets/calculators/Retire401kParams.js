


KJE.parameters.set("AGE_OF_RETIREMENT",65);
KJE.parameters.set("ANNUAL_SALARY",40000);
KJE.parameters.set("CONTRIBUTE_PERCENT",10);
KJE.parameters.set("CURRENT_AGE",30);
KJE.parameters.set("EMPLOYER_MATCH",50);
KJE.parameters.set("EMPLOYER_MAX",6);
KJE.parameters.set("RATE_OF_RETURN",KJE.Default.RORMarket);
KJE.parameters.set("SALARY_INCREASE",0);
KJE.parameters.set("STARTING_AMOUNT",1000);

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


