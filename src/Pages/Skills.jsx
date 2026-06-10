import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function Skills({skills}) {
  const theme = useTheme();

  const skillsData = {
  html: {
    title: "HTML",
    description: "HTML5 is the latest version of HyperText Markup Language (HTML), the standard markup language used to create and structure web pages. It introduces semantic elements such as <header>, <nav>, <section>, <article>, and <footer>, which improve code readability and accessibility. HTML5 also supports multimedia elements like <audio> and <video> without requiring external plugins. It provides features such as local storage, form validation, geolocation, and canvas for graphics, making modern web development more efficient and interactive."
  },
  css: {
    title: "CSS",
    description: "CSS3 is used to style web pages by controlling layouts, colors, typography, animations, and responsiveness. It helps create modern, attractive, and user-friendly CSS3 is used to style web pages by controlling layouts, colors, typography, animations, and responsiveness. It helps create modern, attractive, and user-friendly websites. I have experience using Flexbox, CSS Grid, and Media Queries to build responsive designs that work seamlessly across different devices and screen sizes.."
  },
  javascript: {
    title: "JavaScript",
    description: "JavaScript is a versatile programming language used to create interactive and dynamic web applications. It enables features such as DOM manipulation, event handling, form validation, asynchronous programming, and API integration. I use JavaScript to build responsive user interfaces and enhance user experiences with efficient and maintainable code.I have experience working with modern JavaScript concepts such as ES6+, functions, promises, async/await, and array methods to develop scalable web applications."
  },
  react: {
    title: "React.js",
    description: "React.js is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to build reusable UI components and efficiently update and render components when data changes.React components can be either functional or class-based. Functional components are now preferred due to their simplicity and the introduction of Hooks, which provide state management and lifecycle handling in a function-based format."
  },
  node: {
    title: "Node.js",
    description: "Node.js is a powerful JavaScript runtime environment that enables developers to build fast and scalable server-side applications. It uses an event-driven, non-blocking architecture, making it ideal for handling multiple requests efficiently. I use Node.js to develop RESTful APIs, manage server-side logic, and create high-performance web applications.I enjoy using Node.js to develop modern web applications that require speed, scalability, and real-time functionality."
  },
  express: {
    title: "Express.js",
    description: "Express.js is a lightweight and efficient web framework for Node.js that helps streamline the development of server-side applications. It offers powerful tools for routing, middleware integration, request handling, and API development. I use Express.js to build secure and scalable backend systems that efficiently manage application logic and data flow. Its simplicity and flexibility enable me to develop maintainable web services that power modern full-stack applications."
  },
  mongoDB: {
    title: "MongoDB",
    description: "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents, making it highly scalable and easy to work with. It provides high performance, efficient data storage, and seamless integration with modern web applications. I use MongoDB to design and manage databases, perform CRUD operations, and handle large amounts of application data efficiently. Its flexibility and scalability make it an excellent choice for building dynamic and data-driven applications."
  },
  restAPI: {
    title: "REST API",
    description: "REST API (Representational State Transfer Application Programming Interface) is a standard architectural style used for communication between client and server applications. It enables efficient data exchange through HTTP methods such as GET, POST, PUT, and DELETE. I use REST APIs to connect frontend and backend systems, manage data flow, and build scalable web applications. Well-designed REST APIs help ensure secure, reliable, and maintainable communication across modern software systems."
  },
  bootstrap: {
    title: "Bootstrap",
    description: "BootstBootstrap is a popular front-end framework used to build responsive and mobile-first web applications. It provides a collection of pre-built components, a powerful grid system, and utility classes that help speed up development. I use Bootstrap to create consistent, user-friendly interfaces and ensure seamless responsiveness across different devices and screen sizes.rap is a CSS framework for responsive design."
  },
  mui: {
    title: "Material UI",
    description: "Material UI (MUI) is a popular React component library that implements Google's Material Design principles. It provides a wide range of pre-built, customizable components and styling solutions that help create modern and responsive user interfaces. I use MUI to build consistent, visually appealing applications while improving development speed and user experience."
  }
};
  return (
    <div>
      {<Card sx={{ display: 'flex', backgroundColor: 'transparent', borderRadius: '30px', boxShadow: '0 1px 30px rgba(0, 0, 0, 0.5),0 0 20px rgba(0, 212, 255, 0.2)' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{ color: '#00d4ff', pl: 1 }}>
              {skillsData[skills].title}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex' }}>
            <p className='text-start mx-4'>{skillsData[skills].description}</p>
          </Box>
        </Box>
      </Card>}
      {/* <Card sx={{ display: 'flex', backgroundColor: 'transparent', borderRadius: '30px', boxShadow: '0 1px 30px rgba(0, 0, 0, 0.5),0 0 20px rgba(0, 212, 255, 0.2)' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{ color: '#00d4ff', pl: 1 }}>
              React.js
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex' }}>
            <p className='text-start mx-4'>React.js is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to build reusable UI components and efficiently update and render components when data changes.
              React components can be either functional or class-based. Functional components are now preferred due to their simplicity and the introduction of Hooks, which provide state management and lifecycle handling in a function-based format.
            </p>
          </Box>
        </Box>
      </Card> */}
    </div>
  )
}

export default Skills