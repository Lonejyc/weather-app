#!/bin/bash
set -e

# Install dependencies
npm ci

# Build the project
npm run build

# Optional: Backup previous deployment
mkdir -p backup
cp -r public_html backup/dist_$(date +"%Y%m%d_%H%M%S")

# Deploy to web server directory
rm -rf /home/marciljo/public_html
cp -r /home/marciljo/weather-app/public_html /home/marciljo/public_html

# Restart web server if needed
# sudo systemctl restart nginx