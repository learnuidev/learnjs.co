export type Course = {
  id: string;
  type: "free" | "paid";
  title: string;
  description: string;
} & {
  color?: string;
  typeI18n?: string;
};
