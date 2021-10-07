// import TextField from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { useState } from 'react';
import Select from '@mui/material/Select';
import useTry from './useTry.js';




const Signup = () => {
    // const [age, setAge] = useState("Fifty")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [status, setStatus] = useState("")
    const [password, setPassword] = useState("")

    const saveUser=(e)=>{
        e.preventDefault()
        let user = {firstName, lastName, email, phoneNo, status, password};
        console.log(user);
    }
    const classes = useTry();
    return (
        <>
            <div className="container md:px-40 md:py-14">
                <div className="md:w-3/4 mx-auto">
                    <Box>
                        <form action="" onSubmit={saveUser}>
                            <div className="shadow-md md:m-20">
                                <h3 className="text-green-700 text-2xl text-center font-bold">USER SIGNUP</h3>
                                <div className="grid md:grid-cols-2">
                                    <div className="m-5">
                                        <TextField id="outlined-basic" className="w-full" value={firstName} label="First Name" variant="outlined" onChange={(e)=>setFirstName(e.target.value)} />
                                    </div>

                                    <div className="m-5">
                                        <TextField id="outlined-basic" className="w-full" value={lastName} label="Last Name" variant="outlined" onChange={(e)=>setLastName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2">
                                    <div className="m-5">
                                        <TextField id="outlined-basic" className="w-full" value={email} label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className="m-5">
                                        <TextField id="outlined-basic" className="w-full" value={phoneNo} label="Phone Number" variant="outlined"  onChange={(e)=>setPhoneNo(e.target.value)} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2">
                                    <div className="m-5">
                                    {/* <Box sx={{ minWidth: 120 }}> */}

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Register as a</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={status}
                                            // label="Register as a"
                                            onChange={(e)=>setStatus(e.target.value)}
                                            variant="outlined"
                                            className="w-full"
                                            >
                                            <MenuItem value="Tutor">Tutor</MenuItem>
                                            <MenuItem value="Student">Student</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {/* </Box> */}
                                    
                                    </div>
                                    {/* <TextField
                                    id=""
                                    label="Felix"
                                    select
                                    variant="outlined"
                                    //   value={}
                                    //   onChange={}
                                    /> */}
                                    <div className="m-5">
                                        <TextField id="outlined-basic" className="w-full" value={password} label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="p-5 w-1/2 mx-auto">
                                    <button className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;">Signup</button>
                                </div>
                                <h3 className="text-sm text-center pb-5">Has an account already? <a href="#" className="text-green-900 font-bold">Login</a></h3>
                            </div>
                
                        </form>
                    </Box>
                </div>
            </div>
            
        </>
    )
}

export default Signup


// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function Signup() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
