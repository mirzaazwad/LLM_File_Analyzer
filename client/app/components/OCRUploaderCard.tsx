"use client";

import { useOCR } from "../hooks/useOCR";
import DragAndDropFileInput from "../../drag-and-drop/components/DragAndDropFileInput";
import { Message } from "rsuite";
import LoadableText from "../../../components/reusables/LoadableText";
import {
  PrimaryButton,
  PrimaryLoader,
  SecondaryButton,
  SecondaryLoader,
} from "../../../themes/buttons";
import ModalResponse from "../../modal/components/ModalResponse";
import Image from "next/image";
import { image } from "@/app/themes/general";
import { Card, CardBody, CardFooter, CardHeader } from "@/app/themes/card";

interface IOCRUploaderCard {
  title: string;
}

const OCRUploaderCard = ({ title }: IOCRUploaderCard) => {
  const { file, submit, reset, modal, error } = useOCR();

  return (
    <div className={Card}>
      {error && <Message type="error">{error}</Message>}
      <div className="w-full flex justify-center items-center">
        <Image
          src="/favicon.svg"
          alt="Bkash Logo"
          className={image}
          width={"250"}
          height={"250"}
          priority
        />
      </div>
      <ModalResponse open={modal.open} closeModal={modal.closeModal} />
      <div className={CardHeader}>{title}</div>
      <form onSubmit={submit.handleSubmit}>
        <div className={CardBody}>
          <DragAndDropFileInput
            title="Upload Bank Cheque"
            prompt="Drag an Image here or Click to Upload a file"
            typeMessage="Upload Image png, jpg or jpeg"
            uploadImageSrc="/Upload.svg"
          />
        </div>

        <div className={CardFooter}>
          <button
            className={PrimaryButton}
            type="submit"
            disabled={!file || submit.submitLoading}
          >
            <LoadableText
              className={PrimaryLoader}
              loading={submit.submitLoading}
            >
              Upload
            </LoadableText>
          </button>
          <button
            className={SecondaryButton}
            onClick={(e) => reset.handleReset(e)}
            disabled={!file || reset.resetLoading}
          >
            <LoadableText
              className={SecondaryLoader}
              loading={reset.resetLoading}
            >
              {" "}
              Reset
            </LoadableText>
          </button>
        </div>
      </form>
    </div>
  );
};

export default OCRUploaderCard;
