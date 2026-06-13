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
import { Divider } from '@mui/material';

function Skills({ skills }) {
  const theme = useTheme();

  const skillsData = {
    html: {
      title: "HTML",
      subtitle: "HyperText Markup Language",
      description1: "HTML5 is the foundation of modern web development and serves as the standard markup language for creating web pages. It provides the structural framework of a website by organizing content into meaningful elements such as headers, sections, articles, forms, and multimedia components. HTML5 also introduces semantic tags that improve accessibility, search engine optimization, and overall code readability.",
      description2: "I use HTML5 to build well-structured, responsive, and user-friendly web applications. By leveraging semantic elements and modern features such as audio, video, and local storage, I create websites that are both functional and accessible across different devices and browsers."
    },
    css: {
      title: "CSS",
      subtitle: "CSS stands for Cascading Style Sheets",
      description1: "CSS3 is a powerful stylesheet language used to enhance the appearance and layout of web pages. It provides advanced styling capabilities, including animations, transitions, gradients, Flexbox, Grid, and responsive design techniques that help create visually appealing user interfaces.",
      description2: "I use CSS3 to transform static HTML structures into attractive and engaging designs. By combining modern layout systems and responsive design principles, I ensure that websites deliver a consistent and seamless user experience across desktops, tablets, and mobile devices."
    },
    javascript: {
      title: "JavaScript",
      subtitle: "Dynamic Web Development",
      description1: "JavaScript is a versatile programming language that adds interactivity and dynamic functionality to websites. It enables developers to manipulate web page content, handle user events, perform calculations, and communicate with servers without requiring page reloads.",
      description2: "I use JavaScript extensively to create interactive user experiences and dynamic web applications. By utilizing modern ES6+ features such as arrow functions, promises, async/await, and modules, I build efficient, maintainable, and scalable solutions for both frontend and backend development."
    },
    react: {
      title: "React.js",
      subtitle: "Frontend JavaScript Library",
      description1: "React.js is a powerful JavaScript library used for building fast and interactive user interfaces. It follows a component-based architecture that allows developers to create reusable UI components and efficiently manage application state.",
      description2: "I use React to develop scalable single-page applications that deliver smooth user experiences. By leveraging React Hooks, state management techniques, and component reusability, I build maintainable applications that are optimized for performance and future growth."
    },
    node: {
      title: "Node.js",
      subtitle: "JavaScript Runtime Environment",
      description1: "Node.js is a server-side runtime environment that enables JavaScript to run outside the browser. Built on Google's V8 engine, it uses an event-driven and non-blocking architecture, making it highly efficient for handling multiple requests and real-time operations.",
      description2: "I use Node.js to build scalable backend systems, RESTful APIs, and server-side applications. Its extensive ecosystem and asynchronous programming model allow me to create high-performance applications that support modern web development requirements."
    },
    express: {
      title: "Express.js",
      subtitle: "Backend Web Framework",
      description1: "Express.js is a lightweight and flexible web application framework built on top of Node.js. It simplifies backend development by providing powerful tools for routing, middleware management, request handling, and API creation.",
      description2: "I use Express.js to design and develop secure, efficient, and scalable backend services. Its simplicity and flexibility allow me to build RESTful APIs, implement authentication systems, and manage server-side functionality with clean and organized code."
    },
    mongoDB: {
      title: "MongoDB",
      subtitle: "NoSQL Database Solution",
      description1: "MongoDB is a document-oriented NoSQL database designed to store and manage large amounts of data efficiently. Unlike traditional relational databases, MongoDB uses flexible JSON-like documents, making it easier to adapt to changing application requirements.",
      description2: "I use MongoDB to create scalable database solutions for modern web applications. Its flexible schema design, powerful querying capabilities, and seamless integration with Node.js enable me to manage application data effectively while ensuring high performance."
    },
    restAPI: {
      title: "REST API",
      subtitle: "Application Communication Interface",
      description1: "REST APIs provide a standardized way for different software systems to communicate over the internet. They use HTTP methods such as GET, POST, PUT, and DELETE to perform operations and exchange data between clients and servers.",
      description2: "I design and integrate RESTful APIs to connect frontend applications with backend services efficiently. By implementing secure endpoints, proper data validation, and structured responses, I ensure reliable communication and seamless user experiences across web applications."
    },
    bootstrap: {
      title: "Bootstrap",
      subtitle: "Responsive UI Framework",
      description1: "Bootstrap is a popular front-end framework that simplifies the process of building responsive and mobile-friendly websites. It offers a comprehensive collection of pre-designed components, utility classes, and a flexible grid system that accelerates UI development.",
      description2: "I use Bootstrap to quickly develop professional and consistent user interfaces while maintaining responsiveness across different screen sizes. Its reusable components and customization options allow me to create clean layouts while reducing development time and effort."
    },
    mui: {
      title: "Material UI",
      subtitle: "React Component Library",
      description1: "Material UI is a modern React component library that follows Google's Material Design guidelines. It provides a rich set of reusable components, customization options, and responsive design features that help developers build elegant and user-friendly interfaces.",
      description2: "I use Material UI to create visually appealing and highly interactive web applications with React. Its extensive component ecosystem and styling system enable me to develop professional-grade user interfaces while maintaining design consistency throughout a project."
    }
  };
  return (
    <div className='d-flex align-items-center' style={{ height: '100%' }}>
      <Box sx={{ height: '90%', mt: 3, pt: 3 }}>
        <div>
          <Typography variant="h5" sx={{ color: '#00d4ff', textAlign: 'start', ml: 2, pb: 1 }}>{skillsData[skills].title} </Typography>
          <Typography sx={{ color: '#F8FAFC', textAlign: 'start', ml: 2 }}>{skillsData[skills].subtitle}</Typography>
          <Divider variant='middle' sx={{ borderColor: "#00d4ff", borderBottomWidth: "2px", my: 2, width: '80%', boxShadow: "0 0 8px #00d4ff" }}/>
          <Typography sx={{ textAlign: 'start', ml: 2, pb: 1 }}>{skillsData[skills].description1}</Typography>
          <Typography sx={{ textAlign: 'start', ml: 2 }}>{skillsData[skills].description2}</Typography>
        </div>
      </Box>
    </div>
  )
}

export default Skills