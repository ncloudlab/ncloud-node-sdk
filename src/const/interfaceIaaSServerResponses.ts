export interface InterfaceRegion {
  regionNo: string; // "1",
  regionCode: string; // "KR",
  regionName: string; // "Korea"
}
export interface InterfaceZone {
  zoneNo: string; // "2",
  zoneName: string; // "KR-1",
  zoneCode: string; // "KR-1",
  zoneDescription: string; // "가산 zone",
  regionNo: string; // "1"
}
export interface InterfaceServerInfo {
  serverInstanceNo: string; // "768254",
  serverName: string; // "test001",
  serverDescription: string; // "",
  cpuCount: number; // 1,
  memorySize: number; // 2147483648,
  baseBlockStorageSize: number; // 53687091200,
  platformType: {
    code: string; // "LNX64",
    codeName: string; // "Linux 64 Bit"
  },
  loginKeyName: string; // "mygbcompany",
  isFeeChargingMonitoring: boolean; // true,
  publicIp: string; //  "",
  privateIp: string; //  "10.41.0.121",
  serverImageName: string; //  "centos-7.3-64",
  serverInstanceStatus: {
    code: string; // "RUN",
    codeName: string; //  "Server run state"
  },
  serverInstanceOperation: {
    code: string; //  "NULL",
    codeName: string; //  "Server NULL OP"
  },
  serverInstanceStatusName: string; //  "running",
  createDate: string; // "2018-05-06T19:30:13+0900",
  uptime: string; //  "2018-05-06T19:32:52+0900",
  serverImageProductCode: string; //  "SPSW0LINUX000046",
  serverProductCode: string; //  "SPSVRSSD00000001",
  isProtectServerTermination: boolean; // true,
  portForwardingPublicIp: string; // "106.10.41.149",
  zone: InterfaceZone,
  region: InterfaceRegion,
  baseBlockStorageDiskType: {
    code: string; // "NET",
    codeName: string; // "Network Storage"
  },
  baseBlockStorageDiskDetailType: {
    code: string; //  "SSD",
    codeName: string; //  "SSD"
  },
  internetLineType: {
    code: string; //  "PUBLC",
    codeName: string; //  "PUBLC"
  },
  userData: string; //  "",
  accessControlGroupList: {
    accessControlGroupConfigurationNo: string; //  "42879",
    accessControlGroupName: string; //  "rabbit-mq-tMBq",
    accessControlGroupDescription: string; // "Group for RabbitMQ service 'test' (automatically created)",
    isDefault: boolean // false,
    createDate: string; // "2018-05-06T19:30:12+0900"
  }[]
}

export interface InterfaceMemberServerImage {
  memberServerImageNo: string; //  "7300",
  memberServerImageName: string; // "hello",
  memberServerImageDescription: string; // "hello test",
  originalServerInstanceNo: string; // "768416",
  originalServerProductCode: string; // "SPSVRSSD00000003",
  originalServerName: string; // "test",
  originalBaseBlockStorageDiskType: {
    code: string; // "NET",
    codeName: string; // "Network Storage"
  },
  originalServerImageProductCode: string; // "SPSW0LINUX000046",
  originalOsInformation: string; // "CentOS 7.3 (64-bit)",
  originalServerImageName: string; // "centos-7.3-64",
  memberServerImageStatusName: string; // "creating",
  memberServerImageStatus: {
    code: string; // "INIT",
    codeName: string; // "NSI INIT state"
  },
  memberServerImageOperation: {
    code: string; // "CREAT",
    codeName: string; // "NSI CREAT OP"
  },
  memberServerImagePlatformType: {
    code: string; // "LNX64",
    codeName: string; // "Linux 64 Bit"
  },
  createDate: string; // "2018-05-07T00:38:40+0900",
  region: InterfaceRegion,
  memberServerImageBlockStorageTotalRows: number; // 0,
  memberServerImageBlockStorageTotalSize: number; // 0
}

