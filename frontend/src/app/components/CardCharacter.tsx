import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICharacter } from '../types/chracter.interface';

interface ICardCharacterProps {
  character: ICharacter;
}

export default function CardCharacter({ character }: ICardCharacterProps) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        backgroundColor: 'rgb(255, 255, 255, 0.85)',
        borderRadius: '1rem',
        px: 2,
        py: 1,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ fontWeight: 500 }}
        >
          {character.name}
        </Typography>
        <img
          srcSet={character.image}
          src={character.image}
          alt={character.name}
          loading='lazy'
          style={{
            borderRadius: '1rem',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1rem',
          }}
        />
        <Typography
          variant='body1'
          sx={{ fontWeight: 500, marginBottom: '0.5rem' }}
        >
          Status:
          <span style={{ fontWeight: 400 }}> {character.status}</span>
        </Typography>
        <Typography
          variant='body1'
          sx={{ fontWeight: 500, marginBottom: '0.5rem' }}
        >
          Gender:
          <span style={{ fontWeight: 400 }}> {character.gender}</span>
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 500 }}>
          Species:
          <span style={{ fontWeight: 400 }}> {character.species}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
