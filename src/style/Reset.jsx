    import './Reset.css'

function Reset(){
    return(

        <form action="">

            <div className="rest">

                <div className="index">
                    <input type="text" placeholder="New password" required/>
                </div>

                <div className="index">
                    <input type="text" placeholder="Comfirm password" required/>
                </div>
            
                <div className="press">
                    <button>update</button>
                </div>

                <div>
                    <p>Then ,<a href="Link">Login</a></p>
                </div>
            </div>

        </form>
    )
}
    export default Reset