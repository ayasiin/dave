let playgame = confirm('shall we play game')
if (playgame) {
  let playerchoice = prompt('choice rock or paper scissor')
  if (playerchoice) {
    let playerOne = playerchoice.trim().toLowerCase()
    if (
      playerOne === 'rock' ||
      playerOne === 'paper' ||
      playerOne === 'scissors'
    ) {
    } else {
      alert('you did not enter rock, paper ,or scissor')
    }
  } else {
    alert(' you change your  mind')
  }
} else {
  alert('fine ,next time')
}
