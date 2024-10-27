'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';


export default function Footer(): React.JSX.Element{
    let socialStyle = {
        width: '30px',
        height: '30px',
        marginRight: '15px',
        color: 'blue'
    }
    return (
        
       <div className={styles.container}>
        <div className={styles.socialCont}>
          <h3 className={styles.socialsHeader}>სოციალური ქსელები</h3>
          
          <a href="https://ge.linkedin.com/"
             target="_blank">
           <FontAwesomeIcon icon={faLinkedin} style={socialStyle} />
          </a>

          <a href="https://github.com/"
             target="_blank">
             <FontAwesomeIcon icon={faGithub} style={socialStyle}/>
          </a>

          <a href='https://www.facebook.com/' 
             target="_blank">
             <FontAwesomeIcon icon={faFacebook} style={socialStyle}/>
             </a>
        </div>

        <div className={styles.socialCont}>
          <p>&copy; {new Date().getFullYear()} All rights reserved. Made By Sergo Khmaladze</p>
        </div>
       </div>
    )

}