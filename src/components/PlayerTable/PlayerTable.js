import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { TextTooltip } from './../TextTooltip/TextTooltip';
import { FormatDate, OutcomeStyle, RatioStyle } from './../../config/utils';
import FontAwesome from 'react-fontawesome';

import './PlayerTable.css';

export default class PlayerTable extends Component {

  state = {
    sortOrder: 'desc',
    sortType: 'date'
  }

  filteredMatches() {
    const { matches, mapFilter, modeFilter } = this.props;
    return matches.filter(m => (m.map === mapFilter || mapFilter === '') && (m.mode === modeFilter || modeFilter === ''));
  }

  orderedMatches() {
    const { sortOrder, sortType } = this.state;

    const desc = sortOrder === 'desc' ? -1 : 1;
    const asc = sortOrder === 'asc' ? -1 : 1;

    return this.filteredMatches().sort((m1, m2) => {
      if(m1[sortType] > m2[sortType]) return desc;
      if(m1[sortType] < m2[sortType]) return asc;
      return 0;
    });
   
  }

  toggleSort(sortType) {
    if(this.state.sortOrder === 'asc') {
      this.setState({ 
        sortOrder: 'desc' ,
        sortType: sortType
      });
    } else {
      this.setState({ 
        sortOrder: 'asc' ,
        sortType: sortType
      });
    }
  }
  
  render() {
    const { sortOrder, sortType } = this.state;
    const { id } = this.props;
    const matches = this.orderedMatches();
    return (
      <Container fluid>
        <Row>
            <Table responsive striped bordered className="player-table">
              <thead>
                <tr>
                  <th onClick={() => this.toggleSort('date')}>
                    Date {sortType === 'date' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th onClick={() => this.toggleSort('map')}>
                    Map {sortType === 'map' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th onClick={() => this.toggleSort('mode')}>
                    Mode {sortType === 'mode' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('outcome')}>
                    <TextTooltip id={id} name="outcome" tooltip="Outcome">O</TextTooltip> {sortType === 'outcome' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('kills')}>
                    <TextTooltip id={id} name="kills" tooltip="Kills">K</TextTooltip> {sortType === 'kills' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('deaths')}>
                    <TextTooltip id={id} name="deaths" tooltip="Deaths">D</TextTooltip> {sortType === 'deaths' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('assists')}>
                    <TextTooltip id={id} name="assists" tooltip="Assists">A</TextTooltip> {sortType === 'assists' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('kd')}>
                    <TextTooltip id={id} name="kd" tooltip="Kill/Death Ratio">K/D</TextTooltip> {sortType === 'kd' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('roundWins')}>
                    <TextTooltip id={id} name="roundWins" tooltip="Round Wins">RoW</TextTooltip> {sortType === 'roundWins' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('roundLosses')}>
                    <TextTooltip id={id} name="roundLosses" tooltip="Round Losses">RoL</TextTooltip> {sortType === 'roundLosses' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                  <th className="text-center" onClick={() => this.toggleSort('rwl')}>
                    <TextTooltip id={id} name="rwl" tooltip="Round Win/Loss Ratio">W/L</TextTooltip> {sortType === 'rwl' ? <FontAwesome name={`sort-${sortOrder}`}/> : null}
                  </th>
                </tr>
              </thead>
              <tbody>
              {
                matches ?
                matches.map((m, i) => {
                    return (
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
                    )
                }
              )
                : null
              }

              
              
              </tbody>
            </Table>

            {
                matches.length === 0 ?
                  <Row className="text-muted section">
                    <Col className="text-center">
                      <FontAwesome name="frown-o"/> No matches to see here folks...
                    </Col>
                  </Row>
                : null
              }

        </Row>
      </Container>
    );
  }

}