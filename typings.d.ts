interface Site {
  id: number;
  authorId: number;
  created_at: string;
  site: string;
  link: string;
}

interface Feedback {
  id: number;
  created_at: string;
  author: string;
  text: string;
}

type SetOpenToast = React.Dispatch<React.SetStateAction<boolean>>;
