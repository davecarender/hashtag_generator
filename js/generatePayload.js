

const getRandom = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const generatePayload = (permLength, mtgLength, artLength, etsyLength) => {
  const hashtagsArray = [];

  const perm = getRandom(permHashtags, permLength);
  const mtg = getRandom(mtgHashtags, mtgLength);
  const art = getRandom(artHashtags, artLength);
  const etsy = getRandom(etsyHashtags, etsyLength);

  hashtagsArray.push([...perm, ...mtg, ...art, ...etsy]);

  const hashString = [...hashtagsArray].toString().replaceAll(',', ' ');

  return hashString;
};

