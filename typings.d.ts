interface Site {
  id: number;
  authorId: number;
  created_at: string;
  username: string;
  photoUrl: string;
  site: string;
  link: string;
}

type SetOpenToast = React.Dispatch<React.SetStateAction<boolean>>;
