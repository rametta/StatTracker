import React from 'react';
import { Container, Row, Table } from 'reactstrap';
import { TextTooltip } from './../TextTooltip/TextTooltip';

export const PlayerTable = props => {
  return (
    <Container fluid>
      <Row className="section">

          <Table responsive striped bordered size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Map</th>
                <th>Mode</th>
                <th className="text-center">
                  <TextTooltip id={props.id} name="outcome" tooltip="Outcome">O</TextTooltip>
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
                <th className="text-center">
                  <TextTooltip id={props.id} name="kd" tooltip="Kill/Death Ratio">K/D</TextTooltip>
                </th>
                <th className="text-center">
                  <TextTooltip id={props.id} name="roundWins" tooltip="Round Wins">RoW</TextTooltip>
                </th>
                <th className="text-center">
                  <TextTooltip id={props.id} name="roundLosses" tooltip="Round Losses">RoL</TextTooltip>
                </th>
                <th className="text-center">
                  <TextTooltip id={props.id} name="rwl" tooltip="Round Win/Loss Ratio">W/L</TextTooltip>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mar 1st, 2017</td>
                <td>Crossfire</td>
                <td>SND</td>
                <td className="text-center green bold">W</td>
                <td className="text-center">12</td>
                <td className="text-center">3</td>
                <td className="text-center">1</td>
                <td className="text-center green">4.00</td>
                <td className="text-center">6</td>
                <td className="text-center">3</td>
                <td className="text-center green">2.00</td>
              </tr>
              <tr>
                <td>Mar 1st, 2017</td>
                <td>Crossfire</td>
                <td>SND</td>
                <td className="text-center red bold">L</td>
                <td className="text-center">12</td>
                <td className="text-center">3</td>
                <td className="text-center">1</td>
                <td className="text-center blue">1.00</td>
                <td className="text-center">6</td>
                <td className="text-center">3</td>
                <td className="text-center red">0.50</td>
              </tr>
              <tr>
                <td>Mar 1st, 2017</td>
                <td>Crossfire</td>
                <td>SND</td>
                <td className="text-center blue bold">T</td>
                <td className="text-center">12</td>
                <td className="text-center">3</td>
                <td className="text-center">1</td>
                <td className="text-center green">4.00</td>
                <td className="text-center">6</td>
                <td className="text-center">3</td>
                <td className="text-center blue">1.00</td>
              </tr>
              <tr>
                <td>Mar 1st, 2017</td>
                <td>Crossfire</td>
                <td>SND</td>
                <td className="text-center green bold">W</td>
                <td className="text-center">12</td>
                <td className="text-center">3</td>
                <td className="text-center">1</td>
                <td className="text-center red">.76</td>
                <td className="text-center">6</td>
                <td className="text-center">3</td>
                <td className="text-center blue">1.00</td>
              </tr>
            </tbody>
          </Table>

      </Row>
    </Container>
  );
}