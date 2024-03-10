import resume from '../assets/Diana_Discher_Resume.pdf';

export default function About() {
  return (
    <div className='m-4'>
      <div className="m-auto p-4 rounded" id="resume">
        <h5 className='text-uppercase smallheader'>Skills</h5>
        <h1 id="contact-header">My Experience and Toolkit</h1>
        <p><a href={resume} target="_blank"> Click here</a> to see my resume. <br/>
        These are the development tools I've used in previous projects:</p>
      </div>
    </div>
  );
}
