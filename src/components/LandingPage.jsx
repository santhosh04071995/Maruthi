import styles from './LandingPage.module.css';
import React, {useEffect } from 'react';

export default  function LandingPage({myvalue,mymessage}){
    

    
    if(myvalue == 1)
        {
            return(
                <div>
                    <img className={styles.sizes} src="/car1.webp" alt="" />
                    <div className={styles.mycontent}>
                        <p className={styles.fsize}>{mymessage[0].text}</p>
                        <button className='bg-danger text-white rounded border border-light'>Explore</button>
         
                    </div>
                </div>
            );
        }
       else if(myvalue == 2)
            {
                return (
                    <div>
                        <img className={styles.sizes} src="/car2.webp" alt="" />
                        <div className={styles.mycontent}>
                        <p>{mymessage[1].text}</p>
                        <button className='bg-danger text-white rounded border border-light'>Explore</button>
         
                    </div>
                    </div>
                );
            }

        else if(myvalue ==3)
            {
                return (
                    <div>
                        <img className={styles.sizes} src="/car3.webp" alt="" />
                        <div className={styles.mycontent}>
                        <p >{mymessage[2].text}</p>
                        <button className='bg-danger text-white rounded border border-light'>Explore</button>
         
                    </div>
                    </div>
                );
            }
            else if(myvalue == 4)
                {
                    return (
                        <div>
                           <video className={styles.sizes} controls autoPlay  muted>
                                <source src="fronx_video.mp4" type="video/mp4" />
                                
                            </video>
                        </div>
                       
                    );
        
                }
            }