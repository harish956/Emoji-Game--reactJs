// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, status} = props
  console.log(status)
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="text">Emoji Game</h1>
      </div>
      {status && (
        <div className="scores-container text">
          <p className="score-para text">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
