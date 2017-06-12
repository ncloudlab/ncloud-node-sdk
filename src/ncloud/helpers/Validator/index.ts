import * as validator from 'validator';
import * as ip from 'ip';

export class Validator {

  public invalidParameterChecker ( args_object, paramSet, callback ){
    const param = paramSet.param;

    const invalidParam = Object.keys(args_object).map( function(el){
      return (<any>param).map( function(el){
        if( el.indexOf('|') > 0 ){
          return el.split('|')[0];
        }else
          return el;
      }).includes( el ) === false ? el : null;
    }).filter( function(el){
      return el !== null;
    }).join(',');

    if( invalidParam.length >0 ){
      callback( new Error( 'Invalid Parameters : ' + invalidParam));
      return true;
    }else{
      return false;
    }
  }; // public invalidParameterChecker

  public requiredParamChecker ( args_object, param_set, callback ){
    const param_required_array = param_set.required || [];
    const param_array = param_set.param;

    const not_exist_required_param = this.isRequiredParamExist(args_object, param_required_array);
    if( not_exist_required_param.length >0 ) {
      callback(new Error('The following parameters should be defined : ' + not_exist_required_param));
      return true;
    }

    const out_bound_parameters = this.isParamOutOfBound( args_object, param_array );
    if( out_bound_parameters.length >0 ){
      callback(new Error('The following parameters should be inbound : ' + out_bound_parameters));
      return true;
    }

    return false;
  };

  public isInvalidIP( ipTarget: string, callback ){
    if( !validator.isIP( ipTarget ) ){
      callback( new Error('Invalid IP'));
      return true;
    }

    if( ip.isPrivate( ipTarget) ){
      callback( new Error('Private IP Cannot be used for generating request'));
      return true;
    }

    return false;
  }

  private isRequiredParamExist(args_object, param_required_array){
    return param_required_array.reduce( function( prev, curr){
      if( !(<any>Object).keys(args_object).includes( curr ) ){
        prev = prev.concat( curr );
      }
      return prev;
    }, [])
      .join(',');
  }

  private isParamOutOfBound(args_object, param_array){
    return param_array.reduce( function(prev, curr){
      if( curr.indexOf('|') >0 ){
        prev = prev.concat({ name: curr.split('|')[0], maxItems: curr.split('|')[1].split(':')[0]==='maxItems'? parseInt( curr.split('|')[1].split(':')[1] ):null });
      }
      return prev;
    }, [])
      .reduce( function(prev, curr){
        if( isNaN(curr.maxItems) ){
          prev = prev.concat( curr.name + ' must be integer');
        }else if( (<any>Object).keys(args_object).includes(curr.name) && args_object[ curr.name ].length > curr.maxItems){
          prev = prev.concat( 'The number of \`' + curr.name + '\` is out of bound ' + curr.maxItems );
        }
        return prev;
      }, [])
      .join(',');
  }
}