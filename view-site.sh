#!/bin/bash
# Launches a live local preview of joaquin-portfolio-aerospace.
# Run it, wait for the "Local:" URL, and press Ctrl+C to stop.

cd "$(dirname "${BASH_SOURCE[0]}")" || exit 1

echo "Starting joaquin-portfolio-aerospace dev server..."
echo "Press Ctrl+C to stop."
echo

exec ./node_modules/.bin/vite --open
