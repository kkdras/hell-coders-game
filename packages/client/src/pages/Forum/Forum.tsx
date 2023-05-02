import {
    Grid,
    Typography,
    Box,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { forums } from './const'
import { ArrowBack } from '@mui/icons-material';
import ForumAccordeon from './components/ForumAccordeon/ForumAccordion';




export function Forum() {
    const navigate = useNavigate();

    return (<Box pt={4}>
        <ArrowBack onClick={() => { navigate(-1) }} />
        <Grid container spacing={2} pt={12} pb={4} color={'blue'}>
            <Grid item xs={8} >
                <Typography pl={2} >ФОРУМЫ</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography pl={8}>ТЕМЫ</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography pl={8}>ОТВЕТЫ</Typography>
            </Grid>
        </Grid>
        {
            forums.map(forum => (
                <ForumAccordeon id={forum.id} themesCount={forum.themesCount} answersCount={forum.answersCount} title={forum.title} />
            ))
        }
    </Box>
    )
}
