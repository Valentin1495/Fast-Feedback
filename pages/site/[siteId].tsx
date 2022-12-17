import { useRouter } from "next/router";
import fetcher from "../../utils/fetcher";
import useSWR from "swr";
import Feedback from "../../components/Feedback";

export default function FeedbackPage() {
  const router = useRouter();

  const siteId = router.query.siteId;

  const feedbackApi = `/api/feedback/${siteId}`;

  const { data: feedbackData } = useSWR(feedbackApi, fetcher);

  const allFeedback = feedbackData?.feedback;

  return (
    <div>
      <div>
        <h1>Comment</h1>
        <input type="text" className="bg-gray-200" />
        <button>Add Comment</button>
      </div>
      <div>
        {allFeedback?.map((feedback: Feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
      </div>
    </div>
  );
}
