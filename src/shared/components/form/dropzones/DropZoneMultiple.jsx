import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import {
  DropzoneHere,
  DropzoneImage,
  DropzoneImageDelete,
  DropzoneImageName,
  DropzoneImagesWrapper,
  DropzoneInput,
  DropzoneMultipleWrap,
} from './DropzoneElements';

const DropZoneMultipleField = ({ name, value, onChange }) => {
  const files = value;
  const onDrop = (onDropFiles) => {
    onChange(onDropFiles.map(fl => Object.assign(fl, {
      preview: URL.createObjectURL(fl),
    })));
  };
  const removeFile = (index, e) => {
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };

  return (
    <DropzoneMultipleWrap>
      <Dropzone
        className="dropzone__input"
        accept="image/jpeg, image/png"
        name={name}
        onDrop={(filesToUpload) => {
          onDrop(value ? value.concat(filesToUpload) : filesToUpload);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <DropzoneInput {...getRootProps()}>
            {(!files || files.length === 0)
            && (
              <DropzoneHere>
                <span className="lnr lnr-upload" /> Drop file here to upload
              </DropzoneHere>
            )}
            <input {...getInputProps()} />
          </DropzoneInput>
        )}
      </Dropzone>
      {files && Array.isArray(files) && (
        <DropzoneImagesWrapper>
          {files.map((file, i) => (
            <DropzoneImage key={file.name} style={{ backgroundImage: `url(${file.preview})` }}>
              <DropzoneImageName>{file.name}</DropzoneImageName>
              <DropzoneImageDelete type="button" onClick={e => removeFile(i, e)}>
                Remove
              </DropzoneImageDelete>
            </DropzoneImage>
          ))}
        </DropzoneImagesWrapper>
      )}
    </DropzoneMultipleWrap>
  );
};

DropZoneMultipleField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      files: PropTypes.string,
    })),
  ]).isRequired,
};

export default renderComponentField(DropZoneMultipleField);
