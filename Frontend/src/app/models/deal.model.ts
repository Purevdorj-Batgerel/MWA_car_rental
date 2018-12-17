export interface IDeal {
    tittle: string,
    username: string,
    dealtype: string,
    fromlocation: {
        locationname: string,
        coordinate: {
            x: number,
            y: number
        }
    },
    tolocation: {
        locationname: string,
        coordinate: {
            x: number,
            y: number
        }
    }
    departureDate: Date,
    bids: [{
        diverID: string,
        driverName: string,
        offerCost: number,
        biddingDate: Date,
        isConfirmed: boolean
    }],
    status: String,
    createdDate: Date
}