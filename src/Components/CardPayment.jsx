import Warrior from '../assets/Warrior.jpeg'; 
import '../Components/Cardpayment.css'
export const CardPayment = ({titulo}) => {
  return (
    <div>
        <img className='card-image' src={Warrior}/>
        <h2>{titulo}</h2>
    </div>
  )
}
