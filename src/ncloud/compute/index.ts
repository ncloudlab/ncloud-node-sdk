import {
  InterfaceOauthKey,
  InterfaceCallback,
  Oauth,
  Validator,
} from '../';

import * as product from './product';
import * as zone    from './zone';
import * as loginKey from './loginKey';
import * as serverInstance from './serverInstance';
import * as accessControlGroup from './accessControlGroup';

export interface InterfaceCompute
  extends
    product.InterfaceProduct,
    zone.InterfaceZone,
    loginKey.InterfaceLoginKey,
    serverInstance.InterfaceServerInstance,
    accessControlGroup.InterfaceAccessControlGroup
{ }

export class Compute implements InterfaceCompute {
  private oauth: Oauth;
  private validator: Validator;
  private requestUrl: string;

  constructor (  oauthKey: InterfaceOauthKey ) {
    this.oauth = new Oauth( oauthKey );
    this.validator = new Validator();
    this.requestUrl = 'https://api.ncloud.com/server/';
  };

  findImages ( callback: InterfaceCallback ) { product.findImages.bind(this).apply( this, arguments ); }
  findFlavors( args:product.InterfaceFindFlavorsInput, callback: InterfaceCallback ) {
    product.findFlavors.bind(this).apply( this, arguments); }

  findZones( callback: InterfaceCallback ){
    zone.findZones.bind(this).apply( this, arguments ); }

  findLoginKeys( callback: InterfaceCallback ){
    loginKey.findLoginKeys.bind(this).apply( this, arguments );
  }
  createLoginKey( arg: loginKey.InterfaceCreateLoginKeyInput, callback: InterfaceCallback ){
    loginKey.createLoginKey.bind(this).apply( this, arguments );
  }

  findAccessControlGroup( callback: InterfaceCallback ){
    accessControlGroup.findAccessControlGroup.bind(this).apply( this, arguments );
  }

  findServers( callback:InterfaceCallback ){
    serverInstance.findServers.bind(this).apply( this, arguments );
  }

}

