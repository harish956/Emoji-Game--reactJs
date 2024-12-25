// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji} = props
  const onClickedBtn = () => {
    clickEmoji(emoji.id)
  }
  return (
    <li className="emojiItem" onClick={onClickedBtn}>
      <button className="btn" type="button">
        <img className="emojiImg" src={emoji.emojiUrl} alt={emoji.emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
