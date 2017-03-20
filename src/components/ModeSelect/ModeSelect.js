import React from 'react';
import { Input } from 'reactstrap';

export const ModeSelect = props => {
  return (
    <Input type="select" name="game-mode" onChange={ (ev) => props.OnSelect(ev.target.value) } value={props.mode}>
      <option value="">All Modes</option>
      <option value="cm">Cage Match</option>
      <option value="dom">Domination</option>
      <option value="ffa">Free for all</option>
      <option value="gw">Ground War</option>
      <option value="hq">Headquarters</option>
      <option value="mtdm">Mercenary Team Deathmatch</option>
      <option value="sab">Sabotage</option>
      <option value="hp">Hardpoint</option>
      <option value="snd">Search and Destroy</option>
      <option value="tdm">Team Deathmatch</option>
    </Input>
  );
}