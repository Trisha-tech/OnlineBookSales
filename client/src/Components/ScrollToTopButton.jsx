import React,{useEffect,useState} from 'react'
import {FaArrowUp} from 'react-icons/fa';
const ScrollToTopButton = () => {
    const [isVisible,setIsVisible]=useState(false)
    useEffect(()=>{
        const toggleVisibility=()=>{
            if(window.pageYOffset>300){
                setIsVisible(true);
            }
            else{
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll',toggleVisibility);
        return ()=>window.removeEventListener('scroll',toggleVisibility);
    },[]);
    const ScrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <button onClick={ScrollToTop}
            className={`scroll-to-top ${isVisible?'show':""}`}>
                <FaArrowUp size={30} className='m-2'/>
        </button>
    )
}

export default ScrollToTopButton
