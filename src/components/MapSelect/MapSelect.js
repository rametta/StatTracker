import React from 'react';
import { Input } from 'reactstrap';

export const MapSelect = props => {
  return (
    <Input disabled={props.disabled} type="select" name="map" onChange={ (ev) => props.OnSelect(ev.target.value) } value={props.map}>
      <option value="">All Maps</option>
      <option value="ambush">Ambush</option>
      <option value="backlot">Backlot</option>
      <option value="bloc">Bloc</option>
      <option value="bog">Bog</option>
      <option value="countdown">Countdown</option>
      <option value="crash">Crash</option>
      <option value="crossfire">Crossfire</option>
      <option value="district">District</option>
      <option value="downpour">Downpour</option>
      <option value="overgrown">Overgrown</option>
      <option value="pipeline">Pipeline</option>
      <option value="shipment">Shipment</option>
      <option value="showdown">Showdown</option>
      <option value="strike">Strike</option>
      <option value="vacant">Vacant</option>
      <option value="wetwork">Wet Work</option>
    </Input>
  );
}