import './SingleCard.css'

export const SingleCard = props => {
  const { card, handleChoice, flipped } = props

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
      <div className={ flipped ? "flipped" : "" }>
        <img src={card.src} alt="card front" className='front' />
        <img
          onClick={handleClick}
          src="/img/cover.png"
          alt="card back"
          className='back'
        />
      </div>
    </div>
  )
}