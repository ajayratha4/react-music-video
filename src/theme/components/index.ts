import { Components } from "@mui/material";

import muiButtonVariantsdark from "./muiButtonVariantsdark";
import muiButtonVariantslight from "./muiButtonVariantslight";

const getComponents = (darkMode: boolean): Components => ({
  MuiButton: {
    variants: darkMode ? muiButtonVariantsdark : muiButtonVariantslight,
    styleOverrides: {
      root: {
        borderRadius: 4,
        boxShadow: "none",
      },
    },
  },
});

export default getComponents;
