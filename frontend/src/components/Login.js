import { TextField } from "@material-ui/core"

const Login = () => {
    return (
        <div>
            <div className="container md:p-40">
                <div className="md:w-1/2 mx-auto bg-white shadow-md p-5">
                    <h3 className="text-green-700 text-2xl text-center font-bold">USER LOGIN</h3>
                    <div className="w-full py-14">
                        <TextField
                        id=""
                        label="Email"
                        variant="outlined"
                        className="w-full"
                        //   value={}
                        //   onChange={}
                        />
                    </div>
                    <div>
                        <TextField
                        id=""
                        label="Password"
                        variant="outlined"
                        className="w-full"
                        //   value={}
                        //   onChange={}
                        />
                    </div>
                    <div className="p-5 w-1/2 mx-auto">
                        <button className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;">Login</button>
                    </div>
                    <h3 className="text-sm text-center pb-5">Don't have an account yet? <a href="#" className="text-green-900 font-bold">Signup</a></h3>
                </div>
            </div>
            
        </div>
    )
}

export default Login
