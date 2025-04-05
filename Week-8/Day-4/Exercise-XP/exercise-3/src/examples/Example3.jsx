import data from "../List.json";

const Example3 = () => {
  return data.Experiences.map((experience, index) => (
    <div key={index}>
      <img src={experience.logo} alt="logo" />
      <br />
      <a href={experience.url}>{experience.companyName}</a>
      <p>
        <strong>{experience.roles[0].title}</strong>
      </p>
      <p>
        {experience.roles[0].startDate} {experience.roles[0].location}
      </p>
      <p>{experience.roles[0].description}</p>
    </div>
  ));
};

export default Example3;
