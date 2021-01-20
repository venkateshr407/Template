import React, { Component } from 'react'
import social from '../Components/social.module.css';

export default class NotifyProps extends Component {
    render() {
        return (
                <div className={social.notifyData}>
                    <div className={social.cardBG}>
                        <div className={social.cardContent}>
                            <img src={this.props.image} alt="image"/>
                            <h6>{this.props.day}</h6>
                            <h6>{this.props.time}</h6>                        
                        </div>
                        <div className={social.notifyText}>
                            <h4>{this.props.heading}</h4>
                            <p>{this.props.paragraph}</p>
                        </div>
                    </div>
                    
                </div>
 
        )
    }
}
