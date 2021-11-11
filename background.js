function aubPage() {
    window.location='http://zorac.aub.aau.dk/login?qurl='+window.location.href
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: aubPage
    });
  });