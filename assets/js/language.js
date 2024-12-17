translate.selectLanguageTag.show = false; //不出现的select的选择语言
translate.service.use('client.edge'); //设置机器翻译服务通道
translate.ignore.class.push('global_lang_btn');
translate.ignore.id.push("no-lang");
translate.nomenclature.append('chinese_simplified','english',`
高新技术企业=High-tech enterprise
`);
//console.log(translate.ignore);
translate.execute();

$(function() {
	/*$(".language-select").val(getCookie("Language"));*/
	if (getCookie("Language") == null) {
		document.cookie = "Language=english";
		//chinese_simplified
		//english
	}
	document.cookie = "num=" + (getCookie("num") != null ? (parseInt(getCookie("num")) + 1) : "1");
	if (getCookie("num") == 1) {
		translate.changeLanguage(getCookie("Language"));
	}
	$(".language-select").click(function() {
		var language = getCookie("Language");
		switch (language) {
			case "english":
				language = "chinese_simplified";
				break;
			case "chinese_simplified":
				language = "english";
				break;
		}
		translate.changeLanguage(language);
		document.cookie = "Language=" + language;
		document.cookie = "num=0";
		/*document.querySelectorAll('[data-translate="no"]').forEach(el => {
			console.log(el);
		  	el.setAttribute('data-notranslate', 'true');
		});*/
		
		if(language == "english"){
			location.reload();
		}
		
	});
	
});

function getCookie(name) {
	// 拆分 cookie 字符串
	var cookieArr = document.cookie.split(";");
	// 循环遍历数组元素
	for (var i = 0; i < cookieArr.length; i++) {
		var cookiePair = cookieArr[i].split("=");
		/* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
		if (name == cookiePair[0].trim()) {
			// 解码cookie值并返回
			return decodeURIComponent(cookiePair[1]);
		}
	}
	// 如果未找到，则返回null
	return null;
}