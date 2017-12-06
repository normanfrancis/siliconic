function toggleCss(tab) {
	function onError(error) {
		console.log(error);
	}

	var insertingCSS = browser.tabs.insertCSS(tab.id, {file: "css/siliconic.css"});
	insertingCSS.then(null, onError);
}

browser.browserAction.onClicked.addListener(toggleCss);