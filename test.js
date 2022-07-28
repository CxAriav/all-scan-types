import ReactDOM from "react-dom";
import ExhibitionsGrid from "./ExhibitionsGrid";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ExhibitionsGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
}
