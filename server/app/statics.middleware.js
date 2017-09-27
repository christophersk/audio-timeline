'use strict'

const express = require('express');
const router = express.Router();
const path = require('path');

var rootPath = path.join(__dirname, '..', '..');
var browserPath = path.join(rootPath, 'client');
var buildPath = path.join(rootPath, 'build');
var nodeModulesPath = path.join(rootPath, 'node_modules');
const soundPath = path.join(rootPath, 'sounds');

// router.use(express.static(rootPath));
router.use(express.static(browserPath));
router.use(express.static(buildPath));
router.use(express.static(nodeModulesPath));
router.use(express.static(soundPath));

module.exports = router;
