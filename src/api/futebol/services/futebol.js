'use strict';

/**
 * futebol service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::futebol.futebol');
