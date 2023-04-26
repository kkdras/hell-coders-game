import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export function Error404() {
    return (
      <div style={{ 
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
       }}>
        <h2>Ошибка 404!</h2>
        <p>
            К сожалению, запрашиваемая страница не найдена.
        </p>
        <p>
            <Button variant="contained"href="/">Go to the home page</Button>
        </p>
      </div>
    )
  }
