import "@bytescale/upload-widget-jquery";
import { UploadWidgetResult } from "@bytescale/upload-widget";

($("button") as any).bytescaleUploadWidget({
  apiKey: "free",
  onComplete: (files: UploadWidgetResult[]) => {
    if (files.length === 0) {
      console.log("No files selected.");
    } else {
      console.log("Files uploaded:");
      console.log(files.map(f => f.fileUrl));
    }
  }
});

($("#dropzone") as any).bytescaleUploadWidget({
  apiKey: "free",
  dropzone: {
    width: "600px",
    height: "375px"
  },
  onUpdate: (files: UploadWidgetResult[]) => {
    if (files.length === 0) {
      console.log("No files selected in dropzone.");
    } else {
      console.log("Files uploaded in dropzone:");
      console.log(files.map(f => f.fileUrl));
    }
  }
});
