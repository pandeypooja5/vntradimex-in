"""Local dev server that disables browser caching."""
import http.server
import socketserver

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("127.0.0.1", 8000), NoCacheHandler) as httpd:
        print("Serving at http://localhost:8000 (caching disabled)")
        httpd.serve_forever()
