import { format } from "date-fns";

export default function Feedback({ created_at, author, text }: Feedback) {
  return (
    <div>
      <h2>{author}</h2>
      <span>{format(new Date(created_at), "PPpp")}</span>
      <p>{text}</p>
    </div>
  );
}
