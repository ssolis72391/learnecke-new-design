import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Grid, InputAdornment, Stack, TextField } from '@mui/material';
import { ReactComponent as SearchIcon } from 'assets/Icons/streamline-search-alternate--interface-essential--48x48.svg';
import FilterPopover from 'components/FilterPopover';
import TagRow from 'components/TagRow';
import useStyles from './QuestionFiltersStyles';

const QuestionFilters = function ({ dataProp }) {
  const classes = useStyles();
  const [tagList, setTagList] = useState(dataProp.tags);

  const handleTagDelete = (tagToDelete) => () => {
    setTagList((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <>
      <Grid container width='100%' spacing={2.5}>
        <Grid item xs='auto'>
          <FilterPopover placeholder='Filter Tags'>
            <Stack minWidth='24.5rem' bgcolor='grey.main' width='100%' spacing={1.5} px={1} pb={1.5} pt={1.5}>
              <TextField
                fullWidth
                placeholder='Search'
                InputProps={{
                  className: classes.filterSearchInput,
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon className={classes.filterSearchAdornment} />
                    </InputAdornment>
                  ),
                }}
              />
              <Stack px={2.5}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} className={classes.filterCheckbox} label='Sunrise' />
                  <FormControlLabel
                    control={<Checkbox />}
                    className={classes.filterCheckbox}
                    label='165th Airlift Wing'
                  />
                </FormGroup>
              </Stack>
            </Stack>
          </FilterPopover>
        </Grid>
        <Grid item xs='auto'>
          <FilterPopover placeholder='Filter Section'>
            <Stack minWidth='24.5rem' bgcolor='grey.main' width='100%' spacing={1.5} px={1} pb={1.5} pt={1.5}>
              <TextField
                fullWidth
                placeholder='Search'
                InputProps={{
                  className: classes.filterSearchInput,
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon className={classes.filterSearchAdornment} />
                    </InputAdornment>
                  ),
                }}
              />
              <Stack px={2.5}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} className={classes.filterCheckbox} label='1.0.0.' />
                  <Stack ml={1.25} px={2.5}>
                    <FormControlLabel control={<Checkbox />} className={classes.filterCheckbox} label='1.1.0.' />
                    <FormControlLabel control={<Checkbox />} className={classes.filterCheckbox} label='1.1.1.' />
                    <FormControlLabel control={<Checkbox />} className={classes.filterCheckbox} label='1.1.2.' />
                  </Stack>
                  <FormControlLabel control={<Checkbox />} className={classes.filterCheckbox} label='2.0.0.' />
                </FormGroup>
              </Stack>
            </Stack>
          </FilterPopover>
        </Grid>
        <Grid item xs='auto'>
          <FilterPopover placeholder='Filter Difficulty Level'>
            <Stack minWidth='24.5rem' bgcolor='grey.main' width='100%' spacing={1.5} px={1} pb={1.5} pt={1.5}>
              <Stack px={2.5}>
                <FormGroup>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox />}
                      className={classes.filterCheckbox}
                      label={index}
                    />
                  ))}
                </FormGroup>
              </Stack>
            </Stack>
          </FilterPopover>
        </Grid>
      </Grid>

      <TagRow title={dataProp.title} tagList={tagList} handleTagDelete={handleTagDelete} />
    </>
  );
};

export default QuestionFilters;
