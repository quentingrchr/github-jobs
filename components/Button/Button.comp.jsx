import { Btn } from "./Button.style";

export default function Button({ text, ...rest }) {
  return <Btn {...rest}>{text}</Btn>;
}
