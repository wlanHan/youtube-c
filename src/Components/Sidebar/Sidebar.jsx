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

const Sidebar = ({ sidebar, category, setCategory }) => {
    return (
        <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="icon" /><p>Anasayfa</p>
                </div>
                <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
                    <img src={game_icon} alt="icon" /><p>Oyunlar</p>
                </div>
                <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} alt="icon" /><p>Otomobil</p>
                </div>
                <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="icon" /><p>Eğlence</p>
                </div>
                <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt="icon" /><p>Teknoloji</p>
                </div>
                <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
                    <img src={music} alt="icon" /><p>Müzik</p>
                </div>
                <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
                    <img src={blogs} alt="icon" /><p>Bloglar</p>
                </div>
                <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="icon" /><p>Bülten/Haber</p>
                </div>
                <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt="icon" /><p>Spor</p>
                </div>
                <hr />
            </div>

            <div className="subscribed-list">
                <h3>Takip Edilenler</h3>
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
