import { IADGroup } from './model/IADGroup';
import { ServiceFactory, ServiceOption } from './services/ServiceFactory';
import ComponentManager from './components/ComponentManager';
import * as constants from './constants';

export class bootstrapper {

  public onInit(): void {

    const workspace = document.getElementById('spaContainer');
    if (workspace) {

      let option = ServiceOption.mock;
      let clientId = '';
      if (window.location.href.indexOf('.1') >= 0) {
        option = ServiceOption.v1;
        clientId = constants.clientIdV1;
      } else if (window.location.href.indexOf('.2') >= 0) {
        option = ServiceOption.v2;
        clientId = constants.clientIdV2;
      }
      const service = ServiceFactory.getService(option);
      service.getAllGroups(constants.tenant,
        clientId,
        constants.resourceId)
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
