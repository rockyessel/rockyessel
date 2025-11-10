import { Fragment } from 'react';
import { useSlate } from 'slate-react';
import { Redo2, Undo2 } from 'lucide-react';

const UndoRedoOpTool = () => {
  const editor = useSlate();

  return (
    <Fragment>
      <button
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.undo()}
        className='outline-none border-none'
      >
        <Undo2
          size={32}
          strokeWidth={2.25}
          className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
        />
      </button>

      <button
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => editor.redo()}
        className='outline-none border-none'
      >
        <Redo2
          size={32}
          strokeWidth={2.25}
          className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
        />
      </button>
    </Fragment>
  );
};

export default UndoRedoOpTool;
