import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IProfileProps, Profile } from './Profile';

import { IADProfile } from '../model/IADProfile';

export default class ComponentManager {

    public static renderGraphResults(workspaceDomElement: HTMLElement,
        data: IADProfile): void {

        if (workspaceDomElement) {
            const reactElt: React.ReactElement<IProfileProps> =
                React.createElement(Profile, {
                    profile: data
                });
            ReactDOM.render(reactElt, workspaceDomElement);
        }
    }
}