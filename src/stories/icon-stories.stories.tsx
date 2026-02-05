
import type { Meta, StoryObj } from '@storybook/react';

import type { ReactNode } from 'react';
import {
  BrandIcon, CalendarIcon, EmployeeGroupIcon, EmployeeIdIcon, FemaleIcon, LinkIcon,
  LogoutIcon, MaleIcon, SearchIcon, SignatureIcon, TodayIcon, TrashIcon, WhatsappIcon
} from '../components/icons';


const IconList = ({ children }: { children?: ReactNode }) => {
  return <div className='*:size-10 *:text-black '>{children}</div>
}

const meta = {
  title: "Icons",
  component: IconList,
  subcomponents: {
    BrandIcon, CalendarIcon, EmployeeGroupIcon, EmployeeIdIcon, FemaleIcon, LinkIcon,
    LogoutIcon, MaleIcon, SearchIcon, SignatureIcon, TodayIcon, TrashIcon, WhatsappIcon
  }

} satisfies Meta<typeof IconList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <IconList {...args}>
      <BrandIcon />
      <CalendarIcon />
      <EmployeeGroupIcon />
      <EmployeeIdIcon />
      <FemaleIcon />
      <LinkIcon />
      <LogoutIcon />
      <MaleIcon />
      <SearchIcon />
      <SignatureIcon />
      <TodayIcon />
      <TrashIcon />
      <WhatsappIcon />
    </IconList>
  }
};
