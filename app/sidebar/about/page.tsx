'use client';
import SkillsApp from "@/app/components/sidebarDiv/about";
import styles from './about.module.css';

export default function About(): React.JSX.Element {
    return (
        <div className={styles.container}>
        <div className={styles.aboutMe}>
            <h1>ჩემს შესახებ</h1>
            <p>აქ ნახავთ მეტ ინფორმაციას ჩემს შესახებ,
                რას ვაკეთებ და ჩემს ამჟამინდელ უნარებს
                ძირითადად პროგრამირებისა და ტექნოლოგიების კუთხით</p>
            
        </div>
        <div className={styles.getToKnowMe}>
            <h1>გამიცანი!</h1>
            <p>მე ვარ სერგო ხმალაძე, დამწყები Front End დეველოპერი,
                ღია ვარ სამუშაო შესაძლებლობებისთვის, სადაც შემიძლია
                წვლილი შევიტანო, ვისწავლო და გავიზარდო. თუ გაქვთ
                უნარებსა და გამოცდილებას, ნუ მოგერიდებათ დამიკავშირდეთ.
            </p>
        </div>
        <div>
            <SkillsApp></SkillsApp>
        </div>
        
        </div>
    )
}