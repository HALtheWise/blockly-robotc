/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 * and 2014 Massachusetts Institute of Technology
 * http://zerorobotics.org/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating C++ for text blocks. Modified from the standard Blockly JavaScript generator. 
 * @author fraser@google.com (Neil Fraser), dininno@mit.edu (Ethan DiNinno)
 */
'use strict';

goog.provide('Blockly.RobotC.text');

goog.require('Blockly.RobotC');


Blockly.RobotC['text'] = function(block) {
	// Text value.
	var code = Blockly.RobotC.quote_(block.getFieldValue('TEXT'));
	return [code, Blockly.RobotC.ORDER_ATOMIC];
};



Blockly.RobotC['debug'] = function(block) {
	// Print statement.
	var argument0 = Blockly.RobotC.valueToCode(block, 'TEXT',
			Blockly.RobotC.ORDER_NONE) || '""';
	return 'DEBUG(( ' + argument0 + ' ));\n';
};