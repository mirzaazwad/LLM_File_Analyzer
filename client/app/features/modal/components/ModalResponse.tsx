import { Modal } from "rsuite";
import { PrimaryButton } from "../../../themes/buttons";
import { IModalResponse } from "../../../utils/templates/IModalResponse";
import {
  JSONResponseStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalStyle,
  ModalTextStyle,
  ModalTitleStyle,
} from "@/app/themes/modal";

const ModalResponse = ({ open, closeModal }: IModalResponse) => {
  return (
    <>
      <Modal
        onClose={closeModal}
        backdrop
        open={open}
        keyboard
        className={ModalStyle}
      >
        <Modal.Header closeButton={false} className={ModalHeaderStyle}>
          <Modal.Title className={ModalTitleStyle}>
            <span className={ModalTextStyle}>Bank OCR Response</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer className={ModalFooterStyle}>
          <button onClick={closeModal} className={`${PrimaryButton} font-bold`}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalResponse;
