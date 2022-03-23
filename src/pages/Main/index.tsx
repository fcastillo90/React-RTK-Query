import React, { useState } from 'react';
import { Popup, Table } from 'components';

function Main() {
  const [detailPokemon, setDetailPokemon] = useState("")

  const handleClosePopup = () => {
    setDetailPokemon("")
  }

  const handleRowClick = (name: string) => {
    setDetailPokemon(name)
  }
  
  return (
    <div style={{height: '100vh'}}>
      <Table
        onRowClick={handleRowClick}
      />
      <Popup
        pokemon={detailPokemon}
        isOpen={!!detailPokemon}
        handleClose={handleClosePopup}
      />
    </div>
  );
}

export default Main;
