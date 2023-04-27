import { ReactElement } from 'react';

export default interface ExperienceCardProps {
  image?: string;
  title: string; //posisi atau judul project
  institution: string;
  type: string;
  fromDate: Date;
  toDate?: Date;
  location: string;
  description: ReactElement;
}
