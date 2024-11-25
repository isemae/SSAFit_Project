document.getElementById('open-webview').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'openWebView' })
})
