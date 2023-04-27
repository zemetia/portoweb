// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ExperienceCardProps from '@/types/entity/experience-card-props';

import ExperienceCard from './ExperienceCard';

export default function Github() {
  const exp: Array<ExperienceCardProps> = [
    {
      image: '/images/institution/1614153064947.jpeg',
      title: 'Software Engineer',
      institution: 'Mulai Coding',
      type: 'Magang',
      fromDate: new Date('2023-03-10'),
      location: 'Jakarta Pusat, Jakarta Raya, Indonesia',
      description: (
        <span>
          Mulai Coding (PT Mulai Coding Teknologi) is Indonesia&apos;s leading
          online platform for coding education, mentorship, and community.
        </span>
      ),
    },
    {
      image: '/images/institution/1537816360973.jpeg',
      title: 'Web Developer',
      institution: 'ITS MUN Club',
      type: 'Seasonal',
      fromDate: new Date('2022-12-10'),
      location: 'Jakarta Pusat, Jakarta Raya, Indonesia',
      description: (
        <span>
          Institut Teknologi Sepuluh Nopember Model United Nations Club (
          abbreviated ITS MUN Club ) is a professional student community run by
          dedicated undergraduate students with an interest in international
          relations
        </span>
      ),
    },
    {
      image: '/images/institution/1652516055912.jpeg',
      title: 'Expert Back End Staff',
      institution: 'Schematics ITS',
      type: 'Event',
      fromDate: new Date('2023-01-02'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <ul className='list-disc px-6'>
          <li>
            Responsible to teaching staff about Backend, Several Task,
            Databases, etc
          </li>
          <li>Using Laravel and Union Architechture</li>
        </ul>
      ),
    },
    {
      image: '/images/institution/1652516055912.jpeg',
      title: 'Backend Developer Staff',
      institution: 'Schematics ITS',
      type: 'Event',
      fromDate: new Date('2022-06-02'),
      toDate: new Date('2022-12-02'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <span>
          Schematics is a major ITS event organized by ITS Informatics
          Engineering students. It features programming and logic competitions
          and showcases technological advancements to the community through
          sub-events
          <ul className='list-disc px-6'>
            <li>Using Laravel Framework with Union architecture</li>
            <li>Handling services, controllers, databases, etc</li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/1595243566690.jpeg',
      title: 'Expert Back End Developer',
      institution: 'ITS Expo',
      type: 'Event',
      fromDate: new Date('2022-12-10'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <span>
          The ITS Expo is organized by the Student Executive Board of ITS (BEM
          ITS). It serves as a manifestation of their commitment to promoting
          technological advancements, preserving cultural heritage, taking
          action for environmental sustainability, and much more.
          <ul className='list-disc px-6'>
            <li>
              Responsible to teaching staff about Backend, Several Task,
              Databases, etc
            </li>
            <li>Using Laravel and Union Architechture</li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/inochi.jpeg',
      title: 'Event Specialist',
      institution: 'Inochi ITS',
      type: 'Event',
      fromDate: new Date('2022-12-10'),
      location: 'Jakarta Pusat, Jakarta Raya, Indonesia',
      description: (
        <span>
          The Most Awaited Japanese cultural festival in Surabaya, presented by
          IFLS : INOCHI 2023
          <ul className='list-disc px-6'>
            <li>
              Planning the event especially for Music Band, and Sing Cover
              Competition
            </li>
            <li>Responsible to appointing a jury for the competition</li>
            <li>Creating the timeline for the event</li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/1637317278709.jpeg',
      title: 'Full Stack Developer',
      institution: 'PT Petrokimia Gresik',
      type: 'Contract',
      fromDate: new Date('2022-11-10'),
      toDate: new Date('2023-02-10'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <span>
          Creating Petrokimia Dashboard for data collecting, managing employees,
          etc
          <ul className='list-disc px-6'>
            <li>Handle the Controller, Databases, Seeder, and Models</li>
            <li>
              Work with Laravel and Blade. Using Bootstrap 5.2 for styling
            </li>
            <li>
              Responsible for several tasks such as Dashboard Main Page,
              Employee Page, Ship Master Data, Transportation Master Data, etc
            </li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/1660287870079.jpeg',
      title: 'Full Stack Developer',
      institution: 'Alpha Academy',
      type: 'Contract',
      fromDate: new Date('2022-11-10'),
      toDate: new Date('2022-12-10'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <span>
          <ul className='list-disc px-6'>
            <li>
              Work on the Front-end view and system with Laravel Blade and
              Tailwind
            </li>
            <li>
              Manage databases, seeder, services, model, and controller and Work
              With Laravel
            </li>
            <li>Set up the development server</li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/1615814439449.jpeg',
      title: 'Expert Back End Developer Staff',
      institution: 'MABA CUP ITS',
      type: 'Event',
      fromDate: new Date('2022-08-10'),
      toDate: new Date('2022-12-15'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <span>
          MABA CUP ITS is a competition event held to develop the skills of ITS
          new students, especially in Arts, Linguistics, Music, and Sports.
          <ul className='list-disc px-6'>
            <li>Problem Solving / Made the ideas for several Feature</li>
            <li>
              Handling the Back-end and Databases such as Services, Models, and
              Controller with Laravel
            </li>
            <li>Manage the server with Nginx</li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/1668926729671.jpeg',
      title: 'Data Stucture Teaching Assistant',
      institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
      type: 'Contract',
      fromDate: new Date('2022-08-10'),
      toDate: new Date('2022-12-15'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <span>
          Became a teaching assistant in the Data Structure course in the
          Department of Informatics Engineering (when semester 3)
          <ul className='list-disc px-6'>
            <li>
              grading assignments, supervising exams, helping students to
              understand data structure lessons, counseling, etc
            </li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/1568234552118.jpeg',
      title: 'Project Intern',
      institution: 'ICHIRO ITS Robotics Team',
      type: 'Magang',
      fromDate: new Date('2022-02-01'),
      toDate: new Date('2022-03-10'),
      location: 'Surabaya, Jawa Timur, Indonesia',
      description: (
        <span>
          <ul className='list-disc px-6'>
            <li>
              Utilize OpenCV&apos;s color detection to identify a ball and
              determine the distance between the robot and ball from the
              camera&apos;s output.
            </li>
            <li>
              Refactor Ball Detection and Visual Computation Programs in OpenCV
              using C++ and Python
            </li>
          </ul>
        </span>
      ),
    },
    {
      image: '/images/institution/1661934050375.jpeg',
      title: 'Full Stack Developer',
      institution: 'Fakultas Ilmu Administrasi Universitas Brawijaya',
      type: 'Freelance',
      fromDate: new Date('2021-11-01'),
      toDate: new Date('2021-12-13'),
      location: 'Malang, Jawa Timur, Indonesia',
      description: (
        <span>
          Creating Departement Public Administration Student Association
          Chairman Election Portal (Website).
          <ul className='list-disc px-6'>
            <li>
              The website was built using Stack Native PHP, MYSQL, HTML, Native
              JavaScript, and Bootstrap 5.
            </li>
            <li>
              The choice of using Native PHP was due to the hosting provider not
              supporting any frameworks.
            </li>
            <li>
              The website has several features including Login, NRP
              verification, email verification, &apos;coming soon&apos; page
              with a countdown timer, and data visualization.
            </li>
          </ul>
        </span>
      ),
    },
  ];
  const [available, setAvailable] = useState<boolean>(false);
  axios.get('http://localhost:1337/api/restaurants').then((response) => {
    setAvailable(true);
    // eslint-disable-next-line no-console
    console.log(response);
  });
  return (
    <div className='max-w-screen-md'>
      {available && (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className=''
        >
          {exp.map((data: ExperienceCardProps, index: number) => (
            <SwiperSlide key={index}>
              <ExperienceCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
