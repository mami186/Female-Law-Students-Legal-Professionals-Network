
const Team = () => {
  return (
<>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Meet Our Team
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The dedicated leaders driving our mission forward
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "President",
              "Vice President",
              "Secretary",
              "Program Lead",
              "Public Relations",
              "Event Planner & Coordinator",
              "Head of Communication & Media",
              "Head of Resource Allocation",
              "Head of Mentorship & Tutoring"
            ].map((role, index) => (
              <div key={index} className="p-6 bg-purple-light rounded-xl border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground">{role}</h4>
              </div>
            ))}
          </div>
        </div>
</>  )
}

export default Team