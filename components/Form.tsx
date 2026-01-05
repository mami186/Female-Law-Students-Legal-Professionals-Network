import React from "react";

const Form = () => {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-4xl md:text-5xl font-semibold text-black mb-6">
              Ready to Join?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Membership is open to female law students and young legal
              professionals who want to grow academically, professionally, and
              personally.
            </p>
            <ul className="space-y-3">
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

          <div className="px-8 bg-background rounded-2xl border border-border">
            <section id="join" className="px-24 py-6 ">
              <div className="container mx-auto max-w-2xl text-center">
                <h3 className="font-serif text-4xl md:text-5xl font-semibold  mb-4">
                  Join us now
                </h3>

                <div className="bg-background rounded-2xl p-8">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input
                      placeholder="Full Name"
                      className="input input-bordered"
                    />
                    <input
                      placeholder="Email"
                      type="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input
                      placeholder="Phone Number"
                      className="input input-primary"
                    />
                    <input
                      placeholder="HU ID No."
                      className="input input-primary"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <input
                      placeholder="Faculty/Department"
                      className="input input-primary"
                    />
                    <input
                      placeholder="Year of Study"
                      className="input input-primary"
                    />
                  </div>
                  <button className="btn btn-primary w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Join Now
                  </button>
                </div>
              </div>{" "}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
