
        import './style/Link.css'
function Link(){
    return(
        
        <form action="">
            <div className="container">
                <div className="heading">
                    <h1>Login form</h1>
                </div>
                <div className="mail">
                    <input type="text" placeholder="Email" required/>
                </div>

                <div className="mail">
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="btn">
                    <button>submit</button>
                </div>

                <div className="pen">
                    <p>Don't have an account? <a href="Register">Register</a></p>
                </div>

                <div className='acra'>
                    <p>Forgot password,<a href="Forgot">click here</a></p>
                </div>
            </div>
        </form>

    )
}
    export default Link;