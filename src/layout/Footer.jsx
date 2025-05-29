export function Footer() {
    return (
      <footer className="page-footer deep-purple">
        <div className="footer-copyright">
          <div className="container">
            by Sw1tchBlade © {new Date().getFullYear()} 
            <a className="grey-text text-lighten-4 right" href="#!">
              Repository
            </a>
          </div>
        </div>
      </footer>
    );
  }