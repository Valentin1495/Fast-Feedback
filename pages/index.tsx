import Example from "../components/Example";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Introduction />
      <Example />
    </div>
  );
}
