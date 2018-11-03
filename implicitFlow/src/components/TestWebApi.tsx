import * as React from 'react';
import { ITestWebApiProps } from './ITestWebApiProps';
require ('./TestWebApi.scss');

export default class TestWebApi extends React.Component<ITestWebApiProps, {}> {
  public render(): React.ReactElement<ITestWebApiProps> {
    return (
      <div className={ 'testWebApi' }>
        <div className={ 'container' }>
          { this.props.reProperties.map(p => (
          <div className={ 'row' }>
            <span className={ 'column' }>{this.htmlEncode(p.id.toString())}</span>
            <span className={ 'column' }>{this.htmlEncode(p.name)}</span>
          </div>
          )) }
        </div>
      </div>
    );
  }

  private htmlEncode (text: string) {
    // TODO Fix this
    return text;
  }
}
