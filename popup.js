
chrome.sessions.restore(null, null)
  /*chrome.sessions.getRecentlyClosed(function(sessions) {
  var recentUrls = [];
  sessions.forEach(function(session) {
    if(session.window) {
      session.window.tabs.forEach(function(tab) {
        recentUrls.push(tab.url);
      });
    } else {
      //recentUrls.push(session.tab.url);
    }
  });
  console.log(recentUrls);
  debugger;
for (var i = 0; i < recentUrls.length; i++) {
    // will open each link in the current window
    chrome.tabs.create({
        url: recentUrls[i]
    });
}
  //recentUrls.forEach(function(url){
	// window.open(url) 
  //});
});*/
