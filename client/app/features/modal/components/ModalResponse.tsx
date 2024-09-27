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
import { useAppSelector } from "@/app/context/store/redux-store";

const ModalResponse = ({ open, closeModal }: IModalResponse) => {

  const responses=useAppSelector((state)=>state.file.responses);

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
            <span className={ModalTextStyle}>LLM Analyzed Response</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {responses.map((response,index)=>{
            return (
              <div key={index}>
                {response}
              </div>
            )
          })}
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
