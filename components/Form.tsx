import React from "react";

const Form = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-serif text-4xl md:text-5xl text-center md:text-center lg:text-left font-semibold text-foreground mb-6">
            Ready to Join?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Membership is open to female law students and young legal
            professionals who want to grow academically, professionally, and
            personally.
          </p>
          <ul className="space-y-3 md:px-8">
            {[
              "Female law students at Haramaya University",
              "Young legal professionals starting their careers",
              "Individuals passionate about leadership, advocacy, and women's rights",
              "Supporters of gender equality in law",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-foreground"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-border px-8 py-5">
          <h3 className="font-serif text-3xl font-semibold text-foreground mb-6 text-center">
            Join us now
          </h3>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <input
                placeholder="Email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <input
                placeholder="HU ID No."
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Faculty/Department"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <input
                placeholder="Year of Study"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
