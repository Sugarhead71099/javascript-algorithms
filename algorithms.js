/* Given an array of numbers 1 - 100
 * 1 num in the array is a duplicate
  * find the duplicate 'strict'
   * @params: array 
   * @return: number (-1 = no duplicates or param not an array)
*/
function findDuplicate(arr)
{
	'use strict';

	let duplicate = -1;

	if ( arr.length < 2 || !(arr instanceof Array) )
    {
		return duplicate;
	}

	let instances = {};

	for ( let index = 0; index < arr.length; index++ )
	{
		let arrValue = arr[index];

		if ( Object.values(instances).includes(arrValue) )
		{
			duplicate = arrValue;
			return duplicate;
		}

		instances[index] = arrValue;
	}

	return duplicate;
}

console.log( findDuplicate([1, 2, 3, 4, 1]) );
