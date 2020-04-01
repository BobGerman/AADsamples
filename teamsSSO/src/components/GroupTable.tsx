import * as React from 'react';
import { IGroupTableProps } from './GroupTableProps';
require ('./GroupTable.scss');

export default class GroupTable extends React.Component<IGroupTableProps, {}> {
  
  public render(): React.ReactElement<IGroupTableProps> {

    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Types</th>
          <th>ID</th>
        </tr>
        { this.props.groups.map(p => (
          <tr>
            <td>{p.name}</td>
            <td>{p.types}</td>
            <td>{p.id.toString()}</td>
          </tr>
        ))}
      </table>
    );
  }
}
