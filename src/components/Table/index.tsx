import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useGetPokemonList } from 'hooks';

interface TableProps {
  onRowClick: (name:string) => void;
}

const columns = [
  { field: 'name', headerName: 'Name', sortable: false, resizable: true },
  { field: 'url', headerName: 'Url', sortable: false, resizable: true },
]

function Table({onRowClick}: TableProps) {
  const [size, setSize] = useState(25)
  const [page, setPage] = useState(0)

  const [list, isLoadingList] = useGetPokemonList({offset: size*page, limit: size})

  return (
    <DataGrid
      columns={columns}
      disableColumnFilter
      disableColumnMenu
      getRowId={(row) => row["name"]}
      loading={isLoadingList}
      onPageChange={(page) => setPage(page)}
      onPageSizeChange={(size) => setSize(size)}
      page={page}
      pageSize={size}
      paginationMode="server"
      rowCount={list ? list.count : 0}
      rows={list ? list.results : []}
      onRowClick={(event) => onRowClick(event.row.name)}
      rowsPerPageOptions={[10, 25, 50, 100]}
      density="compact"

    />
  );
}

export default Table;
