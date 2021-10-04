import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Test = () => {
    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6">
                    Testing
                </Typography>
              </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Test
