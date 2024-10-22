import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import { FC } from "../../types/types";

export type TextFieldProps = MuiTextFieldProps;

export const TextField: FC<MuiTextFieldProps> = ({ sx = {}, ...props }) => {
  return <MuiTextField size="small" sx={{ width: "100%", ...sx }} {...props} />;
};
