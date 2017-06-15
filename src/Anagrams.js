/*eslint no-useless-escape: "off"*/
class Anagrams {

  constructor(val) {
    if(!(this instanceof Anagrams))
      return new Anagrams(val);
    this.data = {};
    if(val)
      this.document(val);
  }

  key(val) { // Creates anagram-unique key.
    return val.toLowerCase().split('').sort().join('');
  }

  get(val) { // Retrieve anagrams of input.
    let key = this.key(val);
    if(!this.data.hasOwnProperty(key))
      return [val];
    return Object.keys(this.data[key]);
  }

  getAll() { // Retrieves unique words as multi-dimensional array.
    let ret = [];
    for(let key in this.data)
      ret.push(Object.keys(this.data[key]));
    return ret;
  }

  set(val) { // Stores individual, unique word.
    if(!val) return;
    let key = this.key(val);
    if(!this.data.hasOwnProperty(key)) // Unique key, creates group with value.
      this.data[key] = {}, this.data[key][val] = true;
    else if(!this.data[key].hasOwnProperty(val)) // Unique word, add to group.
      this.data[key][val] = true;
  }

  document(val) { // Parses string and stores unique anagrams.
    let words = val.split(/[,;:{}\[\]\!`~'"\/\\\?<>\^#\$\@\.\+\=\-&]?\s[,;:{}\[\]\!`~'"\/\\\?<>\^#\$\@\.\+\=\-&]?|\.\s?/g);
    for(let i = 0; i < words.length; i++)
      this.set(words[i]);
  }
}

export default Anagrams

// Usage:
// let anagrams = new Anagrams();
// anagrams.document(input);
// anagrams.get(word);
