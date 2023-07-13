import { BASE_URL } from '../../shared/consts'
import { Box } from '@mui/material'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { User } from '../../store/leaderboard/types'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    sortable: false,
    width: 80,
    renderCell: (params: GridCellParams) => (
      <img
        src={`${BASE_URL}/resources${params.value}`}
        style={{ width: 37, borderRadius: '50%' }}
      />
    )
  },
  {
    field: 'name',
    headerName: 'Nick',
    width: 150
  },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 100
  }
]

export const LeaderBoard = () => {
  const data = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 100
  }

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    document.title = 'Таблица рекордов - Тетрис'
  }, [])

  useEffect(() => {
    axios
      .post(`${BASE_URL}/leaderboard/hell-coders`, data, {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(response => {
        const formattedData = response.data.map((item: any, index: number) => ({
          id: index + 1,
          name: item.data.name,
          score: parseInt(item.data.score),
          avatar: item.data.avatar
        }))
        setUsers(formattedData)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        m: 1
      }}>
      <Box sx={{ m: 1, mt: 3 }}>
        <h1>Leaderboard</h1>
      </Box>
      <Box sx={{ m: 1, mt: 3 }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10
              }
            }
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  )
}
