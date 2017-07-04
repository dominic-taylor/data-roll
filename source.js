
var nations = [{name: "New Zealand", capital: "Wellington", pop: "4.5m (2016)", facts:["i live here", "never rains"]},
               {name: "Iran", capital: "Tehran", pop: "4.5m (2016)", facts:["great", "polite"]},
               {name: "France", capital: "Paris", pop: "4.5m (2016)", facts:["80 m"]},
               {name: "Portugal", capital: "Lisbon", pop: "4.5m (2016)", facts:["All drugs decriminlasied"]},
               {name: "USA", capital: "Washington, DC", pop: "300m (2016)", facts:["fucked"]},
               {name: "Spain", capital: "Madrid", pop: "80m (2016)", facts:["meah", "never rains"]},
               {name: "China", capital: "Beijing", pop: "1b (2016)", facts:["good", "rains"]},
               {name: "Brazil", capital: "Brasila", pop: "220m (2016)", facts:["Language: Portguesuse", "Pop: heaps"]},
               {name: "Afghanistan", capital: "Kabul", pop: "35m (2016)", facts:["Language: Pashto, Dari", "Pop: 32m"]}

]

//{name: "New Zealand", capital: "Wellington", pop: '4.5m (2016)', facts:["i live here", "never rains"]},

var randomNumber = Math.floor(Math.random()*(nations.length));


window.onload = function() {

  document.getElementById('heading').innerHTML = nations[randomNumber].name
  document.getElementById('sub').innerHTML= nations[randomNumber].capital 
  document.getElementById('pop').innerHTML= nations[randomNumber].pop

  var factList = ""
  for (var i = 0; i < nations[randomNumber].facts.length; i++) {
    factList += '<li>'+nations[randomNumber].facts[i]+'</li>'
  }
  document.getElementById('facts').innerHTML = factList

}

//Uncomment for testing
// set timer to reload/call onload function to test working. 