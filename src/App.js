import './App.css';
import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';
var dices = [];
dices[0] = dice1;
dices[1] = dice2;
dices[2] = dice3;
dices[3] = dice4;
dices[4] = dice5;
dices[5] = dice6;


function App() {
  function RandomDice(e)
  {
    var randomNumber = Math.floor(Math.random()*6)
    document.getElementById('DiceLabel').innerText = randomNumber+1;
    document.getElementById('Dice').style.backgroundImage = "url("+(dices[randomNumber])+")";
    return randomNumber
  }
  return (
    <div className="App">
      <h1> Нажмите на кубик - чтобы бросить его </h1>
      <p id='DiceLabel'>1</p>
      <button id='Dice' onClick={RandomDice}>
      </button>
    </div>
  );
}


export default App;
