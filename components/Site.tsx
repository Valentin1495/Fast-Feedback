import { format } from "date-fns";
import Link from "next/link";

export default function Site({ site }: { site: Site }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-3">
      <span className="item">{site.name}</span>
      <span className="item">{site.link}</span>
      <Link href={`/site/${site.id}`} className="item hidden md:inline-block">
        View Feedback
      </Link>

      <span className="item hidden md:inline">
        {format(new Date(site.created_at), "PPpp")}
      </span>
    </div>
  );
}
