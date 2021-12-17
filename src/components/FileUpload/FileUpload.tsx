import { useDropzone } from 'react-dropzone';

import { IoCloudUploadOutline } from 'react-icons/io5';

import { Styles, InputStyles, FullStyles } from './FileUpload.styles';

export type FileUploadProps = {
  accept?: string;
  full?: boolean;
  maxFiles?: number;
  onDrop?: any;
  validator?: any;
};

export const FileUpload = ({
  accept,
  full,
  maxFiles,
  onDrop,
  validator,
  ...props
}: FileUploadProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: accept,
    maxFiles: maxFiles,
    onDrop: onDrop,
    validator: validator,
  });

  return (
    <div css={[Styles, full && FullStyles]} {...getRootProps()} {...props}>
      <input css={InputStyles} {...getInputProps()} />
      <IoCloudUploadOutline />
      {isDragActive ? 'Upload' : 'Drag and drop to upload'}
    </div>
  );
};

FileUpload.defaultProps = {
  accept: '*',
  maxFiles: 1,
  onDrop: undefined,
  validator: undefined,
};
