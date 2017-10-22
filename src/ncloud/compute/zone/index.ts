import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

// import paramSet from './paramSet';

export interface InterfaceZone {
  findZones( callback: InterfaceCallback ): void;
}

export function findZones( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getZoneList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      const zoneList = responseFilter( response.data.getZoneListResponse.zoneList[0], 'zone');
      callback( null, zoneList );
    })
    .catch( err=>errorHandling(err, callback));

}
