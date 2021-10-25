#!/bin/bash

NO_TESTS=${1:-'--tests'}
DFLAGS="--allow-read"

if [ $NO_TESTS == "--no-tests" ]; then
    deno run $DFLAGS ./problem0-solution-raafat-turki.ts
else
    deno test $DFLAGS ./problem0-solution-raafat-turki.ts
fi
