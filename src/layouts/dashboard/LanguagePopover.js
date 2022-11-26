import { useRef, useState } from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// ----------------------------------------------------------------------

const SNS = [
  {
    value: 'en',
    label: 'English',
    icon: '/static/icons/blog.svg',
  },
  {
    value: 'kr',
    label: 'Korean',
    icon: '/static/icons/naver.png',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const url = "https://blog.hyundai-transys.com"
  const handleOpen = () => {
    console.log('The link was clicked.');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 3,
          width: 25, // 아이콘 크기 조정
          height: 25,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <a href={url}>
        <img src={SNS[0].icon} alt={SNS[0].label}/>
        </a>
      </IconButton>

    </>
  );
}
