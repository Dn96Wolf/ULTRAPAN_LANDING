export type ContactFormProps = {
  isMain?: boolean;
  title?: string;
  subtitle?: string;
  titleBtn?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};
