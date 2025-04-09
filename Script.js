'use strict';

function printedSong() {
    console.log("A well a everybody's heard about the bird\n");
    console.log("B-b-b bird, bird, bird, b-bird's the word \n");
    console.log("A well a bird, bird, bird, the bird is the word\n");
    console.log("A well a bird, bird, bird, well the bird is the word \n");

    console.log("A well a bird, bird, bird, b-bird's the word, \n");
    console.log("A well a bird, bird, bird, well the bird is the word \n");

    console.log("A well a bird, bird, b-bird's the word, \n");
    console.log("A well a bird, bird, bird, b-bird's the word \n");

    console.log("A well a bird, bird, bird, well the bird is the word \n");

    console.log("A well a bird, bird, b-bird's the word, \n");
    console.log("A well a don't you know about the bird? \n");
    console.log("Well, everybody knows that the bird is the word! \n");
    console.log("A well a bird, bird, b-bird's the word \n");
    console.log("A well a bird\n");

     console.log("Surfin' bird \n");
         console.log("Well, everybody knows that the bird is the word! \n");
}function refrain() {
    console.log("B-b-b bird, bird, bird, b-bird's the word,");
    console.log("A well a bird, bird, bird, the bird is the word,");
}

function song() {
    refrain();
    console.log("A well a don't you know about the bird?");
    console.log("Well, everybody knows that the bird is the word!");
    refrain();
}

song();

function refactoredRefrain() {
    return "A well a everybody's heard about the bird, \nB-b-b bird, bird, bird, b-bird's the word";
}

function refactoredSong() {
    console.log(refrain());
    console.log("A well a don't you know about the bird?");
    console.log("Well, everybody knows that the bird is the word!");
    console.log(refrain());
}

refactoredSong();