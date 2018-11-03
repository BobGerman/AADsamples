import { IADGroup } from './model/IADGroup';
import { ServiceFactory } from './services/ServiceFactory';
import ComponentManager from './components/ComponentManager';
import * as constants from './constants';

export class bootstrapper {

  public onInit(): void {

    const workspace = document.getElementById('spaContainer');
    if (workspace) {

      const isMock = window.location.search.indexOf('mock') >= 0;
      const service = ServiceFactory.getService(isMock);
      service.getAllGroups(constants.tenant,
                              constants.clientId,
                              constants.resourceId)
        .then ((data: IADGroup[]) => {
          ComponentManager.render(workspace, workspace, data);
        })
        .catch ((error: string) => {
          console.log(`Error: ${error}`);
        });
  
    } else {

      // The elemement we want to attach to is missing
      console.log('Error: Unable to find element to attach header and footer');
      
    }
  }
}

// In-line code starts here
(() => {
  let b = new bootstrapper();
  b.onInit();  
})();
