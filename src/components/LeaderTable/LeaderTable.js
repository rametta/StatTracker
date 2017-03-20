import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Table } from 'reactstrap';
import { TextTooltip } from './../TextTooltip/TextTooltip';

import './LeaderTable.css';

export const LeaderTable = props => (
  <Container fluid>
    <Row>

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
          {
            props.users ?
            props.users.map(u => {
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
);