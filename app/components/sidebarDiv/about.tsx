'use client'
import React from "react";
import styles from '@/app/sidebar/about/about.module.css';

interface Skills{
    items: string[];
}

const SkillsList: React.FC<Skills> = ({items}) => {
    return (
        <div className={styles.skill} >
        {items.map((item: string, index: number) => (
          <div className={styles.skillList} key={index} >
            {item}
          </div>
        ))}
      </div>
    )
}

const SkillsApp: React.FC = () => {
    const data = ['HTML', 'CSS', 'Javascript', 
                 'React', 'Next', 'Typescript',
                 'GIT', 'Responsive Design'
                 ];
  
    return (
      <div>
        <h1 className={styles.mySkill}>ჩემი უნარები</h1>
        <SkillsList items={data} />
      </div>
    );
  };

  export default SkillsApp;
