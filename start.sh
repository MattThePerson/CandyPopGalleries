#!/bin/bash

# server ports
HTTP_SERVER_PORT=8002
FLASK_API_PORT=5000

# Navigate to project directory
PROJECT_DIR=$(dirname "$0")
cd "$PROJECT_DIR"


# Function to start the servers
start_servers() {

    # Create and activate virtual environment (if not already done)
    if [ ! -d ".venv" ]; then
        echo
        echo "[VENV] Creating virtual environment..."
        python3 -m venv .venv
    fi
    source .venv/bin/activate
    pip install -r requirements.txt

    # Start HTTP server for frontend
    cd frontend
    echo
    echo "[HTTP Server] Starting HTTP server for frontend on port $HTTP_SERVER_PORT ..."
    python3 -m http.server $HTTP_SERVER_PORT &
    HTTP_SERVER_PID=$!
    cd ..

    # Add a small delay to prevent printout mixing
    sleep 0.5

    # Start Flask API
    echo
    echo "[Flask API] Starting Flask API on port $FLASK_API_PORT..."
    python3 backend/flaskApi.py --port $FLASK_API_PORT "$@" &
    FLASK_API_PID=$!
}

# Function to restart the servers
restart_servers() {
    echo "Restarting servers..."
    
    # Kill the existing processes
    kill $HTTP_SERVER_PID $FLASK_API_PID
    
    # Wait for the servers to shut down completely
    wait $HTTP_SERVER_PID $FLASK_API_PID
    
    # Start the servers again
    start_servers
}

# Function to stop the servers
stop_servers() {
    echo "Shutting down servers..."
    kill $HTTP_SERVER_PID $FLASK_API_PID
}


# Function to handle cleanup on exit (e.g., Ctrl+C)
cleanup() {
  echo "Cleanup: Shutting down servers..."
  kill $HTTP_SERVER_PID $FLASK_API_PID
  exit 0
}

# Trap SIGINT (Ctrl+C) and cleanup
trap cleanup SIGINT

# Start the servers initially
start_servers

# Interactive command loop
while true; do
    echo
    echo "Enter command (type 'restart' to restart the servers, 'exit' to quit):"
    read user_command
    
    case $user_command in
        restart)
            restart_servers
            ;;
        exit)
            stop_servers
            echo "Exiting..."
            exit 0
            ;;
        *)
            echo "Unknown command: $user_command"
            ;;
    esac
done
