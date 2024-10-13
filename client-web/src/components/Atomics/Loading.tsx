import { LoadingContext } from "utils/LoadingContext";
import { useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading: React.FC = () => {
  const context = useContext(LoadingContext);
  return (
    <>
      {context.isShow && (
        <Wrapper data-is-show={String(true)}>
          <CenterBlock>
            <CircularProgress className="circle" size={55} />
          </CenterBlock>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.4);
  pointer-events: auto;
  transition: opacity 0.2s ease-in-out;

  &[data-is-show="false"] {
    opacity: 0;
    pointer-events: none;
  }
`;

const CenterBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
