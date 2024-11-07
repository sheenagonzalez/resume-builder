function AppHeader(appDetails) {
  return (
    <div className="app-header">
      <div className="app-hero">
        <h1 className="app-heading">{appDetails.appTitle}</h1>
        <p className="app-description">{appDetails.appDescription}</p>
      </div>
    </div>
  )
}

export default AppHeader;