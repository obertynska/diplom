'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill'

import elementClosest from 'element-closest';
elementClosest(window);

/*импорт*/
//pop up

import popUpDo from './modules/popUpDo';



/*вызов*/
//pop up

popUpDo();

