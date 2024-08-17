import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../App';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        onChange={changeTheme}
        checked={theme.title === 'light' ? true : false}
        onColor={theme.colors.on}
        offColor={theme.colors.off}
        // height={30}
        // width={70} смена размеров для свиtчера
      />
    </>
  );
};

export default ThemeSwitcher;
