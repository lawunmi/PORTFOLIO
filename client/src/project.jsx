import '../src/project.css'
import project1 from '../src/assets/images/project1.jpg'
import project2 from '../src/assets/images/project2.png'
import project3 from '../src/assets/images/project3.png'
export default function Project()
{
    return (
        <>
            <div id="projdiv">
                <div id="project3">
                    <img src = {project1} width="250px" height="220px"/>
                    <p>This is an Investment mobile application.<br/>
                       It was developed using flutter.I developed the API use in developing this application, 
                       and I also developed some features.</p>
                </div>
                <div id="project2">
                    <img src = {project2} width="250px" height="220px"/>
                    <p>This is a property valuation web application.<br/>
                       It was developed using Oracle APEX for its interface and Oracle database for the backend. 
                       I worked on both the frontend and backend.</p>
                </div>
                <div id="project1">
                    <img src = {project3} width="250px" height="220px"/>
                    <p>API Development and documentation.</p>
                </div>
            </div>
        </>
    );
}