import PropTypes, { oneOf } from "prop-types";
import { styled } from "@mui/system";
import { Typography as MuiTypography } from "@mui/material";

const Text = styled(MuiTypography, {
  shouldForwardProp: () => true,
})(() => ({}));

Text.propTypes = {
  variant: oneOf(["t1", "t2", "t3", "t4", "t5", "t6", "t7", "bodyCopy"]),
  as: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  variant: "bodyCopy",
  children: null,
  as: "div",
};

export default Text;
