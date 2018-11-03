import { IADGroup } from './model/IADGroup';
import { ServiceFactory } from './services/ServiceFactory';
import ComponentManager from './components/ComponentManager';
import * as constants from './constants';

export class bootstrapper {

  public onInit(): void {

    const workspace = document.getElementById('spaContainer');
    if (workspace) {

      const isV1 = window.location.search.indexOf('v1') >= 0;
      const service = ServiceFactory.getService(!isV1);
      service.getReProperties(constants.tenant,
                              constants.clientId,
                              constants.resourceId,
                              constants.endpointUrl)
        .then ((data: IADGroup[]) => {
          ComponentManager.render(workspace, workspace, data);
        })
        .catch ((error: string) => {
          console.log(`Error in CustomHeaderFooterApplicationCustomizer: ${error}`);
        });
  
    } else {

      // The elemement we want to attach to is missing
      console.log('Error in CustomHeaderFooterApplicationCustomizer: Unable to find element to attach header and footer');
      
    }
  }
}

// In-line code starts here
(() => {
  let b = new bootstrapper();
  b.onInit();  
})();
