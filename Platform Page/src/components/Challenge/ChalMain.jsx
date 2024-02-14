import { useNavigate } from 'react-router-dom'
import Pic from '../../assets/backtest.jpg'
import ConsoleComponent from '../ConsoleComponent/ConsoleComponent'
export default function ChalMain(){
    const navigate=useNavigate();
    const navigateToChallenge = () => {
        
        navigate('/challenge-post');
      };
    return(
        <>
        
        
        <section className='post-challenge'>
            <div className='post1'>
                <ConsoleComponent/>
            </div>
            
          
        
            <div className='post2'>
                <div><h1 className='mb-10 text-5xl text-blue-500'>Your Challenge</h1></div>
                <div><button onClick={navigateToChallenge}>GO !</button></div>
            </div>
        </section>
  
        </>
    )
}