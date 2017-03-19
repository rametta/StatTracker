import React from 'react';
import { Container, Row, Table } from 'reactstrap';
import { TextTooltip } from './../TextTooltip/TextTooltip';
import { FormatDate, OutcomeStyle, RatioStyle } from './../../config/utils';

import './PlayerTable.css';

export const PlayerTable = props => {
  return (
    <Container fluid>
      <Row>
          <Table responsive striped bordered>
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
            {
              props.matches ?
              props.matches.map((m, i) => (
                <tr key={i}>
                  <td>{FormatDate(m.date)}</td>
                  <td className="capitalize">{m.map}</td>
                  <td className="uppercase">{m.mode}</td>
                  <td className={`text-center bold ${OutcomeStyle(m.outcome)}`}>{m.outcome}</td>
                  <td className="text-center">{m.kills}</td>
                  <td className="text-center">{m.deaths}</td>
                  <td className="text-center">{m.assists}</td>
                  <td className={`text-center ${RatioStyle(m.kdRatio)}`}>{m.kdRatio}</td>
                  <td className="text-center">{m.roundWins}</td>
                  <td className="text-center">{m.roundLosses}</td>
                  <td className={`text-center ${RatioStyle(m.roundRatio)}`}>{m.roundRatio}</td>
                </tr>
              ))
              : null
            }
            </tbody>
          </Table>

      </Row>
    </Container>
  );
}