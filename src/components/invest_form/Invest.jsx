import React  from 'react'
import './Invest'
const Invest = ({myform}) => {
     if(!myform) 
       return null
    return (
        <div className='overlay'>
           
                <form action="/action_page.php" className="form-container">
                    <h1>Mailing Details</h1>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="name"><b>Full Name</b></label>
                    <input type="type" placeholder="Enter Full Name" name="name" required />

                    <button type="submit" class="btn">Invest</button>
                    <button type="button" class="btn cancel" onclick="closeForm()">Cancel</button>
                </form>
        </div>  
        
    )
}

export default Invest
