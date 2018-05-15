$(document).ready(function() {

})

var array = ['rock', 'paper', 'scissors']
var wins = []
var losses =[]
var ties = []

$('#rock').on('click', function() {
  var userChoice = 'rock'
  compare(userChoice)
})
$('#paper').on('click', function() {
  var userChoice = 'paper'
  compare(userChoice)
})
$('#scissors').on('click', function() {
  var userChoice = 'scissors'
  compare(userChoice)
})

function compare(userChoice) {
  var compChoice = array[Math.floor(Math.random() * array.length)]
  $('#output1').text(`Skynet chose ${compChoice}` + "!")
  if
    ((userChoice === 'rock' && compChoice === 'scissors') || 
    (userChoice === 'paper' && compChoice === 'rock') || 
    (userChoice === 'scissors' && compChoice === 'paper')) {
      $('#output2').text("You win!")
      return win()
  } else if 
    (userChoice === compChoice) {
      $('#output2').text("It's a tie!")
      return tie()
    } else {
      $('#output2').text("You lose!")
      return lose()
    }
}

function win() {
 wins.push(1)
 $('#wins').text(`Wins: ${wins.length}`)
}

function tie() {
  ties.push(1)
  $('#ties').text(`Ties: ${ties.length}`)
 } 

 function lose() {
  losses.push(1)
  $('#losses').text(`Losses: ${losses.length}`)
 }
 