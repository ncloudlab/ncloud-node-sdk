import {
  InterfaceNcloudIaaSServer,
} from '../const/interface';
import {
  InterfaceCreateServerInstancesInput,
  InterfaceGetNasVolumeInstanceRatingListInput,
} from '../const/interfaceIaaSServerInputs';
import {
  InterfaceCreateServerInstancesResponse,
  InterfaceGetNasVolumeInstanceRatingListResponse,
} from '../const/interfaceIaaSServerResponses';
import generateMethods from '../helpers/generateMethods';
import apiDescription from '../helpers/apiDescription';
import {
  get
} from 'lodash';
import * as moment from 'moment-timezone';

export default class Server implements InterfaceNcloudIaaSServer {
  constructor() {
    Object
      .keys( get(apiDescription, 'apis.IaaS.Server') )
      .forEach( action => {
        (Server as any).prototype[action] = function(input={}) {
          return generateMethods({
            actionPath: `apis.IaaS.Server.${action}`,
            input,
          });
        };
      });
  } // end constructor

  getServerImageProductList: InterfaceNcloudIaaSServer['getServerImageProductList'];
  getServerProductList: InterfaceNcloudIaaSServer['getServerProductList'];
  getZoneList: InterfaceNcloudIaaSServer['getZoneList'];
  getRegionList: InterfaceNcloudIaaSServer['getRegionList'];
  createNasVolumeInstance: InterfaceNcloudIaaSServer['createNasVolumeInstance'];
  deleteNasVolumeInstance: InterfaceNcloudIaaSServer['deleteNasVolumeInstance'];
  getNasVolumeInstanceList:  InterfaceNcloudIaaSServer['getNasVolumeInstanceList'];
  changeNasVolumeSize: InterfaceNcloudIaaSServer['changeNasVolumeSize'];
  getNasVolumeInstanceRatingList(input: InterfaceGetNasVolumeInstanceRatingListInput): Promise<InterfaceGetNasVolumeInstanceRatingListResponse>{
    return (this as any).getNasVolumeInstanceRatingListProto(input)
      .then( responseData => {
        responseData = {
          ...responseData,
          NasVolumeInstanceRatingList: responseData.NasVolumeInstanceRatingList.map((el) => {
            console.log( el.ratingTime );
            return {
              ...el,
              ratingTime: moment.tz(el.ratingTime, 'Asia/Seoul').format('YYYY-MM-DDTHH:mm:ssZZ'),
            }
          })
        };

        return responseData;
      });
  }
  setNasVolumeAccessControl: InterfaceNcloudIaaSServer['setNasVolumeAccessControl'];
  addNasVolumeAccessControl: InterfaceNcloudIaaSServer['addNasVolumeAccessControl'];
  removeNasVolumeAccessControl: InterfaceNcloudIaaSServer['removeNasVolumeAccessControl'];
  getLoginKeyList: InterfaceNcloudIaaSServer['getLoginKeyList'];
  createLoginKey: InterfaceNcloudIaaSServer['createLoginKey'];
  deleteLoginKey: InterfaceNcloudIaaSServer['deleteLoginKey'];
  getAccessControlGroupList: InterfaceNcloudIaaSServer['getAccessControlGroupList'];
  getAccessControlGroupServerInstanceList: InterfaceNcloudIaaSServer['getAccessControlGroupServerInstanceList'];
  getAccessControlRuleList: InterfaceNcloudIaaSServer['getAccessControlRuleList'];
  getServerInstanceList: InterfaceNcloudIaaSServer['getServerInstanceList'];
  createServerInstances(input: InterfaceCreateServerInstancesInput): Promise<InterfaceCreateServerInstancesResponse> {
    if ( get(input, 'userData', false) ) {
      input = {
        ...input,
        userData: Buffer.from(input.userData).toString('base64')
      }
    } // end if

    return (this as any).createServerInstancesProto(input);
  };
  terminateServerInstances: InterfaceNcloudIaaSServer['terminateServerInstances'];
  changeServerInstanceSpec: InterfaceNcloudIaaSServer['changeServerInstanceSpec'];
  rebootServerInstances: InterfaceNcloudIaaSServer['rebootServerInstances'];
  startServerInstances: InterfaceNcloudIaaSServer['startServerInstances'];
  stopServerInstances: InterfaceNcloudIaaSServer['stopServerInstances'];
  getRootPassword: InterfaceNcloudIaaSServer['getRootPassword'];
  getMemberServerImageList: InterfaceNcloudIaaSServer['getMemberServerImageList'];
  createMemberServerImage: InterfaceNcloudIaaSServer['createMemberServerImage'];
  deleteMemberServerImages: InterfaceNcloudIaaSServer['deleteMemberServerImages'];
  getBlockStorageInstanceList: InterfaceNcloudIaaSServer['getBlockStorageInstanceList'];
  createBlockStorageInstance: InterfaceNcloudIaaSServer['createBlockStorageInstance'];
  deleteBlockStorageInstances: InterfaceNcloudIaaSServer['deleteBlockStorageInstances'];
  getBlockStorageSnapshotInstanceList: InterfaceNcloudIaaSServer['getBlockStorageSnapshotInstanceList'];
  getPublicIpInstanceList: InterfaceNcloudIaaSServer['getPublicIpInstanceList'];
  getPublicIpTargetServerInstanceList: InterfaceNcloudIaaSServer['getPublicIpTargetServerInstanceList'];
  createPublicIpInstance: InterfaceNcloudIaaSServer['createPublicIpInstance'];
  associatePublicIpWithServerInstance: InterfaceNcloudIaaSServer['associatePublicIpWithServerInstance'];
  disassociatePublicIpFromServerInstance: InterfaceNcloudIaaSServer['disassociatePublicIpFromServerInstance'];
  deletePublicIpInstances: InterfaceNcloudIaaSServer['deletePublicIpInstances'];
  getPortForwardingRuleList: InterfaceNcloudIaaSServer['getPortForwardingRuleList'];
  addPortForwardingRules: InterfaceNcloudIaaSServer['addPortForwardingRules'];
  deletePortForwardingRules: InterfaceNcloudIaaSServer['deletePortForwardingRules'];

  createVM() {

  }
}
