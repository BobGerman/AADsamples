import { IReProperty } from './model/IReProperty';
import { ReManagerServiceFactory } from './services/ReManagerServiceFactory';
import ComponentManager from './components/ComponentManager';
import * as constants from './constants';

export class bootstrapper {

  public onInit(): void {

    const workspace = document.getElementById('spaContainer');
    // Hard-coded for now
    if (workspace) {

      const service = ReManagerServiceFactory.getService(false);
      service.getReProperties(constants.tenant,
                              constants.clientId,
                              constants.resourceId,
                              constants.endpointUrl)
        .then ((data: IReProperty[]) => {
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
