import React, {useEffect, useRef} from 'react';
import './Algo.css';
import gsap from 'gsap';
import Transition from './Transition';

function Algo() {
    const algo= gsap.timeline();
    const algoh1 = useRef(null);
    const algoimg = useRef(null);

    useEffect( () => {
        algo.from(algoh1.current, {duration: .6, skewX: 10, x: -100, opacity: 0}, "-=3.5")
        algo.from(algoimg.current, {duration: .5, y: -200, opacity: 0}, "-=3")
    })

    return (
        <div>
            <Transition timeline={algo} />
            <div className="algo-image algo-overlay"></div>
            <div className ="container-algo">
                    <h1 ref={algoh1}>Algorithm Page</h1>
            </div>
        </div>
    )
}
export default Algo