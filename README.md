# Introduction
An application that displays a list of words and it's anagrams.  The list is seeded from sampleData.js but you can add your own words by entering a sentence at the bottom of the screen and hit ```Save```.

You can access the application [here](https://mvilrokx.github.io/anagrams/)

# Usage
Initially the list gets initialized with words from the ```src/sampleData.js``` file.  The app will split the words in each sentence and then check if there are any anagrams amongst those words.  If anagrams are found, they are grouped together and you can see them by clicking on a word.  This will reveal the anagrams of that word.

You can add additional words by using the form at the bottom of the list.  Just enter a sentence, we will split the words and verify if there are any anagrams and update the list.

We also provided filter/search functionlity.  This can be activated by entering letter in the input at the top of the screen.  As you enter, the list will change, only revealing words that match your filter (i.e. words that ```contain``` the filter word.) 
