import {ModalProps}  from '../../interface';
import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';


const Modal: React.FC<ModalProps> = (props) => {

  const CommentModal = (
    <section className='py-12 text-slate-900 bg-slate-900 transition duration-150 bg-opacity-[0.5] overflow-hidden ease-in-out fixed top-1/2 -translate-x-1/2 w-[100%] h-[100%] -translate-y-1/2 left-1/2'>
      <div className='container mx-auto w-11/12 md:w-2/3 max-w-xl'>
        <div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 flex flex-col gap-5'>
          <p className={`flex justify-between items-center`}>
            <h1 className='w-full tracking-normal leading-tight inline-flex items-center gap-3'>
              ✍🏾{props.modalHeader}
            </h1>

            <button
              title={`Close`}
              type={`button`}
              onClick={props.close}
              className={`text-[2rem] rounded-md p-2 active:bg-slate-900 cursor-pointer inline-flex justify-center items-center`}
            >
              <FaTimes />
            </button>
          </p>
          <div>{props.modalContent}</div>
        </div>
      </div>
    </section>
  );

  return props.isShown
    ? ReactDOM.createPortal(CommentModal, document.body)
    : null;
};

export default Modal;
