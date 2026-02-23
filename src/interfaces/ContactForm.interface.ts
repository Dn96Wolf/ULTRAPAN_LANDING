export type ContactFormProps = {
  isMain?: boolean;
  title?: string;
  subtitle?: string;
  titleBtn?: string;
  element?: string;
};

export type ContactFormData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  element?: string;
};
