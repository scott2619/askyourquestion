window.location.hash = ""
history.pushState('', document.title, window.location.pathname); // nice and clean
e.preventDefault(); // no page reload