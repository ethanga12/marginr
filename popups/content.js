// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   // alert(request)
//
//   sendResponse({count: matches.length})
// })
const re = new RegExp('this', 'gi')
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length 
})
