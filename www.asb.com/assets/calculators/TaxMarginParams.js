


    KJE.parameters.set("LINE_1_FILING_STATUS",KJE.Default.iSGL);
    KJE.parameters.set("ITEMIZED_GIFTS_TO_CHARITY",0);
    KJE.parameters.set("LINE_6A_PERSONAL_EXEMPTION",0);
    KJE.parameters.set("LINE_6B_SPOUSE_EXEMPTION",0);
    KJE.parameters.set("LINE_6C_DEPENDENTS",0);
    KJE.parameters.set("LINE_7_WAGES_SALARIES_TIPS_ETC",0);
    KJE.parameters.set("LINE_8A_TAXABLE_INTEREST",0);

    
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


