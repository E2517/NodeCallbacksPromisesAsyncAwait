let programmers = [
  { id: 1, name: "Steve" },
  { id: 2, name: "Leticia" },
  { id: 3, name: "Tim" },
];

let skills = [
  { id: 1, point: 8 },
  { id: 2, point: 10 },
];

getProgrammerById = function (id, callback) {
  let programmer = programmers.find(function (programmer) {
    return programmer.id === id;
  });

  if (!programmer) {
    callback(`Not founded programmer with id ${id}`);
  } else {
    callback(null, programmer);
  }
};

getSkillsById = function (programmer, callback) {
  let skill = skills.find(function (skill) {
    return skill.id === programmer.id;
  });

  if (!skill) {
    callback(`Not founded skill with id ${programmer.id}`);
  } else {
    callback(null, skill);
  }
};

getProgrammerById(1, function (err, respProgrammer) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Programmer: ${respProgrammer.id} , ${respProgrammer.name}`);
  }

  getSkillsById(respProgrammer, function (err, respSkill) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `Programmer: ${respProgrammer.id} , name: ${respProgrammer.name}, points: ${respSkill.point}`
      );
    }
  });
});