export interface InterfaceBlockStorageInstance {
  blockStorageInstanceNo: string; // "768417",
  serverInstanceNo: string; // "768416",
  serverName: string; // "test",
  blockStorageType: {
    code: string; // "BASIC",
    codeName: string; // "Basic BS"
  },
  blockStorageName: string; // "test",
  blockStorageSize: number; // 53687091200,
  deviceName: string; // "/dev/xvda",
  blockStorageProductCode: string; // "SPBSTBSTBS000005",
  blockStorageInstanceStatus: {
    code: string; // "ATTAC",
    codeName: string; //  "Block storage ATTACHED state"
  },
  blockStorageInstanceOperation: {
    code: string; // "NULL",
    codeName: string; // "Block Storage NULLOP"
  },
  blockStorageInstanceStatusName: string; // "attached",
  createDate: string; // "2018-05-07T00:26:55+0900",
  blockStorageInstanceDescription: string; // "test's basic storage",
  diskType: {
    code: string; // "NET",
    codeName: string; // "Network Storage"
  },
  diskDetailType: {
    code: string; // "SSD",
    codeName: string; // "SSD"
  },
  maxIopsThroughput: number; // 4000,
  zone: InterfaceZone;
}

export interface InterfaceBlockStorageSnapshotInstance {
  blockStorageSnapshotInstanceNo: string; // "768434",
  blockStorageSnapshotName: string; // "test",
  blockStorageSnapshotVolumeSize: number; // 53687091200,
  originalBlockStorageInstanceNo: string; // "768417",
  originalBlockStorageName: string; // "test",
  blockStorageSnapshotInstanceStatus: {
    code: string; // "INIT",
    codeName: string; // "Block storage INIT state"
  },
  blockStorageSnapshotInstanceOperation: {
    code: string; // "NULL",
    codeName: string; // "Block Storage NULLOP"
  },
  blockStorageSnapshotInstanceStatusName: string; // "initialized",
  createDate: string; // "2018-05-07T01:17:40+0900",
  blockStorageSnapshotInstanceDescription: string; // "",
  serverImageProductCode: string; // "SPSW0LINUX000046",
  osInformation: string; // "CentOS 7.3 (64-bit)"
}

export interface InterfacePublicIpInstance {
  publicIpInstanceNo: string; // "768872",
  publicIp: string; // "106.10.41.178",
  publicIpDescription: string; // "",
  createDate: string; // "2018-05-07T11:22:31+0900",
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  },
  publicIpInstanceStatusName: string; // "created",
  publicIpInstanceStatus: {
    code: string; // "CREAT",
    codeName: string; // "NET CREATE state"
  },
  publicIpInstanceOperation: {
    code: string; // "NULL",
    codeName: string; // "NET NULL OP"
  },
  publicIpKindType: {
    code: string; // "GEN",
    codeName: string; // "General"
  },
  serverInstanceAssociatedWithPublicIp: InterfaceServerInfo; // {},
  zone: InterfaceZone;
}

