import React, { memo, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colorAdditional,
  colorBackground,
  colorBorder,
  colorFieldsBorder,
  colorHover,
  colorText,
  imgInvert,
} from '@/utils/palette';
import { left, right, direction } from '@/utils/directions';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ToolbarOptions = {
  options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'emoji', 'image', 'history'],
  inline: {
    options: ['bold', 'italic', 'underline'],
  },
};

const TextEditorTwo = memo(({ onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (items) => {
    setEditorState(items);
    if (onChange) { onChange(draftToHtml(convertToRaw(items.getCurrentContent()))); }
  };

  return (
    <TextEditorWrap>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={ToolbarOptions}
      />
    </TextEditorWrap>
  );
});

TextEditorTwo.propTypes = {
  onChange: PropTypes.func,
};

TextEditorTwo.defaultProps = {
  onChange: () => {},
};

export default TextEditorTwo;

// region STYLES

const TextEditorWrap = styled.div`
  position: relative;
  direction: ${direction};

  .rdw-editor-toolbar {
    margin: 0;
    background: transparent;
    border-radius: 0;
    border: solid 1px ${colorFieldsBorder};
  }

  .rdw-emoji-modal, .rdw-link-modal, .rdw-image-modal {
    position: initial;
    left: -175px;
    background: ${colorBackground};
    color: ${colorText};

    @media screen and (max-width: 361px) {
      left: 5px;
    }

    @media screen and (max-width: 460px) {
      left: 0;
    }

    @media screen and (max-width: 662px) {
      left: -140px;
    }

    @media screen and (min-width: 663px) and (max-width: 727px) {
      left: -30px;
    }

    @media screen and (min-width: 850px) and (max-width: 942px) {
      left: 10px;
    }

    @media screen and (min-width: 943px) and (max-width: 1025px) {
      left: -175px;
    }

    @media screen and (min-width: 1026px) and (max-width: 1187px) {
      left: 10px;
    }
  }

  .rdw-image-modal-url-input {
    text-align: ${left};
  }

  .rdw-link-modal-input {
    width: auto;
    text-align: ${left};
  }

  .rdw-link-modal-input:last-of-type {
    margin-bottom: 10px;
  }

  .rdw-link-modal-target-option {
    margin-bottom: 0;
  }

  #openLinkInNewWindow {
    width: auto;
    height: auto;
  }

  .rdw-emoji-icon {
    background: white;
  }

  .rdw-editor-toolbar {
    padding: 0;

    & > div {
      height: 40px;
      border: none;
      background: transparent;
      cursor: pointer;
      margin: 0;

      img {
        fill: ${colorText};
      }
    }

    .rdw-option-active {
      box-shadow: none;
      background-color: ${colorBorder};
    }
  }

  .DraftEditor-root {
    width: 100%;
    min-height: 180px;
    border-top: none;
    border: solid 1px ${colorFieldsBorder};
  }

  .public-DraftEditor-content {
    padding: 6px 10px;
    color: ${colorText};
  }

  .draftJsMentionPlugin__input__1Wxng {
    width: 100%;
    padding: 10px;
  }

  .public-DraftEditorPlaceholder-root {
    position: absolute;
    color: ${colorAdditional};
  }

  .rdw-option-wrapper, .rdw-dropdown-wrapper {
    border: none;
    border-radius: 0;
    transition: background 0.3s;
    background: transparent;

    &:hover {
      box-shadow: none;
      background: ${colorHover};
    }

    img {
      filter: ${imgInvert};
    }
  }

  .rdw-option-wrapper {
    min-width: 10px!important;
    width: auto!important;
  }

  .rdw-dropdown-wrapper {
    color: ${colorText};

    .rdw-dropdown-carettoclose {
      ${right}: 0;
      ${left}: auto;
      border-bottom-color: ${colorText};
    }

    .rdw-dropdown-carettoopen {
      ${right}: 0;
      ${left}: auto;
      border-top-color: ${colorText};
    }
  }

  .rdw-dropdown-optionwrapper {
    overflow: auto;
    background-color: ${colorBackground};
    border-color: ${colorBorder};

    &:hover {
      box-shadow: none;
    }
  }

  .rdw-dropdownoption-default {
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colorHover};
    }

    &.rdw-dropdownoption-active {
      background-color: ${colorHover};
    }
  }

  button {

    &:hover {
      box-shadow: none;
      background-color: ${colorHover};
    }

    &[disabled] {
      pointer-events: none;
    }
  }


  .rdw-image-modal-size-input {
    min-width: 0;
  }

  .public-DraftStyleDefault-ltr {
    direction: ${direction};
    text-align: ${left};
  }

  .public-DraftStyleDefault-orderedListItem {
    &::marker {
      content: '';
    }
  }
`;

// endregion
