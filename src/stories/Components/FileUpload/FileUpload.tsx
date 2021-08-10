// FileUpload.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { IoCloudUploadOutline } from 'react-icons/io5';

import { Styles, InputStyles, FullStyles } from './FileUpload.styles';

const Types = {
  accept: PropTypes.string,
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
  maxFiles: PropTypes.number,
  onDrop: PropTypes.func,
  validator: PropTypes.func,
};

type Props = InferProps<typeof Types>;

export const FileUpload = ({
  accept,
  children,
  full,
  maxFiles,
  onDrop,
  validator,
  ...props
}: Props) => {
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
  onDrop: () => {},
  validator: () => {},
};

FileUpload.propTypes = Types;

export default FileUpload;
