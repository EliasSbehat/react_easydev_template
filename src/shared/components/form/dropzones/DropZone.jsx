import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import {
  DropzoneCustomHeightWrap,
  DropzoneHere,
  DropzoneImage,
  DropzoneImageDelete,
  DropzoneImageName,
  DropzoneInput,
  DropzoneSingleWrap,
} from './DropzoneElements';

const DropZoneField = ({
  value, customHeight, name, onChange,
}) => {
  const files = value;
  const onDrop = (file) => {
    onChange(file.map(fl => Object.assign(fl, {
      preview: URL.createObjectURL(fl),
    })));
  };
  const removeFile = (index, e) => {
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };
  
  const DropzoneWrap = customHeight ? DropzoneCustomHeightWrap : DropzoneSingleWrap;

  return (
    <DropzoneWrap>
      <Dropzone
        accept="image/jpeg, image/png"
        name={name}
        multiple={false}
        onDrop={(fileToUpload) => {
          onDrop(fileToUpload);
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
      {files && Array.isArray(files) && files.length > 0
      && (
        <DropzoneImage>
          <img src={files[0].preview} alt="drop-img" />
          <DropzoneImageName>{files[0].name}</DropzoneImageName>
          <DropzoneImageDelete type="button" onClick={e => removeFile(0, e)}>
            Remove
          </DropzoneImageDelete>
        </DropzoneImage>
      )}
    </DropzoneWrap>
  );
};

DropZoneField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  customHeight: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
  ]).isRequired,
};

DropZoneField.defaultProps = {
  customHeight: false,
};

export default renderComponentField(DropZoneField);
