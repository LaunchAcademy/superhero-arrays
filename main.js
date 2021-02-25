const avengers = ["Iron Man", "Captain America", "Hulk", "Thor", "Black Widow"]

const xmen = [
  "Professor X",
  "Cyclops",
  "Storm",
  "Wolverine",
  "Beast",
  "Iceman",
  "Jean Grey"
]

const justiceLeague = [
  "Superman",
  "Batman",
  "Wonder Woman",
  "Aquaman",
  "The Flash",
  "Green Lantern"
]

const guardiansOfTheGalaxy = [
  "Star Lord",
  "Gamora",
  "Drax",
  "Rocket Racoon",
  "Groot"
]

const teams = [avengers, justiceLeague, xmen, guardiansOfTheGalaxy]

console.log(
  "The Justice League have",
  amountOfTeamMembers(justiceLeague),
  "members"
)
// The Justice League have 6 members
console.log("The X-men have", amountOfTeamMembers(xmen), "members")
// The X-men have 7 members

console.log("Total superhero count:", totalAmountOfSuperheroes(teams))
// Total superhero count: 23
