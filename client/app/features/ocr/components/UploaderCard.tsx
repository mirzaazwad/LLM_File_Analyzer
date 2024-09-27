"use client";

import { useFileUploader } from "../hooks/useFileUploader";
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

interface IUploaderCard {
  title: string;
}

const UploaderCard = ({ title }: IUploaderCard) => {
  const { files, prompt, submit, reset, modal, error } = useFileUploader();

  return (
    <div className={Card}>
      {error && <Message type="error">{error}</Message>}
      <div className="w-full flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className={image}
          width={"250"}
          height={"250"}
          priority
        />
      </div>
      <ModalResponse open={modal.open} closeModal={modal.closeModal} />
      <div className={CardHeader}>{title}</div>
      <form onSubmit={submit.handleSubmit}>
        <div className="w-full mx-4 my-6">
          <label className="font-bold text-lg mb-4">
            Prompt
          </label>
          <textarea
            value={prompt.prompt}
            onChange={(e) => prompt.setPrompt(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-lg"
            placeholder="Enter Your Prompt to analyze the files..."
          />
        </div>
        <div className={CardBody}>
          <DragAndDropFileInput
            title="Upload File"
            prompt="Drag a File or Click to Upload a file"
            typeMessage="Upload any file containing text that can be detected as raw text"
            uploadImageSrc="/Upload.jpg"
          />
        </div>

        <div className={CardFooter}>
          <button
            className={PrimaryButton}
            type="submit"
            disabled={files.length === 0 || submit.submitLoading}
            onClick={submit.handleSubmit}
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
            disabled={files.length === 0 || reset.resetLoading}
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

export default UploaderCard;
