'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './contact.module.css';

export default function Contact(): React.JSX.Element {
    return (
        <div className={styles.container}>
            <h2>დამიკავშირდით</h2>
            <p className={styles.contactInfo}>&#9742; 568876501 <br/>
            &#9993; sergo.khmaladze@gmail.com <br />

            <a href='https://www.facebook.com/' 
               target="_blank">
             <FontAwesomeIcon icon={faFacebook} style={{ width: '20px', marginRight: '8px' }}/>  facebook</a>
            </p>
            
        </div>
    )

}''