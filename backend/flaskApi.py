from flask import Flask, request, jsonify
from flask_cors import CORS
import argparse







def main(args):
    print('In CandyPopMedia flasApi.py main() ...')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', help='Port to start flask api on', type=int)
    parser.add_argument('-um', '--update_mode', action='store_true', help='Update loaded media when change occurs in media dirs')
    args = parser.parse_args()
    main(args)