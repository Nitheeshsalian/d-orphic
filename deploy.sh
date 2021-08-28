#!/bin/bash

echo "Building project"

# Open new project in VS Code
npm run build

echo "Building successfull"
echo "-------------------------------------------"
echo "Copying build folder"
echo "-------------------------------------------"

# Copy 
cp /home/nitheesh/workspace/d-orphic/public/*  /home/nitheesh/workspace/firebase/public

echo "Deploying project"

echo "-------------------------------------------"

cd /home/nitheesh/workspace/firebase

#deploy
firebase deploy

echo "Deploying successfull"
echo "**************************************************************************"
echo "***************************@nitheeshsalian********************************"
echo "**************************************************************************"
