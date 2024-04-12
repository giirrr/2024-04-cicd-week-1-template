import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/Button";

const Home = () => {
  const navigate = useNavigate();

  const throwError = () => {
    throw new Error("Intentional Error!");
  };

  return (
    <StBody>
      <div className="innerBody">
        <Button text="성공해땅😖😖" onClick={() => navigate(`/success`)} />
        <Button text="응애 실패.." onClick={() => throwError()} />
      </div>
    </StBody>
  );
};

export const StBody = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .innerBody {
    display: grid;
    gap: 20px;
  }
`;

export default Home;
