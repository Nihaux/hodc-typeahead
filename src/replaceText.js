import { Modifier, EditorState } from 'draft-js';

const replaceText = (replaceWith, editorState, textToReplace, entityKey = null) => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const entitySelection = selection.set(
    'anchorOffset', selection.getFocusOffset() - textToReplace.length,
  );
  const contentStateWithEmoji = Modifier.replaceText(
    contentState,
    entitySelection,
    replaceWith,
    null,
    entityKey,
  );
  const finalContentState = Modifier.insertText(
    contentStateWithEmoji,
    contentStateWithEmoji.getSelectionAfter(),
    ' ',
  );
  return EditorState.push(
    editorState, finalContentState, 'insert-characters',
  );
};

export default replaceText;
