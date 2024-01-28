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
                
                <label>Email Address</label>
                <input type="email" id="email" name="email"/><br/><br/>

                <input type="submit" id="submit" value="Submit"/>
            </form>
        </>
    );
}