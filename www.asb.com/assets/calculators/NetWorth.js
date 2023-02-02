
KJE.NetWorthCalc=function(){this.YEARS_TO_PROJECT=KJE.parameters.get("YEARS_TO_PROJECT",10);this.DS_WORTH=KJE.FloatArray(3);this.DR_OVER_TIME=null;this.DR_LIABILITIES=null;this.DR_ASSETS=null;this.cats=null;this.sSchedule=new KJE.Repeating()};KJE.NetWorthCalc.prototype.clear=function(){this.HOME=0;this.OTHER_REAL_ESTATE=0;this.AUTOMOBILES=0;this.OTHER_VEHICLES=0;this.JEWELRY=0;this.HOUSEHOLD_ITEMS=0;this.CHECKING_AND_SAVINGS=0;this.RETIREMENT_ACCOUNTS=0;this.SAVINGS_BONDS=0;this.BONDS=0;this.MUTUAL_FUNDS=0;this.STOCKS=0;this.LIFE_INSURANCE=0;this.CASH=0;this.OTHER=0;this.HOME_MORTGAGE_PRINCIPAL=0;this.OTHER_MORTGAGE_PRINCIPAL=0;this.AUTO_LOANS=0;this.STUDENT_LOANS=0;this.OTHER_LOANS=0;this.CREDIT_CARD_DEBT=0;this.LINES_OF_CREDIT=0;this.DEBT_GROWTH=0;this.ASSET_GROWTH=0};KJE.NetWorthCalc.prototype.calculate=function(H){var p=KJE;var f=this.HOME;var h=this.OTHER_REAL_ESTATE;var I=this.AUTOMOBILES;var F=this.OTHER_VEHICLES;var t=this.JEWELRY;var g=this.HOUSEHOLD_ITEMS;var u=this.CHECKING_AND_SAVINGS;var z=this.RETIREMENT_ACCOUNTS;var G=this.SAVINGS_BONDS;var a=this.BONDS;var A=this.MUTUAL_FUNDS;var r=this.STOCKS;var b=this.LIFE_INSURANCE;var y=this.CASH;var E=this.OTHER;var j=this.HOME_MORTGAGE_PRINCIPAL;var w=this.OTHER_MORTGAGE_PRINCIPAL;var l=this.AUTO_LOANS;var D=this.STUDENT_LOANS;var d=this.OTHER_LOANS;var o=this.CREDIT_CARD_DEBT;var m=this.LINES_OF_CREDIT;var k=this.DEBT_GROWTH;var c=this.ASSET_GROWTH;var v=this.YEARS_TO_PROJECT;var C=f+h+I+F+t+g+u+z+G+a+A+r+b+y+E;var e=j+w+l+D+d+o+m;var J=C-e;this.DS_WORTH[0]=(C);this.DS_WORTH[1]=(e);this.DS_WORTH[2]=(J);var s=Math.round(v);var B=0;this.dMax=C-e;this.dMin=C-e;this.DR_OVER_TIME=KJE.FloatArray(s);this.DR_ASSETS=KJE.FloatArray(s);this.DR_LIABILITIES=KJE.FloatArray(s);for(var x=0;x<s;x++){this.DR_ASSETS[x]=KJE.FV_AMT(c/100,x,C);this.DR_LIABILITIES[x]=KJE.FV_AMT(k/100,x,e);this.DR_OVER_TIME[x]=this.DR_ASSETS[x]-this.DR_LIABILITIES[x];if(this.DR_OVER_TIME[x]>this.dMax){this.dMax=this.DR_OVER_TIME[x]}if(this.DR_OVER_TIME[x]<this.dMin){this.dMin=this.DR_OVER_TIME[x]}}this.cats=KJE.FloatArray(s);if(H){var q=this.sSchedule;q.clearRepeat();q.addHeader(q.sReportCol(" Year ",1),q.sReportCol("Assets",2),q.sReportCol("Liabilities",3),q.sReportCol("Net Worth",4))}for(var x=1;x<=s;x++){B=x-1;this.cats[B]=""+x;if(H){q.addRepeat(+x,p.dollars(this.DR_ASSETS[B]),p.dollars(this.DR_LIABILITIES[B]),p.dollars(this.DR_OVER_TIME[B]))}}this.TOTAL_ASSETS=C;this.TOTAL_LIABILITIES=e;this.NET_WORTH=J};KJE.NetWorthCalc.prototype.formatReport=function(b){var c=KJE;var a=this.iDecimal;var d=b;d=KJE.replace("HOME_MORTGAGE_PRINCIPAL",c.dollars(this.HOME_MORTGAGE_PRINCIPAL),d);d=KJE.replace("OTHER_MORTGAGE_PRINCIPAL",c.dollars(this.OTHER_MORTGAGE_PRINCIPAL),d);d=KJE.replace("HOME",c.dollars(this.HOME),d);d=KJE.replace("OTHER_REAL_ESTATE",c.dollars(this.OTHER_REAL_ESTATE),d);d=KJE.replace("AUTOMOBILES",c.dollars(this.AUTOMOBILES),d);d=KJE.replace("OTHER_VEHICLES",c.dollars(this.OTHER_VEHICLES),d);d=KJE.replace("JEWELRY",c.dollars(this.JEWELRY),d);d=KJE.replace("HOUSEHOLD_ITEMS",c.dollars(this.HOUSEHOLD_ITEMS),d);d=KJE.replace("CHECKING_AND_SAVINGS",c.dollars(this.CHECKING_AND_SAVINGS),d);d=KJE.replace("RETIREMENT_ACCOUNTS",c.dollars(this.RETIREMENT_ACCOUNTS),d);d=KJE.replace("SAVINGS_BONDS",c.dollars(this.SAVINGS_BONDS),d);d=KJE.replace("BONDS",c.dollars(this.BONDS),d);d=KJE.replace("MUTUAL_FUNDS",c.dollars(this.MUTUAL_FUNDS),d);d=KJE.replace("STOCKS",c.dollars(this.STOCKS),d);d=KJE.replace("LIFE_INSURANCE",c.dollars(this.LIFE_INSURANCE),d);d=KJE.replace("CASH",c.dollars(this.CASH),d);d=KJE.replace("AUTO_LOANS",c.dollars(this.AUTO_LOANS),d);d=KJE.replace("STUDENT_LOANS",c.dollars(this.STUDENT_LOANS),d);d=KJE.replace("OTHER_LOANS",c.dollars(this.OTHER_LOANS),d);d=KJE.replace("CREDIT_CARD_DEBT",c.dollars(this.CREDIT_CARD_DEBT),d);d=KJE.replace("LINES_OF_CREDIT",c.dollars(this.LINES_OF_CREDIT),d);d=KJE.replace("DEBT_GROWTH",c.percent(this.DEBT_GROWTH/100),d);d=KJE.replace("ASSET_GROWTH",c.percent(this.ASSET_GROWTH/100),d);d=KJE.replace("YEARS_TO_PROJECT",c.number(this.YEARS_TO_PROJECT),d);d=KJE.replace("TOTAL_ASSETS",c.dollars(this.TOTAL_ASSETS),d);d=KJE.replace("TOTAL_LIABILITIES",c.dollars(this.TOTAL_LIABILITIES),d);d=KJE.replace("FINAL_NET_WORTH",c.dollars(this.DR_OVER_TIME[this.YEARS_TO_PROJECT-1]),d);d=KJE.replace("NET_WORTH",c.dollars(this.NET_WORTH),d);d=KJE.replace("OTHER",c.dollars(this.OTHER),d);d=d.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());this.sSchedule.clearRepeat();return d};KJE.CalcName="Net Worth Calculator";KJE.CalcType="networth";KJE.CalculatorTitleTemplate="Your current net worth is KJE1";KJE.parseInputs=function(a){a=KJE.replace("**MSG_LABEL1**",KJE.parameters.get("MSG_LABEL1","Real Estate:"),a);a=KJE.replace("**MSG_LABEL2**",KJE.parameters.get("MSG_LABEL2","Personal Property:"),a);a=KJE.replace("**MSG_LABEL3**",KJE.parameters.get("MSG_LABEL3","Investments:"),a);a=KJE.replace("**MSG_LABEL4**",KJE.parameters.get("MSG_LABEL4","Cash:"),a);a=KJE.replace("**MSG_LABEL5**",KJE.parameters.get("MSG_LABEL5","Mortgage Principal:"),a);a=KJE.replace("**MSG_LABEL6**",KJE.parameters.get("MSG_LABEL6","Loans and Debt:"),a);return a};KJE.initialize=function(){KJE.CalcControl=new KJE.NetWorthCalc();KJE.GuiControl=new KJE.NetWorth(KJE.CalcControl)};KJE.NetWorth=function(j){var d=KJE;var b=KJE.gLegend;KJE.PercentSlider("ASSET_GROWTH","Annual asset growth",-20,100,1,1,"KJEBold");KJE.PercentSlider("DEBT_GROWTH","Annual liability growth",-20,100,1,1,"KJEBold");this.MSG_GRAPH1=KJE.parameters.get("MSG_GRAPH1","Year");var f=4;KJE.Slider("AMT_CURRENT","Amount currently invested",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("HOME","Home",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("OTHER_REAL_ESTATE","Other real estate",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("AUTOMOBILES","Automobiles",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("OTHER_VEHICLES","Other vehicles",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("JEWELRY","Jewelry",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("HOUSEHOLD_ITEMS","Household items",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("CHECKING_AND_SAVINGS","Checking and savings",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("RETIREMENT_ACCOUNTS","Retirement accounts",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("SAVINGS_BONDS","Savings bonds",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("BONDS","Bonds",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("MUTUAL_FUNDS","Mutual funds",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("STOCKS","Stocks",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("LIFE_INSURANCE","Cash value of life insurance",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("CASH","Cash",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("OTHER","Other",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("HOME_MORTGAGE_PRINCIPAL","Home mortgage",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("OTHER_MORTGAGE_PRINCIPAL","Other mortgage",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("AUTO_LOANS","Auto loans",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("STUDENT_LOANS","Student loans",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("OTHER_LOANS","Other loans",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));KJE.Slider("CREDIT_CARD_DEBT","Credit card debt",0,10000000,0,d.FMT_DOLLARS,1,KJE.s_label[f],KJE.useScale(f));var g=KJE.gNewGraph(KJE.gCOLUMN,"GRAPH1",true,false,KJE.colorList[1],KJE.parameters.get("MSG_GRAPH_TITLE","Projected net worth by year for KJE1 years."));g._legend.setVisible(false);g._legend._iOrientation=(b.TOP_RIGHT);KJE.addDiv("INPUTS",KJE.colorList[0]);var k=KJE.parameters.get("MSG_DROPPER2_TITLE","Your assets:");var e=KJE.parameters.get("MSG_DROPPER2_CLOSETITLE","KJE1");var i=function(){return k+"|"+KJE.subText(KJE.getKJEReplaced(e,d.dollars(j.TOTAL_ASSETS)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS2",false,i,i),KJE.colorList[0]);var a=KJE.parameters.get("MSG_DROPPER3_TITLE","Your liabilities:");var c=KJE.parameters.get("MSG_DROPPER3_CLOSETITLE","KJE1");var h=function(){return a+"|"+KJE.subText(KJE.getKJEReplaced(c,d.dollars(j.TOTAL_LIABILITIES)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS3",false,h,h),KJE.colorList[0])};KJE.NetWorth.prototype.setValues=function(b){var a=KJE.inputs.items;b.HOME=a.HOME.getValue();b.OTHER_REAL_ESTATE=a.OTHER_REAL_ESTATE.getValue();b.AUTOMOBILES=a.AUTOMOBILES.getValue();b.OTHER_VEHICLES=a.OTHER_VEHICLES.getValue();b.JEWELRY=a.JEWELRY.getValue();b.HOUSEHOLD_ITEMS=a.HOUSEHOLD_ITEMS.getValue();b.CHECKING_AND_SAVINGS=a.CHECKING_AND_SAVINGS.getValue();b.RETIREMENT_ACCOUNTS=a.RETIREMENT_ACCOUNTS.getValue();b.SAVINGS_BONDS=a.SAVINGS_BONDS.getValue();b.BONDS=a.BONDS.getValue();b.MUTUAL_FUNDS=a.MUTUAL_FUNDS.getValue();b.STOCKS=a.STOCKS.getValue();b.LIFE_INSURANCE=a.LIFE_INSURANCE.getValue();b.CASH=a.CASH.getValue();b.OTHER=a.OTHER.getValue();b.HOME_MORTGAGE_PRINCIPAL=a.HOME_MORTGAGE_PRINCIPAL.getValue();b.OTHER_MORTGAGE_PRINCIPAL=a.OTHER_MORTGAGE_PRINCIPAL.getValue();b.AUTO_LOANS=a.AUTO_LOANS.getValue();b.STUDENT_LOANS=a.STUDENT_LOANS.getValue();b.OTHER_LOANS=a.OTHER_LOANS.getValue();b.CREDIT_CARD_DEBT=a.CREDIT_CARD_DEBT.getValue();b.ASSET_GROWTH=a.ASSET_GROWTH.getValue();b.DEBT_GROWTH=a.DEBT_GROWTH.getValue()};KJE.NetWorth.prototype.refresh=function(f){var e=KJE;var a=KJE.gGraphs[0];KJE.setTitleTemplate(e.dollars(f.NET_WORTH));a.removeAll();a.setGraphCategories(f.cats);var b=new KJE.gGraphDataSeries(f.DR_OVER_TIME,this.MSG_GRAPH1,a.getColor(1));var d=b.getMinValue();var c=b.getMaxValue();a.add(b);if(d>0){a._axisY._bAutoMinimum=false;a._axisY._axisMinimum=0}else{a._axisY._bAutoMinimum=true}if(c<0){a._axisY._bAutoMaximum=false;a._axisY._axisMaximum=0}else{a._axisY._bAutoMaximum=true}if(c==0&&d==0){a._axisY._bAutoMinimum=false;a._axisY._bAutoMaximum=false;a._axisY._axisMinimum=0;a._axisY._axisMaximum=100}a.setTitleTemplate(e.number(f.YEARS_TO_PROJECT));a.paint()};KJE.InputScreenText=" <div id=KJE-D-INPUTS> <div id='KJE-C-ASSET_GROWTH'><input id='KJE-ASSET_GROWTH' /></div> <div id='KJE-C-DEBT_GROWTH'><input id='KJE-DEBT_GROWTH' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-INPUTS2><div id=KJE-P-INPUTS2>Input information:</div></div> <div id=KJE-E-INPUTS2 > <div class=KJEToggleSubTitle>**MSG_LABEL1**</div>  <div id='KJE-C-HOME'><input id='KJE-HOME' /></div> <div id='KJE-C-OTHER_REAL_ESTATE'><input id='KJE-OTHER_REAL_ESTATE' /></div> <hr class=KJEDivide /> <div class=KJEToggleSubTitle>**MSG_LABEL2**</div> <div id='KJE-C-AUTOMOBILES'><input id='KJE-AUTOMOBILES' /></div> <div id='KJE-C-OTHER_VEHICLES'><input id='KJE-OTHER_VEHICLES' /></div> <div id='KJE-C-JEWELRY'><input id='KJE-JEWELRY' /></div> <div id='KJE-C-HOUSEHOLD_ITEMS'><input id='KJE-HOUSEHOLD_ITEMS' /></div> <hr class=KJEDivide /> <div class=KJEToggleSubTitle>**MSG_LABEL3**</div> <div id='KJE-C-RETIREMENT_ACCOUNTS'><input id='KJE-RETIREMENT_ACCOUNTS' /></div> <div id='KJE-C-BONDS'><input id='KJE-BONDS' /></div> <div id='KJE-C-STOCKS'><input id='KJE-STOCKS' /></div> <div id='KJE-C-MUTUAL_FUNDS'><input id='KJE-MUTUAL_FUNDS' /></div> <div id='KJE-C-LIFE_INSURANCE'><input id='KJE-LIFE_INSURANCE' /></div> <div id='KJE-C-SAVINGS_BONDS'><input id='KJE-SAVINGS_BONDS' /></div> <hr class=KJEDivide /> <div class=KJEToggleSubTitle>**MSG_LABEL4**</div> <div id='KJE-C-CHECKING_AND_SAVINGS'><input id='KJE-CHECKING_AND_SAVINGS' /></div> <div id='KJE-C-CASH'><input id='KJE-CASH' /></div> <div id='KJE-C-OTHER'><input id='KJE-OTHER' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-INPUTS3><div id=KJE-P-INPUTS3>Input information:</div></div> <div id=KJE-E-INPUTS3 > <div class=KJEToggleSubTitle>**MSG_LABEL5**</div> <div id='KJE-C-HOME_MORTGAGE_PRINCIPAL'><input id='KJE-HOME_MORTGAGE_PRINCIPAL' /></div> <div id='KJE-C-OTHER_MORTGAGE_PRINCIPAL'><input id='KJE-OTHER_MORTGAGE_PRINCIPAL' /></div> <hr class=KJEDivide /> <div class=KJEToggleSubTitle>**MSG_LABEL6**</div> <div id='KJE-C-AUTO_LOANS'><input id='KJE-AUTO_LOANS' /></div> <div id='KJE-C-STUDENT_LOANS'><input id='KJE-STUDENT_LOANS' /></div> <div id='KJE-C-CREDIT_CARD_DEBT'><input id='KJE-CREDIT_CARD_DEBT' /></div> <div id='KJE-C-OTHER_LOANS'><input id='KJE-OTHER_LOANS' /></div> <div style=\"height:10px\"></div> </div> **GRAPH1** ";KJE.DefinitionText=" <div id='KJE-D-ASSET_GROWTH' ><dt>Annual asset growth</dt><dd>Average annual rate you expect your assets to increase (or decrease if negative) in value.</dd></div> <div id='KJE-D-DEBT_GROWTH' ><dt>Annual liability growth</dt><dd>Average annual rate you expect your liabilities to increase (or decrease if negative) in value.</dd></div> <div id='KJE-D-HOME' ><dt>Home</dt><dd>Current value of your home. This should be as close as possible to the actual market value of your home. If you have owned your home for a number of years, the current market value could be significantly higher than your original purchase price.</dd></div> <div id='KJE-D-OTHER_REAL_ESTATE' ><dt>Other real estate</dt><dd>The value of any other real estate you may own. Include second homes, undeveloped land, rental property or any commercial buildings you may have an interest in. As with your home, use the actual market value of this real estate.</dd></div> <div id='KJE-D-AUTOMOBILES' ><dt>Automobiles</dt><dd>This is the total value of all automobiles that you own. Do not include any leased vehicles.</dd></div> <div id='KJE-D-OTHER_VEHICLES' ><dt>Other vehicles</dt><dd>If you own any other vehicles, such as RVs, campers or collectibles, enter them here.</dd></div> <div id='KJE-D-JEWELRY' ><dt>Jewelry</dt><dd>The value of any jewelry, gems or precious metals such as gold. If you have owned these items for a number of years they may have appreciated in price, so remember to use the current market value.</dd></div> <div id='KJE-D-HOUSEHOLD_ITEMS' ><dt>Household items</dt><dd>The value of your household goods and items. This would include items such as furniture, home electronics, silverware, etc.</dd></div> <div id='KJE-D-RETIREMENT_ACCOUNTS' ><dt>Retirement accounts</dt><dd>The current total balance of your retirement accounts. This should include IRAs, 401(k) savings, SEP IRAs, variable annuities and any other retirement savings you may have.</dd></div> <div id='KJE-D-BONDS' ><dt>Bonds</dt><dd>If you own any Treasury, municipal or commercial bonds, that are not part of your retirement accounts, enter the total here.</dd></div> <div id='KJE-D-STOCKS' ><dt>Stocks</dt><dd>If you own any individual stocks, that are not part of your retirement accounts, enter the total here.</dd></div> <div id='KJE-D-MUTUAL_FUNDS' ><dt>Mutual funds</dt><dd>If you own any mutual funds, that are not part of your retirement accounts, enter the total here.</dd></div> <div id='KJE-D-LIFE_INSURANCE' ><dt>Cash value of life insurance</dt><dd>Some life insurance has a cash value. This is true for whole life and universal life policies. Term life policies, on the other hand, have no cash value. If you have life insurance with a cash value, enter the total here. Remember, this should be the cash value of the policy, not the amount paid out if you were to collect on the policy.</dd></div> <div id='KJE-D-SAVINGS_BONDS' ><dt>Savings bonds</dt><dd>If you own any savings bonds enter the total here.</dd></div> <div id='KJE-D-CHECKING_AND_SAVINGS' ><dt>Checking and savings</dt><dd>The current total balance of your checking and savings accounts.</dd></div> <div id='KJE-D-CASH' ><dt>Cash</dt><dd>If you have any other cash, enter the total here.</dd></div> <div id='KJE-D-OTHER' ><dt>Other</dt><dd>If you have any other assets of value, you can enter the total here.</dd></div> <div id='KJE-D-HOME_MORTGAGE_PRINCIPAL' ><dt>Home mortgage principal</dt><dd>This is the current principal balance remaining on your mortgage. This is the amount that you would have to pay to own your home free and clear.</dd></div> <div id='KJE-D-OTHER_MORTGAGE_PRINCIPAL' ><dt>Other mortgage principal</dt><dd>This is the current principal balance for any other real estate mortgages you may have. This includes mortgages on rental property, undeveloped land, commercial property or any other real estate.</dd></div> <div id='KJE-D-AUTO_LOANS' ><dt>Auto loans</dt><dd>Total amount you currently have outstanding on your auto loans.</dd></div> <div id='KJE-D-STUDENT_LOANS' ><dt>Student loans</dt><dd>Total amount, if any, that you currently owe in college or student loans. You should enter the total outstanding even if these loans are currently in deferment.</dd></div> <div id='KJE-D-CREDIT_CARD_DEBT' ><dt>Credit card debt</dt><dd>Your total credit card debt.</dd></div> <div id='KJE-D-OTHER_LOANS' ><dt>Other loans</dt><dd>Total amount, if any, of any other loans you may have.</dd></div> ";KJE.ReportText=' <!--HEADING "Net Worth" HEADING--> <h2 class=\'KJEReportHeader KJEFontHeading\'>Your current net worth is NET_WORTH.</h2>You have total assets of TOTAL_ASSETS and total liabilities of TOTAL_LIABILITIES based on the information you supplied. This makes your total net worth NET_WORTH. If your assets were to grow at an annual rate of ASSET_GROWTH and your liabilities change at an annual rate of DEBT_GROWTH, you would have a net worth of FINAL_NET_WORTH after YEARS_TO_PROJECT years. **GRAPH** <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Assets</caption> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell60" scope=\'row\'>Home </th><td class="KJECell KJECell40"> HOME </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Other real-estate </th><td class="KJECell"> OTHER_REAL_ESTATE </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Automobiles </th><td class="KJECell"> AUTOMOBILES </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Other vehicles </th><td class="KJECell"> OTHER_VEHICLES </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Jewelry </th><td class="KJECell"> JEWELRY </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Household items </th><td class="KJECell"> HOUSEHOLD_ITEMS </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Retirement accounts </th><td class="KJECell"> RETIREMENT_ACCOUNTS </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Bonds </th><td class="KJECell"> BONDS </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Stocks </th><td class="KJECell"> STOCKS </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Mutual funds </th><td class="KJECell"> MUTUAL_FUNDS </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Cash value of life insurance </th><td class="KJECell"> LIFE_INSURANCE </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Savings bonds </th><td class="KJECell"> SAVINGS_BONDS </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Checking and savings </th><td class="KJECell"> CHECKING_AND_SAVINGS </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Cash </th><td class="KJECell"> CASH </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Other </th><td class="KJECell"> OTHER </td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total assets </th><td class="KJECellStrong KJECellBorder"> TOTAL_ASSETS </td></tr> </tfoot> </table> </div> <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Liabilities</caption> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell60" scope=\'row\'>Home mortgage principal </th><td class="KJECell KJECell40"> HOME_MORTGAGE_PRINCIPAL </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Other mortgage principal </th><td class="KJECell"> OTHER_MORTGAGE_PRINCIPAL </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Auto loans </th><td class="KJECell"> AUTO_LOANS </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Student loans </th><td class="KJECell"> STUDENT_LOANS </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Credit card debt </th><td class="KJECell"> CREDIT_CARD_DEBT </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Other loans </th><td class="KJECell"> OTHER_LOANS </td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total liabilities </th><td class="KJECellStrong"> TOTAL_LIABILITIES </td></tr> </tfoot> </table> </div> <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Projected net worth</h2>( ASSET_GROWTH Annual Asset Growth, DEBT_GROWTH Annual Liability Growth) **REPEATING GROUP** ';


