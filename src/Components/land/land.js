import './land.css'
import iphone from '../../Assets/Images/Hero/Mobile/iPhone X.png'
import logos from '../../Assets/Images/Logo Clouds/Logos.png'
function Land(){
    return(
        <div>
    <div className='back-land'>
        <div className='text-part'>
            <p className='bold-text'>Organize projects.<br/>
                Get more done.
            </p>
            <button className='button-start'>Get Started</button>
        </div>

        <div className='right-part'>

            <img className= 'iphone' src = {iphone} alt='#'></img>
           

        </div>

         
        </div>
        <img src = {logos} alt='logos' className='logos'></img>

    </div>
    
    )
}


export default Land;