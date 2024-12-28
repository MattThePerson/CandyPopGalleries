#!/bin/bash

UTILITY_NAME=cpop-gall



# Navigate to project directory
PROJECT_DIR="$(dirname "$(dirname "$(readlink -f "$0")")")"
cd "$PROJECT_DIR"

# Create and activate virtual environment (if not already done)
if [ ! -d "backend/.venv" ]; then
    echo
    echo "[VENV] Creating virtual environment..."
    python3 -m venv backend/.venv
fi
source backend/.venv/bin/activate
pip install -r requirements.txt
deactivate

chmod +x tools/run.sh
echo
echo "To make symbolic link run:"
echo
echo "    sudo ln -fs "$(realpath tools/run.sh)" /usr/local/bin/$UTILITY_NAME"
echo
echo "Then you'll have a CL utility called '$UTILITY_NAME'"
echo
