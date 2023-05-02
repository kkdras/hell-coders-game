import {
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
import { forumList, themesExample } from './const'


export const Forum = () => {
    const navigate = useNavigate()
    return (<>
        <Grid container spacing={2} pt={16} pb={4} color={'blue'}>
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
            forumList.map(item => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        border-radius="0px"
                    >
                        <Grid container spacing={2} color={'text.primary'}>
                            <Grid item xs={9} >
                                <Typography pt={1}>{item.title}</Typography>
                            </Grid>
                            <Grid item xs={1} >
                                <Typography pt={1}>{item.themesCount}</Typography>
                            </Grid>
                            <Grid item xs={1} >
                                <IconButton color="success" onClick={(e) => {
                                    e.preventDefault();
                                    console.log('clicked');
                                }}>
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={1} >
                                <Typography pt={1} >{item.answers}</Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2} pb={2} color={'text.secondary'} fontStyle={'italic'} >
                            <Grid item xs={8} >
                                <Typography pl={2} variant="body2">Темы</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography pl={8} variant="body2">Ответы</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography pl={10} variant="body2">Последний</Typography>
                            </Grid>
                        </Grid>
                        {themesExample.map(item => (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    border-radius="0px"
                                >
                                    <Grid container spacing={2} color={'text.primary'}>
                                        <Grid item xs={9} >
                                            <Typography >{item.title}</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography >{item.answers}</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <Typography pl={2}>{item.lastAnswer}</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                            </Accordion>
                        ))
                        }
                    </AccordionDetails>
                </Accordion>
            ))
        }


    </>
    )
}
