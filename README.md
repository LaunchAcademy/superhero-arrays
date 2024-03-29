### Introduction

Superheros Assemble!

We have assembled some of the greatest superhero teams, but they need some help in order to function properly.

### Instructions

You are given a few arrays of superhero teams. Utilize your array searching and function skills to answer the questions below, so the code in `main.js` can run smoothly! There are also some statements at the bottom of `main.js` which will be erroring out right now and that's ok! We will be writing the functions to get those working too a little later.

1. The teams are ready and waiting! This first mission is going to require the team with the most members. Finish the function called `biggestTeam` that will take in an argument of a 2d array of teams and determine which team is the biggest. It should then return an array of that team and all of it's members.

    ```JavaScript
    console.log("The biggest team is: ", biggestTeam(teams))
    // => ["Professor X", "Cyclops", "Storm", "Wolverine", "Beast","Iceman", "Jean Grey"]
    ```

2. The Guardians of the galaxy have been summoned on a mission! They are going to need to be split into two squads however. Write a function called `createSquads` that will take in a team array as an argument and return a 2D array containing a `squad1` and `squad2`. If there is an uneven amount of team members, squad one should contain the extra member. For example with `guardiansOfTheGalaxy`, `squad1` should contain 3 members and `squad2` should contain 2. You can decide on the makeup of the teams.

    ```JavaScript
    console.log("Squad 1: ", guardianSquads[0])
    // => ["Star Lord", "Gamora", "Drax"]
    console.log("Squad 2: ", guardianSquads[1])
    // => [ "Rocket Racoon", "Groot"]
    ```

3. There will be a summit requiring the leaders of each team to meet. Write a `summonLeaders` function that will take in an array of teams and return a new array containing the leaders from each team. The leader of a team is the first member in that respective teams array. For example, `Iron Man` is the leader of `avengers`.

    ```JavaScript
    console.log("The leaders array: ", summonLeaders(teams))
    // => ["Iron Man", "Superman", "Professor X", "Star Lord"]
    ```

4. The `avengers` have been summoned on a mission, so `justiceLeague` is now the next group up in the rotation. Write a `rotateTeams` function which will move the team from the front of the `teams` array, to the end of it. `justiceLeague` should now be the first team in the `teams` array and the `avengers` should be the last.

5. Create an `amountOfTeamMembers` function. This function should take in a team as an argument and return an integer representing the number of team members of the provided team.

    ```JavaScript
    console.log(
      "The Justice League have",
      amountOfTeamMembers(justiceLeague),
      "members"
    )
    // The Justice League have 6 members
    console.log("The X-men have", amountOfTeamMembers(xmen), "members")
    // The X-men have 7 members
    ```

6. We also need to know how many superheros there are in total. Again we will need to create the function to get this working. It should return `23` which is the total count of all superheroes.

    ```JavaScript
    console.log("Total superhero count:", totalAmountOfSuperheroes(teams))
    // Total superhero count: 23
    ```

7. Sometimes we will need to pair superheroes from different teams. Write a function, `specialMissionPair`, that will take in 2 arrays, each representing a different superhero team, and return a new array containing a team made up of one hero from the first array and one hero from the second array. To keep thing's fair let's make sure that both heroes are being chosen at random. For example:

    ```JavaScript
    console.log(
      "The new mission pair from xmen and avengers is: ",
      specialMissionPair(xmen, avengers)
    )
    // => ["Storm", "Hulk"]
    // => ["Cyclops", "Thor"]
    ```
