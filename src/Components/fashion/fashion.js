import './fashion.css'
import lights from '../../Assets/Images/Feature/Single/Cover Image.png'

function Fashion(){
    return(

        <div className='fashion-all'>

            <div className='text'>
                <p className='big-fashion'>
                    Enter the world of all fashion trends
                </p>
                <p className='small-fashion'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.
                </p>
            </div>
            <img src = {lights} className='lights-image' alt='lights'></img>
        </div>


    )
}

export default Fashion; 