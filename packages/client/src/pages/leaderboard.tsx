import { useEffect } from 'react'
import { Box } from '@mui/material'
import testAvatar from '../image/avatar1.png'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'

const columns = [
    { field: 'id', 
      headerName: 'ID', 
      width: 80,
    },
    {
      field: 'avatar',
      headerName: 'Avatar',
      sortable: false,
      width: 80,
      renderCell: (params: GridCellParams) =>  (
            <img 
                src={params.value as string} 
                style={{ width: 37, borderRadius: '50%' }}
            />
        ),
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'points',
      headerName: 'Points',
      type: 'number',
      width: 100,
    },
  ];

const rows = [
    { id: 1, avatar: testAvatar, name: 'Vasya', points: 1000000 },
    { id: 2, avatar: testAvatar, name: 'Petya', points: 9000  },
    { id: 3, avatar: testAvatar, name: 'Masha', points: 8000  },
    { id: 4, avatar: testAvatar, name: 'Tetya', points: 7000  },
    { id: 5, avatar: testAvatar, name: 'Motya', points: 6000  },
    { id: 6, avatar: testAvatar, name: 'Ira',   points: 5000  },
    { id: 7, avatar: testAvatar, name: 'Dima',  points: 4000  },
    { id: 8, avatar: testAvatar, name: 'Tanya', points: 3000  },
    { id: 9, avatar: testAvatar, name: 'Olga',  points: 2000  },
    { id: 10, avatar: testAvatar, name: 'Kostya Super Long Name', points: 1000 },
    { id: 11, avatar: testAvatar, name: 'Name on next Page', points: 500 },
];


export function LeaderBoard() {
    
    useEffect(() => {
    document.title = 'Таблица рекордов - Тетрис'
    }, [])

    return (
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            m: 1,
        }}>
            <Box sx={{ m: 1, mt: 3}}>
                <h1>Leaderboard</h1>
            </Box>
            <Box sx={{ m: 1, mt: 3}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                          paginationModel: {
                            pageSize: 10,
                          },
                        },
                      }}
                    pageSizeOptions={[5, 10, 25]}
                    disableRowSelectionOnClick
                />
            </Box>
        </Box>
    );
}
