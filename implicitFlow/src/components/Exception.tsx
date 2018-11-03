import * as React from 'react';
import { IExceptionProps } from './IExceptionProps';
declare function escape(s: string): string;

export default class Exception extends React.Component<IExceptionProps, {}> {
  public render(): React.ReactElement<IExceptionProps> {
    return (
      <div className={ 'testWebApi' }>
        <div className={ 'container' }>
          <div className={ 'row' }>
            <span className={ 'exceptionColumn' }>
              { this.htmlEncode(this.props.message) }
            </span>
          </div>
        </div>
      </div>
    );
  }

  private htmlEncode (text: string) {
    // TODO Fix this
    return text;
  }
}
