import React from 'react';
import {linkedinIcon, githubIcon} from '../media/exportMedia' 
import './Info.css'


function Info(props) {


    return (
        <div className='info-container'>
            <div className='info-text'>
                <h2>Duck Dive</h2>
                <p>The duck dive is a technique surfers use to get under a breaking wave when paddling out to the line-up.
                    By pushing the nose of the surfboard underwater, and letting the body follow, you are able to get under the breaking wave and ditch being “washed” in the wave.
                    With a bit of practice and a surfboard that is small in volume, you will master a duck dive and experience that the paddle out to the lineup feels easier.</p>
            </div>
            <div className='info-team'>
                <div>
                    <h2>The team</h2>
                </div>
                <div  className='info-team-photos'>
                    <div>
                        <div  className='profiles'>
                            
                        </div>
                        <div className='social-media-icon'>
                            <h3>Tiago Jacinto</h3>
                        <div className='icon'>
                            <img src={linkedinIcon} alt="" />
                            <img src={githubIcon} alt="" />
                        </div>
                            
                        </div>
                    </div>
                    <div>
                        <div  className='profiles'>
                            
                        </div>
                        <div className='social-media-icon'>
                            <h3>Juan Giménez</h3>
                        <div className='icon'>
                            <img src={linkedinIcon} alt="" />
                            <img src={githubIcon} alt="" />
                        </div>
                            
                        </div>
                    </div>
                    <div>
                        <div  className='profiles'>
                            
                        </div>
                        <div className='social-media-icon'>
                            <h3>Francisco Pereira</h3>
                        <div className='icon'>
                            <img src={linkedinIcon} alt="" />
                            <img src={githubIcon} alt="" />
                        </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Info;