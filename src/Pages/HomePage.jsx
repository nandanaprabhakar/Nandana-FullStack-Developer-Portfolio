import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import htmlIcon from '../assets/html-icon.png'
import cssIcon from '../assets/css-icon.png'
import javaIcon from '../assets/javascript-icon.png'
import muiIcon from '../assets/mui-icon.png'
import bootstrapIcon from '../assets/bootstrap-icon.png'
import reactIcon from '../assets/react-icon.png'
import nodeIcon from '../assets/node-icon.png';
import mongoDBIcon from '../assets/mongoDB-icon.png';
import expressIcon from '../assets/express-icon.png';
import restAPIIcon from '../assets/restAPI-icon.png';
import Skills from './Skills';
import { Box, duration } from '@mui/material';
import { motion, scale } from 'motion/react';

function HomePage() {

    // const [small, setSmall] = useState(false) //initaly the heading is big
    // useEffect(() => { //wnen compinent excute useEffect run
    //     const timer = setTimeout(() => {
    //         setSmall(true)
    //     }, 4000) //after 2secit change  to small
    //     return () => clearTimeout(timer) //for avoid unnessscery runing
    // }, []) //[]dependency array run only onc

    const [visible, setVisible] = useState('null')
    return (
        <div className='py-4' style={{ backgroundColor: '#020617' }}>
            <Container className='py-4 px-4'>
                <Row>
                    <motion.Col initial={{scale:0.5}} animate={{scale:1}} transition={{duration:2}} className='about-banner d-flex align-items-center'>
                        <Col xs={12} md={4} lg={6} className='px-5 text-start'>
                            <p style={{ color: '#00d4ff', fontSize: '14px' }}>ABOUT ME</p>
                            <h1 style={{ color: '#ffffff' }}>Hi, I'm <span style={{ color: '#00d4ff' }}>Nandana P</span></h1>
                            <h2 style={{ color: '#00d4ff' }}>MERN Stack Developer</h2>
                            <p style={{ color: '#cbd5e1' }}>I'm a passionate Full-Stack Developer specializing in the
                                MERN stack (MongoDB, Express.js, React.js, and Node.js).
                                I enjoy building modern, responsive, and user-friendly web
                                applications that solve real-world problems.</p>
                            <p style={{ color: '#cbd5e1' }}>During my internship at Luminar Technolab, I worked on
                                real-world projects and strengthened my skills in React,
                                Node.js, MongoDB, REST APIs, and responsive UI development.
                                I'm constantly learning and exploring new technologies to
                                create impactful digital experiences.</p>
                        </Col>
                    </motion.Col>
                </Row>
            </Container>
            <Container className='py-4'>
                <Row className={visible ? 'd-flex justify-content-between' : ''}>
                    <motion.h1 initial={{fontSize:'150px'}}  whileInView={{ fontSize: "40px", opacity: 1, fontFamily:'inherit' }} viewport={{ once: true, amount: 0.5 }} transition={{duration: 2}} className='text-center mb-5' style={{ color: '#00d4ff' }}>MY SKILLS</motion.h1>
                    <Col xs={12} md={6} lg={6}>

                        <Box sx={{ display: 'flex', justifyContent: visible ? 'center' : 'flex-start', pb: 3}}>
                            {(visible == 'null' || visible == 'html') && (<Box onClick={() => setVisible(visible == 'html' ? 'null' : 'html')} component="img" src={htmlIcon} alt="html" sx={{ borderRadius: '50%', width: visible == 'html' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto' }} />)}
                            {(visible == 'null' || visible == 'css') && (<Box onClick={() => setVisible(visible == 'css' ? 'null' : 'css')} component="img" src={cssIcon} alt="css" sx={{ borderRadius: '50%', width: visible == 'css' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}
                            {(visible == 'null' || visible == 'javascript') && (<Box onClick={() => setVisible(visible == 'javascript' ? 'null' : 'javascript')} component="img" src={javaIcon} alt="javascript" sx={{ borderRadius: '50%', width: visible == 'javascript' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}
                            {(visible == 'null' || visible == 'bootstrap') && (<Box onClick={() => setVisible(visible == 'bootstrap' ? 'null' : 'bootstrap')} component="img" src={bootstrapIcon} alt="bootstrap" sx={{ borderRadius: '50%', width: visible == 'bootstrap' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}
                            {(visible == 'null' || visible == 'mui') && (<Box onClick={() => setVisible(visible == 'mui' ? 'null' : 'mui')} component="img" src={muiIcon} alt="mui" sx={{ borderRadius: '50%', width: visible == 'mui' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: visible ? 'center' : 'flex-start', }}>
                            {(visible == 'null' || visible == 'react') && (<Box onClick={() => setVisible(visible == 'react' ? 'null' : 'react')} component="img" src={reactIcon} alt="React" sx={{ borderRadius: '50%', width: visible == 'react' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto' }} />)}
                            {(visible == 'null' || visible == 'node') && (<Box onClick={() => setVisible(visible == 'node' ? 'null' : 'node')} component="img" src={nodeIcon} alt="React" sx={{ borderRadius: '50%', width: visible == 'node' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}
                            {(visible == 'null' || visible == 'express') && (<Box onClick={() => setVisible(visible == 'express' ? 'null' : 'express')} component="img" src={expressIcon} alt="express" sx={{ borderRadius: '50%', width: visible == 'express' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}
                            {(visible == 'null' || visible == 'mongoDB') && (<Box onClick={() => setVisible(visible == 'mongoDB' ? 'null' : 'mongoDB')} component="img" src={mongoDBIcon} alt="mongoDB" sx={{ borderRadius: '50%', width: visible == 'mongoDB' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}
                            {(visible == 'null' || visible == 'restAPI') && (<Box onClick={() => setVisible(visible == 'restAPI' ? 'null' : 'restAPI')} component="img" src={restAPIIcon} alt="restAPI" sx={{ borderRadius: '50%', width: visible == 'restAPI' ? { xs: 120, sm: 150, md: 180, lg: 200 } : { xs: 60, sm: 80, md: 90, lg: 100 }, height: 'auto', ml: 1 }} />)}

                        </Box>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        {visible !== 'null' && <Skills skills={visible}/>}
                    </Col>
                </Row>
            </Container>
            <Container className='py-4'>
                <h1 className='text-center mb-5' style={{ color: '#00d4ff' }}>MY PROJECT</h1>
                <Row>
                    <Col xs={12} md={8}>
                        xs=12 md=8
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                </Row>
                <Row>

                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6}>xs=6</Col>
                    <Col xs={6}>xs=6</Col>
                </Row>
            </Container>
        </div >
    )
}

export default HomePage