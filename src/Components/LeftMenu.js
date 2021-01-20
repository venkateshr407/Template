import React, { Component } from 'react'
import styles from '../Components/leftmenu.module.css'
import fb from '../Asset/Group 592.svg';
import youtube from '../Asset/Group 612.svg';
import hero from '../Asset/Layer 2.svg';
import Social from '../Components/SocialBox';
import NotifyProps from '../Components/NotifyProps';

// import Gragh from './ChartContainer';
import account from '../Asset/account.svg';
import friend from '../Asset/friend.svg';
import insta from '../Asset/instagram-sketched (2).svg';
import youtube1 from '../Asset/youtube (5).svg';
import gallery from '../Asset/gallery.svg';
import Dashboard from '../Asset/Group 417.svg';
import shoping from '../Asset/shopping-cart (2).svg';
import video from '../Asset/video-editor.svg';
import User from '../Asset/papa.png';
import Graph from '../Asset/graph.png';
import social from '../Components/social.module.css';
import notify from '../Asset/Group 1162.svg';
import more from '../Asset/more.svg';
import facebook from '../Asset/facebook (7).svg';

export default class LeftMenu extends Component {
    render() {
        return (
            <>
                <div className={styles.sideNavBar}>
                <a href="#logo"><img src={Dashboard} alt="image" className={styles.Dashboards}/></a>

                    <a href="#daskboard"><img src={account} alt="image"/></a>
                    <a href="#home"><img src={friend} alt="image"/></a>
                    <a href="#about"><img src={gallery} alt="image"/></a>
                    <a href="#Home"><img src={shoping} alt="image"/></a>
                    <a href="#Home"><img src={video} alt="image"/></a>
                    <a href="#Home"><img src={friend} alt="image"/></a>
                </div>
                <div className={styles.contentArea}>
                <div id="logo" className={styles.header}>
                        <div className={styles.headerContent}>
                            <div className={styles.headerItems}>
                                <p>Join us</p>
                                <img src={fb} alt="image"/>
                                <img src={youtube} alt="image" />
                            </div>
                        </div>
                        <div className={styles.headerContent}>
                            <p>Dashboard</p>
                        </div>
                        <div className={styles.headerContent}>
                            <div className={styles.headerUser}>
                                <div className="dropdown show"> 
                                    <img src={User} alt="image"/>
                                        <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sweetha Nair
                                        </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div id="daskboard" className={styles.banner}>
                            <div className={styles.heroContent}>
                                <div className={styles.heroItems}>
                                    <h1>welcome to streambuddy</h1>
                                    <p>Let's start and enjoy with our feature</p>
                                </div>
                                <div className={styles.heroItems}>
                                    <img src={hero} alt="image"/>
                                </div>
                            </div>
                            <div className={styles.flexContents}>
                                <div className={styles.socialContent}>
                                    <div className={social.fb}>
                                        <Social 
                                            text="Facebook" 
                                            subText="(Completed)" 
                                            count="15"
                                        />
                                    </div>
                                    <div className={social.youtube}>
                                        <Social 
                                            text="YouTube" 
                                            subText="(Completed)" 
                                            count="15"
                                    />
                                    </div>
                                    <div className={social.insta}>
                                        <Social 
                                            text="Instagram" 
                                            subText="(Completed)" 
                                            count="15"
                                        />
                                    </div>
                                </div>
                                <div className={styles.graphContent}>
                                    <h4>Scheduled Streams</h4>
                                    <ul className={social.graphGird}>
                                       <li style={{color:'#00D0FF'}}>Facebook</li>
                                       <li style={{color:'#FF3A48'}}>YouTube</li>
                                       <li style={{color:'#D68FFF'}}>Instagram</li>
                                    </ul>
                                    <img src={Graph} alt="image" className={styles.graphImage}/>
                                </div>

                             {this.renderProps()}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    renderProps = () => {
        return (
            <div className={social.notifyContents}>
                <div className={social.notifyItems}>
                    <img src={notify} alt="image"/>
                    <h4>Notification</h4>
                    <img src={more} alt="image"/>
                </div>
                <NotifyProps image={facebook} day="Today" time="11:20AM" heading="Hello World" paragraph="Liked your Post" />
                <NotifyProps image={youtube1} day="Yesterday" time="01:24PM" heading="Subscribe" paragraph="Liked your Post" />
                <NotifyProps image={insta} day="Today" time="09:10AM" heading="Post Updated" paragraph="Liked your Post" />
                <NotifyProps image={facebook} day="Today" time="11:20AM" heading="Hello World" paragraph="Liked your Post" />
                <NotifyProps image={facebook} day="Today" time="11:20AM" heading="Hello World" paragraph="Liked your Post" />
                <NotifyProps image={facebook} day="Today" time="11:20AM" heading="Hello World" paragraph="Liked your Post" />
            </div>
        )
    }
}
