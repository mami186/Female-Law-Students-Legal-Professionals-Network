import React from "react";

const Activity = () => {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Key Activities
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our impactful programs and initiatives
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Resilient Women Campaign",
              subtitle: "My Right, My Voice, My Space",
            },
            {
              title: "Anti-Violence Campaign",
              subtitle: "Say No to Violence Against Women & Girls",
            },
            {
              title: "3rd General Assembly",
              subtitle: "EWHRDN Participation",
            },
            {
              title: "Student Programs",
              subtitle: "Welcome & Farewell Events",
            },
            {
              title: "Pre-Department Orientation",
              subtitle: "Guidance for New Students",
            },
            {
              title: "16 Days of Activism",
              subtitle: "Against Gender-Based Violence",
            },
            {
              title: "Warka Wellness Session",
              subtitle: "Mental Health & Wellbeing",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <h4 className="font-serif text-xl font-semibold text-foreground mb-1">
                {activity.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {activity.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Activity;
