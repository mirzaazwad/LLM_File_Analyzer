import { RouteTemplate } from "../utils/misc/RouteTemplate";

export const API_Routes = {
  ocr: new RouteTemplate("ocr").register({
    root: "/",
  }),
};
