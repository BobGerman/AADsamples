import { IADGroup } from './model/IADGroup';
import { ServiceFactory, ServiceOption } from './services/ServiceFactory';
import { IMSGraphService } from './services/IMSGraphService';

import ComponentManager from './components/ComponentManager';
import * as constants from './constants';

export class bootstrapper {

  public onInit(): void {

    const workspace = document.getElementById('spaContainer');
    if (workspace) {

      let service: IMSGraphService = null;
      if (window.location.href.indexOf('.1') >= 0) {
        service = ServiceFactory.getService(ServiceOption.v1);
      } else if (window.location.href.indexOf('.2') >= 0) {
        service = ServiceFactory.getService(ServiceOption.v2);
      } else {
        service = ServiceFactory.getService(ServiceOption.mock);
      }

      service.getAllGroups()
        .then((data: IADGroup[]) => {
          ComponentManager.render(workspace, workspace, data);
        })
        .catch((error: string) => {
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
