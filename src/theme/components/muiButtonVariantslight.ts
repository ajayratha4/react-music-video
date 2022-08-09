import { ComponentsVariants } from '@mui/material'

import light from '../palette/light'

const muiButtonVariantsLight: ComponentsVariants['MuiButton'] = [
  {
    props: { variant: 'contained' },
    style: {
      minWidth: '88px',
      height: '32px',
      '&.Mui-disabled': {
        color: light.grey[500],
        background: light.grey[100],
      },
    },
  },
  {
    props: { variant: 'contained', size: 'small' },
    style: {
      minWidth: '81px',
      height: '24px',
    },
  },
  {
    props: { variant: 'contained', size: 'medium' },
    style: {
      minWidth: '88px',
      height: '32px',
    },
  },
  {
    props: { variant: 'contained', size: 'large' },
    style: {
      minWidth: '92px',
      height: '40px',
    },
  },
  {
    props: { variant: 'outlined' },
    style: {
      '&.Mui-disabled': {
        border: `1px solid ${light.grey[500]}`,
        color: light.grey[500],
      },
    },
  },
  {
    props: { color: 'success' },
    style: {
      border: `1px solid ${light.success.main}`,
    },
  },
  {
    props: { color: 'error' },
    style: {
      border: `1px solid ${light.error.main}`,
    },
  },
  {
    props: { variant: 'outlined', size: 'small' },
    style: {
      minWidth: '81px',
      height: '24px',
    },
  },
  {
    props: { variant: 'outlined', size: 'medium' },
    style: {
      minWidth: '88px',
      height: '32px',
    },
  },
  {
    props: { variant: 'outlined', size: 'large' },
    style: {
      minWidth: '92px',
      height: '40px',
    },
  },
  {
    props: { variant: 'text' },
    style: {
      color: light.primary.main,
      borderRadius: '4px',
      '&:hover': {
        color: light.primary.dark,
      },
      '&.Mui-disabled': {
        color: light.grey[500],
      },
    },
  },
  {
    props: { variant: 'text', size: 'small' },
    style: {
      minWidth: '81px',
      height: '24px',
    },
  },
  {
    props: { variant: 'text', size: 'medium' },
    style: {
      minWidth: '88px',
      height: '32px',
    },
  },
  {
    props: { variant: 'text', size: 'large' },
    style: {
      minWidth: '92px',
      height: '40px',
    },
  },
]

export default muiButtonVariantsLight
