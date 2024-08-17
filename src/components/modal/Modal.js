import React, { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    };
  });

  const handleEsc = e => e.code === 'Escape' && onClose();

  const handleClick = e => e.target === e.currentTarget && onClose();

  return (
    <>
      <div className={s.overlay} onClick={handleClick}>
        <div className={s.modal}>{children}</div>
      </div>
    </>
  );
};

export default Modal;

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//     window.scrollTo({ top: 0 });
//   }

//   handleKeyDown = (e) => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleCLick = () => {
//     this.props.onClose();
//   };

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   render() {
//     return (
//       <>
//         <div onClick={this.handleCLick} className={s.overlay}></div>
//         <div className={s.modal}>{this.props.children}</div>
//       </>
//     );
//   }
// }
