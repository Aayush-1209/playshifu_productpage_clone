import './Features.css';

const Features = () => {
  const features = [
    { icon: 'brain', title: 'STEM' },
    { icon: 'gamepad', title: 'Games' },
    { icon: 'mobile-alt', title: 'App-Enabled' },
    { icon: 'child', title: 'Ages 4-10' }
  ];

  return (
    <div className="container">
      <div className="features-section">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-3">
              <div className="feature-icon">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <div className="feature-title">{feature.title}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <p className="small mb-0">* Free in-app games with compatible tablets</p>
        </div>
      </div>
    </div>
  );
};

export default Features;