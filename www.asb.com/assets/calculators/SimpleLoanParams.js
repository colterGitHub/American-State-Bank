


  KJE.parameters.set("HIDE_EXTRA_GRAPHS",false);
  KJE.parameters.set("INTEREST_RATE",KJE.Default.RatePersonal);
  KJE.parameters.set("LOAN_AMOUNT",20000);
  KJE.parameters.set("MONTHLY_PAYMENT",300);
  KJE.parameters.set("TERM",60);
  KJE.parameters.set("TERM_MAXIMUM_MONTHS",360);




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


