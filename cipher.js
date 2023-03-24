//Alphanumeric Qabbala
var ciphersList = "English<br>";
var cipher = {"a":"10","b":"11","c":"12","d":"13","e":"14","f":"15","g":"16","h":"17","i":"18","j":"19","k":"20","l":"21","m":"22","n":"23","o":"24","p":"25","q":"26","r":"27","s":"28","t":"29","u":"30","v":"31","w":"32","x":"33","y":"34","z":"35","A":"10","B":"11","C":"12","D":"13","E":"14","F":"15","G":"16","H":"17","I":"18","J":"19","K":"20","L":"21","M":"22","N":"23","O":"24","P":"25","Q":"26","R":"27","S":"28","T":"29","U":"30","V":"31","W":"32","X":"33","Y":"34","Z":"35"};

//Greek Isopsephy
ciphersList += "Greek<br>";
jQuery.extend(cipher, {"Α":"1","α":"1","Β":"2","β":"2","Γ":"3","γ":"3","Δ":"4","δ":"4","Ε":"5","ε":"5","Ϝ":"6","ϛ":"6","Ζ":"7","ζ":"7","Η":"8","η":"8","Θ":"9","θ":"9","Ι":"10","ι":"10","Κ":"20","κ":"20","Λ":"30","λ":"30","Μ":"40","μ":"40","Ν":"50","ν":"50","Ξ":"60","ξ":"60","Ο":"70","ο":"70","Π":"80","π":"80","Ϙ":"90","ϙ":"90","Ρ":"100","ρ":"100","Σ":"200","σ":"200","Τ":"300","τ":"300","Υ":"400","υ":"400","ϒ":"400","Φ":"500","φ":"500","Χ":"600","χ":"600","Ψ":"700","ψ":"700","Ω":"800","ω":"800","ϡ":"900","Ͳ":"900"});

//Isopsephy with tonos
jQuery.extend(cipher,{"Ά":"1","ά":"1","Έ":"5","έ":"5","Ή":"8","ή":"8","Ί":"10","ί":"10","Ό":"70","ό":"70","Ύ":"400","ύ":"400","ϓ":"400","Ώ":"800","ώ":"800"});

//Hebrew Gematria
ciphersList += "Hebrew<br>";
jQuery.extend(cipher, {"א":"1","ב":"2","ג":"3","ד":"4","ה":"5","ו":"6","ז":"7","ח":"8","ט":"9","י":"10","כ":"20","ל":"30","מ":"40","נ":"50","ס":"60","ע":"70","פ":"80","צ":"90","ק":"100","ר":"200","ש":"300","ת":"400","ך":"500","ם":"600","ן":"700","ף":"800","ץ":"900"});

//Arabic Gematria
ciphersList += "Arabic<br>";
jQuery.extend(cipher,{"ا":"1","ب":"2","ج":"3","د":"4","ه":"5","و":"6","ز":"7","ح":"8","ط":"9","ي":"10","ك":"20","ل":"30","م":"40","ن":"50","س":"60","ع":"70","ف":"80","ص":"90","ق":"100","ر":"200","ش":"300","ت":"400","ث":"500","خ":"600","ذ":"700","ض":"800","ظ":"900","غ":"1000","أ":"1"});

//Ugaritic Gematria from Arabic/Hebrew
ciphersList += "Ugaritic<br>";
jQuery.extend(cipher, {"𐎟":"0","𐎛":"1","𐎀":"1","𐎁":"2","𐎂":"3","𐎄":"4","𐎅":"5","𐎆":"6","𐎇":"7","𐎈":"8","𐎉":"9","𐎊":"10","𐎋":"20","𐎍":"30","𐎎":"40","𐎐":"50","𐎒":"60","𐎝":"60","𐎓":"70","𐎔":"80","𐎕":"90","𐎖":"100","𐎗":"200","𐎌":"300","𐎚":"400","𐎘":"500","𐎃":"600","𐎏":"700","𐎕":"800","𐎑":"900","𐎙":"1000"});

