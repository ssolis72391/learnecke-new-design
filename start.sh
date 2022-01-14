#! /usr/bin/env sh
set -e

PORT=${PORT:-8080}


# Start Serve with live reload
exec serve -s build --listen $PORT