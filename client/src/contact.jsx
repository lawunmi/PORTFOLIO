import '../src/contact.css'
export default function Contact()
{
    return (
        <>
            <form id="contactform">
                <label>First Name</label>
                <input type="text" id="firstname" name="firstname"/><br/><br/>

                <label>Last Name</label>
                <input type="text" id="lastname" name="lastname"/><br/><br/>
                
                <label>Phone Number</label>
                <input type="tel" id="tel" name="tel"/><br/><br/>
                
                <label>Email Address</label>
                <input type="email" id="email" name="email"/><br/><br/>
                
                <label>Message</label>
                <textarea name="tarea" rows="6" cols="70"></textarea><br/><br/>

                <input type="submit" id="submit" value="Submit"/>
            </form>
        </>
    );
}