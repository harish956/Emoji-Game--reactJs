// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {status, onPlay, score} = props
  const playAgain = () => {
    onPlay()
  }
  const text = status ? 'You Won' : 'You Lose'
  const greeting = status ? 'Best Score' : 'Score'
  const image = status
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-card-container">
      <div className="win-text-container">
        <h1 className="text greeting">{text}</h1>
        <p className="text score-text">{greeting}</p>
        <p className="text points">{score}/12</p>
        <button className="button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img className="image" src={image} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
