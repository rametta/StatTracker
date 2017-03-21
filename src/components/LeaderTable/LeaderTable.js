import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Row, Table } from 'reactstrap';
import { TextTooltip } from './../TextTooltip/TextTooltip';

import './LeaderTable.css';

export default class LeaderTable extends Component {

  state = {
    sortOrder: 'desc',
    sortType: 'kills'
  }

  // orderedUsers() {
  //   const { sortOrder, sortType } = this.state;

  //   const desc = sortOrder === 'desc' ? -1 : 1;
  //   const asc = sortOrder === 'asc' ? -1 : 1;

  //   return this.filteredUsers().sort((m1, m2) => {
  //     if(m1[sortType] > m2[sortType]) return desc;
  //     if(m1[sortType] < m2[sortType]) return asc;
  //     return 0;
  //   });
   
  // }

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
    const { id, users } = this.props;
    return (
      <Container fluid>
        <Row>

            <Table responsive striped className="overall-leader-table">
              <thead>
                <tr>
                  <th>Player</th>
                  <th className="text-center border-left">
                    <TextTooltip id={id} name="kd" tooltip="Kill/Death Ratio">K/D</TextTooltip>
                  </th>
                  <th className="text-center">
                    <TextTooltip id={id} name="kills" tooltip="Kills">K</TextTooltip>
                  </th>
                  <th className="text-center">
                    <TextTooltip id={id} name="deaths" tooltip="Deaths">D</TextTooltip>
                  </th>
                  <th className="text-center">
                    <TextTooltip id={id} name="assists" tooltip="Assists">A</TextTooltip>
                  </th>
                  <th className="text-center border-left">
                    <TextTooltip id={id} name="wl" tooltip="Win/Loss Ratio">W/L</TextTooltip>
                  </th>
                  <th className="text-center">
                    <TextTooltip id={id} name="wins" tooltip="Wins">W</TextTooltip>
                  </th>
                  <th className="text-center">
                    <TextTooltip id={id} name="losses" tooltip="Losses">L</TextTooltip>
                  </th>
                  <th className="text-center">
                    <TextTooltip id={id} name="ties" tooltip="Ties">T</TextTooltip>
                  </th>
                </tr>
              </thead>
              <tbody>
              {
                users ?
                users.map(u => {
                  return (
                    <tr key={u.uid}>
                      <td>
                        <Link to={`/profile/${u.uid}`}>
                          <img src={u.photo} alt="" className="small-thumb"/> {u.name}
                        </Link>
                      </td>
                      <td className="text-center border-left">{u.kd}</td>
                      <td className="text-center">{u.kills}</td>
                      <td className="text-center">{u.deaths}</td>
                      <td className="text-center">{u.assists}</td>
                      <td className="text-center border-left">{u.wl}</td>
                      <td className="text-center">{u.w}</td>
                      <td className="text-center">{u.l}</td>
                      <td className="text-center">{u.t}</td>
                    </tr>
                  )
                })
                : null
              }
              </tbody>
            </Table>

        </Row>
      </Container>
    )
  }
}