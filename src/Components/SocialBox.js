import React, { Component } from 'react'
import styles from '../Components/social.module.css'

export default class SocialBox extends Component {
    render() {
        return (
            <div className={styles.socialContents}>
                <div className={styles.socialItems}>
                        <h5>{this.props.text}</h5>
                        <h6>{this.props.subText}</h6>
                        <h1>{this.props.count}</h1>
                </div>
            </div>
        )
    }
}
