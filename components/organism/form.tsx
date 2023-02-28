import { FormDataProps, FormErrorProps } from '@/interface';
import { FormValidation } from '@/utils';
import { SendContactForm } from '@/utils/api-request';
import { formDataInitialState } from '@/utils/services';
import React, { ChangeEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] =
    React.useState<FormDataProps>(formDataInitialState);

  //Error State & Message
  const [nameErr, setNameErr] = React.useState<FormErrorProps>({
    state: false,
    msg: '',
  });
  const [emailErr, setEmailErr] = React.useState<FormErrorProps>({
    state: false,
    msg: '',
  });
  const [messageErr, setMessageErr] = React.useState<FormErrorProps>({
    state: false,
    msg: '',
  });

  const handleUpdates = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const formState = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(formState);
  };

  const handleSubmission = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const validateObject = handleValidation();
    const { name, email, message } = validateObject;
    if (!name || !email || !message) return;
    SendContactForm(formData);
    setFormData(formDataInitialState);
  };

  const handleValidation = () => {
    const name: boolean = FormValidation(
      'name',
      formData.name,
      nameErr,
      setNameErr
    );
    const email: boolean = FormValidation(
      'email',
      formData.email,
      emailErr,
      setEmailErr
    );
    const message: boolean = FormValidation(
      'message',
      formData.message,
      messageErr,
      setMessageErr
    );
    return { name, email, message };
  };

  return (
    <form
      onSubmit={handleSubmission}
      className={`mb-10 flex flex-col gap-5 justify-around w-full md:w-[30rem]`}
    >
      <div className={`flex flex-col w-full`}>
        <label className={`font-light text-lg`}>Full Name:</label>
        <input
          name='name'
          value={formData.name}
          onChange={handleUpdates}
          type='text'
          className={`sbp:w-full border border-gray-400  outline-none px-4 py-2 focus:ring-2 focus:ring-blue-400  placeholder600 rounded placeholder:text-sm placeholder:font-light bg-transparent`}
          placeholder={`John Dow`}
        />
        {nameErr.state && (
          <p className={`text-sm text-red-600 font-light`}>{nameErr.msg}</p>
        )}
      </div>

      <div className={`flex flex-col w-full`}>
        <label className={`font-light text-lg`}>Email:</label>
        <input
          name={'email'}
          value={formData.email}
          onChange={handleUpdates}
          type='text'
          className={`border border-gray-400  outline-none px-4 py-2 focus:ring-2 focus:ring-blue-400  placeholder600 rounded placeholder:text-sm placeholder:font-light bg-transparent`}
          placeholder={`example.@company.com`}
          // required
        />
        {emailErr.state && (
          <p className={`text-sm text-red-600 font-light`}>{emailErr.msg}</p>
        )}
      </div>

      <div className={`flex flex-col w-full`}>
        <label className={`font-light flex justify-between text-lg`}>
          <span>Message:</span>
          <span>
            Character: ({formData.message.length}) Word: (
            {formData.message.length > 0
              ? formData.message.split(' ').length - 1
              : '0'}
            )
          </span>
        </label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleUpdates}
          className={`border border-gray-400 w-full h-[20rem]  outline-none px-4 py-2 focus:ring-2 focus:ring-blue-400  placeholder600 rounded placeholder:text-sm placeholder:font-light bg-transparent`}
          placeholder='Message me here...'
        ></textarea>
        {messageErr.state && (
          <p className={`text-sm text-red-600 font-light`}>{messageErr.msg}</p>
        )}
      </div>

      <button
        type={`submit`}
        className={`px-4 btn uppercase font-light  py-3 rounded duration-700`}
      >
        Submit Information
      </button>
    </form>
  );
};

export default ContactForm;
