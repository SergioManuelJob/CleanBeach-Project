import './EventsPage.scss';
import eventImg from '../../../images/IMG_9529.jpg';

const EventPage = () => {
    return (
        <>
        <form className='formEvent'>
        <h2>Create a Event</h2>
            <div>
             <label htmlFor="title">Title</label> 
             <input type="text" name="title" />  
            </div>
            <div>
             <label htmlFor="starts">Starts</label> 
             <div className='inputs'>
             <input type="date" name="starts" />  
             <input type="time" />
             </div>
            </div>

            <div>
             <label htmlFor="ends">Ends</label> 
             <div className='inputs'>
             <input type="date" name="ends" />  
             <input type="time" />
             </div>
            </div>  
            <img src={eventImg} alt="pictureofpeople" />   
        </form>
        </>
        
    )
}

export default EventPage