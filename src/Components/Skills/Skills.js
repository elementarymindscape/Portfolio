import React from 'react';
import './Skills.scss';
import SkillsData from '../SkillsData';

function Skills() {
    return (
        <div className='Skills' id="Skills">
            <div className='wrapper'>
                <div className="left">
                    <h1>My Skills</h1>
                    {SkillsData.map((Skill, key)=>(
                        <li key={key}>
                            <h3>{Skill.SkillName}</h3><span className="bar"><span className={Skill.className}></span></span>
                        </li>
                    ))}
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Skills
