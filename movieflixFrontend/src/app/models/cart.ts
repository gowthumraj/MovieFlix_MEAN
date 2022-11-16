export class Cart {

    constructor(
        public userId: string,
        public movieId: string,
        public theatreId: String,
        public seats_booked: number,
        public totalPrice: number
      ) { }
    }