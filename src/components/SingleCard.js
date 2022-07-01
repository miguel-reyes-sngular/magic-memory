import './SingleCard.css'

export const SingleCard = props => {
  const { card, handleChoice, flipped, disabled } = props

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={ flipped ? "flipped" : "" }>
        <img
          alt="card front"
          className='front'
          src={card.src}
        />
        <img
          alt="card back"
          className='back'
          onClick={handleClick}
          src="/img/cover.png"
        />
      </div>
    </div>
  )
}