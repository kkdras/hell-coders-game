import { Link } from 'react-router-dom'

export function Error500() {
    return (
      <div style={{ background: 'red' }}>
        <h2>Ошибка сервера!</h2>
        <p>
          Мы уже бросили все свои дела и стремительно ремонтируем...
        </p>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    )
  }
