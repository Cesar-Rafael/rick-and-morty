import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ICharacter } from '../types/chracter.interface';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface IBasicTableProps {
  characters: ICharacter[];
  setCharacter: (character: ICharacter) => void;
}

export default function BasicTable({
  characters,
  setCharacter,
}: IBasicTableProps) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600, overflow: 'auto' }}>
      <Table aria-label='simple table' size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Status</TableCell>
            <TableCell align='left'>Gender</TableCell>
            <TableCell align='left'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => (
            <TableRow key={character.id}>
              <TableCell align='left'>{character.name}</TableCell>
              <TableCell align='left'>{character.status}</TableCell>
              <TableCell align='left'>{character.gender}</TableCell>
              <TableCell align='left'>
                <IconButton
                  size='small'
                  onClick={() => setCharacter(character)}
                >
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
