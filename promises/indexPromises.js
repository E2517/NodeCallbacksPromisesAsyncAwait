let programmers = [
  { id: 1, name: "Steve" },
  { id: 2, name: "Leticia" },
  { id: 3, name: "Tim" },
];

let skills = [
  { id: 1, point: 8 },
  { id: 2, point: 10 },
];

getProgrammerById = (id) => {
  return new Promise((resolve, reject) => {
    let programmer = programmers.find((programmer) => programmer.id === id);

    if (!programmer) {
      reject(`Not founded programmer with id ${id}`);
    } else {
      resolve(programmer);
    }
  });
};

getSkillsById = (programmer) => {
  return new Promise((resolve, reject) => {
    let skill = skills.find((skill) => skill.id === programmer.id);

    if (!skill) {
      reject(`Not founded skill with id ${id}`);
    } else {
      resolve({
        id: programmer.id,
        name: programmer.name,
        points: skill.point,
      });
    }
  });
};

getProgrammerById(3)
  .then((respProgrammer) => {
    console.log(respProgrammer);
    console.log(
      `Programmer: ${respProgrammer.id}, name: ${respProgrammer.name}`
    );

    return getSkillsById(respProgrammer);
  })
  .then((respSkills) => {
    console.log(respSkills);
    console.log(
      `Programmer: ${respSkills.id} , name: ${respSkills.name}, points: ${respSkills.points} `
    );
  })
  .catch((err) => {
    console.log(err);
  });
