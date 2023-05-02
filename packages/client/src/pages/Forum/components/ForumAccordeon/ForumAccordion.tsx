import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { themes } from "../../const";
import { IForum } from "../../types";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import ThemeAccordeon from "../ThemeAccordeon/ThemeAccordeon";
import { lightBlue } from '@mui/material/colors';




export default function ForumAccordeon(forum: IForum) {
    const lightLightBlue = lightBlue[50];
    return (
        <Accordion sx={{ backgroundColor: lightLightBlue, borderRadius: '5%' }} key={forum.id}>
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
                        <Typography pt={1} >{forum.answersCount}</Typography>
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
                {themes.map(theme => (theme.forumId === forum.id &&
                    <ThemeAccordeon id={theme.id} forumId={theme.forumId} title={theme.title}
                        answersCount={theme.answersCount}
                        lastAnswer={theme.lastAnswer} />
                ))
                }
            </AccordionDetails>
        </Accordion>
    )
}
