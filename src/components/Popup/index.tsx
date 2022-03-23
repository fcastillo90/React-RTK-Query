import React from 'react';
import { Avatar, AvatarGroup, Box, Modal, Typography, CircularProgress } from '@mui/material';
import { useGetPokemonByName } from 'hooks';
import { Sprites } from 'types';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};


interface PopupProps {
  pokemon: string;
  isOpen: boolean;
  handleClose: () => void;
}

function Popup(props: PopupProps) {
  const { pokemon, isOpen, handleClose } = props
  const [data, isLoading ] = useGetPokemonByName(pokemon)

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
      {
      isLoading || !pokemon ? 
        <CircularProgress />
      :
        <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data?.name.toUpperCase()}
          </Typography>
          <AvatarGroup>
            {Object.keys(data?.sprites as Sprites).map((sprite) => {
              return typeof (data?.sprites as any)[sprite] === 'string' && (
                <Avatar 
                  key={(data?.sprites as any)[sprite]}
                  alt={data?.name} 
                  src={(data?.sprites as any)[sprite]} 
                  sx={{ width: 56, height: 56 }} 
                />
              )}
            )}
          </AvatarGroup>
        </>
      }
      </Box>
    </Modal>
  );
}

export default Popup;
