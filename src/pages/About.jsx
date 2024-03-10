import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pixelPortrait from '../assets/pixel-portrait.png';
import me from '../assets/me.jpg';

export default function About() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const speed = 50;

  const fullText = "Howdy! My name is Diana and I'm a full stack developer.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex]); // Trigger effect on currentIndex change

  useEffect(() => {
    setText(fullText.slice(0, currentIndex));
  }, [currentIndex]); // Update text when currentIndex changes

  return (
    <div>
    <div className="hero d-flex flex-column justify-content-center text-center">
      <div className="frame d-flex flex-column align-self-center align-items-center justify-content-center mb-5 p-5">
        <img src={pixelPortrait} class="mb-1" id="pixel-portrait" alt="pixel-portrait" />
        <p id="text">{text}</p>
      </div>
      <div>
        <a className="mx-3 home-svg" href="https://github.com/dianamariedischer" target="_blank"><svg fill="#d14513" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#d14513"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a5006e1e"> <path id="XMLID_1_" display="inline" d="M6.962,266.753c22.59-5.641,53.305-13.324,107.118-14.753 c-1.487-2.974-2.83-6.053-4.019-9.228c-20.94-0.182-85.43,2.792-107.521,8.25c-0.125,0.039-0.259,0.048-0.393,0.048 c-0.739,0-1.42-0.508-1.602-1.256c-0.211-0.873,0.326-1.774,1.208-1.995c21.89-5.41,84.825-8.413,107.118-8.355 c-5.017-14.753-7.233-31.655-7.233-50.523c0-33.516,10.437-46.159,24.46-64.02c-10.724-38.197,3.847-64.307,3.847-64.307 s22.533-4.671,65.132,25.832c23.089-9.89,84.647-10.714,113.77-2.196c17.88-11.818,50.571-28.585,63.77-23.895 c3.568,5.755,11.262,22.513,4.662,59.348c4.489,8.077,27.761,25.286,27.856,73.928c-0.384,17.938-2.245,33.084-5.698,45.899 c55.54-0.47,88.212,4.115,110.715,8.259c0.883,0.182,1.478,1.036,1.324,1.928c-0.153,0.787-0.844,1.353-1.611,1.353 c-0.115,0-0.211-0.009-0.326-0.019c-22.466-4.163-55.194-8.729-111.061-8.221c-0.979,3.252-2.072,6.341-3.262,9.286 c19.013,0.633,71.233,2.667,113.823,15.693c0.883,0.269,1.362,1.189,1.094,2.072c-0.211,0.7-0.863,1.16-1.573,1.16 c-0.153,0-0.326-0.019-0.479-0.076c-43.185-13.199-96.538-15.012-114.283-15.598c-15.444,33.929-47.118,46.59-98.322,51.856 c16.595,10.446,21.353,23.548,21.353,59.003c0,35.453-0.479,40.211-0.364,48.363c0.173,13.383,19.779,19.789,19.051,24.096 c-0.729,4.299-16.403,3.607-23.731,1.047c-20.758-7.232-18.687-24.5-18.687-24.5l-0.69-47.404c0,0,1.42-25.516-8-25.516 c0,5.131,0,59.242,0,77.592c0,16.863,11.799,21.986,11.799,28.221c0,10.715-21.563-1.016-28.202-7.703 c-10.134-10.168-8.982-31.73-8.733-48.785c0.23-16.471-0.153-52.49-0.153-52.49l-6.877,0.145c0,0,2.82,78.686-3.626,93.025 c-8.335,18.408-33.477,24.74-33.477,16.355c0-5.641,6.196-3.846,9.621-16.488c2.925-10.754,1.928-90.975,1.928-90.975 s-8.057,4.768-8.057,19.789c0,6.877-0.192,46.158-0.192,57.852c0,14.705-20.883,23.078-30.917,23.078 c-5.084,0-11.405-0.248-11.405-2.943c0-6.801,19.099-10.793,19.099-24.941c0-12.268-0.269-43.826-0.269-43.826 s-9.631,1.648-23.367,1.648c-34.628,0-45.583-22.1-50.792-34.465c-6.782-16.105-15.578-23.673-24.921-29.717 c-5.736-3.712-7.06-8.096-0.422-9.343c30.657-5.774,38.494,34.763,58.964,41.218c14.609,4.615,33.391,2.619,42.734-3.424 c1.238-12.385,10.159-23.089,17.593-28.729c-52.067-4.998-82.936-23.079-98.936-52.145c-54.466,1.305-85.372,9.036-108.029,14.695 c-1.65,0.413-3.261,0.815-4.815,1.209c-0.134,0.028-0.269,0.038-0.403,0.038c-0.739,0-1.41-0.499-1.602-1.247 c-0.221-0.882,0.326-1.784,1.209-2.005C3.72,267.567,5.322,267.175,6.962,266.753z"> </path> </g> </g></svg></a>
        <a className="mx-3 home-svg" href="https://www.linkedin.com/in/diana-discher-839672185" target="_blank"><svg width="35px" height="35px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#d14513"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin [#d14513]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#d14513"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#d14513]"> </path> </g> </g> </g> </g></svg></a>
        <a className="mx-3 home-svg" href="https://github.com/dianamariedischer" target="_blank"><svg width="40px" height="40px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pinterest [#180]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7399.000000)" fill="#d14513"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M173.876,7239 C168.399,7239 164,7243.43481 164,7248.95866 C164,7253.05869 166.407,7256.48916 169.893,7258.07936 C169.893,7256.21186 169.88,7256.45286 171.303,7250.38046 C170.521,7248.80236 171.129,7246.19673 172.88,7246.19673 C175.31,7246.19673 173.659,7249.79964 173.378,7251.2174 C173.129,7252.30544 173.959,7253.14238 174.955,7253.14238 C176.864,7253.14238 178.108,7250.71524 178.108,7247.87063 C178.108,7245.69456 176.615,7244.10437 174.042,7244.10437 C169.467,7244.10437 168.307,7249.19966 169.893,7250.79893 C170.292,7251.40294 169.893,7251.43118 169.893,7252.22174 C169.616,7253.05768 167.403,7251.84259 167.403,7248.70757 C167.403,7245.86195 169.727,7242.51518 174.457,7242.51518 C178.191,7242.51518 180.681,7245.27609 180.681,7248.2054 C180.681,7252.13805 178.523,7254.98366 175.37,7254.98366 C174.291,7254.98366 173.295,7254.3978 172.963,7253.72824 C172.36,7256.07371 172.238,7257.26258 171.303,7258.58153 C172.216,7258.83261 173.129,7259 174.125,7259 C179.602,7259 184,7254.56519 184,7249.04235 C183.752,7243.43481 179.353,7239 173.876,7239" id="pinterest-[#180]"> </path> </g> </g> </g> </g></svg></a>
      </div>
    </div>
    
    <Container id="about">
      <Row className=' p-5 justify-content-center'>
        <Col lg="3">
          <h5 className='text-uppercase smallheader'>About</h5> 
          <h1 className='mb-3' id="head1">It all started with...</h1>
          <img src={me} id="me" alt="A picture of me"/>
        </Col>               

        <Col lg="6" id="about-text">
          <h2 id="head2">Customization</h2>
            <p> Specifically, customizing my Tumblr blog. Since those early experiences in HTML, 
              CSS, and Javascript, I've taken college courses in Java and Python, and I'm currently 
              immersed in a <a href="https://bootcamp.sas.upenn.edu/coding/" target="_blank">full-stack 
              developer bootcamp</a> through the University of Pennsylvania.</p>
            <p>My relationship to web development began because I had a vision I wanted to realize,
              and that's remained a consistent motivator for me in all of the projects I take on. 
              When I'm not coding, I enjoy taking on sewing, printmaking, and ceramics projects 
              because they can be a nice break from the digital.</p> 
            <p>You can find me working part time at <a href="https://www.fwsgallery.com" target="_blank">
              FrameWorks Studio & Gallery</a>, where I work on the website, consult with clients 
              to design individualized custom framing options, and then assist with the assembly 
              of those frames - and pick up the coffees 😇</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}