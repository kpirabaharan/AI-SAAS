import { fetchUser } from '@/actions/fetchUser';
import { Settings as settings } from '@/constants';

import Heading from '@/components/heading';
import SettingsForm from './components/settings-form';

export const revalidate = 0;

const SettingsPage = async () => {
  const { title, icon, showReset, bgColor, textColor } = settings;

  const user = await fetchUser();

  return (
    <div className='flex h-full flex-col'>
      <Heading
        title={title}
        showReset={showReset}
        icon={icon}
        bgColor={bgColor}
        textColor={textColor}
      />
      <SettingsForm user={user} />
    </div>
  );
};

export default SettingsPage;
