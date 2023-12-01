import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LineMdconfirmCircleTwotoneIcon from "./LineMdconfirmCircleTwotoneIcon";

const PopupPasswordChangedChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 341px;
  height: 196px;
`;
const WorkoutUpdated = styled.div`
  position: absolute;
  top: 57px;
  left: 78px;
`;
const PopupPasswordChangedRoot = styled.div`
  width: 341px;
  height: 196px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--black);
  font-family: var(--community);
`;

const PopupPasswordChanged = () => {
  const navigate = useNavigate();

  const onLineMdconfirmCircleTwotoneClick = useCallback(() => {
    navigate("/settings-screen-account");
  }, [navigate]);

  return (
    <PopupPasswordChangedRoot>
      <PopupPasswordChangedChild />
      <WorkoutUpdated>Password Changed</WorkoutUpdated>
      <LineMdconfirmCircleTwotoneIcon
        propTop="115px"
        propLeft="137px"
        propCursor="pointer"
        onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
      />
    </PopupPasswordChangedRoot>
  );
};

export default PopupPasswordChanged;
