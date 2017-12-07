var cssApplied = false;

function toggleCss(tab) {
	function onError(error) {
		console.log(error);
	}

	if (tab.url.includes("siliconera.com")) {
		if (cssApplied) {
			var removingCSS = browser.tabs.removeCSS(tab.id, {file: "css/siliconic.css"});
			removingCSS.then(null, onError);
			cssApplied = false;
		} else {
			var insertingCSS = browser.tabs.insertCSS(tab.id, {file: "css/siliconic.css"});
			insertingCSS.then(null, onError);
			cssApplied = true;
		}
	}
}

browser.browserAction.onClicked.addListener(toggleCss);