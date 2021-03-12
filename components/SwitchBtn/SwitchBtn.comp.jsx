import { useState } from "react";
import { Button, Position } from "./SwitchBtn.style";
export default function SwitchBtn({ isOn, handleClick }) {
  return (
    <Button onClick={handleClick}>
      <Position isOn={isOn} />
    </Button>
  );
}

SwitchBtn.defaultProps = { isOn: false, onClick: () => {} };
