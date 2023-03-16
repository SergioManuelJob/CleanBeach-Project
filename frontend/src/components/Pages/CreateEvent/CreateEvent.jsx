import '../../Pages/CreateEvent/CreateEvent.scss';
import Fun from '../../../images/Create new event.png';

const CreateEvent = () => {
    return(
        <div className='image-container'>
            <img className='fun' src={Fun} alt="My Image" />
            <div className='text-container'>
                <h1 className='h1'>Create new event</h1>
                <label htmlFor="title">Title</label>
                <input name="title" type="text" placeholder='Name of event' />
                   <div className='starts-ends'>
                        <div className='startswrap'>
                            <label className='starts' htmlFor="starts">Starts</label>
                            <input name="starts" type="text" />
                        </div>
                        <div className='endswrap'>
                            <label htmlFor="ends">Ends</label>
                            <input name="ends" type="text" />
                        </div>
                   </div>
                
            </div>
            
        </div>

    );
}
export default CreateEvent;