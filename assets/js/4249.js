/*! For license information please see 4249.js.LICENSE.txt */
(self.webpackChunkcore_bundle=self.webpackChunkcore_bundle||[]).push([[4249],{64249:function(e,r,n){!function(e){"use strict";var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),n="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function s(e){return e>1&&e<5}function t(e,r,n,t){var a=e+" ";switch(n){case"s":return r||t?"pár sekúnd":"pár sekundami";case"ss":return r||t?a+(s(e)?"sekundy":"sekúnd"):a+"sekundami";case"m":return r?"minúta":t?"minútu":"minútou";case"mm":return r||t?a+(s(e)?"minúty":"minút"):a+"minútami";case"h":return r?"hodina":t?"hodinu":"hodinou";case"hh":return r||t?a+(s(e)?"hodiny":"hodín"):a+"hodinami";case"d":return r||t?"deň":"dňom";case"dd":return r||t?a+(s(e)?"dni":"dní"):a+"dňami";case"M":return r||t?"mesiac":"mesiacom";case"MM":return r||t?a+(s(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return r||t?"rok":"rokom";case"yy":return r||t?a+(s(e)?"roky":"rokov"):a+"rokmi"}}e.defineLocale("sk",{months:r,monthsShort:n,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(30381))}}]);