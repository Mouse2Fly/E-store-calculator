#!/usr/bin/env python3
import http.server
import socketserver
import os
import socket
import time

PORT = 5000
DIRECTORY = "."

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

Handler = MyHTTPRequestHandler

class ReuseAddrTCPServer(socketserver.TCPServer):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEPORT, 1)
        self.socket.bind(self.server_address)
        self.server_address = self.socket.getsockname()

max_retries = 5
for attempt in range(max_retries):
    try:
        httpd = ReuseAddrTCPServer(("0.0.0.0", PORT), Handler)
        print(f"Server running at http://0.0.0.0:{PORT}/")
        print(f"Serving files from: {os.path.abspath(DIRECTORY)}")
        httpd.serve_forever()
        break
    except OSError as e:
        if e.errno == 98 and attempt < max_retries - 1:
            print(f"Port {PORT} in use, waiting 2 seconds... (attempt {attempt + 1}/{max_retries})")
            time.sleep(2)
        else:
            raise
