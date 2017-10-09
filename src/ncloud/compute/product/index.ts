import {
  InterfaceRequestInfo,
  InterfaceCallback,
  alias,
  errorHandling
} from '../../';

import axios from 'axios';
import * as url from 'url';
import { isArray } from 'lodash';
import paramSet from './paramSet';

export interface InterfaceFindFlavorsInput {
  vmImageId: string;
}
export interface InterfaceProduct {
  findPublicImages( callback: InterfaceCallback ): void;
  findPrivateImages( callback: InterfaceCallback ): void;
  findFlavors( args: /**InterfaceFindFlavorsInput**/{ vmImageId: string }, callback: InterfaceCallback ): void;
}

export function findPublicImages( callback: InterfaceCallback ): void {
  const self = this;

  const requestInfo: InterfaceRequestInfo = {
  requestMethod: 'GET',
  requestUrl: self.requestUrl,
  requestAction: 'getServerImageProductList',
  };

  const queryString: string = self.oauth.getQueryString( {}, paramSet['findPublicImages'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getServerImageProductListResponse.returnCode !== 0){
      callback( new Error( response.data.getServerImageProductListResponse.returnMessage), null );
    }else{
      callback( null, alias( response.data.getServerImageProductListResponse.productList[0].product,
        paramSet[ 'findPublicImages' ].response_alias )
      );
    }
  })
    .catch( err=>errorHandling(err, callback));
}

export function findPrivateImages( callback: InterfaceCallback ): void {

  const self = this;

  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: self.requestUrl,
    requestAction: 'getMemberServerImageList',
  };

  const queryString: string = self.oauth.getQueryString( {}, paramSet['findPrivateImages'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getMemberServerImageListResponse.returnCode !== 0){
      callback( new Error(response.data.getMemberServerImageListResponse.returnMessage ), null);
    } else {
      let { memberServerImage: privateImageList=[] } = response.data.getMemberServerImageListResponse.memberServerImageList[0];
      if ( !isArray( privateImageList )  ) {
        privateImageList = [ privateImageList ];
      }

      privateImageList = alias( privateImageList, paramSet['findPrivateImages'].response_alias );

      callback( null, privateImageList );
    }

  })
    .catch( err=>errorHandling(err, callback));
}

export function findFlavors( args: InterfaceFindFlavorsInput, callback: InterfaceCallback ): void {
  const self = this;
  const requestInfo: InterfaceRequestInfo = {
    requestMethod: 'GET',
    requestUrl: self.requestUrl,
    requestAction: 'getServerProductList',
  };

  args = alias( args, paramSet[ 'findFlavors' ].request_alias );
  const queryString: string = self.oauth.getQueryString( args, paramSet['findFlavors'], requestInfo );

  axios.get(
    url.resolve( requestInfo.requestUrl, `?${queryString}`)
  ).then( function(response){

    if( response.data.getServerProductListResponse.returnCode  !== 0){
      callback( new Error( response.data.getServerProductListResponse.returnMessage ), null );
    }else{
      callback( null, alias(response.data.getServerProductListResponse.productList[0].product,
        paramSet[ 'findFlavors' ].response_alias )
      );
    }
  })
    .catch( err=>errorHandling(err, callback));

}
