import React from 'react'
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import Carousel from 'react-bootstrap/Carousel';
import W1 from '../home images/website1.jpeg';
import W2 from '../home images/website2.jpeg';
import W3 from '../home images/website6.jpeg'
export default function Home() {
  return (
    <div>
      
      <div 
       className = 'header-wraper' 
      >
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={W1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={W2}
          
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={W3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        <div className = 'main-info' >
         <h1> do you want a cool mobile responsive websites ? Great then you are in the right place </h1>  
        
        <Particles 
        id = "tsparticles"
        className = "tsparticles-canvas"
        options = {
            {

                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 20,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#5dade2",
                    },
                    links: {
                        color: "#5dade2",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1.2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "polygon",
                    },
                    size: {
                        random: true,
                        value: 10,
                    },
                },
                detectRetina: true,
            }
        }
        />  
         <Typewriter className = 'typed-text'
           options={{
            strings: ["Web design", "Web Development", "Web scraping", "UI design", "pentration testing"],
            autoStart: true,
            loop: true, 
            typeSpeed :  40 ,
            backSpeed : 5 
            
            }}
         />
        
        

        <Link className = 'btn-main-offer'
        to = { '/contact' } > contact me </Link> 
    </div>
    </div>
    </div>
  )
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Particles from 'react-tsparticles';

// //import Typed from "react-typed";
// function Home() {
//   // const particlesInit = async (main) => {
//   //   console.log(main);

//   //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//   //   // starting from v2 you can add only the features you need reducing the bundle size
//   //   await loadFull(main);
//   // };

//   // const particlesLoaded = (container) => {
//   //   console.log(container);
//   // };
//   return (
    
//       <div className = 'header-wraper' >
//         <div className = 'main-info' >
//         <h1> do you want a cool mobile responsive websites ?
            
//             <br > </br>
//         Great then you are in the right place </h1> <br > </br> <>
//         <Particles>
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         background: {
//           color: {
//             value: "#0d47a1",
//           },
//         },
//         fpsLimit: 120,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             resize: true,
//           },
//           modes: {
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff",
//           },
//           links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce",
//             },
//             random: false,
//             speed: 6,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       }}</Particles>
    
//         {/* <Particles id = "tsparticles"
//         className = "tsparticles-canvas"
//         options = {
//             {

//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         bubble: {
//                             distance: 400,
//                             duration: 2,
//                             opacity: 0.8,
//                             size: 40,
//                         },
//                         push: {
//                             quantity: 4,
//                         },
//                         repulse: {
//                             distance: 20,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: "#5dade2",
//                     },
//                     links: {
//                         color: "#5dade2",
//                         distance: 150,
//                         enable: true,
//                         opacity: 0.5,
//                         width: 1,
//                     },
//                     collisions: {
//                         enable: true,
//                     },
//                     move: {
//                         direction: "none",
//                         enable: true,
//                         outMode: "bounce",
//                         random: false,
//                         speed: 1.2,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 800,
//                         },
//                         value: 80,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "polygon",
//                     },
//                     size: {
//                         random: true,
//                         value: 10,
//                     },
//                 },
//                 detectRetina: true,
//             }
//         }
//         />  */}
//          {/* <Typed className = "typed-text"
//         strings = {
//             ["Web design", "Web Development", "Web scraping", "UI design", "pentration testing"]
//         }
//         typeSpeed = { 40 }
//         backSpeed = { 5 }
//         loop


//         >
//         </Typed>  */}
//         <Link className = 'btn-main-offer'
//         to = { '/contact' } > contact me </Link> </> 
//     </div>
//     </div>
//   )
// }

// export default Home