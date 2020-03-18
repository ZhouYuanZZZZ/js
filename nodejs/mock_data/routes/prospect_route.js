const express = require('express');
const router = express.Router();
const logger = require("../log/log_conf");


router.post('/get_prospect_by_id',function (req,res,next) {

    console.log('prospect id');

    logger.info('url:{0} end'.format(req.url));

});

module.exports = router;
