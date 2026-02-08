import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@printfmehdi",
    icon: Icons.gitHub,
    link: "https://github.com/printfmehdi",
  },
  {
    name: "LinkedIn",
    username: "El Mehdi Rahali",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/el-mehdi-rahali",
  },
  {
    name: "Gmail",
    username: "mehdi1rahali",
    icon: Icons.gmail,
    link: "mailto:mehdi1rahali@gmail.com",
  },
];
