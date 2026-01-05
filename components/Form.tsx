import React from 'react'

const Form = () => {
  return (
<>
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="font-serif text-4xl md:text-5xl font-semibold  mb-4">
            Join us now 
          </h3>

          
          <div className="bg-background rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input placeholder="Full Name" className="input input-bordered" />
              <input placeholder="Email" type="email" className="input input-bordered" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input placeholder="Phone Number" className="input input-primary" />
              <input placeholder="HU ID No." className="input input-primary" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <input placeholder="Faculty/Department" className="input input-primary" />
              <input placeholder="Year of Study" className="input input-primary" />
            </div>
            <button className="btn btn-primary w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Join Now
            </button>
          </div>
        </div>
</>  )
}

export default Form