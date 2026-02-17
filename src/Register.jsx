
import './style/Register.css'

function Register(){
    return(
        <form action="">
            <div className="frame">
                        <div>
                            <h1>Registration form</h1>
                        </div>

                <div className="inputt">
                    <label htmlFor="fullname">FullName</label>
                    <input type="text" placeholder="Full Name"  required/>
                </div>

                <div className="inputt">
                    <label htmlFor="email">Email</label>
                    <input type="Email" name="" placeholder="Email" required />
                </div>

                <div className="inputt">
                    <label htmlFor="phone number">Phone Number</label>
                    <input type="text" placeholder="Phone number" required/>
                </div>

                <div className="inputt">
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="Password"/>
                </div>

                <div className="btnn">
                    <button>Register</button>
                </div>

                <div className="">
                    <p>Already have an account <a href="link">LOGIN</a></p>
                </div>

            </div>
        </form>
    )
}

export default Register