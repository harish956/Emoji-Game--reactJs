import {Component} from 'react'
import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, isGameInProgress: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = sc => {
    const {topScore} = this.state
    const s = Math.max(sc, topScore)
    this.setState({
      topScore: s,
      isGameInProgress: false,
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)

    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  onPlay = () => {
    this.setState({
      clickedEmojisList: [],
      isGameInProgress: true,
    })
  }

  render() {
    const emojiLst = this.shuffledEmojisList()
    const {topScore, clickedEmojisList, isGameInProgress} = this.state
    if (!isGameInProgress) {
      return (
        <div className="main-bg-container">
          <NavBar
            score={clickedEmojisList.length}
            topScore={topScore}
            status={isGameInProgress}
          />
          <div className="image-card-body">
            <WinOrLoseCard
              status={clickedEmojisList.length === emojiLst.length}
              topScore={topScore}
              score={clickedEmojisList.length}
              onPlay={this.onPlay}
            />
          </div>
        </div>
      )
    }
    return (
      <div className="main-bg-container">
        <NavBar
          score={clickedEmojisList.length}
          topScore={topScore}
          status={isGameInProgress}
        />
        <ul className="emoji-container">
          {emojiLst.map(eachEmoji => (
            <EmojiCard
              emoji={eachEmoji}
              clickEmoji={this.clickEmoji}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
