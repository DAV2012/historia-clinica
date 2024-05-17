import React from "react";

import MyPDFReport from "../componentes/PDF";
import { Box } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";

const PDFViewerComponent = () => {
  return (
      <Box width={"100vw"} height={"100vh"}>
          <PDFViewer width="100%" height={600}>
              <MyPDFReport />
          </PDFViewer>
      </Box>
  );
};

export default PDFViewerComponent;