//Selected Latin Characters
jQuery.extend(cipher, {"Æ":"24","Œ":"38","Ā":"10","Á":"10","È":"14","É":"14","Ī":"18","Ō":"24","ö":"24","Ū":"30","Ú":"30","Ü":"30"});

//Armenian numerals
ciphersList += "Armenian<br>";
jQuery.extend(cipher, {"Ա":"1","Բ":"2","Գ":"3","Դ":"4","Ե":"5","Զ":"6","Է":"7","Ը":"8","Թ":"9","Ժ":"10","Ի":"20","Լ":"30","Խ":"40","Ծ":"50","Կ":"60","Հ":"70","Ձ":"80","Ղ":"90","Ճ":"100","Մ":"200","Յ":"300","Ն":"400","Շ":"500","Ո":"600","Չ":"700","Պ":"800","Ջ":"900","Ռ":"1000","Ս":"2000","Վ":"3000","Տ":"4000","Ր":"5000","Ց":"6000","Ւ":"7000","Փ":"8000","Ք":"9000"});

//Coptic numerals
ciphersList += "Coptic<br>";
jQuery.extend(cipher, {"Ⲁ":"1","Ⲃ":"2","Ⲅ":"3","Ⲇ":"4","Ⲉ":"5","Ⲋ":"6","Ⲍ":"7","Ⲏ":"8","Ⲑ":"9","Ⲓ":"10","Ⲕ":"20","Ⲗ":"30","Ⲙ":"40","Ⲛ":"50","Ⲝ":"60","Ⲟ":"70","Ⲡ":"80","Ϥ":"90","Ⲣ":"100","Ⲥ":"200","Ⲧ":"300","Ⲩ":"400","Ⲫ":"500","Ⲭ":"600","Ⲯ":"700","Ⲱ":"800","Ⳁ":"900","ⲁ":"1","ⲃ":"2","ⲅ":"3","ⲇ":"4","ⲉ":"5","ⲋ":"6","ⲍ":"7","ⲏ":"8","ⲑ":"9","ⲓ":"10","ⲕ":"20","ⲗ":"30","ⲙ":"40","ⲛ":"50","ⲝ":"60","ⲟ":"70","ⲡ":"80","ϥ":"90","ⲣ":"100","ⲥ":"200","ⲧ":"300","ⲩ":"400","ⲫ":"500","ⲭ":"600","ⲯ":"700","ⲱ":"800","ⳁ":"900"});

//Mandaic script
ciphersList += "Mandaic<br>";
jQuery.extend(cipher, {"ࡀ":"1","ࡁ":"2","ࡂ":"3","ࡃ":"4","ࡄ":"5","ࡅ":"6","ࡆ":"7","ࡇ":"8","ࡈ":"9","ࡉ":"10","ࡊ":"11","ࡋ":"12","ࡌ":"13","ࡍ":"14","ࡎ":"15","ࡏ":"16","ࡐ":"17","ࡑ":"18","ࡒ":"19","ࡓ":"20","ࡔ":"21","ࡕ":"22","ࡖ":"23"});

//Syriac alphabet
ciphersList += "Syriac<br>";
jQuery.extend(cipher, {"ܐ":"1","ܒ":"2","ܓ":"3","ܕ":"4","ܗ":"5","ܘ":"6","ܙ":"7","ܚ":"8","ܛ":"9","ܝ":"10","ܟ":"20","ܠ":"30","ܡ":"40","ܢ":"50","ܣ":"60","ܥ":"70","ܦ":"80","ܨ":"90","ܩ":"100","ܪ":"200","ܫ":"300","ܬ":"400"});

//Punctuation
jQuery.extend(cipher, {"'":"0","-":"0","&":"0","\"":"0",".":"0","!":"0",",":"0","?":"0",":":"0",";":"0","(":"0",")":"0","@":"0","*":"0","=":"0","$":"0","+":"0","_":"0","#":"0","/":"0","—":"0"});