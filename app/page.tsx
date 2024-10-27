'use client';
import styles from './home.module.css';

export default function Home(): React.JSX.Element {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.whoAmIheader}>გამარჯობა,მე ვარ სერგო ხმალაძე</h1>
        <p>შედეგზე ორიენტირებული ვებ დეველოპერი, 
           რომელიც აკეთებს და მართავს ვებსაიტებს და ვებ აპლიკაციებს, 
           რაც იწვევს მთლიანი პროდუქტის წარმატებას</p>
      </div>
    </main>
  );
}
