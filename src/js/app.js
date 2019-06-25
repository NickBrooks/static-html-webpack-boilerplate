const req = new XMLHttpRequest();
req.open("GET", document.location, false);
req.send(null);
const headers = req.getAllResponseHeaders().toLowerCase();
alert(headers);
