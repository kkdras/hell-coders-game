import { Accordion, AccordionDetails, AccordionSummary, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { messages } from "../../const";
import { ITheme } from "../../types";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MessagesTable from "../MessagesTable/MessagesTable";

export default function  ForumAccordeon (theme: ITheme) { 
    return (
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
                                            <Typography >{theme.answersCount}</Typography>
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
                                            {messages.map(message => ( message.themeId === theme.id &&
                                                <MessagesTable id={message.id} themeId={message.themeId} author={message.author} time={message.time} text={message.text}/>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </AccordionDetails>
                            </Accordion>

)}
