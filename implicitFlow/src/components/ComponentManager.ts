import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IGroupTableProps } from './GroupTableProps';
import GroupTable from './GroupTable';

import { IADGroup } from '../model/IADGroup';

export default class ComponentManager {

    public static render(workspaceDomElement: HTMLElement,
        data: IADGroup[]): void {

        if (workspaceDomElement) {
            const reactElt: React.ReactElement<IGroupTableProps> =
                React.createElement(GroupTable, {
                    groups: data
                });
            ReactDOM.render(reactElt, workspaceDomElement);
        }
    }
}