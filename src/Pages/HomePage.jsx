import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgImage from '../assets/hero-banner.png'
import bgImage2 from '../assets/hero-text.png'
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
import { Box, Button, Divider, duration, Typography } from '@mui/material';
import { motion, scale } from 'motion/react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { MdFingerprint, MdPhoneIphone } from "react-icons/md";
import { Fingerprint } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import project1 from '../assets/newborn-project.png';
import project2 from '../assets/game-project.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { SiNetlify } from 'react-icons/si';
import profile from '../assets/profile.png'
import resume from '../assets/Nandana_P_full_stack_Developer_Resume.pdf';
import Header from '../Components/Header';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#020617',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#F8FAFC',
    ...theme.applyStyles('dark', {
        backgroundColor: '#ffff',
    }),
}));

function HomePage() {

    const [visible, setVisible] = useState('null')
    const [bgColor, setBgColor] = useState(bgImage)
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    console.log(bgColor);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const projects = [

        {
            name: "Studio Realms – Newborn & Family Photography Website",
            img: project1,
            feature1: "User authentication (Sign In / Sign Up).",
            feature2: "Categorized gallery for newborn, maternity, and family photography.",
            feature3: "Photography blogs and informational content.",
            feature4: "Contact page with FAQs and studio information",
            tech: "React.js, JavaScript, React Router, Material UI (MUI), Bootstrap, CSS3, HTML5.",
            desc1: "Studio Realms is a full-featured photography portfolio and booking platform designed for a professional newborn, maternity, and family photography studio. The website provides an elegant and visually engaging experience, allowing clients to explore photography collections, learn about services, read informative blogs, and seamlessly book photography sessions online",
            desc2: "The application features a modern, responsive user interface with dedicated sections for newborn, maternity, and family photography. Users can browse a categorized image gallery, view photography packages and pricing, explore detailed blog articles, and submit booking requests through an intuitive reservation system. The platform also includes user authentication functionality, enabling clients to create accounts and manage their interactions with the studio.",
            desc3: "To enhance user engagement, the website incorporates a dynamic homepage with service highlights, testimonials, pricing packages, and studio information. A dedicated contact section provides FAQs, studio details, and communication channels for potential clients. The design emphasizes premium aesthetics through carefully selected typography, imagery, and color schemes, creating a warm and professional brand identity.",
            link: "https://newborn-shoot-frontend.netlify.app/"
        },
        {
            name: "Memory Master – Interactive Memory Card Matching Game",
            img: project2,
            feature1: "Interactive memory card matching gameplay",
            feature2: "Randomized card shuffling for unique game sessions",
            feature3: "Victory notification using SweetAlert2",
            feature4: "Card flip animations and match detection",
            tech: "React.js, JavaScript, Material UI (MUI), React Router DOM, SweetAlert2, CSS3, HTML5.",
            desc1: "Memory Master is an engaging and interactive browser-based memory game designed to challenge players' concentration, observation, and memory skills. The game presents a collection of hidden cards containing anime-themed images, where players must flip cards and find matching pairs. With every successful match, players improve their memory retention while enjoying a fun and visually appealing gaming experience.",
            desc2: "To enhance user engagement, the game includes smooth card-flipping animations, a reset functionality for starting a new game instantly, and a celebratory victory alert when all pairs have been successfully matched. An interactive About section provides users with information about the game application features a randomized card generation system that shuffles image pairs each time the game starts, ensuring a unique experience with every playthrough. Players can flip cards to reveal hidden images, and the game automatically checks for matching pairs. Correct matches remain visible, while unmatched cards flip back after a short delay, encouraging players to remember card positions and strategize their moves.",
            desc3: "To enhance user engagement, the game includes smooth card-flipping animations, a reset functionality for starting a new game instantly, and a celebratory victory alert when all pairs have been successfully matched. An interactive About section provides users with information about the game",
            link: "https://memory-game-nandana.netlify.app/"
        }
    ]
    //when button click it openwith correct project
    const [project, setProject] = useState(null)
    const handlreProject = (item) => {
        setOpen(true)
        setProject(item)
    }
   
    return (
        <div className='py-4' style={{ backgroundColor: '#020617' }}>
            <Header/>
            <Container className='py-4 px-4 mt-5'>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} >
                    <Row >
                        <Col as={motion.div} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}  className="hero-banner d-flex justify-content-center align-items-center" style={{ borderRadius: '30px', boxShadow: '0 1px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.2)', }}>      
                           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 3 }}>
                            <Box component='img' src={bgImage2} sx={{height:{ xs: '260px', sm:'400px', md:'500px', lg:'600px' }}} alt="" />
                           </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
            <Container id='about' className='py-4 px-4'>
                <h1 className='text-center mb-5' style={{ color: '#00d4ff' }}>ABOUT ME</h1>
                <Row as={motion.div} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{duration:1}}>
                    <Col as={motion.div} animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className='about-banner d-flex align-items-center'>
                        <Col xs={12} md={8} lg={6} className='px-5 text-start'>
                            {/* <p style={{ color: '#00d4ff', fontSize: '14px' }}>ABOUT ME</p> */}
                            <h1 style={{ color: '#ffffff' }}>Hi, I'm <span style={{ color: '#00d4ff' }}>Nandana P</span></h1>
                            <h2 style={{ color: '#00d4ff' }}>MERN Stack Developer</h2>
                            <p style={{ color: '#cbd5e1' }}>I'm a passionate Full-Stack Developer specializing in the MERN Stack. I enjoy creating responsive, user-friendly web applications and turning ideas into functional digital experiences.</p>
                            <p style={{ color: '#cbd5e1' }}>Through my internship at Luminar Technolab, I gained practical experience in React.js, Node.js, MongoDB, REST APIs, and modern web development practices. I'm always eager to learn new technologies and build innovative solutions that solve real-world problems.</p>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <Button component={motion.div} animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} href={resume} download sx={{ py: 2, px: 4, borderRadius: '30px', color: "#fff", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(1px)", WebkitBackdropFilter: "blur(15px)", border: "1px solid #00d4ff", borderRadius: "30px", boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(0,162,255,0.15)" }} variant='contained'>Download Cv</Button>
                            </Box>
                        </Col>
                    </Col>
                </Row>
            </Container>
            <Container id='skills' className='py-4'>
                <h1 className='text-center mb-5' style={{ color: '#00d4ff' }}>MY SKILLS</h1>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{duration:1}}>
                    <Grid container spacing={3} >
                        <Grid size={{ xs: 12, md: visible == 'null' ? 12 : 6 }}>
                            <Item component={motion.div} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} sx={{ borderRadius: '30px', boxShadow: '0 1px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.2)', height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '500px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <Box sx={{ display: 'flex', justifyContent: visible ? 'center' : 'flex-start', pb: 3 }}>
                                        {(visible == 'null' || visible == 'html') && (<Box onClick={() => setVisible(visible == 'html' ? 'null' : 'html')} component="img" src={htmlIcon} alt="html" sx={{ borderRadius: '50%', width: visible == 'html' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto' }} />)}
                                        {(visible == 'null' || visible == 'css') && (<Box onClick={() => setVisible(visible == 'css' ? 'null' : 'css')} component="img" src={cssIcon} alt="css" sx={{ borderRadius: '50%', width: visible == 'css' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                        {(visible == 'null' || visible == 'javascript') && (<Box onClick={() => setVisible(visible == 'javascript' ? 'null' : 'javascript')} component="img" src={javaIcon} alt="javascript" sx={{ borderRadius: '50%', width: visible == 'javascript' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                        {(visible == 'null' || visible == 'bootstrap') && (<Box onClick={() => setVisible(visible == 'bootstrap' ? 'null' : 'bootstrap')} component="img" src={bootstrapIcon} alt="bootstrap" sx={{ borderRadius: '50%', width: visible == 'bootstrap' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                        {(visible == 'null' || visible == 'mui') && (<Box onClick={() => setVisible(visible == 'mui' ? 'null' : 'mui')} component="img" src={muiIcon} alt="mui" sx={{ borderRadius: '50%', width: visible == 'mui' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: visible ? 'center' : 'flex-start', }}>
                                        {(visible == 'null' || visible == 'react') && (<Box onClick={() => setVisible(visible == 'react' ? 'null' : 'react')} component="img" src={reactIcon} alt="React" sx={{ borderRadius: '50%', width: visible == 'react' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto' }} />)}
                                        {(visible == 'null' || visible == 'node') && (<Box onClick={() => setVisible(visible == 'node' ? 'null' : 'node')} component="img" src={nodeIcon} alt="React" sx={{ borderRadius: '50%', width: visible == 'node' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                        {(visible == 'null' || visible == 'express') && (<Box onClick={() => setVisible(visible == 'express' ? 'null' : 'express')} component="img" src={expressIcon} alt="express" sx={{ borderRadius: '50%', width: visible == 'express' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                        {(visible == 'null' || visible == 'mongoDB') && (<Box onClick={() => setVisible(visible == 'mongoDB' ? 'null' : 'mongoDB')} component="img" src={mongoDBIcon} alt="mongoDB" sx={{ borderRadius: '50%', width: visible == 'mongoDB' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                        {(visible == 'null' || visible == 'restAPI') && (<Box onClick={() => setVisible(visible == 'restAPI' ? 'null' : 'restAPI')} component="img" src={restAPIIcon} alt="restAPI" sx={{ borderRadius: '50%', width: visible == 'restAPI' ? { xs: '25vw', sm: '20vw', md: '180px', lg: '220px' } : { xs: '12vw', sm: '10vw', md: '90px', lg: '120px' }, height: 'auto', ml: 1 }} />)}
                                    </Box>
                                </div>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} hidden={visible == 'null'}>
                            <Item component={motion.div} animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} sx={{ borderRadius: '30px', boxShadow: '0 1px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.2)', height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '500px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {visible !== 'null' && <Skills skills={visible} />}
                            </Item>
                        </Grid>
                    </Grid>
                </motion.div>

            </Container>
            <Container id='project' className='py-4'>
                <h1 className='text-center mb-5' style={{ color: '#00d4ff' }}>MY PROJECT</h1>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{duration:1}}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, md: 8 }}>
                                {/* <Item> */}
                                <Item component={motion.div} animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} onClick={() => handlreProject(projects[0])} sx={{ display: 'flex', backgroundImage: `url(${project1})`, height: '400px', backgroundSize: 'cover', backgroundPosition: 'center left', backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)", border: "1px solid rgba(255, 255, 255, 0.18)", boxShadow: "0 4px 27px rgba(0, 212, 255, 0.15)", borderRadius: '17px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">

                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                        </Box>
                                    </Box>
                                </Item>
                                {/* </Item> */}
                            </Grid>
                            <Grid size={{ xs: 6, md: 4 }}>
                                <Item component={motion.div} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} onClick={() => handlreProject(projects[1])} className='card-img' sx={{ display: 'flex', backgroundImage: `url(${project2})`, height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)", border: "1px solid rgba(255, 255, 255, 0.18)", boxShadow: "0 4px 27px rgba(0, 212, 255, 0.15)", borderRadius: '17px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">

                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                        </Box>
                                    </Box>
                                </Item>
                            </Grid>
                            {/* <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                <Item>
                                    <Card onClick={() => handlreProject({ name: 'project2' })} className='card-img' sx={{ display: 'flex', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZdcpVgP4Sfpb5gEK5oKjeUiQdGlcAWL7Q&s")', height: '400px', backgroundSize: 'cover' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                <Item>
                                    <Card onClick={() => handlreProject({ name: 'project2' })} className='card-img' sx={{ display: 'flex', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZdcpVgP4Sfpb5gEK5oKjeUiQdGlcAWL7Q&s")', height: '400px', backgroundSize: 'cover' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                <Item>
                                    <Card className='card-img' sx={{ display: 'flex', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZdcpVgP4Sfpb5gEK5oKjeUiQdGlcAWL7Q&s")', height: '400px', backgroundSize: 'cover' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid size={{ xs: 6, md: 4 }}>
                                <Item>
                                    <Card onClick={() => handlreProject({ name: 'project2' })} className='card-img' sx={{ display: 'flex', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZdcpVgP4Sfpb5gEK5oKjeUiQdGlcAWL7Q&s")', height: '400px', backgroundSize: 'cover' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid size={{ xs: 6, md: 8 }}>
                                <Item>
                                    <Card onClick={() => handlreProject(p)} className='card-img' sx={{ display: 'flex', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZdcpVgP4Sfpb5gEK5oKjeUiQdGlcAWL7Q&s")', height: '400px', backgroundSize: 'cover' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
                                                    Mac Miller
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Item>
                            </Grid> */}
                        </Grid>
                    </Box>
                </motion.div>
            </Container>
            <Container id='contact' className='py-4'>
                <h1 className='text-center mb-5' style={{ color: '#00d4ff' }}>Contact Me</h1>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{duration:1}}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Item className={'d-flex justify-content-center align-items-end'} component={motion.div} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} sx={{ backgroundImage: `url(${profile})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '547px', boxShadow: "0 4px 27px rgba(0, 212, 255, 0.15)", borderRadius: '17px' }}>
                                <h3 style={{ color: '#00d4ff' }}>Nandana P</h3>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Item component={motion.div} animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className='card-img' sx={{ display: 'flex', justifyContent: 'center', boxShadow: "0 4px 27px rgba(0, 212, 255, 0.15)", borderRadius: '17px' }}>
                                <Box sx={{ width: '90%' }}>
                                    <Typography sx={{ textAlign: 'start', pt: 4 }}>LET'S CONNECT</Typography>
                                    <Typography variant='h4' sx={{ textAlign: 'start', color: '#00d4ff', pb: 2, pt: 1 }}>Get In Touch</Typography>
                                    <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                                        <BiLogoGmail className='p-1' style={{ fontSize: '45px', boxShadow: "0 2px 10px rgba(0, 212, 255, 0.15)", borderRadius: '10px', backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }} />
                                        <Box sx={{ width: '100%' }}>
                                            <a href="mailto:nandanaprabhakar856@gmail.com" style={{ textDecoration: 'none' }}>
                                                <Typography sx={{ textAlign: 'start', fontWeight: 800 }}>
                                                    Email
                                                </Typography>
                                                <Typography sx={{ textAlign: 'start' }}>
                                                    nandanaprabhakar856@gmail.com
                                                </Typography>
                                            </a>
                                            <Divider
                                                sx={{ borderColor: "#00d4ff", borderBottomWidth: "2px", my: 2, width: '80%', boxShadow: "0 0 8px #00d4ff", }} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                                        <MdPhoneIphone className='p-1' style={{ fontSize: '45px', boxShadow: "0 2px 10px rgba(0, 212, 255, 0.15)", borderRadius: '10px', backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }} />
                                        <Box sx={{ width: '100%' }}>
                                            <Typography sx={{ textAlign: 'start', fontWeight: 800 }}>
                                                Phone
                                            </Typography>
                                            <Typography sx={{ textAlign: 'start' }}>
                                                +91 9207021131
                                            </Typography>
                                            <Divider sx={{ borderColor: "#00d4ff", borderBottomWidth: "2px", my: 2, width: '80%', boxShadow: "0 0 8px #00d4ff" }} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                                        <FaLinkedin className='p-1' style={{ fontSize: '45px', boxShadow: "0 2px 10px rgba(0, 212, 255, 0.15)", borderRadius: '10px', backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }} />
                                        <Box sx={{ width: '100%' }}>
                                            <a href="https://www.linkedin.com/in/nandana--p/" style={{ textDecoration: 'none' }}>
                                                <Typography sx={{ textAlign: 'start', fontWeight: 800 }}>
                                                    LinkedIn
                                                </Typography>
                                                <Typography sx={{ textAlign: 'start' }}>
                                                    linkedin.com/in/nandana--p
                                                </Typography>
                                            </a>
                                            <Divider sx={{ borderColor: "#00d4ff", borderBottomWidth: "2px", my: 2, width: '80%', boxShadow: "0 0 8px #00d4ff" }} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <SiNetlify className='p-1' style={{ fontSize: '45px', boxShadow: "0 2px 10px rgba(0, 212, 255, 0.15)", borderRadius: '10px', backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }} />
                                        <Box sx={{ width: '100%' }}>
                                            <a href="https://app.netlify.com/user/settings" style={{ textDecoration: 'none' }}>
                                                <Typography sx={{ textAlign: 'start', fontWeight: 800 }}>
                                                    Netlify
                                                </Typography>
                                                <Typography sx={{ textAlign: 'start' }}>
                                                    app.netlify.com/user
                                                </Typography>
                                            </a>
                                            <Divider sx={{ borderColor: "#00d4ff", borderBottomWidth: "2px", my: 2, width: '80%', boxShadow: "0 0 8px #00d4ff" }} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <FaGithub className='p-1' style={{ fontSize: '45px', boxShadow: "0 2px 10px rgba(0, 212, 255, 0.15)", borderRadius: '10px', backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }} />

                                        <Box sx={{ width: '100%' }}>
                                            <a href="https://github.com/nandanaprabhakar" style={{ textDecoration: 'none' }}>
                                                <Typography sx={{ textAlign: 'start', fontWeight: 800 }}>
                                                    Github
                                                </Typography>
                                                <Typography sx={{ textAlign: 'start' }}>
                                                    github.com/nandanaprabhakar1
                                                </Typography>
                                            </a>
                                            <Divider sx={{ borderColor: "#00d4ff", borderBottomWidth: "2px", my: 2, width: '80%', boxShadow: "0 0 8px #00d4ff" }} />
                                        </Box>

                                    </Box>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </motion.div>

            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                fullWidth
                maxWidth="lg"
                BackdropProps={{
                    sx: {
                        backgroundColor: "rgba(0,0,0,0.3)",
                        backdropFilter: "blur(5px)",
                    },
                }}
                sx={{
                    "& .MuiDialog-paper": {
                        width: { xs: "95%", sm: "90%", md: "80%", lg: "900px" }, // ⭐ key fix
                        // margin: '30px',
                        borderRadius: { xs: 0, sm: 2 },
                        backgroundColor: "rgba(0,0,0,0.35) !important",
                        backdropFilter: "blur(15px)",
                        boxShadow: "none",
                        maxHeight: "85vh",
                    }, 
                }}
            >
                <Box sx={{ backgroundColor: 'transparent' }}>
                    <DialogTitle id="scroll-dialog-title" sx={{ color: '#00d4ff', backgroundColor: 'transparent' }}>{project?.name}</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText sx={{
                            backgroundColor: "transparent",
                            color: "white",
                        }}
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                    <Grid size={{sm:16, lg:6}}>
                                        <Item sx={{ backgroundColor: 'transparent' }}>
                                            <img src={project?.img} alt="" style={{ width: '100%' }} />
                                        </Item>
                                    </Grid>
                                    <Grid size={{sm:16, lg:6}}>
                                        <Item sx={{ backgroundColor: 'transparent' }}>
                                            <h6>Key Features</h6>
                                            <p className='text-start'>{project?.feature1}</p>
                                            <p className='text-start'>{project?.feature2}</p>
                                            <p className='text-start'>{project?.feature3}</p>
                                            <p className='text-start'>{project?.feature4}</p>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <p>{project?.desc1}</p>
                            <p>{project?.desc2}</p>
                            <p>{project?.desc3}</p>
                            <h6 className='text-center'>Tech Used: React.js, JavaScript, React Router, Material UI (MUI), Bootstrap, CSS3, HTML5.</h6>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <a href={project?.link}><Button variant='contained' sx={{ borderRadius: '30px', backgroundColor: "00d4ff", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.2)", background: "#rgba(0, 212, 255, 0.15)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", }}>Live Link</Button></a>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div >
    )
}

export default HomePage