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
import { useForm } from 'react-hook-form'
import { Api } from '../../API'

const Admin = () => {
  const [activeSizes, setActiveSizes] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit } = useForm()

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL']

  const changeActiveSizes = (event: SelectChangeEvent<typeof activeSizes>) => {
    const {
      target: { value },
    } = event
    setActiveSizes(typeof value === 'string' ? value.split(',') : value)
  }

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      data.price = +data.price
      Api().product.create(data)
    } catch (err) {
      console.warn('Create product', err)
      alert(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.admin}>
          <Typography>AdminPage</Typography>
          <Input placeholder='Name' {...register('name', { required: true })} />
          <Input
            type='number'
            placeholder='Price'
            {...register('price', { required: true })}
          />
          <FormControl className={styles.sizes} fullWidth>
            <InputLabel id='sizesCheckboxLabel'>Sizes</InputLabel>
            <Select
              labelId='sizesMultipleCheckboxLabel'
              id='sizesMultipleCheckbox'
              multiple
              value={activeSizes}
              onChange={changeActiveSizes}
              input={<OutlinedInput label='Sizes' />}
              renderValue={(selected) => selected.join(', ')}
            >
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  <Checkbox checked={activeSizes.indexOf(size) > -1} />
                  <ListItemText primary={size} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextareaAutosize
            aria-label='Description'
            placeholder='Description'
            {...register('description')}
          />
          {/* <input type='file' {...register('miniImg')} /> */}
          <Input {...register('img')} />
        </div>
        <Colors />
        <div className={styles.admin}>
          <Button disabled={isLoading} type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default Admin
