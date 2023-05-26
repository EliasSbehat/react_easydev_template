import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';
import styled from 'styled-components';
import { Button } from '@/shared/components/Button';
import { colorAccent } from '@/utils/palette';
import { FormContainer } from '@/shared/components/form/FormElements';
import { fetchPokemon } from '../../../redux/actions/pokemonActions';

const ApiTable = () => {
  const dispatch = useDispatch();
  const [pokemonCount, setPokemonCount] = useState(10);
  const pokemon = useSelector(state => state.pokemon.pokemon);
  const isFetching = useSelector(state => state.pokemon.isFetching);

  const pokemonCountHandler = (e) => {
    setPokemonCount(e.target.value);
  };

  const onFetch = () => {
    dispatch(fetchPokemon(pokemonCount));
  };

  // fetch pokemon when page load
  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Api table</h3>
          <h3 className="page-subhead subhead">Example of fetch data and pass it in table</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} xl={12}>
          <Card>
            <CardBody>
              <CardTitleWrap>
                <CardTitle>Pokemon</CardTitle>
              </CardTitleWrap>
              <SearchWrap>
                <input
                  value={pokemonCount}
                  placeholder="Count"
                  type="number"
                  onChange={pokemonCountHandler}
                />
                <Button variant="secondary" onClick={onFetch}>Fetch</Button>
              </SearchWrap>
              {isFetching && (
                <div className="text-center">
                  <TableSpinner animation="border" />
                </div>
              )}
              {pokemon && !isFetching && (
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Base experience</th>
                      <th>Height</th>
                      <th>Weight</th>
                      <th>Api url</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemon.map(elem => (
                      <tr key={elem.id}>
                        <td className="first-letter-uppercase">{elem.name}</td>
                        <td className="first-letter-uppercase">{elem.base_experience}</td>
                        <td className="first-letter-uppercase">{elem.height}</td>
                        <td className="first-letter-uppercase">{elem.weight}</td>
                        <td>
                          <a href={elem.url} target="_blank" rel="noreferrer">
                            {elem.url}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApiTable;

// region STYLES

const TableSpinner = styled(Spinner)`
  color: ${colorAccent};
`;

const SearchWrap = styled(FormContainer)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  
  input {
    margin-right: 10px;
  }
  
  button {
    margin: 0;
    height: 32px;
  }
`;

// endregion
