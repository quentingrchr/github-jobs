import { Btn, A } from "./Button.style";
import Link from "next/link";

export default function Button({ href, text, ...rest }) {
  return (
    <>
      {href !== undefined ? (
        <Link href={href}>
          <A {...rest}>{text}</A>
        </Link>
      ) : (
        <Btn {...rest}>{text}</Btn>
      )}
    </>
  );
}
