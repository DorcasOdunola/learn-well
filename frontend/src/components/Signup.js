// import TextField from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@mui/material/Select';
import { useState } from 'react';
import Select from '@material-ui/core/Select';
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
            <div className="container md:p-40">
                <div className="md:w-1/2 mx-auto bg-white shadow-md">
                    <Box>
                        <form action="" onSubmit={saveUser}>

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
                                    <TextField id="outlined-basic" className="w-full" value={phoneNo} label="Phone Number"  onChange={(e)=>setPhoneNo(e.target.value)} />
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

                                {/* <Select></Select> */}
                                <TextField
                                  id=""
                                  label="Felix"
                                  select
                                  variant="outlined"
                                //   value={}
                                //   onChange={}

                                
                                  
                                />
                                {/* <MenuItem value={}></MenuItem> */}
                                 <MenuItem value="Tutor">Tutor</MenuItem>
                                <MenuItem value="Student">Student</MenuItem>
                                {/* <div className="m-5">
                                    <TextField id="outlined-basic" className="w-full" value={password} label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} />
                                </div> */}
                            </div>
                            <div className="p-5 w-1/2 mx-auto">
                                <button className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;">Signup</button>
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
