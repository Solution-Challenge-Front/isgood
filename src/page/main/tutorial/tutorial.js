import { useState } from 'react';
import './tutorial.css';

function Tutorial(){
    let [state, set_state] = useState();
    return(
        <div className={'tuto' +" "+ state}>
            <div className='tuto_container'>
                <div className='tuto1'>
                <h2>Idea Connection Tutorial</h2>
                <div className='t_box'>
                    <div className='t_content'>
                    
                    </div>
                </div>
                </div>
            </div>
            
            <button className='main-btns-join' onClick={() => { set_state("") }}>close</button>
        </div>
    );
}
export default Tutorial;