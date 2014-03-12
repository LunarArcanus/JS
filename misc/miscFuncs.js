// Similar to Python's translation tables. Replaces elements in a
// sequence (key) with corresponding values from a "hashtable" (i.e an object)
// The "inclusive" parameter is a boolean value; it can either discard or leave
// keys without a value unchanged.
function translate(sequence, hashtable, inclusive)
{
	var translation = "";
	var value;
	var elem;
	switch (inclusive)
	{
		case true:
			for (elem in sequence)
			{
				value = hashtable[sequence[elem]];
				if (value == undefined)
					value = sequence[elem];
				translation += value;
			}
			break;
		case false:
			for (elem in sequence)
			{
				value = hashtable[sequence[elem]];
				if (value == undefined)
					value = "";
				translation += value;
			}
	}
	return translation;
}

// Calculates a random integer in range 0...n (inclusive)
function randInt(n)
{
	return Math.round(Math.random() * n);
}
// Selects a random element from a sequence
function randomChoice(sequence)
{
	return sequence[randInt(sequence.length-1)]; // Index = 0
}
