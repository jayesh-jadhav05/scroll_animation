import React, { useEffect } from 'react'
import './page4style.css';
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import blueStar from '../../assets/bluestar.png';
import PageText from '../../assets/Page3text.png';
import Header from '../../Components/Header/Header';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import vector from '../../assets/vector.png';

const Page4 = () => {

    const { ref, inView } = useInView({ threshold: 0.1 });
    const animation = useAnimation();
    const text_animation = useAnimation();
    const hero_div_animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({ x: 0, rotate: 0, transition: { type: 'ease-out', duration: 1 } });
            text_animation.start({ x: 0, transition: { type: 'ease-out', duration: 1 } })
            hero_div_animation.start({ y: 0, transition: { type: 'ease-out', duration: 1.3 } })
        }
        if (!inView) {
            animation.start({ x: '-1200px', rotate: 90, transition: { type: 'ease-out', duration: 1 } });
            text_animation.start({ x: '800px', transition: { type: 'ease-out', duration: 1 } })
            hero_div_animation.start({ y: '700px', transition: { type: 'ease-out', duration: 1.3 } })
        }
    }, [inView])

    return (
        <div className='page-1-container'>
            <Header />
            <div className='page1-data'>
                <div ref={ref} className='image-container'>
                    <motion.div animate={hero_div_animation} className='page4-second-image-container'>
                        <img src={hero1} alt='hero1' />
                        <img src={hero2} alt='hero2' />
                        <img src={hero3} alt='hero3' />
                    </motion.div>
                    <motion.img src={blueStar} animate={animation} alt='hero4' className='page4-blue-star-img' />
                    <motion.img animate={text_animation} src={PageText} alt='pageText' className='page4-text' />
                    <motion.img animate={text_animation} src={vector} alt='vector-image' className='page4-vector-image' />
                </div>
            </div>
        </div>
    )
};

export default Page4;