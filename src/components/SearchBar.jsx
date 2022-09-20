import React, {useState} from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: { xs: 1, sm: 2 },
        boxShadow: 'none',
        mr: {xs: .5,  sm : 5},
        ml: {xs: .5,  sm : 5},
        alignSelf: 'center',
        display: 'inline-flex'
      }}
    >
      <input
        type='text' 
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  
      />
      <IconButton 
        type='submit' 
        sx={{
          p : { xs:'5px' ,sm : '10px'},
          color: 'red'
        }} 
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar