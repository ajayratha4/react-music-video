import { ComponentsVariants } from '@mui/material'

import dark from '../palette/dark'

const muiButtonVariantsDark: ComponentsVariants['MuiButton'] = [
  {
    props: { variant: 'contained' },
    style: {
      minWidth: '88px',
      height: '32px',
      '&.Mui-disabled': {
        color: dark.text.secondary,
        background: dark.grey[600],
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
        color: dark.grey[500],
        border: `1px solid ${dark.grey[600]}`,
      },
    },
  },
  {
    props: { color: 'success' },
    style: {
      border: `1px solid ${dark.success.main}`,
    },
  },
  {
    props: { color: 'error' },
    style: {
      border: `1px solid ${dark.error.main}`,
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
      color: dark.primary.main,
      borderRadius: '4px',
      '&:hover': {
        color: dark.primary.dark,
      },
      '&.Mui-disabled': {
        color: dark.grey[500],
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

export default muiButtonVariantsDark
