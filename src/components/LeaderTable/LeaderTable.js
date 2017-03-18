import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Table, UncontrolledTooltip } from 'reactstrap';

import './LeaderTable.css';

export const LeaderTable = props => (
  <Container fluid>
    <Row className="section">

        <Table responsive striped className="overall-leader-table">
          <thead>
            <tr>
              <th>Player</th>
              <th className="center border-left">
                <span id={`kdTooltip-${props.id}`}>K/D</span>
                <UncontrolledTooltip placement="top" target={`kdTooltip-${props.id}`}>
                  Kill/Death Ratio
                </UncontrolledTooltip>
              </th>
              <th className="center">
                <span id={`killsTooltip-${props.id}`}>K</span>
                <UncontrolledTooltip placement="top" target={`killsTooltip-${props.id}`}>
                  Kills
                </UncontrolledTooltip>
              </th>
              <th className="center">
                <span id={`deathsTooltip-${props.id}`}>D</span>
                <UncontrolledTooltip placement="top" target={`deathsTooltip-${props.id}`}>>
                  Deaths
                </UncontrolledTooltip>
              </th>
              <th className="center">
                <span id={`assistsTooltip-${props.id}`}>A</span>
                <UncontrolledTooltip placement="top" target={`assistsTooltip-${props.id}`}>
                  Assists
                </UncontrolledTooltip>
              </th>
              <th className="center border-left">
                <span id={`wlTooltip-${props.id}`}>W/L</span>
                <UncontrolledTooltip placement="top" target={`wlTooltip-${props.id}`}>
                  Win/Loss Ratio
                </UncontrolledTooltip>
              </th>
              <th className="center">
                <span id={`winsTooltip-${props.id}`}>W</span>
                <UncontrolledTooltip placement="top" target={`winsTooltip-${props.id}`}>
                  Wins
                </UncontrolledTooltip>
              </th>
              <th className="center">
                <span id={`lossesTooltip-${props.id}`}>L</span>
                <UncontrolledTooltip placement="top" target={`lossesTooltip-${props.id}`}>
                  Losses
                </UncontrolledTooltip>
              </th>
              <th className="center">
                <span id={`tiesTooltip-${props.id}`}>T</span>
                <UncontrolledTooltip placement="top" target={`tiesTooltip-${props.id}`}>
                  Ties
                </UncontrolledTooltip>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/profile/rametta">Rametta</Link></td>
              <td className="center border-left">2.34</td>
              <td className="center">1234</td>
              <td className="center">123</td>
              <td className="center">1231</td>
              <td className="center border-left">.76</td>
              <td className="center">450</td>
              <td className="center">345</td>
              <td className="center">3</td>
            </tr>
            <tr>
              <td><Link to="/profile/veemerk">VeeMerk</Link></td>
              <td className="center border-left">2.34</td>
              <td className="center">1234</td>
              <td className="center">123</td>
              <td className="center">1231</td>
              <td className="center border-left">.76</td>
              <td className="center">450</td>
              <td className="center">345</td>
              <td className="center">3</td>
            </tr>
            <tr>
              <td><Link to="/profile/ehlouis">EhLouis</Link></td>
              <td className="center border-left">2.34</td>
              <td className="center">1234</td>
              <td className="center">123</td>
              <td className="center">1231</td>
              <td className="center border-left">.76</td>
              <td className="center">450</td>
              <td className="center">345</td>
              <td className="center">3</td>
            </tr>
            <tr>
              <td><Link to="/profile/cryonical">Cryonical</Link></td>
              <td className="center border-left">2.34</td>
              <td className="center">1234</td>
              <td className="center">123</td>
              <td className="center">1231</td>
              <td className="center border-left">.76</td>
              <td className="center">450</td>
              <td className="center">345</td>
              <td className="center">3</td>
            </tr>
          </tbody>
        </Table>

    </Row>
  </Container>
);