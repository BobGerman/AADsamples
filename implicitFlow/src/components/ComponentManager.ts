import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ITestWebApiProps } from './ITestWebApiProps';
import TestWebApi from './TestWebApi';

import { IReProperty } from '../model/IReProperty';

export default class ComponentManager {

    public static render(headerDomElement: HTMLElement, footerDomElement: HTMLElement,
        data: IReProperty[]): void {

        // If there is a header DOM element, make the react element and render it
        if (headerDomElement) {
            const reactElt: React.ReactElement<ITestWebApiProps> = React.createElement(TestWebApi, {
                reProperties: data
            });
            ReactDOM.render(reactElt, headerDomElement);
        }
    }
}