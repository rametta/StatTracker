import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Table } from 'reactstrap';
import { TextTooltip } from './../TextTooltip/TextTooltip';

import './LeaderTable.css';

export const LeaderTable = props => (
  <Container fluid>
    <Row className="section">

        <Table responsive striped className="overall-leader-table">
          <thead>
            <tr>
              <th>Player</th>
              <th className="text-center border-left">
                <TextTooltip id={props.id} name="kd" tooltip="Kill/Death Ratio">K/D</TextTooltip>
              </th>
              <th className="text-center">
                <TextTooltip id={props.id} name="kills" tooltip="Kills">K</TextTooltip>
              </th>
              <th className="text-center">
                <TextTooltip id={props.id} name="deaths" tooltip="Deaths">D</TextTooltip>
              </th>
              <th className="text-center">
                <TextTooltip id={props.id} name="assists" tooltip="Assists">A</TextTooltip>
              </th>
              <th className="text-center border-left">
                <TextTooltip id={props.id} name="wl" tooltip="Win/Loss Ratio">W/L</TextTooltip>
              </th>
              <th className="text-center">
                <TextTooltip id={props.id} name="wins" tooltip="Wins">W</TextTooltip>
              </th>
              <th className="text-center">
                <TextTooltip id={props.id} name="losses" tooltip="Losses">L</TextTooltip>
              </th>
              <th className="text-center">
                <TextTooltip id={props.id} name="ties" tooltip="Ties">T</TextTooltip>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/profile/rametta">Rametta</Link></td>
              <td className="text-center border-left">2.34</td>
              <td className="text-center">1234</td>
              <td className="text-center">123</td>
              <td className="text-center">1231</td>
              <td className="text-center border-left">.76</td>
              <td className="text-center">450</td>
              <td className="text-center">345</td>
              <td className="text-center">3</td>
            </tr>
            <tr>
              <td><Link to="/profile/veemerk">VeeMerk</Link></td>
              <td className="text-center border-left">2.34</td>
              <td className="text-center">1234</td>
              <td className="text-center">123</td>
              <td className="text-center">1231</td>
              <td className="text-center border-left">.76</td>
              <td className="text-center">450</td>
              <td className="text-center">345</td>
              <td className="text-center">3</td>
            </tr>
            <tr>
              <td><Link to="/profile/ehlouis">EhLouis</Link></td>
              <td className="text-center border-left">2.34</td>
              <td className="text-center">1234</td>
              <td className="text-center">123</td>
              <td className="text-center">1231</td>
              <td className="text-center border-left">.76</td>
              <td className="text-center">450</td>
              <td className="text-center">345</td>
              <td className="text-center">3</td>
            </tr>
            <tr>
              <td><Link to="/profile/cryonical">Cryonical</Link></td>
              <td className="text-center border-left">2.34</td>
              <td className="text-center">1234</td>
              <td className="text-center">123</td>
              <td className="text-center">1231</td>
              <td className="text-center border-left">.76</td>
              <td className="text-center">450</td>
              <td className="text-center">345</td>
              <td className="text-center">3</td>
            </tr>
          </tbody>
        </Table>

    </Row>
  </Container>
);