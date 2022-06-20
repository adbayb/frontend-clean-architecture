import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./Root";
import "../../modules/listing/presentation";

const root = createRoot(document.getElementById("root")!);

root.render(createElement(Root));
