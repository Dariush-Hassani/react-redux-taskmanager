import { Button, DialogTitle, Fab, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

let orange = { color: "#ed9720", hoverColor: "#f58e00" };
let green = { color: "#71dd1b", hoverColor: "#52a114" };
let blue = { color: "#4a86e8", hoverColor: "#07398b" };
let red = { color: "red", hoverColor: "#f74d4d" };
let black = "#f0f0f0";
let gray = "gray";

export const OrangeButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: orange.color,
  "&:hover": {
    backgroundColor: orange.hoverColor,
  },
}));

export const GreenButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: green.color,
  "&:hover": {
    backgroundColor: green.hoverColor,
  },
}));

export const BlueButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: blue.color,
  "&:hover": {
    backgroundColor: blue.hoverColor,
  },
}));

export const RedButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: red.color,
  "&:hover": {
    backgroundColor: red.hoverColor,
  },
}));

export const CircleFixedButton = styled(Fab)(() => ({
  color: "white",
  backgroundColor: orange.color,
  "&:hover": {
    backgroundColor: orange.hoverColor,
  },
  position: "fixed",
  bottom: "50px",
  right: "50px",
}));

export const CenterFlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const TaskListBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
  border: "1px solid",
  borderColor: black,
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
}));

export const CenterTypography = styled(Typography)(() => ({
  textAlign: "center",
}));

export const DescriptionTypography = styled(Typography)(() => ({
  fontsize: 13,
  color: gray,
}));

export const CircleBox = styled(Typography)(() => ({
  display: "inline-block",
  width: "16px",
  height: "16px",
  borderRadius: "8px",
  marginLeft: "5px",
  position: "relative",
  top: "4px",
}));

export const FlexEndBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const DoneTaskIcon = styled(DoneOutlinedIcon)(() => ({
  backgroundColor: green.color,
  borderRadius: "15px",
  width: "30px",
  height: "30px",
  color: "white",
}));

export const CustomDialogTitle = styled(DialogTitle)(() => ({
  "@media (max-width: 520px)": {
    width: "260px",
  },
  "@media (min-width:520px) and (max-width: 670px)": {
    width: "400px",
  },
  "@media (min-width: 670px)": {
    width: "550px",
  },
}));
