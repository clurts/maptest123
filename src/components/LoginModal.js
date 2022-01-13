/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const LoginModal = () => {
    const { register, handleSubmit, errors } = useForm();
    const [isOpen, setIsOpen] = useState(true);

    const onSubmit = data => {
      console.log(data)
      closeModal()
      }
    console.log(errors);

    const styleHeadline = css`
      margin-top:0;
      width:10em;
    `

    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)'
        },
        content : {
          top                   : '45%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          padding               : '1em 1.5em 1.7em'
        }
      };

    const openModal = () => setIsOpen(true);

    const afterOpenModal = () => {
      // references are now sync'd and can be accessed.
    }
    const closeModal = () =>setIsOpen(false);

    const usernameConfig = {
      required: {value:true, message: "Du skal udfylde dit brugernavn" }, 
    }
    const passwordConfig = {
      required: {value:true, message: "Du skal udfylde din password" },
    }

    return ( 
        <>
            <button onClick={openModal}>Open Modal</button>
        <Modal

          isOpen={isOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 css={styleHeadline}>Hello</h2>
          <div>I am a modal</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input type="text" placeholder="username" name="username" ref={register(usernameConfig)} />
            </div>
            <div>
            <input type="password" placeholder="password" name="password" ref={register(passwordConfig)} />
            </div>
            <input type="submit" value="log ind"/> <button onClick={closeModal}>close</button>
          </form>
        </Modal>

        </>
     );


}
 
export default LoginModal;