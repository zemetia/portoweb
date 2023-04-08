import { useEffect, useState } from 'react';

import SEO from '@/components/SEO';
import SubjectInterface from '@/types/entity/subject-interface';
import WindowsLayout from '@/layouts/WindowsLayout';
import AppDesktopView from '@/components/apps/AppDesktopView';
import rightClick from '@/lib/right-click';
import RightClick from '@/lib/right-click';

export default function MainPage() {
  return (
    <WindowsLayout>
      <RightClick></RightClick>
      <SEO title='Home' description='Main Page' />
      <div className='grid grid-flow-row gap-5 h-5'>
        <AppDesktopView icon='' name='Projects' />
        <AppDesktopView icon='' name='Schools' />
        <AppDesktopView icon='' name='Maps' />
        <AppDesktopView icon='' name='Maps' />
        <AppDesktopView icon='' name='Maps' />
      </div>
    </WindowsLayout>
  );
}
