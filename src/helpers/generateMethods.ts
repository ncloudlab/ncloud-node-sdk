import apiDescription from './apiDescription';
import fetchClient from './fetchClient';
import {
  get,
  includes,
  isString,
  isNumber,
  isBolean,
  isArray,
  isUndefined,
} from 'lodash';
import {
  InterfaceAuthParams,
} from '../const/interface'
import {
  getAuthParams,
  getValues,
} from './store';

const {
  baseURL: apiGwBaseURL,
} = apiDescription;

export default function(
  {
    baseURL=apiGwBaseURL,
    actionPath,
    input,
  }: {
    baseURL?: string;
    actionPath: string;
    input: any;
  }
) {
  const authParams: InterfaceAuthParams = getAuthParams();

  const {
    method,
    action,
    basePath,
    actionParamList={},
    responseName,
  } = get(apiDescription, actionPath);

  input = {
    ...input,
    ...getValues(),
  };

  return testInputParams(
    {
      input,
      action,
      actionParamList,
    }
  ).then(async () => {
    return await getActionParams({
      input,
      actionParamList
    })
  }).then((actionParams) => {
    return fetchClient({
      method,
      baseURL,
      action,
      basePath,
      actionParams,
      authParams,
    })
    // .then(response=>{ console.log( response.data ); return response;})
      .then(response => {
        if ( isUndefined(responseName) ) {
          return response.data;
        } else {
          return get(response.data, responseName)
        }
      });
  })
};

function testInputParams(
  {
    input,
    action,
    actionParamList,
  }
) {
  return new Promise((resolve, reject) => {
    try {
      const inputObjectKeys = Object.keys( input );
      const actionParamsListObjectKeys = Object.keys( actionParamList );

      if ( actionParamsListObjectKeys.length === 0 ) {
        return resolve();
      } // end if

      actionParamsListObjectKeys.forEach((actionParamKey) => {
        const required = get(actionParamList[actionParamKey], 'required', false);

        if ( required && ! get( input, actionParamKey, false ) ) {
          throw new Error(`Parameter Missing: ${ actionParamKey } @${ action } method`);
        } // end if
      });

      inputObjectKeys.forEach( (inputKey) => {
        if ( ! includes( actionParamsListObjectKeys, inputKey ) ) {
          throw new Error(`Invalid Input: ${ inputKey } @${ action } method`);
        } // end if

        const type = get(actionParamList, `${inputKey}.type`);

        switch (type) {
          case 'string': {
            if ( !isString(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method.\n`+
                `${ inputKey } type must be a string.`);
            } // end if

            const expectedList = get(actionParamList, `${inputKey}.enum`, false);

            if ( expectedList && ! includes( expectedList, input[ inputKey ] ) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method.\n`+
                `${ inputKey } must be one of items in ${ JSON.stringify( expectedList )}`);
            } // end if

            break;
          }
          case 'string[]': {
            if ( ! isArray(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method.\n`+
                `${ inputKey } must be string[].`
              );
            } // end if

            input[ inputKey ].forEach((el) => {
              if ( !isString(el) ) {
                throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method.\n`+
                  `${ inputKey } must be string[].`);
              } // end if
            });
            break;
          }
          case 'number': {
            if ( !isNumber(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method.\n`+
                `${ inputKey } must be number.`);
            } // end if

            break;
          }
          case 'boolean': {
            if ( !isBolean(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method.\n`+
                `${ inputKey } must be boolean.`);
            } // end if

            break;
          }
          case 'any[]': {
            if ( ! isArray(input[ inputKey ]) ) {
              throw new Error(`Invalid Input Type: ${ inputKey } @${ action } method.\n`+
                `${ inputKey } must be an array.`);
            } // end if

            break;
          }
        } // end switch
      }); // end forEach

      resolve();
    } catch (e) {
      reject(e);
    } // end try ~ catch
  })
}

function getActionParams(
  {
    input,
    actionParamList,
  }
) {
  return new Promise((resolve, reject) => {
    try {
      const actionParams = Object
        .keys( input )
        .reduce(( prev, key ) => {
          if ( isArray( input[key] )) {

            const format = get(actionParamList, `${key}.replace`, false);

            if ( get(actionParamList, `${key}.type`) === 'any[]' && format ){
              input[key].forEach((innerObj, idx) => {

                const items = Object.keys(innerObj).reduce((innerPrev, innerObjItemKey) => {
                  innerPrev = {
                    ...innerPrev,
                    [format.replace('%d', idx + 1).replace('%s', innerObjItemKey)]: innerObj[innerObjItemKey],
                  };

                  return innerPrev;
                }, {});

                prev = { ...prev, ...items };
              });
            } else {
              input[key].forEach((el, idx) => {
                prev = { ...prev, [`${ key }.${ idx + 1 }`]: el };
              });
            } // end if
          } else {
            prev = { ...prev, [key]: input[key] }
          } // end if

          return prev;
        }, {});

      resolve( actionParams );
    } catch (e) {
      reject(e);
    } // end try ~ catch
  })
}
