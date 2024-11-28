import React from 'react';
import { Parallax } from 'react-parallax';
import './parallax.css'; // Import your CSS file for styling

const ParallaxComponent = () => {
    return (
        <div>
            <Parallax
                blur={10}
                bgImage={require('../assets/forOp.jpg')}
                bgImageAlt="Background Image 1"
                strength={200}
            >
                <div style={{ height: 500 }}>
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>
                        Welcome to Parallax Effect
                    </h1>
                </div>
            </Parallax>
{/* 
            <div style={{ height: 500, backgroundColor: '#fff' }}>
                <h2 style={{ textAlign: 'center' }}>Scroll Down</h2>
            </div> */}

            <Parallax
                blur={10}
                bgImage={require('../assets/police2.jpg')}
                bgImageAlt="Background Image 2"
                strength={200}
            >
                <div style={{ height: 500 }}>
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>
                        Another Parallax Section
                    </h1>
                </div>
            </Parallax>

            {/* <div style={{ height: 500, backgroundColor: '#fff' }}>
                <h2 style={{ textAlign: 'center' }}>More Content Below</h2>
            </div> */}
        </div>
    );
};

export default ParallaxComponent;