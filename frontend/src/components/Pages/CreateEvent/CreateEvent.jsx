import '../../Pages/CreateEvent/CreateEvent.scss';
import Fun from '../../../images/IMG_9529.jpg';

const CreateEvent = () => {
    return(
        <div className='image-container'>
            <img className='fun' src={Fun} alt="MyImage" />
            
            <div className='text-container'>
                <h1 className='h1'>Create new event</h1>
                
                <div className='title-li'>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" placeholder='Name of event' />
                </div>
                   
                   <div className='starts-'>
                        
                        <div className='startswrap'>
                            <label className='starts' htmlFor="starts">Start Date</label>
                            <input name="starts" type="text" />
                        </div>
                        
                        <div className='startswrap1'>
                            <label htmlFor="starttime">Time</label>
                            <input name="starttime" type="text" />
                        </div>
                   </div>

                   <div className='ends-'>
                        
                        <div className='endswrap'>
                            <label className='ends' htmlFor="ends">End Date</label>
                            <input name="ends" type="text" />
                        </div>
                        
                        <div className='endswrap1'>
                            <label htmlFor="endtime">Time</label>
                            <input name="endtime" type="text" />
                        </div>
                   </div>
                   <div className='category-li'>
                    <label htmlFor="category">Category</label>
                    <input name="category" type="text" />
                   </div>

                   <button className='button'>Create Event</button>
                
            </div>


            
        </div>

    );
}
export default CreateEvent;
