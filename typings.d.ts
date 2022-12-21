interface Site {
  id: number;
  authorId: string;
  created_at: string;
  name: string;
  link: string;
}

interface siteInfo {
  authorId: string;
  name: string;
  link: string;
}

interface Feedback {
  id: number;
  created_at: string;
  author: string;
  text: string;
}

type SetOpenToast = React.Dispatch<React.SetStateAction<boolean>>;
