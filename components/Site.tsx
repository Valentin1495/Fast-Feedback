import { format } from "date-fns";

export default function Site({ site }: { site: Site }) {
  return (
    <div className="grid grid-cols-4 text-center gap-3">
      <span className="item">{site.site}</span>
      <span className="item">{site.link}</span>
      <span className="item">View Feedback</span>
      <span className="item">{format(new Date(site.created_at), "PPpp")}</span>
    </div>
  );
}
