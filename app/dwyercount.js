document.addEventListener('selectionchange',function(event) {
  var sel = window.getSelection().toString();

  if(sel.length) {
    chrome.runtime.sendMessage({dwyercount: sel.split(" ").length.toString()}, null);
  } else {
    chrome.runtime.sendMessage({dwyercount: ""}, null);
  }
})
