import Prop from 'prop-types';
import React, { Children } from 'react';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import * as Styled from './AuthSearch-Styles';

export function AuthSearch({
  name, id, onchange, value, title = '', autocomplete = '', required = false, children,
}) {
  return (
    <Styled.SearchWrapper>
      {children}
      <Styled.AuthSearchContainer>
        {title}
        {' '}
        {required ? '(Obrigatório)' : ''}

        <Styled.AuthSearchElement
          type="search"
          name={name}
          id={id}
          onChange={onchange}
          value={value}
          autoComplete={autocomplete}
          required={required}
        />

        <Styled.SearchIconContainer>
          <SearchIcon />
        </Styled.SearchIconContainer>

      </Styled.AuthSearchContainer>
    </Styled.SearchWrapper>

  );
}

AuthSearch.propTypes = {
  name: Prop.string.isRequired,
  id: Prop.string.isRequired,
  value: Prop.string,
  title: Prop.string,
  onchange: Prop.func,
  autocomplete: Prop.string,
  required: Prop.bool,
};
