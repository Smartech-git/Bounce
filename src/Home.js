import './Home.css';
import Bounce from './Characters/Images/Bounce.png';
import Emoji from './Characters/Images/Emoji.png';

function Home() {
    return (
        <div className='Home'>
            <div className="HomeFirstTab">
                <div className="HomeInfo">
                    <div className="Bounce">
                        <img src={Bounce} alt="Bounce"></img>
                    </div>
                    <div className="BounceProfile">
                        <div className="BounceEmoji">
                            <img src={Emoji} alt="BouceEmoji"></img>
                        </div>
                        <div className="ScorePoints">
                            <div className="ScoreHome">
                                <h1>Score</h1>
                            </div>
                            <div className="HighScoreHome">
                                <h2>High Score</h2>
                            </div>
                        </div>
                    </div>
                    <div className="HomeSecondTab">

                    </div>
                    <div className="ActionBotton">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;