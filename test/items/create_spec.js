/* global api, describe, it, expect, beforeEach */

const { itemData, userData } = require('../mock_data.js')

const Item = require('../../models/item')
const Creator = require('../../models/creator')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')
