import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { Typography, DialogActions, Button } from '@mui/material';

import uploadFile from 'api/uploadFile';

import useStyles from './NewCourseModalStyles';

const NewCourseModal = function (props) {
  const classes = useStyles();
  const { show, handleShowModal } = props;
  const [showMe, setShowMe] = useState(show);
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    setShowMe(props.show);
  }, [props.show]);

  return (
    <Dialog open={showMe} onClose={() => setShowMe(false)} onBackdropClick={() => setShowMe(false)} maxWidth='lg'>
      <DialogTitle>
        <Typography variant='h3'>How would like to create your new Course?</Typography>
      </DialogTitle>
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '20px 24px',
        }}
      >
        <div style={{ gridColumnStart: 1, gridColumnEnd: 2, borderRight: '1px solid #3f51b5' }}>
          <input type='file' name='file' onChange={(evt) => evt && setSelectedFile(evt.target?.files[0])} />
          <div>
            <Button
              disabled={!selectedFile}
              style={{ marginTop: '16px' }}
              // color='primary'
              variant='contained'
              className={classes.uploadButton}
              onClick={() => {
                const data = new FormData();
                data.append('in_file', selectedFile);
                uploadFile(data).then((response) => {
                  response.Result && alert('File uploaded successfully!');
                  response.Reject && alert('File Upload Problem Please file a bug report!');
                  handleShowModal('Upload', response.Result);
                });
                // .error(console.error)
              }}
            >
              Upload
            </Button>
          </div>
        </div>
        <Button id='Scratch' onClick={() => handleShowModal('Scratch')} variant='contained'>
          From Scratch
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewCourseModal;
