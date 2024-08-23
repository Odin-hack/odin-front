import Modal from 'react-modal'
import * as components from '../'
import styles from './CenteredModal.module.sass'

export const CenteredModal = ({
  title,
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.content}
      closeTimeoutMS={300}
    >
      <div className={styles.title}>
        <span className="_w4001722">{title}</span>
        <div style={{ position: 'absolute', top: '16px', right: '16px', cursor: 'pointer' }} onClick={onRequestClose}>
          <components.svg.Close width={28} height={28}/>
        </div>
      </div>
      {children}
    </Modal>
  )
}
