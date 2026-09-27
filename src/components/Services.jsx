const services = [
    {
      title: "Data Analysis",
      description:
        "Analyzing datasets to identify trends, patterns and actionable insights.",
    },
    {
      title: "Data Visualization",
      description:
        "Creating clear dashboards and visual reports that make data easier to understand.",
    },
    {
      title: "Web Development",
      description:
        "Building responsive and modern applications using React and JavaScript technologies.",
    },
  ];
  
  export default function Services() {
    return (
      <section className="py-28 px-6">
  
        <div className="max-w-6xl mx-auto">
  
          <p className="text-blue-400 mb-3">
            05 — What I Do
          </p>
  
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">expertise.</span>
          </h2>
  
          <div className="grid md:grid-cols-3 gap-5 mt-12">
  
            {services.map((service, index) => (
  
              <div
                key={service.title}
                className="glass rounded-2xl p-7 hover:-translate-y-2 transition duration-300"
              >
  
                <div className="text-blue-500 text-sm mb-8">
                  0{index + 1}
                </div>
  
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
  
                <p className="text-gray-400 leading-7 mt-4">
                  {service.description}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }