import { Components } from "@mui/material";

import muiButtonVariantsdark from "./muiButtonVariantsdark";
import muiButtonVariantslight from "./muiButtonVariantslight";

const getComponents = (darkMode: boolean): Components => ({
  MuiButton: {
    variants: darkMode ? muiButtonVariantsdark : muiButtonVariantslight,
    styleOverrides: {
      root: {
        // borderRadius: 16,
        borderRadius: 4,
        boxShadow: "none",
      },
    },
  },
  // MuiSvgIcon: {
  //   styleOverrides: {
  //     root: {
  //       width: 24,
  //       height: 24,
  //     },
  //   },
  // },
  // // https://mui.com/material-ui/guides/migration-v4/#textfield
  // MuiTextField: {
  //   defaultProps: {
  //     variant: "standard",
  //   },
  // },
  // MuiLink: {
  //   defaultProps: {
  //     underline: "hover",
  //   },
  // },
  // MuiFormControl: {
  //   defaultProps: {
  //     variant: "standard",
  //   },
  // },
  // // https://mui.com/material-ui/guides/migration-v4/#paper
  // MuiPaper: {
  //   styleOverrides: {
  //     root: {
  //       backgroundImage: "unset",
  //     },
  //   },
  // },
  // // https://mui.com/material-ui/guides/migration-v4/#select
  // MuiSelect: {
  //   defaultProps: {
  //     variant: "standard",
  //   },
  // },
  // MuiCard: {
  //   styleOverrides: {
  //     root: {
  //       backgroundImage: "#FFFFFF",
  //     },
  //   },
  // },
});

export default getComponents;
