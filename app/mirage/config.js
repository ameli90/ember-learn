export default function() {

	this.get('/posts/1', function() {
		return {
			data: {
				type: 'post',
				id: 1,
				attributes: {
					name: 'post textttt 1'
				},
				relationships: {
					comments: {
						data: [{
							id: 1,
							type: 'comment'
						}]
					}
				}
			}
		};
	});

	this.get('/comments/1', function () {
		return {
			data: {
				type: 'comment',
				id: 1,
				attributes: {
					name: 'comment text 11111'
				},
				relationships: {
					comments: {
						data: [{
							id: 2,
							type: 'comment'
						}]
					}
				}
			}
		};
	});

	this.get('/comments/2', function() {
		return {
			data: {
				type: 'comment',
				id: 2,
				attributes: {
					name: 'comment text 2'
				},
				relationships: {
					comments: {
						data: [{
							id: 3,
							type: 'comment'
						}]
					}
				}
			}
		};
	});

	this.get('/comments/3', function() {
		return {
			data: {
				type: 'comment',
				id: 3,
				attributes: {
					name: 'comment text 3'
				},
				relationships: {
					comments: {
						data: []
					}
				}
			}
		};
	});

	this.get('/rentals', function(db, request) {
		let rentals = [{
			type: 'rentals',
			id: 1,
			attributes: {
				title: 'Grand Old Mansion',
				owner: 'Veruca Salt',
				city: 'San Francisco',
				type: 'Estate',
				bedrooms: 15,
				image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
			}
		}, {
			type: 'rentals',
			id: 2,
			attributes: {
				title: 'Urban Living',
				owner: 'Mike Teavee',
				city: 'Seattle',
				type: 'Condo',
				bedrooms: 1,
				image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
			}
		}, {
			type: 'rentals',
			id: 3,
			attributes: {
				title: 'Downtown Charm',
				owner: 'Violet Beauregarde',
				city: 'Portland',
				type: 'Apartment',
				bedrooms: 3,
				image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
			}
		}];

		if(request.queryParams.city !== undefined) {
			let filteredRentals = rentals.filter(function(i) {
				return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
			});
			return { data: filteredRentals };
		} else {
			return { data: rentals };
		}
	});
}