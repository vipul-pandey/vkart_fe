import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';

const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };
  return (
    <Form className="d-flex custom-form" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
        />
        <Button variant="info" type="submit" id="button-search">
          <i className="fas fa-search" />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
