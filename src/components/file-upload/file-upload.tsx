import { Input, Paper, Button } from '@mui/material';

import { FileUploadProps } from '../../types/file-upload';
import classes from '../styles.module.css';

const FileUpload = (props: FileUploadProps) => {
  const { onChange, type, showUploadButton } = props;

  return (
    <Paper className={classes.container}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        type={type}
        color="primary"
      />
      {showUploadButton && (
        <Button variant="outlined" color="primary">
          Upload
        </Button>
      )}
    </Paper>
  );
};

export default FileUpload;
