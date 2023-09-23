'use client';
// import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import DataTable from './components/DataTableCharacter';
import { ICharacter } from './types/chracter.interface';
import {
  CircularProgress,
  Pagination,
  TextField,
  Typography,
} from '@mui/material';
import CardCharacter from './components/CardCharacter';

const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [character, setCharacter] = useState<ICharacter | null>(null);

  const getCharacters = async () => {
    setLoading(true);
    const response = await fetch(`/api/characters?page=${page}&name=${name}`);
    const {
      characters: { info, results },
    } = await response.json();
    setCount(info.pages);
    setCharacters(results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setPage(1);
      getCharacters();
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [name]);

  return (
    <Box sx={{ display: 'flex' }} justifyContent='center'>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
        <Grid
          container
          sx={{
            backgroundColor: 'rgb(255, 255, 255, 0.85)',
            borderRadius: '1rem',
            p: 2,
          }}
        >
          {loading ? (
            <Grid>
              <CircularProgress />
            </Grid>
          ) : (
            <>
              <TextField
                label='Name'
                variant='outlined'
                size='small'
                sx={{ width: '100%', marginBottom: '0.85rem' }}
                margin='none'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {characters.length ? (
                <>
                  <DataTable
                    characters={characters}
                    setCharacter={setCharacter}
                  />
                  <Pagination
                    sx={{ margin: 'auto', marginTop: '0.75rem' }}
                    count={count}
                    page={page}
                    onChange={(e, value: number) => setPage(value)}
                  />
                </>
              ) : (
                <Typography variant='body1'>No characters found</Typography>
              )}
            </>
          )}
        </Grid>
        <Box sx={{ height: 'auto' }}>
          {character && <CardCharacter character={character} />}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
