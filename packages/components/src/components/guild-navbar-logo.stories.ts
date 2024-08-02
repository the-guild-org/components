import { Meta, StoryObj } from '@storybook/react';
import { HivePlatformLogo } from '../logos';
import { getNavbarLogo, GuildUnifiedLogo } from './guild-navbar-logo';

export default {
  title: 'Components/GuildNavbarLogo',
  component: GuildUnifiedLogo,
} satisfies Meta<typeof GuildUnifiedLogo>;

export const Default: StoryObj<typeof GuildUnifiedLogo> = {};

export const Hive: StoryObj = {
  render: () => getNavbarLogo(HivePlatformLogo, 'Hive', ''),
};
