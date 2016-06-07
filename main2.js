

//commenting out the code (homework)

document.getElementById('getDataButton').onclick = function() {
  makeRequest('http://data.consumerfinance.gov/api/views.json');
} //using vanilla javascript to nav the DOM. We are getting the element with ID 'getDataButton' 
	//next we are attaching an event listener onclick and giving it an event handler which is a function that passes the makeRequest function. 

document.getElementById('getCustomDataButton').onclick = function() {
  makeRequest('http://www.omdbapi.com/?s=titanic');
} //same as above only this one is attached to the other button with ID (getCustomDataButton) and we are passing the method makeRequest...
	//a different API. 

function makeRequest(url) { //declaring a new function called makeRequest that takes one param (url) (this is where the API url will go)
  var httpRequest = new XMLHttpRequest(); //declaring a variable called httpRequest. with below....
  // new XMLHttpRequest(); is a java script object that was created using constructor notation. (this allows us to send HTTP requests from JS)
  	//Asynchronous because after sending an HTTP request your code doesn't need to wait for the response. 
  	//this lets us update parts of the page without having to reload the whole page

  httpRequest.onreadystatechange = function() { //attaching an event listener to httpRequest 
    if (httpRequest.readyState === XMLHttpRequest.DONE) { //every time the readyState property changes the readystatechange event fires 
      if (httpRequest.status === 200) { //there are 4 states here. state 4 means the response is back and ready to be processed. 
        console.log(httpRequest.responseText); //basically above we were checking for errors. 
      }
    }
  };

  httpRequest.open('GET', url); //this tells the server the type of the request (GET or POST, etc...)
  	//above is also where we give XMLHttpRequest the url we are calling on. 
  httpRequest.send(); //sends the request to the server. this is used for GET if we put info into this it would be for post. ex send('something')
}