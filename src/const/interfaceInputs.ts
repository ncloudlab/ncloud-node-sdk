export interface InterfaceIaaSServerGetServerImageProductListInput {
  platformTypeCodeList?: string[];
  regionNo?: string;
}

export interface InterfaceIaaSServerGetServerProductListInput {
  serverImageProductCode: string;
  regionNo?: string;
  zoneNo?: string;
}

export interface InterfaceCreateNasVolumeInstanceInput {
  volumeName: string;
  volumeSize: string;
  volumeAllotmentProtocolTypeCode: string;
  serverInstanceNoList?: string[];
  customIpList?: string[];
  cifsUserName?: string;
  cifsUserPassword?: string;
  nasVolumeDescription?: string;
  regionNo?: string;
  zoneNo?: string;
}

export interface InterfaceDeleteNasVolumeInstanceInput {
  nasVolumeInstanceNo: string;
}

export interface InterfaceGetNasVolumeInstanceListInput {
  volumeAllotmentProtocolTypeCode?: string;
  isEventConfiguration?: boolean;
  isSnapshotConfiguration?: boolean;
}

export interface InterfaceChangeNasVolumeSize {
  nasVolumeInstanceNo: string;
  volumeSize: string;
}