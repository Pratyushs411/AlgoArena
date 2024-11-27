import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import React from "react";
import Playground from "./Playground/Playground";
import {Problem} from "@/utils/types/problem"
type WorkspaceProps = {
  problem:Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem = {problem}/>
      <div className="bg-white">
      <Playground/>
      </div>
    </Split>
  );
};

export default Workspace;
