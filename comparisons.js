var gameChoice = window.confirm('Think of a food')

// If the user clicks "Cancel" in the prompt
if (!gameChoice) {
  window.alert('):')
// If the user clicks "OK" in the prompt
} else {
  var firstAnswer = window.prompt('Is it a vegetable?')
  if (firstAnswer) {
    firstAnswer = firstAnswer.trim().toLowerCase()
  }
  if (firstAnswer === 'yes') {
    var secondAnswer = window.prompt('Is it green?')
  } else if (firstAnswer === 'no') {
    var stopHere = window.prompt('Hmmm, is it a fruit?')
    if (stopHere === 'yes' || stopHere === 'no') {
      window.alert('O no, I only know vegetables.')
    } else {
      window.alert('I didnt understand your input ):')
    }
  }
  if (secondAnswer) {
    secondAnswer = secondAnswer.trim().toLowerCase()
  }
  if (secondAnswer === 'yes') {
    var thirdAnswer = window.prompt('How many do you eat in one sitting? (Enter a number)')
    if (thirdAnswer) {
      thirdAnswer = thirdAnswer.trim().toLowerCase()
    }
    if (thirdAnswer <= 1) {
      var fourthAnswer = window.prompt('Thats not very many, so its big?')
      if (fourthAnswer) {
        fourthAnswer = fourthAnswer.trim().toLowerCase()
      } 
      if (fourthAnswer === 'yes') {
        var randomNumber = Math.random()
        if (randomNumber > 0.5) {
          var cucumber = window.prompt('Were you thinking of a cucumber?')
        }
        if (cucumber) {
          cucumber = cucumber.trim().toLowerCase()
          if (cucumber === 'yes') {
            window.prompt('I win! Thanks for playing!')
          } else if (cucumber === 'no') {
            window.prompt('You win! Thanks for playing!')
          } else {
            window.alert('Yes/No answers only. Refresh page to try again')
          }
        } else if (randomNumber > 0.0) {
          var zucchini = window.prompt('Were you thinking of a zucchini?')
        }
        if (zucchini) {
          zucchini = zucchini.trim().toLowerCase()
          if (zucchini === 'yes') {
            window.alert('I win! Thanks for playing!')
          } else if (zucchini === 'no') {
            window.alert('You win! Thanks for playing!')
          } else {
            window.alert('Yes/No answers only. Refresh page to try again')
          }
        }
      } else if (fourthAnswer === 'no') {
        window.alert('O no, Im stumped! You win!')
      }
    } else if (thirdAnswer > 1 && thirdAnswer <= 5) {
      let fourthAnswer = window.prompt('Interesting, is it leafy?')
      if (fourthAnswer) {
        fourthAnswer = fourthAnswer.trim().toLowerCase()
      }
      if (fourthAnswer === 'yes') {
        let randomNumber = Math.random()
        if (randomNumber >= 0.5) {
          var lettuce = window.prompt('Were you thinking of lettuce?')
          if (lettuce) {
            if (lettuce === 'yes') {
              window.alert('I win! Thanks for playing!')
            } else if (lettuce === 'no') {
              window.alert('You win! Thanks for playing!')
            } else {
              window.alert('Yes/No answers only. Refresh page to try again')
            }
          }
        } else {
          var spinach = window.prompt('Were you thinking of spinach?')
          if (spinach) {
            if (spinach === 'yes') {
              window.alert('I win! Thanks for playing!')
            } else if (spinach === 'no') {
              window.alert('You win! Thanks for playing!')
            } else {
              window.alert('Yes/No answers only. Refresh page to try again')
            }
          }
        }
      }
    } else if (thirdAnswer > 5) {
      let fourthAnswer = window.prompt('Okay, is it oval shaped?')
      if (fourthAnswer) {
        fourthAnswer = fourthAnswer.trim().toLowerCase()
      }
      if (fourthAnswer === 'yes') {
        var tomato = window.prompt('Were you thinking of a green tomato?')
        if (tomato) {
          if (tomato === 'yes') {
            window.prompt('I win! Thanks for playing!')
          } else if (tomato === 'no') {
            window.prompt('You win! Thanks for playing!')
          } else {
            window.prompt('Yes/No answers only. Refresh page to try again')
          }
        }
      }
    } else {
      window.alert('I didnt understand your input ):')
    }
  } else if (secondAnswer === 'no') {
    window.alert('O no! I only know green vegetables.')
  } else {
    window.alert('Yes/No answsers only. Refresh page to try again')
  }
}
