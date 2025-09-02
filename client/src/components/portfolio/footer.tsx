export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0" data-testid="footer-copyright">© 2025 Chakresh Doddi. All rights reserved.</div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="footer-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="footer-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
