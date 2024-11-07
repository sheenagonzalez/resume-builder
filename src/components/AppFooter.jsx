function AppFooter(copyrightDetails) {
  return (
    <div className="copyright">
      <p className="copyright-text">Copyright &copy; {copyrightDetails.holderName}, {copyrightDetails.year}.</p>
    </div>
  );
}

export default AppFooter;