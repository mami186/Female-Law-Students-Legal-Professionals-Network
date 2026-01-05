
const Header = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-xl font-semibold text-primary">
              FLSN
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#activities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Activities</a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Team</a>
            <a href="#join" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Join</a>
          </div>
          <button className="btn btn-primary">
            Get Involved
          </button>
        </div>
      </nav>
    </>
  )
}
 
export default Header