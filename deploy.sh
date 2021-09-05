#!/bin/bash

echo "Building project"

# Open new project in VS Code
npm run build

echo "Building successfull"
echo "-------------------------------------------"
echo "Copying build folder"
echo "-------------------------------------------"

# Copy 
cp -r /home/nitheesh/workspace/d-orphic/build/.  /home/nitheesh/workspace/firebase/public

echo "Deploying project"

echo "-------------------------------------------"

cd /home/nitheesh/workspace/firebase

#deploy
firebase deploy

echo "Deploying successfull"
echo "**************************************************************************"
echo "***************************@nitheeshsalian********************************"
echo "**************************************************************************"
