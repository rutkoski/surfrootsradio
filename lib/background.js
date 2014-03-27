chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

function runApp() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 800,
      'height': 276
    }
  });
}