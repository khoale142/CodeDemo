import React from "react";
import { createRoot } from "react-dom/client";
import { TitleDemo } from "./src-quan/TitleDemo";
import { TimerDemo } from "./src-quan/TimerDemo";
import { ResizeDemo } from "./src-quan/ResizeDemo";

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(
  <React.StrictMode>
    {/* <TimerDemo /> */}
    {/* <TitleDemo /> */}
    <ResizeDemo /> 
  </React.StrictMode>
);
