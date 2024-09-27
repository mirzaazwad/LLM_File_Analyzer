import { image } from "./general";

export const DragAndDrop = "flex items-center justify-center w-full";

export const DragAndDropImage = `rounded-full ${image}`;

export const DragAndDropImageCol_1 =
  "flex w-1/3 items-center justify-center m-2";

export const DragAndDropImageCol_2 = "w-2/3 flex flex-col";

export const DraggableElement = (drag: boolean) => {
  return `flex flex-col justify-center w-full h-50 rounded-lg cursor-pointer hover:bg-white-400 text-gray-700 hover:text-pink bg-white px-4 py-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-105 scale-100 ${
    drag ? "scale-105 drop-shadow-xl" : ""
  }`;
};

export const ResponsiveTitle =
  "flex justify-start m-4 font-bold lg:text-xl md:text-lg text-md font-bold";

export const ResponsivePrompt =
  "flex justify-start m-4 font-medium lg:text-lg md:text-md text-sm font-bold";

export const DraggableInputTypeMessage =
  "flex justify-start m-4 text-sm";
