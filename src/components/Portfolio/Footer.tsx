export const Footer = () => {
  return (
    <footer className="py-8 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} ML & Data Science Engineer. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};