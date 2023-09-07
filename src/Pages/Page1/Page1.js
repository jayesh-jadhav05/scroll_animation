import React, { useEffect } from 'react'
import './page1style.css';
import cloud from '../../assets/Cloud.png';
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import blueStar from '../../assets/bluestar.png';
import PageText from '../../assets/page1Text.png';
import Header from '../../Components/Header/Header';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import vector from '../../assets/vector.png';

const Page1 = () => {

    const { ref, inView } = useInView();
    const animation = useAnimation();
    const text_animation = useAnimation();
    const cloud_animation = useAnimation();
    const hero_div_animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({ y: 0, x: 0, scale: 1, rotate: -90, transition: { type: 'ease-out', duration: 2 } });
            text_animation.start({ x: 0, transition: { type: 'ease-out', duration: 1 } })
            cloud_animation.start({ y: 0, transition: { type: 'ease-out', duration: 1 } })
            hero_div_animation.start({ y: 0, transition: { type: 'ease-out', duration: 1.3 } })
        }
        if (!inView) {
            animation.start({ y: '-1600px', x: '-200px', scale: -0.4, rotate: -180, transition: { type: 'ease-out', duration: 2 } });
            text_animation.start({ x: '-300px', transition: { type: 'ease-out', duration: 1 } })
            cloud_animation.start({ y: '400px', transition: { type: 'ease-out', duration: 1 } })
            hero_div_animation.start({ y: '-700px', transition: { type: 'ease-out', duration: 1.3 } })
        }
    }, [inView])

    return (
        <div className='page-1-container'>
            <Header />
            <div className='page1-data'>
                <div ref={ref} className='image-container'>
                    <motion.img animate={cloud_animation} src={cloud} alt='cloud' className='cloud-image' />
                    <motion.div animate={hero_div_animation} className='second-image-container'>
                        <img src={hero1} alt='hero1' />
                        <img src={hero2} alt='hero2' />
                        <img src={hero3} alt='hero3' />
                    </motion.div>
                    <motion.img
                        animate={animation}
                        src={blueStar} alt='hero4' className='blue-star-img' />
                    <motion.img animate={text_animation} src={PageText} alt='pageText' className='page1-text' />
                    <img src={vector} alt='vector-image' className='vector-image' />
                </div>
            </div>
        </div>
    )
};

export default Page1