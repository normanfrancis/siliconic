function toggleCss(tab) {
	function onError(error) {
		console.log(error);
	}

	if (tab.url.includes("siliconera.com")) {
		if (tabStates[tab.id]) {
			var removingCSS = browser.tabs.removeCSS(tab.id, {file: "css/siliconic.css"});
			removingCSS.then(null, onError);
			tabStates[tab.id] = false;
		} else {
			console.log(tab);
			var insertingCSS = browser.tabs.insertCSS(tab.id, {file: "css/siliconic.css"});
			insertingCSS.then(null, onError);
			tabStates[tab.id] = true;
		}
	}

	console.log(tabStates);
}


var gettingAllTabs = browser.tabs.query({});
var tabStates = {};
gettingAllTabs.then((tabs) => {
	for (let tab of tabs) {
		tabStates[tab.id] = false;
		toggleCss(tab);
	}
});

browser.browserAction.onClicked.addListener(toggleCss);