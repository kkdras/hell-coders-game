import { TableCell, TableRow } from "@mui/material";
import { IMessage } from "../../types";

export default function ForumAccordeon(message: IMessage) {

    return (
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
    )
}
