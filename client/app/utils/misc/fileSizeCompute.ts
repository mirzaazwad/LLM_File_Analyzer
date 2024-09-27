export function fileSizeCompute(size: number) {
  let translatedSize: number = 0;
  let metric: string = "B";
  if (size > 1000 * 1000) {
    translatedSize = size / (1000 * 1000);
    if (translatedSize && translatedSize > 100) {
      throw Error("File Size Greater Than 100 MB is not accepted");
    }
    metric = "MB";
  } else if (size > 1000) {
    translatedSize = size / 1000;
    metric = "KB";
  }
  return {
    size: translatedSize,
    metric,
  };
}
