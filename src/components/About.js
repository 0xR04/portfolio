const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about.png" className="w-100" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Freelancer Front-end Developer with over 3 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a Freelancer Front-end Developer with over 3 years of
                  experience. {`I'm`} from Venezuela living in Chile. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">200</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">100</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Full-Stack Developer</h6>
                  <label>YAPP | Remote | Apr 2022 - Apr 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  Full-Stack Developer, Development of features,views and components for the web app using React, Ruby on Rails, Turbo, Stimulus, Tailwind.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Teacher</h6>
                  <label>Desafio Latam | Remote | Apr 2022 - Dec 2022</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                  Teacher, HTML, CSS, Advanced CSS, Javascript,Git/Github.
                  Exams, test, class, mentoring and projects development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>4Talent | Remote | Nov 2021 - Feb 2022</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  Front-end Developer, Development, maintance and improvement of views for our users using:
                  SLIM, SASS, JS, Docker, Bootstrap, git, gitflow, React y Ruby on Rails (Proyecto 3 meses)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
