import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const Appbar = () => {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className="bg-white text-green-700">
                  <div className="flex justify-center w-full">
                    <Typography variant="h6">
                        <Link className="text-2xl" to="/">Learn Well</Link>
                    </Typography>
                    <div className="flex space-x-10 ml-28 justify-end w-3/4">
                        <Typography variant="h6">
                            <Link className="text-lg" to="/about">About</Link>
                        </Typography>

                        <Typography variant="h6">
                            <Link className="text-lg" to="/courses">Courses</Link>
                        </Typography>

                        <Typography variant="h6">
                            <Link className="text-lg" to="/dashboard">Dashboard</Link>
                        </Typography>

                        <Typography variant="h6">
                            <Link className="text-lg" to="/login">Login</Link>
                        </Typography>

                        <Typography variant="h6">
                            <Link className="text-lg" to="signup">Signup</Link>
                        </Typography>

                        <Typography variant="h6">
                            <Link className="text-lg" to="/contact">Contact</Link>
                        </Typography>
                    </div>
                </div>
              </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Appbar
