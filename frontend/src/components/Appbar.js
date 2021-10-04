import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Appbar = () => {
    return (
        <div>
            <AppBar position="fixed" className="bg-green-200">
                <Toolbar className="bg-green-700">
                  <div className="flex justify-center w-full">
                    <Typography variant="h6">
                        <h4 className="text-2xl">Learn Well</h4>
                    </Typography>
                    <div className="flex space-x-10 ml-28 justify-end w-3/4">
                        <Typography variant="h6">
                            <h4 className="text-xl">About</h4>
                        </Typography>

                        <Typography variant="h6">
                            <h4 className="text-xl">Courses</h4>
                        </Typography>

                        <Typography variant="h6">
                            <h4 className="text-xl">Dashboard</h4>
                        </Typography>

                        <Typography variant="h6">
                            <h4 className="text-xl">Login</h4>
                        </Typography>

                        <Typography variant="h6">
                            <h4 className="text-xl">Signup</h4>
                        </Typography>

                        <Typography variant="h6">
                            <h4 className="text-xl">Contact</h4>
                        </Typography>
                    </div>
                </div>
              </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Appbar
