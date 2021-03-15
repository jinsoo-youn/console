#!/usr/bin/env bash
set -e

deepcopy-gen -v 2 -h boilerplate.txt --bounding-dirs . -i github.com/lt90s/deepcopy-gen-demo/types -O generated_deepcopy

mv github.com/lt90s/deepcopy-gen-demo/types/generated_deepcopy.go ./pkg/api/v1

rm -rf github.com