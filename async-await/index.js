let programmers = [
  { id: 1, name: "Steve" },
  { id: 2, name: "Leticia" },
  { id: 3, name: "Tim" },
];

let skills = [
  { id: 1, point: 8 },
  { id: 2, point: 10 },
];

getProgrammerById = async (id) => {
  let programmer = programmers.find((programmer) => programmer.id === id);

  if (!programmer) {
    throw new Error(`Not founded programmer with id ${id}`);
  } else {
    return programmer;
  }
};

getSkillsById = (programmer) => {
  let skill = skills.find((skill) => skill.id === programmer.id);

  if (!skill) {
    throw new Error(`Not founded skills with name ${programmer.name}`);
  } else {
    return {
      id: programmer.id,
      name: programmer.name,
      points: skill.point,
    };
  }
};

getData = async (id) => {
  let programmerDB = await getProgrammerById(id);
  let skillsDB = await getSkillsById(programmerDB);

  console.log(
    `Programer: ${programmerDB.id}, name: ${programmerDB.name}, points: ${skillsDB.points}`
  );
  console.log(
    `Programer: ${skillsDB.id}, name: ${skillsDB.name}, points: ${skillsDB.points}`
  );
};

getData(2).catch((err) => {
  console.log(err);
});
