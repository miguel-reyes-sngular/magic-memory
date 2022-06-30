import './SingleCard.css'

export const SingleCard = props => {
  const { card } = props

  return (
    <div className="card">
      <div>
        <img src={card.src} alt="card front" className='front' />
        <img src="/img/cover.png" alt="card back" className='back' />
      </div>
    </div>
  )
}