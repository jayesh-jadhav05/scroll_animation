import React, { useEffect } from 'react'
import './page2.css';
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import blueStar from '../../assets/bluestar.png';
import PageText from '../../assets/page2Text.png';
import Header from '../../Components/Header/Header';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import vector from '../../assets/vector.png';

const Page2 = () => {

    const { ref, inView } = useInView({ threshold: 0.2 });
    const animation = useAnimation();
    const text_animation = useAnimation();
    const hero_div_animation = useAnimation();

    useEffect(() => {

        if (inView) {
            animation.start({ y: 0, rotate: 0, transition: { type: 'ease-out', duration: 1 } });
            text_animation.start({ x: 0, transition: { type: 'ease-out', duration: 1 } })
            hero_div_animation.start({ x: 0, transition: { type: 'ease-out', duration: 1.3 } })

        }
        if (!inView) {
            animation.start({ y: '170px', rotate: 160, transition: { type: 'ease-out', duration: 1 } });
            text_animation.start({ x: '300px', transition: { type: 'ease-out', duration: 1 } })
            hero_div_animation.start({ x: '-500px', transition: { type: 'ease-out', duration: 1.3 } })
        }
    }, [inView])

    return (
        <div className='page-1-container'>
            <Header />
            <div className='page1-data'>
                <div ref={ref} className='image-container'>
                    <motion.div animate={hero_div_animation} className='page2-second-image-container'>
                        <img src={hero1} alt='hero1' />
                        <img src={hero2} alt='hero2' />
                        <img src={hero3} alt='hero3' />
                    </motion.div>
                    <motion.img animate={animation} src={blueStar} alt='hero4' className='page2-blue-star-img' />
                    <motion.img animate={text_animation} src={PageText} alt='pageText' className='page2-text' />
                    <img src={vector} alt='vector-image' className='page2-vector-image' />
                </div>
            </div>
        </div>
    )
};

export default Page2;