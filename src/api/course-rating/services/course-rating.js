'use strict';

/**
 * course-rating service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-rating.course-rating');
