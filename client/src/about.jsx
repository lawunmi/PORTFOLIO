import '../src/about.css'
import PICS from '../src/assets/images/picture.png'
export default function About()
{
    return (
        <>
            <div id= "aboutcontent">
                <section id= "rightaboutsection">
                    <img src = {PICS} alt="my picture" width="300px" height="300px"/>
                </section>
                <section id= "leftaboutsection">    
                    <h1>Hi,</h1>
                    <h4>I am Mistura Raheem</h4><br/>
                    <h5>I am an Oracle Developer</h5>
                    <p>I am currently studying for a diploma in Software Engineering Technician.
                        I have a B.Sc in Computer Science from Lagos State University,
                        Ojo, Lagos, Nigeria. I have over 5 years experience working with Oracle and it's framework.
                        I write RESTful API leveraging on Oracles' ORDS. 
                    </p>
                    <h6>Link to</h6>&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1nKwkXLW0YxJlrG9N8pUZx-N8zVm90N2e/view?usp=sharing">Resume</a>
                </section>
            </div>
        </>
    );
}