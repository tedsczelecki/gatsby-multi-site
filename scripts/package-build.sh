#!/bin/sh

lerna bootstrap

lerna run build --scope=@tedsczelecki/base-theme
