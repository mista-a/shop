import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import styles from './Admin.module.sass'
import Colors from '../../components/Colors/Colors'

const Admin = () => {
  const [activeSize, setActiveSize] = useState<string[]>([])

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL']

  const changeActiveSize = (event: SelectChangeEvent<typeof activeSize>) => {
    const {
      target: { value },
    } = event
    setActiveSize(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <>
      <div className={styles.admin}>
        <Typography>AdminPage</Typography>
        <Input placeholder='Name' />
        <Input type='number' placeholder='Price' />
        <FormControl className={styles.sizes} fullWidth>
          <InputLabel id='sizesCheckboxLabel'>Sizes</InputLabel>
          <Select
            labelId='sizesMultipleCheckboxLabel'
            id='sizesMultipleCheckbox'
            multiple
            value={activeSize}
            onChange={changeActiveSize}
            input={<OutlinedInput label='Sizes' />}
            renderValue={(selected) => selected.join(', ')}
          >
            {sizes.map((size) => (
              <MenuItem key={size} value={size}>
                <Checkbox checked={activeSize.indexOf(size) > -1} />
                <ListItemText primary={size} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextareaAutosize aria-label='Description' placeholder='Description' />
        <input type='file' />
      </div>
      <Colors />
      <div className={styles.admin}>
        <Button type='submit'>Submit</Button>
      </div>
    </>
  )
}

export default Admin
