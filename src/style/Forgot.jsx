            import './Forgot.css'
function Forgot(){
    return(
            <form action="">
                <div className="plot">
                    <div>
                        <h1>Forgot password</h1>

                        <div className="scan">
                             <input type="text" placeholder="Email" required/>
                        </div>

                        <div className='btn01'>
                            <button>SendLink</button>
                        </div>

                        <div>
                            <p>Then proceed to reset,<a href="Reset">Reset</a></p>
                        </div>
                    </div>
            </div>
            </form>
    )
}
        export default Forgot