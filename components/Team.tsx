import Image from "next/image";

const Team = () => {
  const team = [
    {
      role: "Founder",
      image: "/founder .jpg",
    },
    {
      role: "President",
      image: "/President.jpg",
    },
    {
      role: "Vice President",
      image: "/vice president.jpg",
    },
  ];

  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The dedicated leaders driving our mission forward
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-primary/5 aspect-3/4"
            >
              <Image
                src={member.image}
                alt={member.role}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-white">
                  {member.role}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-4xl font-semibold text-foreground mb-8 text-center">
            Executives
          </h3>
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              {
                role: "Secretary",
                image: "/secretary.jpg",
              },
              {
                role: "Program Lead",
                image: "/program leader.jpg",
              },
              {
                role: "Public Relations",
                image: "/public relations.jpg",
              },
              {
                role: "Event Planner",
                image: "/event planner.jpg",
              },
              {
                role: "Head of Comms",
                image: "/head of communication and media.jpg",
              },
              {
                role: "Resource Allocation",
                image: "/head of resource allocation.jpg",
              },
              {
                role: "Mentorship & Tutoring",
                image: "/head of mentorship and training.jpg",
              },
              {
                role: "Event Coordinator",
                image: "/event coordinator.jpg",
              },
              {
                role: "Cinematogripher",
                image: "/cinimatogropher.JPEG",
              },
            ].map((exec, index) => (
              <div
                key={index}
                className="min-w-[45%] md:min-w-[19%] snap-center group relative overflow-hidden rounded-xl border border-border bg-primary/5 aspect-3/4 shrink-0"
              >
                <Image
                  src={exec.image}
                  alt={exec.role}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-sm font-semibold text-white leading-tight">
                    {exec.role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
