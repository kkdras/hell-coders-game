import { Component } from 'react'
import { Button, Box } from '@mui/material'

export default class Error extends Component<{title: string, text: string, img: string}> {

    render() {
    
        return (
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: 10,
        }}>
            <Box sx={{color: 'error.main', margin: 2}}>
            <h1>{this.props.title}</h1>
            </Box>
            <Box sx={{color: 'error.main', margin: 2}}>
            <img src={this.props.img}/>
            </Box>
            <Box sx={{fontSize: 20, margin: 2}}>
                {this.props.text}
            </Box>
            <Box sx={{margin: 2}}>
            <Button variant='contained' href='/'>HOME PAGE</Button>
            </Box>
        </Box>
        )
    }
}
