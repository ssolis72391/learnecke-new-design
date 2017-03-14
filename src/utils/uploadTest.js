import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import uploadFile from 'api/uploadFile';

const Input = styled('input')({
  display: 'none',
});

const UploadButtons = function () {
  const [selectedFile, setSelectedFile] = useState();
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <div style={{ gridColumnStart: 1, gridColumnEnd: 2, borderRight: '1px solid #3f51b5' }}>
        <input type='file' name='file' onChange={(evt) => evt && setSelectedFile(evt.target?.files[0])} />
        <div>
          <Button
            style={{ marginTop: '16px' }}
            color='primary'
            variant='contained'
            onClick={() => {
              const data = new FormData();
              data.append('in_file', selectedFile);
              uploadFile(data).then(() => {
                alert('File uploaded successfully!');
              });
            }}
          >
            Upload
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default UploadButtons;
