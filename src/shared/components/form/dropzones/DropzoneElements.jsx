import styled from 'styled-components';
import { colorAdditional, colorBorder, colorFieldsBorder } from '@/utils/palette';
import { right } from '@/utils/directions';

export const DropzoneInput = styled.div`
  width: 100%;
  height: 100%;
  min-height: 298px;
  display: flex;
  position: absolute !important;
  cursor: pointer;
`;

export const DropzoneHere = styled.div`
  margin: auto;
  color: ${colorAdditional};
`;

export const DropzoneImagesWrapper = styled.div`
  padding: 30px 20px;
  width: calc(100% + 30px);
  display: flex;
  flex-wrap: wrap;
`;

export const DropzoneImageName = styled.p`
  color: white;
  position: absolute;
  font-size: 12px;
  text-align: center;
  opacity: 0;
  transition: all 0.3s;
  z-index: 10;
  width: 100%;
  line-height: 12px;
  margin: 0;
  top: calc(50% - 6px);
`;

export const DropzoneImageDelete = styled.button`
  transition: all 0.3s;
  position: absolute;
  top: 10px;
  ${right}: 15px;
  z-index: 10;
  cursor: pointer;
  background: transparent;
  opacity: 0;
  color: white;
  font-size: 9px;
  border: 1px solid white;
  text-transform: uppercase;
  padding: 2px 7px;
  line-height: 10px;
`;

export const DropzoneImage = styled.div`
  margin-bottom: 30px;
  width: calc(16.6667% - 30px);
  height: 150px;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  outline: 1px solid ${colorBorder};

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    cursor: default;
    left: 0;
    top: 0;
    bottom: 0;
    ${right}: 0;
  }

  &:hover {

    &:before {
      background-color: rgba(25, 25, 25, 0.6);
    }

    ${DropzoneImageDelete} {
      opacity: 1;
    }

    ${DropzoneImageName} {
      opacity: 0.7;
    }
  }
`;

const DropzoneWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;
  border: 1px solid ${colorFieldsBorder};
`;

export const DropzoneSingleWrap = styled(DropzoneWrap)`
  height: 300px;

  ${DropzoneImage} {
    margin: 0;
    height: 100%;
    width: 100%;
    text-align: center;

    img {
      padding: 20px;
      height: 100%;
      width: auto;
    }
  }

  .dropzone__input:hover {
    background-image: linear-gradient(-45deg, ${colorBorder} 25%, transparent 25%,
    transparent 50%, ${colorBorder} 50%, ${colorBorder} 75%, transparent 75%, transparent);
    background-size: 30px 30px;
    animation: striped 2s linear infinite;

    @keyframes striped {
      from {
        background-position: 0 0
      }

      to {
        background-position: 60px 30px
      }
    }
  }
`;

export const DropzoneCustomHeightWrap = styled(DropzoneSingleWrap)`
  min-height: 300px;
  height: auto;

  ${DropzoneImage} {
    max-width: 100%;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const DropzoneMultipleWrap = styled(DropzoneWrap)`
  min-height: 400px;

  ${DropzoneInput} {
    min-height: 400px;
  }
`;



