import Warrior from '../assets/Warrior.jpeg';
import '../Components/CardPromo.css';
export const CardPromo = ({title}) => {
  return (
    <div>
            <img className='card-promo' src={Warrior}/>
            <h2>{title}</h2>
            <p>dame tu gaaaaa</p>
        </div>
  )
}
