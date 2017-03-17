import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Table } from 'reactstrap';

import './Leaderboards.css';

export const Leaderboards = props => (
  <Container>
    <Row className="section">
      <Col xs="12">
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>Player</th>
              <th>K/D</th>
              <th>Kills</th>
              <th>Deaths</th>
              <th>Assists</th>
              <th>W/L</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Ties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/profile/rametta">Rametta</Link></td>
              <td>2.34</td>
              <td>1234</td>
              <td>123</td>
              <td>1231</td>
              <td>.76</td>
              <td>450</td>
              <td>345</td>
              <td>3</td>
            </tr>
            <tr>
              <td><Link to="/profile/veemerk">VeeMerk</Link></td>
              <td>2.34</td>
              <td>2423</td>
              <td>234</td>
              <td>123</td>
              <td>.76</td>
              <td>450</td>
              <td>345</td>
              <td>3</td>
            </tr>
            <tr>
              <td><Link to="/profile/ehlouis">EhLouis</Link></td>
              <td>2.34</td>
              <td>1234</td>
              <td>321</td>
              <td>1234</td>
              <td>.76</td>
              <td>450</td>
              <td>345</td>
              <td>3</td>
            </tr>
            <tr>
              <td><Link to="/profile/cryonical">Cryonical</Link></td>
              <td>2.34</td>
              <td>2302</td>
              <td>234</td>
              <td>2345</td>
              <td>.76</td>
              <td>450</td>
              <td>345</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);