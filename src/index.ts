import {
  InterfaceAuthParams,
  InterfaceNcloud,
  InterfaceNcloudIaaS,
} from './const/interface';

import IaaS from './iaas';

export class Ncloud implements InterfaceNcloud {
  public IaaS: InterfaceNcloudIaaS;

  private constructor( authParams: InterfaceAuthParams ) {
    this.IaaS = new IaaS({ authParams });
    // this.openapi = new OpenApi( oauthKey );
    // this.compute = new Compute( oauthKey );
    // this.management = new Management( oauthKey );
    // this.storage = new Storage( oauthKey );
  }

  static createClient ( authParams ) {
    return new Ncloud( authParams );
  }
}

export function createClient( authParams: InterfaceAuthParams ) {
  return Ncloud.createClient( authParams );
}
