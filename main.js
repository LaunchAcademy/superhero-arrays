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

// 1.
const biggestTeam = (teamsArray) => {}

console.log("The biggest team is: ", biggestTeam(teams))
// => ["Professor X", "Cyclops", "Storm", "Wolverine", "Beast","Iceman", "Jean Grey"]

// 2.
const guardianSquads = createSquads(guardiansOfTheGalaxy)

console.log("Squad 1: ", guardianSquads[0])
// => ["Star Lord", "Gamora", "Drax"]
console.log("Squad 2: ", guardianSquads[1])
// => [ "Rocket Racoon", "Groot"]

// 3.
console.log("The leaders array: ", summonLeaders(teams))
// => ["Iron Man", "Superman", "Professor X", "Star Lord"]

// 4.
console.log("The current teams order: ", teams)
rotateTeams()
console.log("The new teams order after rotation: ", teams)

// 5.
console.log(
  "The Justice League have",
  amountOfTeamMembers(justiceLeague),
  "members"
)
// The Justice League have 6 members
console.log("The X-men have", amountOfTeamMembers(xmen), "members")
// The X-men have 7 members

// 6.
console.log("Total superhero count:", totalAmountOfSuperheroes(teams))
// Total superhero count: 23

// 7.

console.log(
  "The new mission pair from xmen and avengers is: ",
  specialMissionPair(xmen, avengers)
)
// => ["Storm", "Hulk"]
// => ["Cyclops", "Thor"]
