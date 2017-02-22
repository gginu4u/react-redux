/**
 * Created by ginugopinath on 29/01/17.
 */

import * as types from './actionTypes';

export function createCourse (course){
  return {type:types.CREATE_COURSE, course};
}
