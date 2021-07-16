const MIN_BID_AMOUNT = 1000;

export const validator = (name, value) => {
    switch (name) {
        case 'campaign_name':
            if (!value) {
                return 'This field is mandatory';
            }
            break;

        case 'keywords':
            if (!value) {
                return 'This field is mandatory';
            }
            break;

        case 'campaign_fund':
            if (!value) {
                return 'This field is mandatory';
            }
            break;

        case 'radius':
            if (!value) {
                return 'This field is mandatory';
            }
            break;

        case 'bid_amount':
            if (value < MIN_BID_AMOUNT) {
                return 'The min amount is $1000';
            }
            break;

        default:
            break;
    }
}