import data from "../List.json";

const Example2 = () => {
  return data.Skills.map((item) => (
    <>
      <h3>{item.Area}</h3>
      <ul>
        {item.SkillSet.map((skill) => (
          <li>{skill.Name}</li>
        ))}
      </ul>
    </>
  ));
};

export default Example2;
