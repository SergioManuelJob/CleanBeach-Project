import './Cards.scss'
import Beachpic from '../../images/pexels-asad-photo-maldives-1450353.jpg'

const Cards = () => {
    return (
        <>
            <figure className="mainFigure">
                <img src={Beachpic} alt="PhotoOfBeach" />
                <figcaption className="mainFigcap">
                    <hgroup className="hGroups">
                       <h3>Name - Location</h3> 
                       <h4>Rating</h4>
                    </hgroup>
                    <p>Description of the beach. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas nihil maxime eum, corrupti officiis aspernatur quidem maiores mollitia sapiente.
                    </p>
                </figcaption>
            </figure>

            <figure className="mainFigure">
                <img src={Beachpic} alt="PhotoOfBeach" />
                <figcaption className="mainFigcap">
                    <hgroup className="hGroups">
                       <h3>Name - Location</h3> 
                       <h4>Rating</h4>
                    </hgroup>
                    <p>Description of the beach. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas nihil maxime eum, corrupti officiis aspernatur quidem maiores mollitia sapiente.
                    </p>
                </figcaption>
            </figure>

            <figure className="mainFigure">
                <img src={Beachpic} alt="PhotoOfBeach" />
                <figcaption className="mainFigcap">
                    <hgroup className="hGroups">
                       <h3>Name - Location</h3> 
                       <h4>Rating</h4>
                    </hgroup>
                    <p>Description of the beach. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas nihil maxime eum, corrupti officiis aspernatur quidem maiores mollitia sapiente.
                    </p>
                </figcaption>
            </figure>
        </>
        

    )
}

export default Cards
