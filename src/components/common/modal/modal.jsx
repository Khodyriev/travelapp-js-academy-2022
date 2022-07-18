import './styles.css';
import { useCallback, useEffect } from '../../../hooks/hooks';
import { KeydownKey } from  '../../../common/enums/enum';

const Modal = ({ children, onClose }) => {
    const handleEscapeDown = useCallback(({ key }) => {
      if (key === KeydownKey.ESCAPE) {
        onClose();
      }
    }, [onClose]);
  
    useEffect(() => {
      document.documentElement.style.overflowY = 'hidden';
      document.addEventListener('keydown', handleEscapeDown);
  
      return () => {
        document.documentElement.style.overflowY = '';
        document.removeEventListener('keydown', handleEscapeDown);
      };
    }, [handleEscapeDown]);
  
    return (
      <>
        {(
          <div className="modal" >
            {children}
          </div>
        )}
      </>
    );
  };

export default Modal;