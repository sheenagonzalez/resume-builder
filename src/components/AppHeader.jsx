function AppHeader(appDetails) {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="heading">{appDetails.appTitle}</h1>
        <p className="description">{appDetails.appDescription}</p>
      </div>
    </div>
  )
}

export default AppHeader;