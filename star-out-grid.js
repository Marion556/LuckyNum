function getAllStarCoordinates(grid) {
	let coordArr = [];
	let numRows = grid.length;
	let numCols = grid[0].length;

	for (let x = 0; x < numRows; x++) {
		for (let y = 0; y < numCols; y++) {
			if (grid[x][y] === '*') {
				coordArr.push([x, y]);
			}
		}
	}
	return coordArr;
}

function starOutGrid(grid) {
	let numRows = grid.length;
	let numCols = grid[0].length;
	let coords = getAllStarCoordinates(grid);

	for (let coord of coords) {
		for (let x = 0; x < numRows; x++) {
			for (let y = 0; y < numCols; y++) {
				if (x === coord[0] || y === coord[1]) {
					grid[x][y] = '*';
				}
			}
		}
	}
	return grid;
}