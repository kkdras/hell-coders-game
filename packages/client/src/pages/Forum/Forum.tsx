import {
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
import { messages, themes, forums } from './const'
import { ArrowBack } from '@mui/icons-material';




export const Forum = () => {
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
                <Accordion sx={{ backgroundColor: '#e3f2fd', borderRadius: '5%' }} key={forum.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"

                    >
                        <Grid container spacing={2} color={'text.primary'}>
                            <Grid item xs={9} >
                                <Typography pt={1}>{forum.title}</Typography>
                            </Grid>
                            <Grid item xs={1} >
                                <Typography pt={1}>{forum.themesCount}</Typography>
                            </Grid>
                            <Grid item xs={1} >
                                <IconButton color="success" onClick={(e) => {
                                    console.log('clicked');
                                }}>
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={1} >
                                <Typography pt={1} >{forum.answers}</Typography>
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
                        {themes.map(theme => (
                            <Accordion sx={{ backgroundColor: '#e3f2fd', borderRadius: '5%' }} key={theme.id}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                >
                                    <Grid container spacing={2} color={'text.primary'}>
                                        <Grid item xs={9} >
                                            <Typography >{theme.title}</Typography>
                                        </Grid>
                                        <Grid item xs={1} >
                                            <Typography >{theme.answers}</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <Typography pl={2}>{theme.lastAnswer}</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead >
                                            <TableRow >
                                                <TableCell align="center" colSpan={2} sx={{ color: 'blue' }}>
                                                    Сообщение
                                                </TableCell>
                                                <TableCell align="center" colSpan={2} sx={{ color: 'blue' }}>
                                                    Автор
                                                </TableCell>
                                                <TableCell align="center" colSpan={2} sx={{ color: 'blue' }} >
                                                    Время
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{ backgroundColor: '#ffab91' }}>
                                            {messages.map(message => (
                                                <TableRow key={message.id}>
                                                    <TableCell align="left" colSpan={2}>
                                                        {message.text}
                                                    </TableCell>
                                                    <TableCell align="center" colSpan={2}>
                                                        {message.author}
                                                    </TableCell>
                                                    <TableCell align="center" colSpan={2}>
                                                        {message.time}
                                                    </TableCell>
                                                </TableRow>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </AccordionDetails>
                            </Accordion>
                        ))
                        }
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </Box>
    )
}
