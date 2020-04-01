import * as React from 'react';
require ('./AadTest.scss');

import { IADProfile } from '../model/IADProfile';

export interface IProfileProps {
  profile: IADProfile;
}

export class Profile extends React.Component<IProfileProps, {}> {
  
  public render(): React.ReactElement<IProfileProps> {

    return (
      <table>
        <tr>
          <td>Display name</td>
          <td>{this.props.profile.displayName}</td>
        </tr>
        <tr>
          <td>UPN</td>
          <td>{this.props.profile.userPrincipalName}</td>
        </tr>
        <tr>
          <td>User ID</td>
          <td>{this.props.profile.id}</td>
        </tr>
      </table>
    );
  }
}
