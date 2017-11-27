import {
  InterfaceFetchClientInput,
  InterfaceCallback,
  alias,
  fetchClient,
  errorHandling,
  responseFilter
} from '../../';

import { isUndefined, isFunction, filter, isString } from 'lodash';
import paramSet from './paramSet';

export interface InterfacePublicIpInstance {
  findPublicIpInstances( callback: InterfaceCallback ): void;
  createPublicIpInstance(args: { serverInstanceNo?: number | string, publicIpDescription?: string } | InterfaceCallback, callback?: InterfaceCallback ): void;
  attachPublicIpInstance(args: { publicIpInstanceNo?: number | string, serverInstanceNo: number | string, autoCreateIp?: boolean }, callback: InterfaceCallback ): void;
  detachPublicIpInstance(args: { publicIpInstanceNo: number | string }, callback: InterfaceCallback ): void;
  destroyPublicIpInstance(args: { publicIpInstanceNo: number | string }, callback: InterfaceCallback ): void;
}

export function findPublicIpInstances( callback: InterfaceCallback ): void {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'getPublicIpInstanceList',
  };

  fetchClient( {}, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpList = responseFilter(response.data.getPublicIpInstanceListResponse.publicIpInstanceList[0], 'publicIpInstance')
        .map( publicIpInstance=>{
          if ( publicIpInstance.serverInstanceAssociatedWithPublicIp && !isString(publicIpInstance.serverInstanceAssociatedWithPublicIp) ) {
            publicIpInstance.serverInstanceAssociatedWithPublicIp =
              alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['findPublicIpInstances'].response_alias );
          } else {
            delete publicIpInstance['serverInstanceAssociatedWithPublicIp'];
          }
          return publicIpInstance;
        });

      callback( null, setPublicInstancesReflect(publicIpList) );
    })
    .catch( err=>errorHandling(err, callback));
}


export function createPublicIpInstance(args, callback?: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'createPublicIpInstance',
  };

  let fetchClientInputArgs = args;

  if ( arguments.length === 1 ) {
    fetchClientInputArgs = {};
    callback = arguments[0];
  }

  fetchClient( fetchClientInputArgs, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpInstance = response.data.createPublicIpInstanceResponse.publicIpInstanceList[0].publicIpInstance;

      if ( publicIpInstance.serverInstanceAssociatedWithPublicIp ) {
        publicIpInstance.serverInstanceAssociatedWithPublicIp =
          alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['createPublicIpInstance'].response_alias );
      }

      callback( null, publicIpInstance );
    })
    .catch( err=>errorHandling(err, callback));
}

let attachPublicIpInstanceJobs = 0;
export function attachPublicIpInstance( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'associatePublicIpWithServerInstance',
  };

  const { autoCreateIp = true, ...rest } = args;

  if ( rest.publicIpInstanceNo ) {
    fetchClient( rest, requestInfo, this.oauthKey )
      .then( (response) => {
        let publicIpInstance = response.data.associatePublicIpWithServerInstanceResponse.publicIpInstanceList[0].publicIpInstance;

        if ( publicIpInstance.serverInstanceAssociatedWithPublicIp ) {
          publicIpInstance.serverInstanceAssociatedWithPublicIp =
            alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['attachPublicIpInstance'].response_alias );
        }

        callback( null, publicIpInstance );
      })
      .catch( err=>errorHandling(err, callback));
  } else {
    setTimeout(()=>{
      findPublicIpInstances.bind(this)((err, publicIpInstances) => {
        if ( err ) {
          return errorHandling(err, callback);
        }

        const unusedPublicIpInstances = publicIpInstances.filter({publicInstanceStatus: 'created'});

        if ( unusedPublicIpInstances.length > 0 ) {
          const publicIpInstanceNo = unusedPublicIpInstances[0].publicIpInstanceNo;

          fetchClient( {...rest, publicIpInstanceNo }, requestInfo, this.oauthKey )
            .then( (response) => {
              let publicIpInstance = response.data.associatePublicIpWithServerInstanceResponse.publicIpInstanceList[0].publicIpInstance;

              if ( publicIpInstance.serverInstanceAssociatedWithPublicIp ) {
                publicIpInstance.serverInstanceAssociatedWithPublicIp =
                  alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['attachPublicIpInstance'].response_alias );
              }

              callback( null, publicIpInstance );
            })
            .catch( err=>errorHandling(err, callback));
        } else if ( autoCreateIp ){
          createPublicIpInstance.bind(this)({serverInstanceNo: args.serverInstanceNo }, callback);
        } else {
          errorHandling(new Error('Error: There is no available public ip instance. Create public ip instance and then retry.'), callback);
        }// end if

        attachPublicIpInstanceJobs--;
      }) // end findPublicIpInstances
    }, attachPublicIpInstanceJobs * 3000 );

    attachPublicIpInstanceJobs++;
  } // end if
}

export function detachPublicIpInstance( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'disassociatePublicIpFromServerInstance',
  };

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpInstance = response.data.disassociatePublicIpFromServerInstanceResponse.publicIpInstanceList[0].publicIpInstance;

      if ( publicIpInstance.serverInstanceAssociatedWithPublicIp ) {
        publicIpInstance.serverInstanceAssociatedWithPublicIp =
          alias(publicIpInstance.serverInstanceAssociatedWithPublicIp, paramSet['detachPublicIpInstance'].response_alias );
      }

      callback( null, publicIpInstance );
    })
    .catch( err=>errorHandling(err, callback));
}

export function destroyPublicIpInstance( args, callback: InterfaceCallback ) {
  const requestInfo: InterfaceFetchClientInput = {
    ...this.defaultRequestInfo,
    requestAction: 'deletePublicIpInstances',
  };

  args = alias( args, paramSet['destroyPublicIpInstance'].request_alias);

  fetchClient( args, requestInfo, this.oauthKey )
    .then( (response) => {
      let publicIpInstance = response.data.deletePublicIpInstancesResponse.publicIpInstanceList[0].publicIpInstance;

      callback( null, publicIpInstance );
    })
    .catch( err=>errorHandling(err, callback));
}

function setPublicInstancesReflect( publicInstanceList ) {

  Reflect.defineProperty( publicInstanceList, 'filter', {
    get: ()=>{
      return function( args: { publicInstanceStatus: string }) {
        if ( isUndefined( args ) ) {
          return publicInstanceList;
        }

        if ( isFunction(args) ) {
          return [...publicInstanceList].filter( args as any );
        }

        const { publicInstanceStatus } = args;

        if ( !publicInstanceStatus || ( publicInstanceStatus!=='created' && publicInstanceStatus !=='used') ) {
          throw new Error('Invalid Argument: \'publicInstanceStatus\' must be in argument and either \'created\' or \'used\'.')
        }

        return filter( publicInstanceList, ( publicInstance ) => {
          return (publicInstance.publicIpInstanceStatusName === publicInstanceStatus);
        })
      }
    }
  });

  return publicInstanceList;
}
