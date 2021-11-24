// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, className, imgUrl} = cardDetails

  return (
    <li className={`${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="i">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
