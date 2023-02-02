


  KJE.parameters.set("INTEREST_RATE",KJE.Default.RatePersonal);
  KJE.parameters.set("LOAN_AMOUNT",20000);
  KJE.parameters.set("MONTHLY_PAYMENT",300);
  KJE.parameters.set("PAYMENT_CALC",1);
  KJE.parameters.set("PAYMENT_OPTION",2);
  KJE.parameters.set("PAYMENT_PERCENT_INTEREST",100);
  KJE.parameters.set("PAYMENT_PERCENT_PRINCIPAL1",1);
  KJE.parameters.set("PAYMENT_PERCENT_PRINCIPAL2",1.5);
  KJE.parameters.set("PAYMENT_PERCENT_PRINCIPAL3",2);
  KJE.parameters.set("PAYMENT_PERCENT_PRINCIPAL4",2.5);
  KJE.parameters.set("PAYMENT_PERCENT_PRINCIPAL5",3);
  KJE.parameters.set("TERM",48);


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


