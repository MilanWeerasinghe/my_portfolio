import { images } from "./images";


const projects = [
  {
    title: " Blog Application (Ongoing)",
    info: "This project was built to provide a robust and scalable platform for users to create, manage, and interact with blog posts. Goal was to  learn how the MERN stack works together in building full-stack applications, understand and implement CRUD operations using RESTful APIs while working with a non-relational database like MongoDB. ",
    technologies: [ "React", "Tailwind CSS", "Node", "Express", "MongoDB"],
    image: images.blogImage,
    alt: "blogApp-image",
    link: "https://github.com/MilanWeerasinghe/blogApp",
  },
  {
    title: "Hotel Management App",
    info: " This project was built to address the need for a scalable, efficient hotel booking system that can handle room management, booking reservations, and user authentication. The goal was to create a microservice-based application that could easily scale to handle increasing traffic while providing a seamless experience for both users and administrators. ",
    technologies: ["Spring Boot", "React", "MySQL", "Keycloak"],
    image: images.hotelImage,
    alt: "hotel-image",
    link: "https://github.com/MilanWeerasinghe/hotel_management_backend",
  },
  {
    title: "Artist Management System",
    info: "The application manages artists, songs, and albums, providing functionalities for adding, updating, and deleting records. Developed using Java, the system integrates a MySQL database for data storage. The aim of this project was to deepen my understanding of design patterns, SOLID principles, and OOP concepts.",
    technologies: ["Java", "MySQL"],
    image: images.artistImage,
    alt: "artist-Managent-image",
    link: "https://github.com/MilanWeerasinghe/MusicApp",
  },
  {
    title: "Cheer Up Bot",
    info: " This application utilizes facial recognition technology to detect boredom and automatically initiate conversations to engage the user. The system was designed to monitor facial expressions and, upon detecting boredom, trigger a dynamic chatbot response. ",
    technologies: [ "Python", "Gemini API"],
    image: images.convoImage,
    alt: "cheerUp-image",
    link: "https://github.com/Sayuru-Nimsara/CheerUpBot",
  },
];

export default projects;
