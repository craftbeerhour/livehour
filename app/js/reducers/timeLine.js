
const initalState = [
    {
        text: 'some tweet with text #firsttweetyo ',
        userName: 'tomwilderspin',
        timeStamp: 'Sun Feb 28 08:40:30 +0000 2016',
        offsetTime: new Date().now
    }
];

//to handle timeline actions
export default function timeLine(state = initalState, action) {
    switch (action.type) {
        case 'UPDATE_TWEET_TIME':
            return state.map((item) => {
                return Object.assign({}, item, {offsetTime: action.NewTime})
            });
        default:
            return state;
    }
}