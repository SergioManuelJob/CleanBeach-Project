import { NavLink } from 'react-router-dom';
import Image from '../../../images/pexels-asad-photo-maldives-1450353.jpg'
import { VolunteerText } from '../../VolunteerText/VolunteerText'
import './SpecificBeach.scss';

const SpecificBeach = () => {
    return(
        <>
        <div className='specificbeachText'>
            <h2>Name of the specific beach</h2>
            <img className='beachimg' src={Image} alt="Beach" />
        </div>
        <hgroup className='info'>
            <h3>Name of beach</h3>
            <h4>Rating</h4>
        </hgroup>
        <span className='spanP'>
        <p>Description: Las Canteras is an ideal beach for long barefoot walks as it's golden sand stretches for over two kilometres. During the day you can sunbathe by the sand sculptures, rent parasols and loungers or surf at the southern end. Children love Las Canteras thanks to its clear, calm waters, playgrounds and sports zones. Las Canteras beach in northeast Gran Canaria, right in the capital city Las Palmas. It's appeal is due to its natural beauty, city-centre location and the services and amenities along its promenade.</p>
        </span>
        <div className='googlemaps'>
        <NavLink to="/map">
        <iframe title='map' width="310" height="418" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=310&amp;height=418&amp;hl=en&amp;q=Las%20Canteras%20Las%20Palmas%20de%20Gran%20Canaria+(Las%20Canteras%20Beach)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </NavLink>
        </div>
        <div className='reviews'>
            <h4>Reviews</h4>
            <p>Reviews from other people</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7FD4D1" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,58.7C672,32,768,64,864,112C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <VolunteerText />
        </>
    )
}

export default SpecificBeach