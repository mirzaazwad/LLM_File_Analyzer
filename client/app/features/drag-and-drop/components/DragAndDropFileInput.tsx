"use client";

import Image from "next/image";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { IDragAndDropFileInput } from "../../../utils/templates/IDragAndDropFileInput";
import FileInformationDisplay from "./FileInformationDisplay";
import ErrorDisplay from "../../../components/reusables/ErrorDisplay";
import IndeterminateProgressBar from "@/app/components/reusables/IndeterminateProgressBar";
import {
  DragAndDrop,
  DragAndDropImage,
  DragAndDropImageCol_1,
  DragAndDropImageCol_2,
  DraggableElement,
  DraggableInputTypeMessage,
  ResponsivePrompt,
  ResponsiveTitle,
} from "@/app/themes/drag-and-drop";

const DragAndDropFileInput = ({
  title,
  prompt,
  typeMessage,
  uploadImageSrc,
}: IDragAndDropFileInput) => {
  const { events, state, error } = useDragAndDrop();

  return (
    <div
      className={DragAndDrop}
      onDragOver={events.handleDragOver}
      onDragLeave={events.handleDragOut}
      onDrop={events.handleDrop}
    >
      <label htmlFor="dropzone-file" className={DraggableElement(state.drag)}>
        <div className="w-full flex">
          <div className={DragAndDropImageCol_1}>
            <Image
              src={uploadImageSrc}
              alt="Upload Logo"
              className={DragAndDropImage}
              width="100"
              height="100"
              priority
            />
          </div>
          <div className={DragAndDropImageCol_2}>
            <div className={ResponsiveTitle}>{title}</div>
            <div className={ResponsivePrompt}>{prompt}</div>
            <div className={DraggableInputTypeMessage}>{typeMessage}</div>
            {state.loading && <IndeterminateProgressBar />}
            <FileInformationDisplay />
            <ErrorDisplay
              isError={error.length>0}
              error={error.join(", ")}
            />
          </div>
        </div>
        <input
          id="dropzone-file"
          type="file"
          accept="*/*"
          className="hidden"
          onChange={events.handleChange}
          multiple
        />
      </label>
    </div>
  );
};

export default DragAndDropFileInput;
