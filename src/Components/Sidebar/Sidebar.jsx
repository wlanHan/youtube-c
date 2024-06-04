import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({ sidebar }) => {
    return (
        <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt="icon" /><p>Home</p>
                </div>
                <div className="side-link">
                    <img src={game_icon} alt="icon" /><p>Gaming</p>
                </div>
                <div className="side-link">
                    <img src={automobiles} alt="icon" /><p>Automobiles</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt="icon" /><p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt="icon" /><p>Tech</p>
                </div>
                <div className="side-link">
                    <img src={music} alt="icon" /><p>Music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt="icon" /><p>Blogs</p>
                </div>
                <div className="side-link">
                    <img src={news} alt="icon" /><p>News</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt="icon" /><p>Sports</p>
                </div>
                <hr />
            </div>

            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack} alt="profile" /><p>PewDiePie</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="profile" /><p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="profile" /><p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="profile" /><p>5-Min Crafts</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="profile" /><p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
