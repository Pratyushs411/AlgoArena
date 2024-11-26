import { div } from "framer-motion/client";
import React from "react";
import Topbar from "@/components/topbar/topbar";
import Workspace from "@/components/Workspace/Workspace";
type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () =>{
    return (
        <div>
            <Topbar problemPage />
            <Workspace/>
        </div>
    );
};
export default ProblemPage