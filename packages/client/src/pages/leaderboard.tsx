import { Component } from 'react'
import { Box, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import testAvatar from '../../public/avatar1.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: '50px',
  }));

const Users = [
    {
        id: 1,
        avatar: '',
        name: 'Vasya',
        points: 10000,
    },
    {
        id: 2,
        avatar: '',
        name: 'Petya',
        points: 9000,
    },
    {
        id: 3,
        avatar: '',
        name: 'Masha',
        points: 8000,
    },
    {
        id: 4,
        avatar: '',
        name: 'Tetya',
        points: 7000,
    },
    {
        id: 5,
        avatar: '',
        name: 'Motya',
        points: 6000,
    },
    {
        id: 6,
        avatar: '',
        name: 'Ira',
        points: 5000,
    },
    {
        id: 7,
        avatar: '',
        name: 'Dima',
        points: 4000,
    },
    {
        id: 8,
        avatar: '',
        name: 'Tanya',
        points: 3000,
    },
    {
        id: 9,
        avatar: '',
        name: 'Olga',
        points: 2000,
    },
    {
        id: 10,
        avatar: '',
        name: 'Kostya',
        points: 1000,
    },
];

export class LeaderBoard extends Component {

  componentDidMount() {
    document.title = "Таблица рекордов - Тетрис";
  }

  render() {
    return (
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            m: 1,
        }}>
            <Box sx={{ m: 1, mt: 3}}>
                <h1>Таблица рекордов</h1>
            </Box>
            <Box sx={{ flexGrow: 1, m: 1, mt: 3 }}>
                <Grid container spacing={{ xs: 1, md: 6 }} columns={{ xs:2, sm: 4, md: 8 }}>
                    {Array.from(Users).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Grid container spacing={0.5}>
                                <Grid item xs={1} sx={{ minWidth: '20px' }}>
                                    <Item>{Users[index].id}</Item>
                                </Grid>
                                <Grid item xs={1} sx={{ minWidth: '37px' }}>
                                    <img src={testAvatar} width={37} height={37}/>
                                </Grid>
                                <Grid item xs>
                                    <Item>{Users[index].name}</Item>
                                </Grid>
                                <Grid item xs={2} sx={{ minWidth: '50px' }}>
                                    <Item>{Users[index].points}</Item>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
  }
}