/** IaaS **/
export interface InterfaceGetServerImageProductListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  productList: {
    productCode: string; // "SPSVRDBAAS000001",
    productName: string; // "vCPU 2EA, Memory 4GB",
    productType: {
      code: string; // "STAND",
      codeName: string; // "Standard"
    },
    productDescription: string; // "vCPU 2EA, Memory 4GB",
    infraResourceType: {
      code: string; // "DBAAS",
      codeName: string; // "Cloud DB"
    },
    cpuCount: number; // 2,
    memorySize: number; // 4294967296,
    baseBlockStorageSize: number; // 53687091200,
    osInformation: string; // "",
    diskType: {
      code: string; // "NET",
      codeName: string; // "Network Storage"
    },
    addBlockStorageSize: number; // 0
  }[]
}
export interface InterfaceGetServerProductListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  totalRows: number;
  productList: {
    productCode: string; // "SPSVRSTAND000056",
    productName: string; // "vCPU 1EA, Memory 1GB, Disk 50GB",
    productType: {
      code: string; // "MICRO",
      codeName: string; // "Micro Server"
    },
    productDescription: string; // "vCPU 1EA, Memory 1GB, Disk 50GB",
    infraResourceType: {
      code: string; // "SVR",
      codeName: string; // "Server"
    },
    cpuCount: number; // 1,
    memorySize: number; // 1073741824,
    baseBlockStorageSize: number; // 53687091200,
    osInformation: string; //  "",
    diskType: {
      code: string; // "NET",
      codeName: string; // "Network Storage"
    },
    addBlockStorageSize: string; // 0
  }[]
}
export interface InterfaceGetZoneListResponse {
  requestId: string;
  returnCode: string;
  returnMessage: string;
  zoneList: InterfaceZone[]
}
export interface InterfaceGetRegionListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  regionList: InterfaceRegion[]
}
export interface InterfaceNasVolumeInstanceListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  nasVolumeInstanceList: {
    nasVolumeInstanceNo: string; // "767717",
    nasVolumeInstanceStatus: {
      code: string; // "CREAT",
      codeName: string; // "NAS create"
    },
    nasVolumeInstanceOperation: {
      code: string; // "NULL",
      codeName: string; // "NAS NULL OP"
    },
    nasVolumeInstanceStatusName: string; // "created",
    createDate: string; // "2018-05-06T02:26:26+0900",
    nasVolumeInstanceDescription: string; // "",
    mountInformation: string; // "10.101.83.37:/n780247_testVol",
    volumeAllotmentProtocolType: {
      code: string; // "NFS",
      codeName: string; // "NFS"
    },
    volumeName: string; // "n780247_testVol",
    volumeTotalSize: number; // 536870912000,
    volumeSize: number; // 536870912000,
    volumeUseSize: number; // 278528,
    volumeUseRatio: number; // 0,
    snapshotVolumeConfigurationRatio: number; // 0,
    snapshotVolumeSize: number; // 0,
    snapshotVolumeUseSize: number; // 0,
    snapshotVolumeUseRatio: number; // 0,
    isSnapshotConfiguration: boolean; // false,
    isEventConfiguration: boolean; // false,
    region: InterfaceRegion,
    zone: InterfaceZone,
    nasVolumeInstanceCustomIpList: {
      customIp: string;
    }[];
    nasVolumeServerInstanceList: InterfaceServerInfo[];
  }[];
}
export interface InterfaceGetNasVolumeInstanceRatingListResponse {
  requestId: string; // 'd2a7f2da-1c16-48bf-8439-afc3a9979c3d',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  NasVolumeInstanceRatingList: {
    ratingTime: string; // '2018-05-06 13:23:10.101',
    volumeSize: number; // 536870912000,
    volumeUseSize: number; // 278528,
    volumeUseRatio: number; // 0,
    snapshotVolumeSize: number; // 0,
    snapshotVolumeUseSize: number; // 0,
    snapshotVolumeUseRatio: number; // 0
  }[]
}
export interface InterfaceGetLoginKeyListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 3,
  loginKeyList: {
    fingerprint: string;
    keyName: string;
    createDate: string;
  }[]
}

export interface InterfaceCreateLoginKeyResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  privateKey: string;
}

export interface InterfaceDeleteLoginKeyResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
}

export interface InterfaceGetAccessControlGroupListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  accessControlGroupList: {
    accessControlGroupConfigurationNo: string; // '5475',
    accessControlGroupName: string; // 'ncloud-default-acg',
    accessControlGroupDescription: string; // 'Default AccessControlGroup',
    isDefault: boolean; // true,
    createDate: string; // '2017-04-14T10:07:06+0900'
  }[]
}

export interface InterfaceGetAccessControlGroupServerInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceGetAccessControlRuleListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  accessControlRuleList: {
    accessControlRuleConfigurationNo: string;
    accessControlRuleDescription: string;
    protocolType: {
      code: string; // "ICMP",
      codeName: string; // "icmp"
    },
    sourceAccessControlRuleConfigurationNo: string;
    sourceAccessControlRuleName: string;
    sourceIp: string;
  }[]
}

export interface InterfaceGetServerInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceCreateServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceStopServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceTerminateServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceChangeServerInstanceSpecResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceRebootServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceStartServerInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number; // 7,
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceGetRootPasswordResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  rootPassword: string;
}

export interface InterfaceGetMemberServerImageListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  memberServerImageList: InterfaceMemberServerImage[];
}

export interface InterfaceCreateMemberServerImageResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  memberServerImageList: InterfaceMemberServerImage[];
}

export interface InterfaceDeleteMemberServerImagesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  memberServerImageList: InterfaceMemberServerImage[];
}

export interface InterfaceGetBlockStorageInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  memberServerImageList: InterfaceMemberServerImage[];
}

export interface InterfaceGetBlockStorageInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

export interface InterfaceCreateBlockStorageInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

export interface InterfaceDeleteBlockStorageInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageInstanceList: InterfaceBlockStorageInstance[];
}

export interface InterfaceGetBlockStorageSnapshotInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  blockStorageSnapshotInstanceList: InterfaceBlockStorageSnapshotInstance[];
}

export interface InterfaceGetPublicIpInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

export interface InterfaceGetPublicIpTargetServerInstanceListResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  serverInstanceList: InterfaceServerInfo[];
}

export interface InterfaceCreatePublicIpInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

export interface InterfaceAssociatePublicIpWithServerInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

export interface InterfaceDisassociatePublicIpFromServerInstanceResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

export interface InterfaceDeletePublicIpInstancesResponse {
  requestId: string; // '66882489-edb1-48ac-8574-4d9c797d4290',
  returnCode: string; // '0',
  returnMessage: string; // 'success',
  totalRows: number;
  publicIpInstanceList: InterfacePublicIpInstance[];
}

export interface InterfaceGetPortForwardingRuleListResponse {
  requestId: string; // "6931fbd5-f9c3-4864-9aa1-61bdee34f761",
  returnCode: string; // "0",
  returnMessage: string; // "success",
  portForwardingConfigurationNo: string; // "23536",
  portForwardingPublicIp: string; // "106.10.41.164",
  zone: InterfaceZone,
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  },
  totalRows: number; // 0,
  portForwardingRuleList: {
    portForwardingExternalPort: number;
    portForwardingInternalPort: number;
    serverInstance: InterfaceServerInfo;
  }[]
}

export interface InterfaceAddPortForwardingRulesResponse {
  requestId: string; // "6931fbd5-f9c3-4864-9aa1-61bdee34f761",
  returnCode: string; // "0",
  returnMessage: string; // "success",
  portForwardingConfigurationNo: string; // "23536",
  portForwardingPublicIp: string; // "106.10.41.164",
  zone: InterfaceZone,
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  },
  totalRows: number; // 0,
  portForwardingRuleList: {
    portForwardingExternalPort: number;
    portForwardingInternalPort: number;
    serverInstance: InterfaceServerInfo;
  }[]
}

export interface InterfaceDeletePortForwardingRulesResponse {
  requestId: string; // "6931fbd5-f9c3-4864-9aa1-61bdee34f761",
  returnCode: string; // "0",
  returnMessage: string; // "success",
  portForwardingConfigurationNo: string; // "23536",
  portForwardingPublicIp: string; // "106.10.41.164",
  zone: InterfaceZone,
  internetLineType: {
    code: string; // "PUBLC",
    codeName: string; // "PUBLC"
  },
  totalRows: number; // 0,
  portForwardingRuleList: {
    portForwardingExternalPort: number;
    portForwardingInternalPort: number;
    serverInstance: InterfaceServerInfo;
  }[]
}

